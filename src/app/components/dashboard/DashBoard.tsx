'use client';

import React from 'react';

interface Breadcrumb {
  label: string;
  link?: string;
  active?: boolean;
}

interface AdminHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="admin-header">
      <h3 className="page-title">{title}</h3>
      <nav>
        <ol className="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${
                breadcrumb.active ? 'active' : ''
              }`}
              aria-current={breadcrumb.active ? 'page' : undefined}
            >
              {breadcrumb.link && !breadcrumb.active ? (
                <a href={breadcrumb.link}>{breadcrumb.label}</a>
              ) : (
                breadcrumb.label
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Inline CSS */}
      <style jsx>{`
        .admin-header {
          margin-bottom: 15px;
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .breadcrumb-item {
          font-size: 0.9rem;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: '/';
          margin: 0 5px;
          color: #6c757d;
        }

        .breadcrumb-item.active {
          font-weight: bold;
          color: #495057;
        }

        .breadcrumb-item a {
          color: #007bff;
          text-decoration: none;
        }

        .breadcrumb-item a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AdminHeader;
