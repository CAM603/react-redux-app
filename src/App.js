import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import './App.css';
import { fetchData } from './actions/fetchAction'
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';


function App(props) {

  return (
    <div className="App">
      <Route exact path="/">
        <PokemonList />
      </Route>
      <Route path="/:id">
        <Pokemon />
      </Route>
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
