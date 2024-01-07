function PostItem({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span>{post.id}</span>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default PostItem;
