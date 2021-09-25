//其他三个组件的父组件
import React, { useReducer, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import { initialState, reducer } from '../store/reducer';
import spinner from '../image/giphy.gif';
import axios from 'axios';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=princess&apikey=4a3b711b";

//使用useReducer函数替代三个有关联的useState函数

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(MOVIE_API_URL).then(result => {
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: result.data.Search
            });
        });
    }, []);

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(result => {
                if (result.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: result.data.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: result.data.Error
                    });
                }
            });
    };

    // //处理加载状态
    // const [loading, setLoading] = useState(true);
    // //从服务器获取电影数组
    // const [movies, setMovies] = useState([]);
    // //处理在发出 API 请求时可能发生的任何错误
    // const [errorMessage, setErrorMessage] = useState(null);

    // //包含在组件初始呈现期间调用API的函数
    // //ps：副作用是指数据获取、订阅和手动 DOM 操作等
    // useEffect(() => {
    //     fetch(MOVIE_API_URL)
    //         .then(res => res.json())
    //         .then(result => {
    //             setMovies(result.Search);
    //             setLoading(false);
    //         });
    // }, []);

    // const search = searchValue => {
    //     setLoading(true);
    //     setErrorMessage(null);

    //     //包含处理API请求的函数
    //     fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.Response === "True") {
    //                 setMovies(result.Search);
    //                 setLoading(false);
    //             } else {
    //                 setErrorMessage(result.error);
    //                 setLoading(false);
    //             }
    //         });
    // };

    const { movies, errorMessage, loading } = state;

    const retrivedMovies =
        loading && !errorMessage ? (
            <img className="loading" src={spinner} alt="Loading spinner" />
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
        )

    return (
        <div className="App">
            <div className="m-container">
                <Header text="HOOKED" />
                <Search search={search} />
                <p className="App-intro">Sharing a few of our favourite movies</p>
                <div className="movies">{retrivedMovies}</div>
            </div>
        </div>
    );
};



export default App;