var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.size = '';
        this.isApply = false;
    }
    handleClick() {
        this.isApply = true;
    }
    render() {
        const { handleClick, label, isApply } = this;
        return html `
      <button @click=${handleClick}>
        ${isApply ? '送信中' : `${label}`}
      </button>
    `;
    }
};
__decorate([
    property({ type: String })
], MyButton.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MyButton.prototype, "size", void 0);
__decorate([
    state()
], MyButton.prototype, "isApply", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
//# sourceMappingURL=ｍy-button.js.map