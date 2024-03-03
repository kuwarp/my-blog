import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsYoutube, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className=''>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 rounded-lg text-white'>
              <img className='rounded-full w-24' src="https://kuwarpratap.com/images/kp.png" />
              </span>
              
            </Link>
          </div>
          
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="kuwarp's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/kps70' icon={BsLinkedin}/>
            <Footer.Icon href='https://www.instagram.com/shoraan_ashu/' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/kuwarp' icon={BsGithub}/>
            <Footer.Icon href='https://www.youtube.com/@kubekode' icon={BsYoutube}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
