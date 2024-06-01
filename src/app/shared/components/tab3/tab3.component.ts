import { Component } from "@angular/core";
import { skillsArr } from "../../const/tab2Data";





@Component({
    selector : 'app-tab3',
    templateUrl : './tab3.component.html',
    styleUrls : ['./tab3.component.scss']
})
export class Tab3component{
    selectedSkill :string = 'angular';
    skillArr = skillsArr
    constructor(){

    }
}