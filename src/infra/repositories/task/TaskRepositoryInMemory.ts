import ITaskRepository from '../../../domain/task/ITaskRepository'
import Task from '../../../domain/task/Task';
import TaskDTO from '../../../domain/task/TaskDTO';
import { v4 as uuid } from 'uuid';

class TaskRepositoryInMemory implements ITaskRepository {

    private tasks: Task[] = [];

    /**
     * function to create a new task in memory
     * @param  {TaskDTO} data task informations (name as string, description as string, priority as string, board as string)
     * @return {Task} return task entity from domain
    */
    public async create(data: TaskDTO): Promise<Task> {
        const task = new Task(data.name, data.description, data.priority, data.boardId, uuid());
        
        this.tasks.push(task);

        return task;
    }
    
    /**
     * function to find the task by your id in memory
     * @param  {string} id the task id, which must be a string (UUID)
     * @return {Task | undefined} the return can be undefined or the task entity from domain
    */
    public async findById(id: string): Promise<Task | undefined> {
        const task = this.tasks.find((task) => task.id === id);
        
        return task;
    }

    /**
     * function to find the task by your id in memory
     * @param  {string} board_id the board id, which must be a string (UUID)
     * @return {Task[]} return a task array, empty or not
    */
    public async listTaskByBoard(board_id: string): Promise<Task[]> {
        const tasksFoundByBoard = this.tasks.filter((task) => task.boardId === board_id);

        return tasksFoundByBoard;
    }

}

export default TaskRepositoryInMemory;