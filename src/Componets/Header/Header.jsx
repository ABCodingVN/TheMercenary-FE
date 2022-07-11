import React from 'react';
import Styles from './Header.module.scss';
import Logo from '../../Image/logo.png';
import Search from '../../Image/search.png';
import Button from '@material-ui/core/Button'
function Header(props) {
   
    return (
        <div className={Styles.Wrapper}>
            <div className={Styles.Header}>
                <div className={Styles.Middle}>
                    <div className={Styles.Logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={Styles.FormSearch}>
                        <div className={Styles.Search}>
                            <input className={Styles.Input} type="text" placeholder="Tìm kiếm sản phẩm"></input>
                            <button className={Styles.Button}>
                                <img src={Search} alt="serach" />
                                Tìm kiếm
                            </button>
                            <div className={Styles.User}>
                                <Button color='inherit'>Login</Button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
