import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm!: NgForm;
  usersArray!: any[];


  constructor(private _userDatService: UserDataService, private _router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.usersArray = this._userDatService.allLoginUser()
  }
  onLogin() {
    console.log(this.loginForm);
    this.authService.logInToApplication();

    this.usersArray.forEach(user => {
      if (this.loginForm.value.userName === user.userName && this.loginForm.value.password === user.password) {
        localStorage.setItem('userName', user.userName)
        this._router.navigate(['/dashboard'])
      }
    });

  }
  onEmailChange(email: any) {
    console.log(email);
    //Api call to check weather this eamil already exist!
  }

}
