import React from "react";
import Headers from "./Headers";
import Footers from "./Footers";

export default function LayoutInit({ children }) {
  return (
    <div>
      <Headers />

      <section>{children}</section>

      <Footers />
    </div>
  );
}
