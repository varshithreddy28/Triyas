import React, { useEffect, useState } from "react";
import "./gap.css";
import { useLocation } from "react-router-dom";

export default function Gap() {
  const [disp, setDisp] = useState(true);

  const { pathname } = useLocation();
  const url = pathname.split("/");
  const temp = url[2];

  useEffect(() => {
    if (url[1] === "") setDisp(false);
    else setDisp(true);
  }, [pathname]);

  return <>{disp ? <div className="pgGap"></div> : ""}</>;
}
