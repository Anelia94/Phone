import { PhoneModel, BatteryModel, DisplayModel } from "../models/models";

export class Phone implements PhoneModel {
    private _model: string;
    private _manufacturer: string;
    private _price: number;
    private _owner: string;
    public battery: BatteryModel;
    public display: DisplayModel;
    public callHistory: Call[];

    get model(): string {
        return this._model;
    }
    get manufacturer(): string {
        return this._manufacturer;
    }
    get price(): number {
        return this._price;
    }
    get owner(): string {
        return this._owner;
    }

    set model(model: string) {
        this._model = model;
    }

    set manufacturer(manufacturer: string) {
        this._manufacturer = manufacturer;
    }

    set price(price: number) {
        this._price = price;
    }

    set owner(owner: string) {
        this._owner = owner;
    }


    constructor(model: string,
        manufacturer: string,
        price?: number,
        owner?: string,
        battery?: BatteryModel,
        display?: DisplayModel) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this.battery = battery;
        this.display = display;
    }

    public addCall(call: Call):void {
        if (this.callHistory.length === 0) {
            this.callHistory = [];
        }
        this.callHistory.push(call);
    }

    public deleteCall(call:Call):void {

     }

     public deleteCallHistory(){
         this.callHistory = [];
     }
}