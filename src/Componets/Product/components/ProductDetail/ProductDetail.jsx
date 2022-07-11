import React from 'react';
import DetailBuy from './DetailBuy/DetailBuy';
import DetailDescribe from './DetailDescribe/DetailDescribe';
import { Carousel } from 'react-carousel-minimal';
import Styles from './ProductDetail.module.scss';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const data = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
    },
    {
        image: 'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
    },
    {
        image: 'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
    },
    {
        image: 'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
    },
    {
        image: 'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
    },
];
const thumbnails = {
    width: '64px',
    height: '64px',
};
function ProductDetail(props) {
    return (
        <div className={Styles.Container}>
            <div className={Styles.BreadCrum}>
                <div className={Styles.ItemBreadCrum}>
                    <div className={Styles.Home}>
                        <div className={Styles.IconsHome}>
                            <HomeIcon />
                        </div>
                        <span className={Styles.DataCrum}>BOO STORE</span>
                    </div>
                    <div className={Styles.Home}>
                        <div className={Styles.Icon}>
                            <GroupAddIcon />
                        </div>
                        <span className={Styles.DataCrum}>Người theo dõi</span>
                    </div>
                    <div className={Styles.Home}>
                        <div className={Styles.Icon}>
                            <ChatBubbleOutlineIcon />
                        </div>
                        <span className={Styles.DataCrum}>Phản hồi chat 100%</span>
                    </div>
                </div>
            </div>
            <div className={Styles.Wrapper}>
                <div className={Styles.Left}>
                    <Carousel data={data} width="444px" height="444px" thumbnails={thumbnails} />
                </div>
                <div className={Styles.Bottom}></div>
                <div className={Styles.Right}>
                    <div className={Styles.Header}>
                        <h1>
                            Áo phông nam nữ unisex tay lỡ thun form rộng teen cổ tròn oversize cotton giá rẻ basic đen
                            trắng tee pull freesize PREFTED
                        </h1>
                    </div>
                    <div className={Styles.Body}>
                        <div className={Styles.BodyLeft}>
                            <div className={Styles.Price}>
                                <div>
                                    <div className={Styles.ProductPrice}>
                                        <div className={Styles.CurrentPrice}>51.000 đ</div>
                                        <div className={Styles.ListPrice}>118.000 đ</div>
                                        <div className={Styles.DiscountRate}>-57%</div>
                                    </div>
                                </div>
                                <div className={Styles.FreeShip}>
                                    <div className={Styles.Item}>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
                                            alt=""
                                        />
                                    </div>
                                    <h1>Miễn phí vận chuyển</h1>
                                </div>
                            </div>
                            <div className={Styles.SizeChart}>
                                <button>Bảng kích thước</button>
                                <img
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icon-right.svg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className={Styles.P}>Màu</p>

                                <div className={Styles.Options}>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={Styles.Data}>
                                        <div className={Styles.Figure}>
                                            <picture>
                                                <img
                                                    className={Styles.Img}
                                                    src="https://salt.tikicdn.com/cache/100x100/ts/product/8e/9f/6d/46190791027a824ab90a91d513acc5e4.png.webp"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <span className={Styles.Span}>Trắng</span>
                                        <div>
                                            <img
                                                className={Styles.IconStyles}
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DetailBuy />
                        </div>
                        <div className={Styles.BodyRight}>
                            <div className={Styles.Title}>
                                <div className={Styles.Origin}>
                                    <div>
                                        <h1>Xuất xứ:</h1>
                                    </div>
                                    <div>
                                        <h1>Việt Nam</h1>
                                    </div>
                                </div>
                                <div className={Styles.Origin}>
                                    <div>
                                        <h1>Xuất xứ:</h1>
                                    </div>
                                    <div>
                                        <h1>Việt Nam</h1>
                                    </div>
                                </div>
                                <div className={Styles.Origin}>
                                    <div>
                                        <h1>Xuất xứ:</h1>
                                    </div>
                                    <div>
                                        <h1>Việt Nam</h1>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.Size}>
                                <p>Size</p>
                                <div className={Styles.ListSize}>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                    <button>2XL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailDescribe />
        </div>
    );
}

export default ProductDetail;
