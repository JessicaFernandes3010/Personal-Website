import React from 'react'

const Footer = () => {
    return <footer className="bg-[#12141e] pt-1">
        <div className=" flex items-center justify-center gap-4 flex-wrap md:gap-8  ">
            <span className=' text-gray-300 font-[600] text-[15px] '>
                Follow Me:
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://www.linkedin.com/in/jessica-fernandes-04b161219/" className="text-gray-300 font-[500] text-[18px] "><i class="ri-linkedin-box-fill"></i></a>
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://github.com/JessicaFernandes3010" className="text-gray-300 font-[500] text-[18px] "><i class="ri-github-fill"></i></a>
            </span>
            
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="#" className="text-gray-300 font-[500] text-[18px] "><i class="ri-instagram-fill"></i></a>
            </span>
            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="mailto:jessiferns3010@gmail.com" className="text-gray-300 font-[500] text-[18px] "><i class="ri-mail-fill"></i></a>
            </span>


        </div>
        

    </footer>
}
export default Footer;