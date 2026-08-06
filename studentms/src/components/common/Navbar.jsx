import { useState } from 'react'


function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <nav className="bg-grey-600 text-white h-25 flex items-center justify-between px--1 shadow-md">
      <h1 className="text-2xl font-bold">
        Student Management System
      </h1>
        <div className="flex gap-6">
       <aside
          className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300 bg-gray-50 dark:bg-zinc-900 rounded-lg p-4 flex-shrink-0`}
        >

      {!isCollapsed && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 px-3 py-2">
                <img
                  src="https://picsum.photos/200?random=40"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ABC
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    example.com
                  </p>
                </div>
              </div>
            </div>
          )}
          </aside>
          </div>
    </nav>
  );
}

export default Navbar;