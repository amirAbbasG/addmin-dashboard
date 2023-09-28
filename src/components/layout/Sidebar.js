import { Fragment, useState } from "react";

import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { useColors } from "../../theme";

const items = [
  {
    title: "",
    routes: [
      {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    title: "Data",
    routes: [
      {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    title: "Pages",
    routes: [
      {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon />,
      },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    title: "Charts",
    routes: [
      {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

const Item = ({ title, to, icon }) => {
  const { colors } = useColors();
  const { pathname } = useLocation();

  return (
    <MenuItem
      aria-level={1}
      active={pathname === to}
      icon={icon}
      component={<Link to={to} />}
      rootStyles={{
        color: colors.grey[100],
      }}
    >
      {title}
    </MenuItem>
  );
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { colors } = useColors();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapsed = isMobile ? true : isCollapsed;

  return (
    <ProSidebar
      collapsed={collapsed}
      backgroundColor={`${colors.primary[400]}70`}
      rootStyles={{
        backdropFilter: "blur(10px)",
        margin: "10px 0 10px 10px",
        borderRadius: "10px",
        overflow: "hidden",
        borderRightWidth: "0px",
        position: "sticky",
        top: 0,
      }}
    >
      <Menu
        rootStyles={{ padding: collapsed ? "0 6px" : "0 10px" }}
        menuItemStyles={{
          root: { margin: "4px auto" },
          button: ({ active, level }) => ({
            margin: "0 auto",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: active ? colors.greenAccent[600] : "transparent",
            "&:hover": {
              backgroundColor: `${colors.greenAccent[600]}70`,
            },
          }),
          icon: {
            color: colors.grey[200],
            margin: "0 auto",
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        {!isMobile && (
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            rootStyles={{
              position: "sticky",
              top: "10px",
              backgroundColor: `${colors.primary[400]}60`,
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        )}

        {!collapsed && (
          <Box
            mb="25px"
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: "10px",
              p: "5px",
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.jpg`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Amir Abbasi
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        {items.map((item, index) => (
          <Fragment key={index}>
            {item.title && (
              <Typography
                variant="h6"
                color={colors.blueAccent[400]}
                sx={{ m: "20px 0 2px 20px" }}
              >
                {item.title}
              </Typography>
            )}
            {item.routes.map((route) => (
              <Item
                key={route.to}
                title={route.title}
                to={route.to}
                icon={route.icon}
              />
            ))}
          </Fragment>
        ))}
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
