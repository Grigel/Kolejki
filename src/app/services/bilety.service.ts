import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of, from} from 'rxjs';
import { Context } from "../context";
import { Bilet } from "../models/bilet";
import { BILET } from "../mock/bilet-mock";

@Injectable({
  providedIn: 'root'
})
export class BiletyService {

  private mocking = Context.mockData;

  constructor() {}

  getBilet(id: number): Observable<Bilet> {
    return of(BILET);
  }
  
}
