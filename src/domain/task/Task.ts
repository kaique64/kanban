import TPriority from './TPriority';

class Task {

    public id: string;
    public name: string;
    public description: string;
    public priority: string;

    constructor(name: string, description: string, priority: TPriority, id?: string) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        if (id) {
            this.id = id;
        }
    }

    /*public getName(): string {
        return this.name;
    }

    public getId(): string | undefined {
        return this.id;
    }*/

}

export default Task;
