'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTaskContext } from '../TaskContext';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import { Task } from '../types/Task';

export default function EditPage() {
    const { addTask, editTask } = useTaskContext();
    const router = useRouter();
    const [task, setTask] = useState<Task | null>(null);
    const [index, setIndex] = useState("");

    const handleSubmit = (title: string, color: string) => {
        if (title && color) {
            const updatedTask: Task = { title, color, completed: false };

            if (index) {
                editTask(parseInt(index), updatedTask);
            } else {
                addTask(updatedTask);
            }
            router.push('/');
        }
    };

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const taskData: Task = {
            title: query.get("title") || "",
            color: query.get("color") || "",
            completed: query.get("completed") === "true",
        };
        const indexFromQuery = query.get("index") || "";
        setIndex(indexFromQuery)
        setTask(taskData);
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="h-[80%] bg-[#1A1A1A] flex flex-col items-center justify-center px-6">
                <div className="w-full max-w-[600px] bg-transparent flex flex-col space-y-4 mt-[-200px]">
                    <button
                        onClick={() => router.push('/')}
                    >
                        <Image
                            src="/images/back_arrow.png"
                            alt="Back Arrow"
                            width={20}
                            height={20}
                            style={{ height: "auto", width: "auto" }}
                        />
                    </button>
                    <TaskForm onSubmit={handleSubmit} task={task} />
                </div>
            </div>
        </div>
    );
}

