import { Tabs, Carousel, Row } from "antd";
import { useEffect, useState } from "react";
import { Product } from "@/components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import axiosClient from "@/configs/axiosClient";
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
// import { CountdownTimer } from "@/components";
// import { FiInfo } from "react-icons/fi";

// const { TabPane } = Tabs;

const sliderImages = [
    'src/assets/images/slider_1.webp',
    'src/assets/images/banner2.jpg',
    'src/assets/images/banner3.jpg'
]

const serviceImages = [
    'src/assets/images/package.png',
    'src/assets/images/box.png',
    'src/assets/images/credit-card.png',
    'src/assets/images/refund.png'
]

const categoryImages = [
    "src/assets/images/img_banner_1.webp",
    "src/assets/images/img_banner_2.webp",
    "src/assets/images/img_banner_3.webp",
    "src/assets/images/img_banner_4.webp"
]

const tabImages = [
    "src/assets/images/img_banner_tab.webp",
    "src/assets/images/tab-nam.webp",
    "src/assets/images/tab-nu.webp",
    "src/assets/images/tab-gym.webp"
]

const bannerBigImage = "src/assets/images/img_banner_big.webp"

const threeBannerImages = [
    "src/assets/images/img_3banner_1.webp",
    "src/assets/images/img_3banner_2.webp",
    "src/assets/images/img_3banner_3.webp"
]

const brandImages = [
    {
        id: 1,
        path: "src/assets/images/img_brand_1.webp",
    },
    {
        id: 2,
        path: "src/assets/images/img_brand_2.webp",
    },
    {
        id: 3,
        path: "src/assets/images/img_brand_3.webp",
    },
    {
        id: 4,
        path: "src/assets/images/img_brand_4.webp",
    },
    {
        id: 5,
        path: "src/assets/images/img_brand_5.webp",
    },
    {
        id: 6,
        path: "src/assets/images/img_brand_6.webp",
    },
]

const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    vertical: false,
    draggable: true
};

// interface SaleProduct {
//     productId: number;
//     saleHour: number;
//     saleCount: number;
//     discountPercent: number;

// }

interface Product {
    _id: number;
    name: string;
    price: number;
    discount: number;
    sold: number;
    saleCount: number;
    category: {
        sex: string;
        categoryDetail: string;
    }
    images: { imgUrl: string }[];
    slug: string;
}

