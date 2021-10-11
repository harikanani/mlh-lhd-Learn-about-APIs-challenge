import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	MenuOutlined,
	FundOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoApp</Link>
				</Typography.Title>
				{/* <Button className="menu-control-container"></Button> */}
			</div>
			<Menu theme="dark" icon={HomeOutlined}>
				<Link to="/">Home</Link>
			</Menu>
			<Menu theme="dark" icon={FundOutlined}>
				<Link to="/cryptocurrencies">Cryptocurrencies</Link>
			</Menu>
			<Menu theme="dark" icon={MoneyCollectOutlined}>
				<Link to="/exchanges">Exchanges</Link>
			</Menu>
			<Menu theme="dark" icon={BulbOutlined}>
				<Link to="/news">News</Link>
			</Menu>
		</div>
	);
};

export default Navbar;
