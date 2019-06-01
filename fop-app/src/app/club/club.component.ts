import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../entities/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  @Input() club: Club;

  constructor() { }

  ngOnInit() {
  }

}