export function Home() {
    // const [tabIndex, setTabIndex] = useState<number>(0);
    const [tabProductIndex, setProductTabIndex] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);
    // const [officialProducts, setOfficialProducts] = useState<Product[]>([]);
    const [bestSellerProducts, setBestSellerProducts] = useState<Product[]>([]);
    const [maleProducts, setMaleProducts] = useState<Product[]>([
        {
        _id: 1,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    {
        _id: 2,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    {
        _id: 3,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    {
        _id: 4,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    {
        _id: 5,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    {
        _id: 6,
        name: "123",
        price: 123,
        discount: 20,
        sold: 2,
        saleCount: 2,
        images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
        slug: "123",
        category: {
            sex: 'nam',
            categoryDetail: '1123123'
        }
    },
    ]);
    const [femaleProducts, setFemaleProducts] = useState<Product[]>([]);
    const [gymProducts, setGymProducts] = useState<Product[]>([]);
    // const [saleProductsInTabIndex, setSaleProductsInTabIndex] = useState<Product[][]>([]);
    // const currentTime = new Date();
    // const [status, setStatus] = useState<boolean[]>([false, false, false, false]);
    const [width, setWidth] = useState(window.innerWidth);

    // pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [currentLimit, setCurrentLimit] = useState(10);
    // const getProducts = async () => {
    //     await axiosClient
    //         .get(`/products?page=${currentPage}&limit=${currentLimit}`)
    //         .then(({ data }) => {
    //             setProducts(data.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const getSaleProducts = async () => {
    //     try {
    //         const month = currentTime.getMonth() + 1;
    //         const paddedMonth = month < 10 ? `0${month}` : month;
    //         const day = currentTime.getDate();
    //         const paddedDay = day < 10 ? `0${day}` : day;
    //         const response = await axiosClient.get(
    //             `/sale/get/${currentTime.getFullYear()}-${paddedMonth}-${paddedDay}`
    //         );
    //         const saleProducts = response.data;

    //         const itemInTabIndex0 = saleProducts.filter(
    //             (saleProduct: SaleProduct) => saleProduct.saleHour === 0
    //         );
    //         const itemInTabIndex1 = saleProducts.filter(
    //             (saleProduct: SaleProduct) => saleProduct.saleHour === 6
    //         );
    //         const itemInTabIndex2 = saleProducts.filter(
    //             (saleProduct: SaleProduct) => saleProduct.saleHour === 12
    //         );
    //         const itemInTabIndex3 = saleProducts.filter(
    //             (saleProduct: SaleProduct) => saleProduct.saleHour === 18
    //         );
    //         const saleProductsInTabIndex0: Product[] = await Promise.all(
    //             itemInTabIndex0.map(async (item: SaleProduct) => {
    //                 const product = await getProductById(item.productId);
    //                 product.saleCount = item.saleCount;
    //                 product.discount = item.discountPercent;
    //                 return product;
    //             })
    //         );
    //         const saleProductsInTabIndex1: Product[] = await Promise.all(
    //             itemInTabIndex1.map(async (item: SaleProduct) => {
    //                 const product = await getProductById(item.productId);
    //                 product.saleCount = item.saleCount;
    //                 product.discount = item.discountPercent;
    //                 return product;
    //             })
    //         );
    //         const saleProductsInTabIndex2: Product[] = await Promise.all(
    //             itemInTabIndex2.map(async (item: SaleProduct) => {
    //                 const product = await getProductById(item.productId);
    //                 product.saleCount = item.saleCount;
    //                 product.discount = item.discountPercent;
    //                 return product;
    //             })
    //         );
    //         const saleProductsInTabIndex3: Product[] = await Promise.all(
    //             itemInTabIndex3.map(async (item: SaleProduct) => {
    //                 const product = await getProductById(item.productId);
    //                 product.saleCount = item.saleCount;
    //                 product.discount = item.discountPercent;
    //                 return product;
    //             })
    //         );

    //         const productsCopy: Product[] = [...products];
    //         if (0 <= currentTime.getHours() && currentTime.getHours() < 6) {
    //             for (let item of itemInTabIndex0) {
    //                 for (let product of productsCopy) {
    //                     let typedProduct = product as Product;
    //                     if (item.productId === typedProduct._id) {
    //                         typedProduct.discount = item.discountPercent;
    //                     }
    //                 }
    //             }
    //         } else if (6 <= currentTime.getHours() && currentTime.getHours() < 12) {
    //             for (let item of itemInTabIndex1) {
    //                 for (let product of productsCopy) {
    //                     let typedProduct = product as Product;
    //                     if (item.productId === typedProduct._id) {
    //                         typedProduct.discount = item.discountPercent;
    //                     }
    //                 }
    //             }
    //         } else if (12 <= currentTime.getHours() && currentTime.getHours() < 18) {
    //             for (let item of itemInTabIndex2) {
    //                 for (let product of productsCopy) {
    //                     let typedProduct = product as Product;
    //                     if (item.productId === typedProduct._id) {
    //                         typedProduct.discount = item.discountPercent;
    //                     }
    //                 }
    //             }
    //         } else if (18 <= currentTime.getHours() && currentTime.getHours() < 24) {
    //             for (let item of itemInTabIndex3) {
    //                 for (let product of productsCopy) {
    //                     let typedProduct = product as Product;
    //                     if (item.productId === typedProduct._id) {
    //                         typedProduct.discount = item.discountPercent;
    //                     }
    //                 }
    //             }
    //         }
    //         setOfficialProducts(productsCopy);
    //         setSaleProductsInTabIndex([
    //             saleProductsInTabIndex0,
    //             saleProductsInTabIndex1,
    //             saleProductsInTabIndex2,
    //             saleProductsInTabIndex3,
    //         ]);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const getProductById = async (productId: number) => {
    //     try {
    //         const response = await axiosClient.get(`/getProductById/${productId}`);
    //         // console.log(response.data)
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         return null;
    //     }
    // };

    // const getBestSellerProduct = () => {
    //     const productsCopy = [...officialProducts];
    //     const sortedProducts = productsCopy.sort((a: Product, b: Product) => b.sold - a.sold);
    //     setBestSellerProducts(sortedProducts.slice(0, 6));
    // };

    // const getMaleProducts = () => {
    //     const productsCopy = [...officialProducts];
    //     const tmpProducts = productsCopy.filter(
    //         (product: Product) => product.category.sex.toLowerCase() === "nam"
    //     );
    //     setMaleProducts(tmpProducts);
    // };

    // const getFemaleProducts = () => {
    //     const productsCopy = [...officialProducts];
    //     const tmpProducts = productsCopy.filter(
    //         (product) => product.category.sex.toLowerCase() === "nữ"
    //     );
    //     setFemaleProducts(tmpProducts);
    // };

    // const getGymProducts = () => {
    //     const productsCopy = [...officialProducts];
    //     const tmpProducts = productsCopy.filter((product) =>
    //         product.category.categoryDetail.toLowerCase().includes("gym")
    //     );
    //     setGymProducts(tmpProducts);
    // };

    const tabItems = [
        {
            key: '0',
            icon:
                <div className="inline-block border-2 border-blue-cyan transition-all duration-300 w-10 h-10 rounded-full">
                    <img
                        className="border-0 max-w-full h-auto bg-transparent"
                        src={tabImages[1]}
                        alt="tab nam"
                    />
                </div>,
            label: (
                <div className={`inline-block text-base text-black cursor-pointer font-semibold relative w-4/12 mb-0 ${tabProductIndex === 0 ? "text-blue-cyan absolute" : ""}`}>
                    <p>
                        Thời trang Nam
                        <span className="block text-xs text-gray-600 font-normal">{products ? maleProducts?.length : 0} sản phẩm</span>
                    </p>
                </div>
            ),
            children: (
                <div className="p-0 m-2.5">
                    <div className={`h-0 overflow-hidden ${tabProductIndex === 0 ? "opacity-100 visible h-auto" : "opacity-0 invisible"}`}>
                        <div className="mx-auto relative overflow-hidden list-none p-0">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={width > 768 ? 4 : 2}
                                navigation
                                modules={[Navigation]}
                            >
                                {products ? (
                                    maleProducts?.map((product, index) => (
                                        <SwiperSlide key={index} className="relative mb-4 bg-white p-2.5 rounded-md !w-1/4">
                                            <Product
                                                discount={!!product.discount}
                                                product={product}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : null}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )
        },
        {
            key: '1',
            icon:
                <div className="inline-block border-2 border-blue-cyan transition-all duration-300 w-10 h-10 rounded-full">
                    <img
                        className="border-0 max-w-full h-auto bg-transparent"
                        src={tabImages[2]}
                        alt="tab nam"
                    />
                </div>,
            label: (
                <div className={`inline-block text-base text-black cursor-pointer font-semibold relative w-4/12 mb-0 ${tabProductIndex === 1 ? "text-blue-cyan absolute" : ""}`}>
                    <p>
                        Thời trang Nữ
                        <span className="block text-xs text-gray-600 font-normal">{products ? femaleProducts?.length : 0} sản phẩm</span>
                    </p>
                </div>
            ),
            children: (
                <div className="p-0 m-2.5">
                    <div className={`h-0 overflow-hidden ${tabProductIndex === 0 ? "opacity-100 visible h-auto" : "opacity-0 invisible"}`}>
                        <div className="mx-auto relative overflow-hidden list-none p-0">
                            <Row>
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={width > 768 ? 4 : 2}
                                    navigation
                                    modules={[Navigation]}
                                >
                                    {products ? (
                                        femaleProducts?.map((product, index) => (
                                            <SwiperSlide key={index} className="relative mb-4 bg-white p-2.5 rounded-md !w-1/4">
                                                <Product
                                                    discount={!!product.discount}
                                                    product={product}
                                                />
                                            </SwiperSlide>
                                        ))
                                    ) : null}
                                </Swiper>
                            </Row>
                        </div>
                    </div>
                </div>
            )
        },
        {
            key: '2',
            icon: <div className="inline-block border-2 border-blue-cyan transition-all duration-300 w-10 h-10 rounded-full">
                <img
                    className="border-0 max-w-full h-auto bg-transparent"
                    src={tabImages[3]}
                    alt="tab gym"
                />
            </div>,
            label: (
                <div className={`inline-block text-base text-black cursor-pointer font-semibold relative w-4/12 mb-0 ${tabProductIndex === 2 ? "text-blue-cyan absolute" : ""}`}>
                    <p>
                        Thời trang Gym
                        <span className="block text-xs text-gray-600 font-normal">{products ? gymProducts?.length : 0} sản phẩm</span>
                    </p>
                </div>
            ),
            children: (
                <div className="p-0 m-2.5">
                    <div className={`h-0 overflow-hidden ${tabProductIndex === 0 ? "opacity-100 visible h-auto" : "opacity-0 invisible"}`}>
                        <div className="mx-auto relative overflow-hidden list-none p-0 ">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={width > 768 ? 4 : 2}
                                navigation
                                modules={[Navigation]}
                            >
                                {products ? (
                                    gymProducts?.map((product, index) => (
                                        <SwiperSlide key={index} className="relative mb-4 bg-white p-2.5 rounded-md !w-1/4">
                                            <Product
                                                discount={!!product.discount}
                                                product={product}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : null}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="">
            <div className="relative w-full min-h-full mb-4">
                <div className="">
                    <div className="">
                        <Carousel {...settings}>
                            <div className="">
                                <img
                                    className="w-full h-full"
                                    src={sliderImages[0]}
                                    draggable={false}
                                    alt="slider"
                                />
                            </div>
                            <div className="w-full h-full">
                                <img
                                    src={sliderImages[1]}
                                    draggable={false}
                                    alt="slider"
                                />
                            </div>
                            <div className="w-full h-full">
                                <img
                                    src={sliderImages[2]}
                                    draggable={false}
                                    alt="slider"
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="mx-2.5 flex justify-content-center">
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="text-center shadow-md min-h-[85px] pt-2 pb-1 rounded md:min-h-[85px] md:mb-1 lg:min-h-[60px] last:border-r-0">
                                <div className="mb-1 lg:inline-block lg:mb-0">
                                    <img
                                        className="max-w-[36px] bg-transparent"
                                        src={serviceImages[0]}
                                        alt="delivery"
                                    />
                                </div>
                                <div className=" inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md">
                                    Vận chuyển <span className="font-semibold">Miễn phí</span> <br />
                                    Trong khu vực <span className="font-semibold">TP.HCM</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="text-center shadow-md min-h-[85px] pt-2 pb-1 rounded md:min-h-[85px] md:mb-1 lg:min-h-[60px] last:border-r-0">
                                <div className="mb-1 lg:inline-block lg:mb-0">
                                    <img
                                        className="max-w-[36px] bg-transparent"
                                        src={serviceImages[1]}
                                        alt="exchange"
                                    />
                                </div>
                                <div className=" inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md">
                                    Đổi trả <span className="font-semibold">Miễn phí</span> <br />
                                    Trong vòng <span className="font-semibold">30 ngày</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="text-center shadow-md min-h-[85px] pt-2 pb-1 rounded md:min-h-[85px] md:mb-1 lg:min-h-[60px] last:border-r-0">
                                <div className="mb-1 lg:inline-block lg:mb-0">
                                    <img
                                        className="max-w-[36px] bg-transparent"
                                        src={serviceImages[2]}
                                        alt="payment"
                                    />
                                </div>
                                <div className=" inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md">
                                    Tiến hành <span className="font-semibold">Thanh toán</span> <br />
                                    Với nhiều <span className="font-semibold">Phương thức</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="text-center shadow-md min-h-[85px] pt-2 pb-1 rounded md:min-h-[85px] md:mb-1 lg:min-h-[60px] last:border-r-0">
                                <div className="mb-1 lg:inline-block lg:mb-0">
                                    <img
                                        className="max-w-[36px] bg-transparent"
                                        src={serviceImages[3]}
                                        alt="refund"
                                    />
                                </div>
                                <div className="inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md">
                                    <span className="font-semibold">100% hoàn tiền</span> <br />
                                    Nếu sản phẩm <span className="font-semibold">Lỗi</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
            <div className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="flex justify-content-center">
                        <div className="lg:w-full md:w-full sm:w-full w-full">
                            <div className="relative mb-9 md:text-left md:mb-1">
                                <h2 className="text-black text-center text-lg">
                                    Top <span className="font-semibold text-blue-cyan">Bán Chạy</span>
                                </h2>
                            </div>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={width > 768 ? 4 : 2}
                                modules={[Navigation]}
                                navigation
                            >
                                {products ? (
                                    maleProducts?.map((product: Product) => (
                                        <SwiperSlide
                                            key={product._id}
                                            className="relative mb-3.5 bg-white p-2.5 rounded"
                                        >
                                            <Product
                                                product={product}
                                                ranking={maleProducts.indexOf(product) + 1}
                                                productCount={true}
                                                // handleClickEye={() => handleClickEye(product)}
                                                // handleClickCart={() => handleClickCart(product)}
                                                discount={product.discount ? true : false}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </Swiper>
                        </div>
                    </Row>
                </div>
            </div>
            <section className="mb-7 md:mb-3.5" id="index-flash-sale">
                <div className="container w-1200 mx-auto">
                    <div className="rounded border border-gray-300 pb-0 bg-amber-500 relative">
                        <div className="clearfix">
                            {/* <Tabs activeKey={String(tabIndex)} onChange={(key) => setTabIndex(Number(key))}>
                                <Row className="">
                                    <div className="h-16 flex items-center justify-center rounded inline-block w-full text-center">
                                        {[0, 1, 2, 3].map((index) => (
                                            <TabPane
                                                tab={
                                                    <div
                                                        className={`p-1 mb-2.5 font-semibold h-16 rounded flex-1 cursor-pointer bg-white text-gray-400 relative mr-0 border-r border-gray-300
                                                            ${tabIndex === index && "bg-red-700 text-white border-none"}
                                                    `}>
                                                        <div className="m-0 p-0 border-0 rounded-none opacity-100 bg-transparent text-inherit font-bold text-xl leading-7 overflow-hidden line-clamp-1 transition-colors duration-300 ease-in-out">
                                                            {index === 0 && "00:00 - 06:00"}
                                                            {index === 1 && "06:00 - 12:00"}
                                                            {index === 2 && "12:00 - 18:00"}
                                                            {index === 3 && "18:00 - 24:00"}
                                                        </div>
                                                        <div className="m-0 p-0 border-0 rounded-none opacity-100 bg-transparent text-inherit font-bold text-xl overflow-hidden line-clamp-1 transition-colors duration-300 ease-in-out md:text-base">
                                                            {(index === 0 &&
                                                                currentTime.getHours() >= 0 &&
                                                                currentTime.getHours() < 6) ||
                                                                (index === 1 &&
                                                                    currentTime.getHours() >= 6 &&
                                                                    currentTime.getHours() < 12) ||
                                                                (index === 2 &&
                                                                    currentTime.getHours() >= 12 &&
                                                                    currentTime.getHours() < 18) ||
                                                                (index === 3 &&
                                                                    currentTime.getHours() >= 18 &&
                                                                    currentTime.getHours() < 24)
                                                                ? "Đang diễn ra"
                                                                : status[index]
                                                                    ? "Đã diễn ra"
                                                                    : "Sắp diễn ra"}
                                                        </div>
                                                    </div>
                                                }
                                                key={index}
                                            />
                                        ))}
                                        <CountdownTimer />
                                    </div>
                                </Row>

                                {[0, 1, 2, 3].map((index) => (
                                    <TabPane key={index} tab={null}>
                                        <div className="p-[20px_20px_15px] md:p[75px_10px_15px_5px]">
                                            <div className={`opacity-0 invisible h-0 overflow-hidden ${tabIndex === index ? "opacity-100 visible h-auto" : ""}`}>
                                                <Row className="">
                                                    {saleProductsInTabIndex ? (
                                                        saleProductsInTabIndex[index].length > 0 ? (
                                                            <Swiper
                                                                spaceBetween={10}
                                                                slidesPerView={width > 768 ? 5 : 2}
                                                                modules={[Navigation]}
                                                                navigation
                                                            >
                                                                {saleProductsInTabIndex[index].map((product : Product, productIndex) => (
                                                                    <SwiperSlide key={productIndex} className="relative mb-4 bg-white p-4 rounded">
                                                                        <Product
                                                                            productCountSale={true}
                                                                            product={product}
                                                                            // handleClickCart={() => handleClickCart(product)}
                                                                            // handleClickEye={() => handleClickEye(product)}
                                                                            discount={!!product.discount}
                                                                        />
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                        ) : (
                                                            <div className="flex flex-col justify-center items-center">
                                                                <FiInfo className="w-60 h-60 text-white" />
                                                                <p className="text-white font-bold m-0 text-xl">Không có sản phẩm nào được giảm giá vào khung giờ này</p>
                                                            </div>
                                                        )
                                                    ) : (
                                                        <></>
                                                    )}
                                                </Row>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </Tabs> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="flex justify-content-center">
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group">
                                <img
                                    className="max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out"
                                    src={categoryImages[0]}
                                    alt="Men"
                                />
                                <div className="absolute inset-0 box-border transition-all duration-300 ease-in-out">
                                    <p className="bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out">
                                        Men's
                                    </p>
                                </div>
                                <Link to="/products?keyword=nam" className="absolute inset-0 cursor-pointer"></Link>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group">
                                <img
                                    className="max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out"
                                    src={categoryImages[1]}
                                    alt="Women"
                                />
                                <div className="absolute inset-0 box-border transition-all duration-300 ease-in-out">
                                    <p className="bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out">
                                        Women's
                                    </p>
                                </div>
                                <Link to="/products?keyword=nam" className="absolute inset-0 cursor-pointer"></Link>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group">
                                <img
                                    className="max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out"
                                    src={categoryImages[2]}
                                    alt="Kids"
                                />
                                <div className="absolute inset-0 box-border transition-all duration-300 ease-in-out">
                                    <p className="bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out">
                                        Kid's
                                    </p>
                                </div>
                                <Link to="/products?keyword=nam" className="absolute inset-0 cursor-pointer"></Link>
                            </div>
                        </div>
                        <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12">
                            <div className="bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group">
                                <img
                                    className="max-w-full scale-[1.1] group-hover:opacity-30 group-hover:bg-white group-hover:scale-100 box-border transition-all duration-300 ease-in-out"
                                    src={categoryImages[3]}
                                    alt="Gym"
                                />
                                {/* <div className="absolute inset-0 group-hover:opacity-30 group-hover:scale-100 group-hover:bg-white"></div> */}
                                <div className="absolute inset-0 box-border transition-all duration-300 ease-in-out">
                                    <p className="bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out">
                                        Gym's
                                    </p>
                                </div>
                                <Link to="/products?keyword=nam" className="absolute inset-0 cursor-pointer"></Link>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
            <section className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="">
                        <div className="flex-none w-full max-w-full">
                            <h2 className="text-lg text-black ">
                                Thời trang <span className="font-semibold text-blue-cyan">Xu Hướng</span>
                            </h2>
                        </div>
                        <div className="flex">
                            <div className="lg:flex-none lg:w-1/4 lg:max-w-1/4 block">
                                <div className="relative overflow-hidden block">
                                    <a className="">
                                        <img
                                            className="border-0 max-w-full h-auto bg-transparent"
                                            src={tabImages[0]}
                                            alt="banner tab"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-none w-3/4 max-w-3/4 px-2.5">
                                <Tabs
                                    activeKey={tabProductIndex.toString()}
                                    onChange={(key) => setProductTabIndex(Number(key))}
                                    items={tabItems}
                                    tabPosition="bottom"
                                />;
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
            <section className="bg-big-banner-sale bg-no-repeat bg-fixed bg-cover bg-center pt-24 pb-24 mb-8 ">
                <Row className='w-1200 mx-auto'>
                    <div className="w-full flex justify-center">
                        <Link to="" className="text-center block">
                            <img
                                src={bannerBigImage}
                                alt="banner big sale"
                                className="relative text-9xl italic font-semibold bg-transparent animate-aniName"
                            />
                        </Link>
                    </div>
                </Row>
            </section>
            <section className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="">
                        <div className="flex-none w-full max-w-full">
                            <h2 className="text-black text-lg ">
                                Thời trang <span className="font-semibold text-blue-cyan">Gyms</span>
                            </h2>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={width > 768 ? 4 : 2}
                            navigation
                        >
                            {maleProducts?.map((product) => (
                                <SwiperSlide key={product._id} className='relative mb-4 bg-white p-2.5 rounded-md'>
                                    <Product
                                        product={product}
                                        discount={product.discount ? true : false}
                                    // handleClickCart={() => handleClickCart(product)}
                                    // handleClickEye={() => handleClickEye(product)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </div>
            </section>
            <section className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className=''>
                        <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5">
                            <div className="mb-7">
                                <img
                                    className="border-0 max-w-full h-auto bg-transparent"
                                    src={threeBannerImages[0]}
                                    alt="banner 1"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5">
                            <div className="mb-7">
                                <img
                                    className="border-0 max-w-full h-auto bg-transparent"
                                    src={threeBannerImages[1]}
                                    alt="banner 2"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5">
                            <div className="mb-7">
                                <img
                                    className="border-0 max-w-full h-auto bg-transparent"
                                    src={threeBannerImages[2]}
                                    alt="banner 3"
                                />
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
            <section className="mb-7 md:mb-3.5">
                <div className="container w-1200 mx-auto">
                    <Row className="">
                        <div className="flex-none w-full max-w-full mb-2">
                            <h2 className="text-black text-lg">
                                Bean <span className="font-semibold text-blue-cyan">Instagram</span>
                            </h2>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={width > 768 ? 4 : 3}
                            modules={[Navigation]}
                            navigation
                        >
                            {brandImages.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <Link to="">
                                        <img
                                            src={image.path}
                                            alt={`bean instagram ${image.id}`}
                                            className="border-0 max-w-full h-auto bg-transparent"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </div>
            </section>
            {/* {showPopupQuickView && (
          <QuickViewPopup
            product={quickViewProduct}
            togglePopupQuickView={() =>
              setShowPopupQuickView((prevState) => !prevState)
            }
            addToCartSuccess={show}
            addToCartFail={error}
          />
        )}
        {!hidePopup && <div className={cx("cart-popup-backdrop")}></div>}
        {!hidePopup && (
          <AddToCartPopup
            product={cartProduct}
            togglePopup={() => setHidePopup((prevState) => !prevState)}
            addToCartSuccess={show}
            addToCartFail={error}
          />
        )} */}
        </div>
    );
}

