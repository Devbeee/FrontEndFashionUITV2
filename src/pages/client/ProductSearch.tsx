import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { productApi } from "@/apis"
import { useApi, useBoolean } from "@/hooks"
import { IProduct, IProductComp } from "@/interfaces"
import { Product, QuickViewProduct } from "@/components"

export const ProductSearch = () => {
    const { loading, callApi: getBySearchQuery } = useApi<void>()
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalProducts, setTotalProducts] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1) 
    const [products, setProducts] = useState<IProduct[] | null>(null)
    const [query, setQuery] = useState<string>('')
    const { value: initialRender, setFalse: setFalseInitial, setTrue: setTrueInitial } = useBoolean(true)
    const { value: isUpdate, setFalse: setFalseUpdate } = useBoolean(true)
    
    const updateSearchParams = (page: number) => {
        setSearchParams({
          page: page.toString(),
          ...(query && { searchQuery: query }),
        })
    }

    const handleChangePage = (page: number) => {
        updateSearchParams(page)
        setCurrentPage(page)
    }

    const [quickViewProduct, setQuickViewProduct] = useState<IProduct | null>(null)
    const [showQuickView, setShowQuickView] = useState<boolean>(false)
    const handleClickEye = (product: IProductComp) => () => {
        setQuickViewProduct(product)
        setShowQuickView(true)
    }
    const handleClosePopup = () => {
        setShowQuickView(false)
    }

    const getProducts = async (page: number) => {
        getBySearchQuery(async () => {
            const { data } = await productApi.getBySearchQuery({ searchQuery: query, page: page })
            if (data) {
                setProducts(data.data)
                setTotalProducts(data.total)
                if (Math.ceil(data.total / 16) < page) {
                    handleChangePage(1)
                }
            } else {
                setProducts([])
                setTotalProducts(0)
            }
        })
    }
    useEffect(() => {
        if (initialRender) {
            setFalseInitial()

            const urlPage = parseInt(searchParams.get('page') || '1')
            const urlSearchQuery = searchParams.get('searchQuery') || ''

            setCurrentPage(urlPage)
            if (query !== urlSearchQuery) {
                setQuery(urlSearchQuery)
            } else {
                setTrueInitial()
                getProducts(urlPage)
            }
        }
    }, [searchParams])

    useEffect(() => {
        if (!isUpdate) {
        updateSearchParams(currentPage)
        } else {
        setFalseUpdate()
        }

        if (!initialRender) {
        setTrueInitial()
        getProducts(currentPage)
        }
    }, [query])

    return (
        <>
            {showQuickView && quickViewProduct && (
            <QuickViewProduct product={quickViewProduct} handleClosePopup={handleClosePopup} />
            )}
             <div className="w-full h-full">
                <div className="w-[63%] m-auto">
                    <h1 className="text-2xl font-semibold text-gray-700 text-left pb-4">
                        {loading ? <p>Kết quả tìm kiếm</p>
                         :<p>{`Có ${totalProducts} kết quả tìm kiếm phù hợp`}</p>
                        }
                    </h1>
                    <div
                        className={'w-full flex flex-wrap gap-[5%] md:gap-[2%] justify-start md:px-0 sm:px-2 px-1'}
                    >
                    {loading ? (
                        <div className="w-full flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-primary"></div>
                            <div className="text-xl font-medium text-gray-500 mt-2">Đang tải...</div>
                        </div>
                        </div>
                    ) : products && products.length === 0 ? (
                        <div className="w-full flex justify-center">
                            <div className="text-2xl font-semibold text-gray-400">
                                Không có sản phẩm phù hợp
                            </div>
                        </div>
                    ) : (
                        products?.map((product: IProduct) => (
                        <div
                            className="md:w-[23.5%] sm:w-[46%] w-full mt-2 h-fit"
                            key={product.id}
                        >
                            <Product
                            product={product}
                            handleClickEye={handleClickEye(product)}
                            />
                        </div>
                        ))
                    )}
                    </div>
                    <div className={'flex justify-center my-5'}>
                        <Pagination
                            disabled={totalProducts === 0}
                            align='center'
                            defaultCurrent={1}
                            current={currentPage}
                            total={totalProducts}
                            pageSize={16}
                            onChange={handleChangePage}
                            showSizeChanger={false}
                            hideOnSinglePage={true}
                        />
                    </div>
                </div>
            </div>
        </>
       
    )
}