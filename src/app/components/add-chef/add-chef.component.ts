import { ChefService } from './../../services/chef.service';
import { Router, ActivatedRoute } from '@angular/router';
import { generateId, getObjectFromLocalStorage } from 'src/app/shared/genericFunction';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  chef: any = {};
  cfefForm: FormGroup;
  title: string = "Add chef";
  id: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chefService: ChefService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.chefService.getChefById(this.id).subscribe(
        (data) => {
          this.chef = data.chef;
        })
      this.title = "Edit Chef";
    }

  }
  addChef() {
    if (this.id) {
      this.chefService.editChef(this.chef).subscribe(
        (response)=>{
          console.log("Here is response",response);
      })
    } else {
      this.chefService.addChef(this.chef).subscribe(
        (response) => {
          console.log("here is response", response);
        });
    }
    this.router.navigate(["admin"]);
  }
}
