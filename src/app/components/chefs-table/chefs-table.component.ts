import { ChefService } from './../../services/chef.service';
import { Router } from '@angular/router';
import { deleteObject } from 'src/app/shared/genericFunction';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css']
})
export class ChefsTableComponent implements OnInit {
  chefs: any = [];
  chef: any = {};
  display: any;
  id: number;
  constructor(
    private router: Router,
    private chefServise: ChefService) { }

  ngOnInit() {
    this.getAllChefs();
    this.display = false
  }
  deleteChef(id: number) {
    this.chefServise.deleteChef(id).subscribe(
      (response) => {
        console.log("chef is deleted :", response);
        this.getAllChefs();
      });
  }
  displayChef(obj: any) {
    this.display = true;
    if (this.id == obj._id) {
      this.display = !this.display;
    }
    this.chef = obj;
    this.id = obj._id;
  }
  goToEdit(id: number) {
    this.router.navigate([`editChef/${id}`])
  }
  getAllChefs() {
    this.chefServise.getAllChefs().subscribe(
      (data) => {
        this.chefs = data.chefs
      });
  }

}
