import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'accueil', component:AcceuilComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'contact', component:ContactComponent},
  {path:'produits/:id', component:InfoComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
