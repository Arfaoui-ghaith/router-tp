import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { Employe } from '../Employe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  emp ;

  constructor(private lesEmployes:EmployeService,private obj_router:ActivatedRoute) { }

  ngOnInit() {
    this.emp = this.lesEmployes.getEmpbyID(this.obj_router.snapshot.params['id']) ;
  }

}
