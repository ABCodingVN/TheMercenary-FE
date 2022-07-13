import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AddToCart.module.scss';
AddToCart.propTypes = {};

function AddToCart(props) {
    return (
        <div className={Styles.AddToCart}>
            <div className={Styles.Quantity}>
                <div>
                    <p className={Styles.Label}>Số lượng</p>
                    <div className={Styles.GroupInput}>
                        <button className={Styles.Dislabel}>
                            <img
                                className={Styles.Img}
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                alt=""
                            />
                        </button>
                        <input type="text" value="1" className={Styles.Input}></input>
                        <button className={Styles.Dislabel}>
                            <img
                                className={Styles.Img}
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className={Styles.Button}>
                <button>Chọn mua</button>
            </div>
        </div>
    );
}

export default AddToCart;
