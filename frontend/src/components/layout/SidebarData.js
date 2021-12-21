import React from "react";
import Dashboard from '@mui/icons-material/Dashboard';
import AddBox from '@mui/icons-material/AddBox';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 


export const SidebarDatas = [
    {
        title: "Dashboard",
        icon :<Dashboard/> ,
        Link : "/"
    },
    {
        title: "Create Account",
        icon :<AddBox/> ,
        Link : "/createaccount" 
    },
    {
        title: "Manage Product",
        icon :<AppsIcon/> ,
        Link : "/admin/manageproduct"
    },
    {
        title: "Add category",
        icon :<AddBox/> ,
        Link : "/admin/addcategory"    
    },
    {
        title: "Manage Category",
        icon :<CategoryIcon/> ,
        Link : "/admin/managecat"    
    },
    {
        title: "Settings",
        icon :<SettingsIcon/>,
        Link:"/admin/setting",
        ExpandMoreIcon:<ExpandMoreIcon/>,
        ExpandLessIcon:<ExpandLessIcon/>,
        subnav:[
            {
                title:"Categories",
                Link:"/admin/categories"
            },
            {
                title:"add category",
                Link:"/admin/addcategory"
            },
        ]
    
        },
]