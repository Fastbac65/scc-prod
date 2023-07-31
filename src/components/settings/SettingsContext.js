import PropTypes from 'prop-types';
import { useMemo, useState, useEffect, useContext, useCallback, createContext, useReducer } from 'react';
// firebase
import { auth, db } from 'src/lib/createFirebaseApp';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { connectAuthEmulator } from 'firebase/auth';

//
import { defaultSettings } from './config-setting';
import reducer from './reducer';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';

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
  const host = process.env.NODE_ENV === 'development' ? 'https://scc-prod.vercel.app' : 'https://scc-prod.vercel.app';

  useEffect(() => {
    let listener = () => {};

    if (user) {
      console.log('user loaded', user);

      listener = onSnapshot(doc(db, 'members', user.uid), (snapshot) => {
        if (snapshot.data()) {
          console.log('member loaded', snapshot.data());
          setMember(snapshot.data());
        }
      });
    } else {
      console.log('App logged out');
      setMember(null);
    }
    return () => {
      // unsubscribe listeners
      listener();
    };
  }, [user]);

  useEffect(() => {
    const membersListener = onSnapshot(collection(db, 'members'), (snapshot) => {
      const docs = [];

      snapshot.forEach((doc) => {
        docs.push({ uid: doc.id, data: doc.data() });
      });
      console.log('members loaded', docs);
      setMembers([...docs]);
    });
    const q = query(collection(db, 'Posts'), orderBy('timestamp', 'desc'));
    const postsListener = onSnapshot(q, (snapshot) => {
      const docs = [];

      snapshot.forEach((doc) => {
        docs.push({ id: doc.id, data: doc.data() });
      });
      console.log('posts loaded', docs);
      setPosts([...docs]);
    });

    return () => {
      // unsubscribe listeners
      membersListener();
      postsListener();
    };
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
