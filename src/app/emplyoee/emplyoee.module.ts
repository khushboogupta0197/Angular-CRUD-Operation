import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmplyoeeRoutingModule } from './emplyoee-routing.module';
import { EmplyoeeComponent } from './emplyoee.component';
import { EditEmplyoeeComponent } from './edit-emplyoee.component';


@NgModule({
  declarations: [
    EmplyoeeComponent,
    EditEmplyoeeComponent
  ],
  imports: [
    CommonModule,
    EmplyoeeRoutingModule,
    FormsModule
  ]
})
export class EmplyoeeModule { }
