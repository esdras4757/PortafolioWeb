import React, { useState } from "react";
import { Drawer, Button, Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ResponsiveNavbar from "./ResponsiveNavbar";


const Header = ({t}) => {
  const [current, setCurrent] = useState("mail");

  

  return (
    <div className="w-100" style={{position:"fixed", zIndex:500}}>
    <ResponsiveNavbar t={t} className='col-6' style={{ fontSize:20}}/>
    </div>
  );
};

export default Header;
