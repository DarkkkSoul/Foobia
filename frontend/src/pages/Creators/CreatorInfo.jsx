import React from 'react'

function CreatorInfo(props) {
    return (
        <div className='bg-white px-5 py-3 flex flex-col justify-center items-center gap-y-2.5 rounded-2xl'>
            <div className='flex gap-x-10'>
                <img src={`/creatorsImages/${props.profile}`} className='w-30 rounded-full object-contain' />
                <div className='flex flex-col gap-y-2 items-center justify-center'>
                    <div className='text-black text-lg font-semibold'>{props.name}</div>
                    <div className='flex gap-x-2 w-27 justify-center items-center'>
                        <a href={`https://www.linkedin.com/in/${props.linkedin}/`} className='hover:scale-110 active:scale-90 cursor-pointer'><img src="/creatorsImages/linkedin.png" /></a>
                        <a href={`https://x.com/${props.x}`} className='hover:scale-110 active:scale-90 cursor-pointer'><img src="/creatorsImages/twitter.png" /></a>
                        <a href={`https://github.com/${props.github}`} className='hover:scale-110 active:scale-90 cursor-pointer'><img src="/creatorsImages/github.png" /></a>
                    </div>
                </div>
            </div>
            <div className='text-[17px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi tempore illum eveniet inventore dolorem quia explicabo assumenda suscipit labore aliquid est vero voluptatem voluptate!
            </div>

        </div>
    )
}

export default CreatorInfo