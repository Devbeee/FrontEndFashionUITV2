export const filterTiers = [
  {
    typeFilter: 'price',
    title: 'CHỌN MỨC GIÁ',
    options: [
      'Dưới 100.000 đ',
      'Từ 100.000 đ - 200.000 đ',
      'Từ 200.000 đ - 500.000 đ',
      'Từ 500.000 đ - 1.000.000 đ',
      'Trên 1.000.000 đ'
    ]
  },
  {
    typeFilter: 'category',
    title: 'LOẠI SẢN PHẨM',
    options: ['Áo Cotton', 'Áo Khoác', 'Áo phông', 'Áo Polo', 'Chân váy', 'Đồ tập Gym']
  },
  {
    typeFilter: 'color',
    title: 'CHỌN MÀU SẮC',
    options: ['Xanh lá', 'Đen', 'Trắng', 'Hồng', 'Đỏ', 'Cam', 'Vàng', 'Tím']
  }
]

export const sortOptions = {
  default: 'default',
  option: [
    { value: 'default', label: 'Mặc định' },
    { value: 'nameIncrease', label: 'A → Z' },
    { value: 'nameDecrease', label: 'Z → A' },
    { value: 'priceIncrease', label: 'Giá tăng dần' },
    { value: 'priceDecrease', label: 'Giá giảm dần' },
    { value: 'oldest', label: 'Cũ nhất' },
    { value: 'newest', label: 'Mới nhất' }
  ]
}
export const collectionLinks = ['Thời Trang Nam', 'Thời Trang Nữ', 'Thời Trang Trẻ Em', 'Thời Trang Tập Gym']
