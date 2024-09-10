"use client";

import { useState } from "react";

export default function ImageEditor() {
  const [src, setSrc] = useState("");

  return <div>{src && <img src={src} />}</div>;
}