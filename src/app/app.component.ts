import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'student_add';

  constructor(private _authService: AuthService,
    private _router: Router) {

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this._authService.logOutFormApplication();
    //   this._router.navigate(['/'])
    // }, 5000);
  }
  onLogout() {
    this._authService.logOutFormApplication();
    this._router.navigate(['/'])
  }
}
