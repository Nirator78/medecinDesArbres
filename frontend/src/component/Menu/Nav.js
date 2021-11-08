import React from 'react';

export default function Nav({ children }) {
    return (
      <nav className="p-4">
        <ul className="flex space-x-2">
          {children}
        </ul>
      </nav>
    )
  }
  