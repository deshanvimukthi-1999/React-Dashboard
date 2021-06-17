import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {
    Dashboard, RestaurantMenu, ShoppingCart, List, Receipt
} from '@material-ui/icons';


export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <Dashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'FoodTech',
        path: '/dashboard/home',
      }
    ]
  },
  {
    title: ' Menu',
    icon: <RestaurantMenu />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Menu Catalogue',
        path: '/menu/menu1',
      },
      {
        title: ' Menu List',
        path: '/menu/nopage',
      },
      {
        title: 'Menu Grid',
        path: '/menu/menu2',
      },
      {
        title: 'Add Product',
        path: '/menu/menu3',
      },
      {
        title: ' Product Detail',
        path: '/menu/nopage',
      }
    ]
  },
  {
    title: ' Orders',
    path: '/menu',
    icon: <ShoppingCart />
  },
  {
    title: 'Resturants List',
    path: '/nopage',
    icon: <List />
  },
  {
    title: 'Invoice',
    icon: <Receipt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Invoice Detail',
        path: '/menu/menu1',
    
      },
      {
        title: ' Invoice List',
        path: '/menu/menu3',
        
      }
    ]
  }
];