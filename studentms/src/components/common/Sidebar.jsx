import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: "📊", badge: null },
    { id: "students", name: "Students", icon: "👨‍🎓", badge: null },
    { id: "addstu", name: "Add Student", icon: "➕", badge: null },
    { id: "settings", name: "Settings", icon: "⚙️", badge: null },
  ];

  return (
    <div className="p-8 w-full bg-white dark:bg-black">
      

      <div className="flex gap-6">
        <aside
          className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300 bg-gray-50 dark:bg-zinc-900 rounded-lg p-4 flex-shrink-0`}
        >
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                STUDENT MANAGEMENT SYSTEM
              </h2>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg
                className={`w-4 h-4 transform transition-transform ${isCollapsed ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span className="font-medium flex-1">{item.name}</span>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          item.badge === "New"
                            ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                            : "bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            ))}
          </nav>

          
        </aside>

        <main className="flex-1 bg-gray-50 dark:bg-zinc-900 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {navItems.find((item) => item.id === activeItem)?.icon}{" "}
            {navItems.find((item) => item.id === activeItem)?.name}
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            This is the{" "}
            {navItems
              .find((item) => item.id === activeItem)
              ?.name.toLowerCase()}{" "}
            section. Content for this section would be displayed here.
          </p>
        </main>
      </div>
    </div>
  );
}
