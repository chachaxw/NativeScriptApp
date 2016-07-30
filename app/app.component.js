"use strict";
var core_1 = require('@angular/core');
var displayer_component_1 = require('./Displayer/displayer.component');
var keyboard_component_1 = require('./Keyboard/keyboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
    };
    AppComponent.prototype.onKeyBoardClicked = function (text) {
        switch (text.toUpperCase()) {
            case 'C':
                this.counter = '';
                break;
            case '+':
                this.counter = this.counter;
                break;
            case '-':
                this.counter = this.counter;
                break;
            case 'x':
                this.counter = this.counter;
                break;
            case '÷':
                this.counter = this.counter;
                break;
            case '=':
                this.counter = 'chacha';
                break;
            case '.':
                this.counter += text;
                break;
            default:
                this.counter += text;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'calculator',
            template: "\n    <GridLayout rows=\"auto,*\" columns=\"*\">\n      <!--Displayer-->\n      <displayer [input]=\"counter\" row=\"0\"></displayer>\n      <!--Keyboard-->\n      <keyboard row=\"1\" [onKeyBoardClicked]=\"onKeyBoardClicked\"></keyboard>\n    </GridLayout>\n  ",
            directives: [keyboard_component_1.Keyboard, displayer_component_1.Displayer]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map