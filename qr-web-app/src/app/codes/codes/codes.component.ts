import { Component, OnInit } from '@angular/core';
import {CodeNotification} from 'src/app/models/code-notification.model';


@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {

  notifications:CodeNotification[]  = [
    {
      "id": "5e799694585aa6a7b32e343b",
      "name": "Notificacion 0",
      "state": "estado",
      "action": "accion presionada",
      "date": "Tuesday, March 3, 2020 7:42 AM"
    },
    {
      "id": "5e799694fd7d9f8454f46b4c",
      "name": "Notificacion 1",
      "state": "estado",
      "action": "accion presionada",
      "date": "Sunday, March 1, 2020 1:20 AM"
    },
    {
      "id": "5e799694ab5e9ab3aff80ece",
      "name": "Notificacion 2",
      "state": "estado",
      "action": "accion presionada",
      "date": "Friday, January 17, 2020 1:17 AM"
    },
    {
      "id": "5e799694b5550c436f771b07",
      "name": "Notificacion 3",
      "state": "estado",
      "action": "accion presionada",
      "date": "Thursday, March 12, 2020 6:37 AM"
    },
    {
      "id": "5e799694ea87ecbdcabeb503",
      "name": "Notificacion 4",
      "state": "estado",
      "action": "accion presionada",
      "date": "Monday, February 24, 2020 9:45 PM"
    },
    {
      "id": "5e7996945cbeda66de05f634",
      "name": "Notificacion 5",
      "state": "estado",
      "action": "accion presionada",
      "date": "Wednesday, February 26, 2020 4:11 AM"
    },
    {
      "id": "5e799694d12b683bd2e287a2",
      "name": "Notificacion 6",
      "state": "estado",
      "action": "accion presionada",
      "date": "Monday, January 13, 2020 4:13 AM"
    }
  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
