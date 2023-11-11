import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { OthersComponent } from './components/others/others.component';
import { PwaComponent } from './components/pwa/pwa.component';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';
import { RwdComponent } from './components/rwd/rwd.component';
import { TestingComponent } from './components/testing/testing.component';
import { TrackByComponent } from './components/track-by/track-by.component';
import { LifecyclesComponent } from './components/lifecycles/lifecycles.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'track-by', component: TrackByComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'reactive', component: ReactiveProgrammingComponent },
  { path: 'rwd', component: RwdComponent },
  { path: 'lifecycles', component: LifecyclesComponent },
  { path: 'pwa', component: PwaComponent },
  { path: 'others', component: OthersComponent, outlet: 'sidebar' },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'tests', component: TestingComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
