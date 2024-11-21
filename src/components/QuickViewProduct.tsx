import { useState } from 'react';
import { Button, Divider, Image, Typography, Input } from 'antd';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { icons } from '@/utils';
import { IProduct, IColor, ISize, IImage } from "@/interfaces"

const { Title } = Typography

type QuickViewProductProps = {
    product: IProduct,
    handleClosePopup: () => void
}


export function QuickViewProduct({ product, handleClosePopup }: QuickViewProductProps) {
    const [activedColorIndex, setActivedColorIndex] = useState<number>(0);
    const [activedSizeIndex, setActivedSizeIndex] = useState<number>(0);
    const [count, setCount] = useState<number>(1);
    const handleColorChange = (index: number) => () => {
        setActivedColorIndex(index);
    }
    const handleSizeChange = (index: number) => () => {
        setActivedSizeIndex(index);
    };
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleIncrease = () => {
        if (count < 100) {
            setCount(count + 1)
        }
    }
    const handleInputChange = (newCount: string) => {
        let value = parseInt(newCount, 10);
        if (!isNaN(value) && value >= 1) {
            setCount(value);
        } else {
            setCount(1);
        }
    };
    const sizeOptions: ISize[] = [
        { size: 'M' },
        { size: 'L' },
        { size: 'XL' },
    ];
    const colorOptions: IColor[] = [
        { colorName: 'Đen', colorHex: '#000000' },
        { colorName: 'Trắng', colorHex: '#ffffff' },
        { colorName: 'Xám', colorHex: '#9ca3af' },
    ]

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const handleMainImageChange = (index: number) => () => {
        setSelectedImageIndex(index);
    }
    return (
        <div className='flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 top-0 left-0 bottom-0 right-0 fixed overflow-auto'>
            <div className='flex flex-col w-full max-w-5xl gap-4 md:flex-row bg-white rounded-lg p-1 top-10 bottom-10'>
                        <div className='flex-[10] overflow-hidden'>
                            <Image src={product.images[selectedImageIndex].imgUrl} width={350} height={450} className='object-scale-down bg-gray-200' />
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                modules={[Navigation]}
                                navigation
                                className='w-[350px]'
                            >
                                {product.images.map((img: IImage, index: number) => (
                                    <SwiperSlide key={img.imgUrl}>
                                        <div className={`w-[80px] h-[110px] ${selectedImageIndex === index && 'border border-blue-cyan'} flex justify-center items-center object-scale-down bg-gray-200 cursor-pointer overflow-hidden hover:border hover:border-blue-cyan`}>
                                            <img onClick={handleMainImageChange(index)} src={img.imgUrl} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='flex-[14] flex flex-col items-start gap-2'>
                            <Title level={2} className='text-left'>
                                {product.name}
                            </Title>
                            <span>Mã:  <span className='text-left text-primary'>BEANFS4001</span></span>
                            <div className='flex flex-col gap-3 md:flex-row'>
                                <span className='text-left'>Thương hiệu: <span className='text-left text-primary'>Bean Fashion</span></span>
                                <div className='border-l border-gray-300 hidden md:block'></div>
                                <span className='text-left'>Tình trạng:  <span className='text-left text-primary'>Còn hàng</span></span>
                            </div>
                            <div className='flex flex-row gap-2 items-end'>
                                <span className='text-left text-red-500 font-bold text-2xl'>
                                    {((product?.price - (product?.price * product?.discount) / 100) * 1000).toLocaleString("de-DE")}₫
                                </span>
                                <span className='text-left text-gray-400 line-through text-base'>
                                    {(product?.price * 1000).toLocaleString("de-DE")}₫
                                </span>
                            </div>
                            <Divider className='border-gray-200' />
                            <p className='text-left'>
                                Cotton co dãn tốt, thấm hút mồ hôi hiệu quả, thoáng mát.
                                Thiết kế trẻ trung, năng động kết hợp với các loại quần jeans, quần âu, chân váy xếp ly, chân váy midi,..
                            </p>
                            <div className='flex flex-col'>
                                <span className='text-left'>Màu sắc: <span className='text-left text-primary'>{colorOptions[activedColorIndex].colorName}</span></span>
                                <div className='flex flex-row items-start gap-4 mt-1'>
                                    {colorOptions.map((color: IColor, index : number) =>
                                        <button key={color.colorHex} onClick={handleColorChange(index)}>
                                            <div style={{ backgroundColor: color.colorHex }} className={`w-7 h-7 border border-gray-200 rounded-full flex justify-end items-start`}>
                                                {
                                                    activedColorIndex == index &&
                                                    (<div className='w-2 h-2 bg-green-500 rounded-full border border-gray-200'></div>)
                                                }
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-left'>Kích thước: <span className='text-left text-primary'>{sizeOptions[activedSizeIndex].size}</span></span>
                                <div className='flex flex-row items-start space-x-4 mt-1'>
                                    {sizeOptions.map((size: ISize, index : number) => (
                                        <button key={size.size} onClick={handleSizeChange(index)}>
                                            <div className={`w-7 h-7 ${activedSizeIndex === index ? 'bg-blue-cyan text-white' : 'bg-white text-blue-cyan'} border border-gray-200 flex justify-center items-center rounded`}>
                                                {size.size}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 md:flex-row mt-4'>
                                <div className='flex flex-row gap-1'>
                                    <Button shape="circle" onClick={handleDecrease} className='bg-blue-cyan text-white font-bold text-xl flex items-end justify-center'>-</Button>
                                    <Input placeholder="" value={count} onChange={(e) => handleInputChange(e.target.value)} className='w-20 border border-blue-cyan text-center' />
                                    <Button shape="circle" onClick={handleIncrease} className='bg-blue-cyan text-white font-bold text-xl flex items-end justify-center'>+</Button>
                                </div>
                                <div className='flex flex-row gap-1'>
                                    <Button className='bg-blue-cyan text-white uppercase'>Thêm vào giỏ hàng</Button>
                                    <Button className='bg-blue-cyan text-white uppercase text-xl w-fit'>{icons.heart}</Button>
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