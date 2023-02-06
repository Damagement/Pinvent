import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const activeLink =({isActive}) =>(isActive ? "active" : "link")
const activeSubLink =({isActive}) =>(isActive ? "active" : "link")

const SidebarItem = ({item, isOpen}) => {
    const [expandMenu, setexpandMenu] = useState(false)

    if (item.childrens) {
    return (
    <div className={expandMenu ? 
        "sidebar-item s-parent open" : "sidebar-item s-parent"}>
        <div className='sidebar-title'>
        <span>
            {item.icon && <div className='icon'>{item.icon}</div>}    
            {isOpen && <div>{item.title}</div>}
        </span>
        <MdKeyboardArrowRight size={35} style={{cursor: "pointer"}}
        className="arrow-icon" onClick={() => setexpandMenu(!expandMenu)}/>

        </div>        
        <div className='sidebar-content'>
            {item.childrens.map((child,index) =>{
                return( 
                <div key={index} className='s-child'>
                    <NavLink to= {child.path}
                     className={activeSubLink}>
                        <div className='sidebar-item'>
                            <div className='sidebar-title'>
                                {child.icon && <div className='icon'>{child.icon}</div>}
                                {isOpen && <div>{child.title}</div>}
                            </div>
                        </div>
                    </NavLink>
                </div>
                )
            })}   
        </div>        
    </div>)

    } else {
        return(<NavLink to= {item.path}
        className={activeLink}>
           <div className='sidebar-item s-parent '>
               <div className='sidebar-title'>
                    <span>
                   {item.icon && <div className='icon'>{item.icon}</div>}
                   {isOpen && <div>{item.title}</div>}
                   </span>
               </div>
           </div>
       </NavLink>
       );
    }
}

export default SidebarItem