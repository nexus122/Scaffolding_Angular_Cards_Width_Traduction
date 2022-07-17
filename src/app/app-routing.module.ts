import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTestComponentComponent} from './components/home-test-component/home-test-component.component'

const routes: Routes = [
  { path: '', component: HomeTestComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
