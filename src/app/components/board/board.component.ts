import { Component, OnInit } from '@angular/core';
import { ITask, taskFrequency } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

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

}
