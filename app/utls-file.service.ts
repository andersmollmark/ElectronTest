import {Injectable} from "@angular/core";
import {UtlsLog} from "./log";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class UtlsFileService {

    activeLogContent: Observable<UtlsLog[]>;
    partOfLogContent: Observable<UtlsLog[]>;
    usersInLogContent: Observable<String[]>;
    categoriesInLogContent: Observable<String[]>;

    constructor(private http: Http) {
    }

    createLogs(filename: string): Observable<UtlsLog[]> {
        this.activeLogContent =
            this.http.get(filename).map(res => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'));
        return this.activeLogContent;
    }

    getWithSpecificUser(username: string): Observable<UtlsLog[]>{
        this.partOfLogContent =
            this.activeLogContent.map(logs => logs.filter(log => log.username === username));
        return this.partOfLogContent;

    }

    getUsers(): Observable<String[]>{
        let temp = [];
        this.usersInLogContent =
            this.activeLogContent.map(logs => logs.filter(log => {
                if(temp.indexOf(log.username) === -1){
                    temp.push(log.username);
                    return true;
                }
                else{
                    return false;
                }
            }).map(uniqueLog => uniqueLog.username));
        return this.usersInLogContent;
    }

    getCategories(): Observable<String[]>{
        let temp = [];
        this.categoriesInLogContent =
            this.activeLogContent.map(logs => logs.filter(log => {
                if(temp.indexOf(log.category) === -1){
                    temp.push(log.category);
                    return true;
                }
                else{
                    return false;
                }
            }).map(uniqueLog => uniqueLog.category));
        return this.categoriesInLogContent;
    }

    getWithSpecificCategory(category: string): Observable<UtlsLog[]>{
        this.partOfLogContent =
            this.activeLogContent.map(logs => logs.filter(log => log.category === category));
        return this.partOfLogContent;

    }

    getAllLogs(): Observable<UtlsLog[]> {
        return this.activeLogContent;
    }


}