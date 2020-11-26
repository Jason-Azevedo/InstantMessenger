import React from "react";
import Chat from "./Chat";
import Option from "./Option";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Settings and stuff */}
      <h2 className="nav__subheader">Options</h2>
      <ul>
        <li>
          <Option />
        </li>
      </ul>

      {/* Chats */}
      <h2 className="nav__subheader">Chats</h2>
      <ul>
        <li>
          <Chat />
        </li>
      </ul>
    </nav>
  );
}
