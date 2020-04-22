import { Component, OnInit, Input } from '@angular/core';
import { Code } from 'src/app/models/code';

@Component({
  selector: 'code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.css']
})
export class CodeDetailComponent implements OnInit {

  @Input()
  code: Code;

  @Input()
  width:number;

  @Input()
  height:number;

  codeName:string;
  backgroundUrl:string;

  constructor() {}

  ngOnInit(): void {
  }

}
