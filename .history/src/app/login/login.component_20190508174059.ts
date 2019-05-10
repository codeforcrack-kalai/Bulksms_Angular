import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    email = new FormControl('', Validators.required);


    constructor(private router: Router, fb: FormBuilder) {

        this.form = fb.group({
            'email': this.email,
            'password': '["",Validators.required]'

        });


    }





    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        console.log(this.form);
        this.router.navigate(['/dashboard']);
    }
}
