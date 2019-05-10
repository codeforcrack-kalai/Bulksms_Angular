import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import{BulkApiService} from '../shared/services/bulk-api.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    email = new FormControl('', Validators.required);
    loginstatus: any = [];
    product: any;


    constructor(private router: Router, fb: FormBuilder, private rest: BulkApiService) {

        this.form = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]

        });


    }


    ngOnInit( ) {
    }

    onLogin() {
        this.rest.addProduct(this.form.value)
            .subscribe((data: {token}) => {
            console.log(data);
            this.product = data;
  });
}
}
