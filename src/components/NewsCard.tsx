import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import news_Img from '@/assets/images/news_Img.webp'
import { INewsCardProps } from '@/interfaces';

const { Title, Paragraph } = Typography;

export function NewsCard ({ blog } : INewsCardProps) {
  const convertStringDate = (stringTime: string): string => {
    const date = new Date(stringTime);
    const ngay = date.getDate();
    const thang = date.getMonth() + 1;
    const nam = date.getFullYear();
    return `${ngay < 10 ? '0' : ''}${ngay}/${thang < 10 ? '0' : ''}${thang}/${nam}`;
  };
  // Để lại phòng sau này cần
  const convertImageUrl = (stringHtml: string): string | undefined => {
    const regex = /<img src="([^"]+)"/g;
    const match = regex.exec(stringHtml);
    return match ? match[1] : undefined;
  };

  return (
    <div className="w-[17rem] p-0 border-none">
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-full h-44 object-cover z-0'>
          <Link to={`/blogs/${blog.slug}`} title={blog.title} className='z-0'>
              <img
                className="w-full h-40 object-cover z-0"
                src={news_Img} // Để tạm, nào call api sửa sau
              alt={blog.title}
              />
            </Link>
        </div>
        <div className="h-44 overflow-hidden py-2 px-3 -mt-8 border rounded-md shadow-md z-50 w-11/12 bg-white">
          <Title level={5} className="text-center ">
            <Link to={`/blogs/${blog.slug}`} title={blog.title} className='font-bold line-clamp-2'>
              <span className='text-blue-cyan hover:text-primary transition duration-300 ease-in-out'>{blog.title}</span>
            </Link>
          </Title>
          <Paragraph className="text-xs text-gray-600 text-center my-2 relative">
            <span className="bg-blue-cyan border border-white text-white px-2 py-[1px] rounded-full z-10 relative">
              {convertStringDate(blog.createdAt)}
            </span>
            <span className="absolute inset-0 border-b-[1px] border-blue-cyan opacity-30 transform -translate-y-1/2"></span>
          </Paragraph>
          <Paragraph className="text-center text-gray-600 line-clamp-3">
            {blog.shortdesc}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
