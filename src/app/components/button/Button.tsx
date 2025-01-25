'use client';

import React from 'react';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="btn">
      {title}

      <style jsx>{`
        .btn {
          color: #fff;
          background-color: #007bff;
          border-color: #007bff;
          padding: 10px 18px;
          font-size: 13px;
          border-radius: 5px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `}</style>
    </button>
  );
};

export default Button;
