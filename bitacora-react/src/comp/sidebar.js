import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './styles.css'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Outlet, Link } from "react-router-dom";



const whiteline = <div id='whiteline' className='whiteline'></div>
const beigeline = <div id='beigeline' className='beigeline'></div>
const blueline = <div id='blueline' className='blueline'></div>


let profile = 'Profile(comingsoon)'
let title = 'Bitacoras'


function CollapseSidebar(){
    let height = '20vh'
    let width = '5vh'

    let defaultheight = '100vh'
    let defaultwidth = '20vh'
    let collapsed = true

    const sidebar =  document.getElementById('SidebarMAIN')


    const MenuButton = document.getElementById('MenuButton')
    MenuButton.addEventListener('click',  () => {
            if (sidebar.style.height === '100vh') {
               

                collapsed = false

                sidebar.style.width = height;
                sidebar.style.height = width;
                console.log('collapsed')

            } else {
                
                
                sidebar.style.width = defaultheight;
                sidebar.style.height =  defaultwidth;
                console.log('uncollapsing')


            }



    })}

function DefaultSidebar(){
    let height = '100vh'
    let width = '20vh'
}


function SideBar(){
    return(
        <Sidebar id='SidebarMAIN' style={{  position: "fixed", height: "100%", width: "20vw", backgroundColor: "yellow" }}>
            <Menu iconShape="square" id='MenuButton'>
                <MenuItem icon={<MenuOutlinedIcon />} >Menu!</MenuItem>
                <MenuItem>{profile}</MenuItem> 
                <SubMenu className='submenutitle' title='Hello'>
                    <MenuItem>
                    <Link to="/bitacora"> Mi bitacora</Link>
                    </MenuItem>
                    <MenuItem>Crear Nueva</MenuItem>
                    <MenuItem>Comunidad</MenuItem>
                </SubMenu>
                <MenuItem>About us</MenuItem>
                <MenuItem>Documentation</MenuItem>
                <MenuItem>Socials...</MenuItem>
            </Menu>
        </Sidebar>)
    };


export default SideBar;