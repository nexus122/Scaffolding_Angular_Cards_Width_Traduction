import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ContainerComponent } from './components/container/container.component'
import { DetailPageComponent } from './components/detail-page/detail-page.component';
const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'type/:type', component: ContainerComponent},
  { path: 'pokemon/:id', component: ContainerComponent},
  { path: 'detail/:id', component: DetailPageComponent},
  //{ path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
