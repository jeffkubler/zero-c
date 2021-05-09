import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginReq } from '@zeroc/api';
import { AuthService } from '../../auth.service';
import { LOGIN_ANIMATIONS } from './login.animation';

type LoginControls = { [key in keyof LoginReq] : (string | ValidatorFn)[] }
type LoginForm = Omit<FormGroup, 'value' | 'controls'> & { value: LoginReq, controls: Record<keyof LoginControls, AbstractControl>};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: LOGIN_ANIMATIONS,
})
export class LoginComponent implements OnInit {
  public loginFormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  } as LoginControls);

  public get loginForm(): LoginForm { return this.loginFormGroup as unknown as LoginForm; }

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
    const form = this.loginForm

    const result = await this.authService.login(form.value.username, form.value.password);
    if (!result) {
      this.snackbar.open('Unable to authenticate', 'X', { duration: 30000 });
    }
    this.router.navigateByUrl('/home');
  }
}
