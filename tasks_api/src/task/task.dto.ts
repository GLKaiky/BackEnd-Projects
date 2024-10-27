//The DTO is a simple description of the object that will be used in API...
export class TaskDto{
    id: string;
    title: string;
    description: string;
    status: string;
    expiration: Date;
}