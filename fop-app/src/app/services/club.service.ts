import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl: string = "http://localhost:3000/clubs";

  constructor(private httpClient: HttpClient) { }

  getClub( id: number ) {
    return this.httpClient.get(this.baseUrl + '/${id}');
  }

  getListClub () {
    return this.httpClient.get(this.baseUrl + '/all/fop');
  }
  
  createClub( club ) {
    return this.httpClient.put(this.baseUrl, club);
  }
}
