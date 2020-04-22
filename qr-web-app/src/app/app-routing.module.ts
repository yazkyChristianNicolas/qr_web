import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CodesComponent } from 'src/app/codes/codes/codes.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { NewCodeComponent } from './codes/new-code/new-code.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'notifications', pathMatch: 'full'},
      {path: 'codes', component: CodesComponent},
      {path: 'codes/new', component: NewCodeComponent},
      {path: 'notifications', component: NotificationsComponent},
      { path: 'settings',  component: SettingsComponent},
    ]
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
