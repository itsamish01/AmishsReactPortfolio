import React from "react";

function Header(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <div className="container flex-row justify-space-between align-center py-3">
        <h1 className="page-title text-secondary bg-dark py-2 px-3">
          Amish Sharma 
        </h1>

        <ul className="flex-row">
          {categories.map((category) => {
            const isSelected = currentCategory.name === category.name;

            return (
              <li
                className={`ml-2 my-1 px-2 py-1 no-style ${
                  isSelected ? "bg-secondary text-dark" : "text-secondary bg-dark"
                }`}
                key={category.name}
                onClick={() => setCurrentCategory(category)}
              >
                <a className="style-none" href="#top">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
