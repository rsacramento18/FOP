import { Component, OnInit, Input } from '@angular/core';
import { Orgao } from '../entities/orgao';

@Component({
  selector: 'app-orgao',
  templateUrl: './orgao.component.html',
  styleUrls: ['./orgao.component.scss']
})
export class OrgaoComponent implements OnInit {
  @Input() orgao: Orgao;

  constructor() { }

  ngOnInit() {
  }

}
