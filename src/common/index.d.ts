export interface StateMessage {
    arms: Arm[];
    message: string;
}

export interface Arm {
    region: string;
    area: string;
    ID: number;
    description: string;
}