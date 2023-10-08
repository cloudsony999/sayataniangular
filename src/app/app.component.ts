import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amitava';
  x='supratim'
  y='angular'

  pujo(){
    alert('DURGAPUJO COMING!!!!');
  }
  uname=new FormControl("");
  updateName()
  {
    this.uname.setValue("SUPRATIM");
  }

  products=
  [
    {
      brand:'Samsung',
      price:40000,
      type:'LED'

    },
    {
      brand:'Sony',
      price:45000,
      type:'LED'
    },
    {
      brand:'LG',
      price:30000,
      type:'LED'
    },
    {
      brand:'Onida',
      price:20000,
      type:'MONO'
    },
    {
      brand:'Oneplus',
      price:35000,
      type:'OLED'
    }
  ];
}
