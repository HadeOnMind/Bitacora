import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './styles.css'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


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
        <Sidebar id='SidebarMAIN' style={{ height: "100vh", width: "20vh", backgroundColor: "yellow" }}>
            <Menu iconShape="square" id='MenuButton' onClick={CollapseSidebar}>
                <MenuItem icon={<MenuOutlinedIcon />} >Menu!</MenuItem>
                <MenuItem>{profile}</MenuItem> 
                <SubMenu className='submenutitle' title={title}>
                    <MenuItem>Mis Bitacoras</MenuItem>
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