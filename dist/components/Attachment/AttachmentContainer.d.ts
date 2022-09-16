import React, { PropsWithChildren } from 'react';
import { AttachmentContainerProps, RenderAttachmentProps, RenderGalleryProps } from './utils';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare const AttachmentWithinContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ attachment, children, componentType, }: React.PropsWithChildren<AttachmentContainerProps<StreamChatGenerics>>) => JSX.Element;
export declare const AttachmentActionsContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ actionHandler, attachment, AttachmentActions, }: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element | null;
export declare const GalleryContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ attachment, Gallery, }: RenderGalleryProps<StreamChatGenerics>) => JSX.Element;
export declare const ImageContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element;
export declare const CardContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element;
export declare const FileContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ attachment, File, }: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element | null;
export declare const AudioContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ attachment, Audio, }: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element;
export declare const MediaContainer: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: RenderAttachmentProps<StreamChatGenerics>) => JSX.Element;
//# sourceMappingURL=AttachmentContainer.d.ts.map