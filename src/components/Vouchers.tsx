import { Button, List, message  } from 'antd';

import { icons } from '@/utils';

type Discount = {
    name: string,
    code: string,
    discount: number,
    description: string,
    quantity: number
}

export function Vouchers() {
    const handleCopy = (code : string) => {
        navigator.clipboard.writeText(code);
        message.success(`Copied: ${code}`);
    }
    const discountCode :Discount[] = [
        {
            name: '10% OFF',
            code: 'BFAS10',
            discount: 0.1,
            description: `Giảm 10 % cho đơn hàng từ 500k`,
            quantity: 10
        },
        {
            name: '15% OFF',
            code: 'BFAS15',
            discount: 0.15,
            description: 'Giảm 15 % cho đơn hàng từ 1000k',
            quantity: 10
        },
        {
            name: '8% OFF',
            code: 'BFAS08',
            discount: 0.08,
            description: 'Giảm 8 % cho đơn hàng từ 100k',
            quantity: 10
        },
    ]
    return (
        <div>
            <List
                size="small"
                className='border border-dashed border-blue-cyan rounded-md'
            >
                <div className='p-3 bg-gray-50 rounded-md'>
                    <div className='flex justify-center items-center gap-2 w-36 h-8 bg-white border border-blue-cyan rounded-md -mt-8'>
                        <span className='text-red-500 text-lg'>{icons.gift}</span>
                        <span className='uppercase font-bold'>Mã giảm giá</span>
                    </div>
                    {discountCode.map((e : Discount) => (
                        <List.Item className='bg-white px-0 mt-4 border border-gray-100 shadow-md'>
                            <div className='w-full px-0 flex flex-col justify-start items-start'>
                                <div className='flex w-full justify-between'>
                                    <div className='flex justify-start items-start gap-3'>
                                        <span className='rounded-full text-blue-cyan font-bold'>{e.name}</span>
                                        <span className='rounded-full px-3 py-1 bg-orange-100 text-xs text-orange-400'>Top Code</span>
                                    </div>
                                    <div className='flex justify-center items-center gap-1'>
                                        <span className='text-blue-cyan'>{e.discount * 100}%</span>
                                        <span className='text-2xl text-blue-cyan'>{icons.discount}</span>
                                    </div>
                                </div>
                                <p className='text-left'>{e.description}</p>
                                <div className='flex flex-row justify-between items-center w-full bg-gray-100 p-1 rounded-lg'>
                                    <span className='font-bold text-gray-500 text-md'>{e.code}</span>
                                    <Button onClick={() => handleCopy(e.code)} className='bg-blue-cyan text-white h-7'>Copy</Button>
                                </div>
                            </div>
                        </List.Item>
                    ))}
                </div>
            </List>
        </div>
    )
}