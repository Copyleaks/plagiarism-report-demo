import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CopyleaksReportModule } from "@copyleaks/plagiarism-report";
import { DemoMaterialModule } from "./material.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    DemoMaterialModule,
    CopyleaksReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
