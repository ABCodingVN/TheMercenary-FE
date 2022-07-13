import React from 'react';
import PropTypes from 'prop-types';
import Styles from './DetailDescribe.module.scss';
DetailDescribe.propTypes = {};

function DetailDescribe(props) {
    return (
        <div className={Styles.Describe}>
            <h2>Mô tả sản phẩm</h2>
            <div className={Styles.Content}>
                <p>Mô tả sản phẩm</p>
                <p>- Màu sắc: Xanh Biển, Trắng, Nâu,</p>
                <p>- Chất liệu: Cottton Thun Lạnh</p>
                <p>- Kích thước size: M, L, XL, 2XL, 3XL</p>
                <p>- Thương hiệu: YODY</p>
            </div>
        </div>
    );
}

export default DetailDescribe;
