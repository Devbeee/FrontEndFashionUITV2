import { useEffect, useState } from 'react';
import { Button, Divider, Image, Typography, message } from 'antd';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { icons } from '@/utils';
import { IProduct, ISize, IProductDetail } from "@/interfaces"
import { useApi } from '@/hooks';
import { cartApi } from '@/apis';
import { useCartStore } from '@/stores';
import { CustomBtn, CustomInput } from '@/components'

const { Title } = Typography

type QuickViewProductProps = {
    product: IProduct,
    handleClosePopup: () => void
}

export function QuickViewProduct({ product, handleClosePopup }: QuickViewProductProps) {
    const [activedColorIndex, setActivedColorIndex] = useState<number>(-1);
    const [activedColor, setActivedColor] = useState<string>('');
    const [activedSizeIndex, setActivedSizeIndex] = useState<number>(-1);
    const [activedSize, setActivedSize] = useState<string>('');
    const [count, setCount] = useState<number>(1);
    const { loading, errorMessage, callApi: callCartApi } = useApi<void>()
    const { setQuantity } = useCartStore()
    const [mainImageUrl, setMainImageUrl] = useState<string>();
    const [outOfStock, setOutOfStock] = useState<boolean>(false);

    const handleMainImageChange = (url: string) => () => {
        setMainImageUrl(url);
    }
    const handleColorChange = (index: number, productDetail: IProductDetail) => () => {
        setActivedColorIndex(index);
        setMainImageUrl(productDetail.imgUrl);
        setActivedColor(productDetail.color);
    }
    const handleSizeChange = (index: number, size: string) => () => {
        setActivedSizeIndex(index);
        setActivedSize(size);
    };
    const handleChangeQuantity = (value: number) => {
        if (!isNaN(value) && value >= 1) {
            setCount(value);
        } else {
            setCount(1);
        }
    }

    const findProductDetailId = (): string | undefined => {
        const uniqueSizes = [...new Set(product.productDetails.map((detail: IProductDetail) => detail.size))];
        const uniqueColors = [...new Set(product.productDetails.map((detail: IProductDetail) => detail.color))];

        const selectedSize = uniqueSizes[activedSizeIndex];
        const selectedColor = uniqueColors[activedColorIndex];

        return product.productDetails.find(
            (detail: IProductDetail) => detail.size === selectedSize && detail.color === selectedColor
        )?.id;
    };
    const handleAddToCart = (quantity: number) => {
        const productDetailId = findProductDetailId()
        callCartApi(async () => {
            const { data } = await cartApi.addToCart({
                productDetailId,
                quantity
            })
            if (data) {
                message.success("Thêm sản phẩm vào giỏ thành công!")
                setQuantity(data.cartProductLength)
            }
        })
    }
    useEffect(() => {
        if (errorMessage) {
            message.error(errorMessage)
        }
    }, [errorMessage])

    useEffect(() => {
        setMainImageUrl(product.productDetails[0].imgUrl);
        const isOutOfStock = !product.productDetails.some((value) => value.stock > 0);
        setOutOfStock(isOutOfStock);
    }, []);

    return (
        <div className='flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 top-0 left-0 bottom-0 right-0 fixed overflow-auto'>
            <div className='flex flex-col w-full max-w-5xl gap-4 md:flex-row bg-white rounded-lg p-5 top-10 bottom-10'>
                <div className='flex-[10] overflow-hidden'>
                    <Image src={mainImageUrl} width={350} height={450} className='object-scale-down bg-gray-200' />
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation
                        className='w-[350px]'
                    >
                        {product.productDetails
                            .filter((item, index, self) => index === self.findIndex((t) => t.imgUrl === item.imgUrl))
                            .map((productDetail: IProductDetail) => (
                                <SwiperSlide key={productDetail.imgUrl}>
                                    <div className={`w-[80px] h-[110px] ${mainImageUrl === productDetail.imgUrl && 'border border-blue-cyan'} flex justify-center items-center object-scale-down bg-gray-200 cursor-pointer overflow-hidden hover:border hover:border-blue-cyan`}>
                                        <img onClick={handleMainImageChange(productDetail.imgUrl)} src={productDetail.imgUrl} />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                <div className='flex-[14] flex flex-col items-start gap-2'>
                    <Title level={2} className='text-left'>
                        {product.name}
                    </Title>
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <span className='text-left'>Thương hiệu: <span className='text-left text-primary'>Bean Fashion</span></span>
                        <div className='border-l border-gray-300 hidden md:block'></div>
                        <span className='text-left'>Tình trạng:  
                            {outOfStock ? (
                                <span className='text-left text-red-500'>Hết hàng</span>
                            ) : (
                                <span className='text-left text-primary'>Còn hàng</span>
                            )}
                        </span>
                    </div>
                    <div className='flex flex-row gap-2 items-end'>
                        <span className='text-left text-red-500 font-bold text-2xl'>
                            {(product.price - (product.price * product.discount) / 100).toLocaleString("de-DE")}₫
                        </span>
                        {product.discount > 0 && ( 
                          <span className='text-left text-gray-400 line-through text-base'>
                            {product.price.toLocaleString("de-DE")}₫
                          </span>
                        )}
                    </div>
                    <Divider className='border-gray-200' />
                    <div className='flex flex-col'>
                        <span className='text-left'>Màu sắc:
                            {activedColorIndex >= 0 && (
                                <span className='text-left text-primary'>
                                    {product.productDetails
                                        .filter(
                                            (item, index, self) =>
                                                index === self.findIndex((t) => t.color === item.color)
                                        )[activedColorIndex].colorName}
                                </span>
                            )}
                        </span>
                        <div className='flex flex-row items-start gap-4 mt-1'>
                            {product.productDetails
                                .filter(
                                    (item, index, self) =>
                                        index === self.findIndex((t) => t.color === item.color)
                                )
                                .map((productDetail: IProductDetail, index: number) => (
                                    <button
                                        key={productDetail.color}
                                        onClick={handleColorChange(index, productDetail)}
                                        disabled={outOfStock || (!product.productDetails.find((value) => value.color === productDetail.color && value.size === activedSize)?.stock && activedSize !== '')}
                                        className={`${outOfStock || (!product.productDetails.find((value) => value.color === productDetail.color && value.size === activedSize)?.stock && activedSize !== '') ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        <div
                                            style={{ backgroundColor: productDetail.color }}
                                            className={`w-7 h-7 border border-gray-200 rounded-full`}
                                        >
                                            {activedColorIndex === index && (
                                                <div className={`w-full h-full flex justify-end items-start`}>
                                                    <div className="w-2 h-2 bg-green-500 rounded-full border border-gray-200"></div>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-left'>Kích thước: <span className='text-left text-primary'>{[...new Set(product.productDetails.map((product: ISize) => product.size))][activedSizeIndex]}</span></span>
                        <div className='flex flex-row items-start space-x-4 mt-1'>
                            {product.productDetails
                                .filter(
                                    (item, index, self) =>
                                        index === self.findIndex((t) => t.size === item.size)
                                )
                                .map((productDetail: IProductDetail, index: number) => (
                                    <button
                                        key={productDetail.size}
                                        onClick={handleSizeChange(index, productDetail.size)}
                                        disabled={outOfStock || (!product.productDetails.find((value) => value.size === productDetail.size && value.color === activedColor)?.stock && activedColor !== '')}
                                        className={`${outOfStock || (!product.productDetails.find((value) => value.size === productDetail.size && value.color === activedColor)?.stock && activedColor !== '') ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        <div
                                            className={`w-7 h-7 ${activedSizeIndex === index
                                                ? 'bg-blue-cyan text-white'
                                                : 'bg-white text-blue-cyan'
                                                } border border-gray-200 flex justify-center items-center rounded`}
                                        >
                                            {productDetail.size}
                                        </div>
                                    </button>
                                ))}
                        </div>
                    </div>
                    {!outOfStock && (
                        activedColor && activedSize ? (
                            <div>
                                <span className='text-left text-primary'> {product.productDetails.find((value) => value.size === activedSize && value.color === activedColor)?.stock} sản phẩm có sẵn</span>
                            </div>
                        ) : (
                            <div>
                                <span className='text-left text-red-400'>Hãy chọn phân loại hàng</span>
                            </div>
                        )
                    )}
                    <div className='flex flex-col gap-4 md:flex-row mt-4'>
                        <div className='flex flex-row gap-1'>
                            <CustomBtn
                                className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg rounded-e-none !mt-0 p-2 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                                onClick={() => {
                                    handleChangeQuantity(Math.max(count - 1, 1))
                                }}
                                disabled={outOfStock || count <= 1}
                                children={icons.minus}
                            />
                            <CustomInput
                                name={product.name}
                                size='small'
                                placeholder='Nhập số lượng'
                                type='text'
                                value={count}
                                className='bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block py-2 w-full rounded-none'
                                onChange={(e) => {
                                    handleChangeQuantity(Math.min(parseInt(e.target.value, 10), (product.productDetails.find((value) => value.size === activedSize && value.color === activedColor)?.stock ?? 0)))
                                }}
                                disabled={outOfStock || !(activedColor && activedSize)}
                            />
                            <CustomBtn
                                className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg rounded-l-none !mt-0 p-2 h-8 focus:ring-gray-100 focus:ring-2 focus:outline-none'
                                onClick={() => {
                                    activedColor && activedSize &&
                                        handleChangeQuantity(
                                            count === product.productDetails.find((value) => value.size === activedSize && value.color === activedColor)?.stock ? count : count + 1
                                        )
                                }}
                                disabled={outOfStock
                                    || activedColor && activedSize && count >= (product.productDetails.find((value) => value.size === activedSize && value.color === activedColor)?.stock ?? 0)
                                    || !(activedColor && activedSize)
                                }
                                children={icons.plus}
                            />
                        </div>
                        <div className='flex flex-row gap-1'>
                            <Button
                                className='bg-blue-cyan text-white uppercase'
                                onClick={() => handleAddToCart(count)}
                                disabled={outOfStock || loading || !(activedColor && activedSize)}
                                loading={loading}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center'>
                    <button onClick={handleClosePopup} className='text-center text-4xl text-blue-cyan hover:text-primary'>{icons.close}</button>
                </div>
            </div>
        </div>
    )
}