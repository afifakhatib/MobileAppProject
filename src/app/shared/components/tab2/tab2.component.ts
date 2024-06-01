import { Component } from "@angular/core";
import { skillsArr } from "../../const/tab2Data";
// import { Iskills } from "../../modules/tab2.interface";





@Component({
    selector : 'app-tab2',
    templateUrl : './tab2.component.html',
    styleUrls : ['./tab2.component.scss']
})
export class Tab2Component{
    selectedSkill : string = 'node js';
    skills = skillsArr
   
    constructor(){

    }
}