import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {

  isEmailError: boolean = false;
  isSubscribed: boolean = false;
  constructor(
    private subService: SubscribersService,
    ){}
  onSubmit(formValues){
    console.log(formValues);
    const subData: Sub = {
      name: formValues?.name,
      email: formValues?.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => 
      {
        if(val.empty){
          this.isEmailError = false;
          this.isSubscribed = true;
        this.subService.addSubs(subData);  
      }
      else{
        this.isEmailError = true;
      }
      }
      )
  }
}
