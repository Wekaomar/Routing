import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { portfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", redirectTo:"home",pathMatch:"full" },
    {path:"home" , component: HomeComponent},
    {path:"about" , component: AboutComponent},
    {path:"portfolio" , component: portfolioComponent},
    {path:"contact" , component: ContactComponent},
    {path:"**" , component: NotfoundComponent},

];