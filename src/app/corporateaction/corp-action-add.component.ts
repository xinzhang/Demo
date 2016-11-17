import {Component, OnInit, ElementRef} from '@angular/core';
import {CorporateActionModel} from '../models/corporateactions.model';

import {CorporateActionService} from '../services/corporateaction.service';
import {StaticDataService} from '../services/staticdata.service';

import {Animations} from '../shared/animations';

@Component({
  selector: 'corp-action-add',
  styleUrls: ['./corp-action.component.css'],
  providers: [CorporateActionService],
  templateUrl: './corp-action-add.component.html',
  host: { '[@routeAnimation]': 'true' },  
  animations: Animations.page  
})
export class CorpActionAddComponent implements OnInit{
    numberOfDaysToDue = 14;
    currentAPIR = "";

    eventTypes = [];
    
    corporateAction = new CorporateActionModel(new Date(), new Date(), "", "", "", "");

    constructor(private corporateActionService: CorporateActionService, private staticDataService: StaticDataService, myElement: ElementRef) {
      this.corporateAction.DateAdded = new Date();
      this.corporateAction.DueDate.setDate ( this.corporateAction.DateAdded.getDate() + this.numberOfDaysToDue );      
      this.elementRef = myElement;
    }

    ngOnInit() {
      this.loadEventTypes();
      //this.loadAllssets();
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
      this.staticDataService.getEventTypes()
        .subscribe(
          values => this.eventTypes = values,
          error => console.log(error)
        )
    }

    public currentAsset = '';
    public assets = [];
    public filteredAssets = [];
    public elementRef;

}