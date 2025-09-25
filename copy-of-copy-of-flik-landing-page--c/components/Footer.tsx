
import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold font-poppins gradient-text">Flik!</h3>
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Flik Inc. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <SocialIcon href="#">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.085-.62-.053-1.468.196-2.124.253-.67 1.6-6.78 1.6-6.78s-.404-.808-.404-2.01c0-1.886 1.09-3.29 2.45-3.29 1.15 0 1.702.863 1.702 1.895 0 1.152-.732 2.87-.11 4.45.64 1.636 1.886 3.16 4.742 3.16 2.087 0 3.702-2.19 3.702-5.11 0-2.658-1.895-4.632-4.99-4.632-3.41 0-5.39 2.544-5.39 5.022 0 .96.37 2.01.83 2.585.085.12.096.196.07.284-.025.12-.196.8-.23.95-.03.12-.132.16-.285.096-1.127-.477-1.838-1.85-1.838-3.243 0-2.48 1.79-5.11 5.92-5.11 3.11 0 5.49 2.21 5.49 4.79 0 3.13-1.96 5.61-4.71 5.61-1.57 0-3.054-1.15-3.55-2.51l-1.12 4.29c-.39 1.48-1.54 3.48-2.31 4.58.9.29 1.85.45 2.84.45 5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
