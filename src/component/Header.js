import React from 'react'


function Header({action}) {
    return (
        <section className="header fixed z-10 w-full h-20 p-4 flex justify-center items-center bg-light text-dark-2 dark:bg-dark-2 dark:text-light ">
          <div className="max-w-6xl w-full flex justify-between">
            <span className="font-bold text-lg">
                Where in the world ?
            </span>
            <div className="font-medium flex gap-2 items-center">
              <input type="checkbox" id="toggle" className="hidden"/>
              <label for="toggle">
                <div className="w-full cursor-pointer" onClick={action}>
                  <div className="group dark hidden duration-300 ease-in-out">
                    <i className="group-hover:text-gray fas fa-moon"></i> 
                    <span className="group-hover:text-gray text-sm px-2">Dark Mode</span>        
                  </div>
                  <div className="group light duration-300 ease-in-out">
                    <i className="group-hover:text-gray fas fa-sun"></i> 
                    <span className="group-hover:text-gray text-sm px-2">Light Mode</span>        
                  </div>
                </div>
              </label>
            </div>
          </div>
        </section>
    )
}

export default Header
