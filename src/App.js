import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchData } from './actions/fetchAction'
import { nextPage, prevPage } from './actions/pageAction';
import './App.css';


function App(props) {
  
  useEffect(() => {
    props.fetchData(props.page)
  },[props.page])

  const nextPage = () => {
    props.nextPage()
  }
  const prevPage = () => {
    props.prevPage()
  }

  return (
    <div className="App">
      <button onClick={nextPage}>next</button>
      <button onClick={prevPage}>prev</button>
      {props.data.map(el => (
        <h3>{el.name}</h3>
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.fetchReducer.loading,
    error: state.fetchReducer.error,
    data: state.fetchReducer.data,
    page: state.pageReducer.page
  }
}

export default connect(mapStateToProps, {fetchData, nextPage, prevPage})(App);
