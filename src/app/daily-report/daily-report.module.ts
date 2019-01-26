import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailyReportPage } from './daily-report.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '/:id',
    component: DailyReportPage
    },
    {
        path: '',
        component: DailyReportPage
    }
];

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
    IonicModule,
      RouterModule.forChild(routes),
      SharedModule
  ],
  declarations: [DailyReportPage]
})
export class DailyReportPageModule {}
