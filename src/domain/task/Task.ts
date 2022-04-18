import TPriority from './TPriority';

class Task {

    private name: string;
    private description: string;
    private priority: TPriority;

    constructor(name: string, description: string, priority: TPriority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
    }

    public getName(): string {
        return this.name;
    }

}

export default Task;
