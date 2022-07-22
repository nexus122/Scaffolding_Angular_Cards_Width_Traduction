import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component'
import { DetailPageComponent } from './components/detail-page/detail-page.component';
const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'type/:type', component: ContainerComponent},
  { path: 'pokemon/:name/:id', component: ContainerComponent},
  { path: 'detail/:name/:id', component: DetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
