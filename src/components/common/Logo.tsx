import React from "react";
import Image from "next/image";


export default function Logo() {
  return (
    <a href="/">
      <Image src="/logo.png" alt="mdmahikaishar" width={100} height={32} />
    </a>
  );
}
