import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {
    Dashboard, RestaurantMenu, ShoppingCart, List, Receipt
} from '@material-ui/icons';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '#',
    icon: <Dashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'FoodTech',
        path: '/',
      }
    ]
  },
  {
    title: ' Menu',
    path: '#',
    icon: <RestaurantMenu />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Menu Catalogue',
        path: '/#/#',
      },
      {
        title: ' Menu List',
        path: '/#/#',
      },
      {
        title: 'Menu Grid',
        path: '/#/#',
      },
      {
        title: 'Add Product',
        path: '/#/#',
      },
      {
        title: ' Product Detail',
        path: '/#/#',
      }
    ]
  },
  {
    title: ' Orders',
    path: '#',
    icon: <ShoppingCart />
  },
  {
    title: 'Resturants List',
    path: '#',
    icon: <List />
  },
  {
    title: 'Invoice',
    path: '#',
    icon: <Receipt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Invoice Detail',
        path: '#',
    
      },
      {
        title: ' Invoice List',
        path: '#',
        
      }
    ]
  }
];