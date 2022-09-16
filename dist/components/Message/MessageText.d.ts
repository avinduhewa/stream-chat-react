import type { StreamMessage } from '../../context';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare type MessageTextProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    customInnerClass?: string;
    customWrapperClass?: string;
    message?: StreamMessage<StreamChatGenerics>;
    theme?: string;
};
export declare const MessageText: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageTextProps<StreamChatGenerics>) => JSX.Element | null;
//# sourceMappingURL=MessageText.d.ts.map