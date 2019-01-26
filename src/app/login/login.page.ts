import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { LoadingService } from '../services/loading.service';
import { DialogService } from '../services/dialog.service';
import { LanguageService } from '../services/language.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    form: FormGroup = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
    });
    constructor(
        private authService: AuthService,
        private loaderService: LoadingService,
        private dialogService: DialogService,
        private languageService: LanguageService,
        private userService: UserService,
        private navCtrl: NavController
    ) {
        this.initForm();
    }

    ngOnInit() {
        if (this.authService.isLogged())
            this.navCtrl.navigateRoot('kids');
        this.initForm();
    }
    initForm() {
        this.form = new FormGroup({
            'username': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required),
        })
    }
    login() {
        this.loaderService.showLoading();
        let tokenTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVuZy5tb2hhbWVkaGFzc2FuLjg2QGdtYWlsLmNvbSIsInJvbGUiOiJQYXJlbnQiLCJuYmYiOjE1NDg1MzI5MzksImV4cCI6MTU0ODUzNjUzOSwiaWF0IjoxNTQ4NTMyOTM5fQ.FgwLkSo7BnFIBgzWM8wRaxvKuWrFE_upFiYlzQgVGAQ';
        this.successLogin(tokenTest);
        return;
        this.authService.login(new User(this.form.value.username, this.form.value.password, '', ''))
            .subscribe(token => {
                this.successLogin(token)
            }, error => {
                this.loaderService.hideLoading();
                this.dialogService.showErrorAlert(this.languageService.translate('error'))
            });
    }
    successLogin(token) {
        if (token && token != '') {
            this.userService.setCurrentUser(new User(this.form.value.username, this.form.value.password, token, ''));
            this.navCtrl.navigateRoot('kids');
        }
        this.loaderService.hideLoading();
        location.reload();
    }
}
