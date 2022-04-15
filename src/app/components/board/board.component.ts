import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITask, IWeekDay, taskFrequency, week } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {

  public week: IWeekDay[] = week;
  public dayOptions = {
    title: 'ежедневные',
    date: new Date(2022, 2, 26)
  };
  public allTasks: ITask[] = [];
  public dayTasks: ITask[] = [];
  public weekTasks: ITask[] = [];

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.initBoard();
  }

  initBoard() {
    this.allTasks = this.dataService.getTasks();
    this.dayTasks = this.allTasks.filter(task => task.frequency === taskFrequency.day);
    this.weekTasks = this.allTasks.filter(task => task.frequency === taskFrequency.week);
  }

  public getWeekDayTasks(date: Date): ITask[] {
    console.log('getWeekDayTasks', date);
    const tasks = this.weekTasks.filter(task => task.date && task.date.getTime() === date.getTime());
    return tasks;
  }

}
