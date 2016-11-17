import {Component, OnInit} from '@angular/core';
import {CorporateActionModel} from '../models/corporateactions.model';
import {CorporateActionService} from '../services/corporateaction.service';

import {GridOptions} from 'ag-grid/main';

import {Animations} from '../shared/animations';

@Component({
  selector: 'corp-action-list',    
  styleUrls: ['./corp-action.component.css'],
  providers: [CorporateActionService],
  templateUrl: './corp-action-list.component.html',
  host: { '[@routeAnimation]': 'true' },  
  animations: Animations.page  
})
export class CorpActionListComponent{
    private gridOptions: GridOptions;

    constructor(private corporateActionService:CorporateActionService){
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    
    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Ratio Component",
                field: "ratios",
                width: 200
            },
            {
                headerName: "Clickable Component",
                field: "name",
                width: 200
            }
        ];
    }

    private createRowData() {
        return [
            {name: 'Homer Simpson', ratios: {top: 0.25, bottom: 0.75}},
            {name: 'Marge Simpson', ratios: {top: 0.67, bottom: 0.39}},
            {name: 'Bart Simpson', ratios: {top: 0.82, bottom: 0.47}},
            {name: 'Lisa Simpson', ratios: {top: 0.39, bottom: 1}}
        ];
    }
}