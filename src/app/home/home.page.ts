import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  messages: Message[] = [
    {sender: 'me', content: 'Hola como estas?'},
    {sender: 'bot', content: 'Bien y tu, como estas?'},
  ];

  form = new FormGroup ({
    promt: new FormControl('')
  })
  //bot cargando respuesta
  loading: boolean = false;

  constructor() {}

  submit(){
    console.log(this.form.value);

    let promt = this.form.value.promt as string;

    //===Mensaje del usuario===
    let userMsg: Message = { sender: 'me', content: promt } 
    this.messages.push(userMsg);

    //===Mensaje del bot===
    let botMsg: Message = { sender: 'bot', content: ''} 
    this.messages.push(botMsg);

    //Emular que el bot esta cargando la respuesta
    this.loading = true;
  }

}
