
import { Component, OnInit } from '@angular/core';
import {UtlsFileService} from "./utls-file.service";
import {UtlsLog} from "./log";

@Component({
    selector: 'my-app',
    template: `
            <h1>Utls-logs</h1>
            <h2>My Logs</h2>
            <ul>
              <li *ngFor="let log of logs">
                <span class="badge">{{log.id}}</span> {{log.name}}
              </li>
            </ul>
            `
})
export class AppComponent implements OnInit{

    logs: UtlsLog[];

    text: string;

    constructor(private utlsFileService: UtlsFileService){}


    ngOnInit(): void {
        this.utlsFileService.readFile('C:/Users/delaval/Downloads/dump.json').then(logArray => this.text = logArray)
    }

}