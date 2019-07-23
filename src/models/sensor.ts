import { CropType } from "./croptype";

export interface Sensor {
    uid: string,
    name: string,
    crop: CropType,
    normal: boolean
}