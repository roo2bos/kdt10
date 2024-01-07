import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
//useCallback : 매번 함수를 생성하지 않고 기억해두었다가 필요할 때마다 재사용
function UseCallBackEx2({ postId }) {
  const [post, setPost] = useState({});

  //[before]
  /* const getPost = async () => {
    console.log('data fetching....');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return setPost(res.data);
  }; */

  //[after]
  //useCallback 훅으로 메모이제이션(캐싱) -> 의존성 배열에 있는 postId가 변경 되지 않는 한,
  // 함수는 다시 생성 x
  const getPost = useCallback(async () => {
    console.log('data fetching....');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return setPost(res.data);
  }, [postId]);
  console.log(post);
  //useEffect 의존성 배열에 '함수'
  //컴포넌트가 리렌더링 -> 함수 재생성(주소값 변경) -> getPost 재호출
  useEffect(() => {
    getPost();
  }, [getPost]);
  return (
    <>
      <h1>useCallback ex2</h1>
      {post.id ? <div>{post.title}</div> : '로딩 중...'}
    </>
  );
}
export default UseCallBackEx2;
