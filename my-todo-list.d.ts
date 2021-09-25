import { LitElement } from 'lit';
interface ToDoItem {
    text: string;
    completed: boolean;
}
export declare class MyToDoList extends LitElement {
    static styles: import("lit").CSSResultGroup;
    title: string;
    listItems: {
        text: string;
        completed: boolean;
    }[];
    disabled: boolean;
    input: HTMLInputElement;
    render(): import("lit-html").TemplateResult<1>;
    todoCompleted(item: ToDoItem): void;
    handleButtonDisabled(): void;
    addToDo(): void;
}
export {};
//# sourceMappingURL=my-todo-list.d.ts.map