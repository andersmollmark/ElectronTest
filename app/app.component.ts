import {Component, OnInit} from '@angular/core';
import {UtlsFileService} from "./utls-file.service";
import {remote, ipcRenderer} from 'electron';
import {UtlsLog} from "./log";
import {Subscription} from "rxjs/Subscription";
import {List} from "immutable";
import {Observable} from "rxjs/Observable";

let {dialog} = remote;


@Component({
    selector: 'my-app',
    template: `
    <h1>Utls-logs</h1>
<ul>
    <li *ngFor="let log of logs$ | async">
        <span class="badge">{{log.id}}</span> {{log.name}}
    </li>
</ul>

`,
    // templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

    text: string;
    logs$: Observable<UtlsLog[]>;

    constructor(private utlsFileService: UtlsFileService) {
    }

    ngOnInit(): void {
        let self = this;
        var menu = remote.Menu.buildFromTemplate([{
            label: 'Menu',
            submenu: [
                {
                    label: 'open',
                    click: function () {
                        dialog.showOpenDialog(self.handleFile);
                    }
                }
            ]
        }]);
        remote.Menu.setApplicationMenu(menu);

    }

    public handleFile = (fileNamesArr: Array<any>) => {
        if (!fileNamesArr) {
            console.log("No file selected");
        }
        else {
            console.log("filename selected:" + fileNamesArr[0]);
            this.logs$ = this.utlsFileService.createLogs(fileNamesArr[0]);
        }
    }

    ngOnDestroy() {
    }

}