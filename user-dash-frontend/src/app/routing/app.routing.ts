import { Routes, RouterModule } from '@angular/router';

import { ClContainerComponent } from '../components/client/cl-container/cl-container.component';
import { ClHomeComponent } from '../components/client/cl-home/cl-home.component';
import { ClLandingComponent } from '../components/client/cl-landing/cl-landing.component';
import { RDDataComponent } from '../components/client/rd-data/rd-data.component';
import { RDListComponent } from '../components/client/rd-list/rd-list.component';

const appRoutes: Routes = [
    { path: '', component: ClLandingComponent, pathMatch: 'full' },
    { path: 'home', component: ClHomeComponent},
    { path: 'rd-data', component: RDDataComponent},
    { path: 'rd-list', component: RDListComponent},
            // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
