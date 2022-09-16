/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import type { Dispatch, SetStateAction } from 'react';
import type { ChannelNotifications } from '../../context/ChannelStateContext';
export declare const makeAddNotifications: (setNotifications: Dispatch<SetStateAction<ChannelNotifications>>, notificationTimeouts: NodeJS.Timeout[]) => (text: string, type: 'success' | 'error') => void;
//# sourceMappingURL=utils.d.ts.map