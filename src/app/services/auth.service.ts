import { Inject, Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class AuthService{

    constructor(
        private http: HttpClient
    ){}

    async getLogin(login: any){
        const result = await this.http.post<any>(`http://localhost:8099/users/login`, login).toPromise()
        if(result && result.token)
            window.localStorage.setItem('token', result.token)
    }

    async CreateAccount(newAccount: any){
        const result = await this.http.post<any>(`http://localhost:8099/users`, newAccount).toPromise()
        if(result && result.token)
            window.localStorage.setItem('token', result.token)
    }
}