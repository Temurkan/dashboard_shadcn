import React from "react";

export default function Footer() {
  return (
    <div className='flex justify-between items-center border-t mt-6 text-xs geist-400 text-gray-500 pt-4 mx-8'>
      <span className='flex items-center'>
        © 2025, made with
        <img className='px-1' src='/love.svg' alt='' /> by
        <span className='geist-600 text-gray-900 ml-1'>Creative Tim</span> for a
        better web.
      </span>
      <ul className='flex gap-4'>
        <li>Creative Tim</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>License</li>
      </ul>
    </div>
  );
}
