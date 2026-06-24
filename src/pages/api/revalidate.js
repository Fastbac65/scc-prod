import { getStaticPaths } from '../posts/[id]';

const mainPages = ['/', '/ourclub', '/venuehire', '/nippers', '/competitors', '/patrol', '/training'];

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.body.api_key !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('Not Authorised To Access This API');
  }

  try {
    if (!req.body.path) {
      return res.json({ error: 'no path specified' });
    }
    if (req.body.path === 'all') {
      const staticPaths = await getStaticPaths();
      const postPaths = staticPaths.paths.map((path) => res.revalidate(`/posts/${path.params.id}`));
      await Promise.all([...mainPages.map((path) => res.revalidate(path)), ...postPaths]);
      return res.status(200).json({ revalidated: 'all paths OK' });
    } else {
      await res.revalidate(req.body.path);
      return res.status(200).json({ revalidated: req.body.path });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ reason: 'Error revalidating', error: err.message });
  }
}
