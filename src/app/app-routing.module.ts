import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueriesComponent } from './QueriesComponent/queries.component';
import { ZipcodeComponent } from './ZipcodeComponent/zipcode.component';

const routes: Routes = [
  { path: '', component: ZipcodeComponent },
  { path: 'queries', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
