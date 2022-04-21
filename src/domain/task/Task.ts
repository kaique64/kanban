import TPriority from './TPriority';

class Task {

    id: string;
    name: string;
    description: string;
    priority: string;
    boardId: string;

    constructor(name: string, description: string, priority: TPriority, boardId: string, id?: string) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.boardId = boardId;
        if (id) {
            this.id = id;
        }
    }

}

export default Task;
