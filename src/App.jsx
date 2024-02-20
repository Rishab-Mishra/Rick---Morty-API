
import React, { useEffect, useReducer } from 'react';
import app from './App.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Search from './components/Filters/Search';
import Paginate from './components/Pagination/Paginate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Cards/CardDetails";
import { postServices } from './Services/post';

// Reducer function to manage search parameters
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, searchName: action.payload, pageNumber:1 };
    case 'SET_STATUS':
      return { ...state, status: action.payload, pageNumber:1 };
    case 'SET_GENDER':
      return { ...state, gender: action.payload, pageNumber:1 };
    case 'SET_SPECIES':
      return { ...state, species: action.payload, pageNumber:1 };
    case 'SET_PAGENUMBER':
      return {...state, pageNumber: action.payload};
    case 'UPDATE_FETCHED_DATA':
      return {...state, fetchedData: action.payload};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(searchReducer, {
    searchName: "",
    status: "",
    gender: "",
    species: "",
    pageNumber: 1,
    fetchedData: {info: {}, results: []}
  });

  const { searchName, status, gender, species, pageNumber, fetchedData } = state;

  useEffect(() => {
    (function () {
      postServices.getPost({
        page: pageNumber,
        status: status,
        name: searchName,
        gender: gender,
        species: species,
      }).then(res => {
        dispatch({type: 'UPDATE_FETCHED_DATA', payload: res.data});
      }).catch(err => {
        console.log(err);
        dispatch({type: 'UPDATE_FETCHED_DATA', payload: { info: {}, results: [] }});
      })

    })();
  }, [searchName, status, pageNumber, gender, species]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home
          searchState={state}
          dispatch={dispatch}
          pageNumber={pageNumber}
          setPageNumber={pageNumber => dispatch({type: 'SET_PAGENUMBER', payload: pageNumber})}
          fetchedData={fetchedData}
        />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = ({ searchState, dispatch, pageNumber, setPageNumber, fetchedData, updateFetchedData }) => {
  const { searchName } = searchState;

  return (
    <div className="App">
      <h1 className={`text-center my-5 ${app.heading}`}>Rick & Morty <span style={{ color: "rgba(9, 111, 9, 0.842)" }}>Wiki</span></h1>
      <Search searchName={searchName} setSearchName={name => dispatch({ type: 'SET_NAME', payload: name })} />

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters
              setGender={gender => dispatch({ type: 'SET_GENDER', payload: gender })}
              setStatus={status => dispatch({ type: 'SET_STATUS', payload: status })}
              setSpecies={species => dispatch({ type: 'SET_SPECIES', payload: species })}
              setPageNumber={setPageNumber}
            />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards page="/" results={fetchedData.results} />
            </div>
          </div>
        </div>
      </div>

      <Paginate
        info={fetchedData.info}
        pageNumber={pageNumber}
        updatePageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;