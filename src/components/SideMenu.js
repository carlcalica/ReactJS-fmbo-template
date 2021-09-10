// import { Dashboard } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo192.png';

import MenuItem from './MenuItem';

const menuItems = [
    {name: 'Dashboard', exact: true, to: '/', iconClassName: 'bi bi-speedometer'},
    {name: 'Content', exact: true,
    to: '/content',
    iconClassName: 'bi bi-speedometer',
    subMenus: [
        {name: "Course", to: '/content/courses'}, {name: "Videos", to: '/content/videos'},
    ]},
    {name: 'Design', to: '/design', iconClassName: 'bi bi-pen'},

]

const SideMenu = (props) => {

    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.classList.remove("active");
            });
        }

        props.onCollapse(inactive);
    }, [inactive]);

    return(
        <div onMouseEnter={() => {setInactive(!inactive); }}
            className={`side-menu ${inactive ? "inactive" : "" }`}
            
            onMouseLeave={() => {setInactive(!inactive); }}
            className={`side-menu ${inactive ? "" : "inactive" }`}
            >
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            
                {/* <div onClick={() => {setInactive(!inactive); }} className="close-icon">
                    <i class="bi bi-arrow-left-square-fill"></i>
                </div> */}
            </div>
                <div className="divider"></div>

                <div className="main-menu">
                    <ul>
                        {
                            menuItems.map((menuItem, index) => 
                            <MenuItem key={index} 
                            name={menuItem.name}
                            exact={menuItem.true}
                            to ={menuItem.to} 
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                            />)
                        }
                        {/* <li>
                            <a href="/#" className="menu-item">
                                <div className="menu-icon">
                                    <i class="material-icons">dashboard</i>
                                </div>
                            <span>Main Menu</span></a>
                        </li>
                        <li>
                            <a href="/#" className="menu-item">
                                <div className="menu-icon">
                                    <i class="bi bi-speedometer"></i>
                                </div>
                            <span>Settings</span></a>
                        </li>
                        <MenuItem 
                        name={"Content"}
                        subMenus={[
                            {name: "Course"}, {name: "Videos"}
                        ]}/> */}
                    </ul>
                </div>
        </div>
    );
};

export default SideMenu;