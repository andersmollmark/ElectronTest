import {Component, OnInit} from "@angular/core";
import {UtlsFileService} from "./utls-file.service";
import {remote, ipcRenderer} from "electron";
import {UtlsLog} from "./log";
import {Observable} from "rxjs/Observable";

let {dialog} = remote;


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

    items;
    allUsers = "All users";
    selectUserDefaultChoice = "--- Select user ---";
    text: string;
    logs$: Observable<UtlsLog[]>;
    users$: Observable<String[]>;
    public filterQuery = "";
    clock;
    public isLoaded: boolean;
    public sortBy = "timestampAsDate";
    public sortOrder = "asc";
    public selectedUser = this.selectUserDefaultChoice;


    constructor(private utlsFileService: UtlsFileService) {
        this.isLoaded = false;
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

        this.clock = Observable.interval(1000);

    }

    public handleFile = (fileNamesArr: Array<any>) => {
        if (!fileNamesArr) {
            console.log("No file selected");
        }
        else {
            console.log("filename selected:" + fileNamesArr[0]);
            this.logs$ = this.utlsFileService.createLogs(fileNamesArr[0]);
            this.isLoaded = true;
            this.users$ = this.utlsFileService.getUsers();
        }
    }

    changeUser(newUser){
        if(this.allUsers !== newUser && this.selectUserDefaultChoice !== newUser){
            this.logs$ = this.utlsFileService.getWithSpecificUser(newUser);
        }
        if(this.allUsers === newUser){
            this.logs$ = this.utlsFileService.getAllLogs();
        }
        alert("hi " + newUser);
    }


    createRange(number){
        this.items = [];
        for(var i=1; i<=number; i++){
            this.items.push(i);
        }
        return this.items;
    }

    ngOnDestroy() {
    }

}