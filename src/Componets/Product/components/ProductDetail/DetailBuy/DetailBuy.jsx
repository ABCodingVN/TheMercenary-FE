import React from 'react';
import PropTypes from 'prop-types';
import Styles from './DetailBuy.module.scss';
import AddToCart from '../AddToCart';
import DeliveryAddress from './DeliveryAddress';
DetailBuy.propTypes = {};

function DetailBuy(props) {
    return (
        <div className={Styles.DiscountCode}>
            <div className={Styles.Text}>9 mã giảm giá</div>
            <div className={Styles.Tags}>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <div className={Styles.CouponTag}>Giảm 10k</div>
                <img src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png" alt="" />
            </div>
            <div className={Styles.DeliveryZone}>
                <div className={Styles.DataviewId}>
                    <div className={Styles.Address}>
                        <span>Giao đến</span>
                        <span>
                            <DeliveryAddress />
                        </span>
                        <span className={Styles.AddressChange}>Đổi địa chỉ</span>
                    </div>
                </div>
                <div className={Styles.DeliveryZoneInner}>
                    <div className={Styles.InfoHeader}>
                        <div className={Styles.HeaderLogo}>
                            <img
                                src="https://salt.tikicdn.com/ts/upload/32/47/d7/5798c9bee17003cf7995c37930f0eeac.png"
                                alt=""
                            />
                        </div>
                        <div className={Styles.HeaderHighlight}>Thứ 3 ngày 5/7</div>
                    </div>
                    <div className={Styles.InfoNote}>17.000đ (Freeship 30k đh 149k)</div>
                </div>
                <div className={Styles.Buy}>
                    <div className={Styles.Quantity}></div>
                    <div className={Styles.Button}></div>
                </div>
            </div>

            <AddToCart />
        </div>
    );
}

export default DetailBuy;
