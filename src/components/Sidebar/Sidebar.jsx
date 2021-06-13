import React from 'react';
import "./sidebar.css";
import {
    Dashboard, RestaurantMenu, ShoppingCart, List, Receipt
} from '@material-ui/icons';
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        <Dashboard className="sidebarIcon" />
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                FoodTech
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        < RestaurantMenu className="sidebarIcon" />
                        Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            Menu Catalogue
                        </li>
                        <li className="sidebarListItem">
                            Menu List
                        </li>
                        <li className="sidebarListItem">
                            Menu Grid
                        </li>
                        <li className="sidebarListItem">
                            Add Product
                        </li>
                        <li className="sidebarListItem">
                            Product Detail
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        <ShoppingCart className="sidebarIcon" />
                        Orders
                    </h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        <List className="sidebarIcon" />
                        Resturants List
                    </h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        <Receipt className="sidebarIcon" />
                        Invoice
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Invoice Detail
                        </li>
                        <li className="sidebarListItem">
                            Invoice List
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    );
}


