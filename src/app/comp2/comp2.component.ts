import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  displaySecondaryComponent = false;

  toggleSecondaryComponent() {
    this.displaySecondaryComponent = !this.displaySecondaryComponent;
  }
  reload(){
    window.location.reload();
  }

}
