import { Component, OnInit, NgZone } from '@angular/core';
import { CorporateActionModel } from '../models/corporateactions.model';
import { CorporateActionService } from '../services/corporateaction.service';

import {Animations} from '../shared/animations';

@Component({
    selector: 'corp-action-upload',
    styleUrls: ['./corp-action.component.css'],
    providers: [CorporateActionService],
    templateUrl: './corp-action-upload.component.html',
  host: { '[@routeAnimation]': 'true' },  
  animations: Animations.page
    
})
export class CorpActionUploadComponent implements OnInit {
    private zone: NgZone;
    private basicOptions: Object;
    private progress: number = 0;
    private response: any = {};

    constructor(private corporateActionService: CorporateActionService) {
    }

    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            uploadCategory: 'corporateaction',
            url: 'http://localhost:54560/upload'
        };
    }

    handleUpload(data: any): void {
        this.zone.run(() => {
            this.response = data;
            console.log(JSON.stringify(data));
            this.progress = data.progress.percent;
        });
    }

    label: string;

}