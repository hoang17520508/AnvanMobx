import {observable,computed,autorun,when, reaction, makeAutoObservable} from 'mobx'


export class Sum2Number{
    constructor(){
        this.log();
        this.doubleBum1When();
        makeAutoObservable(this);

    }
    @observable num1:number=0;
    @observable num2:number=0;
    @observable doubleTotal:number=0;

    @computed get total(){
        return this.num1+this.num2;


    }
    log=()=>{
        autorun((reaction)=>{
            if(this.total>10)
            {
                reaction.dispose();
            }
            console.log(this.total);
        })
    }
    doubleBum1When=()=>{
        //chi chay 1 lan
        when(
            ()=>this.total>100,
            ()=>(this.doubleTotal=this.total*2)

        )
    }


}
export type TSum2NumberStore=typeof Sum2Number;