import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



    @Input() loginData = { email: '', password: '' };
    constructor(private router: Router) {}

    ngOnInit() {}

    onLogin() {

        console.log(this.loginData);
        localStorage.setItem('isLoggedin', 'true');

        this.router.navigate(['/dashboard']);
    }
}
