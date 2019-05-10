import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    // email = new FormControl('');




    constructor(private router: Router) {}

    ngOnInit() {}

    onSubmit() {

       // console.log(this.loginData);
       // localStorage.setItem('isLoggedin', 'true');

        this.router.navigate(['/dashboard']);
    }
}
