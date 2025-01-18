'use client';

import Image from 'next/image';

export default function Header() {
    return (
        <div className="h-[20%] bg-[#0D0D0D] flex items-center justify-center">
            <div className="flex items-center space-x-3">
                <Image
                    src="/images/rocket.png"
                    alt="Rocket Icon"
                    width={30}
                    height={20}
                    style={{ height: '30px', width: '20px' }}
                />
                <h1 className="text-[40px] leading-[48.41px] font-black">
                    <span className="text-[#4EA8DE]">Todo</span>{' '}
                    <span className="text-[#5E60CE]">App</span>
                </h1>
            </div>
        </div>
    );
}
