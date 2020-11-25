import React from "react";
import Chat from "./Chat";
import Option from "./Option";

export default function Navbar() {
  return (
    <nav>
      {/* Settings and stuff */}
      <h2>Options</h2>
      <ul>
        <li>
          <Option />
        </li>
      </ul>

      {/* Chats */}
      <h2>Chats</h2>
      <ul>
        <li>
          <Chat />
        </li>
      </ul>
    </nav>
  );
}
