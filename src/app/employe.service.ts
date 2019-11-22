import { Injectable } from '@angular/core';
import { Employe } from './Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
lesEmployes = [
 new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
 new Employe(12587,'Maha Ben Nasr', 'Ingénieur', false),
 new Employe(85719, 'Alia Moalla', 'Secrétaire', false),
 new Employe(45879,'Sami Toumi', 'Ingénieur', true)
 ]
  constructor() { }

  getEmpbyID(id:number){
    for(let i=0;i<this.lesEmployes.length;i++){
        if(id==this.lesEmployes[i].matricule){
            return  this.lesEmployes[i];
        }
    }
    return null;
  }
}
