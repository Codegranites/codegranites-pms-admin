'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  MESSAGES,
  MessageProps
} from '../app/(Admin-Dashboard)/admin-messages/content/messages';
import { useStateCtx } from './StateContext';

interface MessageContextProps {
  activeMessageTab: string;
  setActiveMessageTab: React.Dispatch<React.SetStateAction<string>>;
  searchMsg: string;
  setSearchMsg: React.Dispatch<React.SetStateAction<string>>;
  filterSearchMsgs: MessageProps[];

  showBtn: boolean;
  swipeDis: number | null;
  mobileScroll: number | null;
}

export const MessageContext = createContext<MessageContextProps>(
  {} as MessageContextProps
);

const MessageContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [activeMessageTab, setActiveMessageTab] = useState('');
  const { anyModalOpen } = useStateCtx();
  const [searchMsg, setSearchMsg] = useState('');
  const [mobileScroll, setMobileScroll] = useState<number | null>(null);
  const [showBtn, setShowBtn] = useState(true);
  const [swipeDis, setswipeDis] = useState(0);

  const filterMsgs = MESSAGES.filter(msg => {
    if (activeMessageTab === 'all') {
      return msg;
    } else {
      return msg.status === activeMessageTab;
    }
  });

  const filterSearchMsgs = filterMsgs.filter(msg => {
    if (!(searchMsg.length > 1)) {
      return msg;
    }
    return msg.author.toLowerCase().includes(searchMsg.toLowerCase());
  });

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    );
  };

  useEffect(() => {
    if (anyModalOpen) return;
    if (!isMobileDevice()) {
      setMobileScroll(window.scrollY);
    }

    const handleScroll = () => {
      function update() {
        if (mobileScroll !== null) {
          const swipedDis = window.scrollY - mobileScroll;

          const swipeThreshold = 20;

          if (swipedDis > 0) {
            setShowBtn(true);
            // console.log('SHOW');
          } else if (swipedDis < swipeThreshold) {
            setShowBtn(false);
            // console.log('HIDE');
          }
          setMobileScroll(null);
        }
      }
      window.requestAnimationFrame(update);
    };

    const handleSwipeMove = (e: TouchEvent) => {
      setMobileScroll(e.changedTouches[0].screenY);

      function updateMobile() {
        if (mobileScroll !== null) {
          const swipedDis = e.changedTouches[0].screenY - mobileScroll;
          setswipeDis(swipedDis);

          const swipeThreshold = 10;

          if (swipedDis > 0) {
            setShowBtn(true);
          } else if (swipedDis < -swipeThreshold) {
            setShowBtn(false);
          }

          setMobileScroll(null);
        }
      }
      window.requestAnimationFrame(updateMobile);
    };

    if (!isMobileDevice()) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('touchmove', handleSwipeMove);
    }
    return () => {
      window.removeEventListener('touchmove', handleSwipeMove);

      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileScroll, swipeDis, anyModalOpen]);

  useEffect(() => {
    const savedTab = localStorage.getItem('message-tab');
    if (savedTab) {
      setActiveMessageTab(savedTab as string);
    } else {
      setActiveMessageTab('all');
    }
  }, []);

  useEffect(() => {
    if (activeMessageTab === '') return;

    localStorage.setItem('message-tab', activeMessageTab);
  }, [activeMessageTab]);

  const value = useMemo(
    () => ({
      activeMessageTab,
      setActiveMessageTab,
      searchMsg,
      setSearchMsg,
      filterSearchMsgs,
      showBtn,
      swipeDis,
      mobileScroll
    }),
    [
      activeMessageTab,
      searchMsg,
      filterSearchMsgs,
      showBtn,
      swipeDis,
      mobileScroll
    ]
  );

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessageCtx = () => {
  const ctx = useContext(MessageContext);
  if (!ctx) {
    throw new Error(
      'useMessageCtx must be used within a MessageContextProvider'
    );
  }
  return ctx;
};

export default MessageContextProvider;
