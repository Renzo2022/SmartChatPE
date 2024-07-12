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

    //Bloquear TextArea cuando esta respondiendo la solicitud
    this.form.reset();
    this.form.disable();

    //Emular que el bot esta cargando la respuesta
    this.loading = true;

    setTimeout(() => {  
      this.loading = false;
      this.typeText('estoy bien  y tu?')

      this.form.enable();
    }, 2000);

  }

  //Funcion que da el efecto que el bot esta escribiendo
  typeText(text: string){

    let textIndex = 0;
    let messagesLastIndex = this.messages.length -1;

    let interval = setInterval(() => {

      if(textIndex < text.length){
        this.messages [messagesLastIndex].content += text.charAt(textIndex);
        textIndex++;
      }else{
        clearInterval(interval);
      }
    }, 15)
  }

}
