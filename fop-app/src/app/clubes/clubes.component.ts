import { Component, OnInit } from '@angular/core';

import { Club } from '../entities/club';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit {
  private clubs: Club[] = [];
  private currentClub: Club;
  private showClub = false;

  constructor(private clubService: ClubService) {
    this.clubService.getListClub().subscribe((res: Club[]) => {
      this.clubs = res;
      console.log(this.clubs)
    })
   }

  ngOnInit() {
  }

}
