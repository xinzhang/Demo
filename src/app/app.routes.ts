import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

import {CorpActionListComponent} from './corporateaction/corp-action-list.component';
import {CorpActionDetailComponent} from './corporateaction/corp-action-detail.component';
import {CorpActionAddComponent} from './corporateaction/corp-action-add.component';
import {CorpActionUploadComponent} from './corporateaction/corp-action-upload.component';

import {AssetComponent} from './datasetup/asset.component';
import {IssuerComponent} from './datasetup/issuer.component';
import {EventTypesComponent} from './datasetup/eventtypes.component';

import {ArchiveComponent} from './archive/archive.component';
import {TradeComponent} from './archive/trade.component';
import {TransferComponent} from './archive/transfer.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'corporateaction-add', component: CorpActionAddComponent},
  {path: 'corporateaction-list', component: CorpActionListComponent},
  {path: 'corporateaction-upload', component: CorpActionUploadComponent},
  
  {path: 'staticdata-asset', component: AssetComponent},
  {path: 'staticdata-issuer', component: IssuerComponent},
  {path: 'staticdata-eventtypes', component: EventTypesComponent},

  {path: 'archive', component: ArchiveComponent, children: [
      {path: 'trade', component: TradeComponent},
      {path: 'transfer', component: TransferComponent}
    ]
  }

  // {path: 'corporateaction', component: CorpActionListComponent,
  //   children: [
  //     {path: '', component: CorpActionListComponent},
  //     {path: 'add', component: CorpActionAddComponent},
  //     {path: ':id', component: CorpActionDetailComponent}
  //     ]
  // }
];

