import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loading: BehaviorSubject<boolean>;

    constructor() {
        this.loading = new BehaviorSubject<boolean>(false);
    }

    public showLoading() {
        this.loading.next(true);
    }

    public hideLoading() {
        this.loading.next(false);
    }
}
