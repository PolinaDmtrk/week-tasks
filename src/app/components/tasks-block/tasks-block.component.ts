import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITask } from 'src/app/models/data.model';

@Component({
  selector: 'app-tasks-block',
  templateUrl: './tasks-block.component.html',
  styleUrls: ['./tasks-block.component.sass']
})
export class TasksBlockComponent implements OnInit, OnChanges {

  @Input() public tasks: ITask[] = [];
  public uncompletedTasks: ITask[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.uncompletedTasks = this.tasks.filter(task => !task.complete);
  }

  ngOnInit(): void {
  }

}
