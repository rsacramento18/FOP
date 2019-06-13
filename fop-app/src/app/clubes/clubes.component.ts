import { Component, OnInit } from '@angular/core';

import { Club } from '../entities/club';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit {
  private allClubs: Club[] = [];
  private currentClub: Club;
  private isClubHover = false;

  constructor(private clubService: ClubService) {
    this.clubService.getListClub().subscribe((res: Club[]) => {
      this.allClubs = res;
      this.currentClub = this.allClubs[0];
    })
   }

  ngOnInit() {
  }

  showClub(club: Club) {
    this.currentClub = club;
  }
  

}
