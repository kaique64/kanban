class TaskNotFound extends Error {

    constructor(taskId: string) {
        super(`Task id: ${taskId} not found!`);
    }

}

export default TaskNotFound;
