import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TASKS } from 'src/app/mock-tasks';
import type { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})

// Uncomment to below comments to use json-server instead instead of a mock file.
export class TasksComponent implements OnInit {
  // tasks: Task[] = [];
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask = (deletedTask: Task) => {
    // this.taskService
    //   .deleteTask(deletedTask)
    //   .subscribe(
    //     () => (this.tasks = this.tasks.filter((t) => t.id !== deletedTask.id))
    //   );
    this.tasks = this.tasks
      .filter((task) => task.id !== deletedTask.id)
      .map((task, i) => ({ ...task, id: i }));
  };

  toggleReminder = (toggledTask: Task) => {
    toggledTask.reminder = !toggledTask.reminder;
    // this.taskService
    //   .updateTaskReminder(task)
    //   .subscribe(
    //     () =>
    //       (this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t)))
    //   );
    this.tasks = this.tasks.map((task) =>
      task.id === toggledTask.id ? toggledTask : task
    );
  };

  addTask = (addedTask: Task) => {
    // this.taskService.addTask(addedTask).subscribe(() => this.tasks.push(addedTask));
    this.tasks = this.tasks.concat({ ...addedTask, id: this.tasks.length });
  };
}
