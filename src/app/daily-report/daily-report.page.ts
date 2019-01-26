import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'app-daily-report',
    templateUrl: './daily-report.page.html',
    styleUrls: ['./daily-report.page.scss'],
})
export class DailyReportPage implements OnInit {
    date: string;
    cancelText: string;
    okText: string;
    constructor(private languageService: LanguageService) { }

    ngOnInit() {
        this.okText =  this.languageService.translate('ok')
        this.cancelText = this.languageService.translate('cancel');
        let today = (new Date()).toISOString();
        this.date = today;
    }

}
