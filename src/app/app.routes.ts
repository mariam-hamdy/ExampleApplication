import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

export const appRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'product', component: ProductsComponent},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutComponent},
    {path:'', redirectTo:'home', pathMatch: "full"},
    {path:'**', component: HomeComponent}
];