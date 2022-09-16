import React from 'react';
import { LoadingIndicator } from '../Loading';
var UnMemoizedLoadMoreButton = function (props) {
    var _a = props.children, children = _a === void 0 ? 'Load more' : _a, onClick = props.onClick, refreshing = props.refreshing;
    return (React.createElement("div", { className: 'str-chat__load-more-button' },
        React.createElement("button", { "aria-label": 'Load More Channels', className: 'str-chat__load-more-button__button str-chat__cta-button', "data-testid": 'load-more-button', disabled: refreshing, onClick: onClick }, refreshing ? React.createElement(LoadingIndicator, null) : children)));
};
export var LoadMoreButton = React.memo(UnMemoizedLoadMoreButton);
