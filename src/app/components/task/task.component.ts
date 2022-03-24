import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask, Task } from 'src/app/models/data.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() public task: ITask = new Task();
  @Output() public taskCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  test: any;

  constructor() { }

  ngOnInit(): void {
  }

  public completeTask(id: number | undefined): void {
    this.taskCompleted.emit(true);
  }

}
