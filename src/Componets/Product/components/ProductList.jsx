import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Product from './Product';

function ProductList({ data }) {
    return (
        <Box sx={{ my: 5 }}>
            <Grid container>
                {data.products.map((product) => (
                    <Grid item key={product.ProductId}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
