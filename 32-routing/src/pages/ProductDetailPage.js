import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const targetProduct = productInfos[Number(productId) - 1];
  const { id, name, email, body } = targetProduct;
  console.log(useParams());
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>

      <ul>
        <li>
          <strong>상품번호:</strong> {id}
        </li>
        <li>
          <strong>작성자:</strong> {name}
        </li>
        <li>
          <strong>이메일:</strong> {email}
        </li>
        <li>
          <strong>상세 설명 :</strong> <p style={{ marginTop: 0 }}>{body}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
