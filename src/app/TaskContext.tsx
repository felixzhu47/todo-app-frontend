'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Task } from './types/Task';

type TaskContextType = {
    tasks: Task[];
    addTask: (newTask: Task) => void;
    deleteTask: (index: number) => void;
    editTask: (index: number, updatedTask: Task) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (newTask: Task) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    const deleteTask = (index: number) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const editTask = (index: number, updatedTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) => (i === index ? updatedTask : task))
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTaskContext must be used within a TaskProvider');
    return context;
};
