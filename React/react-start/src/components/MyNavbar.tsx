"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";

export function MyNavbar() {
  return (
    <>
      <Navbar fluid rounded>
        <Link to={"/"}>
          <img
            src="/src/assets/react.svg"
            className="mr-3 h-6 sm:h-9 inline-block"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Link>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Item>
              <Link to={"/login"}>Login</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/register"}>Register</Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-2 py-1 rounded-md -transition-transform active:scale-95 duration-200"
                : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-2 py-1 rounded-md -transition-transform active:scale-95 duration-200"
                : ""
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-2 py-1 rounded-md -transition-transform active:scale-95 duration-200"
                : ""
            }
            to={"/service"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-2 py-1 rounded-md -transition-transform active:scale-95 duration-200"
                : ""
            }
            to={"/price"}
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-2 py-1 rounded-md -transition-transform active:scale-95 duration-200"
                : ""
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}
