import { useEffect, useState } from 'react'
import { Carousel, Row } from 'antd'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'swiper/css'
import 'swiper/css/navigation'
import 'react-tabs/style/react-tabs.css'

import { Product, CountdownTimer, QuickViewProduct } from '@/components'
import { useApi } from '@/hooks'
import { productApi } from '@/apis'
import { icons } from '@/utils'
import { IProduct, IProductComp } from '@/interfaces'

type Product = IProductComp

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
  'src/assets/images/img_banner_1.webp',
  'src/assets/images/img_banner_2.webp',
  'src/assets/images/img_banner_3.webp',
  'src/assets/images/img_banner_4.webp'
]

const tabImages = [
  'src/assets/images/img_banner_tab.webp',
  'src/assets/images/tab-nam.webp',
  'src/assets/images/tab-nu.webp',
  'src/assets/images/tab-gym.webp'
]

const bannerBigImage = 'src/assets/images/img_banner_big.webp'

const threeBannerImages = [
  'src/assets/images/img_3banner_1.webp',
  'src/assets/images/img_3banner_2.webp',
  'src/assets/images/img_3banner_3.webp'
]

const brandImages = [
  {
    id: 1,
    path: 'src/assets/images/img_brand_1.webp'
  },
  {
    id: 2,
    path: 'src/assets/images/img_brand_2.webp'
  },
  {
    id: 3,
    path: 'src/assets/images/img_brand_3.webp'
  },
  {
    id: 4,
    path: 'src/assets/images/img_brand_4.webp'
  },
  {
    id: 5,
    path: 'src/assets/images/img_brand_5.webp'
  },
  {
    id: 6,
    path: 'src/assets/images/img_brand_6.webp'
  }
]

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  vertical: false,
  draggable: true
}

