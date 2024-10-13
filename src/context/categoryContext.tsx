import React, { ReactNode, useState } from "react";

type CategoryContexType = {
  categorySelected: Category;
  updateCategory: (category: Category) => void;
  searchString: string;
  updateSearchString: (searchString: string) => void;
};

export const enum Category {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

const CategoryContex = React.createContext<CategoryContexType | undefined>(
  undefined
);

export const CategoryContexProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [categorySelected, setCategorySelected] = useState(Category.All);
  const [searchString, setSearchString] = useState("");

  const updateCategory = (category: Category) => {
    setCategorySelected(category);
  };

  const updateSearchString = (searchString: string) => {
    setSearchString(searchString);
  };

  return (
    <CategoryContex.Provider
      value={{
        categorySelected,
        updateCategory,
        searchString,
        updateSearchString,
      }}
    >
      {children}
    </CategoryContex.Provider>
  );
};

export const useCategoryContex = (): CategoryContexType | null => {
  const context = React.useContext(CategoryContex);
  if (!context) {
    return null;
  }
  return context;
};
