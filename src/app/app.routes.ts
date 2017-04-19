import { Routes } from '@angular/router';
import { LineupComponent } from './lineup';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { LineupSubmittedComponent } from './lineupSubmitted';
import { SuspectLineupComponent } from './suspectLineup';
import { CompositeComponent } from './composite';
import { VerifyComponent } from './verify';
import { VerifyResultsComponent } from './verify-results';
import { CompositeResultsComponent } from './composite-results';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'lineup',  component: LineupComponent },
  { path: 'suspectLineup/:candidate',  component: SuspectLineupComponent },
  { path: 'lineupSubmitted',  component: LineupSubmittedComponent },
  { path: 'composite', component: CompositeComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'verifyresults/:candidate', component: VerifyResultsComponent },
  { path: 'compositeresults/:candidate', component: CompositeResultsComponent },
  { path: '**',    component: NoContentComponent },
];
