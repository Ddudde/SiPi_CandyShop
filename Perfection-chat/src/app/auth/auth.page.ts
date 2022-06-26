import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './models/newUser.model';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  // title = 'email-of-company';
  // userEmail = new FormGroup({
  //   companyEmail: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('@teams.ru'),
  //   ]),
  // });

  @ViewChild('form') form: NgForm;
  submissionType: 'login' | 'join' = 'login';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const { email, password } = this.form.value;
    // const sub_of_email = '@teams.ru';
    if (!email || !password) return;

    if (this.submissionType === 'login') {
      return this.authService.login(email, password).subscribe(() => {
        this.router.navigateByUrl('/home');
      });
    } else if (this.submissionType === 'join') {
      const { firstName, lastName, middleName } = this.form.value;
      if (!firstName || !lastName || !middleName) return;
      const newUser: NewUser = {
        firstName,
        lastName,
        middleName,
        email,
        password,
      };

      return this.authService.register(newUser).subscribe(() => {
        this.toggleText();
      });
    }
  }

  toggleText() {
    if (this.submissionType === 'login') {
      this.submissionType = 'join';
    } else if (this.submissionType === 'join') {
      this.submissionType = 'login';
    }
  }
}
