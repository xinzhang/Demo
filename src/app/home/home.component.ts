import {Component, OnInit} from '@angular/core';
import {CorporateActionModel} from '../models/corporateactions.model';
import {CorporateActionService} from '../services/corporateaction.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  providers: [CorporateActionService],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    numberOfDaysToDue = 14;
    currentAPIR = "";

    eventTypes = [];
    
    corporateAction = new CorporateActionModel(new Date(), new Date(), "", "", "", "");

    constructor(private corporateActionService: CorporateActionService) {
      this.corporateAction.DateAdded = new Date();
      this.corporateAction.DueDate.setDate ( this.corporateAction.DateAdded.getDate() + this.numberOfDaysToDue );      
    }

    ngOnInit() {
      this.loadEventTypes();
    }

    addAPIR() {      
      if (this.currentAPIR != "") {
        this.corporateAction.APIRCodes.push(this.currentAPIR);
        this.currentAPIR = "";
      }
    }

    removeAPIR(val:any) {
      let index = this.corporateAction.APIRCodes.indexOf(val);
      this.corporateAction.APIRCodes.splice(index, 1);
    }

    loadEventTypes() {
      this.corporateActionService.getEventTypes()
        .subscribe(
          values => this.eventTypes = values,
          error => console.log(error)
        )
    }

}
