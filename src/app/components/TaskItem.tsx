import { useRouter } from "next/navigation";
import { Task } from "../types/Task";

interface TaskItemProps {
    index: number;
    task: Task;
    onDelete: () => void;
    onToggleComplete: () => void;
}

export default function TaskItem({ index, task, onDelete, onToggleComplete }: TaskItemProps) {
    const router = useRouter();
    const handleNavigateToEdit = () => {
        router.push(`/edit?title=${encodeURIComponent(task.title)}&color=${encodeURIComponent(task.color)}&completed=${encodeURIComponent(task.completed)}&index=${encodeURIComponent(index.toString())}`);
    };
    return (
        <div className="flex items-center justify-between bg-[#444444] text-white rounded-lg py-3 px-4 mb-4 w-full hover:shadow-lg hover:bg-[#555555] cursor-pointer" onClick={handleNavigateToEdit}>
            <div className="flex items-center space-x-3 z-10">
                <div
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer relative ${task.completed ? 'bg-[#5E60CE] border-[#5E60CE]' : 'bg-transparent border-[#4EA8DE]'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleComplete()
                    }}
                >
                    {task.completed && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white absolute top-[3px] left-[3px]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                <span className={task.completed ? 'line-through text-[#808080]' : ''}>{task.title}</span>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent navigation
                        onDelete(); // Only delete the task
                    }}
                    className="p-2 rounded-full hover:bg-gray-700 transition-all"
                >
                    <img
                        src="/images/trash.png"
                        alt="Delete Task"
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </div>
    );
}
