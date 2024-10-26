import { useState, useEffect } from 'react';
import { Tabs, Button, Divider, Image, Radio, Typography, Input, RadioChangeEvent } from 'antd';
import type { TabsProps } from 'antd';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Product, Vouchers, ProductsList, QuickViewInfoPopUp } from "@/components";
import { icons } from '@/utils';
import { IProduct } from '@/interfaces';

const { Title } = Typography
type Product = IProduct;
type Image = {
  imgUrl: string
}
type ColorOption = {
  label: string,
  color: string
}

export function ProductDetail() {
  const [activedColor, setActivedColor] = useState(0);
  const [activedSize, setActivedSize] = useState(0);
  const [count, setCount] = useState(1);
  const handleColorChange = (index : number) => {
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
  const colorOptions : ColorOption[] = [
    { label: 'Đen', color: '#000000' },
    { label: 'Trắng', color: '#ffffff' },
    { label: 'Xám', color: '#9ca3af' },
  ]
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: <p className='font-bold text-blue-cyan uppercase'>Mô tả sản phẩm</p>,
      children: (
        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='text-left'>- Được dệt từ sợi bông cao cấp</p>
          <p className='text-left'>- Loại sợi được sản xuất từ công nghệ kéo sợi Cotton tiên tiến nhất hiện nay</p>
          <p className='text-left'>+ Sợi Cotton Compact khắc phục được hạn chế xù lông của sợi thông thường giúp cho bề mặt vải mềm mịn và độ bền tăng cao</p>
          <p className='text-left'>+ Sợi ít bị mài mòn trong quá trình sử dụng, hạn chế tối đa hiện tượng xù lông</p>
          <p className='text-left'>+ Thấm hút mồ hôi cực tốt, thoáng mát rất thích hợp với thời tiết nóng ẩm của Việt Nam.</p>
          <p className='text-left flex flex-wrap'>
            <img data-thumb="original" original-height="480" original-width="370" src="//bizweb.dktcdn.net/100/423/358/products/ao-cotton-dang-om-free-size-vien-co-phoi-mau-in-hoa-tiet-chu-1b.jpg?v=1648384254460" />
            <img data-thumb="original" src="//bizweb.dktcdn.net/100/423/358/products/ao-cotton-dang-om-free-size-vien-co-phoi-mau-in-hoa-tiet-chu-1a.jpg?v=1648384253973" />
            <img data-thumb="original" original-height="480" original-width="370" src="//bizweb.dktcdn.net/100/423/358/products/ao-cotton-dang-om-free-size-vien-co-phoi-mau-in-hoa-tiet-chu-2a.jpg?v=1648384255420" />
            <img data-thumb="original" original-height="480" original-width="370" src="//bizweb.dktcdn.net/100/423/358/products/ao-cotton-dang-om-free-size-vien-co-phoi-mau-in-hoa-tiet-chu-2b.jpg?v=1648384256027" /></p>
        </div>
      ),
    },
    {
      key: '2',
      label: <p className='font-bold text-blue-cyan uppercase'>Chính sách đổi trả</p>,
      children: (
        <div className='flex flex-col justify-start items-start'>
          <p className='text-left'>+ Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện</p>
          <p className='text-left'>+ Nằm trong chính sách đổi trả sản phẩm của Bean</p>
          <p className='text-left'>+ Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa giặt là</p>
          <p className='text-left'>+ Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng</p>
          <p className='text-left'>+ Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí </p>
          <p className='text-left'><b>Điều kiện đổi trả hàng</b></p>
          <p className='text-left'>Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng.</p>
          <p className='text-left'><b>Điều kiện đổi trả hàng:</b></p>
          <p className='text-left'>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</p>
          <p className='text-left'>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</p>
          <p className='text-left'>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</p>
          <p className='text-left'>- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng.	</p>
        </div>
      ),
    }
  ];

  
  const [width, setWidth] = useState(window.innerWidth);

  //Example data
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
      price: 123,
      discount: 20,
      sold: 2,
      saleCount: 2,
      images: [
        { 
          imgUrl: "https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-1.jpg?v=1646494601635" 
        },
        { 
          imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
        },
        { 
          imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
        },
        { 
          imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
        },
        { 
          imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
        },
      ],
      slug: "123",
      category: {
        sex: 'nam',
        categoryDetail: '1123123'
      }
    },
    {
      id: 2,
      name: "AÁo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
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
      id: 3,
      name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
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
      id: 4,
      name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
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
      id: 5,
      name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
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
      id: 6,
      name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
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

  const [selectedImage, setSelectedImage] = useState(0);
  const handleMainImageChange = (index : number) => {
    setSelectedImage(index);
  }

  //Trạng thái của QuickViewPopup============
  const [quickViewProduct, setQuickViewProduct] = useState<IProduct | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const handleClickEye = (product : Product) => {
    setQuickViewProduct(product);
    setShowQuickView(true);
  }
  const handleClosePopup = () => {
    setShowQuickView(false);
  }
  //=========================================

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      {/* QuickViewPopup */}
      {showQuickView && quickViewProduct && (<QuickViewInfoPopUp product={quickViewProduct} handleClosePopup={handleClosePopup} />)}
      <div className="flex flex-col flex-wrap gap-6 justify-between w-full max-w-1200 px-4 mt-5 mb-5 lg:flex-row">
        <div className='flex-[3] flex flex-col gap-4'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex-1 overflow-hidden'>
              <Image src={products[0].images[selectedImage].imgUrl} width={350} height={450} className='object-scale-down bg-gray-200' />
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                modules={[Navigation]}
                navigation
                className='w-[25rem]'
              >
                {products[0].images.map((img: Image, index : number) => (
                  <SwiperSlide key={index}>
                  <div style={selectedImage == index ? {borderWidth: '1px', borderColor: 'gray'} : {}} className='w-[90px] h-[115px] flex justify-center items-center object-scale-down bg-gray-200 cursor-pointer overflow-hidden hover:border hover:border-gray-500'>
                    <img onClick={() => handleMainImageChange(index)} src={img.imgUrl} />
                  </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='flex-1 flex flex-col items-start gap-2'>
              <Title level={2} className='text-left'>
                {products[0].name}
              </Title>
              <p>Mã:  <span className='text-left text-primary'>BEANFS4001</span></p>
              <div className='flex flex-col gap-3 md:flex-row'>
                <p className='text-left'>Thương hiệu: <span className='text-left text-primary'>Bean Fashion</span></p>
                <div className='border-l border-gray-300 hidden md:block'></div>
                <p className='text-left'>Tình trạng:  <span className='text-left text-primary'>Còn hàng</span></p>
              </div>
              <div className='flex flex-row gap-2 items-end'>
                <span className='text-left text-red-500 font-bold text-2xl'>
                  {((products[0]?.price - (products[0]?.price * products[0]?.discount) / 100) * 1000).toLocaleString("de-DE")}₫
                </span>
                <span className='text-left text-gray-400 line-through text-base'>
                  {(products[0]?.price * 1000).toLocaleString("de-DE")}₫
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
                  {colorOptions.map((e : ColorOption, index : number) => 
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
                    value= {sizeOptions[activedSize].value}
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
          </div>
          <div>
            <Tabs defaultActiveKey="1" items={tabItems} />
          </div>
          <div className='flex flex-col overflow-hidden mt-8'>
            <Title level={2} className='uppercase !text-blue-cyan !font-bold'>Sản phẩm liên quan</Title>
            <Divider className='bg-gray-300 rounded-md border-none h-0.5 -mt-2' />
            <Swiper
              spaceBetween={10}
              slidesPerView={width > 768 ? 4 : width > 639 ? 2 : 1}
              modules={[Navigation]}
              navigation
              className='w-52 lg:w-[55rem] md:w-[40rem] sm:w-[35rem]'
            >
              {products ? (
                products?.map((product: Product) => (
                  <SwiperSlide
                    key={product.id}
                    className="relative mb-3.5 bg-white p-2.5 rounded"
                  >
                    <Product
                      product={product}
                    handleClickEye={() => handleClickEye(product)}
                    // handleClickCart={() => handleClickCart(product)}       
                    />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          </div>
        </div>
        <div className='flex-[1] flex flex-col gap-4 justify-center md:justify-start'>
          <Vouchers />
          <div className='flex justify-center flex-col xl:flex-col lg:flex-row md:flex-row sm:flex-col'>
            <ProductsList title='Có thể bạn thích' products={products} />
            <ProductsList title='Sản phẩm đã xem' products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}