import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import { RouterModule, Routes } from '@angular/router';
import SharedModule from 'src/app/shared/shared.module';
import { UtilityGraphComponent } from './utility-graph/utility-graph.component';
import { PanelBoxUploadComponent } from './panel-box-upload/panel-box-upload.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'utility',
        component: UtilityGraphComponent
      },
      {
        path: 'panel-box',
        component: PanelBoxUploadComponent
      },
    ]
  },
]

@NgModule({
  imports: [SharedModule,CommonModule, RouterModule.forChild(routes)],
  declarations: [AdminComponent,UtilityGraphComponent, AdminHeaderComponent, AdminSidebarComponent,PanelBoxUploadComponent],
  exports: [RouterModule]
})
export class AdminModule {}
