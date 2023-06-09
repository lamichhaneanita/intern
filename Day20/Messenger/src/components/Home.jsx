import React from "react";
import NavBar from './Navbar'
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import profile4 from "../images/profile4.jpg";
import { AiOutlineBars } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Moments from './Moments'
import Blogs from './Blogs'
import { FiMessageCircle } from "react-icons/fi";
import {FaSignal} from 'react-icons/fa'
import {FaWifi} from 'react-icons/fa'
import {CiBatteryFull} from 'react-icons/ci'
const Home =()=>{
  const Profile = [
    { image: profile1 },
    { image: profile2 },
    { image: profile3 },
    { image: profile4 },
  ];
  return(
    
    <div className="flex pt-3 justify-center ">
    <div className=" bg-white  rounded-3xl  ">
      <div className="p-8">
      <div className='flex items-center justify-between px-4 py-2 bg-white'>
        <div className='flex items-center'>
          <p className='text-gray-800 text-sm font-bold mr-2'>
            4:20
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div ><FaSignal/></div>
          <div ><FaWifi/></div>
          <div ><CiBatteryFull/></div>
        </div>
      </div>
        <div className="pt-6">
          <div className="text-lg font-bold ">Moments</div>
        </div>
        <div className="flex gap-6 pt-4">
          <div className="w-16 h-16 text-3xl rounded-full flex justify-center items-center bg-blue-100">
            +
          </div>

          {Profile.map((items) => (
            <Moments img={items.image} />
          ))}
        </div>
        <div className="pt-6 flex justify-between items-center">
          <div className="text-lg font-bold">Latest blogs</div>
          <div className="text-2xl text-blue-700 pr-2">
            <AiOutlineBars />
          </div>
        </div>
        <div className="pt-6">
          <Blogs
            img={profile1}
            name="Kathryn Alexander"
            time="4 mins ago"
            icons="..."
            description="Working on a large project , I was thinking about"
            descriptions="potential feature and tool that could be added "
            descriptionss=" to Figma.One of them is Breakpoints"
            img1={profile2}
            img2={profile3}
            img3={profile4}
            friend="Connie and other likes it"
            hr={<hr />}
            heart={<AiFillHeart />}
            likes="25 likes"
            comment={<FiMessageCircle />}
            comments="13 comments"
          />
        
        </div>
        <div className="pt-6">
          <Blogs
            img={profile2}
            name="John Nathan Fox"
            time="15 hours ago"
            icons="..."
            description="Putting an exact expity date on Python would be so"
            descriptions="much speculation, it might as well pass as"
            descriptionss=" Scienece-fiction.Instead,I will assess the virtues "
            img1={profile4}
            img2={profile1}
            img3={profile3}
            friend="Jhon and other likes it"
            hr={<hr />}
            heart={<AiFillHeart />}
            likes="50 likes"
            comment={<FiMessageCircle />}
            comments="25 comments"
          />
          {/* <Blogs/> */}
        </div>
      </div>
      <div className="">
        <NavBar />
      </div>
    </div>
  </div>
);
};

export default Home;

