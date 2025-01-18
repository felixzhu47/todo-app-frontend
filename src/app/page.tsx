'use client'

import Image from 'next/image';
import { useRouter, } from 'next/navigation';
import Header from './components/Header';
import TaskCard from './components/TaskCard';

export default function Page() {
  const router = useRouter();
  const handleCreateTaskClick = () => {
    router.push('/edit');
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-[80%] bg-[#1A1A1A] flex flex-col items-center relative">
        <button onClick={handleCreateTaskClick} className="w-full max-w-[600px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[50%] bg-[#1E6F9F] text-[#F2F2F2] font-bold py-3 rounded-lg shadow-md hover:bg-gray-200 transition flex items-center justify-center space-x-2">
          <span>Create Task</span>
          <Image
            src="/images/plus.png"
            alt="Plus Icon"
            width={20}
            height={20}
            style={{ height: "20px", width: "20px" }}
          />
        </button>
        <TaskCard />
      </div>
    </div>
  );
}
