import './styles/Board.scss';
import { Link } from 'react-router-dom';
function PostItem({ posts }) {
  return (
    <>
      <ul className="postList">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/article/${post.id}`}>
                <span>No. {post.id}. </span>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default PostItem;
