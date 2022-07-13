import React from 'react';
import Header from '../../Componets/Header/Header';
import Banner from '../../Componets/Banner/Banner';
import CategoryItems from '../../Componets/CategoryItems/CategoryItems';
import Product from '../../Componets/Product/ProductMain';
import ProductList from '../../Componets/Product/components/ProductList';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import ProductFeature from '../../Componets/Product';




function Home() {
    const {productList} = useContext(Context)
    console.log(productList)
    return (
        <>
            <Header />
            <CategoryItems />
            <Banner />
            <ProductList products={productList?.products}/>
            <ProductFeature />
        </>
    );
    }
export default Home;
