'use client';
import MessageNav from './content/MessageNav';
import MessageContextProvider, {
  useMessageCtx
} from '../../../context/MessageContext';
import MessageSection from './content/MessageSection';
import MobileMessageSection from './content/MobileMessageSection';
import NewMessageModal from './content/NewMessageModal';
import EmptyMessage from './content/EmptyMessage';
import { cn } from '../../../utils/util';

const MessageAdmin = () => {
  const { searchMsg, filterSearchMsgs } = useMessageCtx();

  return (
    <MessageContextProvider>
      <section className="w-full flex flex-col min-[1350px]:py-[43px] min-[1350px]:px-[70px] sm:p-7 h-full gap-y-6 md:gap-y-8">
        <MessageNav />
        <MessageSection />
        <MobileMessageSection />
        <EmptyMessage />
      </section>
      <NewMessageModal />
    </MessageContextProvider>
  );
};

export default MessageAdmin;
