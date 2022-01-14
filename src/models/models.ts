export class PhoneModel {
    model: string;
    manufacturer: string;
    price: number;
    owner: string;
    battery: BatteryModel;
    display: DisplayModel;

}

export interface BatteryModel {
    model: string;
    hoursIdle: number;
    hoursTalks: number;
    batteryType: BatteryType;
}

export interface DisplayModel {
    size: number;
    numberOfColors: number;
}

enum BatteryType {
    LiIon = "LI-ION",
    NiMH = "NIMH",
    NiCd = "NICD"
}
