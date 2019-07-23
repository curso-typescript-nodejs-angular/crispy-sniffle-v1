import { Sensor } from "./sensor";

export interface Reading {
    uid: string,
    sensor: Sensor,
    humidity: number,
    creationDateTime: Date
}