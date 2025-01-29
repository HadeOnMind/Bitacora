import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import '../CompStyles/styles.css';


{/*Absolutely! Here's a simple and versatile color palette that you can use throughout your app:

Primary Color: #3498db (a shade of blue)

Secondary Color: #2ecc71 (a shade of green)

Accent Color: #e74c3c (a shade of red)

Background Color: #ecf0f1 (a light gray)

Text Color: #2c3e50 (a dark gray)*/}




const whiteline = <div id='whiteline' className='whiteline'></div>
const beigeline = <div id='beigeline' className='beigeline'></div>
const blueline = <div id='blueline' className='blueline'></div>

const home = 'Home'
const profile = 'Profile'
const title = 'Bitacoras'



function SideBar(){
    return(


            <Sidebar id='SidebarMAIN' style={{  position: "fixed", height: "100%", width: "20vw", backgroundColor: "#2ecc71" }}>
                <Menu iconShape="square" id='MenuButton'>
                    <MenuItem icon={<MenuOutlinedIcon />} >Menu!</MenuItem>
                    <MenuItem component={<Link to="/">Home</Link>}>{home}</MenuItem> 
                    <MenuItem component={<Link to="/Profile">Profile</Link>}>{profile}</MenuItem> 
                    <MenuItem component={<Link to="/Bitacora">Bitacora</Link>}>Bitacora</MenuItem>
                    <MenuItem>About us</MenuItem>
                    <MenuItem component={<Link to="/Documentation">Documentation</Link>}>Documentation</MenuItem>
                    <MenuItem>Socials...</MenuItem>
                </Menu>
            </Sidebar>);
            

    };



    


export default SideBar;