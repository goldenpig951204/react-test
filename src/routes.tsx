import React from "react";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const routes = [{
  path: "/page1",
  title: "Page 1",
  icon: () => <FontAwesomeIcon icon={solid("home")} className='nav-link-icon' />,
  element: Page1,
}, {
  path: "/page2",
  name: "page2",
  title: "Page 2",
  icon: () => <FontAwesomeIcon icon={solid("user")} className='nav-link-icon' />,
  element: Page2,
}];

export default routes;