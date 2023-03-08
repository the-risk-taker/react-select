import React, { useEffect, useState } from "react";
import Select from "react-select";
import delay from "delay";

const fetch = async (setCategories) => {
  await delay(2000);

  setCategories(["Food", "Car"]);
  console.log("fetched!");
};

const MySelect = ({ value, options, onChange }) => {
  return <Select options={options} value={value} onChange={onChange} />;
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(setCategories);
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const first = categories.find((item) => item === "Food");
      setSelectedCategory({ label: first, value: first });
    }
  }, [categories]);

  const onCategorySelected = (selected) => {
    setSelectedCategory(selected);
  };

  return (
    <div className="App">
      <MySelect
        value={selectedCategory}
        options={categories.map((item) => {
          return { label: item, value: item };
        })}
        onChange={onCategorySelected}
      />
    </div>
  );
};

export default App;
