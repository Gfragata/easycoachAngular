import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/shared/Login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  async Entrar() {
    if(this.formLogin.status != "INVALID"){
      try {
        await this.auth.CreateAccount(this.formLogin.value);
        await this.auth.getLogin(this.formLogin.value);
        this.router.navigate([""]);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert("Usuário ou senha invalido");
    }
  }

  Cancelar(){
    this.router.navigate(["login"]);
  }

}
