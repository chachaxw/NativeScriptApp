import {Component,Input,OnInit} from "@angular/core";
import {NSButton} from '../NSButton/nsbutton.component';

@Component({
  selector: "keyboard",
  templateUrl: "Keyboard/keyboard.component.html",
  directives: [NSButton],
  styleUrls: ["Keyboard/keyboard.css"],
})
export class Keyboard implements OnInit{
  @Input('onKeyBoardClicked') onKeyBoardClicked: Function;

  ngOnInit() {
    this.onBtnClicked = this.onBtnClicked.bind(this);
  }

  public onBtnClicked(text:string):void {
    this.onKeyBoardClicked && this.onKeyBoardClicked(text);
  }
}
