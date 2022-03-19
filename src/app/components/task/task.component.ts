import { Component, Input, OnInit } from '@angular/core';
import { ITask, Task } from 'src/app/models/data.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() public task: ITask = new Task();

  constructor() { }

  ngOnInit(): void {
  }

}
