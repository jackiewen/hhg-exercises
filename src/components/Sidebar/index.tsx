import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import IRoute from "./../../types/IRoute";

type Props = {
  color: string;
  image: string;
  routes: IRoute[];
};

const Sidebar = ({ color, image, routes}: Props) => {
  const location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="#"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("./../../assets/img/reactlogo.png")}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="#">
            HHG - Exercises
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            return (
              <li
                className={activeRoute(prop.path)}
                key={key}
              >
                <NavLink
                  to={prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
