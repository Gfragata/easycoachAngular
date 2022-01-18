import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/shared/Login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm(new Login());
  }

  createForm(login: Login) {
    this.formLogin = new FormGroup({
      username: new FormControl(login.username, [Validators.email]),
      password: new FormControl(login.password, [Validators.required]),
    })
  }

  async GetLogin() {
    if(this.formLogin.status != "INVALID"){
      try {
        await this.auth.getLogin(this.formLogin.value);
        this.router.navigate([""]);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert("E-mail e/ou senha invalido");
    }
  }

  createAccount(){
    this.router.navigate(["register"]);
  }

}
