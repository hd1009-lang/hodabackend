export interface Habit {
    _id?: String;
    process?: boolean;
    date?: string;
    water?: number;
}
export interface HabitWaterRequest {
    idUser: string;
    year: number;
    data: Habit;
}
export interface HabitWater {
    idUser: string;
    year: number;
    data: Habit[];
}
