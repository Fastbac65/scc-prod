// ----------------------------------------------------------------------
import Posts from '../posts/Posts';
import PostsShareAll from '../posts/PostsShareAll';
import RecentPosts from '../posts/RecentPosts';
import SinglePostShare from '../posts/SinglePostShare';
// import RecentPosts from '../posts/RecentPosts';
// ----------------------------------------------------------------------

export default function PostsView({ staticPosts, staticPost }) {
  return (
    <>
      {/* <RecentPosts staticPosts={staticPosts.slice(0, 6)} /> */}
      <SinglePostShare post={staticPost} />
      <PostsShareAll staticPosts={staticPosts?.filter((post) => post.id !== staticPost?.id)} sharedPostId={staticPost?.id} />
      {/* <Posts staticPosts={staticPosts} /> */}
      {/* <Posts staticPosts={staticPosts.slice(6)} /> */}
    </>
  );
}
