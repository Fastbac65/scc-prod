// next
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------
// router object: {
// pathname: what ever is after /pages
// query: obj : ?xy=..   query string parsed into an object
// asPath: string path as shown in the browser including search params and respecting trailing slash
// router.push(url, as, options)

export default function useActiveLink(path, deep = true) {
  const { pathname, asPath } = useRouter();

  const checkPath = path.startsWith('#');

  const currentPath = path === '/' ? '/' : `${path}`;

  const normalActive = (!checkPath && pathname === currentPath) || (!checkPath && asPath === currentPath);

  const deepActive = (!checkPath && pathname.includes(currentPath)) || (!checkPath && asPath.includes(currentPath));

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path.includes('http'),
  };
}
