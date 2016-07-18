import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 10;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hello Chacha! \nYou are ready to start building! \n Welcome To NativeScript";
        }
    }

    public onTap() {
        this.counter--;
    }
}
