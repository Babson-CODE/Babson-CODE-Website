import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import { Affix, Button } from 'antd';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import { SocialIcon } from 'react-social-icons';

/*<Fab size="small" color="primary" aria-label="mail" href="">
                    <MailIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="instagram" href="https://www.instagram.com/babsoncode/">
                    <InstagramIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="facebook" href="https://www.facebook.com/BabsonCode">
                    <FacebookIcon />
                </Fab> */
export default function FloatingButtons() {

    return(
        <Affix style={{ position: 'fixed', bottom: 16, right: 16 }}>
            <div className="floatingButtonsGroup">
                

                <SocialIcon url="https://www.instagram.com/babsoncode/" className="mr-3 iconSocialFloat" style={{height: 25, width: 25}} bgColor="#c32aa3"/> 
                <SocialIcon url="https://www.facebook.com/BabsonCode" className="mr-3 iconSocialFloat" style={{height: 25, width: 25}} bgColor="#1877f2"/>
                <SocialIcon url="https://github.com/Babson-CODE" className="mr-3 iconSocialFloat" style={{height: 25, width: 25}} bgColor="#000000"/>
            </div>
        </Affix>
    );
}