import React, { PropsWithChildren, ReactNode } from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';

import type { ATTACHMENT_GROUPS_ORDER } from './Attachment';
import { AttachmentActions as DefaultAttachmentActions } from './AttachmentActions';
import { Audio as DefaultAudio } from './Audio';
import { Card as DefaultCard } from './Card';
import { FileAttachment as DefaultFile } from './FileAttachment';
import { Gallery as DefaultGallery, ImageComponent as DefaultImage } from '../Gallery';

import type { Attachment } from 'stream-chat';
import type { AttachmentProps } from './Attachment';
import type { DefaultStreamChatGenerics } from '../../types/types';

export const SUPPORTED_VIDEO_FORMATS = ['video/mp4', 'video/ogg', 'video/webm', 'video/quicktime'];

export type AttachmentComponentType = typeof ATTACHMENT_GROUPS_ORDER[number];

export type GroupedRenderedAttachment = Record<AttachmentComponentType, ReactNode[]>;

export type GalleryAttachment<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
> = {
  images: Attachment<StreamChatGenerics>[];
  type: 'gallery';
};

export type AttachmentContainerProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
> = {
  attachment: Attachment<StreamChatGenerics> | GalleryAttachment<StreamChatGenerics>;
  componentType: AttachmentComponentType;
};

export type RenderAttachmentProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
> = Omit<AttachmentProps<StreamChatGenerics>, 'attachments'> & {
  attachment: Attachment<StreamChatGenerics>;
};

export type RenderGalleryProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
> = Omit<AttachmentProps<StreamChatGenerics>, 'attachments'> & {
  attachment: GalleryAttachment<StreamChatGenerics>;
};

export const isScrapedContent = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  attachment: Attachment<StreamChatGenerics>,
) => attachment.og_scrape_url || attachment.title_link;

export const isUploadedImage = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  attachment: Attachment<StreamChatGenerics>,
) => attachment.type === 'image' && !isScrapedContent(attachment);

export const isGalleryAttachmentType = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  output: Attachment<StreamChatGenerics> | GalleryAttachment<StreamChatGenerics>,
): output is GalleryAttachment<StreamChatGenerics> => Array.isArray(output.images);

export const isAudioAttachment = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  attachment: Attachment<StreamChatGenerics>,
) => attachment.type === 'audio';

export const isFileAttachment = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  attachment: Attachment<StreamChatGenerics>,
) =>
  attachment.type === 'file' ||
  (attachment.mime_type &&
    SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type) === -1 &&
    attachment.type !== 'video');

export const isMediaAttachment = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  attachment: Attachment<StreamChatGenerics>,
) =>
  (attachment.mime_type && SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type) !== -1) ||
  attachment.type === 'video';

