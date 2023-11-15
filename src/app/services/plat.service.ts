import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platUrl:string="http://localhost:3001/plats"
  constructor(private http:HttpClient) { }
  addPlat(plat:any,img:File){
    let formData=new FormData();
    formData.append("name",plat.name);
    formData.append("description",plat.description);
    formData.append("price",plat.price);
    formData.append("img",img);
    return this.http.post<{message:string}>(this.platUrl,formData);
  }
  editPlat(plat:any,img:File){
    let formData=new FormData();
    formData.append("_id",plat._id);
    formData.append("name",plat.name);
    formData.append("description",plat.description);
    formData.append("price",plat.price);
    formData.append("img",img);
    return this.http.put<{message:string}>(this.platUrl,formData);
  }
  getAllPlats(){
    return this.http.get<{plats:any}>(this.platUrl);
  }
  getPlatById(id:any){
    return this.http.get<{plat:any,message:string}>(`${this.platUrl}/${id}`)
  }
  deletePlat(id:any){
    return this.http.delete<{isDeleted:boolean}>(`${this.platUrl}/${id}`)
  }
  searchPlat(obj:any){
    return this.http.post<{plats:any}>(`${this.platUrl}/search`,obj)
  }
}
