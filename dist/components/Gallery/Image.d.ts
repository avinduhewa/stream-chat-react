import type { Attachment } from 'stream-chat';
import type { DefaultStreamChatGenerics, Dimensions } from '../../types/types';
export declare type ImageProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    dimensions?: Dimensions;
} & ({
    /** The text fallback for the image */
    fallback?: string;
    /** The full size image url */
    image_url?: string;
    /** The thumb url */
    thumb_url?: string;
} | Attachment<StreamChatGenerics>);
/**
 * A simple component that displays an image.
 */
export declare const ImageComponent: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ImageProps<StreamChatGenerics>) => JSX.Element;
//# sourceMappingURL=Image.d.ts.map