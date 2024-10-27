import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { NotFoundError } from 'rxjs';

// The service is the place in project where the programming logic is added
//O service é onde é adicionada a logica de Programação do serviço

@Injectable()
export class TaskService {
    
    private tasks: TaskDto[] = [];

    create(task: TaskDto) : TaskDto[]{
        this.tasks.push(task);

        return this.tasks;
    }

    read(id: string): TaskDto{
        const foundTask = this.tasks.filter(t => t.id == id);

        if(foundTask.length > 0){
            return foundTask[0]
        }
        
        throw new NotFoundException("Nao achamo o trem")
    }
    
    update(task: TaskDto) : boolean{
        let taskIndex = this.tasks.findIndex(t => t.id === task.id);
        if(taskIndex >=0){
            this.tasks[taskIndex] = task;
            return true;
        }
        return false;
    }

    delete(id: string) : boolean{
        let taskIndex = this.tasks.findIndex(t => t.id === id);
        if(taskIndex >= 0){
            this.tasks.splice(taskIndex, 1);
            return true;
        }

        return false;
    }

    findAll() : TaskDto[] | undefined {
        if(this.tasks.length){
            return this.tasks
        }
        throw new NotFoundException("Array vazio");
    }

}
