import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmplyoeeService } from './emplyoee.service';
import { Emplyoee } from './emplyoee.model'
import { EmplyoeeModule } from './emplyoee.module';


@Component({
  selector: 'app-edit-emplyoee',
  templateUrl: './edit-emplyoee.component.html',
  styles: [`
  input.ng-touched.ng-invalid{
    border: 1px solid red;
  }
  `]
})
export class EditEmplyoeeComponent implements OnInit {
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
id: number;
header: string;
emplyoee: Emplyoee = {
  id: 0,
  name: '',
  phone:0,
  email:''
};

  constructor(private router: Router, private route: ActivatedRoute, private emplyoeeService : EmplyoeeService) { }

  ngOnInit(): void {
   
   this.id = +this.route.snapshot.paramMap.get('id')!;
    this.header = this.id === 0 ? 'ADD EMPLOYEE' :'EDIT EMPLOYEE';

    if(this.id !=0){
      this.emplyoee = this.emplyoeeService.onGetEmplyoyee(this.id)!;
    }
  }
onSubmit(form: NgForm) {
  let emplyoee: Emplyoee = {
    id: form.value.id,
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
}
if(this.id === 0){
this.emplyoeeService.onAdd(emplyoee);
}
else{
  this.emplyoeeService.onUpdate(emplyoee);
  }
this.router.navigateByUrl('');
}
}
