import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./sidebar.css"; // Import your CSS file

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false); 
  const [toggled, setToggled] = useState(false);

  const scrollToFooter = () => {
    setTimeout(() => {
      document.getElementById("footer-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  
  const scrollToTitle = () => {
    setTimeout(() => {
      document.getElementById("TitleCont").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Sidebar
      id="SidebarMAIN"
      collapsed={collapsed}
      toggled={toggled} 
      onToggle={() => setToggled(!toggled)}
      breakPoint="md" 
      style={{
        height: "100%",
        position: "fixed",
        backgroundColor: "#2ecc71", 
        boxShadow: "3px 0 5px rgba(0, 0, 0, 0.2)", 
      }}
    >
      <Menu iconShape="square" id="MenuButton">
        
        <MenuItem
          icon={collapsed ? <MenuOutlinedIcon style={{ color: "#ecf0f1" }} /> : <ArrowBackIosIcon />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#ecf0f1", 
            backgroundColor: "#3498db", 
            marginBottom: "20px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          {!collapsed && "Menu"}

        </MenuItem>


        {/* Menu Items */}
        <MenuItem onClick={scrollToTitle} component={<Link to="/">Home</Link>}>{!collapsed && "Home"}</MenuItem>
        <MenuItem component={<Link to="/Profile">Profile</Link>}>
          {!collapsed && "Profile"}
        </MenuItem>
        <MenuItem component={<Link to="/Bitacora">Bitacora</Link>}>
          {!collapsed && "Bitacora"}
        </MenuItem>
        <MenuItem>{!collapsed && "About us"}</MenuItem>
        <MenuItem component={<Link to="/Documentation">Documentation</Link>}>
          {!collapsed && "Documentation"}
        </MenuItem>
        <MenuItem onClick={scrollToFooter} component={<Link to="/">Social Links</Link>}>
          {!collapsed && "Social Links"}
        </MenuItem>
        <MenuItem component={<Link to="/WIP">WIP</Link>}>
          {!collapsed && "Work in Progress"}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;