import { CodeAction } from './code-action';

export class Code {
    name:string;
    state:boolean;
    imgUrl:string;
    imgUrlThumb:string;
    actions:Array<CodeAction>;

    constructor(name:string){
        this.name = name;
        this.actions = new Array<CodeAction>();
    }

}
