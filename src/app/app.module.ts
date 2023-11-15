import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ExclusiveItemsComponent } from './components/exclusive-items/exclusive-items.component';
import { BannerComponent } from './components/banner/banner.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BlogComponent } from './components/blog/blog.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ChefsTableComponent } from './components/chefs-table/chefs-table.component';
import { PlatsTableComponent } from './components/plats-table/plats-table.component';
import { ChefComponent } from './components/chef/chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { PlatsComponent } from './components/plats/plats.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { SearchPlatsComponent } from './components/search-plats/search-plats.component';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AddChefComponent,
    AddPlatComponent,
    ExclusiveItemsComponent,
    BannerComponent,
    FoodMenuComponent,
    ChefsComponent,
    ReservationComponent,
    BlogComponent,
    HistoryComponent,
    HomeComponent,
    AdminComponent,
    UsersTableComponent,
    ChefsTableComponent,
    PlatsTableComponent,
    ChefComponent,
    PlatComponent,
    PlatsComponent,
    DeleteComponent,
    DashboardChefComponent,
    SearchPlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
