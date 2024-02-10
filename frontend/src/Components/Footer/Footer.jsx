import {Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin,  AiFillCode} from 'react-icons/ai';

const socialLinks = [
  {
    path:"https://www.twitter.com/@_mwangea",
    icon: <AiFillTwitterCircle className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://www.github.com/mwangea",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://www.linkedin.com/mwangea",
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5' />
  },
  {
    path:"https://www.discord.com/mwangea",
    icon: <AiFillCode className='group-hover:text-white w-4 h-5' />
  }
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "About us"
  },
  {
    path: "/",
    display: "Blog"
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a location"
  },
  {
    path: "/",
    display: "Get opinion"
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact us"
  },
  
];

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright &copy; {year} Musa Mwangea all right reserved. 
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) =>(
                <Link to={link.path} key={index} 
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                justify-center group hover:bg-primaryColor hover:first-letter:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>

            <ul>
              {quickLinks01.map((item,index) =>
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7  font-[400] text-textColor'>
                   {item.display}
                </Link>
              </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>I want to</h2>

            <ul>
              {quickLinks02.map((item,index) =>
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7  font-[400] text-textColor'>
                   {item.display}
                </Link>
              </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Support</h2>

            <ul>
              {quickLinks03.map((item,index) =>
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7  font-[400] text-textColor'>
                   {item.display}
                </Link>
              </li>)}
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer