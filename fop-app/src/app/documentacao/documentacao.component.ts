import { Component, OnInit } from '@angular/core';
import { Document } from '../entities/document';

@Component({
  selector: 'app-documentacao',
  templateUrl: './documentacao.component.html',
  styleUrls: ['./documentacao.component.scss']
})
export class DocumentacaoComponent implements OnInit {
  private documents: Document[] = [];
  private doc1 = new Document();
  private doc2 = new Document();
  private doc3 = new Document();
  private doc4 = new Document();
  private doc5 = new Document();
  private doc6 = new Document();
  private doc7 = new Document();
  private doc8 = new Document();
  private doc9 = new Document();
  private doc10 = new Document();
  private doc11 = new Document();
  private doc12 = new Document();
  private doc13 = new Document();
  private doc14 = new Document();
  private doc15 = new Document();
  private doc16 = new Document();
  private doc17 = new Document();
  private doc18 = new Document();
  private doc19 = new Document();
  private doc20 = new Document();
  private doc21 = new Document();
  private doc22 = new Document();
  private doc23 = new Document();
  private doc24 = new Document();
  private doc25 = new Document();
  private doc26 = new Document();
  private doc27 = new Document();
  private doc28 = new Document();
  private doc29 = new Document();
  private doc30 = new Document();
  private doc31 = new Document();
  private doc32 = new Document();
  private doc33 = new Document();
  private doc34 = new Document();
  private doc35 = new Document();
  private doc36 = new Document();
  private doc37 = new Document();
  private doc38 = new Document();
  private doc39 = new Document();
  private doc40 = new Document();
  private doc41 = new Document();
  private doc42 = new Document();
  private doc43 = new Document();
  private doc44 = new Document();
  private doc45 = new Document();
  private doc46 = new Document();
  private doc47 = new Document();
  private doc48 = new Document();
  private doc49 = new Document();
  private doc50 = new Document();
  private doc51 = new Document();
  private doc52 = new Document();
  private doc53 = new Document();
  private doc54 = new Document();
  private doc55 = new Document();
  private doc56 = new Document();
  private doc57 = new Document();
  private doc58 = new Document();
  private doc59 = new Document();
  private doc60 = new Document();
  private doc61 = new Document();

  constructor() { }

