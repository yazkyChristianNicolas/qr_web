export class CodeAction {

    id:number;
    name:string;
    type:string;
    icon:string;
    url:string;
    imgUrl:string;
    imgUrlThumb:string;
    showName:boolean;

    constructor(name:string = undefined, type:string = undefined, icon:string){
        this.name = name;
        this.type = type;
        this.icon = icon;
    }
    
    getShowName():boolean{
        return (this.name != undefined || this.showName )? true: false;
    }

}
