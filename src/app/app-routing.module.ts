import { SearchPlatsComponent } from './components/search-plats/search-plats.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatsComponent } from './components/plats/plats.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"connexion",component:LoginComponent},
{path:"subscription",component:SignupComponent},
{path:"signupAdmin",component:SignupComponent},

{path:"addChef",component:AddChefComponent},
{path:"editChef/:x",component:AddChefComponent},
{path:"addPlat",component:AddPlatComponent},
{path:"editPlat/:x",component:AddPlatComponent},
{path:"admin",component:AdminComponent},
{path:"foodMenu",component:FoodMenuComponent},
{path:"chefs",component:ChefsComponent},
{path:"plats",component:PlatsComponent},
{path:"dashboardChef",component:DashboardChefComponent},
{path:"searchPlats",component:SearchPlatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
