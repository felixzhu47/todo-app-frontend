'use client'

import { useTaskContext } from '../TaskContext';
import TaskItem from './TaskItem';

export default function TaskCard() {
    const { tasks, deleteTask, editTask } = useTaskContext();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const toggleTaskCompletion = (index: number) => {
        const task = tasks[index];
        editTask(index, { ...task, completed: !task.completed });
    };

    return (
        <div className="flex flex-col items-center w-full mt-20">
            <div className="relative w-[90%] sm:w-[50%] mt-4">
                <div className="absolute -top-7 left-0 flex items-center space-x-2">
                    <span className="text-[#4EA8DE] text-[15px] font-bold">Tasks</span>
                    <div className="flex items-center justify-center bg-[#333333] text-white text-[12px] font-bold rounded-full w-[20px] h-[20px]">
                        {totalTasks}
                    </div>
                </div>
                <div className="absolute -top-7 right-0 flex items-center space-x-2">
                    <span className="text-[#5E60CE] text-[15px] font-bold">Completed</span>
                    <div className="flex items-center justify-center bg-[#333333] text-white text-[12px] font-bold rounded-full w-auto px-4 h-[20px]">
                        {completedTasks} of {totalTasks}
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-2"></div>
            </div>
            <div className="w-[90%] sm:w-[50%] mt-8">
                {totalTasks === 0 ? (
                    <div className="flex flex-col items-center justify-center space-y-4 text-[#808080] ">
                        <img src="/images/clipboard.png" alt="Clipboard" className="w-12 h-12" />
                        <p className="text-[16px] font-bold">You don't have any tasks registered yet</p>
                        <p className="text-md">Create tasks and organize your to-do items.</p>
                    </div>
                ) : (
                    tasks.map((task, index) => (
                        <TaskItem key={index} index={index} task={task} onDelete={() => deleteTask(index)} onToggleComplete={() => toggleTaskCompletion(index)} />
                    ))
                )}
            </div>
        </div>
    );
}
