import { Component, OnInit } from '@angular/core';
import { EmplyoeeService } from './emplyoee.service';
import { Emplyoee } from './emplyoee.model'

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-emplyoee',
  templateUrl: './emplyoee.component.html',
})
export class EmplyoeeComponent implements OnInit {
  emplyoees: Emplyoee[];

  constructor(private emplyoeeservice:EmplyoeeService) { }

  ngOnInit(): void {
  this.emplyoees = this.emplyoeeservice.onGet();
  }
  onDelete(id: Number){
    this.emplyoeeservice.onDelete(id);
  }
}
