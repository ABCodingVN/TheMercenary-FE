import React from 'react';
import Header from '../../Componets/Header/Header';
import Banner from '../../Componets/Banner/Banner';
import CategoryItems from '../../Componets/CategoryItems/CategoryItems';
import ProductFeature from '../../Componets/Product';

function Home() {
    return (
        <>
            <Header />
            <CategoryItems />
            <Banner />
            <ProductFeature />
        </>
    );
}

export default Home;
