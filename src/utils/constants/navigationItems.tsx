import { Link } from 'react-router-dom'

import { icons } from '../icons'

export const NAVIGATION_ITEMS = [
  { label: <Link to='/'>Trang chủ</Link>, key: 'home' },
  {
    label: <Link to='#'>Nữ</Link>,
    key: 'female',
    children: [
      {
        label: 'Áo',
        key: 'aonu',
        children: [
          { label: <Link to='#'>Áo Len</Link>, key: 'aolennu' },
          { label: <Link to='#'>Áo Thun</Link>, key: 'aothunnu' },
          { label: <Link to='#'>Áo Sơ Mi</Link>, key: 'aosominu' },
          { label: <Link to='#'>Áo Cardigan</Link>, key: 'aocardigannu' }
        ]
      },
      {
        label: 'Quần',
        key: 'quannu',
        children: [
          { label: <Link to='#'>Quần Tây Nữ</Link>, key: 'quantaynu' },
          { label: <Link to='#'>Quần Jean Nữ</Link>, key: 'quanjeannu' },
          { label: <Link to='#'>Quần Short Nữ</Link>, key: 'quanshortnu' },
          { label: <Link to='#'>Quần Leggings Nữ</Link>, key: 'quanleggingsnu' }
        ]
      },
      {
        label: 'Váy',
        key: 'vaynu',
        children: [
          { label: <Link to='#'>Chân Váy Nữ</Link>, key: 'chanvaynu' },
          { label: <Link to='#'>Quần Váy Nữ</Link>, key: 'quanvaynu' },
          { label: <Link to='#'>Váy Ngắn Nữ</Link>, key: 'vayngannu' },
          { label: <Link to='#'>Váy Liền Thân</Link>, key: 'vaylienthan' }
        ]
      },
      {
        label: 'Đồ mặc trong',
        key: 'domactrongnu',
        children: [
          { label: <Link to='#'>Áo Bra Tops</Link>, key: 'aobratopnu' },
          { label: <Link to='#'>Quần Tất Lưới</Link>, key: 'quantatluonu' },
          { label: <Link to='#'>Quần Con Size Lớn</Link>, key: 'quanconsizelonnu' },
          { label: <Link to='#'>Áo Ngực Không Gọng</Link>, key: 'aonguckhonggongnu' }
        ]
      },
      {
        label: 'Đồ Mặc Nhà',
        key: 'domacnhanu',
        children: [
          { label: <Link to='#'>Đồ Pyjama Nữ</Link>, key: 'pyjamanu' },
          { label: <Link to='#'>Đồ Relaco</Link>, key: 'relaconu' },
          { label: <Link to='#'>Bộ Giường Ngủ</Link>, key: 'dongunu' },
          { label: <Link to='#'>Dép Đi Trong Nhà</Link>, key: 'depditrongnhanu' }
        ]
      },
      {
        label: 'Phụ Kiện',
        key: 'phukiennu',
        children: [
          { label: <Link to='#'>Túi Xách Nữ</Link>, key: 'tuixachnu' },
          { label: <Link to='#'>Đồng Hồ Nữ</Link>, key: 'donghonu' },
          { label: <Link to='#'>Bông Tai Nữ</Link>, key: 'bongtainu' }
        ]
      },
      {
        label: 'Đầm',
        key: 'damnu',
        children: [
          { label: <Link to='#'>Đầm Dạ Hội</Link>, key: 'damdahoinu' },
          { label: <Link to='#'>Đầm Xòe Trễ Vai</Link>, key: 'damxoenu' },
          { label: <Link to='#'>Đầm Và Jumpsuit</Link>, key: 'damvajumpsuitnu' }
        ]
      },
      {
        label: 'Đồ Bộ Nữ',
        key: 'dobonu',
        children: [
          { label: <Link to='#'>Đồ Bộ Mặc Nhà</Link>, key: 'domacnha' },
          { label: <Link to='#'>Đồ Bộ Đi Chơi</Link>, key: 'dodichoi' }
        ]
      }
    ]
  },
  {
    label: <Link to='#'>Nam</Link>,
    key: 'male',
    children: [
      {
        label: 'Áo',
        key: 'aonam',
        children: [
          { label: <Link to='#'>Áo Thun</Link>, key: 'aolennam' },
          { label: <Link to='#'>Áo Polo</Link>, key: 'aopolonam' },
          { label: <Link to='#'>Áo Sơ Mi</Link>, key: 'aosominam' },
          { label: <Link to='#'>Áo ba lỗ</Link>, key: 'aobalonam' }
        ]
      },
      {
        label: 'Quần',
        key: 'quannam',
        children: [
          { label: <Link to='#'>Quần Tây</Link>, key: 'quantaynam' },
          { label: <Link to='#'>Quần kaki</Link>, key: 'quankakinam' },
          { label: <Link to='#'>Quần Short</Link>, key: 'quanshortnam' },
          { label: <Link to='#'>Quần thể thao</Link>, key: 'quanthethaonam' }
        ]
      },
      {
        label: 'Đồ mặc ngoài',
        key: 'domacngoainam',
        children: [
          { label: <Link to='#'>Áo khoác(coat)</Link>, key: 'coatnam' },
          { label: <Link to='#'>Áo khoác(jacket)</Link>, key: 'jacketnam' },
          { label: <Link to='#'>Áo blouson & hoodie</Link>, key: 'hoodienam' },
          { label: <Link to='#'>Áo khoác siêu nhẹ</Link>, key: 'aokhoacsieunhenam' }
        ]
      },
      {
        label: 'Đồ Mặc Trong',
        key: 'domactrongnam',
        children: [
          { label: <Link to='#'>Đồ lót</Link>, key: 'dolotnam' },
          { label: <Link to='#'>Áo mặc trong</Link>, key: 'aomactrongnam' },
          { label: <Link to='#'>Quần leggings và quần tất</Link>, key: 'quantatnam' }
        ]
      },
      {
        label: 'Đồ Mặc Nhà',
        key: 'domacnhanam',
        children: [
          { label: <Link to='#'>Đồ Pyjama</Link>, key: 'pyjamanam' },
          { label: <Link to='#'>Quần chino</Link>, key: 'quanchinonam' },
          { label: <Link to='#'>Quần dài dến mắc cá</Link>, key: 'quandainam' }
        ]
      },
      {
        label: 'Phụ Kiện',
        key: 'phukiennam',
        children: [
          { label: <Link to='#'>Ví - bóp</Link>, key: 'vinam' },
          { label: <Link to='#'>Mắt kính</Link>, key: 'matkinhnam' },
          { label: <Link to='#'>Vòng tay</Link>, key: 'vongtaynam' }
        ]
      }
    ]
  },
  {
    label: <Link to='#'>Trẻ em</Link>,
    key: 'children',
    children: [
      {
        label: 'Áo',
        key: 'aotreem',
        children: [
          { label: <Link to='#'>Áo thun</Link>, key: 'aothuntreem' },
          { label: <Link to='#'>Áo sơ mi</Link>, key: 'aosomitreem' },
          { label: <Link to='#'>Áo kiểu hoạ tiết</Link>, key: 'aohoatiettreem' },
          { label: <Link to='#'>Áo hoạt hình</Link>, key: 'aohoathinhtreem' }
        ]
      },
      {
        label: 'Quần',
        key: 'quantreem',
        children: [
          { label: <Link to='#'>Quần dài</Link>, key: 'quandaitreem' },
          { label: <Link to='#'>Quần short</Link>, key: 'quanshorttreem' },
          { label: <Link to='#'>Đầm xoè</Link>, key: 'damxoetreem' },
          { label: <Link to='#'>Chân váy</Link>, key: 'chanvaytreem' }
        ]
      },
      {
        label: 'Đồ lót trẻ em',
        key: 'dolottreem',
        children: [
          { label: <Link to='#'>Áo lót</Link>, key: 'aolottreem' },
          { label: <Link to='#'>Quần lót</Link>, key: 'quanlottreem' },
          { label: <Link to='#'>Áo mặc trong cài trước</Link>, key: 'aomactrongtreem' },
          { label: <Link to='#'>Áo khoác siêu nhẹ</Link>, key: 'aokhoactreem' }
        ]
      },
      {
        label: 'Phụ kiện trẻ em',
        key: 'phukientreem',
        children: [
          { label: <Link to='#'>Kính mắt</Link>, key: 'kinhmattreem' },
          { label: <Link to='#'>Khẩu trang</Link>, key: 'khautrangtreem' },
          { label: <Link to='#'>Túi đeo</Link>, key: 'tuideotreem' },
          { label: <Link to='#'>Nón bảo hiểm</Link>, key: 'nonbaohiemtreem' }
        ]
      }
    ]
  },
  {
    label: <Link to='/products'>Sản phẩm</Link>,
    key: 'products',
    children: [
      {
        label: 'Thời trang nam',
        key: 'thoitrangnam',
        children: [
          { label: <Link to='#'>Áo thun</Link>, key: 'aothun' },
          { label: <Link to='#'>Áo sơ mi</Link>, key: 'aosomi' },
          { label: <Link to='#'>Quần jeans</Link>, key: 'quanjeans' },
          { label: <Link to='#'>Đồ thể thao</Link>, key: 'dothethao' }
        ]
      },
      {
        label: 'Thời trang nữ',
        key: 'thoitrangnu',
        children: [
          { label: <Link to='#'>Đầm</Link>, key: 'dam' },
          { label: <Link to='#'>Váy</Link>, key: 'vay' },
          { label: <Link to='#'>Đồ bộ</Link>, key: 'dobo' },
          { label: <Link to='#'>Đồ ngủ</Link>, key: 'dongu' }
        ]
      },
      {
        label: 'Thời trang trẻ em',
        key: 'thoitrangtreem',
        children: [
          { label: <Link to='#'>Đồ sơ sinh</Link>, key: 'dososinh' },
          { label: <Link to='#'>Đồ bé trai</Link>, key: 'dobetrai' },
          { label: <Link to='#'>Đồ bé gái</Link>, key: 'dobegai' }
        ]
      },
      {
        label: 'Thời trang tập gym',
        key: 'thoitrangtapgym',
        children: [
          { label: <Link to='#'>Áo tập gym</Link>, key: 'aotapgym' },
          { label: <Link to='#'>Quần tập gym</Link>, key: 'quantapgym' },
          { label: <Link to='#'>Đồ bộ tập gym</Link>, key: 'dobotapgym' }
        ]
      }
    ]
  },
  { label: <Link to='#'>Tin tức</Link>, key: 'news' },
  { label: <Link to='#'>Liên hệ</Link>, key: 'contact' },
  {
    label: (
      <Link to='#' className='text-red-500 flex items-center'>
        <span>{icons.gift}</span>
        Khuyến mãi
      </Link>
    ),
    key: 'promotion'
  }
]
