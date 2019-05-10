import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form = FormGroup;
    firstname = new FormGroup('', Validators.required);

    constructor(private router: Router) {}



    ngOnInit() {}

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
