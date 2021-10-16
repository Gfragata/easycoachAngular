import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/app/shared/Login';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  formCreate!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateAccountComponent>,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm(new Login());
  }

  createForm(newAccount: Login) {
    this.formCreate = new FormGroup({
      username: new FormControl(newAccount.username),
      password: new FormControl(newAccount.password),
    })
  }

  async CreateAccount() {
    try {
      await this.auth.CreateAccount(this.formCreate.value);
      this.close();
    } catch (error) {
      console.error(error)
    }
  }

  async close() {
    this.dialogRef.close();
  }

}
