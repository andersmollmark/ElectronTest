import {Injectable} from '@angular/core';
import * as FileSystem  from 'fs';
import { LOGS } from './mock-logs';
import {UtlsLog} from "./log";

@Injectable()
export class UtlsFileService {

    // readFile(filename: string): Promise<UtlsLog[]>{
    readFile(filename: string): Promise<string>{
        var filecontent = '';
        FileSystem.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                alert("an error occured");
                return;
            }
            filecontent = data;
        });
        return Promise.resolve(filecontent);
    }
}