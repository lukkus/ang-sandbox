import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  ICognitoUserPoolData,
} from 'amazon-cognito-identity-js';
import { Signin } from './models/signin.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, from, BehaviorSubject } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  private clientId = '198mdbcs0rte6e25n3tkujtm2c';
  private userPool: CognitoUserPool;

  private poolData: ICognitoUserPoolData = {
    UserPoolId: 'eu-west-1_m84SDymE4',
    ClientId: this.clientId,
    AdvancedSecurityDataCollectionFlag: true,
  };

  // BehaviorSubject to track authentication state
  private authStateSubject: BehaviorSubject<boolean>;
  public authState$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.userPool = new CognitoUserPool(this.poolData);

    this.authStateSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());
    this.authState$ = this.authStateSubject.asObservable();
  }

  /**
   * Centralized method to get the current CognitoUser and their session.
   * Returns an Observable that emits an object containing the user and session.
   */
  private getCurrentUserSession(): Observable<{ user: CognitoUser; session: CognitoUserSession }> {
    return new Observable(observer => {

      const currentUser = this.userPool.getCurrentUser();

      if (!currentUser) {
        observer.error('No user is currently signed in.');
        return;
      }

      currentUser.getSession((err: any, session: CognitoUserSession) => {
        if (err) {
          observer.error(err);
          return;
        }

        if (!session.isValid()) {
          observer.error('Session is invalid.');
          return;
        }

        observer.next({ user: currentUser, session });
        observer.complete();
      });
    });
  }

  /**
   * Handles user login with provided credentials.
   * On successful authentication, you can redirect the user or perform other actions.
   */
  login(signin: Signin, callbackUrl: string): Observable<CognitoUserSession> {
    return new Observable(observer => {
      const authenticationDetails = new AuthenticationDetails({
        Username: signin.username,
        Password: signin.password,
      });

      const userData = { Username: signin.username, Pool: this.userPool };
      const cognitoUser = new CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result: CognitoUserSession) => {
          console.log('Authentication successful:', result);
          this.authStateSubject.next(true);
          observer.next(result);
          observer.complete();

          // Uncomment the desired redirect method
          // this.redirectToWebFormsApp0410(result, callbackUrl);
          // this.redirectToWebFormsApp(result, callbackUrl);
          // this.redirectToWebFormsAppSigninOidc(result);
        },
        totpRequired: () => {
          const code = prompt('Type the MFA code here') || '';
          cognitoUser.sendMFACode(
            code,
            {
              onSuccess: () => {
                console.log('MFA Code sent successfully.');
                cognitoUser.setDeviceStatusRemembered({
                  onSuccess: () => {
                    console.log('Device status remembered successfully.');
                  },
                  onFailure: (err) => {
                    console.error('Failed to remember device status:', err);
                  },
                });
              },
              onFailure: (err) => {
                console.error('Failed to send MFA Code:', err);
                observer.error(err);
              },
            },
            'SOFTWARE_TOKEN_MFA'
          );
        },
        onFailure: (err: any) => {
          console.error('Authentication failed:', err);
          observer.error(err);
        },
      });
    });
  }

  /**
   * Redirects to the Web Forms application with tokens.
   */
  redirectToWebFormsApp0410(session: CognitoUserSession, returnUrl: string) {
    const idToken = session.getIdToken().getJwtToken();
    window.location.href = `https://localhost:44350?token=${idToken}`;
  }

  /**
   * Another method to redirect to the Web Forms application with tokens.
   */
  redirectToWebFormsApp(session: CognitoUserSession, returnUrl: string) {
    console.log('Redirecting to:', returnUrl);
    const url = returnUrl
      ? `https://localhost:44350/LoginCallback.aspx?returnUrl=${encodeURIComponent(returnUrl)}`
      : `https://localhost:44350/LoginCallback.aspx`;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url; // Replace with your Web Forms app URL

    // Append ID Token
    const idTokenInput = document.createElement('input');
    idTokenInput.type = 'hidden';
    idTokenInput.name = 'id_token';
    idTokenInput.value = session.getIdToken().getJwtToken();
    form.appendChild(idTokenInput);

    // Append Access Token
    const accessTokenInput = document.createElement('input');
    accessTokenInput.type = 'hidden';
    accessTokenInput.name = 'access_token';
    accessTokenInput.value = session.getAccessToken().getJwtToken();
    form.appendChild(accessTokenInput);

    // Append Refresh Token
    const refreshTokenInput = document.createElement('input');
    refreshTokenInput.type = 'hidden';
    refreshTokenInput.name = 'refresh_token';
    refreshTokenInput.value = session.getRefreshToken().getToken();
    form.appendChild(refreshTokenInput);

    document.body.appendChild(form);
    form.submit();
  }

  /**
   * Redirects to the Web Forms application using OIDC.
   */
  redirectToWebFormsAppSigninOidc(session: CognitoUserSession): void {
    const idToken = session.getIdToken().getJwtToken();
    const accessToken = session.getAccessToken().getJwtToken();
    const redirectUri = 'https://localhost:44350/signin-oidc.aspx';

    window.location.href = `${redirectUri}?id_token=${idToken}&access_token=${accessToken}`;
  }

  /**
   * Refreshes the current session using the refresh token.
   */
  refreshToken(): Observable<void> {
    return this.getCurrentUserSession().pipe(
      switchMap(({ user, session }) => {
        return new Observable<void>((observer) => {
          const refreshToken = session.getRefreshToken();
          user.refreshSession(refreshToken, (err: any, newSession: CognitoUserSession) => {
            if (err) {
              console.error('Error refreshing session:', err);
              observer.error(err);
              return;
            }

            console.log('New session obtained:', newSession);
            const accessToken = newSession.getAccessToken().getJwtToken();
            const refreshedRefreshToken = newSession.getRefreshToken().getToken();
            console.log('New Access Token:', accessToken);
            console.log('New Refresh Token:', refreshedRefreshToken);

            observer.next();
            observer.complete();
          });
        });
      }),
      catchError(err => {
        console.error('Failed to refresh token:', err);
        return throwError(err);
      })
    );
  }

  /**
   * Revokes the refresh token, effectively preventing future token refreshes.
   */
  revokeToken(): Observable<void> {
    return this.getCurrentUserSession().pipe(
      switchMap(({ user, session }) => {
        const refreshToken = session.getRefreshToken().getToken();
        return this.callOAuthRevokeEndpoint(refreshToken);

        // return this.signOut().pipe(
        //   switchMap(() => {
        //     // After revoking the token, sign out the user
        //     return this.callOAuthRevokeEndpoint(refreshToken)
        //   })
        // );
      }),
      catchError(err => {
        console.error('Failed to revoke token:', err);
        return throwError(err);
      })
    );
  }

  /**
   * Calls the OAuth2 revoke endpoint to revoke a given token.
   */
  private callOAuthRevokeEndpoint(token: string): Observable<any> {
    const revokeTokenUrl = 'https://lukasz-poc.auth.eu-west-1.amazoncognito.com/oauth2/revoke';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // If your client has a secret, include the Authorization header
      // 'Authorization': `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`
    });

    const body = new URLSearchParams();
    body.set('token', token);
    body.set('client_id', this.clientId);
    // If using client secret, uncomment the following line
    // body.set('client_secret', this.clientSecret);

    return this.http.post(revokeTokenUrl, body.toString(), { headers }).pipe(
      map(response => {
        console.log('Token successfully revoked:', response);
        return response;
      }),
      catchError(err => {
        console.error('Error revoking token:', err);
        return throwError(err); 1886
      })
    );
  }

  /**
   * Checks if the current session is valid.
   * Returns an Observable that emits a boolean indicating validity.
   */
  isValid(): Observable<boolean> {
    return this.getCurrentUserSession().pipe(
      map(({ session }) => {
        const isValid = session.isValid();
        console.log('is session Valid: ', isValid);
        return isValid;
      }),
      catchError(err => {
        console.error('Session is not valid:', err);
        return of(false);
      })
    );
  }

  listDevices(): Observable<any> {
    return this.getCurrentUserSession().pipe(
      map(({ session, user }) => {
        console.log('user: ', user)
        user.listDevices(20, null, {
          onSuccess(data) {
            console.log('data: ', data)
            return of(data);
          },
          onFailure(err) {
            console.log('err: ', err)
          },
        })
      }),
      catchError(err => {
        console.error('Session is not valid:', err);
        return of(false);
      })
    );
  }

  globalSignOut() {

  }

  /**
   * Retrieves the current user's username.
   * Returns null if no user is logged in.
   */
  getCurrentUser(): string | null {
    const currentUser = this.userPool.getCurrentUser();
    if (currentUser) {
      console.log('User is logged in:', currentUser.getUsername());
      return currentUser.getUsername();
    } else {
      console.log('No user is logged in.');
      return null;
    }
  }

  /**
   * Signs out the current user, invalidating the session on the client.
   */
  signOut(): Observable<void> {
    return this.getCurrentUserSession().pipe(
      switchMap(({ user }) => {
        return new Observable<void>((observer) => {
          user.globalSignOut({
            onSuccess: (msg) => {
              console.log('Global sign-out successful:', msg);
              user.signOut(); // Ensures the user is signed out on the client
              this.authStateSubject.next(false);
              observer.next();
              observer.complete();
            },
            onFailure: (err) => {
              console.error('Global sign-out failed:', err);
              observer.error(err);
            },
          });
        });
      }),
      catchError(err => {
        console.error('Error during sign out:', err);
        return throwError(err);
      })
    );
  }

  /**
   * Signs out the current user without global sign-out.
   * This method only clears the session on the client side.
   */
  logout(): Observable<void> {
    const currentUser = this.userPool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
      this.authStateSubject.next(false);
      return of();
    } else {
      console.log('No user to log out.');
      return of();
    }
  }

  /**
   * Determines if a user is logged in based on the presence of a current user.
   */
  private isUserLoggedIn(): boolean {
    const currentUser = this.userPool.getCurrentUser();
    return !!currentUser;
  }
}

interface LoginRequestBody {
  id_token: string;
}
