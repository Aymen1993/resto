import { PlatService } from './../../services/plat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { generateId, getObjectFromLocalStorage } from 'src/app/shared/genericFunction';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  platForm: FormGroup;
  plat: any = {};
  title: string = "Add plat";
  id: any;
  imagePreview: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private platService: PlatService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.platService.getPlatById(this.id).subscribe(
        (data) => {
          this.plat = data.plat;
        });
      this.title = "Edit Plat";
    }
  }
  addPlat() {
    if (this.id) {
      this.platService.editPlat(this.plat,this.plat.img).subscribe(
        (response) => {
          console.log("here is response", response);
        });
    } else {
      this.platService.addPlat(this.plat,this.plat.img).subscribe(
        (response) => {
          console.log("here is the response", response);
        });
    }
    this.router.navigate(["admin"]);
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // this.plat.patchValue({ img: file });
    this.plat.img = file;
    // this.plat.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