export function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [tabProductIndex, setProductTabIndex] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([])
  const [saleProductsInTabIndex, setSaleProductsInTabIndex] = useState<Product[][]>([])
  const currentTime = new Date()
  const [status, setStatus] = useState<boolean[]>([false, false, false, false])
  const [width, setWidth] = useState(window.innerWidth)
  const { callApi: callProductApi } = useApi<void>()

  const [quickViewProduct, setQuickViewProduct] = useState<IProduct | null>(null)
  const [showQuickView, setShowQuickView] = useState<boolean>(false)
  const handleClickEye = (product: Product) => () => {
    setQuickViewProduct(product)
    setShowQuickView(true)
  }
  const handleClosePopup = () => {
    setShowQuickView(false)
  }
  const getProducts = async () => {
    callProductApi(async () => {
      const { data } = await productApi.findAllProducts()
      setProducts(data)
    })
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    const hours = currentTime.getHours()
    const tabIndex = Math.floor(hours / 6)
    const newStatus = Array(4)
      .fill(false)
      .map((_, index) => index <= tabIndex)

    setTabIndex(tabIndex)
    setStatus(newStatus)
  }, [])
  return (
    <div className=''>
      {showQuickView && quickViewProduct && (
        <QuickViewProduct product={quickViewProduct} handleClosePopup={handleClosePopup} />
      )}
      <div className='relative w-full min-h-full mb-4'>
        <div className=''>
          <div className=''>
            <Carousel {...settings}>
              <div className=''>
                <img className='w-full h-full' src={sliderImages[0]} draggable={false} alt='slider' />
              </div>
              <div className='w-full h-full'>
                <img src={sliderImages[1]} draggable={false} alt='slider' />
              </div>
              <div className='w-full h-full'>
                <img src={sliderImages[2]} draggable={false} alt='slider' />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className='flex justify-center'>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-1'>
              <div className='text-center shadow-md pt-2 pb-1 rounded md:min-h-24 md:mb-1 lg:min-h-16 last:border-r-0'>
                <div className='mb-1 lg:inline-block lg:mb-0'>
                  <img className='max-w-9 bg-transparent' src={serviceImages[0]} alt='delivery' />
                </div>
                <div className='inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md'>
                  Vận chuyển <span className='font-semibold'>Miễn phí</span> <br />
                  Trong khu vực <span className='font-semibold'>TP.HCM</span>
                </div>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-1'>
              <div className='text-center shadow-md pt-2 pb-1 rounded md:min-h-24 md:mb-1 lg:min-h-16 last:border-r-0'>
                <div className='mb-1 lg:inline-block lg:mb-0'>
                  <img className='max-w-9 bg-transparent' src={serviceImages[1]} alt='exchange' />
                </div>
                <div className=' inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md'>
                  Đổi trả <span className='font-semibold'>Miễn phí</span> <br />
                  Trong vòng <span className='font-semibold'>30 ngày</span>
                </div>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-1'>
              <div className='text-center shadow-md pt-2 pb-1 rounded md:min-h-24 md:mb-1 lg:min-h-16 last:border-r-0'>
                <div className='mb-1 lg:inline-block lg:mb-0'>
                  <img className='max-w-9 bg-transparent' src={serviceImages[2]} alt='payment' />
                </div>
                <div className=' inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md'>
                  Tiến hành <span className='font-semibold'>Thanh toán</span> <br />
                  Với nhiều <span className='font-semibold'>Phương thức</span>
                </div>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-1'>
              <div className='text-center shadow-md pt-2 pb-1 rounded md:min-h-24 md:mb-1 lg:min-h-16 last:border-r-0'>
                <div className='mb-1 lg:inline-block lg:mb-0'>
                  <img className='max-w-9 bg-transparent' src={serviceImages[3]} alt='refund' />
                </div>
                <div className='inline-block text-center font-normal mb-0 mt-0 text-blue-cyan lg:text-left lg:ml-2 md:text-md'>
                  <span className='font-semibold'>100% hoàn tiền</span> <br />
                  Nếu sản phẩm <span className='font-semibold'>Lỗi</span>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className='flex justify-content-center'>
            <div className='lg:w-full md:w-full sm:w-full w-full'>
              <div className='relative mb-9 md:text-left md:mb-1'>
                <h2 className='text-black text-center text-lg'>
                  Top <span className='font-semibold text-blue-cyan'>Bán Chạy</span>
                </h2>
              </div>
              <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} modules={[Navigation]} navigation>
                {products.length &&
                  products?.map((product: Product) => (
                    <SwiperSlide key={product.id} className='relative mb-3.5 bg-white p-2.5 rounded'>
                      <Product product={product} handleClickEye={handleClickEye(product)} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </Row>
        </div>
      </div>
      <section className='mb-7 md:mb-3.5' id='index-flash-sale'>
        <div className='container w-1200 mx-auto'>
          <div className='rounded border border-gray-300 pb-0 bg-amber-500 relative'>
            <div className='clearfix'>
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='block'>
                  <TabList className='flex h-16 items-center justify-center rounded-t w-full text-center'>
                    {[0, 1, 2, 3].map((index) => (
                      <Tab
                        key={index}
                        className={`relative p-1 font-semibold h-16 rounded-t-lg flex-1 cursor-pointer mr-0  ${tabIndex === index ? 'bg-red-800 text-white border-none outline-none' : 'text-slate-800 bg-white border-r border-gray-600'}`}
                      >
                        <div className='m-0 p-0 border-none rounded-none border border-transparent opacity-100 bg-transparent text-inherit font-bold text-xl overflow-hidden inline-block line-clamp-1 transition-colors duration-300 ease-linear'>
                          {index === 0 && '00:00 - 06:00'}
                          {index === 1 && '06:00 - 12:00'}
                          {index === 2 && '12:00 - 18:00'}
                          {index === 3 && '18:00 - 24:00'}
                        </div>
                        <div className='m-0 p-0 border-none rounded-none border border-transparent opacity-100 bg-transparent text-inherit font-medium text-sm overflow-hidden block line-clamp-1 transition-colors duration-300 ease-linear'>
                          {(index === 0 && currentTime.getHours() >= 0 && currentTime.getHours() < 6) ||
                          (index === 1 && currentTime.getHours() >= 6 && currentTime.getHours() < 12) ||
                          (index === 2 && currentTime.getHours() >= 12 && currentTime.getHours() < 18) ||
                          (index === 3 && currentTime.getHours() >= 18 && currentTime.getHours() < 24)
                            ? 'Đang diễn ra'
                            : status[index]
                              ? 'Đã diễn ra'
                              : 'Sắp diễn ra'}
                        </div>
                      </Tab>
                    ))}
                    <CountdownTimer />
                  </TabList>
                </div>

                {[0, 1, 2, 3].map((index) => (
                  <TabPanel key={index}>
                    <div className='p-5'>
                      <div
                        className={` overflow-hidden ${tabIndex === index ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}
                      >
                        <div className='block'>
                          {saleProductsInTabIndex &&
                            (saleProductsInTabIndex[index]?.length > 0 ? (
                              <Swiper
                                spaceBetween={10}
                                slidesPerView={width > 768 ? 5 : 2}
                                modules={[Navigation]}
                                navigation
                              >
                                {saleProductsInTabIndex[index].map((product, productIndex) => (
                                  <SwiperSlide key={productIndex} className='relative mb-3 bg-white p-2.5 rounded-lg'>
                                    <Product product={product} />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            ) : (
                              <div className='flex flex-col justify-center items-center h-96'>
                                <span className='text-7xl text-white block'>{icons.info.white}</span>
                                <span className='text-white text-xl mt-5'>
                                  Không có sản phẩm nào được giảm giá vào khung giờ này
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className='flex justify-content-center'>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-2'>
              <div className='bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-white before:-skew-y-12  before:-translate-y-2/4'>
                <img
                  className='max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out'
                  src={categoryImages[0]}
                  alt='Men'
                />
                <div className='absolute inset-0 box-border transition-all duration-300 ease-in-out'>
                  <p className='bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out -translate-y-2/4'>
                    Men's
                  </p>
                </div>
                <Link to='/products?keyword=nam' className='absolute inset-0 cursor-pointer'></Link>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-2'>
              <div className='bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-white before:-skew-y-12  before:-translate-y-2/4'>
                <img
                  className='max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out'
                  src={categoryImages[1]}
                  alt='Women'
                />
                <div className='absolute inset-0 box-border transition-all duration-300 ease-in-out'>
                  <p className='bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out -translate-y-2/4'>
                    Women's
                  </p>
                </div>
                <Link to='/products?keyword=nam' className='absolute inset-0 cursor-pointer'></Link>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-2'>
              <div className='bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-white before:-skew-y-12  before:-translate-y-2/4'>
                <img
                  className='max-w-full scale-[1.1] group-hover:opacity-30 group-hover:scale-100 box-border transition-all duration-300 ease-in-out'
                  src={categoryImages[2]}
                  alt='Kids'
                />
                <div className='absolute inset-0 box-border transition-all duration-300 ease-in-out'>
                  <p className='bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out -translate-y-2/4'>
                    Kid's
                  </p>
                </div>
                <Link to='/products?keyword=nam' className='absolute inset-0 cursor-pointer'></Link>
              </div>
            </div>
            <div className='lg:w-3/12 md:w-3/12 sm:w-6/12 w-6/12 px-2'>
              <div className='bg-blue-cyan relative overflow-hidden w-full text-white text-center drop-shadow-md group before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-white before:-skew-y-12  before:-translate-y-2/4'>
                <img
                  className='max-w-full scale-[1.1] group-hover:opacity-30 group-hover:bg-white group-hover:scale-100 box-border transition-all duration-300 ease-in-out'
                  src={categoryImages[3]}
                  alt='Gym'
                />
                <div className='absolute inset-0 box-border transition-all duration-300 ease-in-out'>
                  <p className='bg-blue-cyan absolute top-1/2 left-10 right-10 -skew-y-12 p-1.5 m-0 uppercase font-normal text-2xl mb-0 box-border transition-all duration-300 ease-in-out -translate-y-2/4'>
                    Gym's
                  </p>
                </div>
                <Link to='/products?keyword=nam' className='absolute inset-0 cursor-pointer'></Link>
              </div>
            </div>
          </Row>
        </div>
      </section>
      <section className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className=''>
            <div className='flex-none w-full max-w-full'>
              <h2 className='text-lg text-black '>
                Thời trang <span className='font-semibold text-blue-cyan'>Xu Hướng</span>
              </h2>
            </div>
            <div className='flex'>
              <div className='lg:flex-none lg:w-1/4 lg:max-w-1/4 block'>
                <div className='relative overflow-hidden block'>
                  <div className=''>
                    <img className='border-0 max-w-full h-auto bg-transparent' src={tabImages[0]} alt='banner tab' />
                  </div>
                </div>
              </div>
              <div className='flex-none w-3/4 max-w-3/4 px-2.5'>
                <Tabs selectedIndex={tabProductIndex} onSelect={(index) => setProductTabIndex(index)}>
                  <TabPanel>
                    <div className='p-0 m-2.5'>
                      <div
                        className={`${tabProductIndex === 0 ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}
                      >
                        <div className='block'>
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={width > 768 ? 4 : 2}
                            modules={[Navigation]}
                            navigation
                          >
                            {products.length &&
                              products?.map((product) => (
                                <SwiperSlide
                                  key={product.id}
                                  className='relative mb-3 bg-white p-2.5 rounded-lg !w-1/4'
                                >
                                  <Product product={product} />
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='p-0 m-2.5'>
                      <div
                        className={`${tabProductIndex === 1 ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}
                      >
                        <div className='block'>
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={width > 768 ? 4 : 2}
                            modules={[Navigation]}
                            navigation
                          >
                            {products.length &&
                              products?.map((product) => (
                                <SwiperSlide
                                  key={product.id}
                                  className='relative mb-3 bg-white p-2.5 rounded-lg !w-1/4'
                                >
                                  <Product product={product} />
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='p-0 m-2.5'>
                      <div
                        className={`${tabProductIndex === 2 ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}
                      >
                        <div className='block'>
                          <Swiper
                            spaceBetween={0}
                            slidesPerView={width > 768 ? 4 : 2}
                            modules={[Navigation]}
                            navigation
                          >
                            {products.length &&
                              products?.map((product) => (
                                <SwiperSlide
                                  key={product.id}
                                  className='relative mb-3 bg-white p-2.5 rounded-lg !w-1/4'
                                >
                                  <Product product={product} />
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabList className='flex justify-between items-center m-0 border-b-0 border-t-2 border-t-blue-cyan pt-6'>
                    <Tab
                      className={`flex items-center text-base cursor-pointer font-semibold relative w-1/3 mb-0 ${tabProductIndex === 0 ? 'text-blue-cyan before:absolute before:w-4 before:h-4 before:left-3 before:-top-8 before:rotate-45 before:border before:border-blue-cyan before:border-t-0 before:border-l-0 before:bg-white' : 'text-black'}`}
                    >
                      <div
                        className={`float-left mb-0 rounded-full w-10 h-10 p-0.5 mr-2.5 border-solid border transition-all duration-300 ${tabProductIndex === 0 ? 'border-blue-cyan' : 'border-gray-500'}`}
                      >
                        <img className='border-0 max-w-full h-auto bg-transparent' src={tabImages[1]} alt='tab nam' />
                      </div>
                      <p className='my-0 leading-4'>
                        Thời trang Nam
                        <span className='block text-xs text-left text-gray-500 font-normal'>
                          {products.length ? products?.length : 0} sản phẩm
                        </span>
                      </p>
                    </Tab>
                    <Tab
                      className={`flex items-center text-base cursor-pointer font-semibold relative w-1/3 mb-0 ${tabProductIndex === 1 ? 'text-blue-cyan before:absolute before:w-4 before:h-4 before:left-3 before:-top-8 before:rotate-45 before:border before:border-blue-cyan before:border-t-0 before:border-l-0 before:bg-white' : 'text-black'}`}
                    >
                      <div
                        className={`float-left mb-0 rounded-full w-10 h-10 p-0.5 mr-2.5 border-solid border transition-all duration-300 ${tabProductIndex === 1 ? 'border-blue-cyan' : 'border-gray-500'}`}
                      >
                        <img className='border-0 max-w-full h-auto bg-transparent' src={tabImages[2]} alt='tab nu' />
                      </div>
                      <p className='my-0 leading-4'>
                        Thời trang Nữ
                        <span className='block text-xs text-left text-gray-500 font-normal'>
                          {products.length ? products?.length : 0} sản phẩm
                        </span>
                      </p>
                    </Tab>
                    <Tab
                      className={`flex items-center text-base cursor-pointer font-semibold relative w-1/3 mb-0 ${tabProductIndex === 2 ? 'text-blue-cyan before:absolute before:w-4 before:h-4 before:left-3 before:-top-8 before:rotate-45 before:border before:border-blue-cyan before:border-t-0 before:border-l-0 before:bg-white' : 'text-black'}`}
                    >
                      <div
                        className={`float-left mb-0 rounded-full w-10 h-10 p-0.5 mr-2.5 border-solid border transition-all duration-300 ${tabProductIndex === 2 ? 'border-blue-cyan' : 'border-gray-500'}`}
                      >
                        <img className='border-0 max-w-full h-auto bg-transparent' src={tabImages[3]} alt='tab gym' />
                      </div>
                      <p className='my-0 leading-4'>
                        Thời trang Gym
                        <span className='block text-xs text-left text-gray-500 font-normal'>
                          {products.length ? products?.length : 0} sản phẩm
                        </span>
                      </p>
                    </Tab>
                  </TabList>
                </Tabs>
              </div>
            </div>
          </Row>
        </div>
      </section>
      <section className='bg-big-banner-sale bg-no-repeat bg-fixed bg-cover bg-center pt-24 pb-24 mb-8 '>
        <Row className='w-1200 mx-auto'>
          <div className='w-full flex justify-center'>
            <Link to='' className='text-center block'>
              <img
                src={bannerBigImage}
                alt='banner big sale'
                className='relative text-9xl italic font-semibold bg-transparent animate-aniName'
              />
            </Link>
          </div>
        </Row>
      </section>
      <section className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className=''>
            <div className='flex-none w-full max-w-full'>
              <h2 className='text-black text-lg '>
                Thời trang <span className='font-semibold text-blue-cyan'>Gyms</span>
              </h2>
            </div>
            <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={width > 768 ? 4 : 2} navigation>
              {products.length &&
                products.map((product) => (
                  <SwiperSlide key={product.id} className='relative mb-4 bg-white p-2.5 rounded-md'>
                    <Product product={product} handleClickEye={handleClickEye(product)} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Row>
        </div>
      </section>
      <section className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className=''>
            <div className='w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5'>
              <div className='mb-7'>
                <img className='border-0 max-w-full h-auto bg-transparent' src={threeBannerImages[0]} alt='banner 1' />
              </div>
            </div>
            <div className='w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5'>
              <div className='mb-7'>
                <img className='border-0 max-w-full h-auto bg-transparent' src={threeBannerImages[1]} alt='banner 2' />
              </div>
            </div>
            <div className='w-full sm:w-full md:w-4/12 lg:w-4/12 xl:w-4/12 px-2.5'>
              <div className='mb-7'>
                <img className='border-0 max-w-full h-auto bg-transparent' src={threeBannerImages[2]} alt='banner 3' />
              </div>
            </div>
          </Row>
        </div>
      </section>
      <section className='mb-7 md:mb-3.5'>
        <div className='container w-1200 mx-auto'>
          <Row className=''>
            <div className='flex-none w-full max-w-full mb-2'>
              <h2 className='text-black text-lg'>
                Bean <span className='font-semibold text-blue-cyan'>Instagram</span>
              </h2>
            </div>
            <Swiper spaceBetween={10} slidesPerView={width > 768 ? 4 : 3} modules={[Navigation]} navigation>
              {brandImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <Link
                    to=''
                    className='min-h-24 relative overflow-hidden block before:hover:animate-shine before:absolute before:top-0 before:-left-full before:z-2 before:block before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:to-white-0.3 before:origin-top-left before:-skew-x-12'
                  >
                    <img
                      src={image.path}
                      alt={`bean instagram ${image.id}`}
                      className='border-0 max-w-full h-auto bg-transparent'
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </div>
      </section>
    </div>
  )
}
