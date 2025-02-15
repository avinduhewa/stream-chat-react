import React, { Suspense, useState } from 'react';
import clsx from 'clsx';

import { useEmojiContext } from '../../context/EmojiContext';
import { useMessageContext } from '../../context/MessageContext';
import { useProcessReactions } from './hooks/useProcessReactions';

import type { NimbleEmojiProps } from 'emoji-mart';
import type { ReactionResponse } from 'stream-chat';

import type { DefaultStreamChatGenerics } from '../../types/types';
import type { ReactionEmoji } from '../Channel/emojiData';

export type SimpleReactionsListProps<
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
> = {
  /** Additional props to be passed to the [NimbleEmoji](https://github.com/missive/emoji-mart/blob/master/src/components/emoji/nimble-emoji.js) component from `emoji-mart` */
  additionalEmojiProps?: Partial<NimbleEmojiProps>;
  /** Function that adds/removes a reaction on a message (overrides the function stored in `MessageContext`) */
  handleReaction?: (reactionType: string, event: React.BaseSyntheticEvent) => Promise<void>;
  /** An array of the own reaction objects to distinguish own reactions visually */
  own_reactions?: ReactionResponse<StreamChatGenerics>[];
  /** An object that keeps track of the count of each type of reaction on a message */
  reaction_counts?: { [key: string]: number };
  /** A list of the currently supported reactions on a message */
  reactionOptions?: ReactionEmoji[];
  /** An array of the reaction objects to display in the list */
  reactions?: ReactionResponse<StreamChatGenerics>[];
};

const UnMemoizedSimpleReactionsList = <
  StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics
>(
  props: SimpleReactionsListProps<StreamChatGenerics>,
) => {
  const { handleReaction: propHandleReaction, ...rest } = props;

  const { Emoji, emojiConfig } = useEmojiContext('SimpleReactionsList');
  const { handleReaction: contextHandleReaction } = useMessageContext<StreamChatGenerics>(
    'SimpleReactionsList',
  );

  const {
    additionalEmojiProps,
    emojiData,
    getEmojiByReactionType,
    iHaveReactedWithReaction,
    latestReactions,
    latestReactionTypes,
    supportedReactionsArePresent,
    totalReactionCount,
  } = useProcessReactions({ emojiConfig, ...rest });

  const [tooltipReactionType, setTooltipReactionType] = useState<string | undefined>(undefined);

  const handleReaction = propHandleReaction || contextHandleReaction;

  if (!latestReactions.length) return null;

  if (!supportedReactionsArePresent) return null;

  const getUsersPerReactionType = (type: string) =>
    latestReactions
      .map((reaction) => {
        if (reaction.type === type) {
          return reaction.user?.name || reaction.user?.id;
        }
        return null;
      })
      .filter(Boolean);

  return (
    <div className='str-chat__message-reactions-container'>
      <ul
        className='str-chat__simple-reactions-list str-chat__message-reactions'
        data-testid='simple-reaction-list'
        onMouseLeave={() => setTooltipReactionType(undefined)}
      >
        {latestReactionTypes.map((reactionType, i) => {
          const emojiObject = getEmojiByReactionType(reactionType);
          const isOwnReaction = iHaveReactedWithReaction(reactionType);

          return emojiObject ? (
            <li
              className={clsx('str-chat__simple-reactions-list-item', {
                'str-chat__message-reaction-own': isOwnReaction,
              })}
              key={`${emojiObject.id}-${i}`}
              onClick={(event) => handleReaction(reactionType, event)}
              onKeyUp={(event) => handleReaction(reactionType, event)}
            >
              <span onMouseEnter={() => setTooltipReactionType(reactionType)}>
                {
                  <Suspense fallback={null}>
                    <Emoji
                      data={emojiData}
                      emoji={emojiObject}
                      size={13}
                      {...additionalEmojiProps}
                    />
                  </Suspense>
                }
                &nbsp;
              </span>
              {tooltipReactionType === emojiObject.id && (
                <div className='str-chat__simple-reactions-list-tooltip str-chat__tooltip'>
                  <div className='arrow' />
                  {getUsersPerReactionType(tooltipReactionType)?.join(', ')}
                </div>
              )}
            </li>
          ) : null;
        })}
        {
          <li className='str-chat__simple-reactions-list-item--last-number'>
            {totalReactionCount}
          </li>
        }
      </ul>
    </div>
  );
};

export const SimpleReactionsList = React.memo(
  UnMemoizedSimpleReactionsList,
) as typeof UnMemoizedSimpleReactionsList;
