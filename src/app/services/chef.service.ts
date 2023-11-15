import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefUrl:string="http://localhost:3001/chefs"
  constructor(private http:HttpClient) { }

  addChef(chef:any){
    return this.http.post<{message:string}>(this.chefUrl,chef);
  }
  editChef(chef:any){
    return this.http.put<{message:string}>(this.chefUrl,chef)
  }
  getAllChefs(){
    return this.http.get<{chefs:any}>(this.chefUrl);
  }
  getChefById(id:any){
    return this.http.get<{chef:any,message:string}>(`${this.chefUrl}/${id}`)
  }
  deleteChef(id:any){
    return this.http.delete<{isDeleted:Boolean}>(`${this.chefUrl}/${id}`)
  }
}
