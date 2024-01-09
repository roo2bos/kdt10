import { useEffect, useState } from 'react';
import PostItem from './PostItem';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      // console.log(await res.json());
      const jsonData = await res.json();
      // console.log(jsonData);
      setPosts(jsonData.slice(0, 20));
      /*

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res.data.slice(0, 5)); // 게시물 5개만
      setPosts(res.data.slice(0, 5)); */
    };

    /* setTimeout(() => {
      getPosts();
    }, 2000); */
    getPosts();
  }, []);

  return (
    <div className="PostList">
      <h2>실습3</h2>
      <header>게시판 목록</header>

      <main>
        {posts.length > 0 ? (
          <PostItem posts={posts} />
        ) : (
          <p className="loading">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default PostList;
