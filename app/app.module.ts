
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {UtlsFileService} from "./utls-file.service";
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports:      [ BrowserModule,
    DataTableModule],
    declarations: [ AppComponent ],
    providers: [ UtlsFileService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }