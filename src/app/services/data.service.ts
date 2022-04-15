import { taskFrequency, ITask, tasks } from '../models/data.model';
import * as _ from 'lodash';

export class DataService {
  
    private _tasks: ITask[] = [];

    constructor() {
        this.getMockData();
    }

    private getMockData(): void {
        this._tasks = _.cloneDeep(tasks);
        this._tasks.forEach(task => {
            if (task.frequency === taskFrequency.day) {
                task.currentPeriod.start = new Date();
                task.currentPeriod.end = new Date();
            }

            if (task.frequency === taskFrequency.week) {
                task.currentPeriod.start = new Date(2022, 2, 21);
                task.currentPeriod.end = new Date(2022, 2, 27);
            }
        })
        console.log('this._tasks', this._tasks);
    }
      
    public getTasks(): ITask[] {
        return this._tasks;
    }

    public completeTask(taskId: number | undefined): void {
        const id = this._tasks.findIndex(task => task.id === taskId);

        if (id === -1) {
            alert('Задача не найдена :(');
            return;
        }

        this._tasks[id].complete = true;
    }

}