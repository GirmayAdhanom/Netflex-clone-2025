import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer () {
  return (
    <>
      <div className='Footer_outer_container' >
        <div className='Footer_inner_container'>
            <div className='Footer_icons'>
                <FacebookOutlinedIcon />
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    <TwitterIcon/>
            </div>
            <div className='Footer_data'>
                <div className='Footer_links'>
                   <ul className='Footer_link'>
                   <li><a href="">Audio Discription</a></li>
                   <li><a href="">Investor Relation</a></li>
                   <li><a href="">Privacy</a></li>
                   <li><a href="">Contact Us</a></li>
                   </ul>
                </div>
                <div className='Footer_links'>
                   <ul className='Footer_link'>
                   <li><a href="">Help Center</a></li>
                   <li><a href="">Jobs</a></li>
                   <li><a href="">Legal NOtices</a></li>
                   <li><a href="">Do Not Sell or Share My Personal Information</a></li>
                   </ul>
                </div>
                <div className='Footer_links'>
                   <ul className='Footer_link'>
                   <li><a href="">Gift Card</a></li>
                   <li><a href="">Netflex Shop</a></li>
                   <li><a href="">Cookies Preferece</a></li>
                   <li><a href="">Ad Choice</a></li>
                   </ul>
                </div>
                <div className='Footer_links'>
                   <ul className='Footer_link'>
                   <li><a href="">Media Center</a></li>
                   <li><a href="">Terms of Use</a></li>
                   <li><a href="">Corporate Information</a></li>
                   </ul>
                </div>
            </div>

            <div className='Service_Code'>
                <input className='sercive' placeholder='Service Code' />
            </div>

            <div className='Copy_Right'>
                <p>&copy;  ©1997-2025 Netflix,Inc. </p>
                

            </div>



        </div>

      </div>

    </>
  )
}

export default Footer;

