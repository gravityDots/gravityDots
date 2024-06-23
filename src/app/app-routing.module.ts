import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'services',component:ServicesComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contact-us',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
