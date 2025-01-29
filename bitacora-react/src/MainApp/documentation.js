import React from 'react';
import '../CompStyles/styles.css'
import DocHeader from '../Components/DocsComp/headerDocs';
import DocsMain from '../Components/DocsComp/Docsmain';

export default function Documentation () {
 return(
    <div id='DocsMain'>
        <div id='HeaderDocCont'>
            <DocHeader />
        </div>

        <div>
            <DocsMain />
        </div>
        DOCUMENTATION WORKING

    </div>
    );
};