import React from 'react';
import { businessConfig } from '../../config/business';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} {businessConfig.businessName}. All rights reserved.</p>
        <p>{businessConfig.city}</p>
      </div>
    </footer>
  );
}
