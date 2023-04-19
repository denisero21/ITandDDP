import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public readonly users = {
		get$: (): Observable<DummyType> => {
			return this.http.get<DummyType>("api/users?&select=username,password",{ withCredentials: true });
		}
    }

}

export type DummyType = {
	total: number,
	skip: number,
	limit: number,
	users: User[]
}

