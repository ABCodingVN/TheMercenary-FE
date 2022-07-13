import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

import ProductMain from './components/ProductMain/ProductMain';

function ProductFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/" component={ProductMain} exact />
                <Route path="/product/:productId" component={ProductDetail} exact />
            </Switch>
        </div>
    );
}

export default ProductFeature;
