import React from 'react'

function Header() {
    return (
        <section className="header w-full h-20 p-4 flex justify-center items-center bg-dark-2">
          <div className="max-w-6xl w-full flex justify-between">
            <span className="text-white font-bold text-lg">
                Where in the world?
            </span>
            <span className="text-white font-medium flex gap-2 items-center">
                <i class="fas fa-moon"></i>  
                <span className="text-sm">Dark Mode</span>        
            </span>
          </div>
        </section>
    )
}

export default Header