export const isSvgAttachment = (attachment: Attachment) => {
  const filename = attachment.fallback || '';
  return filename.toLowerCase().endsWith('.svg');
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AttachmentWithinContainer`
 */
export const renderAttachmentWithinContainer = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: PropsWithChildren<AttachmentContainerProps<StreamChatGenerics>>,
) => {
  const { attachment, children, componentType } = props;
  const isGAT = isGalleryAttachmentType(attachment);
  let extra = '';

  if (!isGAT) {
    extra =
      componentType === 'card' && !attachment?.image_url && !attachment?.thumb_url
        ? 'no-image'
        : attachment?.actions?.length
        ? 'actions'
        : '';
  }

  const classNames = clsx('str-chat__message-attachment', {
    [`str-chat__message-attachment--${componentType}`]: componentType,
    [`str-chat__message-attachment--${attachment?.type}`]: attachment?.type,
    [`str-chat__message-attachment--${componentType}--${extra}`]: componentType && extra,
    'str-chat__message-attachment--svg-image': isSvgAttachment(attachment),
    'str-chat__message-attachment-with-actions': extra === 'actions', // added for theme V2 (better readability)
  });

  return <div className={classNames}>{children}</div>;
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AttachmentActionsContainer`
 */
export const renderAttachmentActions = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { actionHandler, attachment, AttachmentActions = DefaultAttachmentActions } = props;

  if (!attachment.actions?.length) return null;

  return (
    <AttachmentActions
      {...attachment}
      actionHandler={(event, name, value) => actionHandler?.(event, name, value)}
      actions={attachment.actions}
      id={attachment.id || ''}
      key={`key-actions-${attachment.id}`}
      text={attachment.text || ''}
    />
  );
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/GalleryContainer`
 */
export const renderGallery = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderGalleryProps<StreamChatGenerics>,
) => {
  const { attachment, Gallery = DefaultGallery } = props;

  return renderAttachmentWithinContainer({
    attachment,
    children: <Gallery images={attachment.images || []} key='gallery' />,
    componentType: 'gallery',
  });
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/ImageContainer`
 */
export const renderImage = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { attachment, Image = DefaultImage } = props;

  if (attachment.actions && attachment.actions.length) {
    return renderAttachmentWithinContainer({
      attachment,
      children: (
        <div className='str-chat__attachment' key={`key-image-${attachment.id}`}>
          {<Image {...attachment} />}
          {renderAttachmentActions(props)}
        </div>
      ),
      componentType: 'image',
    });
  }

  return renderAttachmentWithinContainer({
    attachment,
    children: <Image {...attachment} key={`key-image-${attachment.id}`} />,
    componentType: 'image',
  });
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/CardContainer`
 */
export const renderCard = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { attachment, Card = DefaultCard } = props;

  if (attachment.actions && attachment.actions.length) {
    return renderAttachmentWithinContainer({
      attachment,
      children: (
        <div className='str-chat__attachment' key={`key-image-${attachment.id}`}>
          <Card {...attachment} key={`key-card-${attachment.id}`} />
          {renderAttachmentActions(props)}
        </div>
      ),
      componentType: 'card',
    });
  }

  return renderAttachmentWithinContainer({
    attachment,
    children: <Card {...attachment} key={`key-card-${attachment.id}`} />,
    componentType: 'card',
  });
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/FileContainer`
 */
export const renderFile = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { attachment, File = DefaultFile } = props;

  if (!attachment.asset_url) return null;

  return renderAttachmentWithinContainer({
    attachment,
    children: <File attachment={attachment} key={`key-file-${attachment.id}`} />,
    componentType: 'file',
  });
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AudioContainer`
 */
export const renderAudio = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { attachment, Audio = DefaultAudio } = props;

  return renderAttachmentWithinContainer({
    attachment,
    children: (
      <div className='str-chat__attachment' key={`key-video-${attachment.id}`}>
        <Audio og={attachment} />
      </div>
    ),
    componentType: 'audio',
  });
};

/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/MediaContainer`
 */
export const renderMedia = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: RenderAttachmentProps<StreamChatGenerics>,
) => {
  const { attachment, Media = ReactPlayer } = props;

  if (attachment.actions?.length) {
    return renderAttachmentWithinContainer({
      attachment,
      children: (
        <div
          className='str-chat__attachment str-chat__attachment-media'
          key={`key-video-${attachment.id}`}
        >
          <div className='str-chat__player-wrapper'>
            <Media
              className='react-player'
              controls
              height='100%'
              url={attachment.asset_url}
              width='100%'
            />
          </div>
          {renderAttachmentActions(props)}
        </div>
      ),
      componentType: 'media',
    });
  }

  return renderAttachmentWithinContainer({
    attachment,
    children: (
      <div className='str-chat__player-wrapper' key={`key-video-${attachment.id}`}>
        <Media
          className='react-player'
          controls
          height='100%'
          url={attachment.asset_url}
          width='100%'
        />
      </div>
    ),
    componentType: 'media',
  });
};

export const getImageAttachmentConfiguration = (attachment: Attachment, element: HTMLElement) => {
  const url = new URL(
    (attachment.img_url || attachment.image_url || attachment.thumb_url || '') as string,
  );
  const { height, resizeDimensions } = getSizingRestrictions(url, element);

  if (resizeDimensions) {
    // Apply 2x for retina displays
    resizeDimensions.height *= 2;
    resizeDimensions.width *= 2;
    addResizingParamsToUrl(resizeDimensions, url);
  }

  return {
    height,
    url: url.href,
  };
};

