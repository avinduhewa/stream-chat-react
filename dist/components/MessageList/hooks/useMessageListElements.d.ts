import React from 'react';
import { GroupStyle } from '../utils';
import type { UserResponse } from 'stream-chat';
import type { MessageProps } from '../../Message/types';
import type { StreamMessage } from '../../../context/ChannelStateContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
declare type MessagePropsToOmit = 'channel' | 'groupStyles' | 'initialMessage' | 'lastReceivedId' | 'message' | 'readBy' | 'threadList';
declare type UseMessageListElementsProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    enrichedMessages: StreamMessage<StreamChatGenerics>[];
    internalMessageProps: Omit<MessageProps<StreamChatGenerics>, MessagePropsToOmit>;
    messageGroupStyles: Record<string, GroupStyle>;
    onMessageLoadCaptured: (event: React.SyntheticEvent<HTMLLIElement, Event>) => void;
    returnAllReadData: boolean;
    threadList: boolean;
    read?: Record<string, {
        last_read: Date;
        user: UserResponse<StreamChatGenerics>;
    }>;
};
export declare const useMessageListElements: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: UseMessageListElementsProps<StreamChatGenerics>) => React.ReactNode[];
export {};
//# sourceMappingURL=useMessageListElements.d.ts.map