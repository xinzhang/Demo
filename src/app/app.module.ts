import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";

import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

import {CorpActionAddComponent} from './corporateaction/corp-action-add.component';
import {CorpActionDetailComponent} from './corporateaction/corp-action-detail.component';
import {CorpActionListComponent} from './corporateaction/corp-action-list.component';
import {CorpActionUploadComponent} from './corporateaction/corp-action-upload.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CorporateActionService} from './services/corporateaction.service';
import { StaticDataService} from './services/staticdata.service';

import {AssetComponent} from './datasetup/asset.component';
import {IssuerComponent} from './datasetup/issuer.component';
import {EventTypesComponent} from './datasetup/eventtypes.component';

import {ArchiveComponent} from './archive/archive.component';
import {TradeComponent} from './archive/trade.component';
import {TransferComponent} from './archive/transfer.component';

//import { Ng2AutoCompleteModule } from 'ng2-auto-complete/dist';
import { AgGridModule } from 'ag-grid-ng2/main';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

@NgModule({
  declarations: [ AppComponent, AboutComponent, 
                  CorpActionAddComponent, CorpActionListComponent, CorpActionDetailComponent, CorpActionUploadComponent,
                  AssetComponent, IssuerComponent, EventTypesComponent,
                  ArchiveComponent, TradeComponent, TransferComponent,
                  UPLOAD_DIRECTIVES,                                     
                  HomeComponent],
  imports     : [ BrowserModule, FormsModule, HttpModule, 
                  RouterModule.forRoot(rootRouterConfig),
                  DatepickerModule,
                  AgGridModule.withNg2ComponentSupport()
                  //Ng2AutoCompleteModule
                ],
  providers   : [StaticDataService, CorporateActionService, 
                  {provide: LocationStrategy, useClass: HashLocationStrategy}
                ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
