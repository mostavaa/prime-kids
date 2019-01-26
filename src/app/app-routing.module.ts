import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'kids', pathMatch: 'full' },
  { path: 'kids', loadChildren: './kids/kids.module#KidsPageModule' },
  { path: 'daily-report', loadChildren: './daily-report/daily-report.module#DailyReportPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
