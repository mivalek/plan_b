"use client";
import React, { ReactNode, useState } from "react";
import Header from "../Header";

function ClientPageWrapper({ children }: { children: ReactNode }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  function closeNavOnClickOut() {
    if (!navMenuOpen) return;
    setNavMenuOpen(false);
  }
  return (
    <main
      id="boulder-app-container"
      className="h-screen"
      onClick={closeNavOnClickOut}
    >
      <Header
        primary={true}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      {children}
    </main>
  );
}

export default ClientPageWrapper;
