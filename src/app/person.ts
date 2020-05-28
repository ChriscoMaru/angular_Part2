export class Person {
    private name: string;
    private hobby: string;

    constructor(name:string , hobby: string){
        this.name = name;
        this.hobby = hobby;
    }
    getDetailOfPerson():string{
        return this.name + " " + this.hobby
    }
    setDetailOfPerson(name:string,hobby:string):void{
        this.name= name;
        this.hobby = hobby;
    }  
}