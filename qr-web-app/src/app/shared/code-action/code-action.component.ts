import { Component, OnInit, Input } from '@angular/core';
import { CodeAction } from 'src/app/models/code-action';

@Component({
  selector: 'code-action',
  templateUrl: './code-action.component.html',
  styleUrls: ['./code-action.component.css']
})
export class CodeActionComponent implements OnInit {

  @Input()
  action:CodeAction;

  @Input()
  showName:Boolean;

  @Input()
  fontSize:string = "16px";
  
  constructor() { }

  ngOnInit(): void {
    if(this.showName == undefined){
        this.showName = true;
    }
  }

}
