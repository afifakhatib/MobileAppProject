import { Component } from "@angular/core";



@Component({
    selector : 'app-tab1',
    templateUrl : './tab1.component.html',
    styleUrls : ['./tab1.component.scss']
})
export class Tab1Component{
    skillTab : Array<string> = ['ANGULAR','NODE JS','RXJS','TS','JS','HTML','CSS','SCSS','BOOTSTRAP']
    skillContent : Array<string> = ['ANGULAR','NODE JS','RXJS','TS','JS','HTML','CSS','SCSS','BOOTSTRAP']
    selectedFrameWork !: string ;

    constructor(){

    }

    onTabClick(val : string){
          this.selectedFrameWork = val

    }
}