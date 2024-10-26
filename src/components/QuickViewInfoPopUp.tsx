import { useState } from 'react';
import { Button, Divider, Image, Radio, Typography, Input, RadioChangeEvent } from 'antd';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { icons } from '@/utils';
import { IProduct } from "@/interfaces"

const { Title } = Typography
type Image = {
    imgUrl: string
}
type ColorOption = {
    label: string,
    color: string
}
type QuickViewInfoPopUp = {
    product: IProduct,
    handleClosePopup: () => void
}


export function QuickViewInfoPopUp({ product, handleClosePopup }: QuickViewInfoPopUp) {
    const [activedColor, setActivedColor] = useState(0);
    const [activedSize, setActivedSize] = useState(0);
    const [count, setCount] = useState(1);
    const handleColorChange = (index: number) => {
        setActivedColor(index);
    }
    const handleSizeChange = (e: RadioChangeEvent) => {
        const selectedSize = e.target.value;
        const selectedIndex = sizeOptions.findIndex(option => option.value === selectedSize);
        setActivedSize(selectedIndex);
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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setCount(value); // Cập nhật giá trị nếu lớn hơn hoặc bằng 1
        } else {
            setCount(1); // Đặt giá trị về 1 nếu giá trị nhập nhỏ hơn 1
        }
    };
    const sizeOptions = [
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
    ];
    const colorOptions: ColorOption[] = [
        { label: 'Đen', color: '#000000' },
        { label: 'Trắng', color: '#ffffff' },
        { label: 'Xám', color: '#9ca3af' },
    ]

    const [selectedImage, setSelectedImage] = useState(0);
    const handleMainImageChange = (index: number) => {
        setSelectedImage(index);
    }
    return (
        <div className='flex justify-center items-center bg-gray-900 bg-opacity-50 z-[999] top-0 left-0 bottom-0 right-0 fixed overflow-auto'>
            <div className='flex flex-col w-full max-w-1200 gap-4 md:flex-row bg-white rounded-lg p-10'>
                <div className='flex-1 overflow-hidden'>
                    <Image src={product.images[selectedImage].imgUrl} width={350} height={450} className='object-scale-down bg-gray-200' />
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation
                        className='w-[25rem]'
                    >
                        {product.images.map((img: Image, index: number) => (
                            <SwiperSlide key={index}>
                                <div style={selectedImage == index ? { borderWidth: '1px', borderColor: 'gray' } : {}} className='w-[90px] h-[115px] flex justify-center items-center object-scale-down bg-gray-200 cursor-pointer overflow-hidden hover:border hover:border-gray-500'>
                                    <img onClick={() => handleMainImageChange(index)} src={img.imgUrl} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='flex-1 flex flex-col items-start gap-2'>
                    <Title level={2} className='text-left'>
                        {product.name}
                    </Title>
                    <p>Mã:  <span className='text-left text-primary'>BEANFS4001</span></p>
                    <div className='flex flex-col gap-3 md:flex-row'>
                        <p className='text-left'>Thương hiệu: <span className='text-left text-primary'>Bean Fashion</span></p>
                        <div className='border-l border-gray-300 hidden md:block'></div>
                        <p className='text-left'>Tình trạng:  <span className='text-left text-primary'>Còn hàng</span></p>
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
                    <div className=''>
                        <p className='text-left'>Màu sắc: <span className='text-left text-primary'>{colorOptions[activedColor].label}</span></p>
                        <div className='flex flex-row items-start gap-4 mt-1'>
                            {colorOptions.map((e: ColorOption, index: number) =>
                                <button key={index} onClick={() => handleColorChange(index)}>
                                    <div style={{ backgroundColor: e.color }} className='w-6 h-6 border border-gray-200 rounded-full flex justify-end items-start'>
                                        {
                                            activedColor == index &&
                                                (<div className='w-2 h-2 bg-green-500 rounded-full border border-gray-200'></div>)
                                        }
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-left'>Kích thước: <span className='text-left text-primary'>{sizeOptions[activedSize].label}</span></p>
                        <div className='flex flex-row items-start space-x-4 mt-1'>
                            <Radio.Group
                                block
                                options={sizeOptions}
                                value={sizeOptions[activedSize].value}
                                optionType="button"
                                buttonStyle="solid"
                                className='space-x-4 custom-radio-group'
                                onChange={handleSizeChange}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row mt-4'>
                        <div className='flex flex-row gap-1'>
                            <Button shape="circle" onClick={() => handleDecrease()} className='bg-blue-cyan text-white font-bold text-xl flex items-end justify-center'>-</Button>
                            <Input placeholder="" value={count} onChange={handleInputChange} className='w-20 border border-blue-cyan text-center' />
                            <Button shape="circle" onClick={() => handleIncrease()} className='bg-blue-cyan text-white font-bold text-xl flex items-end justify-center'>+</Button>
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