import { icons } from "@/utils";
import { Breadcrumb, Button, Col, Row, Table, InputNumber, Image } from "antd";
import { useState } from "react";
import type { TableColumnsType, TableProps } from 'antd';
import { Link } from "react-router-dom";
import { IProduct } from "@/interfaces";

interface ICartProduct extends Pick<IProduct, 'name' | 'price' | 'discount'> {
    id: number;
    size: string;
    color: string;
    quantity: number,
    image: string,
}


export function Cart() {
    const columns: TableColumnsType<ICartProduct> = [
        {
            title: <h2 className="uppercase font-bold text-center">Thông tin sản phẩm</h2>,
            key: 'informations',
            dataIndex: 'informations',
            render: (_, record) => (
                <Row gutter={8}>
                    <Col span={6}>
                        <Image src={record.image} alt={record.name} />
                    </Col>
                    <Col span={18}>
                        <h3 className="font-semibold pl-4">{record.name}</h3>
                        <div className="pl-4">{record.color} / {record.size}</div>
                        <Button type="link" danger>
                            Xóa
                        </Button>
                    </Col>
                </Row>
            ),
        },
        {
            title: <h2 className="uppercase font-bold text-center">Đơn giá</h2>,
            dataIndex: 'price',
            key: 'price',
            render: (_, record) => (
                <div className="text-red-600 font-bold text-center p-2">
                    {(record.price * (1 - record.discount / 100)).toLocaleString('de-DE')}đ
                </div>
            ),
        },
        {
            title: <h2 className="uppercase font-bold text-center">Số lượng</h2>,
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, record) => (
                <InputNumber min={1} max={99} value={record.quantity} onChange={(value: number | null) => handleChangeQuantity(value, record.id)} />
            ),
        },
        {
            title: <h2 className="uppercase font-bold text-center">Thành tiền</h2>,
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            width: 160,
            render: (_, record) => (
                <div className="text-red-600 font-bold text-center px-5">
                    {(record.price * (1 - record.discount / 100) * record.quantity).toLocaleString('de-DE')}đ
                </div>
            ),
        },
    ];
    const [cartItems, setCartItems] = useState<ICartProduct[]>([
        {
            id: 1,
            image: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg",
            name: "123 asdadad asdasd asdasd asd asda asd asd 123 asdadad asdasd asdasd asd asda asd asd",
            color: "Đen",
            size: "S",
            price: 500000,
            quantity: 2,
            discount: 20,
        },
        {
            id: 2,
            image: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg",
            name: "123 asdadad asdasd asdasd asd asda asd asd 123 asdadad asdasd asdasd asd asda asd asd",
            color: "Đen",
            size: "S",
            price: 100000,
            quantity: 2,
            discount: 20,
        },
        {
            id: 3,
            image: "/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg",
            name: "123 asdadad asdasd asdasd asd asda asd asd 123 asdadad asdasd asdasd asd asda asd asd",
            color: "Đen",
            size: "S",
            price: 100000,
            quantity: 2,
            discount: 20,
        },
    ])

    const [checkoutItems, setCheckoutItems] = useState<ICartProduct[]>([])

    const rowSelection: TableProps<ICartProduct>['rowSelection'] = {
        onChange: (_, selectedRows: ICartProduct[]) => {
            setCheckoutItems(selectedRows)
        },
    };
    const handleChangeQuantity = (value: number | null, id: React.Key) => {
        if (value !== null) {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id
                        ? { ...item, quantity: value }
                        : item
                )
            );
            setCheckoutItems(prevItems =>
                prevItems.map(item =>
                    item.id === id
                        ? { ...item, quantity: value }
                        : item
                )
            );
        }
    };

    const handleDeleteCartItems = () => {
        const updatedCartItems = cartItems.filter(cartItem =>
            !checkoutItems.some(checkoutItem => cartItem.id === checkoutItem.id)
        );
        setCartItems(updatedCartItems);
        setCheckoutItems([])
    };

    return (
        <div>
            <div className="bg-gray-100">
                <Breadcrumb
                    items={[
                        { title: <Link to="/home">Trang chủ</Link>, },
                        { title: "Giỏ hàng" },
                    ]}
                    className="w-1200 mx-auto py-3"
                />
            </div>
            <div className="w-1200 mx-auto my-2">
                <h1 className="uppercase text-left font-bold p-3 bg-gray-100">
                    Giỏ hàng của bạn
                </h1>
                <Row className="mt-2" gutter={12}>
                    <Col span={18}>
                        <Table<ICartProduct>
                            columns={columns}
                            rowSelection={{ type: "checkbox", ...rowSelection }}
                            dataSource={cartItems}
                            rowKey={(record) => record.id}
                        />
                        <Row justify="space-between" align="middle">
                            <Col>
                                <Button color="default" variant="link" icon={icons.prevPage} >
                                    Tiếp tục mua hàng
                                </Button>
                            </Col>
                            <Col span={10}>
                                <Row align="bottom">
                                    <Col span={12}>
                                        <Button
                                            color="danger"
                                            variant="outlined"
                                            className="p-5 my-2"
                                            disabled={checkoutItems.length === 0}
                                            onClick={handleDeleteCartItems}
                                        >
                                            Xóa các mục đã chọn
                                        </Button>
                                    </Col>
                                    <Col span={12}>
                                        <Row gutter={12} justify="space-between">
                                            <Col>
                                                <div className="font-bold uppercase">
                                                    <span>tổng tiền: </span>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="font-bold text-red-500 text-end">
                                                    <span>{checkoutItems.length ? checkoutItems.reduce((acc, item) => {
                                                        return (
                                                            acc + (item.price - (item.price * item.discount) / 100) * item.quantity
                                                        );
                                                    }, 0).toLocaleString("de-DE") : 0}</span>đ
                                                </div>
                                            </Col>
                                        </Row>
                                        <Button
                                            className={`${checkoutItems.length !== 0 && "hover:bg-white hover:text-blue-cyan hover:border-blue-cyan"} uppercase p-5 my-2 font-semibold bg-blue-cyan text-white w-full `}
                                            disabled={checkoutItems.length === 0}
                                        >
                                            thanh toán
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} className="relative w-full">
                        <fieldset className="relative bg-white rounded mb-5 mt-2.5 p-3 border border-dashed border-blue-cyan bg-dark-blue-02">
                            <legend className="flex justify-center items-center w-auto text-dark-blue font-semibold bg-dark-blue-02 rounded border border-solid border-current text-base mb-0 px-2.5 uppercase whitespace-normal text-left">
                                <img
                                    alt="MÃ GIẢM GIÁ"
                                    src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/code_dis.gif?1727683533447"
                                    className="max-w-6 mix-blend-multiply align-middle"
                                />
                                mã giảm giá
                            </legend>
                            {
                                [0, 1, 2].map(item => (
                                    <div className="relative bg-white drop-shadow p-1.5 mb-3.5 text-left" key={item}>
                                        <Row justify="space-between" className="relative">
                                            <div className="flex justify-between relative w-full">
                                                <span className="block mb-0 font-bold text-left relative text-dark-blue uppercase ">10% off</span>
                                                <img width="36" height="20" src="//bizweb.dktcdn.net/100/451/884/themes/857425/assets/coupon1_value_img.png?1727683533447" alt="10% OFF" />
                                            </div>
                                        </Row>
                                        <div >
                                            Giảm <b>10%</b> cho đơn hàng từ <b>500k.</b>
                                        </div>
                                        <div className="p-1 mt-1 relative bg-gray-100 rounded flex justify-between items-center">
                                            <span className="mb-0 inline-block text-base uppercase font-semibold">BFAS10</span>
                                            <Button className="float-right m-0 bg-blue-cyan text-white hover:!bg-white hover:!text-blue-cyan hover:!border-blue-cyan">
                                                Copy
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </fieldset>
                    </Col>
                </Row>
            </div>
        </div>
    )
}