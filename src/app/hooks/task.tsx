import { Task } from "../types/Task";

export const fetchTasks = async (): Promise<Task[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async (title: string, color: string): Promise<Task> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, color, completed: false }),
        });

        if (!response.ok) {
            throw new Error('Failed to create task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export const editTask = async (
    id: number,
    completed: boolean,
): Promise<Task> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });

        if (!response.ok) {
            throw new Error('Failed to edit task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error editing task:', error);
        throw error;
    }
};

export const deleteTask = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
