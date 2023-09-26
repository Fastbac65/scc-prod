import PropTypes from 'prop-types';
import { useMemo, useState, useEffect, useContext, useCallback, createContext, useReducer } from 'react';
// firebase
import { auth, db, rtdb } from 'src/lib/createFirebaseApp';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { connectAuthEmulator } from 'firebase/auth';
// import useSWR from 'swr';
//
import { defaultSettings } from './config-setting';
import reducer from './reducer';
import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
// import { onValue, ref } from 'firebase/database';

// ----------------------------------------------------------------------
// if (process.env.NODE_ENV_T === 'development') {
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

// console.log(db, auth);
const initialState = {
  // reducer
  alert: { open: false, severity: 'info', message: '', variant: 'filled', color: '', duration: 1000, posn: 'bottom' },
  modal: { open: false, title: '', content: '' },
  loadingSpinner: false,
  // themeMode, themeDirection etc..
  themeMode: 'dark',
  // toggle Mode
  onToggleMode: () => {},
  // Global state vars
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

// context settings hook
export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be used inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

export function SettingsProvider({ children }) {
  // const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [themeMode, setThemeMode] = useState(initialState.themeMode);
  const [member, setMember] = useState(null);
  const [members, setMembers] = useState(null);
  const [posts, setPosts] = useState(null);
  // allows us to hold a page switch in certain circumstances e.g. on social sign up we need time to check the backend for existing accounts before 'user' state changes the route
  const [holdRouter, setHoldRouter] = useState(false);

  const [user, loading] = useAuthState(auth);

  // const purchaseRef = ref(db, 'purchases/');
  // const custRef = ref(db, 'customers/');
  const host = process.env.NODE_ENV === 'development' ? 'http://192.168.0.220:5002' : 'https://southcurlcurlslsc.com.au';

  // const fetcher = (url) =>
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       api_key: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
  //     }),
  //   }).then((res) => res.json());

  // useSWR against API listener
  // const { data, isLoading } = useSWR('https://scc-serverapi.vercel.app/api/posts', fetcher);
  // useEffect(() => {
  //   if (isLoading) return;
  //   setPosts(data);
  //   console.log('useSWR set posts');
  // }, [data, isLoading]);

  useEffect(() => {
    let listener = () => {}; // member account details listener needed so that account pages reflect updates
    if (user) {
      listener = onSnapshot(doc(db, 'members', user.uid), (snapshot) => {
        if (snapshot.data()) {
          setMember(snapshot.data());
        }
      });
    } else {
      setMember(null);
    }
    return () => {
      // unsubscribe listeners
      listener();
    };
  }, [user]);

  // realtime db posts listener
  // useEffect(() => {
  //   const postsRef = ref(rtdb, 'Posts');
  //   const rtPostListener = onValue(
  //     postsRef,
  //     (snapshot) => {
  //       if (snapshot.val()) {
  //         const posts = Object?.values(snapshot.val());
  //         // const sortedPosts = posts.toSorted(compareFn);
  //         posts.sort(compareFn);
  //         console.log(posts);
  //         setPosts([...posts]);
  //       }
  //     },
  //     (error) => {
  //       console.log(error, error.message);
  //     }
  //   );
  //   // sort desc funct.. bigger stays lowest in array
  //   function compareFn(a, b) {
  //     if (a.data.timestamp > b.data.timestamp) {
  //       return -1;
  //     } else if (a.data.timestamp < b.data.timestamp) {
  //       return 1;
  //     }
  //     return 0;
  //   }

  //   return () => {
  //     rtPostListener();
  //   };
  // }, []);

  useEffect(() => {
    try {
      const membersListener = onSnapshot(
        collection(db, 'members'),
        (snapshot) => {
          const docs = [];

          snapshot.forEach((doc) => {
            docs.push({ uid: doc.id, data: doc.data() });
          });
          setMembers([...docs]);
        },
        (error) => {
          console.log(error);
        }
      );
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      const postsListener = onSnapshot(
        q,
        (snapshot) => {
          const docs = [];

          snapshot.forEach((doc) => {
            docs.push({ id: doc.id, data: doc.data() });
          });
          setPosts([...docs]);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        // unsubscribe listeners
        membersListener();
        postsListener();
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  // looks for cookie in local storage with thememode - so that theme persists across tabs
  useEffect(() => {
    const mode = getCookie('themeMode') || defaultSettings.themeMode;
    setThemeMode(mode);
  }, []);

  // Mode
  const onToggleMode = useCallback(() => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(value);
    setCookie('themeMode', value);
  }, [themeMode]);

  const memoizedValue = useMemo(
    () => ({
      // reducer
      state,
      dispatch,
      // Mode
      themeMode,
      onToggleMode,
      loading,
      user,
      member,
      members,
      posts,
      holdRouter,
      setHoldRouter,
      host,
    }),
    [
      // dependency array
      // reducer
      state,
      dispatch,
      // the rest
      themeMode,
      onToggleMode,
      loading,
      user,
      member,
      members,
      posts,
      holdRouter,
      setHoldRouter,
      host,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function getCookie(name) {
  if (typeof document === 'undefined') {
    throw new Error('getCookie() is not supported on the server. Fallback to a different value when rendering on the server.');
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts[1].split(';').shift();
  }
  return undefined;
}

function setCookie(name, value, exdays = 3) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// function removeCookie(name) {
//   document.cookie = `${name}=;path=/;max-age=0`;
// }
