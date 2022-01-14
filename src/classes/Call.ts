class Call{
    private _date: string;
    private _time: string;
    private _dialedPhoneNumber: number;
    public _duration: number;

    constructor(date:string,time:string,dialedPhoneNumber:number,durarion:number){
        this._date = date,
        this._time = time,
        this._dialedPhoneNumber = dialedPhoneNumber;
        this._duration = durarion;
    }
}