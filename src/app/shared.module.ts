import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonHeaderComponent } from "./layouts/common-header/common-header.component";
import { FooterComponent } from "./layouts/footer/footer.component";

@NgModule({
  imports:[ReactiveFormsModule],
  exports: [ReactiveFormsModule, FooterComponent, CommonHeaderComponent],
  declarations: [FooterComponent, CommonHeaderComponent]
})
export default class SharedModule { };