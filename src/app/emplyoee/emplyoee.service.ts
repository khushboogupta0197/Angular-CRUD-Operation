import { Injectable } from '@angular/core';
import { Emplyoee } from './emplyoee.model'

@Injectable({
  providedIn: 'root'
})
export class EmplyoeeService {
emplyoees: Emplyoee[] = [
  {
    id: 1,
    name: "One",
    email: "one@gmail.com",
    phone: 1224
  },
  {
    id: 1,
    name: "Two",
    email: "two@gmail.com",
    phone: 1224
  }
]
  constructor() { }

  onGet(){
    return this.emplyoees;
  }

onGetEmplyoyee(id: Number){
  return this.emplyoees.find(x=>x.id ===id);
}

  onAdd(emplyoee: Emplyoee){
    this.emplyoees.push(emplyoee);
  }
  onDelete(id: Number){
    let emplyoee = this.emplyoees.find(x=>x.id === id);
    let index = this.emplyoees.indexOf(emplyoee, 0);
    this.emplyoees.splice(index, 1);
  }
  onUpdate(emplyoee :Emplyoee){
    let oldEmplyoee = this.emplyoees.find(x=>x.id === emplyoee.id);
    oldEmplyoee.name = emplyoee.name;
    oldEmplyoee.email = emplyoee.email;
    oldEmplyoee.phone = emplyoee.phone; 
  }
 
}
