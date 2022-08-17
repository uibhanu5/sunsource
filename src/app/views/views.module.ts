import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { P404Component } from "./errors/404.component";
import { P500Component } from "./errors/500.component";
import { SolarAvailabilityComponent } from './solar-availability/solar-availability.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { ViewsComponent } from "./views.component";
import { InstallersComponent } from "./installers/installers.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'installer',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: 'contactus',
        component: ContactusComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'availability',
        component: SolarAvailabilityComponent
      },
      {
        path: 'estimator',
        component: EstimatorComponent
      }, {
        path: 'installer',
        component: InstallersComponent
      },
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500'
        }
      }
    ]
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ViewsComponent, InstallersComponent, ContactusComponent, AboutusComponent, P500Component, P404Component, SolarAvailabilityComponent, EstimatorComponent],
  exports: [RouterModule]
})
export default class ViewsModule { }
