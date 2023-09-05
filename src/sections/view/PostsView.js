// ----------------------------------------------------------------------
import Posts from '../posts/Posts';
import RecentPosts from '../posts/RecentPosts';
import SinglePostShare from '../posts/SinglePostShare';
// import RecentPosts from '../posts/RecentPosts';
// ----------------------------------------------------------------------

export default function PostsView({ staticPosts, staticPost }) {
  return (
    <>
      {/* <RecentPosts staticPosts={staticPosts.slice(0, 6)} /> */}
      <SinglePostShare post={staticPost} />
      <RecentPosts staticPosts={staticPosts.filter((post) => post.id !== staticPost.id)} />
      <Posts staticPosts={staticPosts} />
      {/* <Posts staticPosts={staticPosts.slice(6)} /> */}
    </>
  );
}
