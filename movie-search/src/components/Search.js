import React, { useState } from 'react';

const Search = ({ search }) => {
    //input输入的状态值
    const [searchValue, setSearchValue] = useState('');

    //更新状态值为input输入的当前状态
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    //重置字段
    const resetInputField = () => {
        setSearchValue('');
    }

    //包含调用search函数的函数，该函数作为props传递给它
    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    }

    //包含一个带有input元素、搜索button的表单
    return (
        <form className="search">
            <input
                onChange={handleSearchInputChanges}
                type="text"
                value={searchValue}
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="SEARCH"
            />
        </form>
    );
}

export default Search;