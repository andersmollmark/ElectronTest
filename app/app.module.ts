
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DataFilterPipe } from './data-filter.pipe';
import {StringSortPipe} from './stringSort.pipe';
import {UtlsFileService} from "./utls-file.service";
import {JsonDumpService} from "./jsonDump.service";
import {DataTableModule} from "angular2-datatable";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ BrowserModule, FormsModule,
    DataTableModule, HttpModule],
    declarations: [ AppComponent, DataFilterPipe, StringSortPipe ],
    providers: [ UtlsFileService, JsonDumpService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }