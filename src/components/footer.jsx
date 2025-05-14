import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

    function setCurrentYear() {
        const currentYear = new Date().getFullYear();  // Get the current year
        return currentYear;
      }
      const year = setCurrentYear();
    return (
        <footer class="bg-white rounded-lg  dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <span class="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© {year} <Link to="/" class="hover:underline">OTL</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;