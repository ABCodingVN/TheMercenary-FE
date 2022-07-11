import React, { useEffect, useState } from 'react';

import ProductList from '../ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../ProductSort';
import Styles from './ProductMain.module.scss';
import { makeStyles } from '@material-ui/core';
import productApi from '../../../../api/product';
import ProductSkeletonList from '../ProductSkeletonList';
const useStyles = makeStyles((theme) => ({
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
    },
}));
function ProductMain(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 4,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 5,
        _sort: 'salePrice:ASC',
    });
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                console.log({ data, pagination });
                setPagination(pagination);
            } catch (error) {
                console.log('Failed', error);
            }
            setLoading(false);
        })();
    }, [filters]);
    const handlePageOnchange = (e, page) => {
        setFilters((prevFiltes) => ({
            ...prevFiltes,
            _page: page,
        }));
    };
    const handleSortchange = (newSort) => {
        setFilters((prevFiltes) => ({
            ...prevFiltes,
            _sort: newSort,
        }));
    };
    return (
        <div className={Styles.Container}>
            <div className={Styles.ContentWrap}>
                <div className={Styles.ListPage}>
                    <ProductSort currentSort={filters._sort} onChange={handleSortchange} />
                    {/* {loading ? <ProductSkeletonList length={3} /> : <ProductList data={productList} />} */}
                    {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                    <Pagination
                        className={classes.pagination}
                        color="primary"
                        count={Math.ceil(pagination.total / pagination.limit)}
                        page={pagination.page}
                        onChange={handlePageOnchange}
                    ></Pagination>
                </div>
            </div>
        </div>
    );
}

export default ProductMain;
