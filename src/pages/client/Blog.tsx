import { Tags, HotNews, NewsCard} from '@/components';
import { Typography } from 'antd';

const { Title } = Typography;

type Blog = {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    shortdesc: string;
};

// Data mẫu
const blogsData: Blog[] = [
    {
      title: "Nhà thiết kế vĩ đại đầu tiên của năm 2022 Nhà thiết kế vĩ đại đầu tiên của năm 2022",
      description: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
      slug: "/ao-trang-nho",
      createdAt: "2022-04-05T12:22:12",
      shortdesc: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
    },
    {
      title: "Cách phối đồ phong cách mùa hè",
      description: "Phong cách mùa hè luôn mang đến sự thoải mái và tươi mới. Những kiểu trang phục mới sẽ giúp bạn tận hưởng mùa hè trọn vẹn...",
      slug: "/phoi-do-mua-he",
      createdAt: "2023-06-15T10:30:00",
      shortdesc: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
    },
    {
      title: "Xu hướng thời trang thu đông 2023",
      description: "Thu đông 2023 mang đến các mẫu áo khoác oversize và boots cao cổ đang làm mưa làm gió trong giới thời trang...",
      slug: "/xu-huong-thoi-trang-thu-dong",
      createdAt: "2023-09-01T14:00:00",
      shortdesc: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
    },
    {
      title: "Những phụ kiện không thể thiếu trong năm 2024",
      description: "Phụ kiện là phần không thể thiếu trong phong cách thời trang. Năm 2024, xu hướng phụ kiện tập trung vào sự tinh tế và sáng tạo...",
      slug: "/phu-kien-2024",
      createdAt: "2024-01-10T09:00:00",
      shortdesc: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
    },
    {
      title: "Câu chuyện về chiếc đầm đen huyền thoại",
      description: "Chiếc đầm đen được xem là biểu tượng của sự thanh lịch và sang trọng. Hãy cùng tìm hiểu về câu chuyện đằng sau trang phục này...",
      slug: "/chiec-dam-den-huyen-thoai",
      createdAt: "2023-11-25T16:45:00",
      shortdesc: "Đó là buổi trình diễn lớn đầu tiên của Tuần lễ thời trang Milan: 1 giờ chiều ngày 1. Mọi chiếc ghế trong không gian nhà kho hang động...",
    },
  ];

  // data mẫu
const hotNews = [
    {
      title: '4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng',
      link: '/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang',
      date: '05/04/2022',
      image: 'logo.webp',
    },
    {
      title: '4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng',
      link: '/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang',
      date: '05/04/2022',
      image: 'logo.webp',
    },
    {
      title: '4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng',
      link: '/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang',
      date: '05/04/2022',
      image: 'logo.webp',
    },
    {
      title: '4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng',
      link: '/4-kieu-trang-phuc-denim-dang-hot-nhat-hack-moi-do-tuoi-cho-cac-nang',
      date: '05/04/2022',
      image: 'logo.webp',
    },
    // Thêm các bài viết khác vào đây...
  ];

  
//Data mẫu
const tagsData = [
    { name: 'Anna Zhou', link: '/tin-tuc/anna-zhou' },
    { name: 'Denim', link: '/tin-tuc/denim' },
    { name: 'Đường phố', link: '/tin-tuc/duong-pho' },
    { name: 'Mùa thu 2022', link: '/tin-tuc/mua-thu-2022' },
    { name: 'Năm 2022', link: '/tin-tuc/nam-2022' },
    { name: 'Nhà thiết kế', link: '/tin-tuc/nha-thiet-ke' },
    { name: 'Phong cách', link: '/tin-tuc/phong-cach' },
    { name: 'Quần âu', link: '/tin-tuc/quan-au' },
    { name: 'Thời trang', link: '/tin-tuc/thoi-trang' },
    { name: 'Thời trang nữ', link: '/tin-tuc/thoi-trang-nu' },
  ];

export function Blog() {

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white-primary">
      <div className="flex flex-row flex-wrap gap-6 justify-between w-full max-w-1200 px-4 mt-5 mb-5">
        <div className="flex-[3]">
          <Title level={5} className="text-left uppercase font-bold bg-gray100 rounded-md pl-2 py-2 shadow-sm mb-5">
            Tin tức
          </Title>
          <div className="flex flex-wrap gap-x-5 gap-y-5 sm:justify-center md:justify-start">
            {blogsData.map((blog) => (
              <NewsCard blog={blog} />
            ))}
          </div>
        </div>
        <div className="flex-[1]">
          <Tags tags={tagsData} />
          <HotNews newsItems={hotNews} />
        </div>
      </div>
    </div>
  );
}
