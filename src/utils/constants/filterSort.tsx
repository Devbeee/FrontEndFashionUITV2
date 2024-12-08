export const filterTiers = [
  {
    typeFilter: 'price',
    title: 'CHỌN MỨC GIÁ',
    options: [
      { value: 'LESS_THAN_100', label: 'Dưới 100.000 đ' },
      { value: 'FROM_100_TO_200', label: 'Từ 100.000 đ - 200.000 đ' },
      { value: 'FROM_200_TO_500', label: 'Từ 200.000 đ - 500.000 đ' },
      { value: 'FROM_500_TO_1000', label: 'Từ 500.000 đ - 1.000.000 đ' },
      { value: 'GREATER_THAN_1000', label: 'Trên 1.000.000 đ' }
    ]
  },
  {
    typeFilter: 'category',
    title: 'LOẠI SẢN PHẨM',
    options: [
      { value: 'Áo Cotton', label: 'Áo Cotton' },
      { value: 'Áo Khoác', label: 'Áo Khoác' },
      { value: 'Áo phông', label: 'Áo phông' },
      { value: 'Áo Polo', label: 'Áo Polo' },
      { value: 'Chân váy', label: 'Chân váy' },
      { value: 'Đồ tập Gym', label: 'Đồ tập Gym' }
    ]
  },
  {
    typeFilter: 'color',
    title: 'CHỌN MÀU SẮC',
    options: [
      { value: 'Xanh lá', label: 'Xanh lá' },
      { value: 'Đen', label: 'Đen' },
      { value: 'Trắng', label: 'Trắng' },
      { value: 'Hồng', label: 'Hồng' },
      { value: 'Đỏ', label: 'Đỏ' },
      { value: 'Cam', label: 'Cam' },
      { value: 'Vàng', label: 'Vàng' },
      { value: 'Tím', label: 'Tím' }
    ]
  }
]

export const sortOptions = {
  default: 'DEFAULT',
  option: [
    { value: 'DEFAULT', label: 'Mặc định' },
    { value: 'NAMEINCREASE', label: 'A → Z' },
    { value: 'NAMEDECREASE', label: 'Z → A' },
    { value: 'PRICEINCREASE', label: 'Giá tăng dần' },
    { value: 'PRICEDECREASE', label: 'Giá giảm dần' },
    { value: 'OLDEST', label: 'Cũ nhất' },
    { value: 'NEWEST', label: 'Mới nhất' }
  ]
}
export const collectionLinks = ['Thời Trang Nam', 'Thời Trang Nữ', 'Thời Trang Trẻ Em', 'Thời Trang Tập Gym']
