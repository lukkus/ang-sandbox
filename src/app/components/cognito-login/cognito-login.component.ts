import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninForm } from './models/signin-form.model';
import { CognitoService } from './cognito.service';
import { Signin } from './models/signin.model';
import { ActivatedRoute } from '@angular/router';
import { DummyService } from './dummy.service';

declare var AmazonCognitoAdvancedSecurityData: any;

@Component({
  selector: 'app-cognito-login',
  templateUrl: './cognito-login.component.html',
  styleUrls: ['./cognito-login.component.scss']
})
export class CognitoLoginComponent implements OnInit {
  form: FormGroup<SigninForm> = this.getForm()
  currentUser: string | null;
  isAuthenticated: boolean = false;
  callbackUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private cognitoService: CognitoService,
    private route: ActivatedRoute,
    private dummyService: DummyService
  ) {}

  ngOnInit(): void {
    this.cognitoService.authState$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    })
    //this.currentUser = this.cognitoService.getCurrentUser();
    this.route.queryParams.subscribe(params => {
      this.callbackUrl = params['returnUrl'] ?? "";
    })
  }

  onSubmit(): void {
    const asfData = AmazonCognitoAdvancedSecurityData.getData('pingowanko+test@gmail.com', '', '198mdbcs0rte6e25n3tkujtm2c');
    //console.log("asfData: ", asfData);
    // console.log('submit: ', this.form.value);
    const signinModel: Signin = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
      clientId: ''
    };

    this.cognitoService.login(signinModel, this.callbackUrl).subscribe();
  }

  onLogOut(): void {
    this.cognitoService.logout().subscribe();
  }

  private getForm(): FormGroup<SigninForm> {
    return new FormGroup<SigninForm>({
      username: new FormControl<string>(
        'pingowanko@gmail.com',
        {nonNullable: true, validators: [Validators.required]}
      ),
      password: new FormControl<string>(
        'Noname555.',
        {nonNullable: true, validators: [Validators.required]}
      )
    })
  }

  dummyLogin() {
    this.dummyService.startAuthFlow().subscribe({
      next: (response) => {
        console.log("startAuthFlow response: ", response);
        const xsrfToken = this.extractXSRFToken(response.headers);

        if (xsrfToken) {
          // Step 3: Log in using the CSRF token and user credentials
          this.dummyService.loginWithCsrfToken(xsrfToken).subscribe({
            next: (loginResponse) => {
              console.log('loginResponse: ', loginResponse);
              // Step 4: Handle the login response and get the authorization code
              const authorizationCode = this.extractAuthorizationCode(loginResponse);
              console.log('authorizationCode: ', authorizationCode);
              if (authorizationCode) {
                // Redirect to the desired route with the authorization code
                //this.router.navigate(['/home'], { queryParams: { code: authorizationCode } });
              }
            },
            error: (error) => {
              console.error('Login failed:', error);
            }
          });
        } else {
          console.error('XSRF token not found');
        }
      },
      error: (error) => {
        console.error('Failed to start auth flow:', error);
      }
    })
  }

  refreshToken() {
    this.cognitoService.refreshToken().subscribe();
  }

  revokeToken() {
    this.cognitoService.revokeToken().subscribe();
  }

  isValid() {
    this.cognitoService.isValid().subscribe();
  }

  listDevices() {
    this.cognitoService.listDevices().subscribe(x => console.log('Devices: ', x));
  }

  globalSignOut() {
    this.cognitoService.globalSignOut();
  }

  private extractXSRFToken(headers: any): string {
    const cookies = headers.get('set-cookie') || [];
    const xsrfTokenCookie = cookies.find((cookie: string) => cookie.startsWith('XSRF-TOKEN='));
    return xsrfTokenCookie ? xsrfTokenCookie.split('=')[1].split(';')[0] : '';
  }

  // Helper function to extract the authorization code from the response
  private extractAuthorizationCode(response: any): string | null {
    const locationHeader = response.headers.get('location');
    return locationHeader ? new URL(locationHeader).searchParams.get('code') : '';
  }
}
