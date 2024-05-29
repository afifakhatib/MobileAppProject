import { Component } from "@angular/core";
import { skillTab } from "../../const/tabData";



@Component({
    selector : 'app-tab',
    templateUrl : './tab.component.html',
    styleUrls : ['./tab.component.scss']
})
export class TabComponent{
    skillTab : Array<string> = ['ANGULAR','NODE JS','RXJS','TS','JS','HTML','CSS','SCSS','BOOTSTRAP']
    skillContent : Array<string> = ['ANGULAR','NODE JS','RXJS','TS','JS','HTML','CSS','SCSS','BOOTSTRAP']
    skills = skillTab
    selectedFrameWork !: string ;

    constructor(){

    }

    onTabClick(val : string){
          this.selectedFrameWork = val

    }
}