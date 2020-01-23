import React from 'react';
import { connect } from 'react-redux'

import { fetchData } from './actions'
import './App.css';


function App(props) {
  props.fetchData()
  return (
    <div className="App">
      
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    data: state.data
  }
}

export default connect(mapStateToProps, {fetchData})(App);
