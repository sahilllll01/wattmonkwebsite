import Link from "next/link";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="header-container container header-float">
      <div className="column-1 col-12 col-lg-3 d-flex align-items-center">
        <IconButton
          className="ms-2"
          size="large"
          onClick={() => setBurgerMenu(true)}
        >
          <MdMenu />
        </IconButton>
        <img src="/Header Logo.svg" alt="wattmonk logo" />
      </div>
      <div className="column-2 col-6">
        <p className="me-3">Home</p>
        {/* <Link href="../../products"><a>Product</a></Link> */}

        <p>Book Demo</p>
        <p className="ms-3">Customer Probability</p>
        <p style={{ padding: "0 0 0 20px" }}>Permit Auto Generation</p>
      </div>
      <div className="column-3 col-5 col-xl-3 d-flex justify-content-end align-items-center">
        <a className="me-2">Sign In</a>
        <button className="button">Sign Up, it&apos;s free</button>
      </div>

      <Drawer
        anchor={"right"}
        open={burgerMenu}
        onClose={() => setBurgerMenu(false)}
      >
        <div className="side-menu">
          <ul className="menu-list">
            <li className="menu-list__item"></li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
