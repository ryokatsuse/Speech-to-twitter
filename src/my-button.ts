import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('my-button')
class MyButton extends LitElement {
  @property({ type: String })
  label = '';

  @property({type: String})
  size = '';

  @state() private isApply = false

  handleClick() {
    this.isApply = true
    window.setTimeout( () => {
      this.isApply = false
    }, 30)
  }

  render() {
    const {handleClick, label, isApply} = this
    return html`
      <button @click=${handleClick}>
        ${isApply ? '送信中' : `${label}`}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}