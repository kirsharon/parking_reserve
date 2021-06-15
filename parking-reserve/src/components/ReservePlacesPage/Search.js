import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Search = ({ history }) => {
    return (
        <div className='search-form'>
            <input type='search' placeholder='&#128269;' /> 
            <div className='parameters'>
                <input type='text' placeholder='Км:' /> 
                <input type='text' placeholder='От:' /> 
                <input type='text' placeholder='До:' />
                <button type='submit'>Найти</button>
            </div>
        </div>
    )
}

export default Search