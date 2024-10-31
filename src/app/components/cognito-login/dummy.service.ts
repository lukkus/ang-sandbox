import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import base64url from 'base64url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  private CLIENT_ID = '198mdbcs0rte6e25n3tkujtm2c';
  private RESPONSE_TYPE = 'code';
  private REDIRECT_URI = encodeURIComponent('https://localhost:44339');
  private SCOPE = 'openid';
  private AUTH_DOMAIN = 'lukasz-poc.auth.eu-west-1.amazoncognito.com';
  private USERNAME = 'pingowanko+test@gmail.com';
  private PASSWORD = 'Noname555.';
  private CODE_CHALLENGE_METHOD = 'S256';

  constructor(private http: HttpClient) {}

  generateCodeVerifier(): string {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._`-';
    let text = '';

    for (let i = 0; i < 64; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    // Use `btoa` to encode the string to base64
    const base64 = btoa(text);

    // Replace characters to make it base64url compliant
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  generateCodeVerifierHash(codeVerifier: string): string {
    return CryptoJS.HmacSHA256(codeVerifier, codeVerifier).toString(
      CryptoJS.enc.Base64
    );
  }

  // Start the authentication flow
  startAuthFlow(): Observable<any> {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = this.generateCodeVerifierHash(codeVerifier);

    const csrfRequestUrl = `https://${this.AUTH_DOMAIN}/oauth2/authorize?response_type=${this.RESPONSE_TYPE}&client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&scope=${this.SCOPE}&code_challenge_method=${this.CODE_CHALLENGE_METHOD}&code_challenge=${codeChallenge}`;
    console.log('1');
    return this.http.get(csrfRequestUrl, {
      observe: 'response',
      withCredentials: true,
    });
  }

  loginWithCsrfToken(XSRF_TOKEN: string): Observable<any> {
    const codeRequestUrl = `https://${this.AUTH_DOMAIN}/login?response_type=${this.RESPONSE_TYPE}&client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}`;

    const formData = new URLSearchParams();
    formData.set('_csrf', XSRF_TOKEN);
    formData.set('username', this.USERNAME);
    formData.set('password', this.PASSWORD);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: `XSRF-TOKEN=${XSRF_TOKEN}`,
    });

    return this.http.post(codeRequestUrl, formData.toString(), {
      headers,
      observe: 'response',
      withCredentials: true,
    });
  }
}
