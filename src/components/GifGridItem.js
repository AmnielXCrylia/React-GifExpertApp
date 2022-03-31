import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ( {id, title, url } ) => {

    return (
        <div className='card animate__animated animate__backInDown'>
            <img src={ url } alt={ title }/>
            <p> { title } </p>
        </div>
    );
};

GifGridItem.propTypes = {};

export default GifGridItem;
