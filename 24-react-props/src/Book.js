import book from './book.jpeg';
function Book({ title, author, price, type }) {
  return (
    <div className="wrap">
      <h1 className="title">이번주 베스트셀러</h1>
      <p>
        {/* <img
          src="https://images.chosun.com/resizer/8XKhZ-VBsGdkWcpaDaMqW3o6hSI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/QRRQLPWHMZHQHOZMWJB5JYHPAI.jpg"
          alt=""
          width="150"
        /> */}
        <img src={book} alt="" width="150" />
      </p>
      <h3>{title}</h3>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
    </div>
  );
}
Book.defaultProps = {
  name: '볶음밥',
};
export default Book;
