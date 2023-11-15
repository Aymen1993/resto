import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string="http://localhost:3001/users"
  constructor(private http:HttpClient) { }
  signup(User:any){
    return this.http.post<{message:string,emailExist:boolean,telExist:boolean}>(`${this.userUrl}/signup`,User);
  }
  login(User:any){
    return this.http.post<{role:string,id:any}>(`${this.userUrl}/login`,User);
  }
  editUser(User:any){
    return this.http.put<{message:string}>(this.userUrl,User)
  }
  getAllUsers(){
    return this.http.get<{users:any}>(this.userUrl);
  }
  getUserById(id:any){
    return this.http.get<{user:any,message:string}>(`${this.userUrl}/${id}`)
  }
  deleteUser(id:any){
    return this.http.delete<{isDeleted:boolean}>(`${this.userUrl}/${id}`)
  }
}
