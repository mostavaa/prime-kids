import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailyReportPage } from './daily-report.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: DailyReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule.forChild(routes),
      SharedModule
  ],
  declarations: [DailyReportPage]
})
export class DailyReportPageModule {}
