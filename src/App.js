import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchData } from './actions/fetchAction'
import './App.css';
import PokemonList from './components/PokemonList';


function App(props) {
  
  useEffect(() => {
    props.fetchData(props.page)
  },[props.page])

  return (
    <div className="App">
      <PokemonList />
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

export default connect(mapStateToProps, {fetchData})(App);
