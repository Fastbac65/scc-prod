import { getStaticPaths } from '../posts/[id]';

const mainPages = ['/', '/ourclub', '/venuehire', '/nippers', '/competitors', '/patrol', '/training'];

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.body.api_key !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('Not Authorised To Access This API');
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    if (req.body.path !== '') {
      if (req.body.path === 'all') {
        const staticPaths = await getStaticPaths(); // returns { paths: [params: {id: post.id}]}
        console.log(staticPaths);
        console.log(mainPages);

        // get an array of promises
        const revalidatePaths = staticPaths.paths.map((path) => res.revalidate(`/posts/${path.params.id}`));

        await Promise.all(mainPages.map((path) => res.revalidate(path)));
        await Promise.all([...revalidatePaths]);
        return res.status(200).json({ revalidated: 'all paths OK' });
      } else {
        await res.revalidate(req.body.path);
        return res.status(200).json({ revalidated: req.body.path });
      }
    } else return res.json({ error: 'no path specified' });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ reason: 'Error revalidating', error: err });
    console.log(err);
  }
}