  ngOnInit() {
    this.doc1.date = "10/05/2017";
    this.doc1.title = "Fop Informa 119";
    this.doc1.description = "Marcação de Exposições FOP para 2017.";
    this.doc1.links.push("../../assets/pdf/documentacao/FOP_Informa_119.pdf");

    this.documents.push(this.doc1);

    this.doc2.date = "23/04/2017";
    this.doc2.title = "Fop Informa 118";
    this.doc2.description = "Pedidos de Anilhas à FOP.";
    this.doc2.links.push("../../assets/pdf/documentacao/FOP_Informa_118.pdf");

    this.documents.push(this.doc2);

    this.doc3.date = "14/09/2016";
    this.doc3.title = "Fop Informa 117";
    this.doc3.description = "Secções e classes para as Exposições FOP em 2016.";
    this.doc3.links.push("../../assets/pdf/documentacao/Fop_Informa_117_Classes_FOP_para_exposições_2016.pdf");

    this.documents.push(this.doc3);

    this.doc4.date = "14/09/2016";
    this.doc4.title = "";
    this.doc4.description = "Lista de Classes 2016.";
    this.doc4.links.push("../../assets/pdf/documentacao/Lista_de_Classes_FOP_2016.pdf");

    this.documents.push(this.doc4);

    this.doc5.date = "06/09/2016";
    this.doc5.title = "FOP Informa 116";
    this.doc5.description = "Secções e classes para as Exposições FOP em 2016.";
    this.doc5.links.push("../../assets/pdf/documentacao/FOP_Informa_116_Classes_FOP_para_exposições_2016.pdf");

    this.documents.push(this.doc5);


    this.doc6.date = "20/04/2016";
    this.doc6.title = "FOP Informa 115";
    this.doc6.description = "Marcação de Exposições FOP para 2016.";
    this.doc6.links.push("../../assets/pdf/documentacao/FOP_Informa_115.pdf");

    this.documents.push(this.doc6);


    this.doc7.date = "13/04/2016";
    this.doc7.title = "FOP Informa 114";
    this.doc7.description = "Datas dos pedidos de anilhas FOP para 2017.";
    this.doc7.links.push("../../assets/pdf/documentacao/FOP_Informa_114_Anilhas.pdf");

    this.documents.push(this.doc7);


    this.doc8.date = "19/09/2015";
    this.doc8.title = "FOP Informa 113";
    this.doc8.description = "Pedido de Anilhas para 2016 - requisição referente ao 3º pedido de 2015.";
    this.doc8.links.push("../../assets/pdf/documentacao/FOP_Informa_113_Anilhas.pdf");

    this.documents.push(this.doc8);


    this.doc9.date = "08/04/2015";
    this.doc9.title = "FOP Informa 111";
    this.doc9.description = "Marcação de Exposições FOP para 2015.";
    this.doc9.links.push("../../assets/pdf/documentacao/FOP_Informa_111.pdf");

    this.documents.push(this.doc9);


    this.doc10.date = "03/03/2015";
    this.doc10.title = "FOP Informa 109";
    this.doc10.description = "Pedidos de anilhas para 2016.";
    this.doc10.links.push("../../assets/pdf/documentacao/FOP_Informa_109.pdf");

    this.documents.push(this.doc10);


    this.doc11.date = "30/06/2014";
    this.doc11.title = "FOP Informa 108";
    this.doc11.description = "Workshop sobre a aplicação de exposições da FOP.";
    this.doc11.links.push("../../assets/pdf/documentacao/FOP_Informa_108.pdf");

    this.documents.push(this.doc11);


    this.doc12.date = "30/06/2014";
    this.doc12.title = "FOP Informa 107";
    this.doc12.description = "Normas para as exposições FOP 2014.";
    this.doc12.links.push("../../assets/pdf/documentacao/FOP_Informa_107.pdf");

    this.documents.push(this.doc12);


    this.doc13.date = "30/06/2014";
    this.doc13.title = "";
    this.doc13.description = "Lista de Classes FOP 2014.";
    this.doc13.links.push("../../assets/pdf/documentacao/Lista_de_Classes_FOP_2014.pdf");

    this.documents.push(this.doc13);


    this.doc14.date = "30/06/2014";
    this.doc14.title = "FOP Informa 106";
    this.doc14.description = "1º Pedido de anilhas para 2015.";
    this.doc14.links.push("../../assets/pdf/documentacao/FOP_Informa_106.pdf");

    this.documents.push(this.doc14);


    this.doc15.date = "21/06/2014";
    this.doc15.title = "FOP Informa 105";
    this.doc15.description = "Normas para Exposições FOP 2014.";
    this.doc15.links.push("../../assets/pdf/documentacao/FOP_Informa_105.pdf");

    this.documents.push(this.doc15);
    

    this.doc16.date = "09/06/2014";
    this.doc16.title = "FOP Informa 104";
    this.doc16.description = "Marcação de Exposições FOP para 2014.";
    this.doc16.links.push("../../assets/pdf/documentacao/FOP_Informa_104.pdf");

    this.documents.push(this.doc16);


    this.doc17.date = "15/05/2014";
    this.doc17.title = "FOP Informa 103";
    this.doc17.description = "Pedidos de anilhas para 2015.";
    this.doc17.links.push("../../assets/pdf/documentacao/FOP_Informa_103.pdf");

    this.documents.push(this.doc17);


    this.doc18.date = "05/05/2014";
    this.doc18.title = "FOP Informa 102";
    this.doc18.description = "Novas normas para pagamentos à FOP.";
    this.doc18.links.push("../../assets/pdf/documentacao/FOP_Informa_102.pdf");

    this.documents.push(this.doc18);


    this.doc18.date = "17/03/2014";
    this.doc18.title = "";
    this.doc18.description = "Assembleia Geral da FOP de 2014 - Convocatória.";
    this.doc18.links.push("../../assets/pdf/documentacao/ConvAGFOP20140329.pdf");

    this.documents.push(this.doc18);


    this.doc19.date = "17/03/2014";
    this.doc19.title = "";
    this.doc19.description = "Relatório de Gestão, Relatório do Conselho Fiscal, Balanço, Demonstração dos Resultados e Anexo às Demonstrações Financeiras.";
    this.doc19.links.push("../../assets/pdf/documentacao/ContasFOP2013.pdf");

    this.documents.push(this.doc19);


    this.doc20.date = "17/03/2014";
    this.doc20.title = "FOP Informa 101";
    this.doc20.description = "Assembleia Geral da FOP de 2014.";
    this.doc20.links.push("../../assets/pdf/documentacao/FOP_Informa_101.pdf");

    this.documents.push(this.doc20);



    this.doc21.date = "03/03/2014";
    this.doc21.title = "FOP Informa 100";
    this.doc21.description = "Receção das anilhas pelos clubes.";
    this.doc21.links.push("../../assets/pdf/documentacao/FOP_Informa_100.pdf");

    this.documents.push(this.doc21);



    this.doc22.date = "19/02/2014";
    this.doc22.title = "FOP Informa 99";
    this.doc22.description = "Eleições para os Corpos Gerentes da FOP.";
    this.doc22.links.push("../../assets/pdf/documentacao/FOP_Informa_099.pdf");

    this.documents.push(this.doc22);



    this.doc23.date = "18/02/2014";
    this.doc23.title = "FOP Informa 98";
    this.doc23.description = "Pedidos de anilhas.";
    this.doc23.links.push("../../assets/pdf/documentacao/FOP_Informa_098.pdf");

    this.documents.push(this.doc23);



    this.doc24.date = "13/01/2014";
    this.doc24.title = "FOP Informa 97";
    this.doc24.description = "2º Pedido de anilhas de 2014.";
    this.doc24.links.push("../../assets/pdf/documentacao/FOP_Informa_097.pdf");

    this.documents.push(this.doc24);



    this.doc25.date = "17/09/2013";
    this.doc25.title = "";
    this.doc25.description = "Classes 2013.";
    this.doc25.links.push("../../assets/pdf/documentacao/CLASSES_2013_CTJ_FOP.pdf");

    this.documents.push(this.doc25);



    this.doc26.date = "19/08/2013";
    this.doc26.title = "FOP Informa 94";
    this.doc26.description = "Caderno de encargos para o 69º Campeonato Nacional de Ornitologia sob a égide da FOP.";
    this.doc26.links.push("../../assets/pdf/documentacao/FOP_Informa_094.pdf");
    this.doc26.links.push("../../assets/pdf/documentacao/Caderno_de_Encargos_Aprovado.pdf");

    this.documents.push(this.doc26);
    



    this.doc28.date = "28/05/2013";
    this.doc28.title = "FOP Informa 92";
    this.doc28.description = "Modelo 22 relativo ao ano de 2012.";
    this.doc28.links.push("../../assets/pdf/documentacao/FOP_Informa_092.pdf");

    this.documents.push(this.doc28);



    this.doc30.date = "28/04/2013";
    this.doc30.title = "FOP Informa 90";
    this.doc30.description = "Exposições FOP para 2013.";
    this.doc30.links.push("../../assets/pdf/documentacao/FOP_Informa_090.pdf");

    this.documents.push(this.doc30);



    this.doc31.date = "22/03/2013";
    this.doc31.title = "FOP Informa 88";
    this.doc31.description = "Assembleia Geral da FOP de 2013 - Documentação.";
    this.doc31.links.push("../../assets/pdf/documentacao/FOP_Informa_088.pdf");
    this.doc31.links.push("../../assets/pdf/documentacao/FOP_contas_2012.pdf");

    this.documents.push(this.doc31);




    this.doc32.date = "13/03/2013";
    this.doc32.title = "FOP Informa 86";
    this.doc32.description = "Assembleia Geral da FOP de 2013.";
    this.doc32.links.push("../../assets/pdf/documentacao/FOP_Informa_086.pdf");
    this.doc32.links.push("../../assets/pdf/documentacao/convag20130407.pdf");

    this.documents.push(this.doc32);




    this.doc33.date = "19/11/2012";
    this.doc33.title = "FOP Informa 84";
    this.doc33.description = "Registo Nacional CITES";
    this.doc33.links.push("../../assets/pdf/documentacao/FOP_Informa_084.pdf");

    this.documents.push(this.doc33);



    this.doc34.date = "18/10/2012";
    this.doc34.title = "FOP Informa 83";
    this.doc34.description = "Comunicado aos clubes FOP";
    this.doc34.links.push("../../assets/pdf/documentacao/FOP_Informa_083.pdf");
    this.doc34.links.push("../../assets/pdf/documentacao/PARECER_FISCAL_SOBRE_A_ATIVIDADE_DA_FOP.pdf");

    this.documents.push(this.doc34);




    this.doc35.date = "11/07/2012";
    this.doc35.title = "FOP Informa 82";
    this.doc35.description = "Envio dos pedidos de anilhas à FOP";
    this.doc35.links.push("../../assets/pdf/documentacao/FOP_Informa_082.pdf");

    this.documents.push(this.doc35);



    this.doc36.date = "16/06/2012";
    this.doc36.title = "FOP Informa 81";
    this.doc36.description = "Marcação de exposições para 2012.";
    this.doc36.links.push("../../assets/pdf/documentacao/FOP_Informa_081.pdf");

    this.documents.push(this.doc36);



    this.doc37.date = "31/05/2012";
    this.doc37.title = "FOP Informa 80";
    this.doc37.description = "Anilhas e Exposições";
    this.doc37.links.push("../../assets/pdf/documentacao/FOP_Informa_080.pdf");
    this.doc37.links.push("../../assets/pdf/documentacao/AnilhasMedidas2013.pdf");

    this.documents.push(this.doc37);



    this.doc38.date = "29/05/2012";
    this.doc38.title = "FOP Informa 79";
    this.doc38.description = "Anilhas para 2013";
    this.doc38.links.push("../../assets/pdf/documentacao/FOP_Informa_079.pdf");

    this.documents.push(this.doc38);



    this.doc38.date = "23/05/2012";
    this.doc38.title = "";
    this.doc38.description = "Comunicado do Presidente da FOP";
    this.doc38.links.push("../../assets/pdf/documentacao/Comunicado20120523.pdf");

    this.documents.push(this.doc38);




    this.doc39.date = "19/04/2012";
    this.doc39.title = "FOP Informa 78";
    this.doc39.description = "Marcação de exposições";
    this.doc39.links.push("../../assets/pdf/documentacao/FOP_Informa_078.pdf");

    this.documents.push(this.doc39);



    this.doc40.date = "18/03/2012";
    this.doc40.title = "FOP Informa 77";
    this.doc40.description = "Assembleia geral fop 2012 - documentação";
    this.doc40.links.push("../../assets/pdf/documentacao/FOP_informa_077.pdf");
    this.doc40.links.push("../../assets/pdf/documentacao/FOPContas2011.pdf");
    this.doc40.links.push("../../assets/pdf/documentacao/AG20120331.pdf");

    this.documents.push(this.doc40);



    this.doc41.date = "06/03/2012";
    this.doc41.title = "FOP Informa 76";
    this.doc41.description = "Assembleia Geral FOP 2012";
    this.doc41.links.push("../../assets/pdf/documentacao/fop_informa_076.pdf");

    this.documents.push(this.doc41);


    this.doc42.date = "21/11/2011";
    this.doc42.title = "FOP Informa 75";
    this.doc42.description = "Campeonato Nacional de 2011";
    this.doc42.links.push("../../assets/pdf/documentacao/fop_informa_075.pdf");

    this.documents.push(this.doc42);



    this.doc43.date = "20/10/2011";
    this.doc43.title = "FOP Informa 74";
    this.doc43.description = "Reclamações dos pedidos de anilhas";
    this.doc43.links.push("../../assets/pdf/documentacao/Impresso_RECLAMAÇÃO_ANILHAS.doc");

    this.documents.push(this.doc43);



    this.doc44.date = "22/09/2011";
    this.doc44.title = "FOP Informa 73";
    this.doc44.description = "Rede social de comunicações móveis FOP";
    this.doc44.links.push("../../assets/pdf/documentacao/FOP_Informa_073.pdf");
    this.doc44.links.push("../../assets/pdf/documentacao/FOPvodafone.pdf");
    this.doc44.links.push("../../assets/pdf/documentacao/VodafoneCedencialNumero.pdf");
    this.doc44.links.push("../../assets/pdf/documentacao/VodafonePortabilidade_Outros_Operadores.pdf");

    this.documents.push(this.doc44);



    this.doc45.date = "03/08/2011";
    this.doc45.title = "FOP Informa 71";
    this.doc45.description = "Disponibilização de espaço online no site da FOP";
    this.doc45.links.push("../../assets/pdf/documentacao/FOP_Informa_071.pdf");

    this.documents.push(this.doc45);



    this.doc46.date = "02/08/2011";
    this.doc46.title = "FOP Informa 69";
    this.doc46.description = "Caderno de encargos para Campeonatos Nacionais e Internacionais FOP";
    this.doc46.links.push("../../assets/pdf/documentacao/Caderno_de_Encargos_Aprovado.pdf");

    this.documents.push(this.doc46);



    this.doc47.date = "02/08/2011";
    this.doc47.title = "FOP Informa 69";
    this.doc47.description = "Caderno de encargos para Campeonatos Nacionais e Internacionais FOP";
    this.doc47.links.push("../../assets/pdf/documentacao/CartaClubesCandNacional2011.pdf");

    this.documents.push(this.doc47);


    this.doc48.date = "18/07/2011";
    this.doc48.title = "FOP Informa 67";
    this.doc48.description = "Envio dos pedidos de anilhas à FOP";
    this.doc48.links.push("../../assets/pdf/documentacao/FOP_Informa_067.pdf");

    this.documents.push(this.doc48);




    this.doc48.date = "15/07/2011";
    this.doc48.title = "FOP Informa 66";
    this.doc48.description = "Introdução dos pedidos de anilhas dosd sócios.";
    this.doc48.links.push("../../assets/pdf/documentacao/FOP_Informa_066.pdf");

    this.documents.push(this.doc48);




    this.doc49.date = "12/07/2011";
    this.doc49.title = "FOP Informa 65";
    this.doc49.description = "Gestão de sócios e atribuição de STAMs";
    this.doc49.links.push("../../assets/pdf/documentacao/FOP_Informa_065.pdf");

    this.documents.push(this.doc49);




    this.doc50.date = "18/07/2011";
    this.doc50.title = "FOP Informa 64";
    this.doc50.description = "Identificação dos criadores";
    this.doc50.links.push("../../assets/pdf/documentacao/FOP_Informa_064.pdf");

    this.documents.push(this.doc50);




    this.doc51.date = "07/07/2011";
    this.doc51.title = "FOP Informa 63";
    this.doc51.description = "Identificação dos criadores";
    this.doc51.links.push("../../assets/pdf/documentacao/FOP_Informa_063.pdf");

    this.documents.push(this.doc51);





    this.doc52.date = "23/06/2011";
    this.doc52.title = "FOP Informa 62";
    this.doc52.description = "Identificação dos criadores";
    this.doc52.links.push("../../assets/pdf/documentacao/FOP_Informa_062.pdf");

    this.documents.push(this.doc52);




    this.doc53.date = "13/06/2011";
    this.doc53.title = "FOP Informa 61";
    this.doc53.description = "STAM's Informação";
    this.doc53.links.push("../../assets/pdf/documentacao/FOP_Informa_061.pdf");

    this.documents.push(this.doc53);



    this.doc54.date = "28/05/2011";
    this.doc54.title = "FOP Informa 60";
    this.doc54.description = "Sócios dos Clubes - Lista a entregar a FOP";
    this.doc54.links.push("../../assets/pdf/documentacao/ListagemSociosClubes060.xls");

    this.documents.push(this.doc54);




    this.doc55.date = "28/05/2011";
    this.doc55.title = "FOP Informa 59";
    this.doc55.description = "NIB - Informação";
    this.doc55.links.push("../../assets/pdf/documentacao/FOP_Informa_059.pdf");

    this.documents.push(this.doc55);




    this.doc56.date = "28/05/2011";
    this.doc56.title = "FOP Informa 58";
    this.doc56.description = "NIB - Informação";
    this.doc56.links.push("../../assets/pdf/documentacao/FOP_Informa_058.pdf");
    this.doc56.links.push("../../assets/pdf/documentacao/NIB-FOP059.pdf");

    this.documents.push(this.doc56);



    this.doc57.date = "18/05/2011";
    this.doc57.title = "FOP Informa 57";
    this.doc57.description = "Cartão de Criador Nacional (CCN) - Requisição à FOP";
    this.doc57.links.push("../../assets/pdf/documentacao/FOP_Informa_057.pdf");
    this.doc57.links.push("../../assets/pdf/documentacao/Impresso_Requisição_CCN.xls");

    this.documents.push(this.doc57);



    this.doc58.date = "18/05/2011";
    this.doc58.title = "FOP Informa 56";
    this.doc58.description = "STAM's Pedidos dos clubes";
    this.doc58.links.push("../../assets/pdf/documentacao/FOP_Informa_056.pdf");
    this.doc58.links.push("../../assets/pdf/documentacao/Impresso_Pedido_STAM.xls");
    this.documents.push(this.doc58);

    
    this.doc59.date = "16/05/2011";
    this.doc59.title = "FOP Informa 55";
    this.doc59.description = "Juízes - Comparticipação da FOP aos Clubes em Km's";
    this.doc59.links.push("../../assets/pdf/documentacao/FOP_Informa_055.pdf");
    this.doc59.links.push("../../assets/pdf/documentacao/Clubes_Pedido_de_Reembolso-Kms.doc");

    this.documents.push(this.doc59);

    console.log(this.documents);

  }

}
