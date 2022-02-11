import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'

export default function Footer() {
    return (
     <div className="footer">
         <div className="socialMedia">
            <TwitterIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
         </div>
     </div>
    );
}
