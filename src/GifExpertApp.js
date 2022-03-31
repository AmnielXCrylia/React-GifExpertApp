import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon ball Z']);

    return (
        <>
            <h2 className='animate__animated animate__backInDown'>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid 
                            key={ category }
                            category = { category } 
                        />
                    ))
                }
            </ol>

        </>
    );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
