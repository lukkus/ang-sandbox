import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { TrackByComponent } from './components/track-by/track-by.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';
import { RwdComponent } from './components/rwd/rwd.component';
import { PwaComponent } from './components/pwa/pwa.component';
import { TestingComponent } from './components/testing/testing.component';
import { OthersComponent } from './components/others/others.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackedItemComponent } from './components/track-by/tracked-item/tracked-item.component';
import { RightContainerComponent } from './components/change-detection/right-container/right-container.component';
import { LeftContainerComponent } from './components/change-detection/left-container/left-container.component';
import { RightFirstComponent } from './components/change-detection/right-container/right-first/right-first.component';
import { RightSecondComponent } from './components/change-detection/right-container/right-second/right-second.component';
import { LeftSecondComponent } from './components/change-detection/left-container/left-second/left-second.component';
import { LeftFirstComponent } from './components/change-detection/left-container/left-first/left-first.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChildComponentComponent } from './components/reactive-programming/child-component/child-component.component';
import { LifecyclesComponent } from './components/lifecycles/lifecycles.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ElementListComponent } from './components/reactive-programming/element-list/element-list.component';
import { ElementListItemComponent } from './components/rwd/element-list-item/element-list-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WebSocketsComponent } from './components/web-sockets/web-sockets.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignalrComponent } from './components/signalr/signalr.component';
import { CookieService } from 'ngx-cookie-service';
import { CognitoLoginComponent } from './components/cognito-login/cognito-login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TrackByComponent,
    ChangeDetectionComponent,
    ReactiveProgrammingComponent,
    RwdComponent,
    PwaComponent,
    TestingComponent,
    OthersComponent,
    HomeComponent,
    TrackedItemComponent,
    RightContainerComponent,
    LeftContainerComponent,
    RightFirstComponent,
    RightSecondComponent,
    LeftSecondComponent,
    LeftFirstComponent,
    ChildComponentComponent,
    LifecyclesComponent,
    SubjectsComponent,
    SignalsComponent,
    ElementListComponent,
    ElementListItemComponent,
    WebSocketsComponent,
    SignalrComponent,
    CognitoLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
