import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITask } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks-block',
  templateUrl: './tasks-block.component.html',
  styleUrls: ['./tasks-block.component.sass']
})
export class TasksBlockComponent implements OnInit, OnChanges {

  @Input() public tasks: ITask[] = [];
  @Output() public taskCompleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  public uncompletedTasks: ITask[] = [];

  constructor(private dataService: DataService) { }

  ngOnChanges(ch: SimpleChanges): void {
    this.uncompletedTasks = this.tasks.filter(task => !task.complete);
  }

  ngOnInit(): void {
  }

  completeTask(id: number | undefined) {
    if (!id) {
      console.log('something went wrong in tasks-block');
      return;
    }

    this.dataService.completeTask(id);
    this.taskCompleted.emit(true);
  }

}
