import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
    const { name, subMenus, iconClassName, to, exact, onClick } = props;
    const [expand, setExpand] = useState(false);

    return(
        <li onClick={props.onClick}>
            <NavLink exact to={to} onClick={() => setExpand(!expand)} className="menu-item"> 
                <div className="menu-icon">
                    <i class={iconClassName}></i>
                </div>
                <span>{name}</span>
            </NavLink>
            {
                subMenus && subMenus.length > 0 ? (
                
            <ul className={`sub-menu ${expand ? "active" : ""} `}>
                {subMenus.map((menu, index) => ( 
                <li><NavLink to={menu.to}> {menu.name}</NavLink></li>
                ))}
            </ul>
        ) : null }
        </li>
    )
}


export default MenuItem;