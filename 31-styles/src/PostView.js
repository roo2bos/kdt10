import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/Board.scss';

function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const getPost = useCallback(async () => {
    console.log('data fetching....');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // console.log(await res.json());
    const jsonData = await res.json();
    // console.log(jsonData);
    setPost(jsonData);

    /* const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return setPost(res.data); */
  }, [id]);
  useEffect(() => {
    getPost();
    /* setTimeout(() => {
      getPost();
    }, 2000); */
  }, [getPost]);
  return (
    <>
      <div className="postView">
        <h2>실습3</h2>
        <header>게시판 상세</header>
        <main>
          {post.id ? (
            <>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </>
          ) : (
            '로딩 중...'
          )}
        </main>
        <footer>
          <Link to="/list">목록</Link>
        </footer>
      </div>
    </>
  );
}
export default PostView;
