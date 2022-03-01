import React from 'react';
import IRoute from './../../types/IRoute';
import { useLocation, Route, Switch } from 'react-router-dom';
import routes from './../../routes';
import Sidebar from './../Sidebar';
import sidebarImage from './../../assets/img/sidebar.jpg';
import Header from './../Header';

const Layout = (props: any) => {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes: IRoute[]) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          //@ts-ignore
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };
  React.useEffect(() => {
    //@ts-ignore
    document.documentElement.scrollTop = 0;
    //@ts-ignore
    document.scrollingElement.scrollTop = 0;
    //@ts-ignore
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      //@ts-ignore
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar color="black" image={sidebarImage} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <Header />
        <div className="content">
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>
    </div>
  )
}

export default Layout;