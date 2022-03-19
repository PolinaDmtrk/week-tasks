import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksBlockComponent } from './components/tasks-block/tasks-block.component';
import { DataService } from './services/data.service';
import { BoardComponent } from './components/board/board.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksBlockComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
