import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CovidListComponent } from './components/covid-list/covid-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
 { path: 'home', component: HomeComponent },
 { path: 'covid', component: CovidListComponent },
 { path: 'covid/:id', component: CovidListComponent },
 {path: '**', component: NotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
