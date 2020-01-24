import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../actions/fetchAction'


import { nextPage, prevPage } from '../actions/pageAction';

const PokemonList = (props) => {

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
        <div>
            <button onClick={nextPage}>next</button>
            <button onClick={prevPage}>prev</button>
            {props.data.map(el => (
                <Link key={el.name} to={`/${el.name}`}>
                    <h3>{el.name}</h3>
                </Link>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.fetchReducer.data,
        page: state.pageReducer.page
    }
}
export default connect(mapStateToProps,{nextPage, prevPage, fetchData})(PokemonList);