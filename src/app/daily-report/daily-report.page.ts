import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-daily-report',
    templateUrl: './daily-report.page.html',
    styleUrls: ['./daily-report.page.scss'],
})
export class DailyReportPage implements OnInit {
    date: string;
    constructor() { }

    ngOnInit() {
        let today = (new Date()).toISOString();
        this.date = today;
    }

}
