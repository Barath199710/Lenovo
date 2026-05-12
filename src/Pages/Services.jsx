import { Outlet, NavLink } from "react-router-dom";

function Services() {
  return (
   
      <div className="page">
      <h1>Services</h1>

      <div className="sub-menu">
        <NavLink to="web-development">Web Development</NavLink>
        <NavLink to="app-development">App Development</NavLink>
        <NavLink to="ui-ux">UI/UX Design</NavLink>
      </div>

      <Outlet />
    </div>  
  );
}

export default Services;