import { StreamMessage } from '../../../context/ChannelStateContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useUserRole: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: StreamMessage<StreamChatGenerics>, onlySenderCanEdit?: boolean, disableQuotedMessages?: boolean) => {
    canDelete: boolean;
    canEdit: boolean;
    canFlag: boolean;
    canMute: boolean | undefined;
    canQuote: boolean;
    canReact: boolean;
    canReply: boolean;
    isAdmin: boolean;
    isModerator: boolean;
    isMyMessage: boolean;
    isOwner: boolean;
};
//# sourceMappingURL=useUserRole.d.ts.map