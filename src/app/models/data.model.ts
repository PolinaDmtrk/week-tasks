import { WeekDay } from '@angular/common';

export enum taskFrequency {
    day = 'day',
    week = 'week'
}

export interface ITask {
    id: number | undefined;
    task: string | undefined;
    date: Date | null | undefined;
    frequency: taskFrequency | undefined;
    complete: boolean | undefined;
    currentPeriod: {
        start: Date | null | undefined;
        end: Date | null | undefined;
    };
}

export interface IWeekDay {
    day: WeekDay;
    title: string;
    date: Date;
}

export class Task {
    public id: number | undefined;
    public task: string | undefined;
    public date: Date | null | undefined;
    public frequency: taskFrequency | undefined;
    public complete: boolean | undefined;
    public currentPeriod: {
        start: Date | null | undefined,
        end: Date | null | undefined
    }

    constructor(data?: ITask) {
        this.id = data?.id;
        this.task = data?.task;
        this.date = data?.date;
        this.frequency = data?.frequency;
        this.complete = data?.complete;
        this.currentPeriod = data ? Object.assign(data.currentPeriod) : {};
    }
}

export const tasks: ITask[] = [
    {
        id: 1,
        task: 'сделать ежедневное дело 1',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 2,
        task: 'сделать ежедневное дело 2 с очень длинным описанием для того чтобы корректно проставить стили для блока с отдельной задачей',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 3,
        task: 'сделать ежедневное дело 3',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 4,
        task: 'сделать ежедневное дело 4',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 5,
        task: 'сделать ежедневное дело 5',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 6,
        task: 'сделать ежедневное дело 6',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 7,
        task: 'сделать ежедневное дело 7',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 8,
        task: 'сделать ежедневное дело 8',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 9,
        task: 'сделать ежедневное дело 9',
        date: null,
        frequency: taskFrequency.day,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 111,
        task: 'сделать еженедельное дело 1',
        date: new Date(2022, 2, 21),
        frequency: taskFrequency.week,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 112,
        task: 'сделать еженедельное дело 2',
        date: new Date(2022, 2, 21),
        frequency: taskFrequency.week,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 113,
        task: 'сделать еженедельное дело 3',
        date: new Date(2022, 2, 22),
        frequency: taskFrequency.week,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 114,
        task: 'сделать еженедельное дело 4',
        date: new Date(2022, 2, 22),
        frequency: taskFrequency.week,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    },
    {
        id: 115,
        task: 'сделать еженедельное дело 5',
        date: new Date(2022, 2, 24),
        frequency: taskFrequency.week,
        complete: false,
        currentPeriod: {
            start: null,
            end: null
        }
    }
]

export const week: IWeekDay[] = [
    {
        day: WeekDay.Monday,
        title: 'понедельник',
        date: new Date(2022, 2, 21)
    },
    {
        day: WeekDay.Tuesday,
        title: 'вторник',
        date: new Date(2022, 2, 22)
    },
    {
        day: WeekDay.Wednesday,
        title: 'среда',
        date: new Date(2022, 2, 23)
    },
    {
        day: WeekDay.Thursday,
        title: 'четверг',
        date: new Date(2022, 2, 24)
    },
    {
        day: WeekDay.Friday,
        title: 'пятница',
        date: new Date(2022, 2, 25)
    },
    {
        day: WeekDay.Saturday,
        title: 'суббота',
        date: new Date(2022, 2, 26)
    },
    {
        day: WeekDay.Sunday,
        title: 'воскресенье',
        date: new Date(2022, 2, 27)
    }
]
