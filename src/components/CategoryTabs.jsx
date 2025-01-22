import React from 'react';

const CategoryTabs = ({ categories, activeTab, setActiveTab }) => {
  return (
<div className="flex justify-center overflow-x-auto space-x-8 p-2">
  {categories.map((category, index) => (
    <div
      key={index}
      className={`cursor-pointer pb-2 text-sm font-medium border-b-2 flex-shrink-0 ${
        activeTab === index
          ? 'text-red-600 border-red-600'
          : 'text-gray-600 border-gray-300'
      }`}
      onClick={() => setActiveTab(index)}
    >
      {category}
    </div>
  ))}
</div>





  );
};

export default CategoryTabs;
