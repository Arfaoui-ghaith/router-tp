
export class Employe {
  matricule:number;
  nom:String;
  status:String;
  expert:boolean;

  constructor(matricule:number, nom:String, status:String, expert:boolean) { 

    this.matricule=matricule;
    this.nom=nom;
    this.status=status;
    this.expert=expert;
  }
}
