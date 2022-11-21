import React from "react";
import "./layout.style.css";
import MyNav from "../nav/nav.component";

function MyLayout() {
  return (
    <div className="mylayout-container">
      <h1 className="mylayout-title">Xtra-videos</h1>
      <MyNav />
    </div>
  );
}

export default MyLayout;
