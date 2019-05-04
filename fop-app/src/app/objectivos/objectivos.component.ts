import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectivos',
  templateUrl: './objectivos.component.html',
  styleUrls: ['./objectivos.component.scss']
})
export class ObjectivosComponent implements OnInit {
  private entryText: String[] = [];

  constructor() { }

  ngOnInit() {
    this.entryText.push("– Melhorar o Regulamento Interno, no cumprimento dos princípios consignados nos Estatutos e nas linhas de orientação desta Direção.");
    this.entryText.push("– Criar uma forma eficaz de facilidade de comunicação entre a FOP e os seus Clubes.");
    this.entryText.push("– Dinamizar e fomentar o intercâmbio e a colaboração entre os Clubes FOP.");
    this.entryText.push("– Promover os meios necessários para equipar e dotar os Clubes FOP ao nível informático, facilitando-lhes a componente administrativa, de modo a que facilmente possam organizar melhores eventos.");
    this.entryText.push("– Incentivar e patrocinar os Clubes que se mostrem empreendedores e dinâmicos.");
    this.entryText.push("– Organizar e promover as ações necessárias para a criação de melhores condições de participação dos seus criadores nas grandes Exposições.");
    this.entryText.push("– Melhorar significativamente a página eletrónica da FOP no sentido de a tornar acessível através de uma senha a todos os seus clubes associados.");
    this.entryText.push("– Criação de um responsável pela Comissão de Controlo de qualidade dos seus eventos mais importantes, nomeadamente os Campeonatos Nacionais e Internacionais.");
    this.entryText.push("– Dinamização da área de Formação técnica do CTJ com promoção e patrocínio de manuais técnicos a fornecer aos seus Clubes e posteriormente aos seus criadores.");
    this.entryText.push("– Promover e tornar mais relevante a imagem da FOP a nível nacional e internacional.");
  }

}
