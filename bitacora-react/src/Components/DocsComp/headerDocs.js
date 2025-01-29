import React from "react";
import '../../CompStyles/styles.css'


export default function DocHeader (){
return(
        <header className="documentation-header">
            <h1 className="documentation-title">Project Documentation</h1>
            <nav className="documentation-nav">
                <ul className="documentation-nav-list">
                <li className="documentation-nav-item"><a href="#introduction" className="documentation-nav-link">Introduction</a></li>
                <li className="documentation-nav-item"><a href="#setup" className="documentation-nav-link">Setup</a></li>
                <li className="documentation-nav-item"><a href="#usage" className="documentation-nav-link">Usage</a></li>
                <li className="documentation-nav-item"><a href="#api" className="documentation-nav-link">API</a></li>
                </ul>
            </nav>
        </header>
    );
}