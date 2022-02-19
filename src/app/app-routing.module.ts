import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { HelpersComponent } from './helpers/helpers.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {path :"Home"  , component : HomeComponent},
  {path :"About Us",component : AboutComponent},
  {path :"Cars",component : CarsComponent},
  {path :"Helpers",component : HelpersComponent},
  {path :"Footer",component :FooterComponent},
  {path :"",component :HomeComponent},
  {path :"**",component :FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
