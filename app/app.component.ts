
import { Component, OnInit } from '@angular/core';
import {UtlsFileService} from "./utls-file.service";
import {remote, ipcRenderer} from 'electron';
import {UtlsLog} from "./log";
import {Subscription} from "rxjs/Subscription";
import {List} from "immutable";
import {Observable} from "rxjs/Observable";
let {dialog} = remote;


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit{

    text: string;
    // logs$: Observable<List<UtlsLog>>;
    subscription: Subscription;

    constructor(private utlsFileService: UtlsFileService){
        // this.logs$ = utlsFileService.logs;
    }

    ngOnInit(): void {
        let self = this;
        var menu = remote.Menu.buildFromTemplate([{
            label: 'Menu',
            submenu: [
                {
                    label: 'open',
                    click: function () {
                        dialog.showOpenDialog(function (fileNamesArr: Array<any>) {
                            if(!fileNamesArr){
                                console.log("No file selected");
                            }
                            else{
                                self.utlsFileService.createLogs(fileNamesArr[0]);
                            }
                        });
                    }
                }
            ]
        }]);
        remote.Menu.setApplicationMenu(menu);

        // this.subscription = this.utlsFileService.logs.subscribe(logs => this.logs$ = logs);

        // this.utlsFileService.createLogs('C:/Users/delaval/Downloads/dump.json');

    }

    ngOnDestroy(){
        // this.subscription.unsubscribe();
    }

}