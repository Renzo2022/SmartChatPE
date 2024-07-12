import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form = new FormGroup ({
    promt: new FormControl('')
  })

  constructor() {}

  submit(){
    console.log(this.form.value)
  }

}
