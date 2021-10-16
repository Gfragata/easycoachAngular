import { Inject, Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})

export class AuthService{

    constructor(
        private http: HttpClient
    ){}

    async getLogin(login: any){
        const result = await this.http.post<any>(`${environment.apiUrl}/users/login`, login).toPromise()
        if(result && result.token)
            window.localStorage.setItem('token', result.token)
    }

    async CreateAccount(newAccount: any){
        const result = await this.http.post<any>(`${environment.apiUrl}/users`, newAccount).toPromise()
        if(result && result.token)
            window.localStorage.setItem('token', result.token)
    }
}