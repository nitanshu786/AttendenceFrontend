export class Task {
    applicationUserId:any;
    projectId:string
    currentUserId:any
    task_Name:string;
    taskDiscription: string
    taskEnd:any
    taskPriority:any
    taskStart:any

    constructor()
    {
        this.applicationUserId=null;
        this.projectId=""
        this.task_Name=""
        this.taskDiscription=""
        this.taskEnd=null
        this.taskPriority=""
        this.taskStart=null;
        this.currentUserId=null;
    }


}

export class EditTask{
    task_Id:string;
    projectName:string;
    applicationUserId:any;
    formatDateStart:any
    task_Name:string;
    taskDiscription: string
    taskEnd:any
    taskPriority:string
    currentUserId:any
    constructor()
    {
        this.task_Id=""
        this.applicationUserId=null;
        this.projectName=""
        this.task_Name=""
        this.taskDiscription=""
        this.taskEnd=null
        this.taskPriority=""
        this.formatDateStart=null;
        this.currentUserId=null;
    }
}

export class Reordring{
    task_Id:any;
    index:any;

    constructor(){
        this.task_Id=null;
        this.index=null;
    }
}
