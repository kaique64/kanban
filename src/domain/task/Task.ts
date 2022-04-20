import TPriority from './TPriority';

class Task {

    public id: string;
    public name: string;
    public description: string;
    public priority: string;

    constructor(name: string, description: string, priority: TPriority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
    }

    /*public getName(): string {
        return this.name;
    }

    public getId(): string | undefined {
        return this.id;
    }*/

}

export default Task;
