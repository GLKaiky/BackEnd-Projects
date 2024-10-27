import { Body, Controller, Get ,Post, Param, Put, Delete } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';
//When it comes to a controller, the decorator "" is empty, it is referenced to "/" on the server, but when a parameter is included, it is a new reference in the API URL
//In this case "/task"

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService){ }

    @Post()
    create(@Body() task: TaskDto){
        console.log(this.taskService.create(task));
    }

    @Get('/:id')
    read(@Param('id') id:string){
        console.log(this.taskService.read(id));
    }

    @Put("/update")
    update(@Body() task: TaskDto){
        console.log(this.taskService.update(task));
    }

    @Delete("/:id")
    delete(@Param('id') id:string){
        console.log(this.taskService.delete(id));
    }

    @Get()
    findAll(){
        console.log(this.taskService.findAll());   
    }


}
