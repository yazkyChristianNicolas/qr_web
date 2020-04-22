import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { CodeAction } from 'src/app/models/code-action';
import { Code } from 'src/app/models/code';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-code',
  templateUrl: './new-code.component.html',
  styleUrls: ['./new-code.component.css']
})
export class NewCodeComponent implements OnInit {

  currentCode:Code;
  currentAction: CodeAction;
  blueprint:string;

  formSubmitted = false;
  actionEditIndex:number;
  actionButtonLengend:string = "Agregar";

  actionLimit:number = 6;
  
  constructor() { }

  ngOnInit(): void {
    this.blueprint = "ninguna";
    this.currentAction = new CodeAction("Nombre Acción", "action", "notifications");
    this.currentCode = new Code("Nombre del Código");    
  }

  onSubmitCodeForm(){
    console.log("Add code");
  }

  addAction(){
    if(this.actionEditIndex == undefined){
      if(this.currentCode.actions.length < this.actionLimit){
        this.currentCode.actions.push(new CodeAction(this.currentAction.name, this.currentAction.type, "notifications"));
      }
    }else{
      this.currentCode.actions.splice(this.actionEditIndex, 1, this.currentAction);
      this.currentAction = new CodeAction("Nombre Acción", "action", "notifications");
      this.actionEditIndex = undefined;
      this.actionButtonLengend = "Agregar";
    }
  }

  editAction(index:number){
    this.actionButtonLengend = "Guardar";
    this.actionEditIndex = index;
    this.currentAction = this.currentCode.actions[index];
  }

  deleteAction(index:number){
    this.currentCode.actions.splice(index, 1);
  }

}
