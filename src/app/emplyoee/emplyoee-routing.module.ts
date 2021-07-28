import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmplyoeeComponent } from './edit-emplyoee.component';
import { EmplyoeeComponent } from './emplyoee.component';

const routes: Routes = [   
    { path: '', component: EmplyoeeComponent },
    {path: "emplyoee/add/:id", component: EditEmplyoeeComponent},  
    {path: "emplyoee/edit/:id", component: EditEmplyoeeComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplyoeeRoutingModule { }
