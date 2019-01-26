import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Constants } from './constants.service';
import { HttpService } from './http.service';
import { LoadingService } from "./loading.service";
import { DialogService } from "./dialog.service";
import { LanguageService } from "./language.service";
import { NavController } from "@ionic/angular";
@Injectable()
export class AuthService {

    constructor(
        private httpService: HttpService,
        private userService: UserService,
        private loaderService: LoadingService,
        private dialogService: DialogService,
        private languageService: LanguageService,
        private navCtrl: NavController
    ) {}

    login(user: User) {
        // if (this.userService.isTokenExpired()) {
        this.loaderService.showLoading();
            //return this.httpService.invoke({
            //    method: 'POST',
            //    url: Constants.webURL,
            //    path: '/Parent/Account/Get',
            //    query: {
            //        username: user.username,
            //        password: user.password
            //    }
            //}).subscribe(token => {
            //    if (token && token != '') {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVuZy5tb2hhbWVkaGFzc2FuLjg2QGdtYWlsLmNvbSIsInJvbGUiOiJQYXJlbnQiLCJuYmYiOjE1NDg1MTg0MzQsImV4cCI6MTU0ODUyMjAzNCwiaWF0IjoxNTQ4NTE4NDM0fQ.Xp1a3xQTUyjewQ_N1LZWIeGc5xLs4MLvGdRTlg71gBA';

        this.userService.setCurrentUser(new User(user.username, user.password, token, ''));
        this.navCtrl.navigateRoot('kids');

                    
                //}
                this.loaderService.hideLoading();
            //    }, error => {

            //    this.loaderService.hideLoading();
            //    this.dialogService.showErrorAlert(this.languageService.translate('error'))
            //})
        //} else {

        //}
        return null;
    }

    logout() {
        this.userService.clearCurrentUser();
    }
    isLogged() {
        return !this.userService.isTokenExpired();
    }




}