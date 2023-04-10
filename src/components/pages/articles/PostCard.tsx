import { FC, HTMLProps } from "react";
import { ArticlePost } from "~/services";
interface Props extends HTMLProps<HTMLDivElement> {
  post: ArticlePost;
}
const PostCard: FC<Props> = ({ post, ...props }) => {
  return (
    <div {...props} className="w-64 shadow-md cursor-pointer">
      <img src={post.featuredImage.url} />
      <p>{post.createdAt.toString().slice(0, 10)}</p>
      <p>{post.title}</p>
    </div>
  );
};

export default PostCard;
