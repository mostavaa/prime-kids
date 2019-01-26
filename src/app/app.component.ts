import { Component, OnInit } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingService } from './services/loading.service';
import { LanguageService } from './services/language.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    isEnglish: boolean;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private menueCtrl: MenuController,
        private loadingService: LoadingService,
        private languageService: LanguageService
    ) {
        this.initializeApp();
    }
    ngOnInit() {
        this.isEnglish = this.languageService.isEnglish();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    Navigate(route: string) {
        this.navCtrl.navigateForward(route);
        this.menueCtrl.close();
    }
    logout() {
        this.loadingService.showLoading()
        setTimeout(() => this.loadingService.hideLoading(), 5000)
    }
    switchLanguage() {
        this.languageService.switchLanguage();
        this.menueCtrl.close();
        location.reload();
    }
}
