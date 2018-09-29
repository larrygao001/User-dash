import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.interceptor';
import 'rxjs/add/operator/map';
import { cl_configs } from '../../config/cl-config';

@Injectable()
export class RDSService {
    constructor(
        private http: Http,
        private httpService: HttpService) {
    }

    getLatestRandomData(): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });

        return this.http.get('https://randomuser.me/api/?key=E7LB-PONO-RLAC-M9DD&ref=eigsm5dx&results=10&inc=name,location,nat,dob')
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    postChosenData(data: any): Observable<any> {

        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://user-dash-backend.herokuapp.com/users/add_users', data, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getChosenDatasLen(): Observable<any> {

        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://user-dash-backend.herokuapp.com/users/get_users_len', {}, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    loadUserDataByIndex(data: any): Observable<any> {

        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://user-dash-backend.herokuapp.com/users/load_users_by_index', data, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    deleteItem(data: any): Observable<any> {

        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://user-dash-backend.herokuapp.com/users/delete_item', data, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    postAllData(data: any): Observable<any> {

        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://user-dash-backend.herokuapp.com/all_users/add_users', data, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
}
