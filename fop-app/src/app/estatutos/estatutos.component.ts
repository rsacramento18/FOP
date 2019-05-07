import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatutos',
  templateUrl: './estatutos.component.html',
  styleUrls: ['./estatutos.component.scss']
})
export class EstatutosComponent implements OnInit {
  private text: String;

  constructor() { }

  ngOnInit() {
    this.text = "Este espaço destina-se a dar a conhecer os Estatudos da FOP e seus regulamentos.";
  }

}
