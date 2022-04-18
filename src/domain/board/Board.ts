import Task from "../task/Task";

class Board {

    private name: string;
    private tasks: Task[];

    constructor(name: string) {
        this.name = name;
    }

    public addTask(name: string, description: string): void {
        this.tasks.push(new Task(name, description, 'Low'));
    }

}

export default Board;
