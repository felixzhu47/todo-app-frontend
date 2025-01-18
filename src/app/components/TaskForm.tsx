import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { COLOR_LIST } from '../utils/color';

type TaskFormProps = {
    onSubmit: (title: string, color: string) => void;
    task: Task | null;
};

export default function TaskForm({ onSubmit, task }: TaskFormProps) {
    const [title, setTitle] = useState(task?.title || "");
    const [color, setColor] = useState(task?.color || "");

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setColor(task.color);
        }
    }, [task]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleColorChange = (selectedColor: string) => {
        setColor(prevColor => (prevColor === selectedColor ? '' : selectedColor));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && color) {
            onSubmit(title, color);
            setTitle('');
            setColor('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="text-[#4EA8DE] font-bold pb-[10px]">Title</label>
                <input
                    type="text"
                    id="title"
                    className="w-full p-2 mt-2 rounded-lg bg-[#333333] text-[14px] text-white"
                    placeholder="Ex. Watch a movie"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label className="text-[#4EA8DE] font-bold">Color</label>
                <div className="flex space-x-2 mt-2">
                    {COLOR_LIST.map((item) => (
                        <div
                            key={item}
                            onClick={() => handleColorChange(item)}
                            className={`w-8 h-8 rounded-full cursor-pointer border-[2px] ${color === item ? 'border-white' : 'border-transparent'}`}
                            style={{ backgroundColor: item }}
                        ></div>
                    ))}
                </div>
            </div>
            <button
                type="submit"
                className={`w-full py-2 rounded-lg text-[#F2F2F2] font-bold flex items-center justify-center space-x-2 ${(!title || !color) && !task ? 'bg-gray-400' : 'bg-[#1E6F9F]'}`}
                disabled={!title || !color}
            >
                <span>{task?.title !== "" && task?.color !== "" ? 'SAVE' : 'ADD TASK'}</span>
                {task?.title !== "" && task?.color !== "" ? <></> : <Image
                    src="/images/plus.png"
                    alt="Plus Icon"
                    width={20}
                    height={20}
                />}
            </button>
        </form>
    );
}
