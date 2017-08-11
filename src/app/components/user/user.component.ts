import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies: string[];
  constructor() {
      console.log('inside constructor');
  }

  ngOnInit() {
      console.log('ngOnInit inside');
      this.name = "Bob";
      this.age=20;
      this.email='bob@gmail.com';
      this.address = {
            street: 'Kepler st',
            city: 'Berlin',
            state: 'Berlin'
      }
      this.hobbies =['coding','playing','dancing'];
  }

  onClick() {
    this.name ="Kanistha";
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);

    return false;
  }

  compute(number) {
    if(number < 0)
      return 0;
  }
}

interface Address {
     street:string,
     city:string,
     state:string
}