import { useState, useEffect } from "react";

const SearchBar = ({ posts, setPosts }) => {
    const [searchItem, setSeachItem] = useState('');

    useEffect(() => {
        const search = posts.filter(data => (data.title).toString().toLowerCase().includes(searchItem))
        setPosts(search)
    }, [searchItem])

    return (
        <>
            <label>Search</label>
            <input value= {searchItem} onChange={(event) => setSeachItem((event.target.value).toLowerCase())} />
        </>
    )

}

export default SearchBar;