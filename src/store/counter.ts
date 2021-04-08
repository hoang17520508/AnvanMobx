import {observable,action, makeAutoObservable} from 'mobx'

export class Counter{
    @observable count:number = 0;
    constructor() {
        makeAutoObservable(this)
      }
    @action
    increase=()=>{
        this.count+=1;
    }
    @action
    decrease=()=>{
        this.count-=1;
    }
    @action
    reset=()=>{
        this.count=0;
    }
}
export type TcounterStore =typeof Counter;