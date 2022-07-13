import React from 'react';
import Styles from './Header.module.scss';
import Logo from '../../Image/logo.png';
import Freeship from '../../Image/freeship.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../api/product';
import { Context } from '../../Context/Context';
import Search from '../../Image/search.png';
import Button from '@material-ui/core/Button';

export default function Header() {
    const { setProductList } = useContext(Context)
    const [search, setSearch] = useState({
        inputSearch: ""
    })
    useEffect(() => {
        const fetch = async () => {
            const data = await productApi.search(search)
            console.log(data)
            if (data.success) setProductList(data)
            else setProductList([])
        }
        fetch()
    }, [search])

    return (
        <div className={Styles.Header}>
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

            <div className={Styles.Logo}>
                <img src={Logo} alt="logo" />
                <img src={Freeship} alt="Freeship" />
            </div>
            <div className={Styles.Seaching}>
                <input onKeyPress={(e) => {
                    (e.key === "Enter") &&
                        setSearch({ inputSearch: e.target.value },
                        );

                }}
                    type="text" />
                <BsSearch />
            </div>
            <div className={Styles.Login}>
                <FaUserCircle />
                <Link to="/login">
                    <p>Đăng nhập/Đăng ký</p>
                </Link>
            </div>
            <div className={Styles.Cart}>
                <AiOutlineShoppingCart /> <p> Giỏ hàng</p>
            </div>
        </div>
    )
}


