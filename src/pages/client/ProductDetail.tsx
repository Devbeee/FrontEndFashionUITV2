import { useState, useEffect } from 'react';
import { Tabs, Button, Divider, Image, Typography, Input } from 'antd';
import type { TabsProps } from 'antd';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Product, Vouchers, ProductsList, QuickViewProduct } from "@/components";
import { icons } from '@/utils';
import { IProduct, IColor, ISize, IImage, IProductDetail } from '@/interfaces';
import { productApi } from '@/apis';
import { useApi } from '@/hooks';

const { Title } = Typography
type Product = IProduct;

export function ProductDetail() {
  const [activedColorIndex, setActivedColorIndex] = useState<number>(0);
  const [activedSizeIndex, setActivedSizeIndex] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const { callApi: callProductApi } = useApi<void>();
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
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
    if (count < 1000) {
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
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: <span className='font-bold text-blue-cyan uppercase'>Mô tả sản phẩm</span>,
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
      label: <span className='font-bold text-blue-cyan uppercase'>Chính sách đổi trả</span>,
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


  const [width, setWidth] = useState<number>(window.innerWidth);

  // const [products, setProducts] = useState<Product[]>([
  //   {
  //     id: '1',
  //     name: "Áo cotton dáng ôm free size viền cổ phối màu in họa tiết chữ",
  //     price: 123,
  //     discount: 20,
  //     sold: 2,
  //     saleCount: 2,
  //     images: [
  //       { 
  //         imgUrl: "https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-1.jpg?v=1646494601635" 
  //       },
  //       { 
  //         imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
  //       },
  //       { 
  //         imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
  //       },
  //       { 
  //         imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
  //       },
  //       { 
  //         imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" 
  //       },
  //     ],
  //     slug: "123",
  //     category: {
  //       gender: 'nam',
  //       type: '1123123'
  //     },
  //       description: "123"
  //   },
  //   {
  //       id: '2',
  //       name: "123",
  //       price: 123,
  //       discount: 20,
  //       sold: 2,
  //       saleCount: 2,
  //       images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
  //       slug: "123",
  //       category: {
  //           gender: 'nam',
  //           type: '1123123'
  //       },
  //       description: "123"
  //   },
  //   {
  //       id: '3',
  //       name: "123",
  //       price: 123,
  //       discount: 20,
  //       sold: 2,
  //       saleCount: 2,
  //       images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
  //       slug: "123",
  //       category: {
  //           gender: 'nam',
  //           type: '1123123'
  //       },
  //       description: "123"
  //   },
  //   {
  //       id: '4',
  //       name: "123",
  //       price: 123,
  //       discount: 20,
  //       sold: 2,
  //       saleCount: 2,
  //       images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
  //       slug: "123",
  //       category: {
  //           gender: 'nam',
  //           type: '1123123'
  //       },
  //       description: "123"
  //   },
  //   {
  //       id: '5',
  //       name: "123",
  //       price: 123,
  //       discount: 20,
  //       sold: 2,
  //       saleCount: 2,
  //       images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
  //       slug: "123",
  //       category: {
  //           gender: 'nam',
  //           type: '1123123'
  //       },
  //       description: "123"
  //   },
  //   {
  //       id: '6',
  //       name: "123",
  //       price: 123,
  //       discount: 20,
  //       sold: 2,
  //       saleCount: 2,
  //       images: [{ imgUrl: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg" }],
  //       slug: "123",
  //       category: {
  //           gender: 'nam',
  //           type: '1123123'
  //       },
  //       description: "123"
  //   },
  // ]);

  //Trạng thái của QuickViewPopup============
  const [quickViewProduct, setQuickViewProduct] = useState<IProduct | null>(null);
  const [showQuickView, setShowQuickView] = useState<boolean>(false);
  const handleClickEye = (product: Product) => () => {
    setQuickViewProduct(product);
    setShowQuickView(true);
  }
  const handleClosePopup = () => {
    setShowQuickView(false);
  }
  //=========================================

  const getMainProduct = async (productId: string) => {
    callProductApi(async () => {
      const { data } = await productApi.findOneProduct(productId);
      setMainProduct(data)
    })
  };
  const getRelatedProducts = async () => {
    callProductApi(async () => {
      const { data } = await productApi.findAllProducts();
      setRelatedProducts(data)
    })
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getMainProduct('822d31fb-edc4-4f83-b8a9-9fbfddf928ee');
    getRelatedProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      {/* QuickViewPopup */}
      {showQuickView && quickViewProduct && (<QuickViewProduct product={quickViewProduct} handleClosePopup={handleClosePopup} />)}
      <div className="w-full max-w-1200">
        {mainProduct ? (
          <div className='flex flex-col flex-wrap gap-6 justify-between lg:flex-row px-4 mt-5 mb-5'>
            <div className='flex-[3] flex flex-col gap-4'>
              <div className='flex flex-col gap-4 md:flex-row'>
                <div className='flex-1 overflow-hidden'>
                  <Image src={mainProduct.productDetails[selectedImageIndex].imgUrl} width={350} height={450} className='object-scale-down bg-gray-200' />
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Navigation]}
                    navigation
                    className='w-[350px]'
                  >
                    {mainProduct.productDetails.map((img: IImage, index: number) => (
                      <SwiperSlide key={img.imgUrl}>
                        <div className={`w-[80px] h-[110px] ${selectedImageIndex === index && 'border border-blue-cyan'} flex justify-center items-center object-scale-down bg-gray-200 cursor-pointer overflow-hidden hover:border hover:border-blue-cyan`}>
                          <img onClick={handleMainImageChange(index)} src={img.imgUrl} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className='flex-1 flex flex-col items-start gap-2'>
                  <Title level={2} className='text-left'>
                    {mainProduct.name}
                  </Title>
                  <span>Mã:  <span className='text-left text-primary'>BEANFS4001</span></span>
                  <div className='flex flex-col gap-3 md:flex-row'>
                    <span className='text-left'>Thương hiệu: <span className='text-left text-primary'>Bean Fashion</span></span>
                    <div className='border-l border-gray-300 hidden md:block'></div>
                    <span className='text-left'>Tình trạng:  <span className='text-left text-primary'>Còn hàng</span></span>
                  </div>
                  <div className='flex flex-row gap-2 items-end'>
                    <span className='text-left text-red-500 font-bold text-2xl'>
                      {((mainProduct.price - (mainProduct.price * mainProduct.discount) / 100) * 1000).toLocaleString("de-DE")}₫
                    </span>
                    <span className='text-left text-gray-400 line-through text-base'>
                      {(mainProduct.price * 1000).toLocaleString("de-DE")}₫
                    </span>
                  </div>
                  <Divider className='border-gray-200 my-2' />
                  <p className='text-left'>
                    Cotton co dãn tốt, thấm hút mồ hôi hiệu quả, thoáng mát.
                    Thiết kế trẻ trung, năng động kết hợp với các loại quần jeans, quần âu, chân váy xếp ly, chân váy midi,..
                  </p>
                  <div className='flex flex-col'>
                    <span className='text-left'>Màu sắc:
                      <span className='text-left text-primary'>
                        {mainProduct.productDetails
                          .filter(
                            (item, index, self) =>
                              index === self.findIndex((t) => t.color === item.color)
                          )[activedColorIndex].colorName}
                      </span>
                    </span>
                    <div className='flex flex-row items-start gap-4 mt-1'>
                      {mainProduct.productDetails
                        .filter(
                          (item, index, self) =>
                            index === self.findIndex((t) => t.color === item.color)
                        )
                        .map((productDetail : IProductDetail, index: number) => (
                          <button
                            key={productDetail.color}
                            onClick={handleColorChange(index)}
                          >
                            <div
                              style={{ backgroundColor: productDetail.color }}
                              className={`w-7 h-7 border border-gray-200 rounded-full flex justify-end items-start`}
                            >
                              {activedColorIndex === index && (
                                <div className="w-2 h-2 bg-green-500 rounded-full border border-gray-200"></div>
                              )}
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-left'>Kích thước: <span className='text-left text-primary'>{[...new Set(mainProduct.productDetails.map((product: ISize) => product.size))][activedSizeIndex]}</span></span>
                    <div className='flex flex-row items-start space-x-4 mt-1'>
                      {[...new Set(mainProduct.productDetails.map((product: ISize) => product.size))].map((size: string, index: number) => (
                        <button
                          key={size}
                          onClick={handleSizeChange(index)}
                        >
                          <div
                            className={`w-7 h-7 ${activedSizeIndex === index
                              ? 'bg-blue-cyan text-white'
                              : 'bg-white text-blue-cyan'
                              } border border-gray-200 flex justify-center items-center rounded`}
                          >
                            {size}
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
                  {relatedProducts ? (
                    relatedProducts?.map((product: Product) => (
                      <SwiperSlide
                        key={product.id}
                        className="relative mb-3.5 bg-white p-2.5 rounded"
                      >
                        <Product
                          product={product}
                          handleClickEye={handleClickEye(product)}
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
                <ProductsList title='Có thể bạn thích' products={relatedProducts} />
                <ProductsList title='Sản phẩm đã xem' products={relatedProducts} />
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center bg-gray-50 m-7 p-4 w-full'>
            <span className="text-2xl font-bold text-gray-500">Không tìm thấy sản phẩm</span>
          </div>
        )}
      </div>
    </div>
  );
}