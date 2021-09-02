import React, { useState } from 'react';

const MenuItem = (props) => {
    const { name, subMenus, iconClassName } = props;
    const [expand, setExpand] = useState(false);

    return(
        <li>
            <a href="/#" onClick={() => setExpand(!expand)} className="menu-item"> 
                <div className="menu-icon">
                    <i class={iconClassName}></i>
                </div>
                <span>{name}</span>
            </a>
            {
                subMenus && subMenus.length > 0 ? (
                
            <ul className={`sub-menu ${expand ? "active" : ""} `}>
                {subMenus.map((menu, index) => ( 
                <li><a href="/#"> {menu.name}</a></li>
                ))}
            </ul>
        ) : null }
        </li>
    )
}


export default MenuItem;