import React from "react";
import Icon from "./Icon";
import { User, Folder, FileText, Phone, Briefcase } from "lucide-react";



const Desktop = () => {
  const icons = [
    { name: "About", icon: <User size={32} /> },
    { name: "Projects", icon: <Folder size={32} /> },
    { name: "Resume", icon: <FileText size={32} /> },
    { name: "Contact", icon: <Phone size={32} /> },
    { name: "Hire Me", icon: <Briefcase size={32} /> },
  ];

  return (
    <div
      className="w-full h-full bg-cover bg-center flex flex-col p-4 gap-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413')",
      }}
    >
      {/* Icons Grid */}
      <div className="h-full flex items-start">
        <div className="flex flex-col gap-6 pt-6 pl-4">
          {icons.map((item, index) => (
            <Icon
              key={index}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desktop;