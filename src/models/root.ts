import { action, makeObservable, observable } from "mobx";

interface IDrugs {
  id: string;
  title: string;
  manufacturer: string;
  description: string;
  duration: string;
}
export class RootStore {
  public condition?: string;
  public subCondition?: string;
  public drugs?: IDrugs | null;
  constructor() {
    makeObservable(this, {
      condition: observable,
      setCondition: action,
      subCondition: observable,
      setSubCondition: action,
      drugs: observable,
      setDrugs: action,
    });
  }

  public setCondition(value: string): void {
    this.condition = value;
  }
  public setSubCondition(value: string): void {
    this.subCondition = value;
  }
  public setDrugs(value: IDrugs | null): void {
    this.drugs = value;
  }
}
