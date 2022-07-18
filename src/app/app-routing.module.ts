import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component'

const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'type/:type', component: ContainerComponent},
  { path: 'pokemon/:id', component: ContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