export const getVideoAttachmentConfiguration = (
  attachment: Attachment,
  element: HTMLElement,
  shouldGenerateVideoThumbnail: boolean,
) => {
  let attachmentHeight = ``;
  let thumbUrl = undefined;
  if (attachment.thumb_url && shouldGenerateVideoThumbnail) {
    const url = new URL(attachment.thumb_url);
    const { height, resizeDimensions } = getSizingRestrictions(url, element);

    if (resizeDimensions) {
      // Apply 2x for retina displays
      resizeDimensions.height *= 2;
      resizeDimensions.width *= 2;
      addResizingParamsToUrl(resizeDimensions, url);
    }
    thumbUrl = url.href;
    attachmentHeight = height;
  } else {
    const cssSizeRestriction = getCSSSizeRestrictions(element);
    attachmentHeight = `${cssSizeRestriction.maxHeight || cssSizeRestriction.height || ''}px`;
  }
  return {
    height: attachmentHeight,
    thumbUrl,
    url: attachment.asset_url || '',
  };
};

const getSizingRestrictions = (url: URL, htmlElement: HTMLElement) => {
  const urlParams = url.searchParams;
  const originalHeight = Number(urlParams.get('oh')) || 1;
  const originalWidth = Number(urlParams.get('ow')) || 1;
  const cssSizeRestriction = getCSSSizeRestrictions(htmlElement);
  let resizeDimensions: { height: number; width: number } | undefined;
  let height = '';

  if ((cssSizeRestriction.maxHeight || cssSizeRestriction.height) && cssSizeRestriction.maxWidth) {
    resizeDimensions = getResizeDimensions(
      originalHeight,
      originalWidth,
      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      cssSizeRestriction.maxHeight || cssSizeRestriction.height!,
      cssSizeRestriction.maxWidth,
    );
    if (cssSizeRestriction.maxHeight) {
      // Calculate height because only max-height is provided
      const heightNum =
        originalHeight > 1 && originalWidth > 1
          ? originalHeight <= cssSizeRestriction.maxHeight &&
            originalWidth <= cssSizeRestriction.maxWidth
            ? originalHeight
            : Math.round(
                Math.min(
                  cssSizeRestriction.maxHeight,
                  (cssSizeRestriction.maxWidth / originalWidth) * originalHeight,
                ),
              )
          : cssSizeRestriction.maxHeight;
      height = `${heightNum}px`;
    }
  } else {
    resizeDimensions = undefined;
  }

  return { height, resizeDimensions };
};

const getResizeDimensions = (
  originalHeight: number,
  originalWidth: number,
  maxHeight: number,
  maxWidth: number,
) => ({
  height: Math.round(Math.max(maxHeight, (maxWidth / originalWidth) * originalHeight)),
  width: Math.round(Math.max(maxHeight, (maxWidth / originalHeight) * originalWidth)),
});

const getCSSSizeRestrictions = (htmlElement: HTMLElement) => {
  const computedStylesheet = getComputedStyle(htmlElement);
  const height = getValueRepresentationOfCSSProperty(computedStylesheet.getPropertyValue('height'));
  const maxHeight = getValueRepresentationOfCSSProperty(
    computedStylesheet.getPropertyValue('max-height'),
  );
  const maxWidth = getValueRepresentationOfCSSProperty(
    computedStylesheet.getPropertyValue('max-width'),
  );

  if (!((height || maxHeight) && maxWidth)) {
    console.warn(
      `Invalid value set for height/max-height and/or max-width for HTML element, this can cause scrolling issues inside the message list, more info https://getstream.io/chat/docs/sdk/react/message-components/attachment/#image-and-video-sizing`,
    );
  }

  return { height, maxHeight, maxWidth };
};

const getValueRepresentationOfCSSProperty = (property: string) =>
  Number(property.replace('px', '')) || undefined;

const addResizingParamsToUrl = (resizeDimensions: { height: number; width: number }, url: URL) => {
  url.searchParams.set('h', resizeDimensions.height.toString());
  url.searchParams.set('w', resizeDimensions.width.toString());
};
