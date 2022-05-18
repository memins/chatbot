import { action, makeObservable, observable } from "mobx";

export class RootStore {
  public condition?: string;

  constructor() {
    makeObservable(this, { condition: observable, setCondition: action });
  }

  public setCondition(value: string): void {
    this.condition = value;
  }
}
