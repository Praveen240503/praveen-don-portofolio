// src/components/SocialLinks/SocialLinks.tsx
import React from 'react';
// You'll likely use an icon library like React Icons for these
// For now, we'll use simple text links.

interface SocialLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode; // Optional: if you pass an icon component
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-3xl mx-3"
  >
    {icon || label} {/* Render icon if provided, otherwise label */}
  </a>
);

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <SocialLink href="https://github.com/Praveen240503" label="GitHub" icon={<span>GH</span>} />
      <SocialLink href="https://linkedin.com/in/praveen-k-103b3b22a/" label="LinkedIn" icon={<span>LI</span>} />
      {/* Add more social links as needed */}
    </div>
  );
};

export default SocialLinks;