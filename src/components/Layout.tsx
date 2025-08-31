import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="flex-grow pt-20 pb-16 px-4 md:px-8"> 
        {/* Ajusta pt-20 y pb-16 según la altura real de tu Header y Footer */}
        {children}
      </main>
    </div>
  );
};

export default Layout; 