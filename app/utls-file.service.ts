import {Injectable} from '@angular/core';
import * as _ from "lodash";
import * as FileSystem  from 'fs';
import {LOGS} from './mock-logs';
import {UtlsLog} from "./log";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {List} from 'immutable';

@Injectable()
export class UtlsFileService {

    get logs(): Observable<List<UtlsLog>> {
        console.log("at get-func and length is" + this._logs.getValue().size);
        return this._logs.asObservable();
    }

    private _logs: BehaviorSubject<List<UtlsLog>> = new BehaviorSubject(List([]));

    createLogs(filename: string): void {
        let filecontent = '';
        let result = [];
        let self = this;
        FileSystem.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                alert("an error occured");
                return;
            }
            filecontent = data;
            console.log("file read: " + filename);
            result = self.createLogArr(filecontent);
        });
    }


    private createLogArr(logcontent: string): UtlsLog[] {
        let result = [];

        let self = this;
        let logContentArray = JSON.parse(logcontent);
        _.forEach(logContentArray, function (logContent) {
            let testLog = new UtlsLog();
            _.extend(testLog, logContent);
            result.push(testLog);
            self._logs.next(self._logs.getValue().push(testLog));
        });
        console.log("returning result from logArray-creation and size is:" + self._logs.getValue().size);
        return result;
    }


}