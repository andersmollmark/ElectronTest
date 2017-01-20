import {Injectable} from '@angular/core';
import * as _ from "lodash";
import * as FileSystem  from 'fs';
import {LOGS} from './mock-logs';
import {UtlsLog} from "./log";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {List} from 'immutable';
import {Http} from "@angular/http";

@Injectable()
export class UtlsFileService {

    constructor(private http: Http) {
    }

    getLogs(): Observable<UtlsLog[]> {
        let testDate = new Date();
        return Observable.of([
            {
                    id: '1',
                    name: 'test',
                    category: 'test',
                    label: 'label',
                    tab: 'tab',
                    host: 'host',
                    userTransactionKeyId: '123445',
                    timestamp: testDate.getTime(),
                    timestampAsDate: 'iljj'
                },
                {
                    id: '2',
                    name: 'test2',
                    category: 'test',
                    label: 'label',
                    tab: 'tab',
                    host: 'host',
                    userTransactionKeyId: '123445',
                    timestamp: testDate.getTime(),
                    timestampAsDate: 'iljj'
                }]);
    }

    createLogs(filename: string): Observable<UtlsLog[]> {
        return this.http.get(filename).map(res => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'));
    }


}