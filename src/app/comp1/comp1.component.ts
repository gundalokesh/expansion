import { Component } from '@angular/core';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  Comp2Component =false;
  handleButtonClick() {
    console.log('Button clicked!');
    this.Comp2Component = !this.Comp2Component;
  }


}