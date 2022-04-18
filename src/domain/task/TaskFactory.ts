import Task from "./Task";
import TPriority from "./TPriority";

class TaskFactory {

    private task: Task;

    public withNameDescriptionPriority(name: string, description: string, priority: TPriority): TaskFactory {
        this.task = new Task(name, description, priority);
        return this;
    }

    public create(): Task {
        return this.task;
    }

}

export default TaskFactory;
