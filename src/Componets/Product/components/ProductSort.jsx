import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@material-ui/core';
ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (e,newValue) => {
        if(onChange){
            onChange(newValue)
        }
    }
    return (
        <Tabs value={currentSort} onChange={handleSortChange} >
            <Tab label="Giá Thấp" value="salePrice:ASC"></Tab>
            <Tab label="Giá Cao" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;