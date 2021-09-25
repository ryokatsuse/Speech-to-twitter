import { LitElement } from 'lit';
declare class MyButton extends LitElement {
    label: string;
    size: string;
    private isApply;
    handleClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
export {};
//# sourceMappingURL=my-button.d.ts.map