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
        try {
            const result = await this.http.post<any>(`${environment.userApiUrl}/users/login`, login).toPromise()
            if(result && result.token)
                window.localStorage.setItem('token', result.token)
            
        } catch (error) {
            alert("E-mail e/ou senha invalido");
        }
    }

    async CreateAccount(newAccount: any){
        const result = await this.http.post<any>(`${environment.userApiUrl}/users`, newAccount).toPromise()
        if(result && result.token)
            window.localStorage.setItem('token', result.token)
    }
}