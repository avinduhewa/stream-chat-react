import type { UserResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { StreamMessage } from '../../context/ChannelStateContext';
declare type ProcessMessagesParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    messages: StreamMessage<StreamChatGenerics>[];
    userId: string;
    /** Enable date separator */
    enableDateSeparator?: boolean;
    /** Enable deleted messages to be filtered out of resulting message list */
    hideDeletedMessages?: boolean;
    /** Disable date separator display for unread incoming messages */
    hideNewMessageSeparator?: boolean;
    /** Sets the treshold after everything is considered unread */
    lastRead?: Date | null;
    /** Signals whether to separate giphy preview as well as used to set the giphy preview state */
    setGiphyPreviewMessage?: React.Dispatch<React.SetStateAction<StreamMessage<StreamChatGenerics> | undefined>>;
};
/**
 * processMessages - Transform the input message list according to config parameters
 *
 * Inserts date separators btw. messages created on different dates or before unread incoming messages. By default:
 * - enabled in main message list
 * - disabled in virtualized message list
 * - disabled in thread
 *
 * Allows to filter out deleted messages, contolled by hideDeletedMessages param. This is disabled by default.
 *
 * Sets Giphy preview message for VirtualizedMessageList
 *
 * The only required params are messages and userId, the rest are config params:
 *
 * @return {StreamMessage<StreamChatGenerics>[]} Transformed list of messages
 */
export declare const processMessages: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: ProcessMessagesParams<StreamChatGenerics>) => StreamMessage<StreamChatGenerics>[];
export declare const makeDateMessageId: (date?: string | Date) => string;
export declare const getLastReceived: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(messages: StreamMessage<StreamChatGenerics>[]) => string | null;
export declare const getReadStates: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(messages: StreamMessage<StreamChatGenerics>[], read: Record<string, {
    last_read: Date;
    user: UserResponse<StreamChatGenerics>;
}> | undefined, returnAllReadData: boolean) => Record<string, UserResponse<StreamChatGenerics>[]>;
export declare const insertIntro: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(messages: StreamMessage<StreamChatGenerics>[], headerPosition?: number) => StreamMessage<StreamChatGenerics>[];
export declare type GroupStyle = '' | 'middle' | 'top' | 'bottom' | 'single';
export declare const getGroupStyles: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: StreamMessage<StreamChatGenerics>, previousMessage: StreamMessage<StreamChatGenerics>, nextMessage: StreamMessage<StreamChatGenerics>, noGroupByUser: boolean) => GroupStyle;
export declare const hasMoreMessagesProbably: (returnedCountMessages: number, limit: number) => boolean;
export declare const hasNotMoreMessages: (returnedCountMessages: number, limit: number) => boolean;
export {};
//# sourceMappingURL=utils.d.ts.map