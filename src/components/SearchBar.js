import { Input } from "antd";
import { useState, useEffect } from "react";

const { Search } = Input;

const SearchBar = ({ posts, setPosts }) => {
  const [searchItem, setSeachItem] = useState("");

  useEffect(() => {
    const search = posts.filter((data) =>
      data.title.toString().toLowerCase().includes(searchItem)
    );
    setPosts(search);
  }, [searchItem]);

  return (
    <Search
      className="searchBar"
      placeholder="input search text"
      onChange={(event) => setSeachItem(event.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
