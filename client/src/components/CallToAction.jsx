import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row  justify-center items-center rounded-tl-3xl rounded-br-3xl '>
        <div className="">
            <h2 className='text-2xl'>
            Hi there, I am‍
Kuwar Pratap Singh
            </h2>
            <p className='text-gray-500 my-2'>
            I am an outstanding Software/Web Developer | DevOps Engineer having 2+ yr experience in different technologies . <br/> You will find me smiling almost every time while designing thoughtful products, and experiences that people love and businesses value.


            </p>
            <a className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2' href="https://www.kuwarpratap.com" target='_blank' rel='noopener noreferrer'>
                    My Website 
                </a>
            <br/>
        </div>
        <div className='px-7 my-3'  >
            <img className='rounded-lg w-44' src="https://kuwarpratap.com/images/kp.png" />
        </div>
    </div>
  )
}