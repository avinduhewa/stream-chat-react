import React from 'react';
import type { StreamMessage } from '../../../context/ChannelStateContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare type UseScrollLocationLogicParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    hasMoreNewer: boolean;
    listElement: HTMLDivElement | null;
    suppressAutoscroll: boolean;
    currentUserId?: string;
    messages?: StreamMessage<StreamChatGenerics>[];
    scrolledUpThreshold?: number;
};
export declare const useScrollLocationLogic: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: UseScrollLocationLogicParams<StreamChatGenerics>) => {
    hasNewMessages: boolean;
    isMessageListScrolledToBottom: boolean;
    onMessageLoadCaptured: () => void;
    onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
    scrollToBottom: () => void;
    wrapperRect: DOMRect | undefined;
};
//# sourceMappingURL=useScrollLocationLogic.d.ts.map