import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

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
    constructor(private authService: AuthService) {
        this.initForm();
    }

    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new FormGroup({
            'username': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required),
        })
    }
    login() {
        this.authService.login(new User(this.form.value.username, this.form.value.password ,'',''));
    }
}
