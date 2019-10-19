import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArtisansListComponent} from './artisans_old/artisans-list/artisans-list.component';
import {MasterclassesListComponent} from './masterclasses_old/masterclasses-list/masterclasses-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artisans', component: ArtisansListComponent },
  { path: 'masterclasses', component: MasterclassesListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

  // contacts page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
