import React from 'react';
import {data} from '../data/data.js'
import MenuItem from '../components/MenuItem.jsx';
import '../styles/Menu.css'
export default function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {data.map((menuItem,key) => {
                       return <div>
                            <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} />
                            </div>
                    })}
                </div>
            </div>
        </div>
    );
}

