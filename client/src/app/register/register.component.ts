import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter<boolean>();
  model: any = {};

  constructor() {

    
  }

  ngOnInit():void{

  }

  register(){
    console.log(this.model);
  }
  cancel(){
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }
  
}
