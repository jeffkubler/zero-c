import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { LOGIN_ANIMATIONS } from './login.animation';

enum LF {
  username = "username",
  password = "password"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: LOGIN_ANIMATIONS
})
export class LoginComponent implements OnInit {
  public LF = LF;
  public loginForm = this.fb.group({
    [LF.username]: ['', [Validators.required] ],
    [LF.password]: ['', [Validators.required] ],
  });

  constructor(
    private fb: FormBuilder,
    private user: AuthService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user.token = "";
  }

  async onSubmit() {
    const val = this.loginForm.value;
    const result = await this.authService.login(val[LF.username], val[LF.password]);
    if (!result) {
      this.snackbar.open("Unable to authenticate", "X", {duration: 3000});
    }
    this.router.navigateByUrl("/home")
  }

}
