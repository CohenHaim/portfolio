import React from "react";

const SkillCategorySection = ({ icon: Icon, title, items }) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="w-full text-left">
          <Icon className="mb-2 inline-block h-8 w-8" />{" "}
          {/* Icon is inline-block */}
        </div>
        <h3 className="text-md inline-block w-full text-left font-bold">
          {title}
        </h3>{" "}
        {/* Title is also centered with inline-block */}
      </div>
      <div className="mt-2 flex flex-col items-start space-y-1">
        {items.map((item, index) => (
          <span key={index} className="text-sm font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategorySection;
