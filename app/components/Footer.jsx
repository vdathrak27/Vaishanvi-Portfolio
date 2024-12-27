import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo Section */}
        <span className="text-lg font-bold">LOGO</span>

        {/* Rights Reserved Section */}
        <p className="text-sm text-slate-600 text-right">
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
