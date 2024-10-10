import { Link } from "react-router-dom";
import { Button, Form, Input, Avatar, List, Typography } from 'antd';
import { HotNews, Tags } from "@/components";
import { icons } from "@/utils";

const { Title } = Typography;

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

// Data mẫu cho comment
const CommmentsData = [
    {
        user: 'Ma Seo Sầu',
        createAt: '2022-04-05T12:22:12',
        content: 'Bài viết rất ý nghĩa. Cảm ơn Admin đã chia sẽ'
    },
    {
        user: 'Ma Seo Sầu',
        createAt: '2022-04-05T12:22:12',
        content: 'Bài viết rất ý nghĩa. Cảm ơn Admin đã chia sẽ'
    },
    {
        user: 'Ma Seo Sầu',
        createAt: '2022-04-05T12:22:12',
        content: 'Bài viết rất ý nghĩa. Cảm ơn Admin đã chia sẽ'
    },
    {
        user: 'Ma Seo Sầu',
        createAt: '2022-04-05T12:22:12',
        content: 'Bài viết rất ý nghĩa. Cảm ơn Admin đã chia sẽ'
    },
];

export function BLogDetail() {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-white">
            <div className="flex flex-wrap flex-col-reverse md:flex-row gap-6 justify-between w-full max-w-1200 px-4 mt-5 mb-5">
                <div className="flex-[1]">
                    <Tags tags={tagsData} />
                    <HotNews newsItems={hotNews} />
                </div>
                <div className="flex-[3]">
                    <Title level={3} className="text-left">
                        <span className="font-bold">4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng</span>
                    </Title>
                    <div className="flex flex-row gap-4 justify-start">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-gray-400 text-lg">{icons.watch}</span>
                            <span className="text-gray-400">Thứ Ba, 05/04/2022</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-gray-400 text-sm">{icons.faUser}</span>
                            <span className="text-gray-400">Bean Fashion</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-2">
                        <p className="text-start my-2"><strong>Với 4 kiểu trang phục denim này, phong cách của chị em sẽ được trẻ hóa.</strong></p>
                        <p className="text-start">Khoảng thời gian từ xuân sang hè là vô cùng lý tưởng để diện đồ denim. Kiểu trang phục này trẻ trung, bụi bặm, rất hợp với không khí tươi vui của mùa ấm áp. Đồ denim thì có nhiều biến tấu, dễ khiến chị em bị hoang mang, không biết nên bổ sung thêm món nào cho tủ đồ. Và để đưa ra các lựa chọn thật sáng suốt, chị em nên cập nhật những món đồ denim đang hot. Dưới đây chính là 4 kiểu trang phục denim đang phủ sóng khắp mạng xã hội, chị em 30+ đừng bỏ qua vì tất cả sẽ giúp style thêm trẻ trung, hợp xu hướng.</p>
                        <p className="text-start my-2"><strong>Áo sơ mi denim</strong></p>
                        <p className="text-start my-2"><strong><img data-thumb="original" original-height="825" original-width="660" src="https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-1.jpg?v=1646494601635" /></strong></p>
                        <p className="text-start">Kể từ mùa xuân năm nay, áo sơ mi denim đã chính thức lội ngược dòng, trở thành item được hội sành mặc diện nhiệt tình. Điểm ấn tượng nhất của áo sơ mi denim chính là nét trẻ trung, cá tính, nàng nào diện cũng hack được ít nhất 5 tuổi.&nbsp;Quan trọng là, áo sơ mi denim vẫn sẽ đảm bảo cho nàng 30+ vẻ ngoài thanh lịch, trang nhã, diện đi chơi hay đi làm đều chuẩn không cần chỉnh. Áo sơ mi denim vốn đã nổi bật, nên chị em mix cùng quần jeans đen, hoặc quần âu cơ bản là hút mắt, không sợ bị chìm nghỉm. Hội sành điệu khi diện sơ mi denim còn không quên nhấn nhá một chiếc dây chuyền vàng dáng mảnh, hoặc vòng ngọc trai để trông sang chảnh hơn.</p>
                        <p className="text-start my-2"><strong>Áo khoác denim</strong></p>
                        <p className="text-start my-2"><strong><img data-thumb="original" original-height="825" original-width="660" src="https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-2.jpg?v=1646494679371" /></strong></p>
                        <p className="text-start">Áo khoác denim là một lựa chọn lý tưởng cho mùa xuân không nóng cũng chẳng quá lạnh. Sự xuất hiện của item này sẽ lập tức trẻ hóa cả set trang phục. Chị em có thể thỏa sức sáng tạo khi diện áo khoác denim. Đơn giản nhất, bạn hãy kết hợp áo khoác denim cùng áo thun trắng/sơ mi và quần ống rộng, công thức này sẽ mang đến vẻ ngoài thanh lịch, trẻ trung. Thú vị hơn, hãy thử mix áo khoác denim với váy điệu đà. Combo này rất nữ tính mà vẫn toát lên vẻ phong cách, thời thượng.</p>
                        <p className="text-start my-2"><strong>Chân váy denim</strong></p>
                        <p className="text-start"><img data-thumb="original" original-height="825" original-width="660" src="https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-4.jpg?v=1646494746603" /></p>
                        <p className="text-start">Chân váy denim cũng đang là xu hướng. Giờ chị em bổ sung item này cho tủ đồ thì sẽ mặc được quanh năm suốt tháng. Chân váy denim có sự đan xen giữ nét nữ tính và vẻ bụi bặm, trẻ trung. Đây cũng là một trong những kiểu chân váy dễ mix đồ nhất. Chỉ cần bắt cặp chân váy denim với áo sơ mi/blouse hay một mẫu áo len mỏng bất kỳ trong tủ đồ, chị em dễ dàng có được outfit sành điệu miễn chê.</p>
                        <p className="text-start my-2"><strong>Quần denim ống đứng</strong></p>
                        <p className="text-start my-2"><strong><img data-thumb="original" original-height="825" original-width="660" src="https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-5.jpg?v=1646494807140" /></strong></p>
                        <p className="text-start">Nếu hỏi kiểu quần denim nào đang hot nhất, câu trả lời chắc chắn là jeans ống đứng. Với phom dáng gọn gàng, không quá rộng cũng chẳng hề bó sát, quần denim ống đứng là item dành cho mọi nàng. Không chỉ toát lên nét trẻ trung, quần denim ống đứng còn được đánh giá cao ở sự thanh lịch. Khi kết hợp item này cùng áo sơ mi, áo len mỏng và sơ vin gọn gàng, chị em sẽ hoàn thiện được outfit đẹp từ công sở ra phố.</p>
                        <p className="text-start my-4"><em>Ảnh: Sưu tầm</em></p>
                    </div>
                    <div>
                        <Form
                            name="wrap"
                            labelCol={{ flex: '110px' }}
                            labelAlign="left"
                            labelWrap
                            wrapperCol={{ flex: 1 }}
                            colon={false}
                            style={{ maxWidth: 1200 }}
                        >
                            <div className="flex flex-wrap gap-4 sm:flex-row flex-col w-full">
                                <Form.Item className="flex-1" style={{ flex: 1 }} name="username" rules={[{ required: true }]}>
                                    <Input className="rounded-sm" placeholder="Họ và tên" />
                                </Form.Item>

                                <Form.Item className="flex-1" style={{ flex: 1 }} name="email" rules={[{ required: true }]}>
                                    <Input className="rounded-sm" placeholder="Email" />
                                </Form.Item>
                            </div>

                            <Form.Item name="content" rules={[{ required: true }]}>
                                <Input.TextArea className="rounded-sm" placeholder="Nội dung" />
                            </Form.Item>

                            <Form.Item className="text-start">
                                <Button type="primary" htmlType="submit" className="bg-blue-cyan uppercase font-bold hover:bg-primary">
                                    Gửi thông tin
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <h3 className="text-left text-lg">Bình luận ({CommmentsData.length})</h3>
                        <List
                            itemLayout="horizontal"
                            dataSource={CommmentsData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar className="w-16 h-16" src={`https://bizweb.dktcdn.net/100/423/358/files/4-kieu-trang-phuc-demin-hot-nhat-5.jpg?v=1646494807140`} />}
                                        title={<Link to="" className="font-bold">{item.user}</Link>}
                                        description={
                                            <div className="flex flex-col">
                                                <span className="text-gray-400">{item.createAt}</span>
                                                <span className="text-gray-600">{item.content}</span>
                                            </div>
                                        }
                                        className="text-left"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}