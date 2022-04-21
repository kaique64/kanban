import TPriority from "./TPriority";

interface TaskDTO {
    name: string;
    description: string;
    priority: TPriority;
    boardId: string;
}

export default TaskDTO;
