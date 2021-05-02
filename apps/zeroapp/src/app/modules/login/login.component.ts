import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginReq } from '@zeroc/api';
import { AuthService } from '../../auth.service';
import { LOGIN_ANIMATIONS } from './login.animation';

// enum LF {
//   username = "username",
//   password = "password"
// }

const formNames: Record<keyof LoginReq, keyof LoginReq> = {
  username: "username",
  password: "password"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: LOGIN_ANIMATIONS,
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    [formNames.username]: ['', [Validators.required]],
    [formNames.password]: ['', [Validators.required]],
  });

  public get formValue(): Record<keyof LoginReq, string> {
    return this.loginForm.value;
  }

  constructor(
    private fb: FormBuilder,
    private user: AuthService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user.token = '';
  }

  async onSubmit() {
    const form: Record<keyof LoginReq, string> = this.loginForm.value;
    const val = this.formValue;

    const result = await this.authService.login(val.username, val.password);
    if (!result) {
      this.snackbar.open('Unable to authenticate', 'X', { duration: 3000 });
    }
    this.router.navigateByUrl('/home');
  }
}
