import { useState } from "react";

const categories = [
  { name: "Cartoon", description: "Clean and simple designs" },
  { name: "App Logo", description: "Old school designs with a classic touch" },
  { name: "Modern Mascot", description: "Creative and artistic styles" },
  { name: "Black and White", description: "Trendy and contemporary designs" },
  { name: "Minimalist", description: "Trendy and contemporary designs" },
  { name: "Vintage", description: "Creative and artistic styles" },
];

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    console.log(category.name);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-[1.125rem] font-bold">Explore Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`border-2 rounded-lg overflow-hidden transition-shadow duration-300 px-3 cursor-pointer hover:bg-zinc-100 ${
              selectedCategory === category.name
                ? "border-zinc-800"
                : "border-zinc-300"
            }`}
          >
            <div>
              <h3 className="text-md text-zinc-800">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
