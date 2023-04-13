import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

}

export type DummyResponse = {
  total: number,
  skip: number,
  limit: number,
  users: User[]
}
