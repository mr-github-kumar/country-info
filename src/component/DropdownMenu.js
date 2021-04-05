import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useGlobalContext } from '../context';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { region, setRegion } = useGlobalContext();

const regionName = ['All','Africa','Americas','Asia','Europe','Oceania','Polar'];

  return (
    <div className="relative font-app w-full px-2 sm:w-2/5">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-around w-full items-center h-12 rounded-md shadow-md px-2 py-2 bg-light dark:bg-dark-2 text-md font-semibold text-dark-2 dark:text-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" ariaExpanded="true" ariaHaspopup="true">
        {region}
        <i className="fas fa-chevron-down"></i>
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute px-4 right-0 mt-2 w-1/2 sm:w-full rounded-md shadow-md" onClick={() => setIsOpen(!isOpen)}>
          <div className="rounded-md bg-white shadow-xs">
            <div classsName="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" ariaOrientation="vertical" ariaLabelledby="options-menu">
              <div className="py-2 rounded-md bg-light dark:bg-dark-2 h-auto" role="none">
                {regionName.map((e) => {                                 
                  return (
                    <a href className="block px-4 py-2 text-sm text-gray-700 hover:bg-white dark:hover:bg-dark-1 hover:text-gray-900 text-dark-2 dark:text-light font-semibold" key={e} value={e}  onClick={() => setRegion(e)}>{e}</a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div> 
  )
}

export default DropdownMenu;