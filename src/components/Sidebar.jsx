import React from "react";
import {
  LayoutGrid,
  House,
  CalendarDays,
  CircleQuestionMark,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: House },
    { name: "Dashboard", icon: LayoutGrid },
    { name: "Calendar", icon: CalendarDays },
    { name: "Help", icon: CircleQuestionMark },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white p-5 font-roboto-mono">
    <div className="mb-8 px-2 text-sm font-bold tracking-wide text-gray-800">
        Admin Dashboard
    </div>

      <div className="mb-8 flex h-44 flex-col justify-end rounded-2xl bg-gray-100 p-5">
        <p className="mb-2 text-xs tracking-wide text-gray-500">
          Monday, March 24
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Welcome back
        </h2>
      </div>

      <nav className="space-y-3 rounded-2xl bg-gray-100 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                item.name === "Home"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-black"
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;