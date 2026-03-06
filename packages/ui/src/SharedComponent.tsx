import React from 'react';

export interface SharedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SharedButton: React.FC<SharedButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`btn-primary flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-200 ${className}`}
      {...props}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span>{children}</span>
    </button>
  );
};

export interface SharedCardProps {
  title: string;
  children: React.ReactNode;
}

export const SharedCard: React.FC<SharedCardProps> = ({ title, children }) => {
  return (
    <div className="card p-6 transform hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
        {title}
      </h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};
