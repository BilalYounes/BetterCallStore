import "./sidebar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Link } from "react-router-dom";
import imgIcons from "../../assets/logo.png";
import {
  BookOutlined,
  Brightness4Outlined,
  BusinessCenterRounded,
  HelpOutlineOutlined,
  SearchOutlined,
  SettingsApplicationsOutlined,
  ShoppingCartRounded,
} from "@mui/icons-material";
const SideBar = () => {
  return (
    <div className="Sidebar">
      <Link to={'/'}>
      <div className="top">
        <div className="logo">
          <span>
            <img className="imgee" src={imgIcons} alt="" />
          </span>
        </div>
      </div>
        </Link>
      <hr />

      <div className="center">
        <ul>
          <Link to={'/'}>
          <li className="item">
            <HomeOutlinedIcon className="icon" />
            <span>Home</span>
          </li>
          </Link>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboards</span>
          </li>

          <li>
            <SearchOutlined className="icon" />
            <span>Search</span>
          </li>
          <li>
            <BusinessCenterRounded className="icon" />
            <span>Products</span>
          </li>
          <Link to={'/cart'}>
          <li>
            <ShoppingCartRounded className="icon" />
            <span>Cart</span>
          </li>
          </Link>
          <li>
            <BookOutlined className="icon" />
            <span>Bookmarks</span>
          </li>
          <li>
            <SettingsApplicationsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <HelpOutlineOutlined className="icon" />
            <span> Help</span>
          </li>
          <li>
            <Brightness4Outlined className="icon" />
            <span>Light mode</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
