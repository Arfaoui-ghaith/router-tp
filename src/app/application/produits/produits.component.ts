import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../employe.service';
import { Employe } from '../../Employe';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  Employes ;

  constructor(private lesEmployes:EmployeService) { }

  ngOnInit() {
    this.Employes = this.lesEmployes.lesEmployes ;
  }

}
