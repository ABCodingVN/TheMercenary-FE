import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Product.module.scss';
import { useHistory } from 'react-router-dom';
Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const history = useHistory();
    const handleDetailPageClick = () => {
        history.push(`product/${product.ProductId}`);
        console.log(product);
    };
    const ImageUrl = product.ImageURL;
    return (
        <div className={Styles.Home} onClick={handleDetailPageClick}>
            <div className={Styles.Content}>
                <span className={Styles.Span}>
                    <div>
                        <div className={Styles.Thumbnail}>
                            <img src={ImageUrl} alt="" height={230} width={250} />
                        </div>
                        <div className={Styles.Info}>{product.name}</div>
                        <div className={Styles.Price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                product.Price,
                            )}
                            {product.Quantity > 0 ? `-${product.Quantity}%` : ''}
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Product;
