import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './styles.css';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bitacora from '../routerComps/bitacora';
import Documentation from '../routerComps/documentation';




const whiteline = <div id='whiteline' className='whiteline'></div>
const beigeline = <div id='beigeline' className='beigeline'></div>
const blueline = <div id='blueline' className='blueline'></div>


let profile = 'Profile(comingsoon)'
let title = 'Bitacoras'



function SideBar(){
    return(


            <Sidebar id='SidebarMAIN' style={{  position: "fixed", height: "100%", width: "20vw", backgroundColor: "yellow" }}>
                <Menu iconShape="square" id='MenuButton'>
                    <MenuItem icon={<MenuOutlinedIcon />} >Menu!</MenuItem>
                    <MenuItem>{profile}</MenuItem> 
                    <MenuItem component={<Link to="/Bitacora">Bitacora</Link>}>Bitacora</MenuItem>
                    <MenuItem>About us</MenuItem>
                    <MenuItem component={<Link to="/Documentation">Documentation</Link>}>Documentation</MenuItem>
                    <MenuItem>Socials...</MenuItem>
                </Menu>
            </Sidebar>);
            

    };



    


export default SideBar;