import {Component,OnInit} from '@angular/core';
import {Displayer} from './Displayer/displayer.component';
import {Keyboard} from './Keyboard/keyboard.component';

@Component({
  selector: 'app',
  template: `
    <GridLayout rows="auto,*" columns="*">
      <Displayer [input]="counter"></Displayer>
      <Keyboard row="1" [onKeyBoardClicked]="onKeyBoardClicked"></Keyboard>
    </GridLayout>
  `,
  directives: [Keyboard,Displayer]
})

export class AppComponent implements OnInit{
  public counter: string = '';

  ngOnInit() {
    this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
  }

  public onKeyBoardClicked(text: string):void {
    switch(text.toUpperCase()) {
      case 'C' :
        this.counter = '';
        break;
      default:
        this.counter += text;
    }
  }
}
