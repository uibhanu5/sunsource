import { DashboardFooterComponent } from './components/layout1/DashboardFooter/DashboardFooter.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonHeaderComponent } from './components/layouts/common-header/common-header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CommonDashboardHeaderComponent } from './components/layout1/CommonDashboardHeader/CommonDashboardHeader.component';
import { CommonHttpService } from './services/http/common-http.service';
import { CommonRequestService } from './services/http/common-request.service';


@NgModule({
  imports: [ReactiveFormsModule, HttpClientModule, FormsModule],
  exports: [
    ReactiveFormsModule,
    FooterComponent,
    CommonHeaderComponent,
    CommonDashboardHeaderComponent,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [FooterComponent, CommonHeaderComponent,CommonDashboardHeaderComponent,DashboardFooterComponent],
  providers: [CommonHttpService, CommonRequestService],
})
export default class SharedModule {}
