import React, { useState } from "react";
import Articles from "./Articles";
import "./App.css";

const App = () => {
  const [originalArticles, setOriginalArticles] = useState([
    {
      img: "https://media.techmaster.vn/api/static/OH6Sopmw/-PPXaoWP",
      title: "CSS Box Shadows và Text Shadows",
      date: "2023-06-25",
      content:
        "CSS có đầy đủ các tùy chọn để nâng cao giao diện cho các trang web của bạn; text và box shadows là những ví dụ điển hình. Chúng cung cấp kết quả tương tự như shadows được tìm thấy trong phần mềm chỉnh sửa hình ảnh như Photoshop.",
    },
    {
      img: "https://media.techmaster.vn/api/static/OH6Sopmw/7sB8SBOK",
      title: "Cách sử dụng CSS text-shadow: 11 thủ thuật và ví dụ",
      date: "2023-06-24",
      content:
        "Bạn thích và có đam mê với lập trình, muốn thỏa sức sáng tạo ra những ứng dụng di động đẹp mắt, thân thiện với người dùng. Hãy học Lập trình di động Flutter, cơ hội có được đầy đủ kiến thức nền tảng từ cơ bản đến nâng cao, hoàn chỉnh về cả giao diện UI/UX, mở ra cánh cửa tương lai sáng tạo trong ngành công nghiệp phát triển ứng dụng di động.",
    },
    {
      img: "https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/WCv5JHnA",
      title: "Học Lập trình di động Flutter ",
      date: "2023-06-23",
      content:
        "Trong Flutter thì (gần như) mọi thứ đều là widget. Nhưng cũng chính vì lý do đó nên lập trình viên đôi khi sẽ khó lựa chọn đôi khi không biết đến sự tồn tại của widget đó.",
    },
  ]);

  const [articles, setArticles] = useState(originalArticles);

  const handleSearch = (event) => {
    const keyword = event.target.value; // Lấy từ khóa tìm kiếm từ trường input
    const filteredArticles = originalArticles.filter((article) =>
      article.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setArticles(filteredArticles);
  };

  const handleSort = () => {
    const sortedArticles = [...articles].sort((a, b) => {
      // Sắp xếp theo thời gian đăng mới nhất đến cũ nhất
      return new Date(b.date) - new Date(a.date);
    });
    setArticles(sortedArticles);
  };

  return (
    <>
      <div className="container">
        <header>
          <section>
            <input
              type="text"
              placeholder="Nhập từ khóa..."
              onChange={handleSearch}
            />
            <button onClick={handleSort} className="search">
              Tìm kiếm
            </button>
          </section>
        </header>

        <main>
          <Articles articles={articles} />
        </main>

        <footer></footer>
      </div>
    </>
  );
};

export default App;
