import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legislacao',
  templateUrl: './legislacao.component.html',
  styleUrls: ['./legislacao.component.scss']
})
export class LegislacaoComponent implements OnInit {
  private entryText:String[] = [];

  constructor() { }

  ngOnInit() {
    this.entryText.push("A FOP - Federação Ornitológica Portuguesa Cultural e Desportiva tem como missão organizar e desenvolver a prática de atividades desportivas, culturais e demais atribuições conferidas pela Lei, no âmbito do exercício da ornitologia.");
    this.entryText.push("A FOP deve representar, auxiliar e defender os clubes e associações seus filiados, nos seus legítimos interesses, quando para tal for solicitada, dando-lhes ainda todo o apoio possível, quer em Portugal quer no Estrangeiro.");
    this.entryText.push("Deve estabelecer e manter boas relações institucionais com os clubes e as associações seus filiados, bem como com as outras Federações e Organismos desportivos Nacionais. Deve, também, promover ainda o intercâmbio com outras organizações congéneres estrangeiras.");
    this.entryText.push("A FOP deve assegurar que sejam cumpridos os estatutos, regulamentos e demais normas em vigor. Zelar e fiscalizar para que sejam cumpridos e respeitados os princípios da ética e das regras Ornitológicas e Desportivas.");
  }

}
