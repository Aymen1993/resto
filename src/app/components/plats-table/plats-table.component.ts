import { PlatService } from './../../services/plat.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css']
})
export class PlatsTableComponent implements OnInit {
  plats: any = [];
  @Input() user: string;
  plat: any = {};
  display: any;
  id: number;
  constructor(
    private router: Router,
    private platService: PlatService,) { }

  ngOnInit() {
    this.getAllPlats();
  }
  deleteplat(id: number) {
    this.platService.deletePlat(id).subscribe(
      (response) => {
        console.log("plat is deleted", response);
        this.getAllPlats();
      });
  }
  displayPlat(obj: any) {
    this.display = true;
    if (this.id == obj._id) {
      this.display = !this.display;
    }
    this.plat = obj;
    this.id = obj._id;
  }
  goToEdit(id: number) {
    this.router.navigate([`editPlat/${id}`]);
  }

  getAllPlats() {
    this.platService.getAllPlats().subscribe(
      (data) => {
        this.plats = data.plats;
        if (this.user == "chef") {
          let chefId = localStorage.getItem("connectedUserId");
          this.plats = this.plats.filter((obj: any) => { return obj.chefId == chefId });
        }
      });

  }
}
