'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var sanitizeUrl = require('@braintree/sanitize-url');
var ReactPlayer = require('react-player');
var prettybytes = require('pretty-bytes');
var DefaultEmojiIndex = require('emoji-mart/dist/utils/emoji-index/nimble-emoji-index.js');
var Dayjs = require('dayjs');
var calendar = require('dayjs/plugin/calendar');
var LocalizedFormat = require('dayjs/plugin/localizedFormat');
var i18n = require('i18next');
var updateLocale = require('dayjs/plugin/updateLocale');
var localeData = require('dayjs/plugin/localeData');
var relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/de');
require('dayjs/locale/es');
require('dayjs/locale/fr');
require('dayjs/locale/hi');
require('dayjs/locale/it');
require('dayjs/locale/ja');
require('dayjs/locale/ko');
require('dayjs/locale/nl');
require('dayjs/locale/pt');
require('dayjs/locale/ru');
require('dayjs/locale/tr');
require('dayjs/locale/en');
var ImageGallery = require('react-image-gallery');
var reactFileUtils = require('react-file-utils');
var _defineProperty$2 = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray$2 = require('@babel/runtime/helpers/slicedToArray');
var emojiRegex = require('emoji-regex');
var linkify = require('linkifyjs');
var nanoid = require('nanoid');
var RootReactMarkdown = require('react-markdown');
var ReactMarkdown = require('react-markdown/with-html');
var uniqBy = require('lodash.uniqby');
var _extends = require('@babel/runtime/helpers/extends');
var _typeof = require('@babel/runtime/helpers/typeof');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var PropTypes = require('prop-types');
var Textarea = require('react-textarea-autosize');
var getCaretCoordinates = require('textarea-caret');
var reactIs = require('react-is');
var debounce$1 = require('lodash.debounce');
var throttle = require('lodash.throttle');
var streamChat = require('stream-chat');
var deepequal = require('react-fast-compare');
var ReactDOM = require('react-dom');
var reactVirtuoso = require('react-virtuoso');
var nimbleEmoji = require('emoji-mart/dist/components/emoji/nimble-emoji');
var nimblePicker = require('emoji-mart/dist/components/picker/nimble-picker');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactPlayer__default = /*#__PURE__*/_interopDefaultLegacy(ReactPlayer);
var prettybytes__default = /*#__PURE__*/_interopDefaultLegacy(prettybytes);
var DefaultEmojiIndex__default = /*#__PURE__*/_interopDefaultLegacy(DefaultEmojiIndex);
var Dayjs__default = /*#__PURE__*/_interopDefaultLegacy(Dayjs);
var calendar__default = /*#__PURE__*/_interopDefaultLegacy(calendar);
var LocalizedFormat__default = /*#__PURE__*/_interopDefaultLegacy(LocalizedFormat);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
var updateLocale__default = /*#__PURE__*/_interopDefaultLegacy(updateLocale);
var localeData__default = /*#__PURE__*/_interopDefaultLegacy(localeData);
var relativeTime__default = /*#__PURE__*/_interopDefaultLegacy(relativeTime);
var ImageGallery__default = /*#__PURE__*/_interopDefaultLegacy(ImageGallery);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty$2);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray$2);
var emojiRegex__default = /*#__PURE__*/_interopDefaultLegacy(emojiRegex);
var linkify__namespace = /*#__PURE__*/_interopNamespace(linkify);
var RootReactMarkdown__default = /*#__PURE__*/_interopDefaultLegacy(RootReactMarkdown);
var ReactMarkdown__default = /*#__PURE__*/_interopDefaultLegacy(ReactMarkdown);
var uniqBy__default = /*#__PURE__*/_interopDefaultLegacy(uniqBy);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Textarea__default = /*#__PURE__*/_interopDefaultLegacy(Textarea);
var getCaretCoordinates__default = /*#__PURE__*/_interopDefaultLegacy(getCaretCoordinates);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce$1);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);
var deepequal__default = /*#__PURE__*/_interopDefaultLegacy(deepequal);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var nimbleEmoji__default = /*#__PURE__*/_interopDefaultLegacy(nimbleEmoji);
var nimblePicker__default = /*#__PURE__*/_interopDefaultLegacy(nimblePicker);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray$1(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var UnMemoizedAttachmentActions = function (props) {
    var actionHandler = props.actionHandler, actions = props.actions, id = props.id, text = props.text;
    var handleActionClick = function (event, name, value) { return actionHandler === null || actionHandler === void 0 ? void 0 : actionHandler(name, value, event); };
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-actions' },
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-actions-form' },
            React__default["default"].createElement("span", null, text),
            actions.map(function (action) { return (React__default["default"].createElement("button", { className: "str-chat__message-attachment-actions-button str-chat__message-attachment-actions-button--".concat(action.style), "data-testid": "".concat(action.name), "data-value": action.value, key: "".concat(id, "-").concat(action.value), onClick: function (event) { return handleActionClick(event, action.name, action.value); } }, action.text)); }))));
};
/**
 * A component for rendering the actions you can take on an attachment.
 */
var AttachmentActions = React__default["default"].memo(UnMemoizedAttachmentActions);

var DownloadIcon$1 = function (_a) {
    var className = _a.className;
    return (React__default["default"].createElement("svg", { className: className, "data-testid": 'download', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z', fill: 'black' })));
};
var PlayTriangleIcon = function () { return (React__default["default"].createElement("svg", { fill: 'none', viewBox: '0 0 12 14', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M0.5 0V14L11.5 7L0.5 0Z', fill: '#080707' }))); };
var PauseIcon = function () { return (React__default["default"].createElement("svg", { fill: 'none', viewBox: '0 0 12 14', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M0 14H4V0H0V14ZM8 0V14H12V0H8Z', fill: '#080707' }))); };

var FileSizeIndicator = function (_a) {
    var fileSize = _a.fileSize;
    if (!(fileSize && Number.isFinite(Number(fileSize))))
        return null;
    return (React__default["default"].createElement("span", { className: 'str-chat__message-attachment-file--item-size' }, prettybytes__default["default"](fileSize)));
};

var UnMemoizedSafeAnchor = function (props) {
    var children = props.children, className = props.className, download = props.download, href = props.href, rel = props.rel, target = props.target;
    if (!href)
        return null;
    var sanitized = sanitizeUrl.sanitizeUrl(href);
    return (React__default["default"].createElement("a", { "aria-label": 'Attachment', className: className, download: download, href: sanitized, rel: rel, target: target }, children));
};
var SafeAnchor = React__default["default"].memo(UnMemoizedSafeAnchor);

var DownloadButton = function (_a) {
    var assetUrl = _a.assetUrl;
    return (React__default["default"].createElement(SafeAnchor, { className: 'str-chat__message-attachment-file--item-download', download: true, href: assetUrl, target: '_blank' },
        React__default["default"].createElement(DownloadIcon$1, { className: 'str-chat__message-attachment-download-icon' })));
};

var PROGRESS_UPDATE_INTERVAL = 100;
var useAudioController = function () {
    var _a = React.useState(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var _b = React.useState(0), progress = _b[0], setProgress = _b[1];
    var audioRef = React.useRef(null);
    var togglePlay = React.useCallback(function () {
        setIsPlaying(function (playing) { return !playing; });
    }, []);
    var seek = React.useCallback(function (_a) {
        var clientX = _a.clientX, currentTarget = _a.currentTarget;
        if (!audioRef.current)
            return;
        var _b = currentTarget.getBoundingClientRect(), width = _b.width, x = _b.x;
        var ratio = (clientX - x) / width;
        if (!isPlaying)
            setProgress(ratio * 100);
        audioRef.current.currentTime = ratio * audioRef.current.duration;
    }, [isPlaying]);
    React.useEffect(function () {
        if (!audioRef.current || !isPlaying)
            return;
        var interval = window.setInterval(function () {
            if (!audioRef.current)
                return;
            var _a = audioRef.current, currentTime = _a.currentTime, duration = _a.duration;
            setProgress((currentTime / duration) * 100);
            if (currentTime === duration)
                setIsPlaying(false);
        }, PROGRESS_UPDATE_INTERVAL);
        audioRef.current.play();
        return function () {
            var _a;
            (_a = audioRef.current) === null || _a === void 0 ? void 0 : _a.pause();
            window.clearInterval(interval);
        };
    }, [isPlaying]);
    return {
        audioRef: audioRef,
        isPlaying: isPlaying,
        progress: progress,
        seek: seek,
        togglePlay: togglePlay,
    };
};

var getDisplayName = function (Component) {
    return Component.displayName || Component.name || 'Component';
};

var ChatContext = React__default["default"].createContext(undefined);
var ChatProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(ChatContext.Provider, { value: value }, children));
};
var useChatContext = function (componentName) {
    var contextValue = React.useContext(ChatContext);
    if (!contextValue) {
        console.warn("The useChatContext hook was called outside of the ChatContext provider. Make sure this hook is called within a child of the Chat component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChatContext the Props for the
 * wrapped component must be provided as the first generic.
 */
var withChatContext = function (Component) {
    var WithChatContextComponent = function (props) {
        var chatContext = useChatContext();
        return React__default["default"].createElement(Component, __assign({}, props, chatContext));
    };
    WithChatContextComponent.displayName = "WithChatContext".concat(getDisplayName(Component));
    return WithChatContextComponent;
};

var AudioV1 = function (_a) {
    var og = _a.og;
    var asset_url = og.asset_url, description = og.description, image_url = og.image_url, text = og.text, title = og.title;
    var _b = useAudioController(), audioRef = _b.audioRef, isPlaying = _b.isPlaying, progress = _b.progress, togglePlay = _b.togglePlay;
    return (React__default["default"].createElement("div", { className: 'str-chat__audio' },
        React__default["default"].createElement("div", { className: 'str-chat__audio__wrapper' },
            React__default["default"].createElement("audio", { ref: audioRef },
                React__default["default"].createElement("source", { "data-testid": 'audio-source', src: asset_url, type: 'audio/mp3' })),
            React__default["default"].createElement("div", { className: 'str-chat__audio__image' },
                React__default["default"].createElement("div", { className: 'str-chat__audio__image--overlay' }, !isPlaying ? (React__default["default"].createElement("button", { className: 'str-chat__audio__image--button', "data-testid": 'play-audio', onClick: togglePlay },
                    React__default["default"].createElement("svg", { height: '40', viewBox: '0 0 64 64', width: '40', xmlns: 'http://www.w3.org/2000/svg' },
                        React__default["default"].createElement("path", { d: 'M32 58c14.36 0 26-11.64 26-26S46.36 6 32 6 6 17.64 6 32s11.64 26 26 26zm0 6C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm13.237-28.412L26.135 45.625a3.27 3.27 0 0 1-4.426-1.4 3.319 3.319 0 0 1-.372-1.47L21 23.36c-.032-1.823 1.41-3.327 3.222-3.358a3.263 3.263 0 0 1 1.473.322l19.438 9.36a3.311 3.311 0 0 1 .103 5.905z', fillRule: 'nonzero' })))) : (React__default["default"].createElement("button", { className: 'str-chat__audio__image--button', "data-testid": 'pause-audio', onClick: togglePlay },
                    React__default["default"].createElement("svg", { height: '40', viewBox: '0 0 64 64', width: '40', xmlns: 'http://www.w3.org/2000/svg' },
                        React__default["default"].createElement("path", { d: 'M32 58.215c14.478 0 26.215-11.737 26.215-26.215S46.478 5.785 32 5.785 5.785 17.522 5.785 32 17.522 58.215 32 58.215zM32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm-7.412-45.56h2.892a2.17 2.17 0 0 1 2.17 2.17v23.865a2.17 2.17 0 0 1-2.17 2.17h-2.892a2.17 2.17 0 0 1-2.17-2.17V20.61a2.17 2.17 0 0 1 2.17-2.17zm12.293 0h2.893a2.17 2.17 0 0 1 2.17 2.17v23.865a2.17 2.17 0 0 1-2.17 2.17h-2.893a2.17 2.17 0 0 1-2.17-2.17V20.61a2.17 2.17 0 0 1 2.17-2.17z', fillRule: 'nonzero' }))))),
                image_url && React__default["default"].createElement("img", { alt: "".concat(description), src: image_url })),
            React__default["default"].createElement("div", { className: 'str-chat__audio__content' },
                React__default["default"].createElement("span", { className: 'str-chat__audio__content--title' },
                    React__default["default"].createElement("strong", null, title)),
                React__default["default"].createElement("span", { className: 'str-chat__audio__content--subtitle' }, text),
                React__default["default"].createElement("div", { className: 'str-chat__audio__content--progress' },
                    React__default["default"].createElement("div", { "data-progress": progress, "data-testid": 'audio-progress', role: 'progressbar', style: { width: "".concat(progress, "%") } }))))));
};
var PlayButton = function (_a) {
    var isPlaying = _a.isPlaying, onClick = _a.onClick;
    return (React__default["default"].createElement("button", { className: 'str-chat__message-attachment-audio-widget--play-button', "data-testid": isPlaying ? 'pause-audio' : 'play-audio', onClick: onClick }, isPlaying ? React__default["default"].createElement(PauseIcon, null) : React__default["default"].createElement(PlayTriangleIcon, null)));
};
var ProgressBar = function (_a) {
    var onClick = _a.onClick, progress = _a.progress;
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--progress-track', "data-progress": progress, "data-testid": 'audio-progress', onClick: onClick, role: 'progressbar', style: {
            background: "linear-gradient(\n\t\t to right, \n\t\t var(--str-chat__primary-color),\n\t\t var(--str-chat__primary-color) ".concat(progress, "%,\n\t\t var(--str-chat__disabled-color) ").concat(progress, "%,\n\t\t var(--str-chat__disabled-color)\n\t  )"),
        } },
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--progress-slider', style: { left: "".concat(progress, "px") } })));
};
var AudioV2 = function (_a) {
    var og = _a.og;
    var asset_url = og.asset_url, file_size = og.file_size, title = og.title;
    var _b = useAudioController(), audioRef = _b.audioRef, isPlaying = _b.isPlaying, progress = _b.progress, seek = _b.seek, togglePlay = _b.togglePlay;
    if (!asset_url)
        return null;
    var dataTestId = 'audio-widget';
    var rootClassName = 'str-chat__message-attachment-audio-widget';
    return (React__default["default"].createElement("div", { className: rootClassName, "data-testid": dataTestId },
        React__default["default"].createElement("audio", { ref: audioRef },
            React__default["default"].createElement("source", { "data-testid": 'audio-source', src: asset_url, type: 'audio/mp3' })),
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--play-controls' },
            React__default["default"].createElement(PlayButton, { isPlaying: isPlaying, onClick: togglePlay })),
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--text' },
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--text-first-row' },
                React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--title' }, title),
                React__default["default"].createElement(DownloadButton, { assetUrl: asset_url })),
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--text-second-row' },
                React__default["default"].createElement(FileSizeIndicator, { fileSize: file_size }),
                React__default["default"].createElement(ProgressBar, { onClick: seek, progress: progress })))));
};
var UnMemoizedAudio = function (props) {
    var themeVersion = useChatContext('Audio').themeVersion;
    return themeVersion === '1' ? React__default["default"].createElement(AudioV1, __assign({}, props)) : React__default["default"].createElement(AudioV2, __assign({}, props));
};
/**
 * Audio attachment with play/pause button and progress bar
 */
var Audio = React__default["default"].memo(UnMemoizedAudio);

var CloseIconRound = function () { return (React__default["default"].createElement("svg", { "data-testid": 'close-icon-round', fill: 'none', height: '28', viewBox: '0 0 28 28', width: '28', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("rect", { fill: '#72767E', height: '28', rx: '14', width: '28' }),
    React__default["default"].createElement("circle", { cx: '14', cy: '14', fill: '#72767E', r: '12' }),
    React__default["default"].createElement("path", { clipRule: 'evenodd', d: 'M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14ZM19.59 7L21 8.41L15.41 14L21 19.59L19.59 21L14 15.41L8.41 21L7 19.59L12.59 14L7 8.41L8.41 7L14 12.59L19.59 7Z', fill: 'white', fillRule: 'evenodd' }))); };

var ChannelActionContext = React__default["default"].createContext(undefined);
var ChannelActionProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(ChannelActionContext.Provider, { value: value }, children));
};
var useChannelActionContext = function (componentName) {
    var contextValue = React.useContext(ChannelActionContext);
    if (!contextValue) {
        console.warn("The useChannelActionContext hook was called outside of the ChannelActionContext provider. Make sure this hook is called within a child of the Channel component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if ChannelActionContext
 * typing is desired while using the HOC withChannelActionContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withChannelActionContext = function (Component) {
    var WithChannelActionContextComponent = function (props) {
        var channelActionContext = useChannelActionContext();
        return React__default["default"].createElement(Component, __assign({}, props, channelActionContext));
    };
    WithChannelActionContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithChannelActionContextComponent;
};

var ChannelStateContext = React__default["default"].createContext(undefined);
var ChannelStateProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(ChannelStateContext.Provider, { value: value }, children));
};
var useChannelStateContext = function (componentName) {
    var contextValue = React.useContext(ChannelStateContext);
    if (!contextValue) {
        console.warn("The useChannelStateContext hook was called outside of the ChannelStateContext provider. Make sure this hook is called within a child of the Channel component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if ChannelStateContext
 * typing is desired while using the HOC withChannelStateContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withChannelStateContext = function (Component) {
    var WithChannelStateContextComponent = function (props) {
        var channelStateContext = useChannelStateContext();
        return React__default["default"].createElement(Component, __assign({}, props, channelStateContext));
    };
    WithChannelStateContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithChannelStateContextComponent;
};

var ComponentContext = React__default["default"].createContext(undefined);
var ComponentProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(ComponentContext.Provider, { value: value }, children));
};
var useComponentContext = function (componentName) {
    var contextValue = React.useContext(ComponentContext);
    if (!contextValue) {
        console.warn("The useComponentContext hook was called outside of the ComponentContext provider. Make sure this hook is called within a child of the Channel component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if ComponentContext
 * typing is desired while using the HOC withComponentContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withComponentContext = function (Component) {
    var WithComponentContextComponent = function (props) {
        var componentContext = useComponentContext();
        return React__default["default"].createElement(Component, __assign({}, props, componentContext));
    };
    WithComponentContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithComponentContextComponent;
};

var DefaultEmoji$1 = React__default["default"].lazy(function () { return Promise.resolve().then(function () { return DefaultEmoji; }); });
var DefaultEmojiPicker$1 = React__default["default"].lazy(function () { return Promise.resolve().then(function () { return DefaultEmojiPicker; }); });
var EmojiContext = React__default["default"].createContext(undefined);
var EmojiProvider = function (_a) {
    var children = _a.children, value = _a.value;
    var _b = value.Emoji, Emoji = _b === void 0 ? DefaultEmoji$1 : _b, emojiConfig = value.emojiConfig, _c = value.EmojiIndex, EmojiIndex = _c === void 0 ? DefaultEmojiIndex__default["default"] : _c, _d = value.EmojiPicker, EmojiPicker = _d === void 0 ? DefaultEmojiPicker$1 : _d;
    var emojiContextValue = {
        Emoji: Emoji,
        emojiConfig: emojiConfig,
        EmojiIndex: EmojiIndex,
        EmojiPicker: EmojiPicker,
    };
    return React__default["default"].createElement(EmojiContext.Provider, { value: emojiContextValue }, children);
};
var useEmojiContext = function (componentName) {
    var contextValue = React.useContext(EmojiContext);
    if (!contextValue) {
        console.warn("The useEmojiContext hook was called outside of the EmojiContext provider. Make sure this hook is called within a child of the Channel component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if EmojiContext
 * typing is desired while using the HOC withEmojiContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withEmojiContext = function (Component) {
    var WithEmojiContextComponent = function (props) {
        var componentContext = useEmojiContext();
        return React__default["default"].createElement(Component, __assign({}, props, componentContext));
    };
    WithEmojiContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithEmojiContextComponent;
};

var MessageContext = React__default["default"].createContext(undefined);
var MessageProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(MessageContext.Provider, { value: value }, children));
};
var useMessageContext = function (componentName) {
    var contextValue = React.useContext(MessageContext);
    if (!contextValue) {
        console.warn("The useMessageContext hook was called outside of the MessageContext provider. Make sure this hook is called within the Message's UI component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if MessageContext
 * typing is desired while using the HOC withMessageContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withMessageContext = function (Component) {
    var WithMessageContextComponent = function (props) {
        var messageContext = useMessageContext();
        return React__default["default"].createElement(Component, __assign({}, props, messageContext));
    };
    WithMessageContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithMessageContextComponent;
};

var MessageInputContext = React.createContext(undefined);
var MessageInputContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(MessageInputContext.Provider, { value: value }, children));
};
var useMessageInputContext = function (componentName) {
    var contextValue = React.useContext(MessageInputContext);
    if (!contextValue) {
        console.warn("The useMessageInputContext hook was called outside of the MessageInputContext provider. Make sure this hook is called within the MessageInput's UI component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};

var Cancel$b="Stornieren";var Close$b="Schließen";var Delete$b="Löschen";var Delivered$b="Zugestellt";var Flag$b="Meldung";var Menu$b="Menü";var Mute$b="Stumm schalten";var New$b="Neu";var Pin$b="Pin";var Reply$b="Antworten";var Search$b="Suche";var Send$b="Senden";var Thread$c="Thread";var Unmute$b="Stummschaltung aufheben";var Unpin$b="Pin entfernen";var live$b="live";var replyCount_one$b="1 Antwort";var replyCount_other$b="{{ count }} Antworten";var searchResultsCount_one$b="1 Ergebnis";var searchResultsCount_other$b="{{ count }} Ergebnisse";var deTranslations = {"Attach files":"Dateien anhängen",Cancel:Cancel$b,"Channel Missing":"Kanal fehlt",Close:Close$b,"Close emoji picker":"Emoji-Picker schließen","Commands matching":"Übereinstimmende Befehle","Connection failure, reconnecting now...":"Verbindungsfehler, Wiederherstellung der Verbindung...",Delete:Delete$b,Delivered:Delivered$b,"Drag your files here":"Drag your files here","Edit Message":"Nachricht bearbeiten","Edit message request failed":"Anfrage zum Bearbeiten der Nachricht fehlgeschlagen","Emoji matching":"Emoji passend","Empty message...":"Leere Nachricht...","Error adding flag":"Fehler beim Hinzufügen des Flags","Error connecting to chat, refresh the page to try again.":"Verbindungsfehler zum Chat, Aktualisiere die Seite um es erneut zu versuchen.","Error deleting message":"Fehler beim Löschen der Nachricht","Error muting a user ...":"Fehler beim Stummschalten eines Nutzers.","Error pinning message":"Fehler beim Pinnen der Nachricht","Error removing message pin":"Fehler beim Entfernen der gepinnten Nachricht","Error unmuting a user ...":"Stummschaltung des Nutzers fehlgeschlagen ...","Error uploading file":"Fehler beim Hochladen der Datei","Error uploading image":"Hochladen des Bildes fehlgeschlagen","Error · Unsent":"Fehler nicht gesendet","Error: {{ errorMessage }}":"Fehler: {{ errorMessage }}",Flag:Flag$b,"Latest Messages":"Neueste Nachrichten",Menu:Menu$b,"Message Failed · Click to try again":"Nachricht fehlgeschlagen · Klicken, um es erneut zu versuchen","Message Failed · Unauthorized":"Nachricht fehlgeschlagen · Nicht autorisiert","Message deleted":"Nachricht gelöscht","Message has been successfully flagged":"Nachricht wurde erfolgreich gemeldet","Message pinned":"Nachricht gepinnt",Mute:Mute$b,New:New$b,"New Messages!":"Neue Nachrichten!","No chats here yet…":"Noch keine Chats hier...","No results found":"keine Ergebnisse gefunden","Nothing yet...":"Noch nichts...","Open emoji picker":"Emoji-Picker öffnen","People matching":"Passende Personen","Pick your emoji":"Emoji wählen",Pin:Pin$b,"Pinned by":"Gepinnt von",Reply:Reply$b,"Reply to Message":"Auf Nachricht antworten",Search:Search$b,"Searching...":"Suchen...",Send:Send$b,"Send message request failed":"Senden der Nachrichtenanfrage fehlgeschlagen","Sending...":"Senden...","Slow Mode ON":"Slow-Mode EIN","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Diese Nachricht wurde gelöscht...",Thread:Thread$c,"Type your message":"Nachricht eingeben",Unmute:Unmute$b,Unpin:Unpin$b,"Upload type: \"{{ type }}\" is not allowed":"Upload-Typ: \"{{ type }}\" ist nicht erlaubt","Wait until all attachments have uploaded":"Bitte warten, bis alle Anhänge hochgeladen wurden","You have no channels currently":"Du hast momentan noch keinen Channels","You've reached the maximum number of files":"Die maximale Dateianzahl ist erreicht",live:live$b,replyCount_one:replyCount_one$b,replyCount_other:replyCount_other$b,searchResultsCount_one:searchResultsCount_one$b,searchResultsCount_other:searchResultsCount_other$b,"this content could not be displayed":"Dieser Inhalt konnte nicht angezeigt werden","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} und {{moreCount}} Mehr","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} und {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} und {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} mehr","{{ memberCount }} members":"{{ memberCount }} Mitglieder","{{ user }} has been muted":"{{ user }} wurde stummgeschaltet","{{ user }} has been unmuted":"{{ user }} wurde nicht stummgeschaltet","{{ user }} is typing...":"{{ user }} tippt...","{{ users }} and more are typing...":"{{ users }} und mehr tippen...","{{ users }} and {{ user }} are typing...":"{{ users }} und {{ user }} tippen...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 Anhang..."};

var Cancel$a="Cancel";var Close$a="Close";var Delete$a="Delete";var Delivered$a="Delivered";var Flag$a="Flag";var Menu$a="Menu";var Mute$a="Mute";var New$a="New";var Pin$a="Pin";var Reply$a="Reply";var Search$a="Search";var Send$a="Send";var Thread$b="Thread";var Unmute$a="Unmute";var Unpin$a="Unpin";var live$a="live";var replyCount_one$a="1 reply";var replyCount_other$a="{{ count }} replies";var searchResultsCount_one$a="1 result";var searchResultsCount_other$a="{{ count }} results";var enTranslations = {"Attach files":"Attach files",Cancel:Cancel$a,"Channel Missing":"Channel Missing",Close:Close$a,"Close emoji picker":"Close emoji picker","Commands matching":"Commands matching","Connection failure, reconnecting now...":"Connection failure, reconnecting now...",Delete:Delete$a,Delivered:Delivered$a,"Drag your files here":"Drag your files here","Edit Message":"Edit Message","Edit message request failed":"Edit message request failed","Emoji matching":"Emoji matching","Empty message...":"Empty message...","Error adding flag":"Error adding flag","Error connecting to chat, refresh the page to try again.":"Error connecting to chat, refresh the page to try again.","Error deleting message":"Error deleting message","Error muting a user ...":"Error muting a user ...","Error pinning message":"Error pinning message","Error removing message pin":"Error removing message pin","Error unmuting a user ...":"Error unmuting a user ...","Error uploading file":"Error uploading file","Error uploading image":"Error uploading image","Error · Unsent":"Error · Unsent","Error: {{ errorMessage }}":"Error: {{ errorMessage }}",Flag:Flag$a,"Latest Messages":"Latest Messages",Menu:Menu$a,"Message Failed · Click to try again":"Message Failed · Click to try again","Message Failed · Unauthorized":"Message Failed · Unauthorized","Message deleted":"Message deleted","Message has been successfully flagged":"Message has been successfully flagged","Message pinned":"Message pinned",Mute:Mute$a,New:New$a,"New Messages!":"New Messages!","No chats here yet…":"No chats here yet…","No results found":"No results found","Nothing yet...":"Nothing yet...","Open emoji picker":"Open emoji picker","People matching":"People matching","Pick your emoji":"Pick your emoji",Pin:Pin$a,"Pinned by":"Pinned by",Reply:Reply$a,"Reply to Message":"Reply to Message",Search:Search$a,"Searching...":"Searching...",Send:Send$a,"Send message request failed":"Send message request failed","Sending...":"Sending...","Slow Mode ON":"Slow Mode ON","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"This message was deleted...",Thread:Thread$b,"Type your message":"Type your message",Unmute:Unmute$a,Unpin:Unpin$a,"Upload type: \"{{ type }}\" is not allowed":"Upload type: \"{{ type }}\" is not allowed","Wait until all attachments have uploaded":"Wait until all attachments have uploaded","You have no channels currently":"You have no channels currently","You've reached the maximum number of files":"You've reached the maximum number of files",live:live$a,replyCount_one:replyCount_one$a,replyCount_other:replyCount_other$a,searchResultsCount_one:searchResultsCount_one$a,searchResultsCount_other:searchResultsCount_other$a,"this content could not be displayed":"this content could not be displayed","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} and {{ moreCount }} more","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }}, and {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} and {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} more","{{ memberCount }} members":"{{ memberCount }} members","{{ user }} has been muted":"{{ user }} has been muted","{{ user }} has been unmuted":"{{ user }} has been unmuted","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 Attachment..."};

var Cancel$9="Cancelar";var Close$9="Cerca";var Delete$9="Borrar";var Delivered$9="Entregado";var Flag$9="Bandera";var Menu$9="Menú";var Mute$9="Mudo";var New$9="Nuevo";var Pin$9="Alfiler";var Reply$9="Respuesta";var Search$9="Buscar";var Send$9="Enviar";var Thread$a="Hilo";var Unmute$9="Activar sonido";var Unpin$9="Desprender";var live$9="En Vivo";var replyCount_many$4="{{ count }} respuestas";var replyCount_one$9="1 respuesta";var replyCount_other$9="{{ count }} respuestas";var searchResultsCount_many$4="{{ count }} resultados";var searchResultsCount_one$9="1 resultado";var searchResultsCount_other$9="{{ count }} resultados";var esTranslations = {"Attach files":"Adjuntar archivos",Cancel:Cancel$9,"Channel Missing":"Falta canal",Close:Close$9,"Close emoji picker":"Cerrar el selector de emojis","Commands matching":"Coincidencia de comandos","Connection failure, reconnecting now...":"Fallo de conexión, reconectando ahora ...",Delete:Delete$9,Delivered:Delivered$9,"Drag your files here":"Drag your files here","Edit Message":"Editar mensaje","Edit message request failed":"Error al editar la solicitud de mensaje","Emoji matching":"Coincidencia de emoji","Empty message...":"Mensaje vacío ...","Error adding flag":"Error al agregar la bandera","Error connecting to chat, refresh the page to try again.":"Error al conectarse al chat, actualice la página para volver a intentarlo.","Error deleting message":"Error al eliminar el mensaje","Error muting a user ...":"Error al silenciar a un usuario ...","Error pinning message":"Mensaje de error al fijar","Error removing message pin":"Error al quitar el pin del mensaje","Error unmuting a user ...":"Error al activar el silencio de un usuario ...","Error uploading file":"Error al cargar el archivo","Error uploading image":"Error subiendo imagen","Error · Unsent":"Error · No enviado","Error: {{ errorMessage }}":"Error: {{ errorMessage }}",Flag:Flag$9,"Latest Messages":"Últimos mensajes",Menu:Menu$9,"Message Failed · Click to try again":"Mensaje fallido · Haga clic para volver a intentarlo","Message Failed · Unauthorized":"Mensaje fallido · No autorizado","Message deleted":"Mensaje borrado","Message has been successfully flagged":"El mensaje se marcó correctamente","Message pinned":"Mensaje fijado",Mute:Mute$9,New:New$9,"New Messages!":"¡Nuevos mensajes!","No chats here yet…":"Aún no hay mensajes aquí...","No results found":"No se han encontrado resultados","Nothing yet...":"Nada aún...","Open emoji picker":"Selector de emoji abierto","People matching":"Personas que coinciden","Pick your emoji":"Elige tu emoji",Pin:Pin$9,"Pinned by":"Fijado por",Reply:Reply$9,"Reply to Message":"Responder al mensaje",Search:Search$9,"Searching...":"Buscando...",Send:Send$9,"Send message request failed":"Error al enviar la solicitud de mensaje","Sending...":"Enviando...","Slow Mode ON":"Modo lento activado","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Este mensaje fue eliminado ...",Thread:Thread$a,"Type your message":"Escribe tu mensaje",Unmute:Unmute$9,Unpin:Unpin$9,"Upload type: \"{{ type }}\" is not allowed":"Tipo de carga: \"{{ type }}\" no está permitido","Wait until all attachments have uploaded":"Espere hasta que se hayan cargado todos los archivos adjuntos","You have no channels currently":"Actualmente no tienes canales","You've reached the maximum number of files":"Has alcanzado el número máximo de archivos",live:live$9,replyCount_many:replyCount_many$4,replyCount_one:replyCount_one$9,replyCount_other:replyCount_other$9,searchResultsCount_many:searchResultsCount_many$4,searchResultsCount_one:searchResultsCount_one$9,searchResultsCount_other:searchResultsCount_other$9,"this content could not be displayed":"este contenido no se pudo mostrar","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} y {{ moreCount }} más","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} y {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} y {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} más","{{ memberCount }} members":"{{ memberCount }} miembros","{{ user }} has been muted":"{{ user }} ha sido silenciado","{{ user }} has been unmuted":"{{ user }} se ha desactivado","{{ user }} is typing...":"{{ user }} está escribiendo...","{{ users }} and more are typing...":"{{ users }} y más están escribiendo...","{{ users }} and {{ user }} are typing...":"{{ users }} y {{ user }} están escribiendo...","{{ watcherCount }} online":"{{ watcherCount }} en línea","🏙 Attachment...":"🏙 Adjunto..."};

var Cancel$8="Annuler";var Close$8="Fermer";var Delete$8="Supprimer";var Delivered$8="Publié";var Flag$8="Signaler";var Menu$8="Menu";var Mute$8="Muet";var New$8="Nouveaux";var Pin$8="Épingle";var Reply$8="Réponse";var Search$8="Rechercher";var Send$8="Envoyer";var Thread$9="Fil de discussion";var Unmute$8="Désactiver muet";var Unpin$8="Détacher";var live$8="en direct";var replyCount_many$3="{{ count }} réponses";var replyCount_one$8="1 réponse";var replyCount_other$8="{{ count }} réponses";var searchResultsCount_many$3="{{ count }} résultats";var searchResultsCount_one$8="1 résultat";var searchResultsCount_other$8="{{ count }} résultats";var frTranslations = {"Attach files":"Pièces jointes",Cancel:Cancel$8,"Channel Missing":"Canal Manquant",Close:Close$8,"Close emoji picker":"Fermer le sélecteur d'emojis","Commands matching":"Correspondance des commandes","Connection failure, reconnecting now...":"Échec de la connexion, reconnexion en cours...",Delete:Delete$8,Delivered:Delivered$8,"Drag your files here":"Drag your files here","Edit Message":"Éditer un message","Edit message request failed":"Échec de la demande de modification du message","Emoji matching":"Correspondance emoji","Empty message...":"Message vide...","Error adding flag":"Erreur lors de l'ajout du drapeau","Error connecting to chat, refresh the page to try again.":"Erreur de connexion au chat, rafraîchissez la page pour réessayer.","Error deleting message":"Erreur lors de la suppression du message","Error muting a user ...":"Erreur de mise en sourdine d'un utilisateur ...","Error pinning message":"Erreur d'épinglage du message","Error removing message pin":"Erreur lors de la suppression du code PIN du message","Error unmuting a user ...":"Erreur de désactivation de la fonction sourdine pour un utilisateur ...","Error uploading file":"Erreur lors du téléchargement du fichier","Error uploading image":"Erreur lors de l'envoi de l'image","Error · Unsent":"Erreur - Non envoyé","Error: {{ errorMessage }}":"Erreur : {{ errorMessage }}",Flag:Flag$8,"Latest Messages":"Derniers messages",Menu:Menu$8,"Message Failed · Click to try again":"Échec de l'envoi du message - Cliquez pour réessayer","Message Failed · Unauthorized":"Échec de l'envoi du message - Non autorisé","Message deleted":"Message supprimé","Message has been successfully flagged":"Le message a été signalé avec succès","Message pinned":"Message épinglé",Mute:Mute$8,New:New$8,"New Messages!":"Nouveaux Messages!","No chats here yet…":"Pas encore de messages ici...","No results found":"Aucun résultat trouvé","Nothing yet...":"Aucun message...","Open emoji picker":"Ouvrez le sélecteur d'emoji","People matching":"Correspondance de personnes","Pick your emoji":"Choisissez votre emoji",Pin:Pin$8,"Pinned by":"Épinglé par",Reply:Reply$8,"Reply to Message":"Répondre au message",Search:Search$8,"Searching...":"Recherche...",Send:Send$8,"Send message request failed":"Échec de la demande d'envoi de message","Sending...":"Envoi en cours...","Slow Mode ON":"Mode lent activé","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Ce message a été supprimé...",Thread:Thread$9,"Type your message":"Saisissez votre message",Unmute:Unmute$8,Unpin:Unpin$8,"Upload type: \"{{ type }}\" is not allowed":"Le type de téléchargement: \"{{ type }}\" n'est pas autorisé","Wait until all attachments have uploaded":"Attendez que toutes les pièces jointes soient téléchargées","You have no channels currently":"Vous n'avez actuellement aucun canal","You've reached the maximum number of files":"Vous avez atteint le nombre maximum de fichiers",live:live$8,replyCount_many:replyCount_many$3,replyCount_one:replyCount_one$8,replyCount_other:replyCount_other$8,searchResultsCount_many:searchResultsCount_many$3,searchResultsCount_one:searchResultsCount_one$8,searchResultsCount_other:searchResultsCount_other$8,"this content could not be displayed":"ce contenu n'a pu être affiché","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} et {{ moreCount }} autres","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} et {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} et {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} supplémentaires","{{ memberCount }} members":"{{ memberCount }} membres","{{ user }} has been muted":"{{ user }} a été mis en sourdine","{{ user }} has been unmuted":"{{ user }} n'est plus en sourdine","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} en ligne","🏙 Attachment...":"🏙 Pièce jointe..."};

var Cancel$7="रद्द करें";var Close$7="बंद करे";var Delete$7="डिलीट";var Delivered$7="पहुंच गया";var Flag$7="फ्लैग करे";var Menu$7="मेन्यू";var Mute$7="म्यूट करे";var New$7="नए";var Pin$7="पिन";var Reply$7="जवाब दे दो";var Search$7="खोज";var Send$7="भेजे";var Thread$8="रिप्लाई थ्रेड";var Unmute$7="अनम्यूट";var Unpin$7="अनपिन";var live$7="लाइव";var replyCount_one$7="1 रिप्लाई";var replyCount_other$7="{{ count }} रिप्लाई";var searchResultsCount_one$7="1 परिणाम";var searchResultsCount_other$7="{{ count }} परिणाम";var hiTranslations = {"Attach files":"फाइल्स अटैच करे",Cancel:Cancel$7,"Channel Missing":"चैनल उपलब्ध नहीं है",Close:Close$7,"Close emoji picker":"इमोजी पिकर बंद करें","Commands matching":"मेल खाती है","Connection failure, reconnecting now...":"कनेक्शन विफल रहा, अब पुनः कनेक्ट हो रहा है ...",Delete:Delete$7,Delivered:Delivered$7,"Drag your files here":"Drag your files here","Edit Message":"मैसेज में बदलाव करे","Edit message request failed":"संदेश संपादित करने का अनुरोध विफल रहा","Emoji matching":"इमोजी मिलान","Empty message...":"खाली संदेश ...","Error adding flag":"ध्वज जोड़ने में त्रुटि","Error connecting to chat, refresh the page to try again.":"चैट से कनेक्ट करने में त्रुटि, पेज को रिफ्रेश करें","Error deleting message":"संदेश हटाने में त्रुटि","Error muting a user ...":"यूजर को म्यूट करने का प्रयास फेल हुआ","Error pinning message":"संदेश को पिन करने में त्रुटि","Error removing message pin":"संदेश पिन निकालने में त्रुटि","Error unmuting a user ...":"यूजर को अनम्यूट करने का प्रयास फेल हुआ","Error uploading file":"फ़ाइल अपलोड करने में त्रुटि","Error uploading image":"छवि अपलोड करने में त्रुटि","Error · Unsent":"फेल","Error: {{ errorMessage }}":"फेल: {{ errorMessage }}",Flag:Flag$7,"Latest Messages":"नवीनतम संदेश",Menu:Menu$7,"Message Failed · Click to try again":"मैसेज फ़ैल - पुनः कोशिश करें","Message Failed · Unauthorized":"मैसेज फ़ैल - अनधिकृत","Message deleted":"मैसेज हटा दिया गया","Message has been successfully flagged":"मैसेज को फ्लैग कर दिया गया है","Message pinned":"संदेश पिन किया गया",Mute:Mute$7,New:New$7,"New Messages!":"नए मैसेज!","No chats here yet…":"यहां अभी तक कोई चैट नहीं...","No results found":"कोई परिणाम नहीं मिला","Nothing yet...":"कोई मैसेज नहीं है","Open emoji picker":"इमोजी पिकर खोलिये","People matching":"मेल खाते लोग","Pick your emoji":"इमोजी चूस करे",Pin:Pin$7,"Pinned by":"द्वारा पिन किया गया",Reply:Reply$7,"Reply to Message":"संदेश का जवाब दें",Search:Search$7,"Searching...":"खोज कर...",Send:Send$7,"Send message request failed":"संदेश भेजने का अनुरोध विफल रहा","Sending...":"भेजा जा रहा है","Slow Mode ON":"स्लो मोड ऑन","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"मैसेज हटा दिया गया",Thread:Thread$8,"Type your message":"अपना मैसेज लिखे",Unmute:Unmute$7,Unpin:Unpin$7,"Upload type: \"{{ type }}\" is not allowed":"अपलोड प्रकार: \"{{ type }}\" की अनुमति नहीं है","Wait until all attachments have uploaded":"सभी अटैचमेंट अपलोड होने तक प्रतीक्षा करें","You have no channels currently":"आपके पास कोई चैनल नहीं है","You've reached the maximum number of files":"आप अधिकतम फ़ाइलों तक पहुँच गए हैं",live:live$7,replyCount_one:replyCount_one$7,replyCount_other:replyCount_other$7,searchResultsCount_one:searchResultsCount_one$7,searchResultsCount_other:searchResultsCount_other$7,"this content could not be displayed":"यह कॉन्टेंट लोड नहीं हो पाया","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} और {{ moreCount }} और","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} और {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} और {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} और","{{ memberCount }} members":"{{ memberCount }} मेंबर्स","{{ user }} has been muted":"{{ user }} को म्यूट कर दिया गया है","{{ user }} has been unmuted":"{{ user }} को अनम्यूट कर दिया गया है","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 अटैचमेंट"};

var Cancel$6="Annulla";var Close$6="Chiudi";var Delete$6="Cancella";var Delivered$6="Consegnato";var Flag$6="Segnala";var Menu$6="Menù";var Mute$6="Silenzia";var New$6="Nuovo";var Pin$6="Pin";var Reply$6="Rispondere";var Search$6="Ricerca";var Send$6="Invia";var Thread$7="Thread";var Unmute$6="Riattiva le notifiche";var Unpin$6="Sblocca";var live$6="live";var replyCount_many$2="{{ count }} risposte";var replyCount_one$6="Una risposta";var replyCount_other$6="{{ count }} risposte";var searchResultsCount_many$2="{{ count }} risultati";var searchResultsCount_one$6="1 risultato";var searchResultsCount_other$6="{{ count }} risultati";var itTranslations = {"Attach files":"Allega file",Cancel:Cancel$6,"Channel Missing":"Il canale non esiste",Close:Close$6,"Close emoji picker":"Chiudi il selettore di emoji","Commands matching":"Comandi corrispondenti","Connection failure, reconnecting now...":"Connessione fallitta, riconnessione in corso...",Delete:Delete$6,Delivered:Delivered$6,"Drag your files here":"Drag your files here","Edit Message":"Modifica messaggio","Edit message request failed":"Richiesta di modifica del messaggio non riuscita","Emoji matching":"Abbinamento emoji","Empty message...":"Message vuoto...","Error adding flag":"Errore durante l'aggiunta del flag","Error connecting to chat, refresh the page to try again.":"Errore di connessione alla chat, aggiorna la pagina per riprovare","Error deleting message":"Errore durante l'eliminazione del messaggio","Error muting a user ...":"Errore silenziando un utente ...","Error pinning message":"Errore durante il blocco del messaggio","Error removing message pin":"Errore durante la rimozione del PIN del messaggio","Error unmuting a user ...":"Errore riattivando le notifiche per l'utente ...","Error uploading file":"Errore durante il caricamento del file","Error uploading image":"Errore durante il caricamento dell'immagine","Error · Unsent":"Errore · Non inviato","Error: {{ errorMessage }}":"Errore: {{ errorMessage }}",Flag:Flag$6,"Latest Messages":"Ultimi messaggi",Menu:Menu$6,"Message Failed · Click to try again":"Invio messaggio fallito · Clicca per riprovare","Message Failed · Unauthorized":"Invio messaggio fallito · Non autorizzato","Message deleted":"Messaggio cancellato","Message has been successfully flagged":"Il messaggio é stato segnalato con successo","Message pinned":"Messaggio bloccato",Mute:Mute$6,New:New$6,"New Messages!":"Nuovo messaggio!","No chats here yet…":"Non ci sono ancora messaggi qui...","No results found":"Nessun risultato trovato","Nothing yet...":"Ancora niente...","Open emoji picker":"Apri il selettore dellle emoji","People matching":"Persone che corrispondono","Pick your emoji":"Scegli la tua emoji",Pin:Pin$6,"Pinned by":"Appuntato da",Reply:Reply$6,"Reply to Message":"Rispondi al messaggio",Search:Search$6,"Searching...":"Ricerca in corso ...",Send:Send$6,"Send message request failed":"Invia messaggio di richiesta non riuscito","Sending...":"Invio in corso...","Slow Mode ON":"Modalità lenta attivata","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Questo messaggio é stato cancellato",Thread:Thread$7,"Type your message":"Scrivi il tuo messaggio",Unmute:Unmute$6,Unpin:Unpin$6,"Upload type: \"{{ type }}\" is not allowed":"Tipo di caricamento: \"{{ type }}\" non è consentito","Wait until all attachments have uploaded":"Attendi il caricamento di tutti gli allegati","You have no channels currently":"Al momento non sono presenti canali","You've reached the maximum number of files":"Hai raggiunto il numero massimo di file",live:live$6,replyCount_many:replyCount_many$2,replyCount_one:replyCount_one$6,replyCount_other:replyCount_other$6,searchResultsCount_many:searchResultsCount_many$2,searchResultsCount_one:searchResultsCount_one$6,searchResultsCount_other:searchResultsCount_other$6,"this content could not be displayed":"questo contenuto non puó essere mostrato","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} e altri {{ moreCount }}","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} e {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} e {{ secondUser }}","{{ imageCount }} more":"+ {{ imageCount }}","{{ memberCount }} members":"{{ memberCount }} membri","{{ user }} has been muted":"{{ user }} é stato silenziato","{{ user }} has been unmuted":"Notifiche riattivate per {{ user }}","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 Allegato..."};

var Cancel$5="キャンセル";var Close$5="閉める";var Delete$5="消去";var Delivered$5="配信しました";var Flag$5="フラグ";var Menu$5="メニュー";var Mute$5="無音";var New$5="新しい";var Pin$5="ピン";var Reply$5="返事";var Search$5="探す";var Send$5="送信";var Thread$6="スレッド";var Unmute$5="無音を解除する";var Unpin$5="ピンを解除する";var live$5="ライブ";var replyCount_one$5="1件の返信";var replyCount_other$5="{{ count }} 返信";var searchResultsCount_one$5="1件の結果";var searchResultsCount_other$5="{{ count }}件の結果";var jaTranslations = {"Attach files":"ファイルを添付する",Cancel:Cancel$5,"Channel Missing":"チャネルがありません",Close:Close$5,"Close emoji picker":"絵文字ピッカーを閉める","Commands matching":"一致するコマンド","Connection failure, reconnecting now...":"接続が失敗しました。再接続中...",Delete:Delete$5,Delivered:Delivered$5,"Drag your files here":"Drag your files here","Edit Message":"メッセージを編集","Edit message request failed":"メッセージの編集要求が失敗しました","Emoji matching":"絵文字マッチング","Empty message...":"空のメッセージ...","Error adding flag":"フラグを追加のエラーが発生しました","Error connecting to chat, refresh the page to try again.":"チャットへの接続ができませんでした。ページを更新してください。","Error deleting message":"メッセージを削除するエラーが発生しました","Error muting a user ...":"ユーザーを無音するエラーが発生しました...","Error pinning message":"メッセージをピンのエラーが発生しました","Error removing message pin":"メッセージのピンを削除のエラーが発生しました","Error unmuting a user ...":"ユーザーの無音解除のエラーが発生しました...","Error uploading file":"ファイルをアップロードのエラーが発生しました","Error uploading image":"画像をアップロードのエラーが発生しました","Error · Unsent":"エラー・未送信","Error: {{ errorMessage }}":"エラー: {{ errorMessage }}",Flag:Flag$5,"Latest Messages":"最新のメッセージ",Menu:Menu$5,"Message Failed · Click to try again":"メッセージが失敗しました · クリックして再試行してください","Message Failed · Unauthorized":"メッセージが失敗しました · 許可されていません","Message deleted":"メッセージが削除されました","Message has been successfully flagged":"メッセージに正常にフラグが付けられました","Message pinned":"メッセージにピンが付けられました",Mute:Mute$5,New:New$5,"New Messages!":"新しいメッセージ!","No chats here yet…":"ここにはまだチャットはありません…","No results found":"結果が見つかりません","Nothing yet...":"まだ何もありません...","Open emoji picker":"絵文字ピッカーを開く","People matching":"一致する人","Pick your emoji":"絵文字を選んでください",Pin:Pin$5,"Pinned by":"ピンした方",Reply:Reply$5,"Reply to Message":"メッセージに返信",Search:Search$5,"Searching...":"検索中...",Send:Send$5,"Send message request failed":"メッセージ送信リクエストが失敗しました","Sending...":"送信中...","Slow Mode ON":"スローモードオン","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"このメッセージは削除されました...",Thread:Thread$6,"Type your message":"メッセージを入力してください",Unmute:Unmute$5,Unpin:Unpin$5,"Upload type: \"{{ type }}\" is not allowed":"アップロードタイプ：\"{{ type }}\"は許可されていません","Wait until all attachments have uploaded":"すべての添付ファイルがアップロードされるまでお待ちください","You have no channels currently":"現在チャンネルはありません","You've reached the maximum number of files":"ファイルの最大数に達しました",live:live$5,replyCount_one:replyCount_one$5,replyCount_other:replyCount_other$5,searchResultsCount_one:searchResultsCount_one$5,searchResultsCount_other:searchResultsCount_other$5,"this content could not be displayed":"このコンテンツは表示できませんでした","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} と {{ moreCount }} 他人","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} と {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} と {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} イメージ","{{ memberCount }} members":"{{ memberCount }} メンバー","{{ user }} has been muted":"{{ user }} 無音されています","{{ user }} has been unmuted":"{{ user }} 無音されていません","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} オンライン","🏙 Attachment...":"🏙 アタッチメント..."};

var Cancel$4="취소";var Close$4="닫기";var Delete$4="삭제";var Delivered$4="배달됨";var Flag$4="플래그";var Menu$4="메뉴";var Mute$4="무음";var New$4="새로운";var Pin$4="핀";var Reply$4="답장";var Search$4="찾다";var Send$4="보내다";var Thread$5="스레드";var Unmute$4="음소거 해제";var Unpin$4="핀 해제";var live$4="라이브";var replyCount_one$4="답장 1개";var replyCount_other$4="{{ count }} 답장";var searchResultsCount_one$4="1개의 결과";var searchResultsCount_other$4="{{ count }}개 결과";var koTranslations = {"Attach files":"파일 첨부",Cancel:Cancel$4,"Channel Missing":"채널 누락",Close:Close$4,"Close emoji picker":"이모티콘 선택기 닫기","Commands matching":"일치하는 명령","Connection failure, reconnecting now...":"연결 실패, 지금 다시 연결 중...",Delete:Delete$4,Delivered:Delivered$4,"Drag your files here":"Drag your files here","Edit Message":"메시지 수정","Edit message request failed":"메시지 수정 요청 실패","Emoji matching":"이모티콘 매칭","Empty message...":"빈 메시지...","Error adding flag":"플래그를 추가하는 동안 오류가 발생했습니다.","Error connecting to chat, refresh the page to try again.":"채팅에 연결하는 동안 오류가 발생했습니다. 페이지를 새로고침하여 다시 시도하세요.","Error deleting message":"메시지를 삭제하는 중에 오류가 발생했습니다.","Error muting a user ...":"사용자를 음소거하는 중에 오류가 발생했습니다...","Error pinning message":"메시지를 핀하는 중에 오류가 발생했습니다.","Error removing message pin":"메시지 핀을 제거하는 중에 오류가 발생했습니다.","Error unmuting a user ...":"사용자 음소거 해제 중 오류 발생...","Error uploading file":"파일 업로드 오류","Error uploading image":"이미지를 업로드하는 동안 오류가 발생했습니다.","Error · Unsent":"오류 · 전송되지 않음","Error: {{ errorMessage }}":"오류: {{ errorMessage }}",Flag:Flag$4,"Latest Messages":"최신 메시지",Menu:Menu$4,"Message Failed · Click to try again":"메시지 실패 · 다시 시도하려면 클릭하세요.","Message Failed · Unauthorized":"메시지 실패 · 승인되지 않음","Message deleted":"메시지가 삭제되었습니다.","Message has been successfully flagged":"메시지에 플래그가 지정되었습니다.","Message pinned":"메시지 핀했습니다",Mute:Mute$4,New:New$4,"New Messages!":"새 메시지!","No chats here yet…":"아직 채팅이 없습니다...","No results found":"검색 결과가 없습니다","Nothing yet...":"아직 아무것도...","Open emoji picker":"이모티콘 선택기 열기","People matching":"일치하는 사람","Pick your emoji":"이모티콘 선택",Pin:Pin$4,"Pinned by":"핀했던 분:",Reply:Reply$4,"Reply to Message":"메시지에 답장",Search:Search$4,"Searching...":"수색...",Send:Send$4,"Send message request failed":"메시지 보내기 요청 실패","Sending...":"배상중...","Slow Mode ON":"슬로우 모드 켜짐","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"이 메시지는 삭제되었습니다...",Thread:Thread$5,"Type your message":"메시지 입력",Unmute:Unmute$4,Unpin:Unpin$4,"Upload type: \"{{ type }}\" is not allowed":"업로드 유형: \"{{ type }}\"은(는) 허용되지 않습니다.","Wait until all attachments have uploaded":"모든 첨부 파일이 업로드될 때까지 기다립니다.","You have no channels currently":"현재 채널이 없습니다.","You've reached the maximum number of files":"최대 파일 수에 도달했습니다.",live:live$4,replyCount_one:replyCount_one$4,replyCount_other:replyCount_other$4,searchResultsCount_one:searchResultsCount_one$4,searchResultsCount_other:searchResultsCount_other$4,"this content could not be displayed":"이 콘텐츠를 표시할 수 없습니다","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} 그리고 {{ moreCount }}명 더","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} 그리고 {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} 그리고 {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }}개 더","{{ memberCount }} members":"{{ memberCount }}명","{{ user }} has been muted":"{{ user }} 음소거되었습니다","{{ user }} has been unmuted":"{{ user }} 음소거가 해제되었습니다","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} 온라인","🏙 Attachment...":"🏙 부착..."};

var Cancel$3="Annuleer";var Close$3="Sluit";var Delete$3="Verwijder";var Delivered$3="Afgeleverd";var Flag$3="Markeer";var Menu$3="Menu";var Mute$3="Mute";var New$3="Nieuwe";var Pin$3="Pin";var Reply$3="Antwoord";var Search$3="Zoeken";var Send$3="Verstuur";var Thread$4="Draadje";var Unmute$3="Unmute";var Unpin$3="Losmaken";var live$3="live";var replyCount_one$3="1 antwoord";var replyCount_other$3="{{ count }} antwoorden";var searchResultsCount_one$3="1 resultaat";var searchResultsCount_other$3="{{ count }} resultaten";var nlTranslations = {"Attach files":"Bijlage toevoegen",Cancel:Cancel$3,"Channel Missing":"Kanaal niet gevonden",Close:Close$3,"Close emoji picker":"Sluit de emoji-kiezer","Commands matching":"Bijpassende opdrachten","Connection failure, reconnecting now...":"Probleem met de verbinding, opnieuw verbinding maken...",Delete:Delete$3,Delivered:Delivered$3,"Drag your files here":"Drag your files here","Edit Message":"Pas bericht aan","Edit message request failed":"Verzoek om bericht bewerken mislukt","Emoji matching":"Emoji-overeenkomsten","Empty message...":"Leeg bericht...","Error adding flag":"Fout bij toevoegen van vlag","Error connecting to chat, refresh the page to try again.":"Fout bij het verbinden, ververs de pagina om nogmaals te proberen","Error deleting message":"Fout bij verwijderen van bericht","Error muting a user ...":"Fout bij het muten van de gebruiker","Error pinning message":"Fout bij vastzetten van bericht","Error removing message pin":"Fout bij verwijderen van berichtpin","Error unmuting a user ...":"Fout bij het unmuten van de gebruiker","Error uploading file":"Fout bij uploaden bestand","Error uploading image":"Fout bij uploaden afbeelding","Error · Unsent":"Error: · niet verzonden","Error: {{ errorMessage }}":"Error: {{ errorMessage }}",Flag:Flag$3,"Latest Messages":"Laatste berichten",Menu:Menu$3,"Message Failed · Click to try again":"Bericht mislukt, klik om het nogmaals te proberen","Message Failed · Unauthorized":"Bericht mislukt, ongeautoriseerd","Message deleted":"Bericht verwijderd","Message has been successfully flagged":"Bericht is succesvol gemarkeerd","Message pinned":"Bericht vastgezet",Mute:Mute$3,New:New$3,"New Messages!":"Nieuwe Berichten!","No chats here yet…":"Nog geen chats hier...","No results found":"Geen resultaten gevonden","Nothing yet...":"Nog niets ...","Open emoji picker":"Open emojipicker","People matching":"Mensen die matchen","Pick your emoji":"Kies je emoji",Pin:Pin$3,"Pinned by":"Vastgemaakt door",Reply:Reply$3,"Reply to Message":"Antwoord op bericht",Search:Search$3,"Searching...":"Zoeken...",Send:Send$3,"Send message request failed":"Verzoek om bericht te verzenden mislukt","Sending...":"Aan het verzenden...","Slow Mode ON":"Langzame modus aan","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Dit bericht was verwijderd",Thread:Thread$4,"Type your message":"Type je bericht",Unmute:Unmute$3,Unpin:Unpin$3,"Upload type: \"{{ type }}\" is not allowed":"Uploadtype: \"{{ type }}\" is niet toegestaan","Wait until all attachments have uploaded":"Wacht tot alle bijlagen zijn geüpload","You have no channels currently":"Er zijn geen chats beschikbaar","You've reached the maximum number of files":"Je hebt het maximale aantal bestanden bereikt",live:live$3,replyCount_one:replyCount_one$3,replyCount_other:replyCount_other$3,searchResultsCount_one:searchResultsCount_one$3,searchResultsCount_other:searchResultsCount_other$3,"this content could not be displayed":"Deze inhoud kan niet weergegeven worden","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} en {{ moreCount }} meer","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} en {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} en {{ secondUser }}","{{ imageCount }} more":"+{{ imageCount }}","{{ memberCount }} members":"{{ memberCount }} deelnemers","{{ user }} has been muted":"{{ user }} is muted","{{ user }} has been unmuted":"{{ user }} is unmuted","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 Bijlage..."};

var Cancel$2="Cancelar";var Close$2="Fechar";var Delete$2="Excluir";var Delivered$2="Entregue";var Flag$2="Reportar";var Menu$2="Menu";var Mute$2="Mudo";var New$2="Novo";var Pin$2="Fixar";var Reply$2="Responder";var Search$2="Procurar";var Send$2="Enviar";var Thread$3="Fio";var Unmute$2="Ativar som";var Unpin$2="Liberar";var live$2="ao vivo";var replyCount_many$1="{{ count }} respostas";var replyCount_one$2="1 resposta";var replyCount_other$2="{{ count }} respostas";var searchResultsCount_many$1="{{ count }} resultados";var searchResultsCount_one$2="1 resultado";var searchResultsCount_other$2="{{ count }} resultados";var ptTranslations = {"Attach files":"Anexar arquivos",Cancel:Cancel$2,"Channel Missing":"Canal ausente",Close:Close$2,"Close emoji picker":"Fechar seletor de emoji","Commands matching":"Comandos correspondentes","Connection failure, reconnecting now...":"Falha de conexão, reconectando agora...",Delete:Delete$2,Delivered:Delivered$2,"Drag your files here":"Drag your files here","Edit Message":"Editar Mensagem","Edit message request failed":"O pedido de edição da mensagem falhou","Emoji matching":"Emoji correspondente","Empty message...":"Mensagem vazia...","Error adding flag":"Erro ao reportar","Error connecting to chat, refresh the page to try again.":"Erro ao conectar ao bate-papo, atualize a página para tentar novamente.","Error deleting message":"Erro ao deletar mensagem","Error muting a user ...":"Erro ao silenciar um usuário...","Error pinning message":"Erro ao fixar mensagem","Error removing message pin":"Erro ao remover o PIN da mensagem","Error unmuting a user ...":"Erro ao ativar o som de um usuário...","Error uploading file":"Erro ao enviar arquivo","Error uploading image":"Erro ao carregar a imagem","Error · Unsent":"Erro · Não enviado","Error: {{ errorMessage }}":"Erro: {{ errorMessage }}",Flag:Flag$2,"Latest Messages":"Mensagens mais recentes",Menu:Menu$2,"Message Failed · Click to try again":"A mensagem falhou · Clique para tentar novamente","Message Failed · Unauthorized":"A mensagem falhou · não autorizado","Message deleted":"Mensagem apagada","Message has been successfully flagged":"A mensagem foi reportada com sucesso","Message pinned":"Mensagem fixada",Mute:Mute$2,New:New$2,"New Messages!":"Novas mensagens!","No chats here yet…":"Ainda não há conversas aqui...","No results found":"Nenhum resultado encontrado","Nothing yet...":"Nada ainda...","Open emoji picker":"Abrir seletor de emoji","People matching":"Pessoas correspondentes","Pick your emoji":"Escolha o seu emoji",Pin:Pin$2,"Pinned by":"Fixado por",Reply:Reply$2,"Reply to Message":"Responder a mensagem",Search:Search$2,"Searching...":"Procurando...",Send:Send$2,"Send message request failed":"O pedido de envio de mensagem falhou","Sending...":"Enviando...","Slow Mode ON":"Modo lento LIGADO","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Esta mensagem foi excluída...",Thread:Thread$3,"Type your message":"Digite sua mensagem",Unmute:Unmute$2,Unpin:Unpin$2,"Upload type: \"{{ type }}\" is not allowed":"Tipo de upload: \"{{ type }}\" não é permitido","Wait until all attachments have uploaded":"Espere até que todos os anexos tenham sido carregados","You have no channels currently":"Você não tem canais atualmente","You've reached the maximum number of files":"Você atingiu o número máximo de arquivos",live:live$2,replyCount_many:replyCount_many$1,replyCount_one:replyCount_one$2,replyCount_other:replyCount_other$2,searchResultsCount_many:searchResultsCount_many$1,searchResultsCount_one:searchResultsCount_one$2,searchResultsCount_other:searchResultsCount_other$2,"this content could not be displayed":"este conteúdo não pôde ser exibido","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} e mais {{ moreCount }}","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} e {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} e {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} mais","{{ memberCount }} members":"{{ memberCount }} membros","{{ user }} has been muted":"{{ user }} foi silenciado","{{ user }} has been unmuted":"{{ user }} foi reativado","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} online","🏙 Attachment...":"🏙 Anexo..."};

var Cancel$1="Отмена";var Close$1="Закрыть";var Delete$1="Удалить";var Delivered$1="Отправлено";var Flag$1="Пожаловаться";var Menu$1="Меню";var Mute$1="Отключить уведомления";var New$1="Новые";var Pin$1="Штырь";var Reply$1="Отвечать";var Search$1="Поиск";var Send$1="Отправить";var Thread$2="Ветка";var Unmute$1="Включить уведомления";var Unpin$1="Открепить";var live$1="В прямом эфире";var replyCount_few="{{ count }} ответов";var replyCount_many="{{ count }} ответов";var replyCount_one$1="1 ответ";var replyCount_other$1="{{ count }} ответов";var searchResultsCount_few="{{ count }} результата";var searchResultsCount_many="{{ count }} результатов";var searchResultsCount_one$1="1 результат";var searchResultsCount_other$1="{{ count }} результатов";var ruTranslations = {"Attach files":"Прикрепить файлы",Cancel:Cancel$1,"Channel Missing":"Канал не найден",Close:Close$1,"Close emoji picker":"Закрыть окно выбора смайлов","Commands matching":"Соответствие команд","Connection failure, reconnecting now...":"Ошибка соединения, переподключение...",Delete:Delete$1,Delivered:Delivered$1,"Drag your files here":"Drag your files here","Edit Message":"Редактировать сообщение","Edit message request failed":"Не удалось изменить запрос сообщения","Emoji matching":"Соответствие эмодзи","Empty message...":"Пустое сообщение...","Error adding flag":"Ошибка добавления флага","Error connecting to chat, refresh the page to try again.":"Ошибка подключения к чату, обновите страницу чтобы попробовать снова.","Error deleting message":"Ошибка при удалении сообщения","Error muting a user ...":"Ошибка отключения уведомлений от пользователя...","Error pinning message":"Сообщение об ошибке при закреплении","Error removing message pin":"Ошибка при удалении булавки сообщения","Error unmuting a user ...":"Ошибка включения уведомлений...","Error uploading file":"Ошибка при загрузке файла","Error uploading image":"Ошибка загрузки изображения","Error · Unsent":"Ошибка · Не отправлено","Error: {{ errorMessage }}":"Ошибка: {{ errorMessage }}",Flag:Flag$1,"Latest Messages":"Последние сообщения",Menu:Menu$1,"Message Failed · Click to try again":"Ошибка отправки сообщения · Нажмите чтобы повторить","Message Failed · Unauthorized":"Ошибка отправки сообщения · Неавторизованный","Message deleted":"Сообщение удалено","Message has been successfully flagged":"Жалоба на сообщение была принята","Message pinned":"Сообщение закреплено",Mute:Mute$1,New:New$1,"New Messages!":"Новые сообщения!","No chats here yet…":"Здесь еще нет чатов...","No results found":"результаты не найдены","Nothing yet...":"Пока ничего нет...","Open emoji picker":"Выбрать emoji","People matching":"Соответствующие люди","Pick your emoji":"Выберите свой emoji",Pin:Pin$1,"Pinned by":"Закреплено",Reply:Reply$1,"Reply to Message":"Ответить на сообщение",Search:Search$1,"Searching...":"Ищем...",Send:Send$1,"Send message request failed":"Не удалось отправить запрос на отправку сообщения","Sending...":"Отправка...","Slow Mode ON":"Медленный режим включен","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Сообщение было удалено...",Thread:Thread$2,"Type your message":"Ваше сообщение",Unmute:Unmute$1,Unpin:Unpin$1,"Upload type: \"{{ type }}\" is not allowed":"Тип загрузки: \"{{ type }}\" не разрешен","Wait until all attachments have uploaded":"Подождите, пока все вложения загрузятся","You have no channels currently":"У вас нет каналов в данный момент","You've reached the maximum number of files":"Вы достигли максимального количества файлов",live:live$1,replyCount_few:replyCount_few,replyCount_many:replyCount_many,replyCount_one:replyCount_one$1,replyCount_other:replyCount_other$1,searchResultsCount_few:searchResultsCount_few,searchResultsCount_many:searchResultsCount_many,searchResultsCount_one:searchResultsCount_one$1,searchResultsCount_other:searchResultsCount_other$1,"this content could not be displayed":"Этот контент не может быть отображен в данный момент","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} и {{ moreCount }} еще","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }} и {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} и {{ secondUser }}","{{ imageCount }} more":"Ещё {{ imageCount }}","{{ memberCount }} members":"{{ memberCount }} члены","{{ user }} has been muted":"Вы отписались от уведомлений от {{ user }}","{{ user }} has been unmuted":"Уведомления от {{ user }} были включены","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} в сети","🏙 Attachment...":"🏙 Вложение..."};

var Cancel="İptal";var Close="Kapat";var Delete="Sil";var Delivered="İletildi";var Flag="Bayrak";var Menu="Menü";var Mute="Sessiz";var New="Yeni";var Pin="Toplu iğne";var Reply="Cevapla";var Search="Arama";var Send="Gönder";var Thread$1="Konu";var Unmute="Sesini aç";var Unpin="Sabitlemeyi kaldır";var live="canlı";var replyCount_one="1 cevap";var replyCount_other="{{ count }} cevaplar";var searchResultsCount_one="1 sonuç";var searchResultsCount_other="{{ count }} sonuç";var trTranslations = {"Attach files":"Dosya ekle",Cancel:Cancel,"Channel Missing":"Kanal bulunamıyor",Close:Close,"Close emoji picker":"Emoji seçiciyi kapat","Commands matching":"Eşleşen komutlar","Connection failure, reconnecting now...":"Bağlantı hatası, tekrar bağlanılıyor...",Delete:Delete,Delivered:Delivered,"Drag your files here":"Drag your files here","Edit Message":"Mesajı Düzenle","Edit message request failed":"Mesaj düzenleme isteği başarısız oldu","Emoji matching":"Emoji eşleştirme","Empty message...":"Boş mesaj...","Error adding flag":"Bayrak eklenirken hata oluştu","Error connecting to chat, refresh the page to try again.":"Bağlantı hatası, sayfayı yenileyip tekrar deneyin.","Error deleting message":"Mesaj silinirken hata oluştu","Error muting a user ...":"Kullanıcıyı sessize alırken hata oluştu ...","Error pinning message":"Mesaj sabitlenirken hata oluştu","Error removing message pin":"Mesaj PIN'i kaldırılırken hata oluştu","Error unmuting a user ...":"Kullanıcının sesini açarken hata oluştu ...","Error uploading file":"Dosya yüklenirken hata oluştu","Error uploading image":"Resmi yüklerken hata","Error · Unsent":"Hata · Gönderilemedi","Error: {{ errorMessage }}":"Hata: {{ errorMessage }}",Flag:Flag,"Latest Messages":"Son Mesajlar",Menu:Menu,"Message Failed · Click to try again":"Mesaj Başarısız · Tekrar denemek için tıklayın","Message Failed · Unauthorized":"Mesaj Başarısız · Yetkisiz","Message deleted":"Mesaj silindi","Message has been successfully flagged":"Mesaj başarıyla bayraklandı","Message pinned":"Mesaj sabitlendi",Mute:Mute,New:New,"New Messages!":"Yeni Mesajlar!","No chats here yet…":"Henüz burada sohbet yok...","No results found":"Sonuç bulunamadı","Nothing yet...":"Şimdilik hiçbir şey...","Open emoji picker":"Emoji klavyesini aç","People matching":"Eşleşen kişiler","Pick your emoji":"Emoji seçin",Pin:Pin,"Pinned by":"Sabitleyen",Reply:Reply,"Reply to Message":"Mesajı Cevapla",Search:Search,"Searching...":"Aranıyor...",Send:Send,"Send message request failed":"Mesaj gönderme isteği başarısız oldu","Sending...":"Gönderiliyor...","Slow Mode ON":"Yavaş Mod Açık","Some of the files will not be accepted":"Some of the files will not be accepted","This message was deleted...":"Bu mesaj silindi",Thread:Thread$1,"Type your message":"Mesajınızı yazın",Unmute:Unmute,Unpin:Unpin,"Upload type: \"{{ type }}\" is not allowed":"Yükleme türü: \"{{ type }}\" izin verilmez","Wait until all attachments have uploaded":"Tüm ekler yüklenene kadar bekleyin","You have no channels currently":"Henüz kanalınız yok","You've reached the maximum number of files":"Maksimum dosya sayısına ulaştınız",live:live,replyCount_one:replyCount_one,replyCount_other:replyCount_other,searchResultsCount_one:searchResultsCount_one,searchResultsCount_other:searchResultsCount_other,"this content could not be displayed":"bu içerik gösterilemiyor","{{ commaSeparatedUsers }} and {{ moreCount }} more":"{{ commaSeparatedUsers }} ve {{ moreCount }} daha","{{ commaSeparatedUsers }}, and {{ lastUser }}":"{{ commaSeparatedUsers }}, ve {{ lastUser }}","{{ firstUser }} and {{ secondUser }}":"{{ firstUser }} ve {{ secondUser }}","{{ imageCount }} more":"{{ imageCount }} adet daha","{{ memberCount }} members":"{{ memberCount }} üyeler","{{ user }} has been muted":"{{ user }} sessize alındı","{{ user }} has been unmuted":"{{ user }} sesi açıldı","{{ user }} is typing...":"{{ user }} is typing...","{{ users }} and more are typing...":"{{ users }} and more are typing...","{{ users }} and {{ user }} are typing...":"{{ users }} and {{ user }} are typing...","{{ watcherCount }} online":"{{ watcherCount }} çevrimiçi","🏙 Attachment...":"🏙 Ek..."};

var defaultNS = 'translation';
var defaultLng = 'en';
Dayjs__default["default"].extend(updateLocale__default["default"]);
Dayjs__default["default"].updateLocale('de', {
    calendar: {
        lastDay: '[gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT',
        nextDay: '[morgen um] LT',
        nextWeek: 'dddd [um] LT',
        sameDay: '[heute um] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('es', {
    calendar: {
        lastDay: '[ayer a las] LT',
        lastWeek: '[pasado] dddd [a] LT',
        nextDay: '[mañana a] LT',
        nextWeek: 'dddd [a] LT',
        sameDay: '[hoy a las] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('fr', {
    calendar: {
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        sameDay: '[Aujourd’hui à] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('hi', {
    calendar: {
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        sameDay: '[आज] LT',
        sameElse: 'L',
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiem: function (hour) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
        return hour;
    },
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
});
Dayjs__default["default"].updateLocale('it', {
    calendar: {
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        sameDay: '[Oggi alle] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('ja', {
    calendar: {
        lastDay: '[昨日] LT',
        lastWeek: 'dddd LT',
        nextDay: '[明日] LT',
        nextWeek: '[次の] dddd LT',
        sameDay: '[今日] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('ko', {
    calendar: {
        lastDay: '[어제] LT',
        lastWeek: '[지난] dddd LT',
        nextDay: '[내일] LT',
        nextWeek: 'dddd LT',
        sameDay: '[오늘] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('nl', {
    calendar: {
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        sameDay: '[vandaag om] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('pt', {
    calendar: {
        lastDay: '[ontem às] LT',
        lastWeek: 'dddd [passada às] LT',
        nextDay: '[amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        sameDay: '[hoje às] LT',
        sameElse: 'L',
    },
});
Dayjs__default["default"].updateLocale('ru', {
    calendar: {
        lastDay: '[Вчера, в] LT',
        nextDay: '[Завтра, в] LT',
        sameDay: '[Сегодня, в] LT',
    },
});
Dayjs__default["default"].updateLocale('tr', {
    calendar: {
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        sameDay: '[bugün saat] LT',
        sameElse: 'L',
    },
});
var en_locale = {
    formats: {},
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    relativeTime: {},
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
// Type guards to check DayJs
var isDayJs = function (dateTimeParser) {
    return dateTimeParser.extend !== undefined;
};
/**
 * Wrapper around [i18next](https://www.i18next.com/) class for Stream related translations.
 * Instance of this class should be provided to Chat component to handle translations.
 * Stream provides following list of in-built translations:
 * 1. English (en)
 * 2. Dutch (nl)
 * 3. Russian (ru)
 * 4. Turkish (tr)
 * 5. French (fr)
 * 6. Italian (it)
 * 7. Hindi (hi)
 * 8. Spanish (es)
 * 9. Portuguese (pt)
 * 10. German (de)
 * 11. Japanese (ja)
 * 12. Korean (ko)
 *
 * Simplest way to start using chat components in one of the in-built languages would be following:
 *
 * ```
 * const i18n = new Streami18n({ language 'nl' });
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * If you would like to override certain keys in in-built translation.
 * UI will be automatically updated in this case.
 *
 * ```
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  translationsForLanguage: {
 *    'Nothing yet...': 'Nog Niet ...',
 *    '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
 *  }
 * });
 *
 * If you would like to register additional languages, use registerTranslation. You can add as many languages as you want:
 *
 * i18n.registerTranslation('zh', {
 *  'Nothing yet...': 'Nog Niet ...',
 *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
 * });
 *
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * You can use the same function to add whole new language as well.
 *
 * ```
 * const i18n = new Streami18n();
 *
 * i18n.registerTranslation('mr', {
 *  'Nothing yet...': 'काहीही नाही  ...',
 *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} आणि {{ secondUser }} टीपी करत आहेत ',
 * });
 *
 * // Make sure to call setLanguage to reflect new language in UI.
 * i18n.setLanguage('it');
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * ## Datetime translations
 *
 * Stream react chat components uses [dayjs](https://day.js.org/en/) internally by default to format datetime stamp.
 * e.g., in ChannelPreview, MessageContent components.
 * Dayjs has locale support as well - https://day.js.org/docs/en/i18n/i18n
 * Dayjs is a lightweight alternative to Momentjs with the same modern API.
 *
 * Dayjs provides locale config for plenty of languages, you can check the whole list of locale configs at following url
 * https://github.com/iamkun/dayjs/tree/dev/src/locale
 *
 * You can either provide the dayjs locale config while registering
 * language with Streami18n (either via constructor or registerTranslation()) or you can provide your own Dayjs or Moment instance
 * to Streami18n constructor, which will be then used internally (using the language locale) in components.
 *
 * 1. Via language registration
 *
 * e.g.,
 * ```
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  dayjsLocaleConfigForLanguage: {
 *    months: [...],
 *    monthsShort: [...],
 *    calendar: {
 *      sameDay: ...'
 *    }
 *  }
 * });
 * ```
 *
 * Similarly, you can add locale config for moment while registering translation via `registerTranslation` function.
 *
 * e.g.,
 * ```
 * const i18n = new Streami18n();
 *
 * i18n.registerTranslation(
 *  'mr',
 *  {
 *    'Nothing yet...': 'काहीही नाही  ...',
 *    '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} आणि {{ secondUser }} टीपी करत आहेत ',
 *  },
 *  {
 *    months: [...],
 *    monthsShort: [...],
 *    calendar: {
 *      sameDay: ...'
 *    }
 *  }
 * );
 *```
 * 2. Provide your own Moment object
 *
 * ```js
 * import 'moment/locale/nl';
 * import 'moment/locale/it';
 * // or if you want to include all locales
 * import 'moment/min/locales';
 *
 * import Moment from moment
 *
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  DateTimeParser: Moment
 * })
 * ```
 *
 * 3. Provide your own Dayjs object
 *
 * ```js
 * import Dayjs from 'dayjs'
 *
 * import 'dayjs/locale/nl';
 * import 'dayjs/locale/it';
 * // or if you want to include all locales
 * import 'dayjs/min/locales';
 *
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  DateTimeParser: Dayjs
 * })
 * ```
 * If you would like to stick with english language for datetimes in Stream components, you can set `disableDateTimeTranslations` to true.
 *
 */
var defaultStreami18nOptions = {
    DateTimeParser: Dayjs__default["default"],
    dayjsLocaleConfigForLanguage: null,
    debug: false,
    disableDateTimeTranslations: false,
    language: 'en',
    logger: function (message) { return console.warn(message); },
};
var defaultTranslatorFunction = function (key) { return key; };
var Streami18n = /** @class */ (function () {
    /**
     * Constructor accepts following options:
     *  - language (String) default: 'en'
     *    Language code e.g., en, tr
     *
     *  - translationsForLanguage (object)
     *    Translations object. Please check src/i18n/en.json for example.
     *
     *  - disableDateTimeTranslations (boolean) default: false
     *    Disable translations for date-times
     *
     *  - debug (boolean) default: false
     *    Enable debug mode in internal i18n class
     *
     *  - logger (function) default: () => {}
     *    Logger function to log warnings/errors from this class
     *
     *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
     *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
     *    corresponding to language (param)
     *
     *  - DateTimeParser (function) Moment or Dayjs instance/function.
     *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
     *
     * @param {*} options
     */
    function Streami18n(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (options === void 0) { options = {}; }
        var _this = this;
        this.i18nInstance = i18n__default["default"].createInstance();
        this.Dayjs = null;
        this.setLanguageCallback = function () { return null; };
        this.initialized = false;
        this.t = defaultTranslatorFunction;
        this.translations = {
            de: (_a = {}, _a[defaultNS] = deTranslations, _a),
            en: (_b = {}, _b[defaultNS] = enTranslations, _b),
            es: (_c = {}, _c[defaultNS] = esTranslations, _c),
            fr: (_d = {}, _d[defaultNS] = frTranslations, _d),
            hi: (_e = {}, _e[defaultNS] = hiTranslations, _e),
            it: (_f = {}, _f[defaultNS] = itTranslations, _f),
            ja: (_g = {}, _g[defaultNS] = jaTranslations, _g),
            ko: (_h = {}, _h[defaultNS] = koTranslations, _h),
            nl: (_j = {}, _j[defaultNS] = nlTranslations, _j),
            pt: (_k = {}, _k[defaultNS] = ptTranslations, _k),
            ru: (_l = {}, _l[defaultNS] = ruTranslations, _l),
            tr: (_m = {}, _m[defaultNS] = trTranslations, _m),
        };
        /**
         * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
         * when user calls registerTranslation() function. So instead we will store the locale configs
         * given to registerTranslation() function in `dayjsLocales` object, and register the required locale
         * with moment, when setLanguage is called.
         * */
        this.dayjsLocales = {};
        this.localeExists = function (language) {
            if (_this.isCustomDateTimeParser)
                return true;
            return Object.keys(Dayjs__default["default"].Ls).indexOf(language) > -1;
        };
        this.validateCurrentLanguage = function () {
            var availableLanguages = Object.keys(_this.translations);
            if (availableLanguages.indexOf(_this.currentLanguage) === -1) {
                _this.logger("Streami18n: '".concat(_this.currentLanguage, "' language is not registered.") +
                    " Please make sure to call streami18n.registerTranslation('".concat(_this.currentLanguage, "', {...}) or ") +
                    "use one the built-in supported languages - ".concat(_this.getAvailableLanguages()));
                _this.currentLanguage = defaultLng;
            }
        };
        /** Returns an instance of i18next used within this class instance */
        this.geti18Instance = function () { return _this.i18nInstance; };
        /** Returns list of available languages. */
        this.getAvailableLanguages = function () { return Object.keys(_this.translations); };
        /** Returns all the translation dictionary for all inbuilt-languages */
        this.getTranslations = function () { return _this.translations; };
        var finalOptions = __assign(__assign({}, defaultStreami18nOptions), options);
        // Prepare the i18next configuration.
        this.logger = finalOptions.logger;
        this.currentLanguage = finalOptions.language;
        this.DateTimeParser = finalOptions.DateTimeParser;
        try {
            if (this.DateTimeParser && isDayJs(this.DateTimeParser)) {
                this.DateTimeParser.extend(LocalizedFormat__default["default"]);
                this.DateTimeParser.extend(calendar__default["default"]);
                this.DateTimeParser.extend(localeData__default["default"]);
                this.DateTimeParser.extend(relativeTime__default["default"]);
            }
        }
        catch (error) {
            throw Error("Streami18n: Looks like you wanted to provide Dayjs instance, but something went wrong while adding plugins ".concat(error));
        }
        this.isCustomDateTimeParser = !!options.DateTimeParser;
        var translationsForLanguage = finalOptions.translationsForLanguage;
        if (translationsForLanguage) {
            this.translations[this.currentLanguage] = (_o = {},
                _o[defaultNS] = this.translations[this.currentLanguage] &&
                    this.translations[this.currentLanguage][defaultNS]
                    ? __assign(__assign({}, this.translations[this.currentLanguage][defaultNS]), translationsForLanguage) : translationsForLanguage,
                _o);
        }
        // If translations don't exist for given language, then set it as empty object.
        if (!this.translations[this.currentLanguage]) {
            this.translations[this.currentLanguage] = (_p = {},
                _p[defaultNS] = {},
                _p);
        }
        this.i18nextConfig = {
            debug: finalOptions.debug,
            fallbackLng: false,
            interpolation: { escapeValue: false },
            keySeparator: false,
            lng: this.currentLanguage,
            nsSeparator: false,
            parseMissingKeyHandler: function (key) {
                _this.logger("Streami18n: Missing translation for key: ".concat(key));
                return key;
            },
        };
        this.validateCurrentLanguage();
        var dayjsLocaleConfigForLanguage = finalOptions.dayjsLocaleConfigForLanguage;
        if (dayjsLocaleConfigForLanguage) {
            this.addOrUpdateLocale(this.currentLanguage, __assign({}, dayjsLocaleConfigForLanguage));
        }
        else if (!this.localeExists(this.currentLanguage)) {
            this.logger("Streami18n: Streami18n(...) - Locale config for ".concat(this.currentLanguage, " does not exist in momentjs.") +
                "Please import the locale file using \"import 'moment/locale/".concat(this.currentLanguage, "';\" in your app or ") +
                "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
        }
        this.tDateTimeParser = function (timestamp) {
            if (finalOptions.disableDateTimeTranslations || !_this.localeExists(_this.currentLanguage)) {
                /**
                 * TS needs to know which is being called to accept the chain call
                 */
                if (isDayJs(_this.DateTimeParser)) {
                    return _this.DateTimeParser(timestamp).locale(defaultLng);
                }
                return _this.DateTimeParser(timestamp).locale(defaultLng);
            }
            if (isDayJs(_this.DateTimeParser)) {
                return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
            }
            return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
        };
    }
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    Streami18n.prototype.init = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validateCurrentLanguage();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.i18nInstance.init(__assign(__assign({}, this.i18nextConfig), { lng: this.currentLanguage, resources: this.translations }))];
                    case 2:
                        _a.t = _b.sent();
                        this.initialized = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.logger("Something went wrong with init: ".concat(JSON.stringify(error_1)));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, {
                            t: this.t,
                            tDateTimeParser: this.tDateTimeParser,
                        }];
                }
            });
        });
    };
    /**
     * Returns current version translator function.
     */
    Streami18n.prototype.getTranslators = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        if (this.dayjsLocales[this.currentLanguage]) {
                            this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                        }
                        return [4 /*yield*/, this.init()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, {
                            t: this.t,
                            tDateTimeParser: this.tDateTimeParser,
                        }];
                }
            });
        });
    };
    Streami18n.prototype.registerTranslation = function (language, translation, customDayjsLocale) {
        var _a;
        if (!translation) {
            this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) called without translation");
            return;
        }
        if (!this.translations[language]) {
            this.translations[language] = (_a = {}, _a[defaultNS] = translation, _a);
        }
        else {
            this.translations[language][defaultNS] = translation;
        }
        if (customDayjsLocale) {
            this.dayjsLocales[language] = __assign({}, customDayjsLocale);
        }
        else if (!this.localeExists(language)) {
            this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) - " +
                "Locale config for ".concat(language, " does not exist in Dayjs.") +
                "Please import the locale file using \"import 'dayjs/locale/".concat(language, "';\" in your app or ") +
                "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
        }
        if (this.initialized) {
            this.i18nInstance.addResources(language, defaultNS, translation);
        }
    };
    Streami18n.prototype.addOrUpdateLocale = function (key, config) {
        if (this.localeExists(key)) {
            Dayjs__default["default"].updateLocale(key, __assign({}, config));
        }
        else {
            // Merging the custom locale config with en config, so missing keys can default to english.
            Dayjs__default["default"].locale(__assign(__assign({ name: key }, en_locale), config), undefined, true);
        }
    };
    Streami18n.prototype.setLanguage = function (language) {
        return __awaiter$1(this, void 0, void 0, function () {
            var t, error_2;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentLanguage = language;
                        if (!this.initialized)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.i18nInstance.changeLanguage(language)];
                    case 2:
                        t = _a.sent();
                        if (this.dayjsLocales[language]) {
                            this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                        }
                        this.setLanguageCallback(t);
                        return [2 /*return*/, t];
                    case 3:
                        error_2 = _a.sent();
                        this.logger("Failed to set language: ".concat(JSON.stringify(error_2)));
                        return [2 /*return*/, this.t];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Streami18n.prototype.registerSetLanguageCallback = function (callback) {
        this.setLanguageCallback = callback;
    };
    return Streami18n;
}());

Dayjs__default["default"].extend(calendar__default["default"]);
Dayjs__default["default"].extend(LocalizedFormat__default["default"]);
var isLanguageSupported = function (language) {
    var translations = ['de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'nl', 'pt', 'ru', 'tr'];
    return translations.some(function (translation) { return language === translation; });
};
var isDayOrMoment = function (output) {
    return !!(output === null || output === void 0 ? void 0 : output.isSame);
};
var isDate = function (output) {
    return !!(output === null || output === void 0 ? void 0 : output.getMonth);
};
var isNumberOrString = function (output) {
    return typeof output === 'string' || typeof output === 'number';
};
var defaultDateTimeParser = function (input) { return Dayjs__default["default"](input); };
var TranslationContext = React__default["default"].createContext({
    t: defaultTranslatorFunction,
    tDateTimeParser: defaultDateTimeParser,
    userLanguage: 'en',
});
var TranslationProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(TranslationContext.Provider, { value: value }, children));
};
var useTranslationContext = function (componentName) {
    var contextValue = React.useContext(TranslationContext);
    if (!contextValue) {
        console.warn("The useTranslationContext hook was called outside of the TranslationContext provider. Make sure this hook is called within a child of the Chat component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
var withTranslationContext = function (Component) {
    var WithTranslationContextComponent = function (props) {
        var translationContext = useTranslationContext();
        return React__default["default"].createElement(Component, __assign({}, props, translationContext));
    };
    WithTranslationContextComponent.displayName = "WithTranslationContext".concat(getDisplayName(Component));
    return WithTranslationContextComponent;
};

var TypingContext = React__default["default"].createContext(undefined);
var TypingProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React__default["default"].createElement(TypingContext.Provider, { value: value }, children));
};
var useTypingContext = function (componentName) {
    var contextValue = React.useContext(TypingContext);
    if (!contextValue) {
        console.warn("The useTypingContext hook was called outside of the TypingContext provider. Make sure this hook is called within a child of the Channel component. The errored call is located in the ".concat(componentName, " component."));
        return {};
    }
    return contextValue;
};
/**
 * Typescript currently does not support partial inference, so if TypingContext
 * typing is desired while using the HOC withTypingContext, the Props for the
 * wrapped component must be provided as the first generic.
 */
var withTypingContext = function (Component) {
    var WithTypingContextComponent = function (props) {
        var typingContext = useTypingContext();
        return React__default["default"].createElement(Component, __assign({}, props, typingContext));
    };
    WithTypingContextComponent.displayName = (Component.displayName ||
        Component.name ||
        'Component').replace('Base', '');
    return WithTypingContextComponent;
};

var Modal = function (_a) {
    var children = _a.children, onClose = _a.onClose, open = _a.open;
    var t = useTranslationContext('Modal').t;
    var themeVersion = useChatContext('Modal').themeVersion;
    var innerRef = React.useRef(null);
    var closeRef = React.useRef(null);
    var handleClick = function (event) {
        var target = event.target;
        if (!innerRef.current || !closeRef.current)
            return;
        if (!innerRef.current.contains(target) || closeRef.current.contains(target))
            onClose === null || onClose === void 0 ? void 0 : onClose(event);
    };
    React.useEffect(function () {
        if (!open)
            return;
        var handleKeyDown = function (event) {
            if (event.key === 'Escape')
                onClose === null || onClose === void 0 ? void 0 : onClose(event);
        };
        document.addEventListener('keydown', handleKeyDown);
        return function () { return document.removeEventListener('keydown', handleKeyDown); };
    }, [onClose, open]);
    if (!open)
        return null;
    return (React__default["default"].createElement("div", { className: 'str-chat__modal str-chat__modal--open', onClick: handleClick },
        React__default["default"].createElement("button", { className: 'str-chat__modal__close-button', ref: closeRef, title: t('Close') },
            themeVersion === '2' && React__default["default"].createElement(CloseIconRound, null),
            themeVersion === '1' && (React__default["default"].createElement(React__default["default"].Fragment, null,
                t('Close'),
                React__default["default"].createElement("svg", { height: '10', width: '10', xmlns: 'http://www.w3.org/2000/svg' },
                    React__default["default"].createElement("path", { d: 'M9.916 1.027L8.973.084 5 4.058 1.027.084l-.943.943L4.058 5 .084 8.973l.943.943L5 5.942l3.973 3.974.943-.943L5.942 5z', fillRule: 'evenodd' }))))),
        React__default["default"].createElement("div", { className: 'str-chat__modal__inner str-chat-react__modal__inner', ref: innerRef }, children)));
};

var ModalGallery = function (props) {
    var images = props.images, index = props.index;
    var formattedArray = React.useMemo(function () {
        return images.map(function (image) {
            var imageSrc = image.image_url || image.thumb_url || '';
            return {
                original: imageSrc,
                originalAlt: 'User uploaded content',
                source: imageSrc,
            };
        });
    }, [images]);
    return (React__default["default"].createElement(ImageGallery__default["default"], { items: formattedArray, showIndex: true, showPlayButton: false, showThumbnails: false, startIndex: index }));
};

var UnMemoizedGallery = function (props) {
    var images = props.images;
    var _a = React.useState(0), index = _a[0], setIndex = _a[1];
    var _b = React.useState(false), modalOpen = _b[0], setModalOpen = _b[1];
    var _c = useComponentContext('Gallery').ModalGallery, ModalGallery$1 = _c === void 0 ? ModalGallery : _c;
    var t = useTranslationContext('Gallery').t;
    var countImagesDisplayedInPreview = 4;
    var lastImageIndexInPreview = countImagesDisplayedInPreview - 1;
    var toggleModal = function (selectedIndex) {
        if (modalOpen) {
            setModalOpen(false);
        }
        else {
            setIndex(selectedIndex);
            setModalOpen(true);
        }
    };
    var renderImages = images.slice(0, countImagesDisplayedInPreview).map(function (image, i) {
        return i === lastImageIndexInPreview && images.length > countImagesDisplayedInPreview ? (React__default["default"].createElement("button", { className: 'str-chat__gallery-placeholder', key: "gallery-image-".concat(i), onClick: function () { return toggleModal(i); }, style: {
                backgroundImage: "url(".concat(images[lastImageIndexInPreview].image_url, ")"),
            } },
            React__default["default"].createElement("p", null, t('{{ imageCount }} more', {
                imageCount: images.length - countImagesDisplayedInPreview,
            })))) : (React__default["default"].createElement("button", { className: 'str-chat__gallery-image', "data-testid": 'gallery-image', key: "gallery-image-".concat(i), onClick: function () { return toggleModal(i); } },
            React__default["default"].createElement("img", { alt: 'User uploaded content', src: image.image_url || image.thumb_url })));
    });
    var className = clsx('str-chat__gallery', {
        'str-chat__gallery--square': images.length > lastImageIndexInPreview,
        'str-chat__gallery-two-rows': images.length > 2,
    });
    return (React__default["default"].createElement("div", { className: className },
        renderImages,
        React__default["default"].createElement(Modal, { onClose: function () { return setModalOpen(function (modalOpen) { return !modalOpen; }); }, open: modalOpen },
            React__default["default"].createElement(ModalGallery$1, { images: images, index: index }))));
};
/**
 * Displays images in a simple responsive grid with a light box to view the images.
 */
var Gallery = React__default["default"].memo(UnMemoizedGallery);

/**
 * A simple component that displays an image.
 */
var ImageComponent = function (props) {
    var _a = props.dimensions, dimensions = _a === void 0 ? {} : _a, fallback = props.fallback, image_url = props.image_url, thumb_url = props.thumb_url;
    var _b = React.useState(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    var _c = useComponentContext('ImageComponent').ModalGallery, ModalGallery$1 = _c === void 0 ? ModalGallery : _c;
    var imageSrc = sanitizeUrl.sanitizeUrl(image_url || thumb_url);
    var toggleModal = function () { return setModalIsOpen(function (modalIsOpen) { return !modalIsOpen; }); };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("img", __assign({ alt: fallback, className: 'str-chat__message-attachment--img', "data-testid": 'image-test', onClick: toggleModal, src: imageSrc, tabIndex: 0 }, dimensions)),
        React__default["default"].createElement(Modal, { onClose: toggleModal, open: modalIsOpen },
            React__default["default"].createElement(ModalGallery$1, { images: [props], index: 0 }))));
};

var getHostFromURL = function (url) {
    if (url !== undefined && url !== null) {
        var trimmedUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
        return trimmedUrl;
    }
    return null;
};
var UnableToRenderCard = function (_a) {
    var _b;
    var type = _a.type;
    var t = useTranslationContext('Card').t;
    return (React__default["default"].createElement("div", { className: clsx('str-chat__message-attachment-card', (_b = {},
            _b["str-chat__message-attachment-card--".concat(type)] = type,
            _b)) },
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--content' },
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--text' }, t('this content could not be displayed')))));
};
var CardV1 = function (props) {
    var asset_url = props.asset_url, giphy = props.giphy, image_url = props.image_url, og_scrape_url = props.og_scrape_url, text = props.text, thumb_url = props.thumb_url, title = props.title, title_link = props.title_link, type = props.type;
    var giphyVersionName = useChannelStateContext('Card').giphyVersion;
    var image = thumb_url || image_url;
    var dimensions = {};
    if (type === 'giphy' && typeof giphy !== 'undefined') {
        var giphyVersion = giphy[giphyVersionName];
        image = giphyVersion.url;
        dimensions.height = giphyVersion.height;
        dimensions.width = giphyVersion.width;
    }
    if (!title && !title_link && !asset_url && !image) {
        return React__default["default"].createElement(UnableToRenderCard, { type: type });
    }
    if (!title_link && !og_scrape_url) {
        return null;
    }
    return (React__default["default"].createElement("div", { className: "str-chat__message-attachment-card str-chat__message-attachment-card--".concat(type) },
        React__default["default"].createElement(CardHeader, __assign({}, props, { dimensions: dimensions, image: image })),
        type !== 'video' && (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--content' },
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--flex' },
                title && React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--title' }, title),
                text && React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--text' }, text),
                (title_link || og_scrape_url) && (React__default["default"].createElement(SafeAnchor, { className: 'str-chat__message-attachment-card--url', href: title_link || og_scrape_url, rel: 'noopener noreferrer', target: '_blank' }, getHostFromURL(title_link || og_scrape_url))))))));
};
var SourceLink = function (_a) {
    var author_name = _a.author_name, url = _a.url;
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--source-link', "data-testid": 'card-source-link' },
        React__default["default"].createElement(SafeAnchor, { className: 'str-chat__message-attachment-card--url', href: url, rel: 'noopener noreferrer', target: '_blank' }, author_name || getHostFromURL(url))));
};
var CardHeader = function (props) {
    var asset_url = props.asset_url, dimensions = props.dimensions, image = props.image, image_url = props.image_url, thumb_url = props.thumb_url, title = props.title, type = props.type;
    var visual = null;
    if (asset_url && type === 'video') {
        visual = (React__default["default"].createElement(ReactPlayer__default["default"], { className: 'react-player', controls: true, height: '100%', url: asset_url, width: '100%' }));
    }
    else if (image) {
        visual = (React__default["default"].createElement(ImageComponent, { dimensions: dimensions, fallback: title || image, image_url: image_url, thumb_url: thumb_url }));
    }
    return visual ? (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--header str-chat__message-attachment-card-react--header', "data-testid": 'card-header' }, visual)) : null;
};
var CardContent = function (props) {
    var author_name = props.author_name, og_scrape_url = props.og_scrape_url, text = props.text, title = props.title, title_link = props.title_link, type = props.type;
    var url = title_link || og_scrape_url;
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--content' }, type === 'audio' ? (React__default["default"].createElement(CardAudio, { og: props })) : (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--flex' },
        url && React__default["default"].createElement(SourceLink, { author_name: author_name, url: url }),
        title && React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--title' }, title),
        text && React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card--text' }, text)))));
};
var CardV2 = function (props) {
    var asset_url = props.asset_url, giphy = props.giphy, image_url = props.image_url, thumb_url = props.thumb_url, title = props.title, title_link = props.title_link, type = props.type;
    var giphyVersionName = useChannelStateContext('CardHeader').giphyVersion;
    var image = thumb_url || image_url;
    var dimensions = {};
    if (type === 'giphy' && typeof giphy !== 'undefined') {
        var giphyVersion = giphy[giphyVersionName];
        image = giphyVersion.url;
        dimensions.height = giphyVersion.height;
        dimensions.width = giphyVersion.width;
    }
    if (!title && !title_link && !asset_url && !image) {
        return React__default["default"].createElement(UnableToRenderCard, null);
    }
    return (React__default["default"].createElement("div", { className: "str-chat__message-attachment-card str-chat__message-attachment-card--".concat(type) },
        React__default["default"].createElement(CardHeader, __assign({}, props, { dimensions: dimensions, image: image })),
        React__default["default"].createElement(CardContent, __assign({}, props))));
};
var CardAudio = function (_a) {
    var _b = _a.og, asset_url = _b.asset_url, author_name = _b.author_name, og_scrape_url = _b.og_scrape_url, text = _b.text, title = _b.title, title_link = _b.title_link;
    var _c = useAudioController(), audioRef = _c.audioRef, isPlaying = _c.isPlaying, progress = _c.progress, seek = _c.seek, togglePlay = _c.togglePlay;
    var url = title_link || og_scrape_url;
    var dataTestId = 'card-audio-widget';
    var rootClassName = 'str-chat__message-attachment-card-audio-widget';
    return (React__default["default"].createElement("div", { className: rootClassName, "data-testid": dataTestId },
        asset_url && (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("audio", { ref: audioRef },
                React__default["default"].createElement("source", { "data-testid": 'audio-source', src: asset_url, type: 'audio/mp3' })),
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-card-audio-widget--first-row' },
                React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--play-controls' },
                    React__default["default"].createElement(PlayButton, { isPlaying: isPlaying, onClick: togglePlay })),
                React__default["default"].createElement(ProgressBar, { onClick: seek, progress: progress })))),
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--second-row' },
            url && React__default["default"].createElement(SourceLink, { author_name: author_name, url: url }),
            title && React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--title' }, title),
            text && (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-audio-widget--description' }, text)))));
};
var UnMemoizedCard = function (props) {
    var themeVersion = useChatContext('Card').themeVersion;
    return themeVersion === '2' ? React__default["default"].createElement(CardV2, __assign({}, props)) : React__default["default"].createElement(CardV1, __assign({}, props));
};
/**
 * Simple Card Layout for displaying links
 */
var Card = React__default["default"].memo(UnMemoizedCard);

var UnMemoizedFileAttachmentV1 = function (_a) {
    var attachment = _a.attachment;
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item', "data-testid": 'attachment-file' },
        React__default["default"].createElement(reactFileUtils.FileIcon, { big: true, mimeType: attachment.mime_type, size: 30 }),
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item-text' },
            React__default["default"].createElement(SafeAnchor, { download: true, href: attachment.asset_url, target: '_blank' }, attachment.title),
            React__default["default"].createElement(FileSizeIndicator, { fileSize: attachment.file_size }))));
};
var UnMemoizedFileAttachmentV2 = function (_a) {
    var attachment = _a.attachment;
    return (React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item', "data-testid": 'attachment-file' },
        React__default["default"].createElement(reactFileUtils.FileIcon, { className: 'str-chat__file-icon', mimeType: attachment.mime_type, version: '2' }),
        React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item-text' },
            React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item-first-row' },
                React__default["default"].createElement("div", { className: 'str-chat__message-attachment-file--item-name', "data-testid": 'file-title' }, attachment.title),
                React__default["default"].createElement(DownloadButton, { assetUrl: attachment.asset_url })),
            React__default["default"].createElement(FileSizeIndicator, { fileSize: attachment.file_size }))));
};
var UnMemoizedFileAttachment = function (_a) {
    var attachment = _a.attachment;
    var themeVersion = useChatContext('FileAttachment').themeVersion;
    return themeVersion === '2' ? (React__default["default"].createElement(UnMemoizedFileAttachmentV2, { attachment: attachment })) : (React__default["default"].createElement(UnMemoizedFileAttachmentV1, { attachment: attachment }));
};
var FileAttachment = React__default["default"].memo(UnMemoizedFileAttachment);

var SUPPORTED_VIDEO_FORMATS = ['video/mp4', 'video/ogg', 'video/webm', 'video/quicktime'];
var isScrapedContent = function (attachment) { return attachment.og_scrape_url || attachment.title_link; };
var isUploadedImage = function (attachment) { return attachment.type === 'image' && !isScrapedContent(attachment); };
var isGalleryAttachmentType = function (output) { return Array.isArray(output.images); };
var isAudioAttachment = function (attachment) { return attachment.type === 'audio'; };
var isFileAttachment = function (attachment) {
    return attachment.type === 'file' ||
        (attachment.mime_type &&
            SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type) === -1 &&
            attachment.type !== 'video');
};
var isMediaAttachment = function (attachment) {
    return (attachment.mime_type && SUPPORTED_VIDEO_FORMATS.indexOf(attachment.mime_type) !== -1) ||
        attachment.type === 'video';
};
var isSvgAttachment = function (attachment) {
    var filename = attachment.fallback || '';
    return filename.toLowerCase().endsWith('.svg');
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AttachmentWithinContainer`
 */
var renderAttachmentWithinContainer = function (props) {
    var _a;
    var _b;
    var attachment = props.attachment, children = props.children, componentType = props.componentType;
    var isGAT = isGalleryAttachmentType(attachment);
    var extra = '';
    if (!isGAT) {
        extra =
            componentType === 'card' && !(attachment === null || attachment === void 0 ? void 0 : attachment.image_url) && !(attachment === null || attachment === void 0 ? void 0 : attachment.thumb_url)
                ? 'no-image'
                : ((_b = attachment === null || attachment === void 0 ? void 0 : attachment.actions) === null || _b === void 0 ? void 0 : _b.length)
                    ? 'actions'
                    : '';
    }
    var classNames = clsx('str-chat__message-attachment', (_a = {},
        _a["str-chat__message-attachment--".concat(componentType)] = componentType,
        _a["str-chat__message-attachment--".concat(attachment === null || attachment === void 0 ? void 0 : attachment.type)] = attachment === null || attachment === void 0 ? void 0 : attachment.type,
        _a["str-chat__message-attachment--".concat(componentType, "--").concat(extra)] = componentType && extra,
        _a['str-chat__message-attachment--svg-image'] = isSvgAttachment(attachment),
        _a['str-chat__message-attachment-with-actions'] = extra === 'actions',
        _a));
    return React__default["default"].createElement("div", { className: classNames }, children);
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AttachmentActionsContainer`
 */
var renderAttachmentActions = function (props) {
    var _a;
    var actionHandler = props.actionHandler, attachment = props.attachment, _b = props.AttachmentActions, AttachmentActions$1 = _b === void 0 ? AttachmentActions : _b;
    if (!((_a = attachment.actions) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    return (React__default["default"].createElement(AttachmentActions$1, __assign({}, attachment, { actionHandler: function (event, name, value) { return actionHandler === null || actionHandler === void 0 ? void 0 : actionHandler(event, name, value); }, actions: attachment.actions, id: attachment.id || '', key: "key-actions-".concat(attachment.id), text: attachment.text || '' })));
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/GalleryContainer`
 */
var renderGallery = function (props) {
    var attachment = props.attachment, _a = props.Gallery, Gallery$1 = _a === void 0 ? Gallery : _a;
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: React__default["default"].createElement(Gallery$1, { images: attachment.images || [], key: 'gallery' }),
        componentType: 'gallery',
    });
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/ImageContainer`
 */
var renderImage = function (props) {
    var attachment = props.attachment, _a = props.Image, Image = _a === void 0 ? ImageComponent : _a;
    if (attachment.actions && attachment.actions.length) {
        return renderAttachmentWithinContainer({
            attachment: attachment,
            children: (React__default["default"].createElement("div", { className: 'str-chat__attachment', key: "key-image-".concat(attachment.id) },
                React__default["default"].createElement(Image, __assign({}, attachment)),
                renderAttachmentActions(props))),
            componentType: 'image',
        });
    }
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: React__default["default"].createElement(Image, __assign({}, attachment, { key: "key-image-".concat(attachment.id) })),
        componentType: 'image',
    });
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/CardContainer`
 */
var renderCard = function (props) {
    var attachment = props.attachment, _a = props.Card, Card$1 = _a === void 0 ? Card : _a;
    if (attachment.actions && attachment.actions.length) {
        return renderAttachmentWithinContainer({
            attachment: attachment,
            children: (React__default["default"].createElement("div", { className: 'str-chat__attachment', key: "key-image-".concat(attachment.id) },
                React__default["default"].createElement(Card$1, __assign({}, attachment, { key: "key-card-".concat(attachment.id) })),
                renderAttachmentActions(props))),
            componentType: 'card',
        });
    }
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: React__default["default"].createElement(Card$1, __assign({}, attachment, { key: "key-card-".concat(attachment.id) })),
        componentType: 'card',
    });
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/FileContainer`
 */
var renderFile = function (props) {
    var attachment = props.attachment, _a = props.File, File = _a === void 0 ? FileAttachment : _a;
    if (!attachment.asset_url)
        return null;
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: React__default["default"].createElement(File, { attachment: attachment, key: "key-file-".concat(attachment.id) }),
        componentType: 'file',
    });
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/AudioContainer`
 */
var renderAudio = function (props) {
    var attachment = props.attachment, _a = props.Audio, Audio$1 = _a === void 0 ? Audio : _a;
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: (React__default["default"].createElement("div", { className: 'str-chat__attachment', key: "key-video-".concat(attachment.id) },
            React__default["default"].createElement(Audio$1, { og: attachment }))),
        componentType: 'audio',
    });
};
/**
 * @deprecated will be removed in the next major release,
 * replaced with the proper component equivalent `AttachmentContainer/MediaContainer`
 */
var renderMedia = function (props) {
    var _a;
    var attachment = props.attachment, _b = props.Media, Media = _b === void 0 ? ReactPlayer__default["default"] : _b;
    if ((_a = attachment.actions) === null || _a === void 0 ? void 0 : _a.length) {
        return renderAttachmentWithinContainer({
            attachment: attachment,
            children: (React__default["default"].createElement("div", { className: 'str-chat__attachment str-chat__attachment-media', key: "key-video-".concat(attachment.id) },
                React__default["default"].createElement("div", { className: 'str-chat__player-wrapper' },
                    React__default["default"].createElement(Media, { className: 'react-player', controls: true, height: '100%', url: attachment.asset_url, width: '100%' })),
                renderAttachmentActions(props))),
            componentType: 'media',
        });
    }
    return renderAttachmentWithinContainer({
        attachment: attachment,
        children: (React__default["default"].createElement("div", { className: 'str-chat__player-wrapper', key: "key-video-".concat(attachment.id) },
            React__default["default"].createElement(Media, { className: 'react-player', controls: true, height: '100%', url: attachment.asset_url, width: '100%' }))),
        componentType: 'media',
    });
};

var AttachmentWithinContainer = function (_a) {
    var _b;
    var _c;
    var attachment = _a.attachment, children = _a.children, componentType = _a.componentType;
    var isGAT = isGalleryAttachmentType(attachment);
    var extra = '';
    if (!isGAT) {
        extra =
            componentType === 'card' && !(attachment === null || attachment === void 0 ? void 0 : attachment.image_url) && !(attachment === null || attachment === void 0 ? void 0 : attachment.thumb_url)
                ? 'no-image'
                : ((_c = attachment === null || attachment === void 0 ? void 0 : attachment.actions) === null || _c === void 0 ? void 0 : _c.length)
                    ? 'actions'
                    : '';
    }
    var classNames = clsx('str-chat__message-attachment', (_b = {},
        _b["str-chat__message-attachment--".concat(componentType)] = componentType,
        _b["str-chat__message-attachment--".concat(attachment === null || attachment === void 0 ? void 0 : attachment.type)] = attachment === null || attachment === void 0 ? void 0 : attachment.type,
        _b["str-chat__message-attachment--".concat(componentType, "--").concat(extra)] = componentType && extra,
        _b['str-chat__message-attachment--svg-image'] = isSvgAttachment(attachment),
        _b['str-chat__message-attachment-with-actions'] = extra === 'actions',
        _b));
    return React__default["default"].createElement("div", { className: classNames }, children);
};
var AttachmentActionsContainer = function (_a) {
    var _b;
    var actionHandler = _a.actionHandler, attachment = _a.attachment, _c = _a.AttachmentActions, AttachmentActions$1 = _c === void 0 ? AttachmentActions : _c;
    if (!((_b = attachment.actions) === null || _b === void 0 ? void 0 : _b.length))
        return null;
    return (React__default["default"].createElement(AttachmentActions$1, __assign({}, attachment, { actionHandler: actionHandler, actions: attachment.actions, id: attachment.id || '', text: attachment.text || '' })));
};
var GalleryContainer = function (_a) {
    var attachment = _a.attachment, _b = _a.Gallery, Gallery$1 = _b === void 0 ? Gallery : _b;
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: 'gallery' },
        React__default["default"].createElement(Gallery$1, { images: attachment.images || [], key: 'gallery' })));
};
var ImageContainer = function (props) {
    var attachment = props.attachment, _a = props.Image, Image = _a === void 0 ? ImageComponent : _a;
    var componentType = 'image';
    if (attachment.actions && attachment.actions.length) {
        return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
            React__default["default"].createElement("div", { className: 'str-chat__attachment' },
                React__default["default"].createElement(Image, __assign({}, attachment)),
                React__default["default"].createElement(AttachmentActionsContainer, __assign({}, props)))));
    }
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
        React__default["default"].createElement(Image, __assign({}, attachment))));
};
var CardContainer = function (props) {
    var attachment = props.attachment, _a = props.Card, Card$1 = _a === void 0 ? Card : _a;
    var componentType = 'card';
    if (attachment.actions && attachment.actions.length) {
        return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
            React__default["default"].createElement("div", { className: 'str-chat__attachment' },
                React__default["default"].createElement(Card$1, __assign({}, attachment)),
                React__default["default"].createElement(AttachmentActionsContainer, __assign({}, props)))));
    }
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
        React__default["default"].createElement(Card$1, __assign({}, attachment))));
};
var FileContainer = function (_a) {
    var attachment = _a.attachment, _b = _a.File, File = _b === void 0 ? FileAttachment : _b;
    if (!attachment.asset_url)
        return null;
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: 'file' },
        React__default["default"].createElement(File, { attachment: attachment })));
};
var AudioContainer = function (_a) {
    var attachment = _a.attachment, _b = _a.Audio, Audio$1 = _b === void 0 ? Audio : _b;
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: 'audio' },
        React__default["default"].createElement("div", { className: 'str-chat__attachment' },
            React__default["default"].createElement(Audio$1, { og: attachment }))));
};
var MediaContainer = function (props) {
    var _a;
    var attachment = props.attachment, _b = props.Media, Media = _b === void 0 ? ReactPlayer__default["default"] : _b;
    var componentType = 'media';
    if ((_a = attachment.actions) === null || _a === void 0 ? void 0 : _a.length) {
        return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
            React__default["default"].createElement("div", { className: 'str-chat__attachment str-chat__attachment-media' },
                React__default["default"].createElement("div", { className: 'str-chat__player-wrapper' },
                    React__default["default"].createElement(Media, { className: 'react-player', controls: true, height: '100%', url: attachment.asset_url, width: '100%' })),
                React__default["default"].createElement(AttachmentActionsContainer, __assign({}, props)))));
    }
    return (React__default["default"].createElement(AttachmentWithinContainer, { attachment: attachment, componentType: componentType },
        React__default["default"].createElement("div", { className: 'str-chat__player-wrapper' },
            React__default["default"].createElement(Media, { className: 'react-player', controls: true, height: '100%', url: attachment.asset_url, width: '100%' }))));
};

var CONTAINER_MAP = {
    audio: AudioContainer,
    card: CardContainer,
    file: FileContainer,
    media: MediaContainer,
};
var ATTACHMENT_GROUPS_ORDER = [
    'card',
    'gallery',
    'image',
    'media',
    'audio',
    'file',
];
/**
 * A component used for rendering message attachments. By default, the component supports: AttachmentActions, Audio, Card, File, Gallery, Image, and Video
 */
var Attachment = function (props) {
    var attachments = props.attachments;
    var groupedAttachments = React.useMemo(function () { return renderGroupedAttachments(props); }, [attachments]);
    return (React__default["default"].createElement("div", { className: 'str-chat__attachment-list' }, ATTACHMENT_GROUPS_ORDER.reduce(function (acc, groupName) { return __spreadArray$1(__spreadArray$1([], acc, true), groupedAttachments[groupName], true); }, [])));
};
var renderGroupedAttachments = function (_a) {
    var attachments = _a.attachments, rest = __rest(_a, ["attachments"]);
    var uploadedImages = [];
    var containers = attachments.reduce(function (acc, attachment) {
        if (isUploadedImage(attachment)) {
            uploadedImages.push(__assign(__assign({}, attachment), { image_url: sanitizeUrl.sanitizeUrl(attachment.image_url), thumb_url: sanitizeUrl.sanitizeUrl(attachment.thumb_url) }));
        }
        else {
            var attachmentType = getAttachmentType(attachment);
            if (attachmentType) {
                var Container = CONTAINER_MAP[attachmentType];
                acc[attachmentType].push(React__default["default"].createElement(Container, __assign({ key: "".concat(attachmentType, "-").concat(acc[attachmentType].length) }, rest, { attachment: attachment })));
            }
        }
        return acc;
    }, {
        audio: [],
        card: [],
        file: [],
        gallery: [],
        image: [],
        media: [],
    });
    if (uploadedImages.length > 1) {
        containers['gallery'] = [
            React__default["default"].createElement(GalleryContainer, __assign({ key: 'gallery-container' }, rest, { attachment: {
                    images: uploadedImages,
                    type: 'gallery',
                } })),
        ];
    }
    else if (uploadedImages.length === 1) {
        containers['image'] = [
            React__default["default"].createElement(ImageContainer, __assign({ key: 'image-container' }, rest, { attachment: uploadedImages[0] })),
        ];
    }
    return containers;
};
var getAttachmentType = function (attachment) {
    if (isScrapedContent(attachment)) {
        return 'card';
    }
    else if (isMediaAttachment(attachment)) {
        return 'media';
    }
    else if (isAudioAttachment(attachment)) {
        return 'audio';
    }
    else if (isFileAttachment(attachment)) {
        return 'file';
    }
    return null;
};

var Item = /*#__PURE__*/React__default["default"].forwardRef(function Item(props, innerRef) {
  var className = props.className,
      Component = props.component,
      item = props.item,
      onClickHandler = props.onClickHandler,
      onSelectHandler = props.onSelectHandler,
      selected = props.selected,
      style = props.style;

  var _useChatContext = useChatContext('SuggestionItem'),
      themeVersion = _useChatContext.themeVersion;

  var selectItem = React.useCallback(function () {
    return onSelectHandler(item);
  }, [item, onClickHandler]);
  if (themeVersion === '2') return /*#__PURE__*/React__default["default"].createElement("li", {
    className: clsx(className, {
      'str-chat__suggestion-item--selected': selected
    }),
    style: style
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "",
    onClick: onClickHandler,
    onFocus: selectItem,
    onMouseEnter: selectItem,
    ref: innerRef
  }, /*#__PURE__*/React__default["default"].createElement(Component, {
    entity: item,
    selected: selected
  })));
  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: clsx('rta__item', className),
    style: style
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: clsx('rta__entity', {
      'rta__entity--selected': selected
    }),
    onClick: onClickHandler,
    onFocus: selectItem,
    onMouseEnter: selectItem,
    ref: innerRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    tabIndex: -1
  }, /*#__PURE__*/React__default["default"].createElement(Component, {
    entity: item,
    selected: selected
  }))));
});

function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

const convert$1 =
  /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  (
    /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */
    function (test) {
      if (test === undefined || test === null) {
        return ok$1
      }

      if (typeof test === 'string') {
        return typeFactory$1(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory$1(test) : propsFactory$1(test)
      }

      if (typeof test === 'function') {
        return castFactory$1(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  );
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory$1(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = convert$1(tests[index]);
  }

  return castFactory$1(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true
    }

    return false
  }
}

/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */
function propsFactory$1(check) {
  return castFactory$1(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    /** @type {string} */
    let key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false
    }

    return true
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */
function typeFactory$1(check) {
  return castFactory$1(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory$1(check) {
  return assertion

  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(...parameters) {
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters))
  }
}

// Utility to return true.
function ok$1() {
  return true
}

/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return '\u001B[33m' + d + '\u001B[39m'
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('./complex-types.js').Action} Action
 * @typedef {import('./complex-types.js').Index} Index
 * @typedef {import('./complex-types.js').ActionTuple} ActionTuple
 * @typedef {import('./complex-types.js').VisitorResult} VisitorResult
 * @typedef {import('./complex-types.js').Visitor} Visitor
 */

/**
 * Continue traversing as normal
 */
const CONTINUE = true;
/**
 * Do not traverse this node’s children
 */
const SKIP = 'skip';
/**
 * Stop traversing immediately
 */
const EXIT = false;

/**
 * Visit children of tree which pass test.
 *
 * @param tree
 *   Tree to walk
 * @param [test]
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Function called for nodes that pass `test`.
 * @param [reverse=false]
 *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
 */
const visitParents =
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */
  (
    /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types.js').Visitor<Node>} visitor
     * @param {boolean} [reverse=false]
     */
    function (tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
      }

      const is = convert$1(test);
      const step = reverse ? -1 : 1;

      factory(tree, null, [])();

      /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array<Parent>} parents
       */
      function factory(node, index, parents) {
        /** @type {Record<string, unknown>} */
        // @ts-expect-error: hush
        const value = typeof node === 'object' && node !== null ? node : {};
        /** @type {string|undefined} */
        let name;

        if (typeof value.type === 'string') {
          name =
            typeof value.tagName === 'string'
              ? value.tagName
              : typeof value.name === 'string'
              ? value.name
              : undefined;

          Object.defineProperty(visit, 'name', {
            value:
              'node (' +
              color(value.type + (name ? '<' + name + '>' : '')) +
              ')'
          });
        }

        return visit

        function visit() {
          /** @type {ActionTuple} */
          let result = [];
          /** @type {ActionTuple} */
          let subresult;
          /** @type {number} */
          let offset;
          /** @type {Array<Parent>} */
          let grandparents;

          if (!test || is(node, index, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));

            if (result[0] === EXIT) {
              return result
            }
          }

          // @ts-expect-error looks like a parent.
          if (node.children && result[0] !== SKIP) {
            // @ts-expect-error looks like a parent.
            offset = (reverse ? node.children.length : -1) + step;
            // @ts-expect-error looks like a parent.
            grandparents = parents.concat(node);

            // @ts-expect-error looks like a parent.
            while (offset > -1 && offset < node.children.length) {
              // @ts-expect-error looks like a parent.
              subresult = factory(node.children[offset], offset, grandparents)();

              if (subresult[0] === EXIT) {
                return subresult
              }

              offset =
                typeof subresult[1] === 'number' ? subresult[1] : offset + step;
            }
          }

          return result
        }
      }
    }
  );

/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

const convert =
  /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  (
    /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */
    function (test) {
      if (test === undefined || test === null) {
        return ok
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  );
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true
    }

    return false
  }
}

/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */
function propsFactory(check) {
  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    /** @type {string} */
    let key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false
    }

    return true
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check) {
  return assertion

  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(...parameters) {
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters))
  }
}

// Utility to return true.
function ok() {
  return true
}

/**
 * @typedef Options
 *   Configuration (optional).
 * @property {Test} [ignore]
 *   `unist-util-is` test used to assert parents
 *
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Text} Text
 * @typedef {Content|Root} Node
 * @typedef {Exclude<Extract<Node, import('mdast').Parent>, Root>} Parent
 *
 * @typedef {import('unist-util-visit-parents').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 *
 * @typedef RegExpMatchObject
 * @property {number} index
 * @property {string} input
 * @property {[Root, ...Array<Parent>, Text]} stack
 *
 * @typedef {string|RegExp} Find
 * @typedef {string|ReplaceFunction} Replace
 *
 * @typedef {[Find, Replace]} FindAndReplaceTuple
 * @typedef {Record<string, Replace>} FindAndReplaceSchema
 * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList
 *
 * @typedef {[RegExp, ReplaceFunction]} Pair
 * @typedef {Array<Pair>} Pairs
 */

const own = {}.hasOwnProperty;

/**
 * @param tree mdast tree
 * @param find Value to find and remove. When `string`, escaped and made into a global `RegExp`
 * @param [replace] Value to insert.
 *   * When `string`, turned into a Text node.
 *   * When `Function`, called with the results of calling `RegExp.exec` as
 *     arguments, in which case it can return a single or a list of `Node`,
 *     a `string` (which is wrapped in a `Text` node), or `false` to not replace
 * @param [options] Configuration.
 */
const findAndReplace =
  /**
   * @type {(
   *   ((tree: Node, find: Find, replace?: Replace, options?: Options) => Node) &
   *   ((tree: Node, schema: FindAndReplaceSchema|FindAndReplaceList, options?: Options) => Node)
   * )}
   **/
  (
    /**
     * @param {Node} tree
     * @param {Find|FindAndReplaceSchema|FindAndReplaceList} find
     * @param {Replace|Options} [replace]
     * @param {Options} [options]
     */
    function (tree, find, replace, options) {
      /** @type {Options|undefined} */
      let settings;
      /** @type {FindAndReplaceSchema|FindAndReplaceList} */
      let schema;

      if (typeof find === 'string' || find instanceof RegExp) {
        // @ts-expect-error don’t expect options twice.
        schema = [[find, replace]];
        settings = options;
      } else {
        schema = find;
        // @ts-expect-error don’t expect replace twice.
        settings = replace;
      }

      if (!settings) {
        settings = {};
      }

      const ignored = convert(settings.ignore || []);
      const pairs = toPairs(schema);
      let pairIndex = -1;

      while (++pairIndex < pairs.length) {
        visitParents(tree, 'text', visitor);
      }

      return tree

      /** @type {import('unist-util-visit-parents/complex-types').BuildVisitor<Root, 'text'>} */
      function visitor(node, parents) {
        let index = -1;
        /** @type {Parent|undefined} */
        let grandparent;

        while (++index < parents.length) {
          const parent = /** @type {Parent} */ (parents[index]);

          if (
            ignored(
              parent,
              // @ts-expect-error mdast vs. unist parent.
              grandparent ? grandparent.children.indexOf(parent) : undefined,
              grandparent
            )
          ) {
            return
          }

          grandparent = parent;
        }

        if (grandparent) {
          // @ts-expect-error: stack is fine.
          return handler(node, parents)
        }
      }

      /**
       * @param {Text} node
       * @param {[Root, ...Array<Parent>]} parents
       * @returns {VisitorResult}
       */
      function handler(node, parents) {
        const parent = parents[parents.length - 1];
        const find = pairs[pairIndex][0];
        const replace = pairs[pairIndex][1];
        let start = 0;
        // @ts-expect-error: TS is wrong, some of these children can be text.
        const index = parent.children.indexOf(node);
        let change = false;
        /** @type {Array<PhrasingContent>} */
        let nodes = [];
        /** @type {number|undefined} */
        let position;

        find.lastIndex = 0;

        let match = find.exec(node.value);

        while (match) {
          position = match.index;
          /** @type {RegExpMatchObject} */
          const matchObject = {
            index: match.index,
            input: match.input,
            stack: [...parents, node]
          };
          let value = replace(...match, matchObject);

          if (typeof value === 'string') {
            value = value.length > 0 ? {type: 'text', value} : undefined;
          }

          if (value !== false) {
            if (start !== position) {
              nodes.push({
                type: 'text',
                value: node.value.slice(start, position)
              });
            }

            if (Array.isArray(value)) {
              nodes.push(...value);
            } else if (value) {
              nodes.push(value);
            }

            start = position + match[0].length;
            change = true;
          }

          if (!find.global) {
            break
          }

          match = find.exec(node.value);
        }

        if (change) {
          if (start < node.value.length) {
            nodes.push({type: 'text', value: node.value.slice(start)});
          }

          parent.children.splice(index, 1, ...nodes);
        } else {
          nodes = [node];
        }

        return index + nodes.length
      }
    }
  );

/**
 * @param {FindAndReplaceSchema|FindAndReplaceList} schema
 * @returns {Pairs}
 */
function toPairs(schema) {
  /** @type {Pairs} */
  const result = [];

  if (typeof schema !== 'object') {
    throw new TypeError('Expected array or object as schema')
  }

  if (Array.isArray(schema)) {
    let index = -1;

    while (++index < schema.length) {
      result.push([
        toExpression(schema[index][0]),
        toFunction(schema[index][1])
      ]);
    }
  } else {
    /** @type {string} */
    let key;

    for (key in schema) {
      if (own.call(schema, key)) {
        result.push([toExpression(key), toFunction(schema[key])]);
      }
    }
  }

  return result
}

/**
 * @param {Find} find
 * @returns {RegExp}
 */
function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escapeStringRegexp(find), 'g') : find
}

/**
 * @param {Replace} replace
 * @returns {ReplaceFunction}
 */
function toFunction(replace) {
  return typeof replace === 'function' ? replace : () => replace
}

var isOnlyEmojis = function (text) {
    if (!text)
        return false;
    var noEmojis = text.replace(emojiRegex__default["default"](), '');
    var noSpace = noEmojis.replace(/[\s\n]/gm, '');
    return !noSpace;
};
var allowedMarkups = [
    'html',
    // @ts-expect-error
    'root',
    'text',
    'break',
    'paragraph',
    'emphasis',
    'strong',
    'link',
    'list',
    'listItem',
    'code',
    'inlineCode',
    'blockquote',
    'delete',
];
var matchMarkdownLinks = function (message) {
    var regexMdLinks = /\[([^[]+)\](\(.*\))/gm;
    var matches = message.match(regexMdLinks);
    var singleMatch = /\[([^[]+)\]\((.*)\)/;
    var links = matches
        ? matches.map(function (match) {
            var i = singleMatch.exec(match);
            return i && [i[1], i[2]];
        })
        : [];
    return links.flat();
};
var messageCodeBlocks = function (message) {
    var codeRegex = /```[a-z]*\n[\s\S]*?\n```|`[a-z]*[\s\S]*?`/gm;
    var matches = message.match(codeRegex);
    return matches || [];
};
var detectHttp = /(http(s?):\/\/)?(www\.)?/;
function formatUrlForDisplay(url) {
    try {
        return decodeURIComponent(url).replace(detectHttp, '');
    }
    catch (e) {
        return url;
    }
}
function encodeDecode(url) {
    try {
        return encodeURI(decodeURIComponent(url));
    }
    catch (error) {
        return url;
    }
}
var markDownRenderers = {
    // eslint-disable-next-line react/display-name
    link: function (props) {
        var children = props.children, href = props.href;
        var isEmail = href === null || href === void 0 ? void 0 : href.startsWith('mailto:');
        var isUrl = href === null || href === void 0 ? void 0 : href.startsWith('http');
        if (!href || (!isEmail && !isUrl)) {
            return children;
        }
        return (React__default["default"].createElement("a", { className: "".concat(isUrl ? 'str-chat__message-url-link' : ''), href: href, rel: 'nofollow noreferrer noopener', target: '_blank' }, children));
    },
    span: 'span',
};
var emojiMarkdownPlugin = function () {
    function replace(match) {
        return {
            children: [{ type: 'text', value: match }],
            className: 'inline-text-emoji',
            type: 'span',
        };
    }
    var transform = function (markdownAST) {
        findAndReplace(markdownAST, emojiRegex__default["default"](), replace);
        return markdownAST;
    };
    return transform;
};
var mentionsMarkdownPlugin = function (mentioned_users) { return function () {
    var mentioned_usernames = mentioned_users
        .map(function (user) { return user.name || user.id; })
        .filter(Boolean)
        .map(escapeRegExp);
    function replace(match) {
        var usernameOrId = match.replace('@', '');
        var user = mentioned_users.find(function (_a) {
            var id = _a.id, name = _a.name;
            return name === usernameOrId || id === usernameOrId;
        });
        return {
            children: [{ type: 'text', value: match }],
            mentioned_user: user,
            type: 'mention',
        };
    }
    var transform = function (markdownAST) {
        if (!mentioned_usernames.length) {
            return markdownAST;
        }
        var mentionedUsersRegex = new RegExp(mentioned_usernames.map(function (username) { return "@".concat(username); }).join('|'), 'g');
        findAndReplace(markdownAST, mentionedUsersRegex, replace);
        return markdownAST;
    };
    return transform;
}; };
var Mention = function (props) { return React__default["default"].createElement("span", { className: 'str-chat__message-mention' }, props.children); };
var renderText = function (text, mentioned_users, options) {
    if (options === void 0) { options = {}; }
    // take the @ mentions and turn them into markdown?
    // translate links
    if (!text)
        return null;
    var newText = text;
    var markdownLinks = matchMarkdownLinks(newText);
    var codeBlocks = messageCodeBlocks(newText);
    // extract all valid links/emails within text and replace it with proper markup
    uniqBy__default["default"](linkify__namespace.find(newText), 'value').forEach(function (_a) {
        var href = _a.href, type = _a.type, value = _a.value;
        var linkIsInBlock = codeBlocks.some(function (block) { return block === null || block === void 0 ? void 0 : block.includes(value); });
        // check if message is already  markdown
        var noParsingNeeded = markdownLinks &&
            markdownLinks.filter(function (text) {
                var strippedHref = href === null || href === void 0 ? void 0 : href.replace(detectHttp, '');
                var strippedText = text === null || text === void 0 ? void 0 : text.replace(detectHttp, '');
                if (!strippedHref || !strippedText)
                    return false;
                return strippedHref.includes(strippedText) || strippedText.includes(strippedHref);
            });
        if (noParsingNeeded.length > 0 || linkIsInBlock)
            return;
        try {
            // special case for mentions:
            // it could happen that a user's name matches with an e-mail format pattern.
            // in that case, we check whether the found e-mail is actually a mention
            // by naively checking for an existence of @ sign in front of it.
            if (type === 'email' && mentioned_users) {
                var emailMatchesWithName = mentioned_users.some(function (u) { return u.name === value; });
                if (emailMatchesWithName) {
                    newText = newText.replace(new RegExp(escapeRegExp(value), 'g'), function (match, position) {
                        var isMention = newText.charAt(position - 1) === '@';
                        // in case of mention, we leave the match in its original form,
                        // and we let `mentionsMarkdownPlugin` to do its job
                        return isMention ? match : "[".concat(match, "](").concat(encodeDecode(href), ")");
                    });
                    return;
                }
            }
            var displayLink = type === 'email' ? value : formatUrlForDisplay(href);
            newText = newText.replace(new RegExp(escapeRegExp(value), 'g'), "[".concat(displayLink, "](").concat(encodeDecode(href), ")"));
        }
        catch (e) {
        }
    });
    var plugins = [emojiMarkdownPlugin];
    if (mentioned_users === null || mentioned_users === void 0 ? void 0 : mentioned_users.length) {
        plugins.push(mentionsMarkdownPlugin(mentioned_users));
    }
    var renderers = __assign(__assign({ mention: Mention }, markDownRenderers), options.customMarkDownRenderers);
    return (React__default["default"].createElement(ReactMarkdown__default["default"], { allowedTypes: allowedMarkups, escapeHtml: true, plugins: plugins, renderers: renderers, source: newText, transformLinkUri: function (uri) {
            return uri.startsWith('app://') ? uri : RootReactMarkdown__default["default"].uriTransformer(uri);
        }, unwrapDisallowed: true }));
};
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
}
/**
 * @deprecated will be removed in the next major release
 */
var generateRandomId = nanoid.nanoid;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt#getting_whole_characters
var getWholeChar = function (str, i) {
    var code = str.charCodeAt(i);
    if (Number.isNaN(code))
        return '';
    if (code < 0xd800 || code > 0xdfff)
        return str.charAt(i);
    if (0xd800 <= code && code <= 0xdbff) {
        if (str.length <= i + 1) {
            throw 'High surrogate without following low surrogate';
        }
        var next = str.charCodeAt(i + 1);
        if (0xdc00 > next || next > 0xdfff) {
            throw 'High surrogate without following low surrogate';
        }
        return str.charAt(i) + str.charAt(i + 1);
    }
    if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
    }
    var prev = str.charCodeAt(i - 1);
    if (0xd800 > prev || prev > 0xdbff) {
        throw 'Low surrogate without preceding high surrogate';
    }
    return '';
};

var DefaultSuggestionListHeader = function (props) {
    var currentTrigger = props.currentTrigger, value = props.value;
    var t = useTranslationContext('DefaultSuggestionListHeader').t;
    var triggerIndex = value.lastIndexOf(currentTrigger);
    if (currentTrigger === '/') {
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            t('Commands matching'),
            " ",
            React__default["default"].createElement("strong", null, value.slice(triggerIndex + 1))));
    }
    if (currentTrigger === ':') {
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            t('Emoji matching'),
            " ",
            React__default["default"].createElement("strong", null, value.slice(triggerIndex + 1))));
    }
    if (currentTrigger === '@') {
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            t('People matching'),
            " ",
            React__default["default"].createElement("strong", null, value.slice(triggerIndex + 1))));
    }
    return null;
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var List = function List(_ref) {
  var className = _ref.className,
      component = _ref.component,
      currentTrigger = _ref.currentTrigger,
      dropdownScroll = _ref.dropdownScroll,
      getSelectedItem = _ref.getSelectedItem,
      getTextToReplace = _ref.getTextToReplace,
      PropHeader = _ref.Header,
      itemClassName = _ref.itemClassName,
      itemStyle = _ref.itemStyle,
      onSelect = _ref.onSelect,
      selectionEnd = _ref.selectionEnd,
      style = _ref.style,
      PropSuggestionItem = _ref.SuggestionItem,
      propValue = _ref.value,
      values = _ref.values;

  var _useComponentContext = useComponentContext('SuggestionList'),
      AutocompleteSuggestionHeader = _useComponentContext.AutocompleteSuggestionHeader,
      AutocompleteSuggestionItem = _useComponentContext.AutocompleteSuggestionItem;

  var _useChatContext = useChatContext('SuggestionList'),
      themeVersion = _useChatContext.themeVersion;

  var SuggestionItem = PropSuggestionItem || AutocompleteSuggestionItem || Item;
  var SuggestionHeader = PropHeader || AutocompleteSuggestionHeader || DefaultSuggestionListHeader;

  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var itemsRef = [];

  var isSelected = function isSelected(item) {
    return selectedItem === values.findIndex(function (value) {
      return getId(value) === getId(item);
    });
  };

  var getId = function getId(item) {
    var textToReplace = getTextToReplace(item);

    if (textToReplace.key) {
      return textToReplace.key;
    }

    if (typeof item === 'string' || !item.key) {
      return textToReplace.text;
    }

    return item.key;
  };

  var modifyText = function modifyText(value) {
    if (!value) return;
    onSelect(getTextToReplace(value));
    if (getSelectedItem) getSelectedItem(value);
  };

  var handleClick = function handleClick(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    modifyText(values[selectedItem]);
  };

  var selectItem = React.useCallback(function (item) {
    var index = values.findIndex(function (value) {
      return value.id ? value.id === item.id : value.name === item.name;
    });
    setSelectedItem(index);
  }, [values]);
  var handleKeyDown = React.useCallback(function (event) {
    if (event.key === 'ArrowUp') {
      setSelectedItem(function (prevSelected) {
        if (prevSelected === undefined) return 0;
        var newID = prevSelected === 0 ? values.length - 1 : prevSelected - 1;
        dropdownScroll(itemsRef[newID]);
        return newID;
      });
    }

    if (event.key === 'ArrowDown') {
      setSelectedItem(function (prevSelected) {
        if (prevSelected === undefined) return 0;
        var newID = prevSelected === values.length - 1 ? 0 : prevSelected + 1;
        dropdownScroll(itemsRef[newID]);
        return newID;
      });
    }

    if ((event.key === 'Enter' || event.key === 'Tab') && selectedItem !== undefined) {
      handleClick(event);
    }

    return null;
  }, [selectedItem, values] // eslint-disable-line
  );
  React.useEffect(function () {
    document.addEventListener('keydown', handleKeyDown, false);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  React.useEffect(function () {
    if (values !== null && values !== void 0 && values.length) selectItem(values[0]);
  }, [values]); // eslint-disable-line

  var restructureItem = React.useCallback(function (item) {
    var matched = item.name || item.id;
    var textBeforeCursor = propValue.slice(0, selectionEnd);
    var triggerIndex = textBeforeCursor.lastIndexOf(currentTrigger);
    var editedPropValue = escapeRegExp(textBeforeCursor.slice(triggerIndex + 1));
    var parts = matched.split(new RegExp("(".concat(editedPropValue, ")"), 'gi'));
    var itemNameParts = {
      match: editedPropValue,
      parts: parts
    };
    return _objectSpread$3(_objectSpread$3({}, item), {}, {
      itemNameParts: itemNameParts
    });
  }, [propValue, selectionEnd, currentTrigger]);
  var restructuredValues = React.useMemo(function () {
    return values.map(restructureItem);
  }, [values, restructureItem]);
  return /*#__PURE__*/React__default["default"].createElement("ul", {
    className: clsx('rta__list', className),
    style: style
  }, themeVersion === '1' && /*#__PURE__*/React__default["default"].createElement("li", {
    className: "rta__list-header"
  }, /*#__PURE__*/React__default["default"].createElement(SuggestionHeader, {
    currentTrigger: currentTrigger,
    value: propValue
  })), restructuredValues.map(function (item, i) {
    return /*#__PURE__*/React__default["default"].createElement(SuggestionItem, {
      className: itemClassName,
      component: component,
      item: item,
      key: getId(item),
      onClickHandler: handleClick,
      onSelectHandler: selectItem,
      ref: function ref(_ref2) {
        itemsRef[i] = _ref2;
      },
      selected: isSelected(item),
      style: itemStyle,
      value: propValue
    });
  }));
};

var DEFAULT_CARET_POSITION = 'next';
function defaultScrollToItem(container, item) {
  if (!item) return;
  var itemHeight = parseInt(getComputedStyle(item).getPropertyValue('height'), 10);
  var containerHight = parseInt(getComputedStyle(container).getPropertyValue('height'), 10) - itemHeight;
  var actualScrollTop = container.scrollTop;
  var itemOffsetTop = item.offsetTop;

  if (itemOffsetTop < actualScrollTop + containerHight && actualScrollTop < itemOffsetTop) {
    return;
  } // eslint-disable-next-line


  container.scrollTop = itemOffsetTop;
}
var errorMessage = function errorMessage(message) {
  return console.error("RTA: dataProvider fails: ".concat(message, "\n    \nCheck the documentation or create issue if you think it's bug. https://github.com/webscopeio/react-textarea-autocomplete/issues"));
};
var triggerPropsCheck = function triggerPropsCheck(_ref) {
  var trigger = _ref.trigger;
  if (!trigger) return Error('Invalid prop trigger. Prop missing.');
  var triggers = Object.entries(trigger);

  for (var i = 0; i < triggers.length; i += 1) {
    var _triggers$i = _slicedToArray__default["default"](triggers[i], 2),
        triggerChar = _triggers$i[0],
        settings = _triggers$i[1];

    if (typeof triggerChar !== 'string' || triggerChar.length !== 1) {
      return Error('Invalid prop trigger. Keys of the object has to be string / one character.');
    } // $FlowFixMe


    var triggerSetting = settings;
    var callback = triggerSetting.callback,
        component = triggerSetting.component,
        dataProvider = triggerSetting.dataProvider,
        output = triggerSetting.output;

    if (!reactIs.isValidElementType(component)) {
      return Error('Invalid prop trigger: component should be defined.');
    }

    if (!dataProvider || typeof dataProvider !== 'function') {
      return Error('Invalid prop trigger: dataProvider should be defined.');
    }

    if (output && typeof output !== 'function') {
      return Error('Invalid prop trigger: output should be a function.');
    }

    if (callback && typeof callback !== 'function') {
      return Error('Invalid prop trigger: callback should be a function.');
    }
  }

  return null;
};

var UnMemoizedCommandItem = function (props) {
    var entity = props.entity;
    return (React__default["default"].createElement("div", { className: 'str-chat__slash-command' },
        React__default["default"].createElement("span", { className: 'str-chat__slash-command-header' },
            React__default["default"].createElement("strong", null, entity.name),
            " ",
            entity.args),
        React__default["default"].createElement("br", null),
        React__default["default"].createElement("span", { className: 'str-chat__slash-command-description' }, entity.description)));
};
var CommandItem = React__default["default"].memo(UnMemoizedCommandItem);

/**
 * A round avatar image with fallback to username's first letter
 */
var Avatar = function (props) {
    var image = props.image, name = props.name, _a = props.onClick, onClick = _a === void 0 ? function () { return undefined; } : _a, _b = props.onMouseOver, onMouseOver = _b === void 0 ? function () { return undefined; } : _b, _c = props.shape, shape = _c === void 0 ? 'circle' : _c, _d = props.size, size = _d === void 0 ? 32 : _d;
    var _e = React.useState(false), error = _e[0], setError = _e[1];
    var _f = React.useState(false), loaded = _f[0], setLoaded = _f[1];
    React.useEffect(function () {
        setError(false);
        setLoaded(false);
    }, [image]);
    var nameStr = (name === null || name === void 0 ? void 0 : name.toString()) || '';
    var initials = getWholeChar(nameStr, 0);
    return (React__default["default"].createElement("div", { className: "str-chat__avatar str-chat__avatar--".concat(shape, " str-chat__message-sender-avatar"), "data-testid": 'avatar', onClick: onClick, onMouseOver: onMouseOver, style: {
            flexBasis: "".concat(size, "px"),
            fontSize: "".concat(size / 2, "px"),
            height: "".concat(size, "px"),
            lineHeight: "".concat(size, "px"),
            width: "".concat(size, "px"),
        }, title: name }, image && !error ? (React__default["default"].createElement("img", { alt: initials, className: "str-chat__avatar-image".concat(loaded ? ' str-chat__avatar-image--loaded' : ''), "data-testid": 'avatar-img', onError: function () { return setError(true); }, onLoad: function () { return setLoaded(true); }, src: image, style: {
            flexBasis: "".concat(size, "px"),
            height: "".concat(size, "px"),
            objectFit: 'cover',
            width: "".concat(size, "px"),
        } })) : (React__default["default"].createElement("div", { className: 'str-chat__avatar-fallback', "data-testid": 'avatar-fallback' }, initials))));
};

/**
 * UI component for mentions rendered in suggestion list
 */
var UnMemoizedUserItem = function (_a) {
    var _b = _a.Avatar, Avatar$1 = _b === void 0 ? Avatar : _b, entity = _a.entity;
    var themeVersion = useChatContext('UserItem').themeVersion;
    var hasEntity = !!Object.keys(entity).length;
    var itemParts = entity === null || entity === void 0 ? void 0 : entity.itemNameParts;
    var renderName = function () {
        if (!hasEntity)
            return null;
        return itemParts.parts.map(function (part, i) {
            var matches = part.toLowerCase() === itemParts.match.toLowerCase();
            return (React__default["default"].createElement("span", { className: clsx({
                    'str-chat__emoji-item--highlight': matches,
                    'str-chat__emoji-item--part': !matches,
                }), key: "part-".concat(i) }, part));
        });
    };
    return (React__default["default"].createElement("div", { className: 'str-chat__user-item' },
        React__default["default"].createElement(Avatar$1, { image: entity.image, name: entity.name || entity.id, size: 20 }),
        React__default["default"].createElement("span", { className: 'str-chat__user-item--name', "data-testid": 'user-item-name' }, renderName()),
        themeVersion === '2' && React__default["default"].createElement("div", { className: 'str-chat__user-item-at' }, "@")));
};
var UserItem = React__default["default"].memo(UnMemoizedUserItem);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReactTextareaAutocomplete = /*#__PURE__*/function (_React$Component) {
  _inherits__default["default"](ReactTextareaAutocomplete, _React$Component);

  var _super = _createSuper(ReactTextareaAutocomplete);

  function ReactTextareaAutocomplete(_props) {
    var _this;

    _classCallCheck__default["default"](this, ReactTextareaAutocomplete);

    _this = _super.call(this, _props);

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "getSelectionPosition", function () {
      if (!_this.textareaRef) return null;
      return {
        selectionEnd: _this.textareaRef.selectionEnd,
        selectionStart: _this.textareaRef.selectionStart
      };
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "getSelectedText", function () {
      if (!_this.textareaRef) return null;
      var _this$textareaRef = _this.textareaRef,
          selectionEnd = _this$textareaRef.selectionEnd,
          selectionStart = _this$textareaRef.selectionStart;
      if (selectionStart === selectionEnd) return null;
      return _this.state.value.substr(selectionStart, selectionEnd - selectionStart);
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "setCaretPosition", function () {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!_this.textareaRef) return;

      _this.textareaRef.focus();

      _this.textareaRef.setSelectionRange(position, position);
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "getCaretPosition", function () {
      if (!_this.textareaRef) return 0;
      return _this.textareaRef.selectionEnd;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_defaultShouldSubmit", function (event) {
      return event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_handleKeyDown", function (event) {
      var _this$props$shouldSub = _this.props.shouldSubmit,
          shouldSubmit = _this$props$shouldSub === void 0 ? _this._defaultShouldSubmit : _this$props$shouldSub; // prevent default behaviour when the selection list is rendered

      if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && _this.dropdownRef) event.preventDefault();
      if (shouldSubmit !== null && shouldSubmit !== void 0 && shouldSubmit(event)) return _this._onEnter(event);
      if (event.key === ' ') return _this._onSpace(event);
      if (event.key === 'Escape') return _this._closeAutocomplete();
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_onEnter", function (event) {
      if (!_this.textareaRef) return;
      var trigger = _this.state.currentTrigger;

      if (!trigger || !_this.state.data) {
        // trigger a submit
        _this._replaceWord();

        if (_this.textareaRef) {
          _this.textareaRef.selectionEnd = 0;
        }

        _this.props.handleSubmit(event);

        _this._closeAutocomplete();
      }
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_onSpace", function () {
      if (!_this.props.replaceWord || !_this.textareaRef) return; // don't change characters if the element doesn't have focus

      var hasFocus = _this.textareaRef.matches(':focus');

      if (!hasFocus) return;

      _this._replaceWord();
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_replaceWord", function () {
      var value = _this.state.value;
      var lastWordRegex = /([^\s]+)(\s*)$/;
      var match = lastWordRegex.exec(value.slice(0, _this.getCaretPosition()));
      var lastWord = match && match[1];
      if (!lastWord) return;
      var spaces = match[2];

      var newWord = _this.props.replaceWord(lastWord);

      if (newWord == null) return;
      var textBeforeWord = value.slice(0, _this.getCaretPosition() - match[0].length);
      var textAfterCaret = value.slice(_this.getCaretPosition(), -1);
      var newText = textBeforeWord + newWord + spaces + textAfterCaret;

      _this.setState({
        value: newText
      }, function () {
        // fire onChange event after successful selection
        var e = new CustomEvent('change', {
          bubbles: true
        });

        _this.textareaRef.dispatchEvent(e);

        if (_this.props.onChange) _this.props.onChange(e);
      });
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_onSelect", function (newToken) {
      var _this$props = _this.props,
          closeCommandsList = _this$props.closeCommandsList,
          closeMentionsList = _this$props.closeMentionsList,
          onChange = _this$props.onChange,
          showCommandsList = _this$props.showCommandsList,
          showMentionsList = _this$props.showMentionsList;
      var _this$state = _this.state,
          stateTrigger = _this$state.currentTrigger,
          selectionEnd = _this$state.selectionEnd,
          textareaValue = _this$state.value;
      var currentTrigger = showCommandsList ? '/' : showMentionsList ? '@' : stateTrigger;
      if (!currentTrigger) return;

      var computeCaretPosition = function computeCaretPosition(position, token, startToken) {
        switch (position) {
          case 'start':
            return startToken;

          case 'next':
          case 'end':
            return startToken + token.length;

          default:
            if (!Number.isInteger(position)) {
              throw new Error('RTA: caretPosition should be "start", "next", "end" or number.');
            }

            return position;
        }
      };

      var textToModify = showCommandsList ? '/' : showMentionsList ? '@' : textareaValue.slice(0, selectionEnd);
      var startOfTokenPosition = textToModify.lastIndexOf(currentTrigger); // we add space after emoji is selected if a caret position is next

      var newTokenString = newToken.caretPosition === 'next' ? "".concat(newToken.text, " ") : newToken.text;
      var newCaretPosition = computeCaretPosition(newToken.caretPosition, newTokenString, startOfTokenPosition);
      var modifiedText = textToModify.substring(0, startOfTokenPosition) + newTokenString;
      var valueToReplace = textareaValue.replace(textToModify, modifiedText); // set the new textarea value and after that set the caret back to its position

      _this.setState({
        dataLoading: false,
        value: valueToReplace
      }, function () {
        // fire onChange event after successful selection
        var e = new CustomEvent('change', {
          bubbles: true
        });

        _this.textareaRef.dispatchEvent(e);

        if (onChange) onChange(e);

        _this.setCaretPosition(newCaretPosition);
      });

      _this._closeAutocomplete();

      if (showCommandsList) closeCommandsList();
      if (showMentionsList) closeMentionsList();
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_getItemOnSelect", function (paramTrigger) {
      var stateTrigger = _this.state.currentTrigger;

      var triggerSettings = _this._getCurrentTriggerSettings(paramTrigger);

      var currentTrigger = paramTrigger || stateTrigger;
      if (!currentTrigger || !triggerSettings) return null;
      var callback = triggerSettings.callback;
      if (!callback) return null;
      return function (item) {
        if (typeof callback !== 'function') {
          throw new Error('Output functor is not defined! You have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }

        if (callback) {
          return callback(item, currentTrigger);
        }

        return null;
      };
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_getTextToReplace", function (paramTrigger) {
      var _this$state2 = _this.state,
          actualToken = _this$state2.actualToken,
          stateTrigger = _this$state2.currentTrigger;

      var triggerSettings = _this._getCurrentTriggerSettings(paramTrigger);

      var currentTrigger = paramTrigger || stateTrigger;
      if (!currentTrigger || !triggerSettings) return null;
      var output = triggerSettings.output;
      return function (item) {
        if (_typeof__default["default"](item) === 'object' && (!output || typeof output !== 'function')) {
          throw new Error('Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }

        if (output) {
          var textToReplace = output(item, currentTrigger);

          if (!textToReplace || typeof textToReplace === 'number') {
            throw new Error("Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot \"".concat(String(textToReplace), "\". Check the implementation for trigger \"").concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more informations.\n"));
          }

          if (typeof textToReplace === 'string') {
            return {
              caretPosition: DEFAULT_CARET_POSITION,
              text: textToReplace
            };
          }

          if (!textToReplace.text && currentTrigger !== ':') {
            throw new Error("Output \"text\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n"));
          }

          if (!textToReplace.caretPosition) {
            throw new Error("Output \"caretPosition\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n"));
          }

          return textToReplace;
        }

        if (typeof item !== 'string') {
          throw new Error('Output item should be string\n');
        }

        return {
          caretPosition: DEFAULT_CARET_POSITION,
          text: "".concat(currentTrigger).concat(item).concat(currentTrigger)
        };
      };
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_getCurrentTriggerSettings", function (paramTrigger) {
      var stateTrigger = _this.state.currentTrigger;
      var currentTrigger = paramTrigger || stateTrigger;
      if (!currentTrigger) return null;
      return _this.props.trigger[currentTrigger];
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_getValuesFromProvider", function () {
      var _this$state3 = _this.state,
          actualToken = _this$state3.actualToken,
          currentTrigger = _this$state3.currentTrigger;

      var triggerSettings = _this._getCurrentTriggerSettings();

      if (!currentTrigger || !triggerSettings) return;
      var component = triggerSettings.component,
          dataProvider = triggerSettings.dataProvider;

      if (typeof dataProvider !== 'function') {
        throw new Error('Trigger provider has to be a function!');
      }

      _this.setState({
        dataLoading: true
      }); // Modified: send the full text to support / style commands


      dataProvider(actualToken, _this.state.value, function (data, token) {
        // Make sure that the result is still relevant for current query
        if (token !== _this.state.actualToken) return;

        if (!Array.isArray(data)) {
          throw new Error('Trigger provider has to provide an array!');
        }

        if (!reactIs.isValidElementType(component)) {
          throw new Error('Component should be defined!');
        } // throw away if we resolved old trigger


        if (currentTrigger !== _this.state.currentTrigger) return; // if we haven't resolved any data let's close the autocomplete

        if (!data.length) {
          _this._closeAutocomplete();

          return;
        }

        _this.setState({
          component: component,
          data: data,
          dataLoading: false
        });
      });
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_getSuggestions", function (paramTrigger) {
      var _this$state4 = _this.state,
          stateTrigger = _this$state4.currentTrigger,
          data = _this$state4.data;
      var currentTrigger = paramTrigger || stateTrigger;
      if (!currentTrigger || !data || data && !data.length) return null;
      return data;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_closeAutocomplete", function () {
      _this.setState({
        currentTrigger: null,
        data: null,
        dataLoading: false,
        left: null,
        top: null
      });
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_cleanUpProps", function () {
      var props = _objectSpread$2({}, _this.props);

      var notSafe = ['additionalTextareaProps', 'className', 'closeCommandsList', 'closeMentionsList', 'closeOnClickOutside', 'containerClassName', 'containerStyle', 'disableMentions', 'dropdownClassName', 'dropdownStyle', 'grow', 'handleSubmit', 'innerRef', 'itemClassName', 'itemStyle', 'listClassName', 'listStyle', 'loaderClassName', 'loaderStyle', 'loadingComponent', 'minChar', 'movePopupAsYouType', 'onCaretPositionChange', 'onChange', 'ref', 'replaceWord', 'scrollToItem', 'shouldSubmit', 'showCommandsList', 'showMentionsList', 'SuggestionItem', 'SuggestionList', 'trigger', 'value']; // eslint-disable-next-line

      for (var prop in props) {
        if (notSafe.includes(prop)) delete props[prop];
      }

      return props;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_isCommand", function (text) {
      if (text[0] !== '/') return false;
      var tokens = text.split(' ');
      return tokens.length <= 1;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_changeHandler", function (e) {
      var _this$props2 = _this.props,
          minChar = _this$props2.minChar,
          movePopupAsYouType = _this$props2.movePopupAsYouType,
          onCaretPositionChange = _this$props2.onCaretPositionChange,
          onChange = _this$props2.onChange,
          trigger = _this$props2.trigger;
      var _this$state5 = _this.state,
          left = _this$state5.left,
          top = _this$state5.top;
      var textarea = e.target;
      var selectionEnd = textarea.selectionEnd,
          selectionStart = textarea.selectionStart,
          value = textarea.value;

      if (onChange) {
        e.persist();
        onChange(e);
      }

      if (onCaretPositionChange) onCaretPositionChange(_this.getCaretPosition());

      _this.setState({
        value: value
      });

      var currentTrigger;
      var lastToken;

      if (_this._isCommand(value)) {
        currentTrigger = '/';
        lastToken = value;
      } else {
        var triggerTokens = Object.keys(trigger).join().replace('/', '');
        var triggerNorWhitespace = "[^\\s".concat(triggerTokens, "]*");
        var regex = new RegExp("(?!^|\\W)?[".concat(triggerTokens, "]").concat(triggerNorWhitespace, "\\s?").concat(triggerNorWhitespace, "$"), 'g');
        var tokenMatch = value.slice(0, selectionEnd).match(regex);
        lastToken = tokenMatch && tokenMatch[tokenMatch.length - 1].trim();
        currentTrigger = lastToken && Object.keys(trigger).find(function (a) {
          return a === lastToken[0];
        }) || null;
      }
      /*
       if we lost the trigger token or there is no following character we want to close
       the autocomplete
      */


      if (!lastToken || lastToken.length <= minChar) {
        _this._closeAutocomplete();

        return;
      }

      var actualToken = lastToken.slice(1); // if trigger is not configured step out from the function, otherwise proceed

      if (!currentTrigger) return;

      if (movePopupAsYouType || top === null && left === null || // if we have single char - trigger it means we want to re-position the autocomplete
      lastToken.length === 1) {
        var _getCaretCoordinates = getCaretCoordinates__default["default"](textarea, selectionEnd),
            newLeft = _getCaretCoordinates.left,
            newTop = _getCaretCoordinates.top;

        _this.setState({
          // make position relative to textarea
          left: newLeft,
          top: newTop - _this.textareaRef.scrollTop || 0
        });
      }

      _this.setState({
        actualToken: actualToken,
        currentTrigger: currentTrigger,
        selectionEnd: selectionEnd,
        selectionStart: selectionStart
      }, function () {
        try {
          _this._getValuesFromProvider();
        } catch (err) {
          errorMessage(err.message);
        }
      });
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_selectHandler", function (e) {
      var _this$props3 = _this.props,
          onCaretPositionChange = _this$props3.onCaretPositionChange,
          onSelect = _this$props3.onSelect;
      if (onCaretPositionChange) onCaretPositionChange(_this.getCaretPosition());

      if (onSelect) {
        e.persist();
        onSelect(e);
      }
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_onClickAndBlurHandler", function (e) {
      var _this$props4 = _this.props,
          closeOnClickOutside = _this$props4.closeOnClickOutside,
          onBlur = _this$props4.onBlur; // If this is a click: e.target is the textarea, and e.relatedTarget is the thing
      // that was actually clicked. If we clicked inside the auto-select dropdown, then
      // that's not a blur, from the auto-select point of view, so then do nothing.

      var el = e.relatedTarget;

      if (_this.dropdownRef && el instanceof Node && _this.dropdownRef.contains(el)) {
        return;
      }

      if (closeOnClickOutside) _this._closeAutocomplete();

      if (onBlur) {
        e.persist();
        onBlur(e);
      }
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_onScrollHandler", function () {
      return _this._closeAutocomplete();
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "_dropdownScroll", function (item) {
      var scrollToItem = _this.props.scrollToItem;
      if (!scrollToItem) return;

      if (scrollToItem === true) {
        defaultScrollToItem(_this.dropdownRef, item);
        return;
      }

      if (typeof scrollToItem !== 'function' || scrollToItem.length !== 2) {
        throw new Error('`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.');
      }

      scrollToItem(_this.dropdownRef, item);
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "getTriggerProps", function () {
      var _this$props5 = _this.props,
          showCommandsList = _this$props5.showCommandsList,
          showMentionsList = _this$props5.showMentionsList,
          trigger = _this$props5.trigger;
      var _this$state6 = _this.state,
          component = _this$state6.component,
          currentTrigger = _this$state6.currentTrigger,
          selectionEnd = _this$state6.selectionEnd,
          value = _this$state6.value;

      var selectedItem = _this._getItemOnSelect();

      var suggestionData = _this._getSuggestions();

      var textToReplace = _this._getTextToReplace();

      var triggerProps = {
        component: component,
        currentTrigger: currentTrigger,
        getSelectedItem: selectedItem,
        getTextToReplace: textToReplace,
        selectionEnd: selectionEnd,
        value: value,
        values: suggestionData
      };

      if (showCommandsList && trigger['/'] || showMentionsList && trigger['@']) {
        var currentCommands;
        var getCommands = trigger[showCommandsList ? '/' : '@'].dataProvider;
        getCommands === null || getCommands === void 0 ? void 0 : getCommands('', showCommandsList ? '/' : '@', function (data) {
          currentCommands = data;
        });
        triggerProps.component = showCommandsList ? CommandItem : UserItem;
        triggerProps.currentTrigger = showCommandsList ? '/' : '@';
        triggerProps.getTextToReplace = _this._getTextToReplace(showCommandsList ? '/' : '@');
        triggerProps.getSelectedItem = _this._getItemOnSelect(showCommandsList ? '/' : '@');
        triggerProps.selectionEnd = 1;
        triggerProps.value = showCommandsList ? '/' : '@';
        triggerProps.values = currentCommands;
      }

      return triggerProps;
    });

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "setDropdownRef", function (element) {
      _this.dropdownRef = element;
    });

    var _this$props6 = _this.props,
        loadingComponent = _this$props6.loadingComponent,
        _trigger = _this$props6.trigger,
        _value = _this$props6.value; // TODO: it would be better to have the parent control state...
    // if (value) this.state.value = value;

    if (!loadingComponent) {
      throw new Error('RTA: loadingComponent is not defined');
    }

    if (!_trigger) {
      throw new Error('RTA: trigger is not defined');
    }

    _this.state = {
      actualToken: '',
      component: null,
      currentTrigger: null,
      data: null,
      dataLoading: false,
      left: null,
      selectionEnd: 0,
      selectionStart: 0,
      top: null,
      value: _value || ''
    };
    return _this;
  }

  _createClass__default["default"](ReactTextareaAutocomplete, [{
    key: "renderSuggestionListContainer",
    value: function renderSuggestionListContainer() {
      var _this$props7 = this.props,
          disableMentions = _this$props7.disableMentions,
          dropdownClassName = _this$props7.dropdownClassName,
          dropdownStyle = _this$props7.dropdownStyle,
          itemClassName = _this$props7.itemClassName,
          itemStyle = _this$props7.itemStyle,
          listClassName = _this$props7.listClassName,
          SuggestionItem = _this$props7.SuggestionItem,
          _this$props7$Suggesti = _this$props7.SuggestionList,
          SuggestionList = _this$props7$Suggesti === void 0 ? List : _this$props7$Suggesti;
      var triggerProps = this.getTriggerProps();

      if (triggerProps.values && triggerProps.currentTrigger && !(disableMentions && triggerProps.currentTrigger === '@')) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: clsx('rta__autocomplete', 'str-chat__suggestion-list-container', dropdownClassName),
          ref: this.setDropdownRef,
          style: dropdownStyle
        }, /*#__PURE__*/React__default["default"].createElement(SuggestionList, _extends__default["default"]({
          className: clsx('str-chat__suggestion-list', listClassName),
          dropdownScroll: this._dropdownScroll,
          itemClassName: clsx('str-chat__suggestion-list-item', itemClassName),
          itemStyle: itemStyle,
          onSelect: this._onSelect,
          SuggestionItem: SuggestionItem
        }, triggerProps)));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          containerClassName = _this$props8.containerClassName,
          containerStyle = _this$props8.containerStyle,
          style = _this$props8.style;
      var maxRows = this.props.maxRows;
      var _this$state7 = this.state,
          dataLoading = _this$state7.dataLoading,
          value = _this$state7.value;
      if (!this.props.grow) maxRows = 1; // By setting defaultValue to undefined, avoid error:
      // ForwardRef(TextareaAutosize) contains a textarea with both value and defaultValue props.
      // Textarea elements must be either controlled or uncontrolled

      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: clsx('rta', containerClassName, {
          'rta--loading': dataLoading
        }),
        style: containerStyle
      }, this.renderSuggestionListContainer(), /*#__PURE__*/React__default["default"].createElement(Textarea__default["default"], _extends__default["default"]({
        "data-testid": "message-input"
      }, this._cleanUpProps(), {
        className: clsx('rta__textarea', className),
        maxRows: maxRows,
        onBlur: this._onClickAndBlurHandler,
        onChange: this._changeHandler,
        onClick: this._onClickAndBlurHandler,
        onFocus: this.props.onFocus,
        onKeyDown: this._handleKeyDown,
        onScroll: this._onScrollHandler,
        onSelect: this._selectHandler,
        ref: function ref(_ref) {
          var _this2$props;

          (_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.innerRef(_ref);
          _this2.textareaRef = _ref;
        },
        style: style,
        value: value
      }, this.props.additionalTextareaProps, {
        defaultValue: undefined
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value:
    /**
     * setup to emulate the UNSAFE_componentWillReceiveProps
     */
    function getDerivedStateFromProps(props, state) {
      if (props.value !== state.propsValue || !state.value) {
        return {
          propsValue: props.value,
          value: props.value
        };
      } else {
        return null;
      }
    }
    /**
     * Close autocomplete, also clean up trigger (to avoid slow promises)
     */

  }]);

  return ReactTextareaAutocomplete;
}(React__default["default"].Component);

_defineProperty__default["default"](ReactTextareaAutocomplete, "defaultProps", {
  closeOnClickOutside: true,
  maxRows: 10,
  minChar: 1,
  movePopupAsYouType: false,
  scrollToItem: true,
  value: ''
});

ReactTextareaAutocomplete.propTypes = {
  className: PropTypes__default["default"].string,
  closeOnClickOutside: PropTypes__default["default"].bool,
  containerClassName: PropTypes__default["default"].string,
  containerStyle: PropTypes__default["default"].object,
  disableMentions: PropTypes__default["default"].bool,
  dropdownClassName: PropTypes__default["default"].string,
  dropdownStyle: PropTypes__default["default"].object,
  itemClassName: PropTypes__default["default"].string,
  itemStyle: PropTypes__default["default"].object,
  listClassName: PropTypes__default["default"].string,
  listStyle: PropTypes__default["default"].object,
  loaderClassName: PropTypes__default["default"].string,
  loaderStyle: PropTypes__default["default"].object,
  loadingComponent: PropTypes__default["default"].elementType,
  minChar: PropTypes__default["default"].number,
  onBlur: PropTypes__default["default"].func,
  onCaretPositionChange: PropTypes__default["default"].func,
  onChange: PropTypes__default["default"].func,
  onSelect: PropTypes__default["default"].func,
  shouldSubmit: PropTypes__default["default"].func,
  style: PropTypes__default["default"].object,
  SuggestionList: PropTypes__default["default"].elementType,
  trigger: triggerPropsCheck,
  value: PropTypes__default["default"].string
};

var channelReducer = function (state, action) {
    var _a;
    switch (action.type) {
        case 'closeThread': {
            return __assign(__assign({}, state), { thread: null, threadLoadingMore: false, threadMessages: [] });
        }
        case 'copyMessagesFromChannel': {
            var channel = action.channel, parentId = action.parentId;
            return __assign(__assign({}, state), { messages: __spreadArray$1([], channel.state.messages, true), pinnedMessages: __spreadArray$1([], channel.state.pinnedMessages, true), 
                // copying messages from channel happens with new message - this resets the suppressAutoscroll
                suppressAutoscroll: false, threadMessages: parentId
                    ? __assign({}, channel.state.threads)[parentId] || []
                    : state.threadMessages });
        }
        case 'copyStateFromChannelOnEvent': {
            var channel = action.channel;
            return __assign(__assign({}, state), { members: __assign({}, channel.state.members), messages: __spreadArray$1([], channel.state.messages, true), pinnedMessages: __spreadArray$1([], channel.state.pinnedMessages, true), read: __assign({}, channel.state.read), watcherCount: channel.state.watcher_count, watchers: __assign({}, channel.state.watchers) });
        }
        case 'initStateFromChannel': {
            var channel = action.channel;
            return __assign(__assign({}, state), { loading: false, members: __assign({}, channel.state.members), messages: __spreadArray$1([], channel.state.messages, true), pinnedMessages: __spreadArray$1([], channel.state.pinnedMessages, true), read: __assign({}, channel.state.read), watcherCount: channel.state.watcher_count, watchers: __assign({}, channel.state.watchers) });
        }
        case 'jumpToLatestMessage': {
            return __assign(__assign({}, state), { hasMoreNewer: false, highlightedMessageId: undefined, loading: false, suppressAutoscroll: false });
        }
        case 'jumpToMessageFinished': {
            return __assign(__assign({}, state), { hasMoreNewer: action.hasMoreNewer, highlightedMessageId: action.highlightedMessageId });
        }
        case 'clearHighlightedMessage': {
            return __assign(__assign({}, state), { highlightedMessageId: undefined });
        }
        case 'loadMoreFinished': {
            var hasMore = action.hasMore, messages = action.messages;
            return __assign(__assign({}, state), { hasMore: hasMore, loadingMore: false, messages: messages, suppressAutoscroll: false });
        }
        case 'loadMoreNewerFinished': {
            var hasMoreNewer = action.hasMoreNewer, messages = action.messages;
            return __assign(__assign({}, state), { hasMoreNewer: hasMoreNewer, loadingMoreNewer: false, messages: messages });
        }
        case 'loadMoreThreadFinished': {
            var threadHasMore = action.threadHasMore, threadMessages = action.threadMessages;
            return __assign(__assign({}, state), { threadHasMore: threadHasMore, threadLoadingMore: false, threadMessages: threadMessages });
        }
        case 'openThread': {
            var channel = action.channel, message = action.message;
            return __assign(__assign({}, state), { thread: message, threadMessages: message.id ? __assign({}, channel.state.threads)[message.id] || [] : [], threadSuppressAutoscroll: false });
        }
        case 'setError': {
            var error = action.error;
            return __assign(__assign({}, state), { error: error });
        }
        case 'setLoadingMore': {
            var loadingMore = action.loadingMore;
            // suppress the autoscroll behavior
            return __assign(__assign({}, state), { loadingMore: loadingMore, suppressAutoscroll: loadingMore });
        }
        case 'setLoadingMoreNewer': {
            var loadingMoreNewer = action.loadingMoreNewer;
            return __assign(__assign({}, state), { loadingMoreNewer: loadingMoreNewer });
        }
        case 'setThread': {
            var message = action.message;
            return __assign(__assign({}, state), { thread: message });
        }
        case 'setTyping': {
            var channel = action.channel;
            return __assign(__assign({}, state), { typing: __assign({}, channel.state.typing) });
        }
        case 'startLoadingThread': {
            return __assign(__assign({}, state), { threadLoadingMore: true, threadSuppressAutoscroll: true });
        }
        case 'updateThreadOnEvent': {
            var channel = action.channel, message = action.message;
            if (!state.thread)
                return state;
            return __assign(__assign({}, state), { thread: (message === null || message === void 0 ? void 0 : message.id) === state.thread.id ? channel.state.formatMessage(message) : state.thread, threadMessages: ((_a = state.thread) === null || _a === void 0 ? void 0 : _a.id) ? __assign({}, channel.state.threads)[state.thread.id] || [] : [] });
        }
        default:
            return state;
    }
};
var initialState$1 = {
    error: null,
    hasMore: true,
    hasMoreNewer: false,
    loading: true,
    loadingMore: false,
    members: {},
    messages: [],
    pinnedMessages: [],
    read: {},
    suppressAutoscroll: false,
    thread: null,
    threadHasMore: true,
    threadLoadingMore: false,
    threadMessages: [],
    threadSuppressAutoscroll: false,
    typing: {},
    watcherCount: 0,
    watchers: {},
};

var commonEmoji = {
    custom: true,
    emoticons: [],
    short_names: [],
};
var emojiSetDef = {
    imageUrl: '',
    sheetColumns: 2,
    sheetRows: 3,
    sheetSize: 64,
    spriteUrl: 'https://getstream.imgix.net/images/emoji-sprite.png',
};
var defaultMinimalEmojis = [
    __assign(__assign({ colons: ':+1:', id: 'like', name: 'like', sheet_x: 0, sheet_y: 0 }, commonEmoji), emojiSetDef),
    __assign(__assign({ colons: ':heart:', id: 'love', name: 'love', sheet_x: 1, sheet_y: 2 }, commonEmoji), emojiSetDef),
    __assign(__assign({ colons: ':joy:', id: 'haha', name: 'haha', sheet_x: 1, sheet_y: 0 }, commonEmoji), emojiSetDef),
    __assign(__assign({ colons: ':astonished:', id: 'wow', name: 'wow', sheet_x: 0, sheet_y: 2 }, commonEmoji), emojiSetDef),
    __assign(__assign({ colons: ':pensive:', id: 'sad', name: 'sad', sheet_x: 0, sheet_y: 1 }, commonEmoji), emojiSetDef),
    __assign(__assign({ colons: ':angry:', id: 'angry', name: 'angry', sheet_x: 1, sheet_y: 1 }, commonEmoji), emojiSetDef),
];
// use this only for small lists like in ReactionSelector
var getStrippedEmojiData = function (data) { return (__assign(__assign({}, data), { emojis: {} })); };

var useCreateChannelStateContext = function (value) {
    var _a;
    var acceptedFiles = value.acceptedFiles, channel = value.channel, _b = value.channelCapabilitiesArray, channelCapabilitiesArray = _b === void 0 ? [] : _b, channelConfig = value.channelConfig, dragAndDropWindow = value.dragAndDropWindow, giphyVersion = value.giphyVersion, error = value.error, hasMore = value.hasMore, hasMoreNewer = value.hasMoreNewer, suppressAutoscroll = value.suppressAutoscroll, highlightedMessageId = value.highlightedMessageId, loading = value.loading, loadingMore = value.loadingMore, maxNumberOfFiles = value.maxNumberOfFiles, members = value.members, _c = value.messages, messages = _c === void 0 ? [] : _c, multipleUploads = value.multipleUploads, mutes = value.mutes, notifications = value.notifications, pinnedMessages = value.pinnedMessages, quotedMessage = value.quotedMessage, _d = value.read, read = _d === void 0 ? {} : _d, skipMessageDataMemoization = value.skipMessageDataMemoization, thread = value.thread, threadHasMore = value.threadHasMore, threadLoadingMore = value.threadLoadingMore, _e = value.threadMessages, threadMessages = _e === void 0 ? [] : _e, watcherCount = value.watcherCount, watcher_count = value.watcher_count, watchers = value.watchers;
    var channelId = channel.cid;
    var lastRead = channel.initialized && ((_a = channel.lastRead()) === null || _a === void 0 ? void 0 : _a.getTime());
    var membersLength = Object.keys(members || []).length;
    var notificationsLength = notifications.length;
    var readUsers = Object.values(read);
    var readUsersLength = readUsers.length;
    var readUsersLastReads = readUsers.map(function (_a) {
        var last_read = _a.last_read;
        return last_read.toISOString();
    }).join();
    var threadMessagesLength = threadMessages === null || threadMessages === void 0 ? void 0 : threadMessages.length;
    var channelCapabilities = {};
    channelCapabilitiesArray.forEach(function (capability) {
        channelCapabilities[capability] = true;
    });
    var memoizedMessageData = skipMessageDataMemoization
        ? messages
        : messages
            .map(function (_a) {
            var deleted_at = _a.deleted_at, latest_reactions = _a.latest_reactions, pinned = _a.pinned, reply_count = _a.reply_count, status = _a.status, updated_at = _a.updated_at, user = _a.user;
            return "".concat(deleted_at).concat(latest_reactions ? latest_reactions.map(function (_a) {
                var type = _a.type;
                return type;
            }).join() : '').concat(pinned).concat(reply_count).concat(status).concat(updated_at && (isDayOrMoment(updated_at) || isDate(updated_at))
                ? updated_at.toISOString()
                : updated_at || '').concat(user === null || user === void 0 ? void 0 : user.updated_at);
        })
            .join();
    var memoizedThreadMessageData = threadMessages
        .map(function (_a) {
        var deleted_at = _a.deleted_at, latest_reactions = _a.latest_reactions, pinned = _a.pinned, status = _a.status, updated_at = _a.updated_at, user = _a.user;
        return "".concat(deleted_at).concat(latest_reactions ? latest_reactions.map(function (_a) {
            var type = _a.type;
            return type;
        }).join() : '').concat(pinned).concat(status).concat(updated_at && (isDayOrMoment(updated_at) || isDate(updated_at))
            ? updated_at.toISOString()
            : updated_at || '').concat(user === null || user === void 0 ? void 0 : user.updated_at);
    })
        .join();
    var channelStateContext = React.useMemo(function () { return ({
        acceptedFiles: acceptedFiles,
        channel: channel,
        channelCapabilities: channelCapabilities,
        channelConfig: channelConfig,
        dragAndDropWindow: dragAndDropWindow,
        error: error,
        giphyVersion: giphyVersion,
        hasMore: hasMore,
        hasMoreNewer: hasMoreNewer,
        highlightedMessageId: highlightedMessageId,
        loading: loading,
        loadingMore: loadingMore,
        maxNumberOfFiles: maxNumberOfFiles,
        members: members,
        messages: messages,
        multipleUploads: multipleUploads,
        mutes: mutes,
        notifications: notifications,
        pinnedMessages: pinnedMessages,
        quotedMessage: quotedMessage,
        read: read,
        suppressAutoscroll: suppressAutoscroll,
        thread: thread,
        threadHasMore: threadHasMore,
        threadLoadingMore: threadLoadingMore,
        threadMessages: threadMessages,
        watcher_count: watcher_count,
        watcherCount: watcherCount,
        watchers: watchers,
    }); }, [
        channelId,
        error,
        hasMore,
        hasMoreNewer,
        highlightedMessageId,
        lastRead,
        loading,
        loadingMore,
        membersLength,
        memoizedMessageData,
        memoizedThreadMessageData,
        notificationsLength,
        quotedMessage,
        readUsersLength,
        readUsersLastReads,
        skipMessageDataMemoization,
        suppressAutoscroll,
        thread,
        threadHasMore,
        threadLoadingMore,
        threadMessagesLength,
        watcherCount,
    ]);
    return channelStateContext;
};

var useCreateTypingContext = function (value) {
    var typing = value.typing;
    var typingValue = Object.keys(typing || {}).join();
    var typingContext = React.useMemo(function () { return ({
        typing: typing,
    }); }, [typingValue]);
    return typingContext;
};

var useEditMessageHandler = function (doUpdateMessageRequest) {
    var _a = useChatContext('useEditMessageHandler'), channel = _a.channel, client = _a.client;
    return function (updatedMessage) {
        if (doUpdateMessageRequest && channel) {
            return Promise.resolve(doUpdateMessageRequest(channel.cid, updatedMessage));
        }
        return client.updateMessage(updatedMessage);
    };
};

var useIsMounted = function () {
    var isMounted = React.useRef(false);
    React.useEffect(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
};

var useMentionsHandlers = function (onMentionsHover, onMentionsClick) {
    return React.useCallback(function (event, mentioned_users) {
        if ((!onMentionsHover && !onMentionsClick) || !(event.target instanceof HTMLElement)) {
            return;
        }
        var target = event.target;
        var textContent = target.innerHTML.replace('*', '');
        if (textContent[0] === '@') {
            var userName_1 = textContent.replace('@', '');
            var user = mentioned_users === null || mentioned_users === void 0 ? void 0 : mentioned_users.find(function (_a) {
                var id = _a.id, name = _a.name;
                return name === userName_1 || id === userName_1;
            });
            if (onMentionsHover &&
                typeof onMentionsHover === 'function' &&
                event.type === 'mouseover') {
                onMentionsHover(event, user);
            }
            if (onMentionsClick && event.type === 'click' && typeof onMentionsClick === 'function') {
                onMentionsClick(event, user);
            }
        }
    }, [onMentionsClick, onMentionsHover]);
};

var LoadingItems = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channels-item str-chat__channel-preview-loading' },
    React__default["default"].createElement("div", { className: 'str-chat__loading-channels-avatar' }),
    React__default["default"].createElement("div", { className: 'str-chat__loading-channels-meta str-chat__channel-preview-end-loading' },
        React__default["default"].createElement("div", { className: 'str-chat__loading-channels-username' }),
        React__default["default"].createElement("div", { className: 'str-chat__loading-channels-status' })))); };
var UnMemoizedLoadingChannels = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channels' },
    React__default["default"].createElement(LoadingItems, null),
    React__default["default"].createElement(LoadingItems, null),
    React__default["default"].createElement(LoadingItems, null))); };
/**
 * Loading indicator for the ChannelList
 */
var LoadingChannels = React__default["default"].memo(UnMemoizedLoadingChannels);

/**
 * UI component for error indicator in a Channel
 */
var UnMemoizedLoadingErrorIndicator = function (_a) {
    var error = _a.error;
    var t = useTranslationContext('LoadingErrorIndicator').t;
    if (!error)
        return null;
    return (React__default["default"].createElement("div", null, t('Error: {{ errorMessage }}', { errorMessage: error.message })));
};
var LoadingErrorIndicator = React__default["default"].memo(UnMemoizedLoadingErrorIndicator, function (prevProps, nextProps) { var _a, _b; return ((_a = prevProps.error) === null || _a === void 0 ? void 0 : _a.message) === ((_b = nextProps.error) === null || _b === void 0 ? void 0 : _b.message); });

var UnMemoizedLoadingIndicator = function (props) {
    var _a = props.color, color = _a === void 0 ? '#006CFF' : _a, _b = props.size, size = _b === void 0 ? 15 : _b;
    return (React__default["default"].createElement("div", { className: "str-chat__loading-indicator ".concat(color), "data-testid": 'loading-indicator-wrapper', style: { height: size, width: size } },
        React__default["default"].createElement("svg", { height: size, viewBox: "0 0 30 30", width: size, xmlns: 'http://www.w3.org/2000/svg' },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: 'a', x1: '50%', x2: '50%', y1: '0%', y2: '100%' },
                    React__default["default"].createElement("stop", { offset: '0%', stopColor: '#FFF', stopOpacity: '0' }),
                    React__default["default"].createElement("stop", { "data-testid": 'loading-indicator-circle', offset: '100%', stopColor: color, stopOpacity: '1', style: { stopColor: color } }))),
            React__default["default"].createElement("path", { d: 'M2.518 23.321l1.664-1.11A12.988 12.988 0 0 0 15 28c7.18 0 13-5.82 13-13S22.18 2 15 2V0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-5.206 0-9.792-2.652-12.482-6.679z', fill: 'url(#a)', fillRule: 'evenodd' }))));
};
/**
 * Simple loading spinner
 */
var LoadingIndicator = React__default["default"].memo(UnMemoizedLoadingIndicator, function (prevProps, nextProps) {
    return prevProps.color === nextProps.color && prevProps.size === nextProps.size;
});

var LoadingMessage = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message' },
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-avatar' }),
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-end' },
        React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-sender' }),
        React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-last-row' },
            React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-text' }),
            React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-date' }))))); };
var LoadingMessageInput = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-input-row' },
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-input' }),
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-send' }))); };
var LoadingChannelHeader = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channel-header' },
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-header-avatar' }),
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-header-end' },
        React__default["default"].createElement("div", { className: 'str-chat__loading-channel-header-name' }),
        React__default["default"].createElement("div", { className: 'str-chat__loading-channel-header-info' })))); };
var LoadingChannel = function () { return (React__default["default"].createElement("div", { className: 'str-chat__loading-channel' },
    React__default["default"].createElement(LoadingChannelHeader, null),
    React__default["default"].createElement("div", { className: 'str-chat__loading-channel-message-list' }, Array.from(Array(3)).map(function (_, i) { return (React__default["default"].createElement(LoadingMessage, { key: "loading-message-".concat(i) })); })),
    React__default["default"].createElement(LoadingMessageInput, null))); };

var ActionsIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React__default["default"].createElement("svg", { className: className, height: '4', viewBox: '0 0 11 4', width: '11', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z', fillRule: 'nonzero' })));
};
var ReplyIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'reply-icon', height: '15', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M.56 10.946H.06l-.002-.498L.025.92a.5.5 0 1 1 1-.004l.032 9.029H9.06v-4l9 4.5-9 4.5v-4H.56z', fillRule: 'nonzero' }))); };
var DeliveredCheckIcon = function () { return (React__default["default"].createElement("svg", { height: '16', width: '16', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.72 6.633a.955.955 0 1 0-1.352-1.352L6.986 8.663 5.633 7.31A.956.956 0 1 0 4.28 8.663l2.029 2.028a.956.956 0 0 0 1.353 0l4.058-4.058z', fill: '#006CFF', fillRule: 'evenodd' }))); };
var ReactionIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React__default["default"].createElement("svg", { className: className, height: '12', viewBox: '0 0 12 12', width: '12', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("g", { clipRule: 'evenodd', fillRule: 'evenodd' },
            React__default["default"].createElement("path", { d: 'M6 1.2C3.3 1.2 1.2 3.3 1.2 6c0 2.7 2.1 4.8 4.8 4.8 2.7 0 4.8-2.1 4.8-4.8 0-2.7-2.1-4.8-4.8-4.8zM0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z' }),
            React__default["default"].createElement("path", { d: 'M5.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM8.4 4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zM3.3 6.7c.3-.2.6-.1.8.1.3.4.8.9 1.5 1 .6.2 1.4.1 2.4-1 .2-.2.6-.3.8 0 .2.2.3.6 0 .8-1.1 1.3-2.4 1.7-3.5 1.5-1-.2-1.8-.9-2.2-1.5-.2-.3-.1-.7.2-.9z' }))));
};
var ThreadIcon = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React__default["default"].createElement("svg", { className: className, height: '10', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z', fillRule: 'evenodd' })));
};
var ErrorIcon = function () { return (React__default["default"].createElement("svg", { height: '14', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z', fill: '#EA152F', fillRule: 'evenodd' }))); };
var PinIcon = function () { return (React__default["default"].createElement("svg", { height: '13', viewBox: '0 0 14 13', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M13.3518 6.686L6.75251 0.0866699L5.80984 1.02867L6.75318 1.972V1.97334L3.45318 5.272L3.45251 5.27334L2.50984 4.32934L1.56718 5.27267L4.39584 8.10067L0.624512 11.8713L1.56718 12.814L5.33851 9.04334L8.16718 11.8713L9.10984 10.9293L8.16718 9.986L11.4672 6.686L12.4098 7.62867L13.3518 6.686ZM7.22451 9.04267L7.22385 9.04334L4.39584 6.21467L7.69518 2.91467L10.5232 5.74267L7.22451 9.04267Z', fillRule: 'evenodd' }))); };
var PinIndicator = function (_a) {
    var _b, _c;
    var message = _a.message, t = _a.t;
    if (!message || !t)
        return null;
    return (React__default["default"].createElement("div", { style: { alignItems: 'center', display: 'flex' } },
        React__default["default"].createElement(PinIcon, null),
        React__default["default"].createElement("div", { style: {
                fontSize: '14px',
                marginBottom: '0',
                marginLeft: '8px',
                marginTop: '0',
            } }, message.pinned_by
            ? "".concat(t('Pinned by'), " ").concat(((_b = message.pinned_by) === null || _b === void 0 ? void 0 : _b.name) || ((_c = message.pinned_by) === null || _c === void 0 ? void 0 : _c.id))
            : t('Message pinned'))));
};
var MessageDeliveredIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'delivered-icon', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { clipRule: 'evenodd', d: 'M8.9999 16.2L4.7999 12L3.3999 13.4L8.9999 19L20.9999 6.99998L19.5999 5.59998L8.9999 16.2Z', fill: 'black', fillRule: 'evenodd' }))); };
var MessageErrorIcon = function () { return (React__default["default"].createElement("div", { className: 'str-chat__message-error-icon' },
    React__default["default"].createElement("svg", { "data-testid": 'error', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z', fill: 'black', id: 'background' }),
        React__default["default"].createElement("path", { d: 'M13 17H11V15H13V17ZM13 13H11V7H13V13Z', fill: 'white' })))); };

var useUserRole = function (message, onlySenderCanEdit, disableQuotedMessages) {
    var _a, _b, _c;
    var _d = useChannelStateContext('useUserRole'), channel = _d.channel, _e = _d.channelCapabilities, channelCapabilities = _e === void 0 ? {} : _e, channelConfig = _d.channelConfig;
    var client = useChatContext('useUserRole').client;
    /**
     * @deprecated as it relies on `membership.role` check which is already deprecated and shouldn't be used anymore.
     * `isAdmin` will be removed in future release. See `channelCapabilities`.
     */
    var isAdmin = ((_a = client.user) === null || _a === void 0 ? void 0 : _a.role) === 'admin' || channel.state.membership.role === 'admin';
    /**
     * @deprecated as it relies on `membership.role` check which is already deprecated and shouldn't be used anymore.
     * `isOwner` will be removed in future release. See `channelCapabilities`.
     */
    var isOwner = channel.state.membership.role === 'owner';
    /**
     * @deprecated as it relies on `membership.role` check which is already deprecated and shouldn't be used anymore.
     * `isModerator` will be removed in future release. See `channelCapabilities`.
     */
    var isModerator = ((_b = client.user) === null || _b === void 0 ? void 0 : _b.role) === 'channel_moderator' ||
        channel.state.membership.role === 'channel_moderator' ||
        channel.state.membership.role === 'moderator' ||
        channel.state.membership.is_moderator === true ||
        channel.state.membership.channel_role === 'channel_moderator';
    var isMyMessage = client.userID === ((_c = message.user) === null || _c === void 0 ? void 0 : _c.id);
    var canEdit = (!onlySenderCanEdit && channelCapabilities['update-any-message']) ||
        (isMyMessage && channelCapabilities['update-own-message']);
    var canDelete = channelCapabilities['delete-any-message'] ||
        (isMyMessage && channelCapabilities['delete-own-message']);
    var canFlag = !isMyMessage;
    var canMute = !isMyMessage && (channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.mutes);
    var canQuote = !disableQuotedMessages && channelCapabilities['quote-message'];
    var canReact = (channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.reactions) !== false && channelCapabilities['send-reaction'];
    var canReply = (channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.replies) !== false && channelCapabilities['send-reply'];
    return {
        canDelete: canDelete,
        canEdit: canEdit,
        canFlag: canFlag,
        canMute: canMute,
        canQuote: canQuote,
        canReact: canReact,
        canReply: canReply,
        isAdmin: isAdmin,
        isModerator: isModerator,
        isMyMessage: isMyMessage,
        isOwner: isOwner,
    };
};

var MessageDeleted = function (props) {
    var message = props.message;
    var t = useTranslationContext('MessageDeleted').t;
    var isMyMessage = useUserRole(message).isMyMessage;
    var messageClasses = isMyMessage
        ? 'str-chat__message str-chat__message--me str-chat__message-simple str-chat__message-simple--me'
        : 'str-chat__message str-chat__message-simple str-chat__message--other';
    return (React__default["default"].createElement("div", { className: "".concat(messageClasses, " str-chat__message--deleted ").concat(message.type, " "), "data-testid": 'message-deleted-component', key: message.id },
        React__default["default"].createElement("div", { className: 'str-chat__message--deleted-inner' }, t('This message was deleted...'))));
};

/**
 * Following function validates a function which returns notification message.
 * It validates if the first parameter is function and also if return value of function is string or no.
 */
var validateAndGetMessage = function (func, args) {
    if (!func || typeof func !== 'function')
        return null;
    // below is due to tests passing a single argument
    // rather than an array.
    if (!(args instanceof Array)) {
        // @ts-expect-error
        args = [args];
    }
    var returnValue = func.apply(void 0, args);
    if (typeof returnValue !== 'string')
        return null;
    return returnValue;
};
/**
 * Tell if the owner of the current message is muted
 */
var isUserMuted = function (message, mutes) {
    if (!mutes || !message)
        return false;
    var userMuted = mutes.filter(function (el) { var _a; return el.target.id === ((_a = message.user) === null || _a === void 0 ? void 0 : _a.id); });
    return !!userMuted.length;
};
var MESSAGE_ACTIONS = {
    delete: 'delete',
    edit: 'edit',
    flag: 'flag',
    mute: 'mute',
    pin: 'pin',
    quote: 'quote',
    react: 'react',
    reply: 'reply',
};
// @deprecated in favor of `channelCapabilities` - TODO: remove in next major release
var defaultPinPermissions = {
    commerce: {
        admin: true,
        anonymous: false,
        channel_member: false,
        channel_moderator: true,
        guest: false,
        member: false,
        moderator: true,
        owner: true,
        user: false,
    },
    gaming: {
        admin: true,
        anonymous: false,
        channel_member: false,
        channel_moderator: true,
        guest: false,
        member: false,
        moderator: true,
        owner: false,
        user: false,
    },
    livestream: {
        admin: true,
        anonymous: false,
        channel_member: false,
        channel_moderator: true,
        guest: false,
        member: false,
        moderator: true,
        owner: true,
        user: false,
    },
    messaging: {
        admin: true,
        anonymous: false,
        channel_member: true,
        channel_moderator: true,
        guest: false,
        member: true,
        moderator: true,
        owner: true,
        user: false,
    },
    team: {
        admin: true,
        anonymous: false,
        channel_member: true,
        channel_moderator: true,
        guest: false,
        member: true,
        moderator: true,
        owner: true,
        user: false,
    },
};
var getMessageActions = function (actions, _a) {
    var canDelete = _a.canDelete, canEdit = _a.canEdit, canFlag = _a.canFlag, canMute = _a.canMute, canPin = _a.canPin, canQuote = _a.canQuote, canReact = _a.canReact, canReply = _a.canReply;
    var messageActionsAfterPermission = [];
    var messageActions = [];
    if (actions && typeof actions === 'boolean') {
        // If value of actions is true, then populate all the possible values
        messageActions = Object.keys(MESSAGE_ACTIONS);
    }
    else if (actions && actions.length > 0) {
        messageActions = __spreadArray$1([], actions, true);
    }
    else {
        return [];
    }
    if (canDelete && messageActions.indexOf(MESSAGE_ACTIONS.delete) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.delete);
    }
    if (canEdit && messageActions.indexOf(MESSAGE_ACTIONS.edit) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.edit);
    }
    if (canFlag && messageActions.indexOf(MESSAGE_ACTIONS.flag) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.flag);
    }
    if (canMute && messageActions.indexOf(MESSAGE_ACTIONS.mute) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.mute);
    }
    if (canPin && messageActions.indexOf(MESSAGE_ACTIONS.pin) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.pin);
    }
    if (canQuote && messageActions.indexOf(MESSAGE_ACTIONS.quote) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.quote);
    }
    if (canReact && messageActions.indexOf(MESSAGE_ACTIONS.react) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.react);
    }
    if (canReply && messageActions.indexOf(MESSAGE_ACTIONS.reply) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.reply);
    }
    return messageActionsAfterPermission;
};
var ACTIONS_NOT_WORKING_IN_THREAD = ['pin', 'react', 'reply'];
var showMessageActionsBox = function (actions, inThread) {
    if (actions.length === 0) {
        return false;
    }
    if (inThread &&
        actions.filter(function (action) { return !ACTIONS_NOT_WORKING_IN_THREAD.includes(action); }).length === 0) {
        return false;
    }
    if (actions.length === 1 && (actions.includes('react') || actions.includes('reply'))) {
        return false;
    }
    if (actions.length === 2 && actions.includes('react') && actions.includes('reply')) {
        return false;
    }
    return true;
};
var areMessagesEqual = function (prevMessage, nextMessage) {
    var _a, _b, _c, _d, _e, _f;
    return prevMessage.deleted_at === nextMessage.deleted_at &&
        ((_a = prevMessage.latest_reactions) === null || _a === void 0 ? void 0 : _a.length) === ((_b = nextMessage.latest_reactions) === null || _b === void 0 ? void 0 : _b.length) &&
        ((_c = prevMessage.own_reactions) === null || _c === void 0 ? void 0 : _c.length) === ((_d = nextMessage.own_reactions) === null || _d === void 0 ? void 0 : _d.length) &&
        prevMessage.pinned === nextMessage.pinned &&
        prevMessage.reply_count === nextMessage.reply_count &&
        prevMessage.status === nextMessage.status &&
        prevMessage.text === nextMessage.text &&
        prevMessage.type === nextMessage.type &&
        prevMessage.updated_at === nextMessage.updated_at &&
        ((_e = prevMessage.user) === null || _e === void 0 ? void 0 : _e.updated_at) === ((_f = nextMessage.user) === null || _f === void 0 ? void 0 : _f.updated_at);
};
var areMessagePropsEqual = function (prevProps, nextProps) {
    var prevMessage = prevProps.message, prevMessageUI = prevProps.Message;
    var nextMessage = nextProps.message, nextMessageUI = nextProps.Message;
    if (prevMessageUI !== nextMessageUI)
        return false;
    if (prevProps.endOfGroup !== nextProps.endOfGroup)
        return false;
    if (nextProps.showDetailedReactions !== prevProps.showDetailedReactions) {
        return false;
    }
    var messagesAreEqual = areMessagesEqual(prevMessage, nextMessage);
    if (!messagesAreEqual)
        return false;
    var deepEqualProps = deepequal__default["default"](nextProps.messageActions, prevProps.messageActions) &&
        deepequal__default["default"](nextProps.readBy, prevProps.readBy) &&
        deepequal__default["default"](nextProps.highlighted, prevProps.highlighted) &&
        deepequal__default["default"](nextProps.groupStyles, prevProps.groupStyles) && // last 3 messages can have different group styles
        deepequal__default["default"](nextProps.mutes, prevProps.mutes) &&
        deepequal__default["default"](nextProps.lastReceivedId, prevProps.lastReceivedId);
    if (!deepEqualProps)
        return false;
    return (prevProps.messageListRect === nextProps.messageListRect // MessageList wrapper layout changes
    );
};
var areMessageUIPropsEqual = function (prevProps, nextProps) {
    var _a, _b, _c, _d;
    var prevLastReceivedId = prevProps.lastReceivedId, prevMessage = prevProps.message;
    var nextLastReceivedId = nextProps.lastReceivedId, nextMessage = nextProps.message;
    if (prevProps.editing !== nextProps.editing)
        return false;
    if (prevProps.highlighted !== nextProps.highlighted)
        return false;
    if (prevProps.endOfGroup !== nextProps.endOfGroup)
        return false;
    if (((_a = prevProps.mutes) === null || _a === void 0 ? void 0 : _a.length) !== ((_b = nextProps.mutes) === null || _b === void 0 ? void 0 : _b.length))
        return false;
    if (((_c = prevProps.readBy) === null || _c === void 0 ? void 0 : _c.length) !== ((_d = nextProps.readBy) === null || _d === void 0 ? void 0 : _d.length))
        return false;
    if (prevProps.showDetailedReactions !== nextProps.showDetailedReactions) {
        return false;
    }
    if ((prevMessage.id === prevLastReceivedId || prevMessage.id === nextLastReceivedId) &&
        prevLastReceivedId !== nextLastReceivedId) {
        return false;
    }
    return areMessagesEqual(prevMessage, nextMessage);
};
var messageHasReactions = function (message) { return !!(message === null || message === void 0 ? void 0 : message.latest_reactions) && !!message.latest_reactions.length; };
var messageHasAttachments = function (message) { return !!(message === null || message === void 0 ? void 0 : message.attachments) && !!message.attachments.length; };
var getImages = function (message) {
    if (!(message === null || message === void 0 ? void 0 : message.attachments)) {
        return [];
    }
    return message.attachments.filter(function (item) { return item.type === 'image'; });
};
var getNonImageAttachments = function (message) {
    if (!(message === null || message === void 0 ? void 0 : message.attachments)) {
        return [];
    }
    return message.attachments.filter(function (item) { return item.type !== 'image'; });
};
/**
 * Default Tooltip Username mapper implementation.
 *
 * @param user the user.
 */
var mapToUserNameOrId = function (user) { return user.name || user.id; };
var getReadByTooltipText = function (users, t, client, tooltipUserNameMapper) {
    var outStr = '';
    if (!t) {
        throw new Error('getReadByTooltipText was called, but translation function is not available');
    }
    if (!tooltipUserNameMapper) {
        throw new Error('getReadByTooltipText was called, but tooltipUserNameMapper function is not available');
    }
    // first filter out client user, so restLength won't count it
    var otherUsers = users
        .filter(function (item) { return item && (client === null || client === void 0 ? void 0 : client.user) && item.id !== client.user.id; })
        .map(tooltipUserNameMapper);
    var slicedArr = otherUsers.slice(0, 5);
    var restLength = otherUsers.length - slicedArr.length;
    if (slicedArr.length === 1) {
        outStr = "".concat(slicedArr[0], " ");
    }
    else if (slicedArr.length === 2) {
        // joins all with "and" but =no commas
        // example: "bob and sam"
        outStr = t('{{ firstUser }} and {{ secondUser }}', {
            firstUser: slicedArr[0],
            secondUser: slicedArr[1],
        });
    }
    else if (slicedArr.length > 2) {
        // joins all with commas, but last one gets ", and" (oxford comma!)
        // example: "bob, joe, sam and 4 more"
        if (restLength === 0) {
            // mutate slicedArr to remove last user to display it separately
            var lastUser = slicedArr.splice(slicedArr.length - 1, 1);
            outStr = t('{{ commaSeparatedUsers }}, and {{ lastUser }}', {
                commaSeparatedUsers: slicedArr.join(', '),
                lastUser: lastUser,
            });
        }
        else {
            outStr = t('{{ commaSeparatedUsers }} and {{ moreCount }} more', {
                commaSeparatedUsers: slicedArr.join(', '),
                moreCount: restLength,
            });
        }
    }
    return outStr;
};

var CustomMessageActionsList = function (props) {
    var customMessageActions = props.customMessageActions, message = props.message;
    var customActionsArray = Object.keys(customMessageActions);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, customActionsArray.map(function (customAction) {
        var customHandler = customMessageActions[customAction];
        return (React__default["default"].createElement("button", { "aria-selected": 'false', className: 'str-chat__message-actions-list-item str-chat__message-actions-list-item-button', key: customAction, onClick: function (event) { return customHandler(message, event); }, role: 'option' }, customAction));
    })));
};
var UnMemoizedMessageActionsBox = function (props) {
    var getMessageActions = props.getMessageActions, handleDelete = props.handleDelete, handleEdit = props.handleEdit, handleFlag = props.handleFlag, handleMute = props.handleMute, handlePin = props.handlePin, isUserMuted = props.isUserMuted, mine = props.mine, _a = props.open, open = _a === void 0 ? false : _a;
    var setQuotedMessage = useChannelActionContext('MessageActionsBox').setQuotedMessage;
    var _b = useMessageContext('MessageActionsBox'), customMessageActions = _b.customMessageActions, message = _b.message, messageListRect = _b.messageListRect;
    var t = useTranslationContext('MessageActionsBox').t;
    var _c = React.useState(false), reverse = _c[0], setReverse = _c[1];
    var messageActions = getMessageActions();
    var checkIfReverse = React.useCallback(function (containerElement) {
        if (!containerElement) {
            setReverse(false);
            return;
        }
        if (open) {
            var containerRect = containerElement.getBoundingClientRect();
            if (mine) {
                setReverse(!!messageListRect && containerRect.left < messageListRect.left);
            }
            else {
                setReverse(!!messageListRect && containerRect.right + 5 > messageListRect.right);
            }
        }
    }, [messageListRect, mine, open]);
    var handleQuote = function () {
        setQuotedMessage(message);
        var elements = message.parent_id
            ? document.querySelectorAll('.str-chat__thread .str-chat__textarea__textarea')
            : document.getElementsByClassName('str-chat__textarea__textarea');
        var textarea = elements.item(0);
        if (textarea instanceof HTMLTextAreaElement) {
            textarea.focus();
        }
    };
    var rootClassName = clsx('str-chat__message-actions-box', {
        'str-chat__message-actions-box--mine': mine,
        'str-chat__message-actions-box--open': open,
        'str-chat__message-actions-box--reverse': reverse,
    });
    var buttonClassName = 'str-chat__message-actions-list-item str-chat__message-actions-list-item-button';
    return (React__default["default"].createElement("div", { className: rootClassName, "data-testid": 'message-actions-box', ref: checkIfReverse },
        React__default["default"].createElement("div", { "aria-label": 'Message Options', className: 'str-chat__message-actions-list', role: 'listbox' },
            customMessageActions && (React__default["default"].createElement(CustomMessageActionsList, { customMessageActions: customMessageActions, message: message })),
            messageActions.indexOf(MESSAGE_ACTIONS.quote) > -1 && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handleQuote, role: 'option' }, t('Reply'))),
            messageActions.indexOf(MESSAGE_ACTIONS.pin) > -1 && !message.parent_id && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handlePin, role: 'option' }, !message.pinned ? t('Pin') : t('Unpin'))),
            messageActions.indexOf(MESSAGE_ACTIONS.flag) > -1 && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handleFlag, role: 'option' }, t('Flag'))),
            messageActions.indexOf(MESSAGE_ACTIONS.mute) > -1 && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handleMute, role: 'option' }, isUserMuted() ? t('Unmute') : t('Mute'))),
            messageActions.indexOf(MESSAGE_ACTIONS.edit) > -1 && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handleEdit, role: 'option' }, t('Edit Message'))),
            messageActions.indexOf(MESSAGE_ACTIONS.delete) > -1 && (React__default["default"].createElement("button", { "aria-selected": 'false', className: buttonClassName, onClick: handleDelete, role: 'option' }, t('Delete'))))));
};
/**
 * A popup box that displays the available actions on a message, such as edit, delete, pin, etc.
 */
var MessageActionsBox = React__default["default"].memo(UnMemoizedMessageActionsBox);

var MessageActions = function (props) {
    var _a = props.ActionsIcon, ActionsIcon$1 = _a === void 0 ? ActionsIcon : _a, _b = props.customWrapperClass, customWrapperClass = _b === void 0 ? '' : _b, propGetMessageActions = props.getMessageActions, propHandleDelete = props.handleDelete, propHandleFlag = props.handleFlag, propHandleMute = props.handleMute, propHandlePin = props.handlePin, inline = props.inline, propMessage = props.message, messageWrapperRef = props.messageWrapperRef, mine = props.mine;
    var mutes = useChatContext('MessageActions').mutes;
    var _c = useMessageContext('MessageActions'), customMessageActions = _c.customMessageActions, contextGetMessageActions = _c.getMessageActions, contextHandleDelete = _c.handleDelete, contextHandleFlag = _c.handleFlag, contextHandleMute = _c.handleMute, contextHandlePin = _c.handlePin, isMyMessage = _c.isMyMessage, contextMessage = _c.message, setEditingState = _c.setEditingState;
    var getMessageActions = propGetMessageActions || contextGetMessageActions;
    var handleDelete = propHandleDelete || contextHandleDelete;
    var handleFlag = propHandleFlag || contextHandleFlag;
    var handleMute = propHandleMute || contextHandleMute;
    var handlePin = propHandlePin || contextHandlePin;
    var message = propMessage || contextMessage;
    var _d = React.useState(false), actionsBoxOpen = _d[0], setActionsBoxOpen = _d[1];
    var isMuted = React.useCallback(function () { return isUserMuted(message, mutes); }, [message, mutes]);
    var hideOptions = React.useCallback(function (event) {
        if (event instanceof KeyboardEvent && event.key !== 'Escape') {
            return;
        }
        setActionsBoxOpen(false);
    }, []);
    var messageActions = getMessageActions();
    var messageDeletedAt = !!(message === null || message === void 0 ? void 0 : message.deleted_at);
    React.useEffect(function () {
        if (messageWrapperRef === null || messageWrapperRef === void 0 ? void 0 : messageWrapperRef.current) {
            messageWrapperRef.current.addEventListener('mouseleave', hideOptions);
        }
    }, [hideOptions, messageWrapperRef]);
    React.useEffect(function () {
        if (messageDeletedAt) {
            document.removeEventListener('click', hideOptions);
        }
    }, [hideOptions, messageDeletedAt]);
    React.useEffect(function () {
        if (!actionsBoxOpen)
            return;
        document.addEventListener('click', hideOptions);
        document.addEventListener('keyup', hideOptions);
        return function () {
            document.removeEventListener('click', hideOptions);
            document.removeEventListener('keyup', hideOptions);
        };
    }, [actionsBoxOpen, hideOptions]);
    if (!messageActions.length && !customMessageActions)
        return null;
    return (React__default["default"].createElement(MessageActionsWrapper, { customWrapperClass: customWrapperClass, inline: inline, setActionsBoxOpen: setActionsBoxOpen },
        React__default["default"].createElement(MessageActionsBox, { getMessageActions: getMessageActions, handleDelete: handleDelete, handleEdit: setEditingState, handleFlag: handleFlag, handleMute: handleMute, handlePin: handlePin, isUserMuted: isMuted, mine: mine ? mine() : isMyMessage(), open: actionsBoxOpen }),
        React__default["default"].createElement("button", { "aria-expanded": actionsBoxOpen, "aria-haspopup": 'true', "aria-label": 'Open Message Actions Menu', className: 'str-chat__message-actions-box-button' },
            React__default["default"].createElement(ActionsIcon$1, { className: 'str-chat__message-action-icon' }))));
};
var MessageActionsWrapper = function (props) {
    var children = props.children, customWrapperClass = props.customWrapperClass, inline = props.inline, setActionsBoxOpen = props.setActionsBoxOpen;
    var defaultWrapperClass = "\n  str-chat__message-simple__actions__action\n  str-chat__message-simple__actions__action--options\n  str-chat__message-actions-container";
    var wrapperClass = customWrapperClass || defaultWrapperClass;
    var onClickOptionsAction = function (event) {
        event.stopPropagation();
        setActionsBoxOpen(function (prev) { return !prev; });
    };
    var wrapperProps = {
        className: wrapperClass,
        'data-testid': 'message-actions',
        onClick: onClickOptionsAction,
    };
    if (inline)
        return React__default["default"].createElement("span", __assign({}, wrapperProps), children);
    return React__default["default"].createElement("div", __assign({}, wrapperProps), children);
};

var UnMemoizedMessageOptions = function (props) {
    var _a = props.ActionsIcon, ActionsIcon$1 = _a === void 0 ? ActionsIcon : _a, _b = props.displayReplies, displayReplies = _b === void 0 ? true : _b, propHandleOpenThread = props.handleOpenThread, messageWrapperRef = props.messageWrapperRef, _c = props.ReactionIcon, ReactionIcon$1 = _c === void 0 ? ReactionIcon : _c, _d = props.theme, theme = _d === void 0 ? 'simple' : _d, _e = props.ThreadIcon, ThreadIcon$1 = _e === void 0 ? ThreadIcon : _e;
    var _f = useMessageContext('MessageOptions'), customMessageActions = _f.customMessageActions, getMessageActions = _f.getMessageActions, contextHandleOpenThread = _f.handleOpenThread, initialMessage = _f.initialMessage, message = _f.message, onReactionListClick = _f.onReactionListClick, threadList = _f.threadList;
    var handleOpenThread = propHandleOpenThread || contextHandleOpenThread;
    var messageActions = getMessageActions();
    var showActionsBox = showMessageActionsBox(messageActions, threadList) || !!customMessageActions;
    var shouldShowReactions = messageActions.indexOf(MESSAGE_ACTIONS.react) > -1;
    var shouldShowReplies = messageActions.indexOf(MESSAGE_ACTIONS.reply) > -1 && displayReplies && !threadList;
    if (!message.type ||
        message.type === 'error' ||
        message.type === 'system' ||
        message.type === 'ephemeral' ||
        message.status === 'failed' ||
        message.status === 'sending' ||
        initialMessage) {
        return null;
    }
    var rootClassName = "str-chat__message-".concat(theme, "__actions str-chat__message-options");
    return (React__default["default"].createElement("div", { className: rootClassName, "data-testid": 'message-options' },
        showActionsBox && (React__default["default"].createElement(MessageActions, { ActionsIcon: ActionsIcon$1, messageWrapperRef: messageWrapperRef })),
        shouldShowReplies && (React__default["default"].createElement("button", { "aria-label": 'Open Thread', className: "str-chat__message-".concat(theme, "__actions__action str-chat__message-").concat(theme, "__actions__action--thread str-chat__message-reply-in-thread-button"), "data-testid": 'thread-action', onClick: handleOpenThread },
            React__default["default"].createElement(ThreadIcon$1, { className: 'str-chat__message-action-icon' }))),
        shouldShowReactions && (React__default["default"].createElement("button", { "aria-label": 'Open Reaction Selector', className: "str-chat__message-".concat(theme, "__actions__action str-chat__message-").concat(theme, "__actions__action--reactions str-chat__message-reactions-button"), "data-testid": 'message-reaction-action', onClick: onReactionListClick },
            React__default["default"].createElement(ReactionIcon$1, { className: 'str-chat__message-action-icon' })))));
};
var MessageOptions = React__default["default"].memo(UnMemoizedMessageOptions);

var UnMemoizedMessageRepliesCountButton = function (props) {
    var labelPlural = props.labelPlural, labelSingle = props.labelSingle, onClick = props.onClick, _a = props.reply_count, reply_count = _a === void 0 ? 0 : _a;
    var t = useTranslationContext('MessageRepliesCountButton').t;
    var themeVersion = useChatContext('MessageRepliesCountButton').themeVersion;
    if (!reply_count)
        return null;
    var replyCountText = t('replyCount', { count: reply_count });
    if (labelPlural && reply_count > 1) {
        replyCountText = "".concat(reply_count, " ").concat(labelPlural);
    }
    else if (labelSingle) {
        replyCountText = "1 ".concat(labelSingle);
    }
    return (React__default["default"].createElement("div", { className: 'str-chat__message-simple-reply-button str-chat__message-replies-count-button-wrapper' },
        React__default["default"].createElement("button", { className: 'str-chat__message-replies-count-button', "data-testid": 'replies-count-button', onClick: onClick },
            themeVersion === '1' && React__default["default"].createElement(ReplyIcon, null),
            replyCountText)));
};
var MessageRepliesCountButton = React__default["default"].memo(UnMemoizedMessageRepliesCountButton);

/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React__namespace.useLayoutEffect : React__namespace.useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS$1 = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS$1 : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS$1, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = React__namespace.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = React__namespace.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = React__namespace.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        ReactDOM__namespace.flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = React__namespace.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (deepequal__default["default"](prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React__namespace.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

var Tooltip = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React__default["default"].createElement("div", __assign({ className: 'str-chat__tooltip' }, rest), children));
};
var PopperTooltip = function (_a) {
    var children = _a.children, _b = _a.offset, offset = _b === void 0 ? [0, 10] : _b, referenceElement = _a.referenceElement, _c = _a.placement, placement = _c === void 0 ? 'top' : _c, _d = _a.visible, visible = _d === void 0 ? false : _d;
    var _e = React.useState(null), popperElement = _e[0], setPopperElement = _e[1];
    var _f = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: offset,
                },
            },
        ],
        placement: placement,
    }), attributes = _f.attributes, styles = _f.styles;
    if (!visible)
        return null;
    return (React__default["default"].createElement("div", __assign({ className: 'str-chat__tooltip', ref: setPopperElement, style: styles.popper }, attributes.popper), children));
};

var useEnterLeaveHandlers = function (_a) {
    var _b = _a === void 0 ? {} : _a, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave;
    var _c = React.useState(false), tooltipVisible = _c[0], setTooltipVisible = _c[1];
    var handleEnter = React.useCallback(function (e) {
        setTooltipVisible(true);
        onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(e);
    }, [onMouseEnter]);
    var handleLeave = React.useCallback(function (e) {
        setTooltipVisible(false);
        onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(e);
    }, [onMouseLeave]);
    return { handleEnter: handleEnter, handleLeave: handleLeave, tooltipVisible: tooltipVisible };
};

var UnMemoizedMessageStatus = function (props) {
    var _a;
    var propAvatar = props.Avatar, _b = props.messageType, messageType = _b === void 0 ? 'simple' : _b, _c = props.tooltipUserNameMapper, tooltipUserNameMapper = _c === void 0 ? mapToUserNameOrId : _c;
    var _d = useEnterLeaveHandlers(), handleEnter = _d.handleEnter, handleLeave = _d.handleLeave, tooltipVisible = _d.tooltipVisible;
    var client = useChatContext('MessageStatus').client;
    var contextAvatar = useComponentContext('MessageStatus').Avatar;
    var _e = useMessageContext('MessageStatus'), isMyMessage = _e.isMyMessage, lastReceivedId = _e.lastReceivedId, message = _e.message, readBy = _e.readBy, threadList = _e.threadList;
    var t = useTranslationContext('MessageStatus').t;
    var themeVersion = useChatContext('MessageStatus').themeVersion;
    var _f = React.useState(null), referenceElement = _f[0], setReferenceElement = _f[1];
    var Avatar$1 = propAvatar || contextAvatar || Avatar;
    if (!isMyMessage() || message.type === 'error')
        return null;
    var justReadByMe = (readBy === null || readBy === void 0 ? void 0 : readBy.length) === 1 && readBy[0].id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id);
    var rootClassName = "str-chat__message-".concat(messageType, "-status str-chat__message-status");
    var sending = message.status === 'sending';
    var delivered = message.status === 'received' && message.id === lastReceivedId && !threadList;
    var deliveredAndRead = !!((readBy === null || readBy === void 0 ? void 0 : readBy.length) && !threadList && !justReadByMe);
    var lastReadUser = (deliveredAndRead
        ? readBy.filter(function (item) { var _a; return item.id !== ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id); })
        : [])[0];
    return (React__default["default"].createElement("span", { className: rootClassName, "data-testid": clsx({
            'message-status-read-by': deliveredAndRead,
            'message-status-received': delivered && !deliveredAndRead,
            'message-status-sending': sending,
        }), onMouseEnter: handleEnter, onMouseLeave: handleLeave, ref: setReferenceElement },
        sending && (React__default["default"].createElement(React__default["default"].Fragment, null,
            themeVersion === '1' && React__default["default"].createElement(Tooltip, null, t('Sending...')),
            themeVersion === '2' && (React__default["default"].createElement(PopperTooltip, { offset: [0, 5], referenceElement: referenceElement, visible: tooltipVisible }, t('Sending...'))),
            React__default["default"].createElement(LoadingIndicator, null))),
        delivered && !deliveredAndRead && (React__default["default"].createElement(React__default["default"].Fragment, null,
            themeVersion === '1' && React__default["default"].createElement(Tooltip, null, t('Delivered')),
            themeVersion === '2' && (React__default["default"].createElement(PopperTooltip, { offset: [0, 5], referenceElement: referenceElement, visible: tooltipVisible }, t('Delivered'))),
            themeVersion === '2' ? React__default["default"].createElement(MessageDeliveredIcon, null) : React__default["default"].createElement(DeliveredCheckIcon, null))),
        deliveredAndRead && (React__default["default"].createElement(React__default["default"].Fragment, null,
            themeVersion === '1' && (React__default["default"].createElement(Tooltip, null, getReadByTooltipText(readBy, t, client, tooltipUserNameMapper))),
            themeVersion === '2' && (React__default["default"].createElement(PopperTooltip, { offset: [0, 5], referenceElement: referenceElement, visible: tooltipVisible }, getReadByTooltipText(readBy, t, client, tooltipUserNameMapper))),
            React__default["default"].createElement(Avatar$1, { image: lastReadUser.image, name: lastReadUser.name || lastReadUser.id, size: 15, user: lastReadUser }),
            readBy.length > 2 && (React__default["default"].createElement("span", { className: "str-chat__message-".concat(messageType, "-status-number"), "data-testid": 'message-status-read-by-many' }, readBy.length - 1))))));
};
var MessageStatus = React__default["default"].memo(UnMemoizedMessageStatus);

var QuotedMessage = function () {
    var _a, _b;
    var _c = useComponentContext('QuotedMessage'), Attachment = _c.Attachment, ContextAvatar = _c.Avatar;
    var _d = useMessageContext('QuotedMessage'), isMyMessage = _d.isMyMessage, message = _d.message;
    var userLanguage = useTranslationContext('QuotedMessage').userLanguage;
    var jumpToMessage = useChannelActionContext('QuotedMessage').jumpToMessage;
    var Avatar$1 = ContextAvatar || Avatar;
    var quoted_message = message.quoted_message;
    if (!quoted_message)
        return null;
    var quotedMessageText = ((_a = quoted_message.i18n) === null || _a === void 0 ? void 0 : _a["".concat(userLanguage, "_text")]) ||
        quoted_message.text;
    // @ts-expect-error
    var quotedMessageAttachment = quoted_message.attachments.length
        ? // @ts-expect-error
            quoted_message.attachments[0]
        : null;
    if (!quotedMessageText && !quotedMessageAttachment)
        return null;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: clsx('str-chat__quoted-message-preview quoted-message', { mine: isMyMessage() }), onClickCapture: function (e) {
                e.stopPropagation();
                e.preventDefault();
                jumpToMessage(quoted_message.id);
            } },
            quoted_message.user && (React__default["default"].createElement(Avatar$1, { image: quoted_message.user.image, name: quoted_message.user.name || quoted_message.user.id, size: 20, user: quoted_message.user })),
            React__default["default"].createElement("div", { className: 'quoted-message-inner str-chat__quoted-message-bubble' },
                quotedMessageAttachment && React__default["default"].createElement(Attachment, { attachments: [quotedMessageAttachment] }),
                React__default["default"].createElement("div", null, quotedMessageText))),
        ((_b = message.attachments) === null || _b === void 0 ? void 0 : _b.length) && message.quoted_message ? (React__default["default"].createElement(Attachment, { attachments: message.attachments })) : null));
};

var UnMemoizedMessageTextComponent = function (props) {
    var _a;
    var customInnerClass = props.customInnerClass, _b = props.customWrapperClass, customWrapperClass = _b === void 0 ? '' : _b, propMessage = props.message, _c = props.theme, theme = _c === void 0 ? 'simple' : _c;
    var _d = useComponentContext('MessageText').QuotedMessage, QuotedMessage$1 = _d === void 0 ? QuotedMessage : _d;
    var _e = useMessageContext('MessageText'), contextMessage = _e.message, onMentionsClickMessage = _e.onMentionsClickMessage, onMentionsHoverMessage = _e.onMentionsHoverMessage, _f = _e.renderText, renderText$1 = _f === void 0 ? renderText : _f, unsafeHTML = _e.unsafeHTML;
    var _g = useTranslationContext('MessageText'), t = _g.t, userLanguage = _g.userLanguage;
    var message = propMessage || contextMessage;
    var hasAttachment = messageHasAttachments(message);
    var messageTextToRender = ((_a = message.i18n) === null || _a === void 0 ? void 0 : _a["".concat(userLanguage, "_text")]) || message.text;
    var messageText = React.useMemo(function () { return renderText$1(messageTextToRender, message.mentioned_users); }, [
        message.mentioned_users,
        messageTextToRender,
    ]);
    var wrapperClass = customWrapperClass || 'str-chat__message-text';
    var innerClass = customInnerClass || "str-chat__message-text-inner str-chat__message-".concat(theme, "-text-inner");
    if (!messageTextToRender && !message.quoted_message)
        return null;
    return (React__default["default"].createElement("div", { className: wrapperClass, tabIndex: 0 },
        React__default["default"].createElement("div", { className: "\n          ".concat(innerClass, "\n          ").concat(hasAttachment ? " str-chat__message-".concat(theme, "-text-inner--has-attachment") : '', "\n          ").concat(isOnlyEmojis(message.text) && !message.quoted_message
                ? " str-chat__message-".concat(theme, "-text-inner--is-emoji")
                : '', "\n        ").trim(), "data-testid": 'message-text-inner-wrapper', onClick: onMentionsClickMessage, onMouseOver: onMentionsHoverMessage },
            message.quoted_message && React__default["default"].createElement(QuotedMessage$1, null),
            message.type === 'error' && (React__default["default"].createElement("div", { className: "str-chat__".concat(theme, "-message--error-message str-chat__message--error-message") }, t('Error · Unsent'))),
            message.status === 'failed' && (React__default["default"].createElement("div", { className: "str-chat__".concat(theme, "-message--error-message str-chat__message--error-message") }, message.errorStatusCode !== 403
                ? t('Message Failed · Click to try again')
                : t('Message Failed · Unauthorized'))),
            unsafeHTML && message.html ? (React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: message.html } })) : (React__default["default"].createElement("div", null, messageText)))));
};
var MessageText = React__default["default"].memo(UnMemoizedMessageTextComponent);

var notValidDateWarning = 'MessageTimestamp was called without a message, or message has invalid created_at date.';
var noParsingFunctionWarning = 'MessageTimestamp was called but there is no datetime parsing function available';
function getDateString(_a) {
    var calendar = _a.calendar, format = _a.format, formatDate = _a.formatDate, messageCreatedAt = _a.messageCreatedAt, tDateTimeParser = _a.tDateTimeParser;
    if (!messageCreatedAt ||
        (typeof messageCreatedAt === 'string' && !Date.parse(messageCreatedAt))) {
        console.warn(notValidDateWarning);
        return null;
    }
    if (typeof formatDate === 'function') {
        return formatDate(new Date(messageCreatedAt));
    }
    if (!tDateTimeParser) {
        console.warn(noParsingFunctionWarning);
        return null;
    }
    var parsedTime = tDateTimeParser(messageCreatedAt);
    if (isDayOrMoment(parsedTime)) {
        /**
         * parsedTime.calendar is guaranteed on the type but is only
         * available when a user calls dayjs.extend(calendar)
         */
        return calendar && parsedTime.calendar ? parsedTime.calendar() : parsedTime.format(format);
    }
    if (isDate(parsedTime)) {
        return parsedTime.toDateString();
    }
    if (isNumberOrString(parsedTime)) {
        return parsedTime;
    }
    return null;
}

var defaultTimestampFormat = 'h:mmA';
var UnMemoizedMessageTimestamp = function (props) {
    var _a = props.calendar, calendar = _a === void 0 ? false : _a, _b = props.customClass, customClass = _b === void 0 ? '' : _b, _c = props.format, format = _c === void 0 ? defaultTimestampFormat : _c, propMessage = props.message;
    var _d = useMessageContext('MessageTimestamp'), formatDate = _d.formatDate, contextMessage = _d.message;
    var tDateTimeParser = useTranslationContext('MessageTimestamp').tDateTimeParser;
    var message = propMessage || contextMessage;
    var messageCreatedAt = message.created_at && isDate(message.created_at)
        ? message.created_at.toISOString()
        : message.created_at;
    var when = React.useMemo(function () { return getDateString({ calendar: calendar, format: format, formatDate: formatDate, messageCreatedAt: messageCreatedAt, tDateTimeParser: tDateTimeParser }); }, [formatDate, calendar, tDateTimeParser, format, messageCreatedAt]);
    if (!when)
        return null;
    return (React__default["default"].createElement("time", { className: customClass, dateTime: messageCreatedAt, title: messageCreatedAt }, when));
};
var MessageTimestamp = React__default["default"].memo(UnMemoizedMessageTimestamp);

var CUSTOM_MESSAGE_TYPE = {
    date: 'message.date',
    intro: 'channel.intro',
};

var useCommandTrigger = function () {
    var themeVersion = useChatContext('useCommandTrigger').themeVersion;
    var channelConfig = useChannelStateContext('useCommandTrigger').channelConfig;
    var commands = channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.commands;
    return {
        component: CommandItem,
        dataProvider: function (query, text, onReady) {
            if (text.indexOf('/') !== 0 || !commands) {
                return [];
            }
            var selectedCommands = commands.filter(function (command) { var _a; return ((_a = command.name) === null || _a === void 0 ? void 0 : _a.indexOf(query)) !== -1; });
            // sort alphabetically unless the you're matching the first char
            selectedCommands.sort(function (a, b) {
                var _a, _b;
                var nameA = (_a = a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                var nameB = (_b = b.name) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                if ((nameA === null || nameA === void 0 ? void 0 : nameA.indexOf(query)) === 0) {
                    nameA = "0".concat(nameA);
                }
                if ((nameB === null || nameB === void 0 ? void 0 : nameB.indexOf(query)) === 0) {
                    nameB = "0".concat(nameB);
                }
                // Should confirm possible null / undefined when TS is fully implemented
                if (nameA != null && nameB != null) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }
                return 0;
            });
            var result = selectedCommands.slice(0, themeVersion === '2' ? 5 : 10);
            if (onReady)
                onReady(result.filter(function (result) {
                    return result.name !== undefined;
                }), query);
            return result;
        },
        output: function (entity) { return ({
            caretPosition: 'next',
            key: entity.name,
            text: "/".concat(entity.name),
        }); },
    };
};

var UnMemoizedEmoticonItem = function (props) {
    var entity = props.entity;
    var hasEntity = Object.keys(entity).length;
    var itemParts = entity === null || entity === void 0 ? void 0 : entity.itemNameParts;
    var renderName = function () {
        if (!hasEntity)
            return null;
        return (hasEntity &&
            itemParts.parts.map(function (part, i) {
                return part.toLowerCase() === itemParts.match.toLowerCase() ? (React__default["default"].createElement("span", { className: 'str-chat__emoji-item--highlight', key: "part-".concat(i) }, part)) : (React__default["default"].createElement("span", { className: 'str-chat__emoji-item--part', key: "part-".concat(i) }, part));
            }));
    };
    return (React__default["default"].createElement("div", { className: 'str-chat__emoji-item' },
        React__default["default"].createElement("span", { className: 'str-chat__emoji-item--entity' }, entity.native),
        React__default["default"].createElement("span", { className: 'str-chat__emoji-item--name' }, renderName())));
};
var EmoticonItem = React__default["default"].memo(UnMemoizedEmoticonItem);

var useEmojiTrigger = function (emojiIndex) {
    var themeVersion = useChatContext('useEmojiTrigger').themeVersion;
    return {
        component: EmoticonItem,
        dataProvider: function (query, _, onReady) {
            if (query.length === 0 || query.charAt(0).match(/[^a-zA-Z0-9+-]/)) {
                return [];
            }
            var emojis = (emojiIndex === null || emojiIndex === void 0 ? void 0 : emojiIndex.search(query)) || [];
            // emojiIndex.search sometimes returns undefined values, so filter those out first
            var result = emojis.filter(Boolean).slice(0, themeVersion === '2' ? 7 : 10);
            if (onReady)
                onReady(result, query);
            return result;
        },
        output: function (entity) { return ({
            caretPosition: 'next',
            key: entity.id,
            text: "".concat('native' in entity ? entity.native : ''),
        }); },
    };
};

var accentsMap = {
    a: 'á|à|ã|â|À|Á|Ã|Â',
    c: 'ç|Ç',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    n: 'ñ|Ñ',
    o: 'ó|ò|ô|ő|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
};
var removeDiacritics = function (text) {
    if (!text)
        return '';
    return Object.keys(accentsMap).reduce(function (acc, current) { return acc.replace(new RegExp(accentsMap[current], 'g'), current); }, text);
};
var calculateLevenshtein = function (query, name) {
    if (query.length === 0)
        return name.length;
    if (name.length === 0)
        return query.length;
    var matrix = [];
    var i;
    for (i = 0; i <= name.length; i++) {
        matrix[i] = [i];
    }
    var j;
    for (j = 0; j <= query.length; j++) {
        matrix[0][j] = j;
    }
    for (i = 1; i <= name.length; i++) {
        for (j = 1; j <= query.length; j++) {
            if (name.charAt(i - 1) === query.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                Math.min(matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j] + 1)); // deletion
            }
        }
    }
    return matrix[name.length][query.length];
};
var searchLocalUsers = function (params) {
    var ownUserId = params.ownUserId, query = params.query, text = params.text, useMentionsTransliteration = params.useMentionsTransliteration, users = params.users;
    var matchingUsers = users.filter(function (user) {
        if (user.id === ownUserId)
            return false;
        if (!query)
            return true;
        var updatedId = removeDiacritics(user.id).toLowerCase();
        var updatedName = removeDiacritics(user.name).toLowerCase();
        var updatedQuery = removeDiacritics(query).toLowerCase();
        if (useMentionsTransliteration) {
            (function () { return __awaiter$1(void 0, void 0, void 0, function () {
                var transliterate;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@stream-io/transliterate')); })];
                        case 1:
                            transliterate = (_a.sent()).default;
                            updatedName = transliterate(user.name || '').toLowerCase();
                            updatedQuery = transliterate(query).toLowerCase();
                            updatedId = transliterate(user.id).toLowerCase();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        var maxDistance = 3;
        var lastDigits = text.slice(-(maxDistance + 1)).includes('@');
        if (updatedName) {
            var levenshtein_1 = calculateLevenshtein(updatedQuery, updatedName);
            if (updatedName.includes(updatedQuery) || (levenshtein_1 <= maxDistance && lastDigits)) {
                return true;
            }
        }
        var levenshtein = calculateLevenshtein(updatedQuery, updatedId);
        return updatedId.includes(updatedQuery) || (levenshtein <= maxDistance && lastDigits);
    });
    return matchingUsers;
};
var checkUploadPermissions = function (params) { return __awaiter$1(void 0, void 0, void 0, function () {
    var addNotification, file, getAppSettings, t, uploadType, appSettings, _a, allowed_file_extensions, allowed_mime_types, blocked_file_extensions, blocked_mime_types, sendErrorNotification, allowed, blocked, allowed, blocked;
    var _b, _c;
    return __generator$1(this, function (_d) {
        switch (_d.label) {
            case 0:
                addNotification = params.addNotification, file = params.file, getAppSettings = params.getAppSettings, t = params.t, uploadType = params.uploadType;
                appSettings = null;
                return [4 /*yield*/, getAppSettings()];
            case 1:
                appSettings = _d.sent();
                _a = (uploadType === 'image'
                    ? (_b = appSettings === null || appSettings === void 0 ? void 0 : appSettings.app) === null || _b === void 0 ? void 0 : _b.image_upload_config
                    : (_c = appSettings === null || appSettings === void 0 ? void 0 : appSettings.app) === null || _c === void 0 ? void 0 : _c.file_upload_config) || {}, allowed_file_extensions = _a.allowed_file_extensions, allowed_mime_types = _a.allowed_mime_types, blocked_file_extensions = _a.blocked_file_extensions, blocked_mime_types = _a.blocked_mime_types;
                sendErrorNotification = function () {
                    return addNotification(t("Upload type: \"{{ type }}\" is not allowed", { type: file.type || 'unknown type' }), 'error');
                };
                if (allowed_file_extensions === null || allowed_file_extensions === void 0 ? void 0 : allowed_file_extensions.length) {
                    allowed = allowed_file_extensions.some(function (ext) {
                        return file.name.toLowerCase().endsWith(ext.toLowerCase());
                    });
                    if (!allowed) {
                        sendErrorNotification();
                        return [2 /*return*/, false];
                    }
                }
                if (blocked_file_extensions === null || blocked_file_extensions === void 0 ? void 0 : blocked_file_extensions.length) {
                    blocked = blocked_file_extensions.some(function (ext) {
                        return file.name.toLowerCase().endsWith(ext.toLowerCase());
                    });
                    if (blocked) {
                        sendErrorNotification();
                        return [2 /*return*/, false];
                    }
                }
                if (allowed_mime_types === null || allowed_mime_types === void 0 ? void 0 : allowed_mime_types.length) {
                    allowed = allowed_mime_types.some(function (type) { var _a; return type.toLowerCase() === ((_a = file.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
                    if (!allowed) {
                        sendErrorNotification();
                        return [2 /*return*/, false];
                    }
                }
                if (blocked_mime_types === null || blocked_mime_types === void 0 ? void 0 : blocked_mime_types.length) {
                    blocked = blocked_mime_types.some(function (type) { var _a; return type.toLowerCase() === ((_a = file.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
                    if (blocked) {
                        sendErrorNotification();
                        return [2 /*return*/, false];
                    }
                }
                return [2 /*return*/, true];
        }
    });
}); };

var useUserTrigger = function (params) {
    var disableMentions = params.disableMentions, mentionAllAppUsers = params.mentionAllAppUsers, _a = params.mentionQueryParams, mentionQueryParams = _a === void 0 ? {} : _a, onSelectUser = params.onSelectUser, useMentionsTransliteration = params.useMentionsTransliteration;
    var _b = React.useState(false), searching = _b[0], setSearching = _b[1];
    var _c = useChatContext('useUserTrigger'), client = _c.client, mutes = _c.mutes, themeVersion = _c.themeVersion;
    var channel = useChannelStateContext('useUserTrigger').channel;
    var members = channel.state.members;
    var watchers = channel.state.watchers;
    var getMembersAndWatchers = React.useCallback(function () {
        var memberUsers = members ? Object.values(members).map(function (_a) {
            var user = _a.user;
            return user;
        }) : [];
        var watcherUsers = watchers ? Object.values(watchers) : [];
        var users = __spreadArray$1(__spreadArray$1([], memberUsers, true), watcherUsers, true);
        // make sure we don't list users twice
        var uniqueUsers = {};
        users.forEach(function (user) {
            if (user && !uniqueUsers[user.id]) {
                uniqueUsers[user.id] = user;
            }
        });
        return Object.values(uniqueUsers);
    }, [members, watchers]);
    var queryMembersThrottled = React.useCallback(throttle__default["default"](function (query, onReady) { return __awaiter$1(void 0, void 0, void 0, function () {
        var response, users, error_1;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, channel.queryMembers({
                            name: { $autocomplete: query },
                        })];
                case 1:
                    response = _a.sent();
                    users = response.members.map(function (member) { return member.user; });
                    if (onReady && users.length) {
                        onReady(users);
                    }
                    else {
                        onReady([]);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log({ error: error_1 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, 200), [channel]);
    var queryUsers = function (query, onReady) { return __awaiter$1(void 0, void 0, void 0, function () {
        var users, error_2;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query || searching)
                        return [2 /*return*/];
                    setSearching(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.queryUsers(__assign({ $or: [{ id: { $autocomplete: query } }, { name: { $autocomplete: query } }], id: { $ne: client.userID } }, mentionQueryParams.filters), __assign({ id: 1 }, mentionQueryParams.sort), __assign({ limit: 10 }, mentionQueryParams.options))];
                case 2:
                    users = (_a.sent()).users;
                    if (onReady && users.length) {
                        onReady(users);
                    }
                    else {
                        onReady([]);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log({ error: error_2 });
                    return [3 /*break*/, 4];
                case 4:
                    setSearching(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var queryUsersThrottled = throttle__default["default"](queryUsers, 200);
    return {
        callback: function (item) { return onSelectUser(item); },
        component: UserItem,
        dataProvider: function (query, text, onReady) {
            var _a, _b;
            if (disableMentions)
                return;
            var filterMutes = function (data) {
                if (text.includes('/unmute') && !mutes.length) {
                    return [];
                }
                if (!mutes.length)
                    return data;
                if (text.includes('/unmute')) {
                    return data.filter(function (suggestion) {
                        return mutes.some(function (mute) { return mute.target.id === suggestion.id; });
                    });
                }
                return data.filter(function (suggestion) { return mutes.every(function (mute) { return mute.target.id !== suggestion.id; }); });
            };
            if (mentionAllAppUsers) {
                return queryUsersThrottled(query, function (data) {
                    if (onReady)
                        onReady(filterMutes(data), query);
                });
            }
            /**
             * By default, we return maximum 100 members via queryChannels api call.
             * Thus it is safe to assume, that if number of members in channel.state is < 100,
             * then all the members are already available on client side and we don't need to
             * make any api call to queryMembers endpoint.
             */
            if (!query || Object.values(members || {}).length < 100) {
                var users = getMembersAndWatchers();
                var params_1 = {
                    ownUserId: client.userID,
                    query: query,
                    text: text,
                    useMentionsTransliteration: useMentionsTransliteration,
                    users: users,
                };
                var matchingUsers = searchLocalUsers(params_1);
                var usersToShow = (_b = (_a = mentionQueryParams.options) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : (themeVersion === '2' ? 7 : 10);
                var data = matchingUsers.slice(0, usersToShow);
                if (onReady)
                    onReady(filterMutes(data), query);
                return data;
            }
            return queryMembersThrottled(query, function (data) {
                if (onReady)
                    onReady(filterMutes(data), query);
            });
        },
        output: function (entity) { return ({
            caretPosition: 'next',
            key: entity.id,
            text: "@".concat(entity.name || entity.id),
        }); },
    };
};

var DefaultTriggerProvider = function (_a) {
    var children = _a.children;
    var currentValue = useMessageInputContext('DefaultTriggerProvider');
    var defaultAutocompleteTriggers = {
        '/': useCommandTrigger(),
        ':': useEmojiTrigger(currentValue.emojiIndex),
        '@': useUserTrigger({
            disableMentions: currentValue.disableMentions,
            mentionAllAppUsers: currentValue.mentionAllAppUsers,
            mentionQueryParams: currentValue.mentionQueryParams,
            onSelectUser: currentValue.onSelectUser,
            useMentionsTransliteration: currentValue.useMentionsTransliteration,
        }),
    };
    var newValue = __assign(__assign({}, currentValue), { autocompleteTriggers: defaultAutocompleteTriggers });
    return React__default["default"].createElement(MessageInputContextProvider, { value: newValue }, children);
};

var filterEmoji = function (emoji) {
    return !(emoji.name === 'White Smiling Face' || emoji.name === 'White Frowning Face');
};
var EmojiPicker = function (_a) {
    var small = _a.small;
    var _b = useEmojiContext('EmojiPicker'), emojiConfig = _b.emojiConfig, EmojiPickerComponent = _b.EmojiPicker;
    var t = useTranslationContext('EmojiPicker').t;
    var _c = useMessageInputContext('EmojiPicker'), emojiPickerIsOpen = _c.emojiPickerIsOpen, emojiPickerRef = _c.emojiPickerRef, onSelectEmoji = _c.onSelectEmoji;
    var emojiData = (emojiConfig || {}).emojiData;
    if (!emojiPickerIsOpen || !emojiData)
        return null;
    return (React__default["default"].createElement("div", { className: clsx('str-chat__emoji-picker-container', {
            'str-chat__input--emojipicker': !small,
            'str-chat__small-message-input-emojipicker': small,
        }), ref: emojiPickerRef },
        React__default["default"].createElement(React.Suspense, { fallback: null },
            React__default["default"].createElement(EmojiPickerComponent, { color: '#006CFF', data: emojiData, emoji: 'point_up', emojisToShowFilter: filterEmoji, native: true, onSelect: onSelectEmoji, set: 'facebook', showPreview: false, showSkinTones: false, title: t('Pick your emoji'), useButton: true }))));
};

var EmojiIconLarge = function () {
    var t = useTranslationContext('EmojiIconLarge').t;
    return (React__default["default"].createElement("svg", { height: '28', width: '28', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Open emoji picker')),
        React__default["default"].createElement("g", { clipRule: 'evenodd', fillRule: 'evenodd' },
            React__default["default"].createElement("path", { d: 'M14 4.4C8.6 4.4 4.4 8.6 4.4 14c0 5.4 4.2 9.6 9.6 9.6c5.4 0 9.6-4.2 9.6-9.6c0-5.4-4.2-9.6-9.6-9.6zM2 14c0-6.6 5.4-12 12-12s12 5.4 12 12s-5.4 12-12 12s-12-5.4-12-12zM12.8 11c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8s1.8.8 1.8 1.8zM18.8 11c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8s1.8.8 1.8 1.8zM8.6 15.4c.6-.4 1.2-.2 1.6.2c.6.8 1.6 1.8 3 2c1.2.4 2.8.2 4.8-2c.4-.4 1.2-.6 1.6 0c.4.4.6 1.2 0 1.6c-2.2 2.6-4.8 3.4-7 3c-2-.4-3.6-1.8-4.4-3c-.4-.6-.2-1.2.4-1.8z' }))));
};
var EmojiIconSmall = function () {
    var t = useTranslationContext('EmojiIconSmall').t;
    return (React__default["default"].createElement("svg", { height: '14', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Open emoji picker')),
        React__default["default"].createElement("g", { clipRule: 'evenodd', fillRule: 'evenodd' },
            React__default["default"].createElement("path", { d: 'M6.7 1.42C3.73 1.42 1.42 3.73 1.42 6.7c0 2.97 2.31 5.28 5.28 5.28c2.97 0 5.28-2.31 5.28-5.28c0-2.97-2.31-5.28-5.28-5.28zM.1 6.7c0-3.63 2.97-6.6 6.6-6.6s6.6 2.97 6.6 6.6s-2.97 6.6-6.6 6.6s-6.6-2.97-6.6-6.6zM6.04 5.05c0 .55-.44.99-.99.99s-.99-.44-.99-.99s.44-.99.99-.99s.99.44.99.99zM9.34 5.05c0 .55-.44.99-.99.99s-.99-.44-.99-.99s.44-.99.99-.99s.99.44.99.99zM3.73 7.47c.33-.22.66-.11.88.11c.33.44.88.99 1.65 1.1c.66.22 1.54.11 2.64-1.1c.22-.22.66-.33.88 0c.22.22.33.66 0 .88c-1.21 1.43-2.64 1.87-3.85 1.65c-1.1-.22-1.98-.99-2.42-1.65c-.22-.33-.11-.66.22-.99z' }))));
};
// ThemingV2 icon
var EmojiPickerIcon = function () { return (React__default["default"].createElement("svg", { preserveAspectRatio: 'xMinYMin', viewBox: '0 0 28 28', width: '100%', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("g", { clipRule: 'evenodd', fillRule: 'evenodd' },
        React__default["default"].createElement("path", { d: 'M14 4.4C8.6 4.4 4.4 8.6 4.4 14c0 5.4 4.2 9.6 9.6 9.6c5.4 0 9.6-4.2 9.6-9.6c0-5.4-4.2-9.6-9.6-9.6zM2 14c0-6.6 5.4-12 12-12s12 5.4 12 12s-5.4 12-12 12s-12-5.4-12-12zM12.8 11c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8s1.8.8 1.8 1.8zM18.8 11c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8s1.8.8 1.8 1.8zM8.6 15.4c.6-.4 1.2-.2 1.6.2c.6.8 1.6 1.8 3 2c1.2.4 2.8.2 4.8-2c.4-.4 1.2-.6 1.6 0c.4.4.6 1.2 0 1.6c-2.2 2.6-4.8 3.4-7 3c-2-.4-3.6-1.8-4.4-3c-.4-.6-.2-1.2.4-1.8z' })))); };
var FileUploadIcon = function () {
    var t = useTranslationContext('FileUploadIcon').t;
    return (React__default["default"].createElement("svg", { height: '14', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Attach files')),
        React__default["default"].createElement("path", { d: 'M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z', fillRule: 'nonzero' })));
};
var FileUploadIconFlat = function () {
    var t = useTranslationContext('FileUploadIconFlat').t;
    return (React__default["default"].createElement("svg", { height: '14', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Attach files')),
        React__default["default"].createElement("path", { d: 'M1.667.333h10.666c.737 0 1.334.597 1.334 1.334v10.666c0 .737-.597 1.334-1.334 1.334H1.667a1.333 1.333 0 0 1-1.334-1.334V1.667C.333.93.93.333 1.667.333zm2 1.334a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333zm-2 9.333v1.333h10.666v-4l-2-2-4 4-2-2L1.667 11z', fillRule: 'nonzero' })));
};
var LoadingIndicatorIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 20 : _b;
    var id = React.useMemo(function () { return nanoid.nanoid(); }, []);
    return (React__default["default"].createElement("div", { className: 'str-chat__loading-indicator' },
        React__default["default"].createElement("svg", { "data-testid": 'loading-indicator', height: size, viewBox: '0 0 30 30', width: size, xmlns: 'http://www.w3.org/2000/svg' },
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "".concat(id, "-linear-gradient"), x1: '50%', x2: '50%', y1: '0%', y2: '100%' },
                    React__default["default"].createElement("stop", { offset: '0%', stopColor: '#FFF', stopOpacity: '0' }),
                    React__default["default"].createElement("stop", { "data-testid": 'stop-color', offset: '100%', stopOpacity: '1' }))),
            React__default["default"].createElement("path", { d: 'M2.518 23.321l1.664-1.11A12.988 12.988 0 0 0 15 28c7.18 0 13-5.82 13-13S22.18 2 15 2V0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-5.206 0-9.792-2.652-12.482-6.679z', fill: "url(#".concat(id, "-linear-gradient)"), fillRule: 'evenodd' }))));
};
// ThemingV2 icon
var UploadIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'attach', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("g", { clipPath: 'url(#clip0_10878_5)' },
        React__default["default"].createElement("path", { d: 'M12.9997 6.99993L10.9997 6.99993L10.9997 10.9999L6.99972 10.9999L6.99972 12.9999L10.9997 12.9999L10.9997 16.9999L12.9997 16.9999L12.9997 12.9999L16.9997 12.9999L16.9997 10.9999L12.9997 10.9999L12.9997 6.99993ZM11.9997 1.99992C6.47972 1.99992 1.99972 6.47993 1.99972 11.9999C1.99972 17.5199 6.47972 21.9999 11.9997 21.9999C17.5197 21.9999 21.9997 17.5199 21.9997 11.9999C21.9997 6.47993 17.5197 1.99992 11.9997 1.99992ZM11.9997 19.9999C7.58972 19.9999 3.99972 16.4099 3.99972 11.9999C3.99972 7.58993 7.58972 3.99993 11.9997 3.99993C16.4097 3.99993 19.9997 7.58993 19.9997 11.9999C19.9997 16.4099 16.4097 19.9999 11.9997 19.9999Z', fill: 'black' })),
    React__default["default"].createElement("defs", null,
        React__default["default"].createElement("clipPath", { id: 'clip0_10878_5' },
            React__default["default"].createElement("rect", { fill: 'white', height: '24', width: '24' }))))); };
var CloseIcon$1 = function () { return (React__default["default"].createElement("svg", { "data-testid": 'close-no-outline', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z', fill: 'black' }))); };
var RetryIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'retry', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M17.6449 6.35C16.1949 4.9 14.2049 4 11.9949 4C7.57488 4 4.00488 7.58 4.00488 12C4.00488 16.42 7.57488 20 11.9949 20C15.7249 20 18.8349 17.45 19.7249 14H17.6449C16.8249 16.33 14.6049 18 11.9949 18C8.68488 18 5.99488 15.31 5.99488 12C5.99488 8.69 8.68488 6 11.9949 6C13.6549 6 15.1349 6.69 16.2149 7.78L12.9949 11H19.9949V4L17.6449 6.35Z', fill: 'black' }))); };
var DownloadIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'download', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z', fill: 'black' }))); };
var SendIconV1 = function () {
    var t = useTranslationContext('SendButton').t;
    return (React__default["default"].createElement("svg", { height: '17', viewBox: '0 0 18 17', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Send')),
        React__default["default"].createElement("path", { d: 'M0 17.015l17.333-8.508L0 0v6.617l12.417 1.89L0 10.397z', fill: '#006cff', fillRule: 'evenodd' })));
};
var SendIconV2 = function () {
    var t = useTranslationContext('SendButton').t;
    return (React__default["default"].createElement("svg", { "data-testid": 'send', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, t('Send')),
        React__default["default"].createElement("path", { d: 'M4.00952 22L24 12L4.00952 2L4 9.77778L18.2857 12L4 14.2222L4.00952 22Z', fill: 'black' })));
};
var SendButton = function (_a) {
    var sendMessage = _a.sendMessage, rest = __rest(_a, ["sendMessage"]);
    var themeVersion = useChatContext('SendButton').themeVersion;
    return (React__default["default"].createElement("button", __assign({ "aria-label": 'Send', className: 'str-chat__send-button', "data-testid": 'send-button', onClick: sendMessage, type: 'button' }, rest), themeVersion === '2' ? React__default["default"].createElement(SendIconV2, null) : React__default["default"].createElement(SendIconV1, null)));
};

/**
 * @deprecated This component has been deprecated in favor of `AttachmentPreviewList` as this component
 * utilises outdated components from the package [`react-file-utils`](https://github.com/GetStream/react-file-utils)
 * which will no longer receive updates for aforementioned components.
 *
 * **Will be removed with the complete transition to the theming V2 (next major release - `v11.0.0`).**
 */
var UploadsPreview = function () {
    var themeVersion = useChatContext('UploadsPreview').themeVersion;
    var _a = useChannelStateContext('UploadsPreview'), _b = _a.maxNumberOfFiles, maxNumberOfFiles = _b === void 0 ? 0 : _b, multipleUploads = _a.multipleUploads;
    var _c = useMessageInputContext('UploadsPreview'), fileOrder = _c.fileOrder, fileUploads = _c.fileUploads, imageOrder = _c.imageOrder, imageUploads = _c.imageUploads, _d = _c.numberOfUploads, numberOfUploads = _d === void 0 ? 0 : _d, removeFile = _c.removeFile, removeImage = _c.removeImage, uploadFile = _c.uploadFile, uploadImage = _c.uploadImage, uploadNewFiles = _c.uploadNewFiles;
    var imagesToPreview = imageOrder
        .map(function (id) { return imageUploads[id]; })
        // filter OG scraped images
        .filter(function (image) { return !image.og_scrape_url; });
    var filesToPreview = fileOrder.map(function (id) { return fileUploads[id]; });
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        imageOrder.length > 0 && (React__default["default"].createElement(reactFileUtils.ImagePreviewer, { disabled: !multipleUploads || numberOfUploads >= maxNumberOfFiles, handleFiles: uploadNewFiles, handleRemove: removeImage, handleRetry: uploadImage, imageUploads: imagesToPreview, multiple: multipleUploads })),
        fileOrder.length > 0 && (React__default["default"].createElement(reactFileUtils.FilePreviewer, { fileIconProps: {
                className: 'str-chat__file-icon',
                version: themeVersion,
            }, handleFiles: uploadNewFiles, handleRemove: removeFile, handleRetry: uploadFile, uploads: filesToPreview }))));
};

var UnMemoizedChatAutoComplete = function (props) {
    var _a = useComponentContext('ChatAutoComplete'), SuggestionItem = _a.AutocompleteSuggestionItem, SuggestionList = _a.AutocompleteSuggestionList;
    var t = useTranslationContext('ChatAutoComplete').t;
    var messageInput = useMessageInputContext('ChatAutoComplete');
    var cooldownRemaining = messageInput.cooldownRemaining, disabled = messageInput.disabled, emojiIndex = messageInput.emojiIndex, innerRef = messageInput.textareaRef;
    var placeholder = props.placeholder || t('Type your message');
    var emojiReplace = props.wordReplace
        ? function (word) { var _a; return (_a = props.wordReplace) === null || _a === void 0 ? void 0 : _a.call(props, word, emojiIndex); }
        : function (word) {
            var found = (emojiIndex === null || emojiIndex === void 0 ? void 0 : emojiIndex.search(word)) || [];
            var emoji = found
                .filter(Boolean)
                .slice(0, 10)
                .find(function (_a) {
                var emoticons = _a.emoticons;
                return !!(emoticons === null || emoticons === void 0 ? void 0 : emoticons.includes(word));
            });
            if (!emoji || !('native' in emoji))
                return null;
            return emoji.native;
        };
    var updateInnerRef = React.useCallback(function (ref) {
        if (innerRef) {
            innerRef.current = ref;
        }
    }, [innerRef]);
    return (React__default["default"].createElement(ReactTextareaAutocomplete, { additionalTextareaProps: messageInput.additionalTextareaProps, "aria-label": cooldownRemaining ? t('Slow Mode ON') : placeholder, className: 'str-chat__textarea__textarea str-chat__message-textarea', closeCommandsList: messageInput.closeCommandsList, closeMentionsList: messageInput.closeMentionsList, containerClassName: 'str-chat__textarea str-chat__message-textarea-react-host', disabled: disabled || !!cooldownRemaining, disableMentions: messageInput.disableMentions, dropdownClassName: 'str-chat__emojisearch', grow: messageInput.grow, handleSubmit: props.handleSubmit || messageInput.handleSubmit, innerRef: updateInnerRef, itemClassName: 'str-chat__emojisearch__item', listClassName: 'str-chat__emojisearch__list', loadingComponent: LoadingIndicator, maxRows: messageInput.maxRows, minChar: 0, onBlur: props.onBlur, onChange: props.onChange || messageInput.handleChange, onFocus: props.onFocus, onPaste: props.onPaste || messageInput.onPaste, placeholder: cooldownRemaining ? t('Slow Mode ON') : placeholder, replaceWord: emojiReplace, rows: props.rows || 1, shouldSubmit: messageInput.shouldSubmit, showCommandsList: messageInput.showCommandsList, showMentionsList: messageInput.showMentionsList, SuggestionItem: SuggestionItem, SuggestionList: SuggestionList, trigger: messageInput.autocompleteTriggers || {}, value: props.value || messageInput.text }));
};
var ChatAutoComplete = React__default["default"].memo(UnMemoizedChatAutoComplete);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var COMMON_MIME_TYPES = new Map([
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    ['aac', 'audio/aac'],
    ['abw', 'application/x-abiword'],
    ['arc', 'application/x-freearc'],
    ['avif', 'image/avif'],
    ['avi', 'video/x-msvideo'],
    ['azw', 'application/vnd.amazon.ebook'],
    ['bin', 'application/octet-stream'],
    ['bmp', 'image/bmp'],
    ['bz', 'application/x-bzip'],
    ['bz2', 'application/x-bzip2'],
    ['cda', 'application/x-cdf'],
    ['csh', 'application/x-csh'],
    ['css', 'text/css'],
    ['csv', 'text/csv'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['epub', 'application/epub+zip'],
    ['gz', 'application/gzip'],
    ['gif', 'image/gif'],
    ['heic', 'image/heic'],
    ['heif', 'image/heif'],
    ['htm', 'text/html'],
    ['html', 'text/html'],
    ['ico', 'image/vnd.microsoft.icon'],
    ['ics', 'text/calendar'],
    ['jar', 'application/java-archive'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['js', 'text/javascript'],
    ['json', 'application/json'],
    ['jsonld', 'application/ld+json'],
    ['mid', 'audio/midi'],
    ['midi', 'audio/midi'],
    ['mjs', 'text/javascript'],
    ['mp3', 'audio/mpeg'],
    ['mp4', 'video/mp4'],
    ['mpeg', 'video/mpeg'],
    ['mpkg', 'application/vnd.apple.installer+xml'],
    ['odp', 'application/vnd.oasis.opendocument.presentation'],
    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
    ['odt', 'application/vnd.oasis.opendocument.text'],
    ['oga', 'audio/ogg'],
    ['ogv', 'video/ogg'],
    ['ogx', 'application/ogg'],
    ['opus', 'audio/opus'],
    ['otf', 'font/otf'],
    ['png', 'image/png'],
    ['pdf', 'application/pdf'],
    ['php', 'application/x-httpd-php'],
    ['ppt', 'application/vnd.ms-powerpoint'],
    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    ['rar', 'application/vnd.rar'],
    ['rtf', 'application/rtf'],
    ['sh', 'application/x-sh'],
    ['svg', 'image/svg+xml'],
    ['swf', 'application/x-shockwave-flash'],
    ['tar', 'application/x-tar'],
    ['tif', 'image/tiff'],
    ['tiff', 'image/tiff'],
    ['ts', 'video/mp2t'],
    ['ttf', 'font/ttf'],
    ['txt', 'text/plain'],
    ['vsd', 'application/vnd.visio'],
    ['wav', 'audio/wav'],
    ['weba', 'audio/webm'],
    ['webm', 'video/webm'],
    ['webp', 'image/webp'],
    ['woff', 'font/woff'],
    ['woff2', 'font/woff2'],
    ['xhtml', 'application/xhtml+xml'],
    ['xls', 'application/vnd.ms-excel'],
    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    ['xml', 'application/xml'],
    ['xul', 'application/vnd.mozilla.xul+xml'],
    ['zip', 'application/zip'],
    ['7z', 'application/x-7z-compressed'],
    // Others
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['msg', 'application/vnd.ms-outlook']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 *
 * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
 * and a list of File objects will be returned.
 *
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];
            }
            else if (isChangeEvt(evt)) {
                return [2 /*return*/, getInputFiles(evt)];
            }
            else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {
                return [2 /*return*/, getFsHandleFiles(evt)];
            }
            return [2 /*return*/, []];
        });
    });
}
function isDataTransfer(value) {
    return isObject(value);
}
function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
}
function isObject(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map(function (file) { return toFileWithPath(file); });
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.map(function (file) { return toFileWithPath(file); })];
            }
        });
    });
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spreadArray(__spreadArray([], __read(acc), false), __read((Array.isArray(files) ? flatten(files) : [files])), false); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject("".concat(item, " is not a File"));
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var es = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};
});

var accepts = unwrapExports(es);

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
}; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 *
 * @param {object} options
 * @param {File[]} options.files
 * @param {string|string[]} [options.accept]
 * @param {number} [options.minSize]
 * @param {number} [options.maxSize]
 * @param {boolean} [options.multiple]
 * @param {number} [options.maxFiles]
 * @param {(f: File) => FileError|FileError[]|null} [options.validator]
 * @returns
 */


function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple,
      maxFiles = _ref.maxFiles,
      validator = _ref.validator;

  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */

function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */

function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
      var _ref3 = _slicedToArray$1(_ref2, 2),
          mimeType = _ref3[0],
          ext = _ref3[1];

      var ok = true;

      if (!isMIMEType(mimeType)) {
        console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
        ok = false;
      }

      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
        ok = false;
      }

      return ok;
    }).reduce(function (agg, _ref4) {
      var _ref5 = _slicedToArray$1(_ref4, 2),
          mimeType = _ref5[0],
          ext = _ref5[1];

      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
    }, {});
    return [{
      accept: acceptForPicker
    }];
  }

  return accept;
}
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */

function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function (a, _ref6) {
      var _ref7 = _slicedToArray$1(_ref6, 2),
          mimeType = _ref7[0],
          ext = _ref7[1];

      return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
    }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
    .filter(function (v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }

  return undefined;
}
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is an abort exception.
 */

function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 * @param {any} v
 * @returns {boolean} True if v is a security error.
 */

function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 *
 * @param {string} v
 */

function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || /\w+\/[-+.\w]+/g.test(v);
}
/**
 * Check if v is a file extension.
 * @param {string} v
 */

function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
/**
 * @typedef {Object.<string, string[]>} AcceptProp
 */

/**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */

/**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */

var _excluded = ["children"],
    _excluded2 = ["open"],
    _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
    _excluded4 = ["refKey", "onChange", "onClick"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, _excluded);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, _excluded2);

  React.useImperativeHandle(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open: open
  })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes__default["default"].func,

  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes__default["default"].objectOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes__default["default"].bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes__default["default"].bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes__default["default"].bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes__default["default"].bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes__default["default"].bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes__default["default"].bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes__default["default"].number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes__default["default"].number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes__default["default"].number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes__default["default"].bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes__default["default"].func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes__default["default"].func,

  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes__default["default"].func,

  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes__default["default"].bool,

  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes__default["default"].bool,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes__default["default"].func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes__default["default"].func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes__default["default"].func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes__default["default"].func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes__default["default"].func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes__default["default"].func,

  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes__default["default"].func,

  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes__default["default"].func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

/**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
 * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
 * to open the file picker instead of using an `<input type="file">` click event.
 * @param {boolean} autoFocus Set to true to auto focus the root element.
 * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 * @param {(error: Error) => void} [props.onError]
 *
 * @returns {DropzoneState & DropzoneMethods}
 */

function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
      accept = _defaultProps$props.accept,
      disabled = _defaultProps$props.disabled,
      getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
      maxSize = _defaultProps$props.maxSize,
      minSize = _defaultProps$props.minSize,
      multiple = _defaultProps$props.multiple,
      maxFiles = _defaultProps$props.maxFiles,
      onDragEnter = _defaultProps$props.onDragEnter,
      onDragLeave = _defaultProps$props.onDragLeave,
      onDragOver = _defaultProps$props.onDragOver,
      onDrop = _defaultProps$props.onDrop,
      onDropAccepted = _defaultProps$props.onDropAccepted,
      onDropRejected = _defaultProps$props.onDropRejected,
      onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
      onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
      useFsAccessApi = _defaultProps$props.useFsAccessApi,
      autoFocus = _defaultProps$props.autoFocus,
      preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
      noClick = _defaultProps$props.noClick,
      noKeyboard = _defaultProps$props.noKeyboard,
      noDrag = _defaultProps$props.noDrag,
      noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
      onError = _defaultProps$props.onError,
      validator = _defaultProps$props.validator;

  var acceptAttr = React.useMemo(function () {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = React.useMemo(function () {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = React.useMemo(function () {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = React.useMemo(function () {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */

  var rootRef = React.useRef(null);
  var inputRef = React.useRef(null);

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = React.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };

  React.useEffect(function () {
    window.addEventListener("focus", onWindowFocus, false);
    return function () {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = React.useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  React.useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

  React.useEffect(function () {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }

    return function () {};
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = React.useCallback(function (e) {
    if (onError) {
      onError(e);
    } else {
      // Let the user know something's gone wrong if they haven't provided the onError cb.
      console.error(e);
    }
  }, [onError]);
  var onDragEnterCb = React.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files: files,
          accept: acceptAttr,
          minSize: minSize,
          maxSize: maxSize,
          multiple: multiple,
          maxFiles: maxFiles,
          validator: validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function (e) {
        return onErrCb(e);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = React.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);

    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (hasFiles && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = React.useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = React.useCallback(function (files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function (file) {
      var _fileAccepted = fileAccepted(file, acceptAttr),
          _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
          accepted = _fileAccepted2[0],
          acceptError = _fileAccepted2[1];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
          sizeMatch = _fileMatchSize2[0],
          sizeError = _fileMatchSize2[1];

      var customErrors = validator ? validator(file) : null;

      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];

        if (customErrors) {
          errors = errors.concat(customErrors);
        }

        fileRejections.push({
          file: file,
          errors: errors.filter(function (e) {
            return e;
          })
        });
      }
    });

    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      // Reject everything and empty accepted files
      acceptedFiles.forEach(function (file) {
        fileRejections.push({
          file: file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }

    dispatch({
      acceptedFiles: acceptedFiles,
      fileRejections: fileRejections,
      type: "setFiles"
    });

    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }

    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }

    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = React.useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        setFiles(files, event);
      }).catch(function (e) {
        return onErrCb(e);
      });
    }

    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

  var openFileDialog = React.useCallback(function () {
    // No point to use FS access APIs if context is not secure
    // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

      var opts = {
        multiple: multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function (handles) {
        return getFilesFromEvent(handles);
      }).then(function (files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function (e) {
        // AbortError means the user canceled
        if (isAbort(e)) {
          onFileDialogCancelCb(e);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e)) {
          fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
          // Try using the input

          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e);
        }
      });
      return;
    }

    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = React.useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]); // Update focus state for the dropzone

  var onFocusCb = React.useCallback(function () {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = React.useCallback(function () {
    dispatch({
      type: "blur"
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = React.useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = React.useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
          role = _ref2.role,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, _excluded3);

      return _objectSpread(_objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = React.useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = React.useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, _excluded4);

      var inputProps = _defineProperty({
        accept: acceptAttr,
        multiple: multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });

    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });

    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });

    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });

    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });

    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case "reset":
      return _objectSpread({}, initialState);

    default:
      return state;
  }
}

function noop() {}

var QuotedMessagePreviewHeader = function () {
    var setQuotedMessage = useChannelActionContext('QuotedMessagePreview').setQuotedMessage;
    var t = useTranslationContext('QuotedMessagePreview').t;
    return (React__default["default"].createElement("div", { className: 'quoted-message-preview-header str-chat__quoted-message-preview-header' },
        React__default["default"].createElement("div", { className: 'str-chat__quoted-message-reply-to-message' }, t('Reply to Message')),
        React__default["default"].createElement("button", { "aria-label": 'Cancel Reply', className: 'str-chat__square-button str-chat__quoted-message-remove', onClick: function () { return setQuotedMessage(undefined); } },
            React__default["default"].createElement(CloseIcon$1, null))));
};
var QuotedMessagePreview = function (_a) {
    var _b;
    var quotedMessage = _a.quotedMessage;
    var _c = useComponentContext('QuotedMessagePreview'), Attachment = _c.Attachment, _d = _c.Avatar, Avatar$1 = _d === void 0 ? Avatar : _d;
    var userLanguage = useTranslationContext('QuotedMessagePreview').userLanguage;
    var themeVersion = useChatContext('QuotedMessagePreview').themeVersion;
    var quotedMessageText = ((_b = quotedMessage.i18n) === null || _b === void 0 ? void 0 : _b["".concat(userLanguage, "_text")]) ||
        quotedMessage.text;
    var quotedMessageAttachment = React.useMemo(function () {
        var _a;
        var attachment = ((_a = quotedMessage.attachments) !== null && _a !== void 0 ? _a : [])[0];
        return attachment ? [attachment] : [];
    }, [quotedMessage.attachments]);
    if (!quotedMessageText && !quotedMessageAttachment)
        return null;
    // TODO: remove div.quoted-message-preview-content when deprecating V1 theming
    // move str-chat__quoted-message-preview to main div
    return (React__default["default"].createElement("div", { className: 'quoted-message-preview', "data-testid": 'quoted-message-preview' },
        themeVersion === '1' && React__default["default"].createElement(QuotedMessagePreviewHeader, null),
        React__default["default"].createElement("div", { className: 'quoted-message-preview-content str-chat__quoted-message-preview' },
            quotedMessage.user && (React__default["default"].createElement(Avatar$1, { image: quotedMessage.user.image, name: quotedMessage.user.name || quotedMessage.user.id, size: 20, user: quotedMessage.user })),
            React__default["default"].createElement("div", { className: 'quoted-message-preview-content-inner str-chat__quoted-message-bubble' },
                !!quotedMessageAttachment.length && React__default["default"].createElement(Attachment, { attachments: quotedMessageAttachment }),
                React__default["default"].createElement("div", { className: 'str-chat__quoted-message-text', "data-testid": 'quoted-message-text' },
                    themeVersion === '2' && React__default["default"].createElement("p", null, quotedMessageText),
                    themeVersion === '1' && React__default["default"].createElement(React__default["default"].Fragment, null, quotedMessageText))))));
};

var useFileState = function (file) {
    return React.useMemo(function () { return ({
        failed: file.state === 'failed',
        finished: file.state === 'finished',
        uploading: file.state === 'uploading',
    }); }, [file.state]);
};

var AttachmentPreviewList = function () {
    var _a = useMessageInputContext('AttachmentPreviewList'), fileOrder = _a.fileOrder, imageOrder = _a.imageOrder;
    return (React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-list' },
        React__default["default"].createElement("div", { className: 'str-chat__attachment-list-scroll-container', "data-testid": 'attachment-list-scroll-container' },
            imageOrder.map(function (id) { return (React__default["default"].createElement(ImagePreviewItem, { id: id, key: id })); }),
            fileOrder.map(function (id) { return (React__default["default"].createElement(FilePreviewItem, { id: id, key: id })); }))));
};
var ImagePreviewItem = function (_a) {
    var _b;
    var id = _a.id;
    var _c = useMessageInputContext('ImagePreviewItem'), imageUploads = _c.imageUploads, removeImage = _c.removeImage, uploadImage = _c.uploadImage;
    var handleRemove = React.useCallback(function (e) {
        e.stopPropagation();
        removeImage(id);
    }, [removeImage, id]);
    var handleRetry = React.useCallback(function () { return uploadImage(id); }, [uploadImage, id]);
    var image = imageUploads[id];
    var state = useFileState(image);
    // do not display scraped attachments
    if (!image || image.og_scrape_url)
        return null;
    return (React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-image', "data-testid": 'attachment-preview-image' },
        React__default["default"].createElement("button", { className: 'str-chat__attachment-preview-delete', "data-testid": 'image-preview-item-delete-button', disabled: state.uploading, onClick: handleRemove },
            React__default["default"].createElement(CloseIcon$1, null)),
        state.failed && (React__default["default"].createElement("button", { className: 'str-chat__attachment-preview-error str-chat__attachment-preview-error-image', "data-testid": 'image-preview-item-retry-button', onClick: handleRetry },
            React__default["default"].createElement(RetryIcon, null))),
        state.uploading && (React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-image-loading' },
            React__default["default"].createElement(LoadingIndicatorIcon, { size: 17 }))),
        (image.previewUri || image.url) && (React__default["default"].createElement("img", { alt: image.file.name, className: 'str-chat__attachment-preview-thumbnail', src: (_b = image.previewUri) !== null && _b !== void 0 ? _b : image.url }))));
};
var FilePreviewItem = function (_a) {
    var id = _a.id;
    var _b = useMessageInputContext('FilePreviewItem'), fileUploads = _b.fileUploads, removeFile = _b.removeFile, uploadFile = _b.uploadFile;
    var handleRemove = React.useCallback(function (e) {
        e.stopPropagation();
        removeFile(id);
    }, [removeFile, id]);
    var handleRetry = React.useCallback(function () { return uploadFile(id); }, [uploadFile, id]);
    var file = fileUploads[id];
    var state = useFileState(file);
    if (!file)
        return null;
    return (React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-file', "data-testid": 'attachment-preview-file' },
        React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-file-icon' },
            React__default["default"].createElement(reactFileUtils.FileIcon, { filename: file.file.name, mimeType: file.file.type, version: '2' })),
        React__default["default"].createElement("button", { className: 'str-chat__attachment-preview-delete', "data-testid": 'file-preview-item-delete-button', disabled: state.uploading, onClick: handleRemove },
            React__default["default"].createElement(CloseIcon$1, null)),
        state.failed && (React__default["default"].createElement("button", { className: 'str-chat__attachment-preview-error str-chat__attachment-preview-error-file', "data-testid": 'file-preview-item-retry-button', onClick: handleRetry },
            React__default["default"].createElement(RetryIcon, null))),
        React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-file-end' },
            React__default["default"].createElement("div", { className: 'str-chat__attachment-preview-file-name' }, file.file.name),
            state.finished && (React__default["default"].createElement("a", { className: 'str-chat__attachment-preview-file-download', download: true, href: file.url, rel: 'noreferrer', target: '_blank' },
                React__default["default"].createElement(DownloadIcon, null))),
            state.uploading && React__default["default"].createElement(LoadingIndicatorIcon, { size: 17 }))));
};

var CooldownTimer = function (_a) {
    var cooldownInterval = _a.cooldownInterval, setCooldownRemaining = _a.setCooldownRemaining;
    var _b = React.useState(cooldownInterval), seconds = _b[0], setSeconds = _b[1];
    React.useEffect(function () {
        var countdownInterval = setInterval(function () {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            else {
                setCooldownRemaining(0);
            }
        }, 1000);
        return function () { return clearInterval(countdownInterval); };
    });
    return (React__default["default"].createElement("div", { className: 'str-chat__message-input-cooldown', "data-testid": 'cooldown-timer' }, seconds === 0 ? null : seconds));
};

var MessageInputFlat = function () {
    var quotedMessage = useChannelStateContext('MessageInputFlat').quotedMessage;
    var setQuotedMessage = useChannelActionContext('MessageInputFlat').setQuotedMessage;
    var _a = useChatContext('MessageInputFlat'), channel = _a.channel, themeVersion = _a.themeVersion;
    React.useEffect(function () {
        var handleQuotedMessageUpdate = function (e) {
            var _a;
            if (((_a = e.message) === null || _a === void 0 ? void 0 : _a.id) !== (quotedMessage === null || quotedMessage === void 0 ? void 0 : quotedMessage.id))
                return;
            if (e.type === 'message.deleted') {
                setQuotedMessage(undefined);
                return;
            }
            setQuotedMessage(e.message);
        };
        channel === null || channel === void 0 ? void 0 : channel.on('message.deleted', handleQuotedMessageUpdate);
        channel === null || channel === void 0 ? void 0 : channel.on('message.updated', handleQuotedMessageUpdate);
        return function () {
            channel === null || channel === void 0 ? void 0 : channel.off('message.deleted', handleQuotedMessageUpdate);
            channel === null || channel === void 0 ? void 0 : channel.off('message.updated', handleQuotedMessageUpdate);
        };
    }, [channel, quotedMessage]);
    return themeVersion === '2' ? (React__default["default"].createElement(MessageInputV2, null)) : (React__default["default"].createElement(MessageInputV1, null));
};
var MessageInputV1 = function () {
    var _a = useChannelStateContext('MessageInputFlat'), acceptedFiles = _a.acceptedFiles, multipleUploads = _a.multipleUploads, quotedMessage = _a.quotedMessage;
    var t = useTranslationContext('MessageInputFlat').t;
    var _b = useMessageInputContext('MessageInputFlat'), closeEmojiPicker = _b.closeEmojiPicker, cooldownRemaining = _b.cooldownRemaining, emojiPickerIsOpen = _b.emojiPickerIsOpen, handleSubmit = _b.handleSubmit, isUploadEnabled = _b.isUploadEnabled, maxFilesLeft = _b.maxFilesLeft, numberOfUploads = _b.numberOfUploads, openEmojiPicker = _b.openEmojiPicker, setCooldownRemaining = _b.setCooldownRemaining, uploadNewFiles = _b.uploadNewFiles;
    var _c = useComponentContext('MessageInputFlat'), _d = _c.CooldownTimer, CooldownTimer$1 = _d === void 0 ? CooldownTimer : _d, _e = _c.EmojiIcon, EmojiIcon = _e === void 0 ? EmojiIconLarge : _e, _f = _c.FileUploadIcon, FileUploadIcon = _f === void 0 ? FileUploadIconFlat : _f, _g = _c.QuotedMessagePreview, QuotedMessagePreview$1 = _g === void 0 ? QuotedMessagePreview : _g, _h = _c.SendButton, SendButton$1 = _h === void 0 ? SendButton : _h;
    return (React__default["default"].createElement("div", { className: clsx('str-chat__input-flat', 'str-chat__message-input', {
            'str-chat__input-flat--send-button-active': !!SendButton$1,
            'str-chat__input-flat-has-attachments': numberOfUploads,
            'str-chat__input-flat-quoted': quotedMessage && !quotedMessage.parent_id,
        }) },
        React__default["default"].createElement(reactFileUtils.ImageDropzone, { accept: acceptedFiles, disabled: !isUploadEnabled || maxFilesLeft === 0 || !!cooldownRemaining, handleFiles: uploadNewFiles, maxNumberOfFiles: maxFilesLeft, multiple: multipleUploads },
            quotedMessage && !quotedMessage.parent_id && (React__default["default"].createElement(QuotedMessagePreview$1, { quotedMessage: quotedMessage })),
            React__default["default"].createElement("div", { className: 'str-chat__input-flat-wrapper' },
                isUploadEnabled && React__default["default"].createElement(UploadsPreview, null),
                React__default["default"].createElement("div", { className: 'str-chat__input-flat--textarea-wrapper' },
                    React__default["default"].createElement("div", { className: 'str-chat__emojiselect-wrapper' },
                        React__default["default"].createElement(Tooltip, null, emojiPickerIsOpen
                            ? t('Close emoji picker')
                            : t('Open emoji picker')),
                        React__default["default"].createElement("button", { "aria-label": 'Emoji picker', className: 'str-chat__input-flat-emojiselect', onClick: emojiPickerIsOpen ? closeEmojiPicker : openEmojiPicker }, cooldownRemaining ? (React__default["default"].createElement("div", { className: 'str-chat__input-flat-cooldown' },
                            React__default["default"].createElement(CooldownTimer$1, { cooldownInterval: cooldownRemaining, setCooldownRemaining: setCooldownRemaining }))) : (React__default["default"].createElement(EmojiIcon, null)))),
                    React__default["default"].createElement(EmojiPicker, null),
                    React__default["default"].createElement(ChatAutoComplete, null),
                    isUploadEnabled && !cooldownRemaining && (React__default["default"].createElement("div", { className: 'str-chat__fileupload-wrapper', "data-testid": 'fileinput' },
                        React__default["default"].createElement(Tooltip, null, maxFilesLeft
                            ? t('Attach files')
                            : t("You've reached the maximum number of files")),
                        React__default["default"].createElement(reactFileUtils.FileUploadButton, { accepts: acceptedFiles, disabled: maxFilesLeft === 0, handleFiles: uploadNewFiles, multiple: multipleUploads },
                            React__default["default"].createElement("span", { className: 'str-chat__input-flat-fileupload' },
                                React__default["default"].createElement(FileUploadIcon, null)))))),
                !cooldownRemaining && React__default["default"].createElement(SendButton$1, { sendMessage: handleSubmit })))));
};
var MessageInputV2 = function () {
    var _a = useChannelStateContext('MessageInputV2'), _b = _a.acceptedFiles, acceptedFiles = _b === void 0 ? [] : _b, multipleUploads = _a.multipleUploads, quotedMessage = _a.quotedMessage;
    var t = useTranslationContext('MessageInputV2').t;
    var _c = useMessageInputContext('MessageInputV2'), closeEmojiPicker = _c.closeEmojiPicker, cooldownRemaining = _c.cooldownRemaining, emojiPickerIsOpen = _c.emojiPickerIsOpen, handleSubmit = _c.handleSubmit, isUploadEnabled = _c.isUploadEnabled, maxFilesLeft = _c.maxFilesLeft, message = _c.message, numberOfUploads = _c.numberOfUploads, openEmojiPicker = _c.openEmojiPicker, setCooldownRemaining = _c.setCooldownRemaining, text = _c.text, uploadNewFiles = _c.uploadNewFiles;
    var _d = useComponentContext('MessageInputV2'), _e = _d.CooldownTimer, CooldownTimer$1 = _e === void 0 ? CooldownTimer : _e, _f = _d.EmojiIcon, EmojiIcon = _f === void 0 ? EmojiPickerIcon : _f, _g = _d.FileUploadIcon, FileUploadIcon = _g === void 0 ? UploadIcon : _g, _h = _d.QuotedMessagePreview, QuotedMessagePreview$1 = _h === void 0 ? QuotedMessagePreview : _h, _j = _d.SendButton, SendButton$1 = _j === void 0 ? SendButton : _j;
    var _k = React.useState(null), referenceElement = _k[0], setReferenceElement = _k[1];
    var _l = React.useState(null), popperElement = _l[0], setPopperElement = _l[1];
    var _m = usePopper(referenceElement, popperElement, {
        placement: 'top-end',
    }), attributes = _m.attributes, styles = _m.styles;
    var id = React.useMemo(function () { return nanoid.nanoid(); }, []);
    var accept = React.useMemo(function () {
        return acceptedFiles.reduce(function (mediaTypeMap, mediaType) {
            var _a;
            (_a = mediaTypeMap[mediaType]) !== null && _a !== void 0 ? _a : (mediaTypeMap[mediaType] = []);
            return mediaTypeMap;
        }, {});
    }, [acceptedFiles]);
    var _o = useDropzone({
        accept: accept,
        disabled: !isUploadEnabled || maxFilesLeft === 0,
        multiple: multipleUploads,
        noClick: true,
        onDrop: uploadNewFiles,
    }), getRootProps = _o.getRootProps, isDragActive = _o.isDragActive, isDragReject = _o.isDragReject;
    // TODO: "!message" condition is a temporary fix for shared
    // state when editing a message (fix shared state issue)
    var displayQuotedMessage = !message && quotedMessage && !quotedMessage.parent_id;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", __assign({}, getRootProps({ className: 'str-chat__message-input' })),
            isDragActive && (React__default["default"].createElement("div", { className: clsx('str-chat__dropzone-container', {
                    'str-chat__dropzone-container--not-accepted': isDragReject,
                }) },
                !isDragReject && React__default["default"].createElement("p", null, t('Drag your files here')),
                isDragReject && React__default["default"].createElement("p", null, t('Some of the files will not be accepted')))),
            displayQuotedMessage && React__default["default"].createElement(QuotedMessagePreviewHeader, null),
            React__default["default"].createElement("div", { className: 'str-chat__message-input-inner' },
                React__default["default"].createElement("div", { className: 'str-chat__file-input-container', "data-testid": 'file-upload-button' },
                    React__default["default"].createElement(reactFileUtils.UploadButton, { accept: acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.join(','), "aria-label": 'File upload', className: 'str-chat__file-input', "data-testid": 'file-input', disabled: !isUploadEnabled || maxFilesLeft === 0, id: id, multiple: multipleUploads, onFileChange: uploadNewFiles }),
                    React__default["default"].createElement("label", { className: 'str-chat__file-input-label', htmlFor: id },
                        React__default["default"].createElement(FileUploadIcon, null))),
                React__default["default"].createElement("div", { className: 'str-chat__message-textarea-container' },
                    displayQuotedMessage && React__default["default"].createElement(QuotedMessagePreview$1, { quotedMessage: quotedMessage }),
                    isUploadEnabled && !!numberOfUploads && React__default["default"].createElement(AttachmentPreviewList, null),
                    React__default["default"].createElement("div", { className: 'str-chat__message-textarea-with-emoji-picker' },
                        React__default["default"].createElement(ChatAutoComplete, null),
                        React__default["default"].createElement("div", { className: 'str-chat__message-textarea-emoji-picker' },
                            emojiPickerIsOpen && (React__default["default"].createElement("div", __assign({ className: 'str-chat__message-textarea-emoji-picker-container', style: styles.popper }, attributes.popper, { ref: setPopperElement }),
                                React__default["default"].createElement(EmojiPicker, null))),
                            React__default["default"].createElement("button", { "aria-label": 'Emoji picker', className: 'str-chat__emoji-picker-button', onClick: emojiPickerIsOpen ? closeEmojiPicker : openEmojiPicker, ref: setReferenceElement, type: 'button' },
                                React__default["default"].createElement(EmojiIcon, null))))),
                !message && (React__default["default"].createElement(React__default["default"].Fragment, null, cooldownRemaining ? (React__default["default"].createElement(CooldownTimer$1, { cooldownInterval: cooldownRemaining, setCooldownRemaining: setCooldownRemaining })) : (React__default["default"].createElement(SendButton$1, { disabled: !numberOfUploads && !text.length, sendMessage: handleSubmit }))))))));
};

var EditMessageForm = function () {
    var _a = useChannelStateContext('EditMessageForm'), acceptedFiles = _a.acceptedFiles, multipleUploads = _a.multipleUploads;
    var t = useTranslationContext('EditMessageForm').t;
    var _b = useMessageInputContext('EditMessageForm'), clearEditingState = _b.clearEditingState, closeEmojiPicker = _b.closeEmojiPicker, emojiPickerIsOpen = _b.emojiPickerIsOpen, handleSubmit = _b.handleSubmit, isUploadEnabled = _b.isUploadEnabled, maxFilesLeft = _b.maxFilesLeft, openEmojiPicker = _b.openEmojiPicker, uploadNewFiles = _b.uploadNewFiles;
    var _c = useComponentContext('EditMessageForm'), _d = _c.EmojiIcon, EmojiIcon = _d === void 0 ? EmojiIconSmall : _d, _e = _c.FileUploadIcon, FileUploadIcon$1 = _e === void 0 ? FileUploadIcon : _e;
    var themeVersion = useChatContext('EditMessageForm').themeVersion;
    React.useEffect(function () {
        var onKeyDown = function (event) {
            if (event.key === 'Escape')
                clearEditingState === null || clearEditingState === void 0 ? void 0 : clearEditingState();
        };
        document.addEventListener('keydown', onKeyDown);
        return function () { return document.removeEventListener('keydown', onKeyDown); };
    }, [clearEditingState]);
    if (themeVersion === '2')
        return (React__default["default"].createElement("form", { className: 'str-chat__edit-message-form', onSubmit: handleSubmit },
            React__default["default"].createElement(MessageInputFlat, null),
            React__default["default"].createElement("div", { className: 'str-chat__edit-message-form-options' },
                React__default["default"].createElement("button", { className: 'str-chat__edit-message-cancel', "data-testid": 'cancel-button', onClick: clearEditingState }, t('Cancel')),
                React__default["default"].createElement("button", { className: 'str-chat__edit-message-send', "data-testid": 'send-button', type: 'submit' }, t('Send')))));
    return (React__default["default"].createElement("div", { className: 'str-chat__edit-message-form' },
        React__default["default"].createElement(reactFileUtils.ImageDropzone, { accept: acceptedFiles, disabled: !isUploadEnabled || maxFilesLeft === 0, handleFiles: uploadNewFiles, maxNumberOfFiles: maxFilesLeft, multiple: multipleUploads },
            React__default["default"].createElement("form", { onSubmit: handleSubmit },
                isUploadEnabled && React__default["default"].createElement(UploadsPreview, null),
                React__default["default"].createElement(EmojiPicker, { small: true }),
                React__default["default"].createElement(ChatAutoComplete, null),
                React__default["default"].createElement("div", { className: 'str-chat__message-team-form-footer' },
                    React__default["default"].createElement("div", { className: 'str-chat__edit-message-form-options' },
                        React__default["default"].createElement("button", { "aria-label": 'Open Emoji Picker', className: 'str-chat__input-emojiselect', onClick: emojiPickerIsOpen ? closeEmojiPicker : openEmojiPicker },
                            React__default["default"].createElement(EmojiIcon, null)),
                        isUploadEnabled && (React__default["default"].createElement("div", { className: 'str-chat__fileupload-wrapper', "data-testid": 'fileinput' },
                            React__default["default"].createElement(Tooltip, null, maxFilesLeft
                                ? t('Attach files')
                                : t("You've reached the maximum number of files")),
                            React__default["default"].createElement(reactFileUtils.FileUploadButton, { accepts: acceptedFiles, disabled: maxFilesLeft === 0, handleFiles: uploadNewFiles, multiple: multipleUploads },
                                React__default["default"].createElement("span", { className: 'str-chat__input-fileupload' },
                                    React__default["default"].createElement(FileUploadIcon$1, null)))))),
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement("button", { className: 'str-chat__edit-message-cancel', onClick: clearEditingState }, t('Cancel')),
                        React__default["default"].createElement("button", { className: 'str-chat__edit-message-send', type: 'submit' }, t('Send'))))))));
};

var useCooldownTimer = function () {
    var latestMessageDatesByChannels = useChatContext('useCooldownTimer').latestMessageDatesByChannels;
    var channel = useChannelStateContext('useCooldownTimer').channel;
    var _a = (channel.data ||
        {}), cooldownInterval = _a.cooldown, own_capabilities = _a.own_capabilities;
    var _b = React.useState(), cooldownRemaining = _b[0], setCooldownRemaining = _b[1];
    var skipCooldown = !(own_capabilities === null || own_capabilities === void 0 ? void 0 : own_capabilities.includes('slow-mode'));
    React.useEffect(function () {
        var latestMessageDate = latestMessageDatesByChannels[channel.cid];
        if (!cooldownInterval || !latestMessageDate) {
            return;
        }
        var remainingCooldown = Math.round(cooldownInterval - (new Date().getTime() - latestMessageDate.getTime()) / 1000);
        if (remainingCooldown > 0 && !skipCooldown) {
            setCooldownRemaining(remainingCooldown);
        }
    }, [channel.id, cooldownInterval, latestMessageDatesByChannels[channel.cid]]);
    return {
        cooldownInterval: cooldownInterval || 0,
        cooldownRemaining: cooldownRemaining,
        setCooldownRemaining: setCooldownRemaining,
    };
};

var useEmojiIndex = function () {
    var _a = useEmojiContext('useEmojiIndex'), emojiConfig = _a.emojiConfig, EmojiIndex = _a.EmojiIndex;
    var emojiData = (emojiConfig || {}).emojiData;
    var emojiIndex = React.useMemo(function () {
        if (EmojiIndex) {
            // @ts-expect-error type here isn't registering the constructor type
            return new EmojiIndex(emojiData);
        }
    }, [emojiData, EmojiIndex]);
    return emojiIndex;
};

var useImageUploads = function (props, state, dispatch) {
    var doImageUploadRequest = props.doImageUploadRequest, errorHandler = props.errorHandler;
    var imageUploads = state.imageUploads;
    var channel = useChannelStateContext('useImageUploads').channel;
    var getAppSettings = useChatContext('useImageUploads').getAppSettings;
    var addNotification = useChannelActionContext('useImageUploads').addNotification;
    var t = useTranslationContext('useImageUploads').t;
    var removeImage = React.useCallback(function (id) {
        dispatch({ id: id, type: 'removeImageUpload' });
        // TODO: cancel upload if still uploading
    }, []);
    var uploadImage = React.useCallback(function (id) { return __awaiter$1(void 0, void 0, void 0, function () {
        var img, file, canUpload, response, error_1, errorMessage, alreadyRemoved;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    img = imageUploads[id];
                    if (!img)
                        return [2 /*return*/];
                    file = img.file;
                    if (img.state !== 'uploading') {
                        dispatch({ id: id, state: 'uploading', type: 'setImageUpload' });
                    }
                    return [4 /*yield*/, checkUploadPermissions({
                            addNotification: addNotification,
                            file: file,
                            getAppSettings: getAppSettings,
                            t: t,
                            uploadType: 'image',
                        })];
                case 1:
                    canUpload = _b.sent();
                    if (!canUpload)
                        return [2 /*return*/, removeImage(id)];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, , 8]);
                    if (!doImageUploadRequest) return [3 /*break*/, 4];
                    return [4 /*yield*/, doImageUploadRequest(file, channel)];
                case 3:
                    response = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, channel.sendImage(file)];
                case 5:
                    response = _b.sent();
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    errorMessage = typeof error_1.message === 'string'
                        ? error_1.message
                        : t('Error uploading image');
                    addNotification(errorMessage, 'error');
                    alreadyRemoved = false;
                    if (!imageUploads[id]) {
                        alreadyRemoved = true;
                    }
                    else {
                        dispatch({ id: id, state: 'failed', type: 'setImageUpload' });
                    }
                    if (!alreadyRemoved && errorHandler) {
                        // TODO: verify if the parameters passed to the error handler actually make sense
                        errorHandler(error_1, 'upload-image', __assign(__assign({}, file), { id: id }));
                    }
                    return [2 /*return*/];
                case 8:
                    // If doImageUploadRequest returns any falsy value, then don't create the upload preview.
                    // This is for the case if someone wants to handle failure on app level.
                    if (!response) {
                        removeImage(id);
                        return [2 /*return*/];
                    }
                    if (img.previewUri)
                        (_a = URL.revokeObjectURL) === null || _a === void 0 ? void 0 : _a.call(URL, img.previewUri);
                    dispatch({
                        id: id,
                        previewUri: undefined,
                        state: 'finished',
                        type: 'setImageUpload',
                        url: response.file,
                    });
                    return [2 /*return*/];
            }
        });
    }); }, [imageUploads, channel, doImageUploadRequest, errorHandler, removeImage]);
    React.useEffect(function () {
        var upload = Object.values(imageUploads).find(function (imageUpload) { return imageUpload.state === 'uploading' && imageUpload.file; });
        if (!upload)
            return;
        uploadImage(upload.id);
    }, [imageUploads, uploadImage]);
    return {
        removeImage: removeImage,
        uploadImage: uploadImage,
    };
};

var useFileUploads = function (props, state, dispatch) {
    var doFileUploadRequest = props.doFileUploadRequest, errorHandler = props.errorHandler;
    var fileUploads = state.fileUploads;
    var channel = useChannelStateContext('useFileUploads').channel;
    var addNotification = useChannelActionContext('useFileUploads').addNotification;
    var getAppSettings = useChatContext('useFileUploads').getAppSettings;
    var t = useTranslationContext('useFileUploads').t;
    var uploadFile = React.useCallback(function (id) {
        dispatch({ id: id, state: 'uploading', type: 'setFileUpload' });
    }, []);
    var removeFile = React.useCallback(function (id) {
        // TODO: cancel upload if still uploading
        dispatch({ id: id, type: 'removeFileUpload' });
    }, []);
    React.useEffect(function () {
        (function () { return __awaiter$1(void 0, void 0, void 0, function () {
            var upload, file, id, canUpload, response, error_1, errorMessage, alreadyRemoved;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        upload = Object.values(fileUploads).find(function (fileUpload) { return fileUpload.state === 'uploading' && fileUpload.file; });
                        if (!upload)
                            return [2 /*return*/];
                        file = upload.file, id = upload.id;
                        return [4 /*yield*/, checkUploadPermissions({
                                addNotification: addNotification,
                                file: file,
                                getAppSettings: getAppSettings,
                                t: t,
                                uploadType: 'file',
                            })];
                    case 1:
                        canUpload = _a.sent();
                        if (!canUpload)
                            return [2 /*return*/, removeFile(id)];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        if (!doFileUploadRequest) return [3 /*break*/, 4];
                        return [4 /*yield*/, doFileUploadRequest(file, channel)];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, channel.sendFile(file)];
                    case 5:
                        response = _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        errorMessage = typeof error_1.message === 'string'
                            ? error_1.message
                            : t('Error uploading file');
                        addNotification(errorMessage, 'error');
                        alreadyRemoved = false;
                        if (!fileUploads[id]) {
                            alreadyRemoved = true;
                        }
                        else {
                            dispatch({ id: id, state: 'failed', type: 'setFileUpload' });
                        }
                        if (!alreadyRemoved && errorHandler) {
                            // TODO: verify if the parameters passed to the error handler actually make sense
                            errorHandler(error_1, 'upload-file', file);
                        }
                        return [2 /*return*/];
                    case 8:
                        // If doImageUploadRequest returns any falsy value, then don't create the upload preview.
                        // This is for the case if someone wants to handle failure on app level.
                        if (!response) {
                            removeFile(id);
                            return [2 /*return*/];
                        }
                        dispatch({
                            id: id,
                            state: 'finished',
                            type: 'setFileUpload',
                            url: response.file,
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [fileUploads, channel, doFileUploadRequest, errorHandler, removeFile]);
    return {
        removeFile: removeFile,
        uploadFile: uploadFile,
    };
};

var apiMaxNumberOfFiles = 10;
var useAttachments = function (props, state, dispatch, textareaRef) {
    var noFiles = props.noFiles;
    var fileUploads = state.fileUploads, imageUploads = state.imageUploads;
    var _a = useChannelStateContext('useAttachments'), maxNumberOfFiles = _a.maxNumberOfFiles, multipleUploads = _a.multipleUploads;
    var _b = useFileUploads(props, state, dispatch), removeFile = _b.removeFile, uploadFile = _b.uploadFile;
    var _c = useImageUploads(props, state, dispatch), removeImage = _c.removeImage, uploadImage = _c.uploadImage;
    // Number of files that the user can still add. Should never be more than the amount allowed by the API.
    // If multipleUploads is false, we only want to allow a single upload.
    var maxFilesAllowed = !multipleUploads ? 1 : maxNumberOfFiles || apiMaxNumberOfFiles;
    // OG attachments should not be counted towards "numberOfImages"
    var numberOfImages = Object.values(imageUploads).filter(function (_a) {
        var og_scrape_url = _a.og_scrape_url, state = _a.state;
        return state !== 'failed' && !og_scrape_url;
    }).length;
    var numberOfFiles = Object.values(fileUploads).filter(function (_a) {
        var state = _a.state;
        return state !== 'failed';
    }).length;
    var numberOfUploads = numberOfImages + numberOfFiles;
    var maxFilesLeft = maxFilesAllowed - numberOfUploads;
    var uploadNewFiles = React.useCallback(function (files) {
        var _a;
        Array.from(files)
            .slice(0, maxFilesLeft)
            .forEach(function (file) {
            var _a;
            var id = nanoid.nanoid();
            if (file.type.startsWith('image/') &&
                !file.type.endsWith('.photoshop') // photoshop files begin with 'image/'
            ) {
                dispatch({
                    file: file,
                    id: id,
                    previewUri: (_a = URL.createObjectURL) === null || _a === void 0 ? void 0 : _a.call(URL, file),
                    state: 'uploading',
                    type: 'setImageUpload',
                });
            }
            else if (file instanceof File && !noFiles) {
                dispatch({ file: file, id: id, state: 'uploading', type: 'setFileUpload' });
            }
        });
        (_a = textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [maxFilesLeft, noFiles]);
    return {
        maxFilesLeft: maxFilesLeft,
        numberOfUploads: numberOfUploads,
        removeFile: removeFile,
        removeImage: removeImage,
        uploadFile: uploadFile,
        uploadImage: uploadImage,
        uploadNewFiles: uploadNewFiles,
    };
};

var useMessageInputText = function (props, state, dispatch) {
    var channel = useChannelStateContext('useMessageInputText').channel;
    var additionalTextareaProps = props.additionalTextareaProps, focus = props.focus, parent = props.parent, _a = props.publishTypingEvent, publishTypingEvent = _a === void 0 ? true : _a;
    var text = state.text;
    var textareaRef = React.useRef();
    // Focus
    React.useEffect(function () {
        if (focus && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [focus]);
    // Text + cursor position
    var newCursorPosition = React.useRef();
    var insertText = React.useCallback(function (textToInsert) {
        var maxLength = (additionalTextareaProps || {}).maxLength;
        if (!textareaRef.current) {
            dispatch({
                getNewText: function (text) {
                    var updatedText = text + textToInsert;
                    if (maxLength && updatedText.length > maxLength) {
                        return updatedText.slice(0, maxLength);
                    }
                    return updatedText;
                },
                type: 'setText',
            });
            return;
        }
        var _a = textareaRef.current, selectionEnd = _a.selectionEnd, selectionStart = _a.selectionStart;
        newCursorPosition.current = selectionStart + textToInsert.length;
        dispatch({
            getNewText: function (prevText) {
                var updatedText = prevText.slice(0, selectionStart) + textToInsert + prevText.slice(selectionEnd);
                if (maxLength && updatedText.length > maxLength) {
                    return updatedText.slice(0, maxLength);
                }
                return updatedText;
            },
            type: 'setText',
        });
    }, [additionalTextareaProps, newCursorPosition, textareaRef]);
    React.useEffect(function () {
        var textareaElement = textareaRef.current;
        if (textareaElement && newCursorPosition.current !== undefined) {
            textareaElement.selectionStart = newCursorPosition.current;
            textareaElement.selectionEnd = newCursorPosition.current;
            newCursorPosition.current = undefined;
        }
    }, [text, newCursorPosition]);
    var handleChange = React.useCallback(function (event) {
        event.preventDefault();
        if (!event || !event.target) {
            return;
        }
        var newText = event.target.value;
        dispatch({
            getNewText: function () { return newText; },
            type: 'setText',
        });
        if (publishTypingEvent && newText && channel) {
            streamChat.logChatPromiseExecution(channel.keystroke(parent === null || parent === void 0 ? void 0 : parent.id), 'start typing event');
        }
    }, [channel, parent, publishTypingEvent]);
    return {
        handleChange: handleChange,
        insertText: insertText,
        textareaRef: textareaRef,
    };
};

var useEmojiPicker = function (state, dispatch, insertText, textareaRef, closeEmojiPickerOnClick) {
    var emojiPickerRef = React.useRef(null);
    var closeEmojiPicker = React.useCallback(function (event) {
        event.preventDefault();
        if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
            dispatch({
                type: 'setEmojiPickerIsOpen',
                value: false,
            });
        }
    }, [emojiPickerRef]);
    var openEmojiPicker = React.useCallback(function (event) {
        event.preventDefault();
        dispatch({
            type: 'setEmojiPickerIsOpen',
            value: true,
        });
        // Prevent event from bubbling to document, so the close handler is never called for this event
        event.stopPropagation();
    }, []);
    var handleEmojiKeyDown = function (event) {
        if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
            event.preventDefault();
            /**
             * TODO: fix the below at some point because this type casting is wrong
             * and just forced to not have warnings currently with the unknown casting
             */
            openEmojiPicker(event);
        }
    };
    var handleEmojiEscape = function (event) {
        if (event.key === 'Escape') {
            dispatch({
                type: 'setEmojiPickerIsOpen',
                value: false,
            });
        }
    };
    React.useEffect(function () {
        if (state.emojiPickerIsOpen) {
            document.addEventListener('click', closeEmojiPicker, false);
            document.addEventListener('keydown', handleEmojiEscape);
        }
        return function () {
            document.removeEventListener('click', closeEmojiPicker, false);
            document.removeEventListener('keydown', handleEmojiEscape);
        };
    }, [closeEmojiPicker, state.emojiPickerIsOpen]);
    var onSelectEmoji = React.useCallback(function (emoji) {
        var _a;
        insertText(emoji.native);
        if (closeEmojiPickerOnClick) {
            dispatch({
                type: 'setEmojiPickerIsOpen',
                value: false,
            });
        }
        (_a = textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [insertText]);
    return {
        closeEmojiPicker: closeEmojiPicker,
        emojiPickerRef: emojiPickerRef,
        handleEmojiKeyDown: handleEmojiKeyDown,
        onSelectEmoji: onSelectEmoji,
        openEmojiPicker: openEmojiPicker,
    };
};

var getAttachmentTypeFromMime = function (mime) {
    if (mime.includes('video/'))
        return 'video';
    if (mime.includes('audio/'))
        return 'audio';
    return 'file';
};
var useSubmitHandler = function (props, state, dispatch, numberOfUploads) {
    var clearEditingState = props.clearEditingState, message = props.message, overrideSubmitHandler = props.overrideSubmitHandler, parent = props.parent, publishTypingEvent = props.publishTypingEvent;
    var attachments = state.attachments, fileOrder = state.fileOrder, fileUploads = state.fileUploads, imageOrder = state.imageOrder, imageUploads = state.imageUploads, mentioned_users = state.mentioned_users, text = state.text;
    var channel = useChannelStateContext('useSubmitHandler').channel;
    var _a = useChannelActionContext('useSubmitHandler'), addNotification = _a.addNotification, editMessage = _a.editMessage, sendMessage = _a.sendMessage;
    var t = useTranslationContext('useSubmitHandler').t;
    var textReference = React.useRef({ hasChanged: false, initialText: text });
    React.useEffect(function () {
        if (!textReference.current.initialText.length) {
            textReference.current.initialText = text;
            return;
        }
        textReference.current.hasChanged = text !== textReference.current.initialText;
    }, [text]);
    var getAttachmentsFromUploads = function () {
        var imageAttachments = imageOrder
            .map(function (id) { return imageUploads[id]; })
            .filter(function (upload) { return upload.state !== 'failed'; })
            .filter(function (_a, _, self) {
            var id = _a.id, url = _a.url;
            return self.every(function (upload) { return upload.id === id || upload.url !== url; });
        })
            .filter(function (upload) {
            // keep the OG attachments in case the text has not changed as the BE
            // won't re-enrich the message when only attachments have changed
            if (!textReference.current.hasChanged)
                return true;
            return !upload.og_scrape_url;
        })
            .map(function (_a) {
            var name = _a.file.name, url = _a.url, rest = __rest(_a, ["file", "url"]);
            return ({
                author_name: rest.author_name,
                fallback: name,
                image_url: url,
                og_scrape_url: rest.og_scrape_url,
                text: rest.text,
                title: rest.title,
                title_link: rest.title_link,
                type: 'image',
            });
        });
        var fileAttachments = fileOrder
            .map(function (id) { return fileUploads[id]; })
            .filter(function (upload) { return upload.state !== 'failed'; })
            .map(function (upload) { return ({
            asset_url: upload.url,
            file_size: upload.file.size,
            mime_type: upload.file.type,
            title: upload.file.name,
            type: getAttachmentTypeFromMime(upload.file.type || ''),
        }); });
        return __spreadArray$1(__spreadArray$1(__spreadArray$1([], attachments, true), imageAttachments, true), fileAttachments, true);
    };
    var handleSubmit = function (event, customMessageData) { return __awaiter$1(void 0, void 0, void 0, function () {
        var trimmedMessage, isEmptyMessage, someAttachmentsUploading, newAttachments, actualMentionedUsers, updatedMessage;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    trimmedMessage = text.trim();
                    isEmptyMessage = trimmedMessage === '' ||
                        trimmedMessage === '>' ||
                        trimmedMessage === '``````' ||
                        trimmedMessage === '``' ||
                        trimmedMessage === '**' ||
                        trimmedMessage === '____' ||
                        trimmedMessage === '__' ||
                        trimmedMessage === '****';
                    if (isEmptyMessage && numberOfUploads === 0)
                        return [2 /*return*/];
                    someAttachmentsUploading = Object.values(imageUploads).some(function (upload) { return upload.state === 'uploading'; }) ||
                        Object.values(fileUploads).some(function (upload) { return upload.state === 'uploading'; });
                    if (someAttachmentsUploading) {
                        return [2 /*return*/, addNotification(t('Wait until all attachments have uploaded'), 'error')];
                    }
                    newAttachments = getAttachmentsFromUploads();
                    actualMentionedUsers = Array.from(new Set(mentioned_users.filter(function (_a) {
                        var id = _a.id, name = _a.name;
                        return text.includes("@".concat(id)) || text.includes("@".concat(name));
                    })));
                    updatedMessage = {
                        attachments: newAttachments,
                        mentioned_users: actualMentionedUsers,
                        text: text,
                    };
                    if (!message) return [3 /*break*/, 5];
                    delete message.i18n;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, editMessage(__assign(__assign(__assign({}, message), updatedMessage), customMessageData))];
                case 2:
                    _a.sent();
                    clearEditingState === null || clearEditingState === void 0 ? void 0 : clearEditingState();
                    dispatch({ type: 'clear' });
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    addNotification(t('Edit message request failed'), 'error');
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 13];
                case 5:
                    _a.trys.push([5, 12, , 13]);
                    dispatch({ type: 'clear' });
                    if (!overrideSubmitHandler) return [3 /*break*/, 7];
                    return [4 /*yield*/, overrideSubmitHandler(__assign(__assign({}, updatedMessage), { parent: parent }), channel.cid, customMessageData)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, sendMessage(__assign(__assign({}, updatedMessage), { parent: parent }), customMessageData)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    if (!publishTypingEvent) return [3 /*break*/, 11];
                    return [4 /*yield*/, channel.stopTyping()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    _a.sent();
                    dispatch({
                        getNewText: function () { return text; },
                        type: 'setText',
                    });
                    actualMentionedUsers === null || actualMentionedUsers === void 0 ? void 0 : actualMentionedUsers.forEach(function (user) {
                        dispatch({ type: 'addMentionedUser', user: user });
                    });
                    addNotification(t('Send message request failed'), 'error');
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    }); };
    return { handleSubmit: handleSubmit };
};

var usePasteHandler = function (uploadNewFiles, insertText, isUploadEnabled) {
    var onPaste = React.useCallback(function (clipboardEvent) {
        if (!isUploadEnabled)
            return;
        (function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
            var items, plainTextPromise, _loop_1, i, state_1, fileLikes, pastedText;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = event.clipboardData.items;
                        if (!reactFileUtils.dataTransferItemsHaveFiles(Array.from(items)))
                            return [2 /*return*/];
                        event.preventDefault();
                        plainTextPromise = undefined;
                        _loop_1 = function (i) {
                            var item = items[i];
                            if (item.kind === 'string' && item.type === 'text/plain') {
                                plainTextPromise = new Promise(function (resolve) {
                                    item.getAsString(function (string) {
                                        resolve(string);
                                    });
                                });
                                return "break";
                            }
                        };
                        for (i = 0; i < items.length; i++) {
                            state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                        return [4 /*yield*/, reactFileUtils.dataTransferItemsToFiles(Array.from(items))];
                    case 1:
                        fileLikes = _a.sent();
                        if (fileLikes.length) {
                            uploadNewFiles(fileLikes);
                            return [2 /*return*/];
                        }
                        if (!plainTextPromise) return [3 /*break*/, 3];
                        return [4 /*yield*/, plainTextPromise];
                    case 2:
                        pastedText = _a.sent();
                        insertText(pastedText);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })(clipboardEvent);
    }, [insertText, uploadNewFiles]);
    return { onPaste: onPaste };
};

var makeEmptyMessageInputState = function () { return ({
    attachments: [],
    emojiPickerIsOpen: false,
    fileOrder: [],
    fileUploads: {},
    imageOrder: [],
    imageUploads: {},
    mentioned_users: [],
    setText: function () { return null; },
    text: '',
}); };
/**
 * Initializes the state. Empty if the message prop is falsy.
 */
var initState = function (message) {
    var _a, _b, _c, _d, _e;
    if (!message) {
        return makeEmptyMessageInputState();
    }
    // if message prop is defined, get image uploads, file uploads, text, etc.
    var imageUploads = (_b = (_a = message.attachments) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
        var type = _a.type;
        return type === 'image';
    }).reduce(function (acc, _a) {
        var author_name = _a.author_name, _b = _a.fallback, fallback = _b === void 0 ? '' : _b, image_url = _a.image_url, og_scrape_url = _a.og_scrape_url, text = _a.text, title = _a.title, title_link = _a.title_link;
        var id = nanoid.nanoid();
        acc[id] = {
            author_name: author_name,
            file: {
                name: fallback,
            },
            id: id,
            og_scrape_url: og_scrape_url,
            state: 'finished',
            text: text,
            title: title,
            title_link: title_link,
            url: image_url,
        };
        return acc;
    }, {})) !== null && _b !== void 0 ? _b : {};
    var fileUploads = (_d = (_c = message.attachments) === null || _c === void 0 ? void 0 : _c.filter(function (_a) {
        var type = _a.type;
        return type === 'file';
    }).reduce(function (acc, _a) {
        var asset_url = _a.asset_url, file_size = _a.file_size, mime_type = _a.mime_type, _b = _a.title, title = _b === void 0 ? '' : _b;
        var id = nanoid.nanoid();
        acc[id] = {
            file: {
                name: title,
                size: file_size,
                type: mime_type,
            },
            id: id,
            state: 'finished',
            url: asset_url,
        };
        return acc;
    }, {})) !== null && _d !== void 0 ? _d : {};
    var imageOrder = Object.keys(imageUploads);
    var fileOrder = Object.keys(fileUploads);
    var attachments = ((_e = message.attachments) === null || _e === void 0 ? void 0 : _e.filter(function (_a) {
        var type = _a.type;
        return type !== 'file' && type !== 'image';
    })) || [];
    var mentioned_users = message.mentioned_users || [];
    return {
        attachments: attachments,
        emojiPickerIsOpen: false,
        fileOrder: fileOrder,
        fileUploads: fileUploads,
        imageOrder: imageOrder,
        imageUploads: imageUploads,
        mentioned_users: mentioned_users,
        setText: function () { return null; },
        text: message.text || '',
    };
};
/**
 * MessageInput state reducer
 */
var messageInputReducer = function (state, action) {
    var _a, _b;
    switch (action.type) {
        case 'setEmojiPickerIsOpen':
            return __assign(__assign({}, state), { emojiPickerIsOpen: action.value });
        case 'setText':
            return __assign(__assign({}, state), { text: action.getNewText(state.text) });
        case 'clear':
            return makeEmptyMessageInputState();
        case 'setImageUpload': {
            var imageAlreadyExists = state.imageUploads[action.id];
            if (!imageAlreadyExists && !action.file)
                return state;
            var imageOrder = imageAlreadyExists ? state.imageOrder : state.imageOrder.concat(action.id);
            var newUploadFields = __assign({}, action);
            delete newUploadFields.type;
            return __assign(__assign({}, state), { imageOrder: imageOrder, imageUploads: __assign(__assign({}, state.imageUploads), (_a = {}, _a[action.id] = __assign(__assign({}, state.imageUploads[action.id]), newUploadFields), _a)) });
        }
        case 'setFileUpload': {
            var fileAlreadyExists = state.fileUploads[action.id];
            if (!fileAlreadyExists && !action.file)
                return state;
            var fileOrder = fileAlreadyExists ? state.fileOrder : state.fileOrder.concat(action.id);
            var newUploadFields = __assign({}, action);
            delete newUploadFields.type;
            return __assign(__assign({}, state), { fileOrder: fileOrder, fileUploads: __assign(__assign({}, state.fileUploads), (_b = {}, _b[action.id] = __assign(__assign({}, state.fileUploads[action.id]), newUploadFields), _b)) });
        }
        case 'removeImageUpload': {
            if (!state.imageUploads[action.id])
                return state; // cannot remove anything
            var newImageUploads = __assign({}, state.imageUploads);
            delete newImageUploads[action.id];
            return __assign(__assign({}, state), { imageOrder: state.imageOrder.filter(function (_id) { return _id !== action.id; }), imageUploads: newImageUploads });
        }
        case 'removeFileUpload': {
            if (!state.fileUploads[action.id])
                return state; // cannot remove anything
            var newFileUploads = __assign({}, state.fileUploads);
            delete newFileUploads[action.id];
            return __assign(__assign({}, state), { fileOrder: state.fileOrder.filter(function (_id) { return _id !== action.id; }), fileUploads: newFileUploads });
        }
        case 'addMentionedUser':
            return __assign(__assign({}, state), { mentioned_users: state.mentioned_users.concat(action.user) });
        default:
            return state;
    }
};
/**
 * hook for MessageInput state
 */
var useMessageInputState = function (props) {
    var additionalTextareaProps = props.additionalTextareaProps, closeEmojiPickerOnClick = props.closeEmojiPickerOnClick, message = props.message;
    var _a = useChannelStateContext('useMessageInputState'), _b = _a.channelCapabilities, channelCapabilities = _b === void 0 ? {} : _b, channelConfig = _a.channelConfig;
    var defaultValue = additionalTextareaProps === null || additionalTextareaProps === void 0 ? void 0 : additionalTextareaProps.defaultValue;
    var initialStateValue = message ||
        (Array.isArray(defaultValue)
            ? { text: defaultValue.join('') }
            : { text: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString() });
    var _c = React.useReducer(messageInputReducer, initialStateValue, initState), state = _c[0], dispatch = _c[1];
    var _d = useMessageInputText(props, state, dispatch), handleChange = _d.handleChange, insertText = _d.insertText, textareaRef = _d.textareaRef;
    var _e = React.useState(false), showCommandsList = _e[0], setShowCommandsList = _e[1];
    var _f = React.useState(false), showMentionsList = _f[0], setShowMentionsList = _f[1];
    var openCommandsList = function () {
        dispatch({
            getNewText: function () { return '/'; },
            type: 'setText',
        });
        setShowCommandsList(true);
    };
    var closeCommandsList = function () { return setShowCommandsList(false); };
    var openMentionsList = function () {
        dispatch({
            getNewText: function (currentText) { return currentText + '@'; },
            type: 'setText',
        });
        setShowMentionsList(true);
    };
    var closeMentionsList = function () { return setShowMentionsList(false); };
    var _g = useEmojiPicker(state, dispatch, insertText, textareaRef, closeEmojiPickerOnClick), closeEmojiPicker = _g.closeEmojiPicker, emojiPickerRef = _g.emojiPickerRef, handleEmojiKeyDown = _g.handleEmojiKeyDown, onSelectEmoji = _g.onSelectEmoji, openEmojiPicker = _g.openEmojiPicker;
    var _h = useAttachments(props, state, dispatch, textareaRef), maxFilesLeft = _h.maxFilesLeft, numberOfUploads = _h.numberOfUploads, removeFile = _h.removeFile, removeImage = _h.removeImage, uploadFile = _h.uploadFile, uploadImage = _h.uploadImage, uploadNewFiles = _h.uploadNewFiles;
    var handleSubmit = useSubmitHandler(props, state, dispatch, numberOfUploads).handleSubmit;
    var isUploadEnabled = (channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.uploads) !== false && channelCapabilities['upload-file'] !== false;
    var onPaste = usePasteHandler(uploadNewFiles, insertText, isUploadEnabled).onPaste;
    var onSelectUser = React.useCallback(function (item) {
        dispatch({ type: 'addMentionedUser', user: item });
    }, []);
    var setText = React.useCallback(function (text) {
        dispatch({ getNewText: function () { return text; }, type: 'setText' });
    }, []);
    return __assign(__assign({}, state), { closeCommandsList: closeCommandsList, 
        /**
         * TODO: fix the below at some point because this type casting is wrong
         * and just forced to not have warnings currently with the unknown casting
         */
        closeEmojiPicker: closeEmojiPicker, closeMentionsList: closeMentionsList, emojiIndex: useEmojiIndex(), emojiPickerRef: emojiPickerRef, handleChange: handleChange, handleEmojiKeyDown: handleEmojiKeyDown, handleSubmit: handleSubmit, insertText: insertText, isUploadEnabled: isUploadEnabled, maxFilesLeft: maxFilesLeft, numberOfUploads: numberOfUploads, onPaste: onPaste, onSelectEmoji: onSelectEmoji, onSelectUser: onSelectUser, openCommandsList: openCommandsList, openEmojiPicker: openEmojiPicker, openMentionsList: openMentionsList, removeFile: removeFile, removeImage: removeImage, setText: setText, showCommandsList: showCommandsList, showMentionsList: showMentionsList, textareaRef: textareaRef, uploadFile: uploadFile, uploadImage: uploadImage, uploadNewFiles: uploadNewFiles });
};

var useCreateMessageInputContext = function (value) {
    var additionalTextareaProps = value.additionalTextareaProps, attachments = value.attachments, autocompleteTriggers = value.autocompleteTriggers, clearEditingState = value.clearEditingState, closeCommandsList = value.closeCommandsList, closeEmojiPicker = value.closeEmojiPicker, closeMentionsList = value.closeMentionsList, cooldownInterval = value.cooldownInterval, cooldownRemaining = value.cooldownRemaining, disabled = value.disabled, disableMentions = value.disableMentions, doFileUploadRequest = value.doFileUploadRequest, doImageUploadRequest = value.doImageUploadRequest, emojiIndex = value.emojiIndex, emojiPickerIsOpen = value.emojiPickerIsOpen, emojiPickerRef = value.emojiPickerRef, errorHandler = value.errorHandler, fileOrder = value.fileOrder, fileUploads = value.fileUploads, focus = value.focus, grow = value.grow, handleChange = value.handleChange, handleEmojiKeyDown = value.handleEmojiKeyDown, handleSubmit = value.handleSubmit, imageOrder = value.imageOrder, imageUploads = value.imageUploads, insertText = value.insertText, isUploadEnabled = value.isUploadEnabled, maxFilesLeft = value.maxFilesLeft, maxRows = value.maxRows, mentionAllAppUsers = value.mentionAllAppUsers, mentioned_users = value.mentioned_users, mentionQueryParams = value.mentionQueryParams, message = value.message, noFiles = value.noFiles, numberOfUploads = value.numberOfUploads, onPaste = value.onPaste, onSelectEmoji = value.onSelectEmoji, onSelectUser = value.onSelectUser, openCommandsList = value.openCommandsList, openEmojiPicker = value.openEmojiPicker, openMentionsList = value.openMentionsList, overrideSubmitHandler = value.overrideSubmitHandler, parent = value.parent, publishTypingEvent = value.publishTypingEvent, removeFile = value.removeFile, removeImage = value.removeImage, setCooldownRemaining = value.setCooldownRemaining, setText = value.setText, shouldSubmit = value.shouldSubmit, showCommandsList = value.showCommandsList, showMentionsList = value.showMentionsList, text = value.text, textareaRef = value.textareaRef, uploadFile = value.uploadFile, uploadImage = value.uploadImage, uploadNewFiles = value.uploadNewFiles, useMentionsTransliteration = value.useMentionsTransliteration;
    var editing = message === null || message === void 0 ? void 0 : message.editing;
    var fileUploadsValue = Object.entries(fileUploads)
        // eslint-disable-next-line
        .map(function (_a) {
        _a[0]; var value = _a[1];
        return value.state;
    })
        .join();
    var imageUploadsValue = Object.entries(imageUploads)
        // eslint-disable-next-line
        .map(function (_a) {
        _a[0]; var value = _a[1];
        return value.state;
    })
        .join();
    var mentionedUsersLength = mentioned_users.length;
    var parentId = parent === null || parent === void 0 ? void 0 : parent.id;
    var messageInputContext = React.useMemo(function () { return ({
        additionalTextareaProps: additionalTextareaProps,
        attachments: attachments,
        autocompleteTriggers: autocompleteTriggers,
        clearEditingState: clearEditingState,
        closeCommandsList: closeCommandsList,
        closeEmojiPicker: closeEmojiPicker,
        closeMentionsList: closeMentionsList,
        cooldownInterval: cooldownInterval,
        cooldownRemaining: cooldownRemaining,
        disabled: disabled,
        disableMentions: disableMentions,
        doFileUploadRequest: doFileUploadRequest,
        doImageUploadRequest: doImageUploadRequest,
        emojiIndex: emojiIndex,
        emojiPickerIsOpen: emojiPickerIsOpen,
        emojiPickerRef: emojiPickerRef,
        errorHandler: errorHandler,
        fileOrder: fileOrder,
        fileUploads: fileUploads,
        focus: focus,
        grow: grow,
        handleChange: handleChange,
        handleEmojiKeyDown: handleEmojiKeyDown,
        handleSubmit: handleSubmit,
        imageOrder: imageOrder,
        imageUploads: imageUploads,
        insertText: insertText,
        isUploadEnabled: isUploadEnabled,
        maxFilesLeft: maxFilesLeft,
        maxRows: maxRows,
        mentionAllAppUsers: mentionAllAppUsers,
        mentioned_users: mentioned_users,
        mentionQueryParams: mentionQueryParams,
        message: message,
        noFiles: noFiles,
        numberOfUploads: numberOfUploads,
        onPaste: onPaste,
        onSelectEmoji: onSelectEmoji,
        onSelectUser: onSelectUser,
        openCommandsList: openCommandsList,
        openEmojiPicker: openEmojiPicker,
        openMentionsList: openMentionsList,
        overrideSubmitHandler: overrideSubmitHandler,
        parent: parent,
        publishTypingEvent: publishTypingEvent,
        removeFile: removeFile,
        removeImage: removeImage,
        setCooldownRemaining: setCooldownRemaining,
        setText: setText,
        shouldSubmit: shouldSubmit,
        showCommandsList: showCommandsList,
        showMentionsList: showMentionsList,
        text: text,
        textareaRef: textareaRef,
        uploadFile: uploadFile,
        uploadImage: uploadImage,
        uploadNewFiles: uploadNewFiles,
        useMentionsTransliteration: useMentionsTransliteration,
    }); }, [
        cooldownInterval,
        cooldownRemaining,
        editing,
        emojiPickerIsOpen,
        fileUploadsValue,
        imageUploadsValue,
        isUploadEnabled,
        mentionedUsersLength,
        parentId,
        publishTypingEvent,
        showCommandsList,
        showMentionsList,
        text,
    ]);
    return messageInputContext;
};

var MessageInputProvider = function (props) {
    var cooldownTimerState = useCooldownTimer();
    var messageInputState = useMessageInputState(props);
    var messageInputContextValue = useCreateMessageInputContext(__assign(__assign(__assign({}, cooldownTimerState), messageInputState), props));
    return (React__default["default"].createElement(MessageInputContextProvider, { value: messageInputContextValue }, props.children));
};
var UnMemoizedMessageInput = function (props) {
    var PropInput = props.Input;
    var dragAndDropWindow = useChannelStateContext().dragAndDropWindow;
    var _a = useComponentContext('MessageInput'), ContextInput = _a.Input, _b = _a.TriggerProvider, TriggerProvider = _b === void 0 ? DefaultTriggerProvider : _b;
    var Input = PropInput || ContextInput || MessageInputFlat;
    var OptionalMessageInputProvider = React.useMemo(function () { return (dragAndDropWindow ? React__default["default"].Fragment : MessageInputProvider); }, [dragAndDropWindow]);
    return (React__default["default"].createElement(OptionalMessageInputProvider, __assign({}, props),
        React__default["default"].createElement(TriggerProvider, null,
            React__default["default"].createElement(Input, null))));
};
/**
 * A high level component that has provides all functionality to the Input it renders.
 */
var MessageInput = React__default["default"].memo(UnMemoizedMessageInput);

/**
 * @deprecated This component has beend deprecated in favor of [`MessageInputFlat`](./MessageInputFlat.tsx) from which
 * `MessageInputSmall` "inherited" most of the code with only slight modification to classNames
 * and markup.
 * In case you need to change styling in places where `MessageInputSmall` has been used previously ([`Thread`](../Thread/Thread.tsx))
 * please do so by updating the CSS or by overriding the component itself.
 *
 * **Will be removed with the complete transition to the theming V2 (next major release - `v11.0.0`).**
 */
var MessageInputSmall = function () {
    var _a = useChannelStateContext('MessageInputSmall'), acceptedFiles = _a.acceptedFiles, multipleUploads = _a.multipleUploads, quotedMessage = _a.quotedMessage;
    var setQuotedMessage = useChannelActionContext('MessageInputSmall').setQuotedMessage;
    var t = useTranslationContext('MessageInputSmall').t;
    var channel = useChatContext('MessageInputSmall').channel;
    var _b = useMessageInputContext('MessageInputSmall'), closeEmojiPicker = _b.closeEmojiPicker, cooldownRemaining = _b.cooldownRemaining, emojiPickerIsOpen = _b.emojiPickerIsOpen, handleSubmit = _b.handleSubmit, isUploadEnabled = _b.isUploadEnabled, maxFilesLeft = _b.maxFilesLeft, numberOfUploads = _b.numberOfUploads, openEmojiPicker = _b.openEmojiPicker, setCooldownRemaining = _b.setCooldownRemaining, uploadNewFiles = _b.uploadNewFiles;
    var _c = useComponentContext('MessageInputSmall'), _d = _c.CooldownTimer, CooldownTimer$1 = _d === void 0 ? CooldownTimer : _d, _e = _c.EmojiIcon, EmojiIcon = _e === void 0 ? EmojiIconSmall : _e, _f = _c.FileUploadIcon, FileUploadIcon = _f === void 0 ? FileUploadIconFlat : _f, _g = _c.SendButton, SendButton$1 = _g === void 0 ? SendButton : _g, _h = _c.QuotedMessagePreview, QuotedMessagePreview$1 = _h === void 0 ? QuotedMessagePreview : _h;
    React.useEffect(function () {
        var handleQuotedMessageUpdate = function (e) {
            var _a;
            if (!(quotedMessage && ((_a = e.message) === null || _a === void 0 ? void 0 : _a.id) === quotedMessage.id))
                return;
            if (e.type === 'message.deleted') {
                setQuotedMessage(undefined);
                return;
            }
            setQuotedMessage(e.message);
        };
        channel === null || channel === void 0 ? void 0 : channel.on('message.deleted', handleQuotedMessageUpdate);
        channel === null || channel === void 0 ? void 0 : channel.on('message.updated', handleQuotedMessageUpdate);
        return function () {
            channel === null || channel === void 0 ? void 0 : channel.off('message.deleted', handleQuotedMessageUpdate);
            channel === null || channel === void 0 ? void 0 : channel.off('message.updated', handleQuotedMessageUpdate);
        };
    }, [channel, quotedMessage]);
    return (React__default["default"].createElement("div", { className: 'str-chat__small-message-input__wrapper' },
        React__default["default"].createElement(reactFileUtils.ImageDropzone, { accept: acceptedFiles, disabled: !isUploadEnabled || maxFilesLeft === 0 || !!cooldownRemaining, handleFiles: uploadNewFiles, maxNumberOfFiles: maxFilesLeft, multiple: multipleUploads },
            React__default["default"].createElement("div", { className: "str-chat__small-message-input ".concat(SendButton$1 ? 'str-chat__small-message-input--send-button-active' : '', " ").concat(quotedMessage && quotedMessage.parent_id ? 'str-chat__input-flat-quoted' : '', " ").concat(numberOfUploads ? 'str-chat__small-message-input-has-attachments' : '', " ") },
                quotedMessage && quotedMessage.parent_id && (React__default["default"].createElement(QuotedMessagePreview$1, { quotedMessage: quotedMessage })),
                isUploadEnabled && React__default["default"].createElement(UploadsPreview, null),
                React__default["default"].createElement("div", { className: 'str-chat__small-message-input--textarea-wrapper' },
                    React__default["default"].createElement(ChatAutoComplete, null),
                    cooldownRemaining ? (React__default["default"].createElement("div", { className: 'str-chat__input-small-cooldown' },
                        React__default["default"].createElement(CooldownTimer$1, { cooldownInterval: cooldownRemaining, setCooldownRemaining: setCooldownRemaining }))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
                        isUploadEnabled && (React__default["default"].createElement("div", { className: 'str-chat__fileupload-wrapper', "data-testid": 'fileinput' },
                            React__default["default"].createElement(Tooltip, null, maxFilesLeft
                                ? t('Attach files')
                                : t("You've reached the maximum number of files")),
                            React__default["default"].createElement(reactFileUtils.FileUploadButton, { accepts: acceptedFiles, disabled: maxFilesLeft === 0, handleFiles: uploadNewFiles, multiple: multipleUploads },
                                React__default["default"].createElement("span", { className: 'str-chat__small-message-input-fileupload' },
                                    React__default["default"].createElement(FileUploadIcon, null))))),
                        React__default["default"].createElement("div", { className: 'str-chat__emojiselect-wrapper' },
                            React__default["default"].createElement(Tooltip, null, emojiPickerIsOpen
                                ? t('Close emoji picker')
                                : t('Open emoji picker')),
                            React__default["default"].createElement("button", { "aria-label": 'Emoji picker', className: 'str-chat__small-message-input-emojiselect', onClick: emojiPickerIsOpen ? closeEmojiPicker : openEmojiPicker },
                                React__default["default"].createElement(EmojiIcon, null))))),
                    React__default["default"].createElement(EmojiPicker, { small: true })),
                !cooldownRemaining && React__default["default"].createElement(SendButton$1, { sendMessage: handleSubmit })))));
};

var MMLReact = React__default["default"].lazy(function () { return __awaiter$1(void 0, void 0, void 0, function () {
    var mml;
    return __generator$1(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('mml-react')); })];
            case 1:
                mml = _a.sent();
                return [2 /*return*/, { default: mml.MML }];
        }
    });
}); });
/**
 * A wrapper component around MML-React library
 */
var MML = function (props) {
    var actionHandler = props.actionHandler, _a = props.align, align = _a === void 0 ? 'right' : _a, source = props.source;
    var theme = useChatContext('MML').theme;
    return (React__default["default"].createElement(React.Suspense, { fallback: null },
        React__default["default"].createElement(MMLReact, { className: "mml-align-".concat(align), Loading: null, onSubmit: actionHandler, source: source, Success: null, theme: (theme || '').replace(' ', '-') })));
};

var isMutableRef = function (ref) {
    if (ref) {
        return ref.current !== undefined;
    }
    return false;
};

var UnMemoizedReactionSelector = React__default["default"].forwardRef(function (props, ref) {
    var _a;
    var _b = props.additionalEmojiProps, additionalEmojiProps = _b === void 0 ? {} : _b, propAvatar = props.Avatar, _c = props.detailedView, detailedView = _c === void 0 ? true : _c, propHandleReaction = props.handleReaction, propLatestReactions = props.latest_reactions, propOwnReactions = props.own_reactions, propReactionCounts = props.reaction_counts, propReactionOptions = props.reactionOptions, _d = props.reverse, reverse = _d === void 0 ? false : _d;
    var contextAvatar = useComponentContext('ReactionSelector').Avatar;
    var _e = useEmojiContext('ReactionSelector'), Emoji = _e.Emoji, emojiConfig = _e.emojiConfig;
    var _f = useMessageContext('ReactionSelector'), contextHandleReaction = _f.handleReaction, message = _f.message;
    var _g = emojiConfig || {}, defaultMinimalEmojis = _g.defaultMinimalEmojis, fullEmojiData = _g.emojiData, emojiSetDef = _g.emojiSetDef;
    var Avatar$1 = propAvatar || contextAvatar || Avatar;
    var handleReaction = propHandleReaction || contextHandleReaction;
    var latestReactions = propLatestReactions || (message === null || message === void 0 ? void 0 : message.latest_reactions) || [];
    var ownReactions = propOwnReactions || (message === null || message === void 0 ? void 0 : message.own_reactions) || [];
    var reactionCounts = propReactionCounts || (message === null || message === void 0 ? void 0 : message.reaction_counts) || {};
    var reactionOptions = propReactionOptions || defaultMinimalEmojis;
    var reactionsAreCustom = !!(propReactionOptions === null || propReactionOptions === void 0 ? void 0 : propReactionOptions.length);
    var emojiData = React.useMemo(function () { return (reactionsAreCustom ? fullEmojiData : getStrippedEmojiData(fullEmojiData)); }, [fullEmojiData, reactionsAreCustom]);
    var _h = React.useState(null), tooltipReactionType = _h[0], setTooltipReactionType = _h[1];
    var _j = React.useState(null), tooltipPositions = _j[0], setTooltipPositions = _j[1];
    var targetRef = React.useRef(null);
    var tooltipRef = React.useRef(null);
    var showTooltip = React.useCallback(function (event, reactionType) {
        targetRef.current = event.currentTarget;
        setTooltipReactionType(reactionType);
    }, []);
    var hideTooltip = React.useCallback(function () {
        setTooltipReactionType(null);
        setTooltipPositions(null);
    }, []);
    React.useEffect(function () {
        var _a, _b, _c;
        if (tooltipReactionType) {
            var tooltip = (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            var target = (_b = targetRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            var container = isMutableRef(ref) ? (_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect() : null;
            if (!tooltip || !target || !container)
                return;
            var tooltipPosition = tooltip.width === container.width || tooltip.x < container.x
                ? 0
                : target.left + target.width / 2 - container.left - tooltip.width / 2;
            var arrowPosition = target.x - tooltip.x + target.width / 2 - tooltipPosition;
            setTooltipPositions({
                arrow: arrowPosition,
                tooltip: tooltipPosition,
            });
        }
    }, [tooltipReactionType, ref]);
    var getUsersPerReactionType = function (type) {
        return latestReactions
            .map(function (reaction) {
            var _a, _b;
            if (reaction.type === type) {
                return ((_a = reaction.user) === null || _a === void 0 ? void 0 : _a.name) || ((_b = reaction.user) === null || _b === void 0 ? void 0 : _b.id);
            }
            return null;
        })
            .filter(Boolean);
    };
    var iHaveReactedWithReaction = function (reactionType) {
        return ownReactions.find(function (reaction) { return reaction.type === reactionType; });
    };
    var getLatestUserForReactionType = function (type) {
        var _a;
        return ((_a = latestReactions.find(function (reaction) { return reaction.type === type && !!reaction.user; })) === null || _a === void 0 ? void 0 : _a.user) ||
            undefined;
    };
    return (React__default["default"].createElement("div", { className: clsx('str-chat__reaction-selector str-chat__message-reaction-selector', {
            'str-chat__reaction-selector--reverse': reverse,
        }), "data-testid": 'reaction-selector', ref: ref },
        !!tooltipReactionType && detailedView && (React__default["default"].createElement("div", { className: 'str-chat__reaction-selector-tooltip', ref: tooltipRef, style: {
                left: tooltipPositions === null || tooltipPositions === void 0 ? void 0 : tooltipPositions.tooltip,
                visibility: tooltipPositions ? 'visible' : 'hidden',
            } },
            React__default["default"].createElement("div", { className: 'arrow', style: { left: tooltipPositions === null || tooltipPositions === void 0 ? void 0 : tooltipPositions.arrow } }), (_a = getUsersPerReactionType(tooltipReactionType)) === null || _a === void 0 ? void 0 :
            _a.map(function (user, i, users) { return (React__default["default"].createElement("span", { className: 'latest-user-username', key: "key-".concat(i, "-").concat(user) }, "".concat(user).concat(i < users.length - 1 ? ', ' : ''))); }))),
        React__default["default"].createElement("ul", { className: 'str-chat__message-reactions-list str-chat__message-reactions-options' }, reactionOptions.map(function (reactionOption) {
            var latestUser = getLatestUserForReactionType(reactionOption.id);
            var count = reactionCounts && reactionCounts[reactionOption.id];
            return (React__default["default"].createElement("li", { key: "item-".concat(reactionOption.id) },
                React__default["default"].createElement("button", { "aria-label": "Select Reaction: ".concat(reactionOption.name), className: clsx('str-chat__message-reactions-list-item str-chat__message-reactions-option', {
                        'str-chat__message-reactions-option-selected': iHaveReactedWithReaction(reactionOption.id),
                    }), "data-text": reactionOption.id, onClick: function (event) { return handleReaction(reactionOption.id, event); } },
                    !!count && detailedView && (React__default["default"].createElement("div", { className: 'latest-user str-chat__message-reactions-last-user', onClick: hideTooltip, onMouseEnter: function (e) { return showTooltip(e, reactionOption.id); }, onMouseLeave: hideTooltip }, latestUser ? (React__default["default"].createElement(Avatar$1, { image: latestUser.image, name: latestUser.name, size: 20, user: latestUser })) : (React__default["default"].createElement("div", { className: 'latest-user-not-found' })))),
                    React__default["default"].createElement(React.Suspense, { fallback: null },
                        React__default["default"].createElement("span", { className: 'str-chat__message-reaction-emoji' },
                            React__default["default"].createElement(Emoji, __assign({ data: emojiData, emoji: reactionOption, size: 20 }, (reactionsAreCustom ? additionalEmojiProps : emojiSetDef))))),
                    Boolean(count) && detailedView && (React__default["default"].createElement("span", { className: 'str-chat__message-reactions-list-item__count' }, count || '')))));
        }))));
});
/**
 * Component that allows a user to select a reaction.
 */
var ReactionSelector = React__default["default"].memo(UnMemoizedReactionSelector);

var useProcessReactions = function (params) {
    var _a = params.additionalEmojiProps, additionalEmojiProps = _a === void 0 ? {} : _a, emojiConfig = params.emojiConfig, propOwnReactions = params.own_reactions, propReactionCounts = params.reaction_counts, propReactionOptions = params.reactionOptions, propReactions = params.reactions;
    var message = useMessageContext('ReactionsList').message;
    var _b = emojiConfig || {}, defaultMinimalEmojis = _b.defaultMinimalEmojis, fullEmojiData = _b.emojiData, emojiSetDef = _b.emojiSetDef;
    var latestReactions = propReactions || message.latest_reactions || [];
    var ownReactions = propOwnReactions || (message === null || message === void 0 ? void 0 : message.own_reactions) || [];
    var reactionCounts = propReactionCounts || message.reaction_counts || {};
    var reactionOptions = propReactionOptions || defaultMinimalEmojis;
    var reactionsAreCustom = !!(propReactionOptions === null || propReactionOptions === void 0 ? void 0 : propReactionOptions.length);
    var iHaveReactedWithReaction = React.useCallback(function (reactionType) { return ownReactions.find(function (reaction) { return reaction.type === reactionType; }); }, [ownReactions]);
    var getEmojiByReactionType = React.useCallback(function (type) {
        return reactionOptions.find(function (option) { return option.id === type; });
    }, [reactionOptions]);
    var emojiData = React.useMemo(function () { return (reactionsAreCustom ? fullEmojiData : getStrippedEmojiData(fullEmojiData)); }, [fullEmojiData, reactionsAreCustom]);
    var latestReactionTypes = React.useMemo(function () {
        return latestReactions.reduce(function (reactionTypes, _a) {
            var type = _a.type;
            if (reactionTypes.indexOf(type) === -1) {
                reactionTypes.push(type);
            }
            return reactionTypes;
        }, []);
    }, [latestReactions]);
    var supportedReactionMap = React.useMemo(function () {
        return reactionOptions.reduce(function (acc, _a) {
            var id = _a.id;
            acc[id] = true;
            return acc;
        }, {});
    }, [reactionOptions]);
    var supportedReactionsArePresent = React.useMemo(function () { return latestReactionTypes.some(function (type) { return supportedReactionMap[type]; }); }, [latestReactionTypes, supportedReactionMap]);
    var totalReactionCount = React.useMemo(function () {
        return supportedReactionsArePresent
            ? Object.values(reactionCounts).reduce(function (total, count) { return total + count; }, 0)
            : 0;
    }, [reactionCounts, supportedReactionsArePresent]);
    var aggregatedUserNamesByType = React.useMemo(function () {
        return latestReactions.reduce(function (typeMap, _a) {
            var _b;
            var type = _a.type, user = _a.user;
            (_b = typeMap[type]) !== null && _b !== void 0 ? _b : (typeMap[type] = []);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            typeMap[type].push((user === null || user === void 0 ? void 0 : user.name) || user.id);
            return typeMap;
        }, {});
    }, [latestReactions]);
    return {
        additionalEmojiProps: reactionsAreCustom ? additionalEmojiProps : emojiSetDef,
        aggregatedUserNamesByType: aggregatedUserNamesByType,
        emojiData: emojiData,
        getEmojiByReactionType: getEmojiByReactionType,
        iHaveReactedWithReaction: iHaveReactedWithReaction,
        latestReactions: latestReactions,
        latestReactionTypes: latestReactionTypes,
        reactionCounts: reactionCounts,
        supportedReactionsArePresent: supportedReactionsArePresent,
        totalReactionCount: totalReactionCount,
    };
};

var ButtonWithTooltip = function (_a) {
    var children = _a.children, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, rest = __rest(_a, ["children", "onMouseEnter", "onMouseLeave"]);
    var _b = React.useState(null), referenceElement = _b[0], setReferenceElement = _b[1];
    var _c = useEnterLeaveHandlers({
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
    }), handleEnter = _c.handleEnter, handleLeave = _c.handleLeave, tooltipVisible = _c.tooltipVisible;
    var themeVersion = useChatContext('ButtonWithTooltip').themeVersion;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        themeVersion === '2' && (React__default["default"].createElement(PopperTooltip, { referenceElement: referenceElement, visible: tooltipVisible }, rest.title)),
        React__default["default"].createElement("button", __assign({ onMouseEnter: handleEnter, onMouseLeave: handleLeave, ref: setReferenceElement }, rest), children)));
};
var UnMemoizedReactionsList = function (props) {
    var onClick = props.onClick, _a = props.reverse, reverse = _a === void 0 ? false : _a, rest = __rest(props, ["onClick", "reverse"]);
    var _b = useEmojiContext('ReactionsList'), Emoji = _b.Emoji, emojiConfig = _b.emojiConfig;
    var onReactionListClick = useMessageContext('ReactionsList').onReactionListClick;
    var _c = useProcessReactions(__assign({ emojiConfig: emojiConfig }, rest)), additionalEmojiProps = _c.additionalEmojiProps, aggregatedUserNamesByType = _c.aggregatedUserNamesByType, emojiData = _c.emojiData, getEmojiByReactionType = _c.getEmojiByReactionType, iHaveReactedWithReaction = _c.iHaveReactedWithReaction, latestReactions = _c.latestReactions, latestReactionTypes = _c.latestReactionTypes, reactionCounts = _c.reactionCounts, supportedReactionsArePresent = _c.supportedReactionsArePresent, totalReactionCount = _c.totalReactionCount;
    if (!latestReactions.length)
        return null;
    if (!supportedReactionsArePresent)
        return null;
    return (React__default["default"].createElement("div", { "aria-label": 'Reaction list', className: clsx('str-chat__reaction-list str-chat__message-reactions-container', {
            'str-chat__reaction-list--reverse': reverse,
        }), "data-testid": 'reaction-list', onClick: onClick || onReactionListClick, onKeyUp: onClick || onReactionListClick, role: 'figure' },
        React__default["default"].createElement("ul", { className: 'str-chat__message-reactions' },
            latestReactionTypes.map(function (reactionType) {
                var emojiObject = getEmojiByReactionType(reactionType);
                var isOwnReaction = iHaveReactedWithReaction(reactionType);
                return emojiObject ? (React__default["default"].createElement("li", { className: clsx('str-chat__message-reaction', {
                        'str-chat__message-reaction-own': isOwnReaction,
                    }), key: emojiObject.id },
                    React__default["default"].createElement(ButtonWithTooltip, { "aria-label": "Reactions: ".concat(reactionType), title: aggregatedUserNamesByType[reactionType].join(', '), type: 'button' },
                        React__default["default"].createElement(React.Suspense, { fallback: null },
                            React__default["default"].createElement("span", { className: 'str-chat__message-reaction-emoji' },
                                React__default["default"].createElement(Emoji, __assign({ data: emojiData, emoji: emojiObject, size: 16 }, additionalEmojiProps)))),
                        "\u00A0",
                        React__default["default"].createElement("span", { className: 'str-chat__message-reaction-count', "data-testclass": 'reaction-list-reaction-count' }, reactionCounts[reactionType])))) : null;
            }),
            React__default["default"].createElement("li", null,
                React__default["default"].createElement("span", { className: 'str-chat__reaction-list--counter' }, totalReactionCount)))));
};
/**
 * Component that displays a list of reactions on a message.
 */
var ReactionsList = React__default["default"].memo(UnMemoizedReactionsList);

var UnMemoizedSimpleReactionsList = function (props) {
    var propHandleReaction = props.handleReaction, rest = __rest(props, ["handleReaction"]);
    var _a = useEmojiContext('SimpleReactionsList'), Emoji = _a.Emoji, emojiConfig = _a.emojiConfig;
    var contextHandleReaction = useMessageContext('SimpleReactionsList').handleReaction;
    var _b = useProcessReactions(__assign({ emojiConfig: emojiConfig }, rest)), additionalEmojiProps = _b.additionalEmojiProps, emojiData = _b.emojiData, getEmojiByReactionType = _b.getEmojiByReactionType, iHaveReactedWithReaction = _b.iHaveReactedWithReaction, latestReactions = _b.latestReactions, latestReactionTypes = _b.latestReactionTypes, supportedReactionsArePresent = _b.supportedReactionsArePresent, totalReactionCount = _b.totalReactionCount;
    var _c = React.useState(undefined), tooltipReactionType = _c[0], setTooltipReactionType = _c[1];
    var handleReaction = propHandleReaction || contextHandleReaction;
    if (!latestReactions.length)
        return null;
    if (!supportedReactionsArePresent)
        return null;
    var getUsersPerReactionType = function (type) {
        return latestReactions
            .map(function (reaction) {
            var _a, _b;
            if (reaction.type === type) {
                return ((_a = reaction.user) === null || _a === void 0 ? void 0 : _a.name) || ((_b = reaction.user) === null || _b === void 0 ? void 0 : _b.id);
            }
            return null;
        })
            .filter(Boolean);
    };
    return (React__default["default"].createElement("div", { className: 'str-chat__message-reactions-container' },
        React__default["default"].createElement("ul", { className: 'str-chat__simple-reactions-list str-chat__message-reactions', "data-testid": 'simple-reaction-list', onMouseLeave: function () { return setTooltipReactionType(undefined); } },
            latestReactionTypes.map(function (reactionType, i) {
                var _a;
                var emojiObject = getEmojiByReactionType(reactionType);
                var isOwnReaction = iHaveReactedWithReaction(reactionType);
                return emojiObject ? (React__default["default"].createElement("li", { className: clsx('str-chat__simple-reactions-list-item', {
                        'str-chat__message-reaction-own': isOwnReaction,
                    }), key: "".concat(emojiObject.id, "-").concat(i), onClick: function (event) { return handleReaction(reactionType, event); }, onKeyUp: function (event) { return handleReaction(reactionType, event); } },
                    React__default["default"].createElement("span", { onMouseEnter: function () { return setTooltipReactionType(reactionType); } },
                        React__default["default"].createElement(React.Suspense, { fallback: null },
                            React__default["default"].createElement(Emoji, __assign({ data: emojiData, emoji: emojiObject, size: 13 }, additionalEmojiProps))),
                        "\u00A0"),
                    tooltipReactionType === emojiObject.id && (React__default["default"].createElement("div", { className: 'str-chat__simple-reactions-list-tooltip str-chat__tooltip' },
                        React__default["default"].createElement("div", { className: 'arrow' }), (_a = getUsersPerReactionType(tooltipReactionType)) === null || _a === void 0 ? void 0 :
                        _a.join(', '))))) : null;
            }),
            React__default["default"].createElement("li", { className: 'str-chat__simple-reactions-list-item--last-number' }, totalReactionCount))));
};
var SimpleReactionsList = React__default["default"].memo(UnMemoizedSimpleReactionsList);

var MessageSimpleWithContext = function (props) {
    var _a;
    var additionalMessageInputProps = props.additionalMessageInputProps, clearEditingState = props.clearEditingState, editing = props.editing, endOfGroup = props.endOfGroup, firstOfGroup = props.firstOfGroup, groupedByUser = props.groupedByUser, handleAction = props.handleAction, handleOpenThread = props.handleOpenThread, handleRetry = props.handleRetry, highlighted = props.highlighted, isMyMessage = props.isMyMessage, isReactionEnabled = props.isReactionEnabled, message = props.message, onUserClick = props.onUserClick, onUserHover = props.onUserHover, reactionSelectorRef = props.reactionSelectorRef, showDetailedReactions = props.showDetailedReactions, threadList = props.threadList;
    var _b = useComponentContext('MessageSimple'), Attachment = _b.Attachment, _c = _b.Avatar, Avatar$1 = _c === void 0 ? Avatar : _c, _d = _b.EditMessageInput, EditMessageInput = _d === void 0 ? EditMessageForm : _d, _e = _b.MessageDeleted, MessageDeleted$1 = _e === void 0 ? MessageDeleted : _e, _f = _b.MessageOptions, MessageOptions$1 = _f === void 0 ? MessageOptions : _f, _g = _b.MessageRepliesCountButton, MessageRepliesCountButton$1 = _g === void 0 ? MessageRepliesCountButton : _g, _h = _b.MessageStatus, MessageStatus$1 = _h === void 0 ? MessageStatus : _h, _j = _b.MessageTimestamp, MessageTimestamp$1 = _j === void 0 ? MessageTimestamp : _j, _k = _b.ReactionSelector, ReactionSelector$1 = _k === void 0 ? ReactionSelector : _k, _l = _b.ReactionsList, ReactionsList$1 = _l === void 0 ? ReactionsList : _l;
    var themeVersion = useChatContext('MessageSimple').themeVersion;
    var hasAttachment = messageHasAttachments(message);
    var hasReactions = messageHasReactions(message);
    if (message.customType === CUSTOM_MESSAGE_TYPE.date) {
        return null;
    }
    if (message.deleted_at || message.type === 'deleted') {
        return React__default["default"].createElement(MessageDeleted$1, { message: message });
    }
    var showMetadata = !groupedByUser || endOfGroup;
    var showReplyCountButton = !threadList && !!message.reply_count;
    var allowRetry = message.status === 'failed' && message.errorStatusCode !== 403;
    var rootClassName = clsx('str-chat__message str-chat__message-simple', "str-chat__message--".concat(message.type), "str-chat__message--".concat(message.status), isMyMessage()
        ? 'str-chat__message--me str-chat__message-simple--me'
        : 'str-chat__message--other', message.text ? 'str-chat__message--has-text' : 'has-no-text', {
        'pinned-message': message.pinned,
        'str-chat__message--has-attachment': hasAttachment,
        'str-chat__message--highlighted': highlighted,
        'str-chat__message--with-reactions str-chat__message-with-thread-link': hasReactions && isReactionEnabled,
        'str-chat__message-send-can-be-retried': (message === null || message === void 0 ? void 0 : message.status) === 'failed' && (message === null || message === void 0 ? void 0 : message.errorStatusCode) !== 403,
        'str-chat__virtual-message__wrapper--end': endOfGroup,
        'str-chat__virtual-message__wrapper--first': firstOfGroup,
        'str-chat__virtual-message__wrapper--group': groupedByUser,
    });
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        editing && (React__default["default"].createElement(Modal, { onClose: clearEditingState, open: editing },
            React__default["default"].createElement(MessageInput, __assign({ clearEditingState: clearEditingState, grow: true, Input: EditMessageInput, message: message }, additionalMessageInputProps)))),
        React__default["default"].createElement("div", { className: rootClassName, key: message.id },
            themeVersion === '1' && React__default["default"].createElement(MessageStatus$1, null),
            message.user && (React__default["default"].createElement(Avatar$1, { image: message.user.image, name: message.user.name || message.user.id, onClick: onUserClick, onMouseOver: onUserHover, user: message.user })),
            React__default["default"].createElement("div", { className: clsx('str-chat__message-inner', {
                    'str-chat__simple-message--error-failed': allowRetry,
                }), "data-testid": 'message-inner', onClick: allowRetry ? function () { return handleRetry(message); } : undefined, onKeyUp: allowRetry ? function () { return handleRetry(message); } : undefined },
                React__default["default"].createElement(MessageOptions$1, null),
                React__default["default"].createElement("div", { className: 'str-chat__message-reactions-host' },
                    hasReactions && isReactionEnabled && React__default["default"].createElement(ReactionsList$1, { reverse: true }),
                    showDetailedReactions && isReactionEnabled && (React__default["default"].createElement(ReactionSelector$1, { ref: reactionSelectorRef }))),
                React__default["default"].createElement("div", { className: 'str-chat__message-bubble' },
                    ((_a = message.attachments) === null || _a === void 0 ? void 0 : _a.length) && !message.quoted_message ? (React__default["default"].createElement(Attachment, { actionHandler: handleAction, attachments: message.attachments })) : null,
                    React__default["default"].createElement(MessageText, { message: message }),
                    message.mml && (React__default["default"].createElement(MML, { actionHandler: handleAction, align: isMyMessage() ? 'right' : 'left', source: message.mml })),
                    themeVersion === '2' && React__default["default"].createElement(MessageErrorIcon, null)),
                showReplyCountButton && themeVersion === '1' && (React__default["default"].createElement(MessageRepliesCountButton$1, { onClick: handleOpenThread, reply_count: message.reply_count })),
                showMetadata && themeVersion === '1' && (React__default["default"].createElement("div", { className: 'str-chat__message-data str-chat__message-simple-data' },
                    !isMyMessage() && message.user ? (React__default["default"].createElement("span", { className: 'str-chat__message-simple-name' }, message.user.name || message.user.id)) : null,
                    React__default["default"].createElement(MessageTimestamp$1, { calendar: true, customClass: 'str-chat__message-simple-timestamp' })))),
            showReplyCountButton && themeVersion === '2' && (React__default["default"].createElement(MessageRepliesCountButton$1, { onClick: handleOpenThread, reply_count: message.reply_count })),
            showMetadata && themeVersion === '2' && (React__default["default"].createElement("div", { className: 'str-chat__message-data str-chat__message-simple-data str-chat__message-metadata' },
                React__default["default"].createElement(MessageStatus$1, null),
                !isMyMessage() && !!message.user && (React__default["default"].createElement("span", { className: 'str-chat__message-simple-name' }, message.user.name || message.user.id)),
                React__default["default"].createElement(MessageTimestamp$1, { calendar: true, customClass: 'str-chat__message-simple-timestamp' }))))));
};
var MemoizedMessageSimple = React__default["default"].memo(MessageSimpleWithContext, areMessageUIPropsEqual);
/**
 * The default UI component that renders a message and receives functionality and logic from the MessageContext.
 */
var MessageSimple = function (props) {
    var messageContext = useMessageContext('MessageSimple');
    return React__default["default"].createElement(MemoizedMessageSimple, __assign({}, messageContext, props));
};

var DropzoneInner = function (_a) {
    var children = _a.children;
    var _b = useChannelStateContext('DropzoneProvider'), acceptedFiles = _b.acceptedFiles, multipleUploads = _b.multipleUploads;
    var _c = useMessageInputContext('DropzoneProvider'), cooldownRemaining = _c.cooldownRemaining, isUploadEnabled = _c.isUploadEnabled, maxFilesLeft = _c.maxFilesLeft, uploadNewFiles = _c.uploadNewFiles;
    return (React__default["default"].createElement(reactFileUtils.ImageDropzone, { accept: acceptedFiles, disabled: !isUploadEnabled || maxFilesLeft === 0 || !!cooldownRemaining, handleFiles: uploadNewFiles, maxNumberOfFiles: maxFilesLeft, multiple: multipleUploads }, children));
};
var DropzoneProvider = function (props) {
    var cooldownTimerState = useCooldownTimer();
    var messageInputState = useMessageInputState(props);
    var messageInputContextValue = useCreateMessageInputContext(__assign(__assign(__assign({}, cooldownTimerState), messageInputState), props));
    return (React__default["default"].createElement(MessageInputContextProvider, { value: messageInputContextValue },
        React__default["default"].createElement(DropzoneInner, null, props.children)));
};

var DEFAULT_INITIAL_CHANNEL_PAGE_SIZE = 25;
var DEFAULT_NEXT_CHANNEL_PAGE_SIZE = 100;
var DEFAULT_THREAD_PAGE_SIZE = 50;

/* eslint-disable no-continue */
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
var processMessages = function (params) {
    var _a, _b;
    var enableDateSeparator = params.enableDateSeparator, hideDeletedMessages = params.hideDeletedMessages, hideNewMessageSeparator = params.hideNewMessageSeparator, lastRead = params.lastRead, messages = params.messages, setGiphyPreviewMessage = params.setGiphyPreviewMessage, userId = params.userId;
    var unread = false;
    var ephemeralMessagePresent = false;
    var lastDateSeparator;
    var newMessages = [];
    for (var i = 0; i < messages.length; i += 1) {
        var message = messages[i];
        if (hideDeletedMessages && message.type === 'deleted') {
            continue;
        }
        if (setGiphyPreviewMessage && message.type === 'ephemeral' && message.command === 'giphy') {
            ephemeralMessagePresent = true;
            setGiphyPreviewMessage(message);
            continue;
        }
        var messageDate = (message.created_at && isDate(message.created_at) && message.created_at.toDateString()) || '';
        var previousMessage = messages[i - 1];
        var prevMessageDate = messageDate;
        if (enableDateSeparator && (previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.created_at) && isDate(previousMessage.created_at)) {
            prevMessageDate = previousMessage.created_at.toDateString();
        }
        if (!unread && !hideNewMessageSeparator) {
            unread = (lastRead && message.created_at && new Date(lastRead) < message.created_at) || false;
            // do not show date separator for current user's messages
            if (enableDateSeparator && unread && ((_a = message.user) === null || _a === void 0 ? void 0 : _a.id) !== userId) {
                newMessages.push({
                    customType: CUSTOM_MESSAGE_TYPE.date,
                    date: message.created_at,
                    id: makeDateMessageId(message.created_at),
                    unread: unread,
                });
            }
        }
        if (enableDateSeparator &&
            (i === 0 || // always put date separator before the first message
                messageDate !== prevMessageDate || // add date separator btw. 2 messages created on different date
                // if hiding deleted messages replace the previous deleted message(s) with A separator if the last rendered message was created on different date
                (hideDeletedMessages &&
                    (previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.type) === 'deleted' &&
                    lastDateSeparator !== messageDate)) &&
            ((_b = newMessages === null || newMessages === void 0 ? void 0 : newMessages[newMessages.length - 1]) === null || _b === void 0 ? void 0 : _b.customType) !== CUSTOM_MESSAGE_TYPE.date // do not show two date separators in a row)
        ) {
            lastDateSeparator = messageDate;
            newMessages.push({
                customType: CUSTOM_MESSAGE_TYPE.date,
                date: message.created_at,
                id: makeDateMessageId(message.created_at),
            }, message);
        }
        else {
            newMessages.push(message);
        }
    }
    // clean up the giphy preview component state after a Cancel action
    if (setGiphyPreviewMessage && !ephemeralMessagePresent) {
        setGiphyPreviewMessage(undefined);
    }
    return newMessages;
};
var makeDateMessageId = function (date) {
    var idSuffix;
    try {
        idSuffix = !date ? nanoid.nanoid() : date instanceof Date ? date.toISOString() : date;
    }
    catch (e) {
        idSuffix = nanoid.nanoid();
    }
    return "".concat(CUSTOM_MESSAGE_TYPE.date, "-").concat(idSuffix);
};
// fast since it usually iterates just the last few messages
var getLastReceived = function (messages) {
    for (var i = messages.length - 1; i > 0; i -= 1) {
        if (messages[i].status === 'received') {
            return messages[i].id;
        }
    }
    return null;
};
var getReadStates = function (messages, read, returnAllReadData) {
    if (read === void 0) { read = {}; }
    // create object with empty array for each message id
    var readData = {};
    Object.values(read).forEach(function (readState) {
        if (!readState.last_read)
            return;
        var userLastReadMsgId;
        // loop messages sent by current user and add read data for other users in channel
        messages.forEach(function (msg) {
            if (msg.updated_at && msg.updated_at < readState.last_read) {
                userLastReadMsgId = msg.id;
                // if true, save other user's read data for all messages they've read
                if (returnAllReadData) {
                    if (!readData[userLastReadMsgId]) {
                        readData[userLastReadMsgId] = [];
                    }
                    readData[userLastReadMsgId].push(readState.user);
                }
            }
        });
        // if true, only save read data for other user's last read message
        if (userLastReadMsgId && !returnAllReadData) {
            if (!readData[userLastReadMsgId]) {
                readData[userLastReadMsgId] = [];
            }
            readData[userLastReadMsgId].push(readState.user);
        }
    });
    return readData;
};
var insertIntro = function (messages, headerPosition) {
    var newMessages = messages;
    var intro = {
        customType: CUSTOM_MESSAGE_TYPE.intro,
    };
    // if no headerPosition is set, HeaderComponent will go at the top
    if (!headerPosition) {
        newMessages.unshift(intro);
        return newMessages;
    }
    // if no messages, intro gets inserted
    if (!newMessages.length) {
        newMessages.unshift(intro);
        return newMessages;
    }
    // else loop over the messages
    for (var i = 0; i < messages.length; i += 1) {
        var message = messages[i];
        var messageTime = message.created_at && isDate(message.created_at) ? message.created_at.getTime() : null;
        var nextMessage = messages[i + 1];
        var nextMessageTime = nextMessage.created_at && isDate(nextMessage.created_at)
            ? nextMessage.created_at.getTime()
            : null;
        // header position is smaller than message time so comes after;
        if (messageTime && messageTime < headerPosition) {
            // if header position is also smaller than message time continue;
            if (nextMessageTime && nextMessageTime < headerPosition) {
                if (messages[i + 1] && messages[i + 1].customType === CUSTOM_MESSAGE_TYPE.date)
                    continue;
                if (!nextMessageTime) {
                    newMessages.push(intro);
                    return newMessages;
                }
            }
            else {
                newMessages.splice(i + 1, 0, intro);
                return newMessages;
            }
        }
    }
    return newMessages;
};
var getGroupStyles = function (message, previousMessage, nextMessage, noGroupByUser) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (message.customType === CUSTOM_MESSAGE_TYPE.date)
        return '';
    if (message.customType === CUSTOM_MESSAGE_TYPE.intro)
        return '';
    if (noGroupByUser || ((_a = message.attachments) === null || _a === void 0 ? void 0 : _a.length) !== 0)
        return 'single';
    var isTopMessage = !previousMessage ||
        previousMessage.customType === CUSTOM_MESSAGE_TYPE.intro ||
        previousMessage.customType === CUSTOM_MESSAGE_TYPE.date ||
        previousMessage.type === 'system' ||
        ((_b = previousMessage.attachments) === null || _b === void 0 ? void 0 : _b.length) !== 0 ||
        ((_c = message.user) === null || _c === void 0 ? void 0 : _c.id) !== ((_d = previousMessage.user) === null || _d === void 0 ? void 0 : _d.id) ||
        previousMessage.type === 'error' ||
        previousMessage.deleted_at ||
        (message.reaction_counts && Object.keys(message.reaction_counts).length > 0);
    var isBottomMessage = !nextMessage ||
        nextMessage.customType === CUSTOM_MESSAGE_TYPE.date ||
        nextMessage.type === 'system' ||
        nextMessage.customType === CUSTOM_MESSAGE_TYPE.intro ||
        ((_e = nextMessage.attachments) === null || _e === void 0 ? void 0 : _e.length) !== 0 ||
        ((_f = message.user) === null || _f === void 0 ? void 0 : _f.id) !== ((_g = nextMessage.user) === null || _g === void 0 ? void 0 : _g.id) ||
        nextMessage.type === 'error' ||
        nextMessage.deleted_at ||
        (nextMessage.reaction_counts && Object.keys(nextMessage.reaction_counts).length > 0);
    if (!isTopMessage && !isBottomMessage) {
        if (message.deleted_at || message.type === 'error')
            return 'single';
        return 'middle';
    }
    if (isBottomMessage) {
        if (isTopMessage || message.deleted_at || message.type === 'error')
            return 'single';
        return 'bottom';
    }
    if (isTopMessage)
        return 'top';
    return '';
};
// "Probably" included, because it may happen that the last page was returned and it has exactly the size of the limit
// but the back-end cannot provide us with information on whether it has still more messages in the DB
// FIXME: once the pagination state is moved from Channel to MessageList, these should be moved as well.
//  The MessageList should have configurable the limit for performing the requests.
//  This parameter would then be used within these functions
var hasMoreMessagesProbably = function (returnedCountMessages, limit) {
    return returnedCountMessages === limit;
};
var hasNotMoreMessages = function (returnedCountMessages, limit) {
    return returnedCountMessages < limit;
};

var compressed=true;var categories=[{id:"people",name:"Smileys & People",emojis:["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","shushing_face","thinking_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","smirk","unamused","face_with_rolling_eyes","grimacing","lying_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","exploding_head","face_with_cowboy_hat","partying_face","sunglasses","nerd_face","face_with_monocle","confused","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","ok_hand","pinching_hand","v","crossed_fingers","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","tooth","bone","eyes","eye","tongue","lips","baby","child","boy","girl","adult","man","bearded_person","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","curly_haired_woman","white_haired_woman","bald_woman","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","man-frowning","woman-frowning","man-pouting","woman-pouting","man-gesturing-no","woman-gesturing-no","man-gesturing-ok","woman-gesturing-ok","man-tipping-hand","woman-tipping-hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","man-bowing","woman-bowing","man-facepalming","woman-facepalming","man-shrugging","woman-shrugging","male-doctor","female-doctor","male-student","female-student","male-teacher","female-teacher","male-judge","female-judge","male-farmer","female-farmer","male-cook","female-cook","male-mechanic","female-mechanic","male-factory-worker","female-factory-worker","male-office-worker","female-office-worker","male-scientist","female-scientist","male-technologist","female-technologist","male-singer","female-singer","male-artist","female-artist","male-pilot","female-pilot","male-astronaut","female-astronaut","male-firefighter","female-firefighter","male-police-officer","female-police-officer","male-guard","female-guard","male-construction-worker","female-construction-worker","prince","princess","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","man-getting-massage","woman-getting-massage","man-getting-haircut","woman-getting-haircut","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","man_with_probing_cane","woman_with_probing_cane","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","man-surfing","woman-surfing","man-rowing-boat","woman-rowing-boat","man-swimming","woman-swimming","man-biking","woman-biking","man-mountain-biking","woman-mountain-biking","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","man-playing-water-polo","woman-playing-water-polo","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","couple","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","footprints","kiss","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","brown_heart","black_heart","white_heart","100","anger","boom","dizzy","sweat_drops","dash","hole","bomb","speech_balloon","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{id:"nature",name:"Animals & Nature",emojis:["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","flamingo","peacock","parrot","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","mosquito","microbe","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{id:"foods",name:"Food & Drink",emojis:["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","leafy_green","broccoli","garlic","onion","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{id:"activity",name:"Activities",emojis:["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","8ball","crystal_ball","nazar_amulet","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","yarn"]},{id:"places",name:"Travel & Places",emojis:["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","busstop","motorway","railway_track","oil_drum","fuelpump","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{id:"objects",name:"Objects",emojis:["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","toolbox","magnet","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","stethoscope","door","bed","couch_and_lamp","chair","toilet","shower","bathtub","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","soap","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","funeral_urn","moyai"]},{id:"symbols",name:"Symbols",emojis:["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","medical_symbol","infinity","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","tm","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{id:"flags",name:"Flags",emojis:["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}];var emojis={"100":{a:"Hundred Points Symbol",b:"1F4AF",j:["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],k:[26,5],o:2},"1234":{a:"Input Symbol for Numbers",b:"1F522",j:["numbers","blue-square"],k:[28,5],o:2},grinning:{a:"Grinning Face",b:"1F600",j:["face","smile","happy","joy",":D","grin"],k:[30,35],m:":D",o:2},monkey_face:{a:"Monkey Face",b:"1F435",j:["animal","nature","circus"],k:[12,25],l:[":o)"],o:2},grapes:{a:"Grapes",b:"1F347",j:["fruit","food","wine"],k:[6,31],o:2},eyeglasses:{a:"Eyeglasses",b:"1F453",j:["fashion","accessories","eyesight","nerdy","dork","geek"],k:[14,7],o:2},checkered_flag:{a:"Chequered Flag",b:"1F3C1",j:["contest","finishline","race","gokart"],k:[8,39],o:2},jack_o_lantern:{a:"Jack-O-Lantern",b:"1F383",j:["halloween","light","pumpkin","creepy","fall"],k:[7,34],o:2},wave:{a:"Waving Hand Sign",b:"1F44B",j:["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],k:[13,26],o:2},earth_africa:{a:"Earth Globe Europe-Africa",b:"1F30D",j:["globe","world","international"],k:[5,32],o:2},atm:{a:"Automated Teller Machine",b:"1F3E7",j:["money","sales","cash","blue-square","payment","bank"],k:[11,1],o:2},melon:{a:"Melon",b:"1F348",j:["fruit","nature","food"],k:[6,32],o:2},triangular_flag_on_post:{a:"Triangular Flag on Post",b:"1F6A9",j:["mark","milestone","place"],k:[35,0],o:2},put_litter_in_its_place:{a:"Put Litter in Its Place Symbol",b:"1F6AE",j:["blue-square","sign","human","info"],k:[35,5],o:2},christmas_tree:{a:"Christmas Tree",b:"1F384",j:["festival","vacation","december","xmas","celebration"],k:[7,35],o:2},monkey:{a:"Monkey",b:"1F412",j:["animal","nature","banana","circus"],k:[11,46],o:2},earth_americas:{a:"Earth Globe Americas",b:"1F30E",j:["globe","world","USA","international"],k:[5,33],o:2},dark_sunglasses:{a:"Dark Sunglasses",b:"1F576-FE0F",c:"1F576",j:["face","cool","accessories"],k:[29,33],o:2},raised_back_of_hand:{a:"Raised Back of Hand",b:"1F91A",j:["fingers","raised","backhand"],k:[37,43],o:4},smiley:{a:"Smiling Face with Open Mouth",b:"1F603",j:["face","happy","joy","haha",":D",":)","smile","funny"],k:[30,38],l:["=)","=-)"],m:":)",o:2},earth_asia:{a:"Earth Globe Asia-Australia",b:"1F30F",j:["globe","world","east","international"],k:[5,34],o:2},crossed_flags:{a:"Crossed Flags",b:"1F38C",j:["japanese","nation","country","border"],k:[7,48],o:2},watermelon:{a:"Watermelon",b:"1F349",j:["fruit","food","picnic","summer"],k:[6,33],o:2},goggles:{a:"Goggles",b:"1F97D",k:[42,15],o:11},raised_hand_with_fingers_splayed:{a:"Raised Hand with Fingers Splayed",b:"1F590-FE0F",c:"1F590",j:["hand","fingers","palm"],k:[29,48],o:2},smile:{a:"Smiling Face with Open Mouth and Smiling Eyes",b:"1F604",j:["face","happy","joy","funny","haha","laugh","like",":D",":)"],k:[30,39],l:["C:","c:",":D",":-D"],m:":)",o:2},potable_water:{a:"Potable Water Symbol",b:"1F6B0",j:["blue-square","liquid","restroom","cleaning","faucet"],k:[35,7],o:2},fireworks:{a:"Fireworks",b:"1F386",j:["photo","festival","carnival","congratulations"],k:[7,42],o:2},gorilla:{a:"Gorilla",b:"1F98D",j:["animal","nature","circus"],k:[42,31],o:4},lab_coat:{a:"Lab Coat",b:"1F97C",k:[42,14],o:11},tangerine:{a:"Tangerine",b:"1F34A",j:["food","fruit","nature","orange"],k:[6,34],o:2},wheelchair:{a:"Wheelchair Symbol",b:"267F",j:["blue-square","disabled","a11y","accessibility"],k:[53,40],o:2},waving_black_flag:{a:"Waving Black Flag",b:"1F3F4",k:[11,17],o:2},orangutan:{a:"Orangutan",b:"1F9A7",k:[42,55],o:12},sparkler:{a:"Firework Sparkler",b:"1F387",j:["stars","night","shine"],k:[7,43],o:2},globe_with_meridians:{a:"Globe with Meridians",b:"1F310",j:["earth","international","world","internet","interweb","i18n"],k:[5,35],o:2},grin:{a:"Grinning Face with Smiling Eyes",b:"1F601",j:["face","happy","smile","joy","kawaii"],k:[30,36],o:2},hand:{a:"Raised Hand",b:"270B",k:[54,49],n:["raised_hand"],o:2},firecracker:{a:"Firecracker",b:"1F9E8",k:[51,27],o:11},lemon:{a:"Lemon",b:"1F34B",j:["fruit","nature"],k:[6,35],o:2},dog:{a:"Dog Face",b:"1F436",j:["animal","friend","nature","woof","puppy","pet","faithful"],k:[12,26],o:2},mens:{a:"Mens Symbol",b:"1F6B9",j:["toilet","restroom","wc","blue-square","gender","male"],k:[36,10],o:2},"spock-hand":{a:"Raised Hand with Part Between Middle and Ring Fingers",b:"1F596",k:[30,3],o:2},world_map:{a:"World Map",b:"1F5FA-FE0F",c:"1F5FA",j:["location","direction"],k:[30,29],o:2},laughing:{a:"Smiling Face with Open Mouth and Tightly-Closed Eyes",b:"1F606",j:["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],k:[30,41],l:[":>",":->"],n:["satisfied"],o:2},waving_white_flag:{a:"Waving White Flag",b:"1F3F3-FE0F",c:"1F3F3",k:[11,12],o:2},safety_vest:{a:"Safety Vest",b:"1F9BA",k:[43,54],o:12},sweat_smile:{a:"Smiling Face with Open Mouth and Cold Sweat",b:"1F605",j:["face","hot","happy","laugh","sweat","smile","relief"],k:[30,40],o:2},sparkles:{a:"Sparkles",b:"2728",j:["stars","shine","shiny","cool","awesome","good","magic"],k:[55,16],o:2},banana:{a:"Banana",b:"1F34C",j:["fruit","food","monkey"],k:[6,36],o:2},"rainbow-flag":{a:"Rainbow Flag",b:"1F3F3-FE0F-200D-1F308",c:"1F3F3-200D-1F308",k:[11,11],o:4},ok_hand:{a:"Ok Hand Sign",b:"1F44C",j:["fingers","limbs","perfect","ok","okay"],k:[13,32],o:2},japan:{a:"Silhouette of Japan",b:"1F5FE",j:["nation","country","japanese","asia"],k:[30,33],o:2},dog2:{a:"Dog",b:"1F415",j:["animal","nature","friend","doge","pet","faithful"],k:[11,50],o:2},womens:{a:"Womens Symbol",b:"1F6BA",j:["purple-square","woman","female","toilet","loo","restroom","gender"],k:[36,11],o:2},necktie:{a:"Necktie",b:"1F454",j:["shirt","suitup","formal","fashion","cloth","business"],k:[14,8],o:2},pirate_flag:{a:"Pirate Flag",b:"1F3F4-200D-2620-FE0F",c:"1F3F4-200D-2620",k:[11,13],o:11},guide_dog:{a:"Guide Dog",b:"1F9AE",k:[43,2],o:12},restroom:{a:"Restroom",b:"1F6BB",j:["blue-square","toilet","refresh","wc","gender"],k:[36,12],o:2},compass:{a:"Compass",b:"1F9ED",k:[51,32],o:11},rolling_on_the_floor_laughing:{a:"Rolling on the Floor Laughing",b:"1F923",k:[38,20],o:4},balloon:{a:"Balloon",b:"1F388",j:["party","celebration","birthday","circus"],k:[7,44],o:2},pinching_hand:{a:"Pinching Hand",b:"1F90F",k:[37,17],o:12},pineapple:{a:"Pineapple",b:"1F34D",j:["fruit","nature","food"],k:[6,37],o:2},shirt:{a:"T-Shirt",b:"1F455",k:[14,9],n:["tshirt"],o:2},service_dog:{a:"Service Dog",b:"1F415-200D-1F9BA",k:[11,49],o:12},baby_symbol:{a:"Baby Symbol",b:"1F6BC",j:["orange-square","child"],k:[36,13],o:2},joy:{a:"Face with Tears of Joy",b:"1F602",j:["face","cry","tears","weep","happy","happytears","haha"],k:[30,37],o:2},tada:{a:"Party Popper",b:"1F389",j:["party","congratulations","birthday","magic","circus","celebration"],k:[7,45],o:2},mango:{a:"Mango",b:"1F96D",k:[42,3],o:11},v:{a:"Victory Hand",b:"270C-FE0F",c:"270C",j:["fingers","ohyeah","hand","peace","victory","two"],k:[54,55],o:2},snow_capped_mountain:{a:"Snow Capped Mountain",b:"1F3D4-FE0F",c:"1F3D4",k:[10,39],o:2},"flag-ac":{a:"Ascension Island Flag",b:"1F1E6-1F1E8",k:[0,31],o:2},jeans:{a:"Jeans",b:"1F456",j:["fashion","shopping"],k:[14,10],o:2},poodle:{a:"Poodle",b:"1F429",j:["dog","animal","101","nature","pet"],k:[12,13],o:2},crossed_fingers:{a:"Hand with Index and Middle Fingers Crossed",b:"1F91E",j:["good","lucky"],k:[38,5],n:["hand_with_index_and_middle_fingers_crossed"],o:4},"flag-ad":{a:"Andorra Flag",b:"1F1E6-1F1E9",k:[0,32],o:2},slightly_smiling_face:{a:"Slightly Smiling Face",b:"1F642",j:["face","smile"],k:[31,44],l:[":)","(:",":-)"],o:2},apple:{a:"Red Apple",b:"1F34E",j:["fruit","mac","school"],k:[6,38],o:2},wc:{a:"Water Closet",b:"1F6BE",j:["toilet","restroom","blue-square"],k:[36,15],o:2},scarf:{a:"Scarf",b:"1F9E3",k:[51,22],o:5},mountain:{a:"Mountain",b:"26F0-FE0F",c:"26F0",j:["photo","nature","environment"],k:[54,11],o:2},confetti_ball:{a:"Confetti Ball",b:"1F38A",j:["festival","party","birthday","circus"],k:[7,46],o:2},i_love_you_hand_sign:{a:"I Love You Hand Sign",b:"1F91F",k:[38,11],o:5},wolf:{a:"Wolf Face",b:"1F43A",j:["animal","nature","wild"],k:[12,30],o:2},gloves:{a:"Gloves",b:"1F9E4",k:[51,23],o:5},"flag-ae":{a:"United Arab Emirates Flag",b:"1F1E6-1F1EA",k:[0,33],o:2},upside_down_face:{a:"Upside-Down Face",b:"1F643",j:["face","flipped","silly","smile"],k:[31,45],o:2},green_apple:{a:"Green Apple",b:"1F34F",j:["fruit","nature"],k:[6,39],o:2},passport_control:{a:"Passport Control",b:"1F6C2",j:["custom","blue-square"],k:[36,24],o:2},volcano:{a:"Volcano",b:"1F30B",j:["photo","nature","disaster"],k:[5,30],o:2},tanabata_tree:{a:"Tanabata Tree",b:"1F38B",j:["plant","nature","branch","summer"],k:[7,47],o:2},customs:{a:"Customs",b:"1F6C3",j:["passport","border","blue-square"],k:[36,25],o:2},coat:{a:"Coat",b:"1F9E5",k:[51,24],o:5},wink:{a:"Winking Face",b:"1F609",j:["face","happy","mischievous","secret",";)","smile","eye"],k:[30,44],l:[";)",";-)"],m:";)",o:2},bamboo:{a:"Pine Decoration",b:"1F38D",j:["plant","nature","vegetable","panda","pine_decoration"],k:[7,49],o:2},"flag-af":{a:"Afghanistan Flag",b:"1F1E6-1F1EB",k:[0,34],o:2},fox_face:{a:"Fox Face",b:"1F98A",j:["animal","nature","face"],k:[42,28],o:4},pear:{a:"Pear",b:"1F350",j:["fruit","nature","food"],k:[6,40],o:2},mount_fuji:{a:"Mount Fuji",b:"1F5FB",j:["photo","mountain","nature","japanese"],k:[30,30],o:2},the_horns:{a:"Sign of the Horns",b:"1F918",k:[37,31],n:["sign_of_the_horns"],o:2},call_me_hand:{a:"Call Me Hand",b:"1F919",j:["hands","gesture"],k:[37,37],o:4},"flag-ag":{a:"Antigua & Barbuda Flag",b:"1F1E6-1F1EC",k:[0,35],o:2},raccoon:{a:"Raccoon",b:"1F99D",k:[42,47],o:11},dolls:{a:"Japanese Dolls",b:"1F38E",j:["japanese","toy","kimono"],k:[7,50],o:2},blush:{a:"Smiling Face with Smiling Eyes",b:"1F60A",j:["face","smile","happy","flushed","crush","embarrassed","shy","joy"],k:[30,45],m:":)",o:2},peach:{a:"Peach",b:"1F351",j:["fruit","nature","food"],k:[6,41],o:2},baggage_claim:{a:"Baggage Claim",b:"1F6C4",j:["blue-square","airport","transport"],k:[36,26],o:2},socks:{a:"Socks",b:"1F9E6",k:[51,25],o:5},camping:{a:"Camping",b:"1F3D5-FE0F",c:"1F3D5",j:["photo","outdoors","tent"],k:[10,40],o:2},dress:{a:"Dress",b:"1F457",j:["clothes","fashion","shopping"],k:[14,11],o:2},beach_with_umbrella:{a:"Beach with Umbrella",b:"1F3D6-FE0F",c:"1F3D6",k:[10,41],o:2},cherries:{a:"Cherries",b:"1F352",j:["food","fruit"],k:[6,42],o:2},cat:{a:"Cat Face",b:"1F431",j:["animal","meow","nature","pet","kitten"],k:[12,21],o:2},point_left:{a:"White Left Pointing Backhand Index",b:"1F448",j:["direction","fingers","hand","left"],k:[13,8],o:2},left_luggage:{a:"Left Luggage",b:"1F6C5",j:["blue-square","travel"],k:[36,27],o:2},"flag-ai":{a:"Anguilla Flag",b:"1F1E6-1F1EE",k:[0,36],o:2},innocent:{a:"Smiling Face with Halo",b:"1F607",j:["face","angel","heaven","halo"],k:[30,42],o:2},flags:{a:"Carp Streamer",b:"1F38F",j:["fish","japanese","koinobori","carp","banner"],k:[7,51],o:2},warning:{a:"Warning Sign",b:"26A0-FE0F",c:"26A0",j:["exclamation","wip","alert","error","problem","issue"],k:[53,50],o:2},strawberry:{a:"Strawberry",b:"1F353",j:["fruit","food","nature"],k:[6,43],o:2},point_right:{a:"White Right Pointing Backhand Index",b:"1F449",j:["fingers","hand","direction","right"],k:[13,14],o:2},desert:{a:"Desert",b:"1F3DC-FE0F",c:"1F3DC",j:["photo","warm","saharah"],k:[10,47],o:2},kimono:{a:"Kimono",b:"1F458",j:["dress","fashion","women","female","japanese"],k:[14,12],o:2},"flag-al":{a:"Albania Flag",b:"1F1E6-1F1F1",k:[0,37],o:2},wind_chime:{a:"Wind Chime",b:"1F390",j:["nature","ding","spring","bell"],k:[7,52],o:2},smiling_face_with_3_hearts:{a:"Smiling Face with Smiling Eyes and Three Hearts",b:"1F970",k:[42,6],o:11},cat2:{a:"Cat",b:"1F408",j:["animal","meow","pet","cats"],k:[11,36],o:2},rice_scene:{a:"Moon Viewing Ceremony",b:"1F391",j:["photo","japan","asia","tsukimi"],k:[7,53],o:2},heart_eyes:{a:"Smiling Face with Heart-Shaped Eyes",b:"1F60D",j:["face","love","like","affection","valentines","infatuation","crush","heart"],k:[30,48],o:2},sari:{a:"Sari",b:"1F97B",k:[42,13],o:12},"flag-am":{a:"Armenia Flag",b:"1F1E6-1F1F2",k:[0,38],o:2},lion_face:{a:"Lion Face",b:"1F981",k:[42,19],o:2},desert_island:{a:"Desert Island",b:"1F3DD-FE0F",c:"1F3DD",j:["photo","tropical","mojito"],k:[10,48],o:2},point_up_2:{a:"White Up Pointing Backhand Index",b:"1F446",j:["fingers","hand","direction","up"],k:[12,53],o:2},kiwifruit:{a:"Kiwifruit",b:"1F95D",k:[41,44],o:4},children_crossing:{a:"Children Crossing",b:"1F6B8",j:["school","warning","danger","sign","driving","yellow-diamond"],k:[36,9],o:2},national_park:{a:"National Park",b:"1F3DE-FE0F",c:"1F3DE",j:["photo","environment","nature"],k:[10,49],o:2},no_entry:{a:"No Entry",b:"26D4",j:["limit","security","privacy","bad","denied","stop","circle"],k:[54,8],o:2},"one-piece_swimsuit":{a:"One-Piece Swimsuit",b:"1FA71",k:[51,52],o:12},tiger:{a:"Tiger Face",b:"1F42F",j:["animal","cat","danger","wild","nature","roar"],k:[12,19],o:2},red_envelope:{a:"Red Gift Envelope",b:"1F9E7",k:[51,26],o:11},"star-struck":{a:"Grinning Face with Star Eyes",b:"1F929",k:[38,43],n:["grinning_face_with_star_eyes"],o:5},middle_finger:{a:"Reversed Hand with Middle Finger Extended",b:"1F595",k:[29,54],n:["reversed_hand_with_middle_finger_extended"],o:2},"flag-ao":{a:"Angola Flag",b:"1F1E6-1F1F4",k:[0,39],o:2},tomato:{a:"Tomato",b:"1F345",j:["fruit","vegetable","nature","food"],k:[6,29],o:2},coconut:{a:"Coconut",b:"1F965",k:[41,52],o:5},ribbon:{a:"Ribbon",b:"1F380",j:["decoration","pink","girl","bowtie"],k:[7,31],o:2},no_entry_sign:{a:"No Entry Sign",b:"1F6AB",j:["forbid","stop","limit","denied","disallow","circle"],k:[35,2],o:2},point_down:{a:"White Down Pointing Backhand Index",b:"1F447",j:["fingers","hand","direction","down"],k:[13,2],o:2},"flag-aq":{a:"Antarctica Flag",b:"1F1E6-1F1F6",k:[0,40],o:2},briefs:{a:"Briefs",b:"1FA72",k:[51,53],o:12},kissing_heart:{a:"Face Throwing a Kiss",b:"1F618",j:["face","love","like","affection","valentines","infatuation","kiss"],k:[31,2],l:[":*",":-*"],o:2},tiger2:{a:"Tiger",b:"1F405",j:["animal","nature","roar"],k:[11,33],o:2},stadium:{a:"Stadium",b:"1F3DF-FE0F",c:"1F3DF",j:["photo","place","sports","concert","venue"],k:[10,50],o:2},leopard:{a:"Leopard",b:"1F406",j:["animal","nature"],k:[11,34],o:2},no_bicycles:{a:"No Bicycles",b:"1F6B3",j:["cyclist","prohibited","circle"],k:[35,10],o:2},kissing:{a:"Kissing Face",b:"1F617",j:["love","like","face","3","valentines","infatuation","kiss"],k:[31,1],o:2},"flag-ar":{a:"Argentina Flag",b:"1F1E6-1F1F7",k:[0,41],o:2},avocado:{a:"Avocado",b:"1F951",j:["fruit","food"],k:[41,32],o:4},point_up:{a:"White Up Pointing Index",b:"261D-FE0F",c:"261D",j:["hand","fingers","direction","up"],k:[53,2],o:2},gift:{a:"Wrapped Present",b:"1F381",j:["present","birthday","christmas","xmas"],k:[7,32],o:2},classical_building:{a:"Classical Building",b:"1F3DB-FE0F",c:"1F3DB",j:["art","culture","history"],k:[10,46],o:2},shorts:{a:"Shorts",b:"1FA73",k:[51,54],o:12},"+1":{a:"Thumbs Up Sign",b:"1F44D",j:["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],k:[13,38],n:["thumbsup"],o:2},horse:{a:"Horse Face",b:"1F434",j:["animal","brown","nature"],k:[12,24],o:2},bikini:{a:"Bikini",b:"1F459",j:["swimming","female","woman","girl","fashion","beach","summer"],k:[14,13],o:2},no_smoking:{a:"No Smoking Symbol",b:"1F6AD",j:["cigarette","blue-square","smell","smoke"],k:[35,4],o:2},eggplant:{a:"Aubergine",b:"1F346",j:["vegetable","nature","food","aubergine"],k:[6,30],o:2},"flag-as":{a:"American Samoa Flag",b:"1F1E6-1F1F8",k:[0,42],o:2},reminder_ribbon:{a:"Reminder Ribbon",b:"1F397-FE0F",c:"1F397",j:["sports","cause","support","awareness"],k:[8,0],o:2},building_construction:{a:"Building Construction",b:"1F3D7-FE0F",c:"1F3D7",j:["wip","working","progress"],k:[10,42],o:2},relaxed:{a:"White Smiling Face",b:"263A-FE0F",c:"263A",j:["face","blush","massage","happiness"],k:[53,17],o:2},kissing_closed_eyes:{a:"Kissing Face with Closed Eyes",b:"1F61A",j:["face","love","like","affection","valentines","infatuation","kiss"],k:[31,4],o:2},"-1":{a:"Thumbs Down Sign",b:"1F44E",j:["thumbsdown","no","dislike","hand"],k:[13,44],n:["thumbsdown"],o:2},admission_tickets:{a:"Admission Tickets",b:"1F39F-FE0F",c:"1F39F",k:[8,5],o:2},"flag-at":{a:"Austria Flag",b:"1F1E6-1F1F9",k:[0,43],o:2},womans_clothes:{a:"Womans Clothes",b:"1F45A",j:["fashion","shopping_bags","female"],k:[14,14],o:2},do_not_litter:{a:"Do Not Litter Symbol",b:"1F6AF",j:["trash","bin","garbage","circle"],k:[35,6],o:2},potato:{a:"Potato",b:"1F954",j:["food","tuber","vegatable","starch"],k:[41,35],o:4},racehorse:{a:"Horse",b:"1F40E",j:["animal","gamble","luck"],k:[11,42],o:2},bricks:{a:"Brick",b:"1F9F1",k:[51,36],o:11},fist:{a:"Raised Fist",b:"270A",j:["fingers","hand","grasp"],k:[54,43],o:2},house_buildings:{a:"House Buildings",b:"1F3D8-FE0F",c:"1F3D8",k:[10,43],o:2},carrot:{a:"Carrot",b:"1F955",j:["vegetable","food","orange"],k:[41,36],o:4},ticket:{a:"Ticket",b:"1F3AB",j:["event","concert","pass"],k:[8,17],o:2},"flag-au":{a:"Australia Flag",b:"1F1E6-1F1FA",k:[0,44],o:2},"non-potable_water":{a:"Non-Potable Water Symbol",b:"1F6B1",j:["drink","faucet","tap","circle"],k:[35,8],o:2},purse:{a:"Purse",b:"1F45B",j:["fashion","accessories","money","sales","shopping"],k:[14,15],o:2},unicorn_face:{a:"Unicorn Face",b:"1F984",k:[42,22],o:2},kissing_smiling_eyes:{a:"Kissing Face with Smiling Eyes",b:"1F619",j:["face","affection","valentines","infatuation","kiss"],k:[31,3],o:2},facepunch:{a:"Fisted Hand Sign",b:"1F44A",j:["angry","violence","fist","hit","attack","hand"],k:[13,20],n:["punch"],o:2},medal:{a:"Medal",b:"1F396-FE0F",c:"1F396",k:[7,56],o:2},zebra_face:{a:"Zebra Face",b:"1F993",k:[42,37],o:5},handbag:{a:"Handbag",b:"1F45C",j:["fashion","accessory","accessories","shopping"],k:[14,16],o:2},derelict_house_building:{a:"Derelict House Building",b:"1F3DA-FE0F",c:"1F3DA",k:[10,45],o:2},yum:{a:"Face Savouring Delicious Food",b:"1F60B",j:["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],k:[30,46],o:2},corn:{a:"Ear of Maize",b:"1F33D",j:["food","vegetable","plant"],k:[6,21],o:2},"flag-aw":{a:"Aruba Flag",b:"1F1E6-1F1FC",k:[0,45],o:2},no_pedestrians:{a:"No Pedestrians",b:"1F6B7",j:["rules","crossing","walking","circle"],k:[36,8],o:2},house:{a:"House Building",b:"1F3E0",j:["building","home"],k:[10,51],o:2},hot_pepper:{a:"Hot Pepper",b:"1F336-FE0F",c:"1F336",j:["food","spicy","chilli","chili"],k:[6,14],o:2},"flag-ax":{a:"Åland Islands Flag",b:"1F1E6-1F1FD",k:[0,46],o:2},trophy:{a:"Trophy",b:"1F3C6",j:["win","award","contest","place","ftw","ceremony"],k:[9,26],o:2},deer:{a:"Deer",b:"1F98C",j:["animal","nature","horns","venison"],k:[42,30],o:4},"left-facing_fist":{a:"Left-Facing Fist",b:"1F91B",k:[37,49],o:4},stuck_out_tongue:{a:"Face with Stuck-out Tongue",b:"1F61B",j:["face","prank","childish","playful","mischievous","smile","tongue"],k:[31,5],l:[":p",":-p",":P",":-P",":b",":-b"],m:":p",o:2},pouch:{a:"Pouch",b:"1F45D",j:["bag","accessories","shopping"],k:[14,17],o:2},no_mobile_phones:{a:"No Mobile Phones",b:"1F4F5",j:["iphone","mute","circle"],k:[27,18],o:2},stuck_out_tongue_winking_eye:{a:"Face with Stuck-out Tongue and Winking Eye",b:"1F61C",j:["face","prank","childish","playful","mischievous","smile","wink","tongue"],k:[31,6],l:[";p",";-p",";b",";-b",";P",";-P"],m:";p",o:2},sports_medal:{a:"Sports Medal",b:"1F3C5",k:[9,25],o:2},cucumber:{a:"Cucumber",b:"1F952",j:["fruit","food","pickle"],k:[41,33],o:4},cow:{a:"Cow Face",b:"1F42E",j:["beef","ox","animal","nature","moo","milk"],k:[12,18],o:2},underage:{a:"No One Under Eighteen Symbol",b:"1F51E",j:["18","drink","pub","night","minor","circle"],k:[28,1],o:2},"flag-az":{a:"Azerbaijan Flag",b:"1F1E6-1F1FF",k:[0,47],o:2},shopping_bags:{a:"Shopping Bags",b:"1F6CD-FE0F",c:"1F6CD",k:[36,35],o:2},"right-facing_fist":{a:"Right-Facing Fist",b:"1F91C",k:[37,55],o:4},house_with_garden:{a:"House with Garden",b:"1F3E1",j:["home","plant","nature"],k:[10,52],o:2},clap:{a:"Clapping Hands Sign",b:"1F44F",j:["hands","praise","applause","congrats","yay"],k:[13,50],o:2},leafy_green:{a:"Leafy Green",b:"1F96C",k:[42,2],o:11},office:{a:"Office Building",b:"1F3E2",j:["building","bureau","work"],k:[10,53],o:2},"flag-ba":{a:"Bosnia & Herzegovina Flag",b:"1F1E7-1F1E6",k:[0,48],o:2},zany_face:{a:"Grinning Face with One Large and One Small Eye",b:"1F92A",k:[38,44],n:["grinning_face_with_one_large_and_one_small_eye"],o:5},first_place_medal:{a:"First Place Medal",b:"1F947",k:[41,22],o:4},ox:{a:"Ox",b:"1F402",j:["animal","cow","beef"],k:[11,30],o:2},school_satchel:{a:"School Satchel",b:"1F392",j:["student","education","bag","backpack"],k:[7,54],o:2},radioactive_sign:{a:"Radioactive Sign",b:"2622-FE0F",c:"2622",k:[53,9],o:2},second_place_medal:{a:"Second Place Medal",b:"1F948",k:[41,23],o:4},stuck_out_tongue_closed_eyes:{a:"Face with Stuck-out Tongue and Tightly-Closed Eyes",b:"1F61D",j:["face","prank","playful","mischievous","smile","tongue"],k:[31,7],o:2},broccoli:{a:"Broccoli",b:"1F966",k:[41,53],o:5},biohazard_sign:{a:"Biohazard Sign",b:"2623-FE0F",c:"2623",k:[53,10],o:2},mans_shoe:{a:"Mans Shoe",b:"1F45E",j:["fashion","male"],k:[14,18],n:["shoe"],o:2},raised_hands:{a:"Person Raising Both Hands in Celebration",b:"1F64C",j:["gesture","hooray","yea","celebration","hands"],k:[33,8],o:2},post_office:{a:"Japanese Post Office",b:"1F3E3",j:["building","envelope","communication"],k:[10,54],o:2},"flag-bb":{a:"Barbados Flag",b:"1F1E7-1F1E7",k:[0,49],o:2},water_buffalo:{a:"Water Buffalo",b:"1F403",j:["animal","nature","ox","cow"],k:[11,31],o:2},third_place_medal:{a:"Third Place Medal",b:"1F949",k:[41,24],o:4},european_post_office:{a:"European Post Office",b:"1F3E4",j:["building","email"],k:[10,55],o:2},athletic_shoe:{a:"Athletic Shoe",b:"1F45F",j:["shoes","sports","sneakers"],k:[14,19],o:2},arrow_up:{a:"Upwards Black Arrow",b:"2B06-FE0F",c:"2B06",j:["blue-square","continue","top","direction"],k:[55,38],o:2},cow2:{a:"Cow",b:"1F404",j:["beef","ox","animal","nature","moo","milk"],k:[11,32],o:2},open_hands:{a:"Open Hands Sign",b:"1F450",j:["fingers","butterfly","hands","open"],k:[13,56],o:2},garlic:{a:"Garlic",b:"1F9C4",k:[44,12],o:12},money_mouth_face:{a:"Money-Mouth Face",b:"1F911",j:["face","rich","dollar","money"],k:[37,24],o:2},"flag-bd":{a:"Bangladesh Flag",b:"1F1E7-1F1E9",k:[0,50],o:2},soccer:{a:"Soccer Ball",b:"26BD",j:["sports","football"],k:[53,56],o:2},hugging_face:{a:"Hugging Face",b:"1F917",k:[37,30],o:2},onion:{a:"Onion",b:"1F9C5",k:[44,13],o:12},arrow_upper_right:{a:"North East Arrow",b:"2197-FE0F",c:"2197",j:["blue-square","point","direction","diagonal","northeast"],k:[52,17],o:2},palms_up_together:{a:"Palms Up Together",b:"1F932",k:[39,5],o:5},pig:{a:"Pig Face",b:"1F437",j:["animal","oink","nature"],k:[12,27],o:2},hospital:{a:"Hospital",b:"1F3E5",j:["building","health","surgery","doctor"],k:[10,56],o:2},hiking_boot:{a:"Hiking Boot",b:"1F97E",k:[42,16],o:11},"flag-be":{a:"Belgium Flag",b:"1F1E7-1F1EA",k:[0,51],o:2},"flag-bf":{a:"Burkina Faso Flag",b:"1F1E7-1F1EB",k:[0,52],o:2},mushroom:{a:"Mushroom",b:"1F344",j:["plant","vegetable"],k:[6,28],o:2},pig2:{a:"Pig",b:"1F416",j:["animal","nature"],k:[11,51],o:2},baseball:{a:"Baseball",b:"26BE",j:["sports","balls"],k:[54,0],o:2},face_with_hand_over_mouth:{a:"Smiling Face with Smiling Eyes and Hand Covering Mouth",b:"1F92D",k:[38,47],n:["smiling_face_with_smiling_eyes_and_hand_covering_mouth"],o:5},handshake:{a:"Handshake",b:"1F91D",j:["agreement","shake"],k:[38,4],o:4},womans_flat_shoe:{a:"Flat Shoe",b:"1F97F",k:[42,17],o:11},bank:{a:"Bank",b:"1F3E6",j:["building","money","sales","cash","business","enterprise"],k:[11,0],o:2},arrow_right:{a:"Black Rightwards Arrow",b:"27A1-FE0F",c:"27A1",j:["blue-square","next"],k:[55,32],o:2},peanuts:{a:"Peanuts",b:"1F95C",j:["food","nut"],k:[41,43],o:4},shushing_face:{a:"Face with Finger Covering Closed Lips",b:"1F92B",k:[38,45],n:["face_with_finger_covering_closed_lips"],o:5},pray:{a:"Person with Folded Hands",b:"1F64F",j:["please","hope","wish","namaste","highfive"],k:[33,50],o:2},softball:{a:"Softball",b:"1F94E",k:[41,29],o:11},high_heel:{a:"High-Heeled Shoe",b:"1F460",j:["fashion","shoes","female","pumps","stiletto"],k:[14,20],o:2},"flag-bg":{a:"Bulgaria Flag",b:"1F1E7-1F1EC",k:[0,53],o:2},arrow_lower_right:{a:"South East Arrow",b:"2198-FE0F",c:"2198",j:["blue-square","direction","diagonal","southeast"],k:[52,18],o:2},hotel:{a:"Hotel",b:"1F3E8",j:["building","accomodation","checkin"],k:[11,2],o:2},boar:{a:"Boar",b:"1F417",j:["animal","nature"],k:[11,52],o:2},sandal:{a:"Womans Sandal",b:"1F461",j:["shoes","fashion","flip flops"],k:[14,21],o:2},"flag-bh":{a:"Bahrain Flag",b:"1F1E7-1F1ED",k:[0,54],o:2},arrow_down:{a:"Downwards Black Arrow",b:"2B07-FE0F",c:"2B07",j:["blue-square","direction","bottom"],k:[55,39],o:2},thinking_face:{a:"Thinking Face",b:"1F914",k:[37,27],o:2},writing_hand:{a:"Writing Hand",b:"270D-FE0F",c:"270D",j:["lower_left_ballpoint_pen","stationery","write","compose"],k:[55,4],o:2},chestnut:{a:"Chestnut",b:"1F330",j:["food","squirrel"],k:[6,8],o:2},basketball:{a:"Basketball and Hoop",b:"1F3C0",j:["sports","balls","NBA"],k:[8,38],o:2},pig_nose:{a:"Pig Nose",b:"1F43D",j:["animal","oink"],k:[12,33],o:2},love_hotel:{a:"Love Hotel",b:"1F3E9",j:["like","affection","dating"],k:[11,3],o:2},nail_care:{a:"Nail Polish",b:"1F485",j:["beauty","manicure","finger","fashion","nail"],k:[24,33],o:2},volleyball:{a:"Volleyball",b:"1F3D0",j:["sports","balls"],k:[10,35],o:2},"flag-bi":{a:"Burundi Flag",b:"1F1E7-1F1EE",k:[0,55],o:2},arrow_lower_left:{a:"South West Arrow",b:"2199-FE0F",c:"2199",j:["blue-square","direction","diagonal","southwest"],k:[52,19],o:2},ram:{a:"Ram",b:"1F40F",j:["animal","sheep","nature"],k:[11,43],o:2},ballet_shoes:{a:"Ballet Shoes",b:"1FA70",k:[51,51],o:12},zipper_mouth_face:{a:"Zipper-Mouth Face",b:"1F910",j:["face","sealed","zipper","secret"],k:[37,23],o:2},bread:{a:"Bread",b:"1F35E",j:["food","wheat","breakfast","toast"],k:[6,54],o:2},convenience_store:{a:"Convenience Store",b:"1F3EA",j:["building","shopping","groceries"],k:[11,4],o:2},boot:{a:"Womans Boots",b:"1F462",j:["shoes","fashion"],k:[14,22],o:2},sheep:{a:"Sheep",b:"1F411",j:["animal","nature","wool","shipit"],k:[11,45],o:2},face_with_raised_eyebrow:{a:"Face with One Eyebrow Raised",b:"1F928",k:[38,42],n:["face_with_one_eyebrow_raised"],o:5},"flag-bj":{a:"Benin Flag",b:"1F1E7-1F1EF",k:[0,56],o:2},arrow_left:{a:"Leftwards Black Arrow",b:"2B05-FE0F",c:"2B05",j:["blue-square","previous","back"],k:[55,37],o:2},selfie:{a:"Selfie",b:"1F933",j:["camera","phone"],k:[39,11],o:4},croissant:{a:"Croissant",b:"1F950",j:["food","bread","french"],k:[41,31],o:4},school:{a:"School",b:"1F3EB",j:["building","student","education","learn","teach"],k:[11,5],o:2},football:{a:"American Football",b:"1F3C8",j:["sports","balls","NFL"],k:[9,33],o:2},goat:{a:"Goat",b:"1F410",j:["animal","nature"],k:[11,44],o:2},department_store:{a:"Department Store",b:"1F3EC",j:["building","shopping","mall"],k:[11,6],o:2},"flag-bl":{a:"St. Barthélemy Flag",b:"1F1E7-1F1F1",k:[1,0],o:2},crown:{a:"Crown",b:"1F451",j:["king","kod","leader","royalty","lord"],k:[14,5],o:2},arrow_upper_left:{a:"North West Arrow",b:"2196-FE0F",c:"2196",j:["blue-square","point","direction","diagonal","northwest"],k:[52,16],o:2},neutral_face:{a:"Neutral Face",b:"1F610",j:["indifference","meh",":|","neutral"],k:[30,51],l:[":|",":-|"],o:2},rugby_football:{a:"Rugby Football",b:"1F3C9",j:["sports","team"],k:[9,34],o:2},muscle:{a:"Flexed Biceps",b:"1F4AA",j:["arm","flex","hand","summer","strong","biceps"],k:[25,52],o:2},baguette_bread:{a:"Baguette Bread",b:"1F956",j:["food","bread","french"],k:[41,37],o:4},expressionless:{a:"Expressionless Face",b:"1F611",j:["face","indifferent","-_-","meh","deadpan"],k:[30,52],o:2},womans_hat:{a:"Womans Hat",b:"1F452",j:["fashion","accessories","female","lady","spring"],k:[14,6],o:2},pretzel:{a:"Pretzel",b:"1F968",k:[41,55],o:5},mechanical_arm:{a:"Mechanical Arm",b:"1F9BE",k:[44,6],o:12},arrow_up_down:{a:"Up Down Arrow",b:"2195-FE0F",c:"2195",j:["blue-square","direction","way","vertical"],k:[52,15],o:2},dromedary_camel:{a:"Dromedary Camel",b:"1F42A",j:["animal","hot","desert","hump"],k:[12,14],o:2},tennis:{a:"Tennis Racquet and Ball",b:"1F3BE",j:["sports","balls","green"],k:[8,36],o:2},"flag-bm":{a:"Bermuda Flag",b:"1F1E7-1F1F2",k:[1,1],o:2},factory:{a:"Factory",b:"1F3ED",j:["building","industry","pollution","smoke"],k:[11,7],o:2},japanese_castle:{a:"Japanese Castle",b:"1F3EF",j:["photo","building"],k:[11,9],o:2},no_mouth:{a:"Face Without Mouth",b:"1F636",j:["face","hellokitty"],k:[31,32],o:2},mechanical_leg:{a:"Mechanical Leg",b:"1F9BF",k:[44,7],o:12},bagel:{a:"Bagel",b:"1F96F",k:[42,5],o:11},camel:{a:"Bactrian Camel",b:"1F42B",j:["animal","nature","hot","desert","hump"],k:[12,15],o:2},tophat:{a:"Top Hat",b:"1F3A9",j:["magic","gentleman","classy","circus"],k:[8,15],o:2},left_right_arrow:{a:"Left Right Arrow",b:"2194-FE0F",c:"2194",j:["shape","direction","horizontal","sideways"],k:[52,14],o:2},"flag-bn":{a:"Brunei Flag",b:"1F1E7-1F1F3",k:[1,2],o:2},flying_disc:{a:"Flying Disc",b:"1F94F",k:[41,30],o:11},smirk:{a:"Smirking Face",b:"1F60F",j:["face","smile","mean","prank","smug","sarcasm"],k:[30,50],o:2},mortar_board:{a:"Graduation Cap",b:"1F393",j:["school","college","degree","university","graduation","cap","hat","legal","learn","education"],k:[7,55],o:2},european_castle:{a:"European Castle",b:"1F3F0",j:["building","royalty","history"],k:[11,10],o:2},leg:{a:"Leg",b:"1F9B5",k:[43,5],o:11},pancakes:{a:"Pancakes",b:"1F95E",j:["food","breakfast","flapjacks","hotcakes"],k:[41,45],o:4},leftwards_arrow_with_hook:{a:"Leftwards Arrow with Hook",b:"21A9-FE0F",c:"21A9",j:["back","return","blue-square","undo","enter"],k:[52,20],o:2},"flag-bo":{a:"Bolivia Flag",b:"1F1E7-1F1F4",k:[1,3],o:2},bowling:{a:"Bowling",b:"1F3B3",j:["sports","fun","play"],k:[8,25],o:2},llama:{a:"Llama",b:"1F999",k:[42,43],o:11},arrow_right_hook:{a:"Rightwards Arrow with Hook",b:"21AA-FE0F",c:"21AA",j:["blue-square","return","rotate","direction"],k:[52,21],o:2},wedding:{a:"Wedding",b:"1F492",j:["love","like","affection","couple","marriage","bride","groom"],k:[25,28],o:2},"flag-bq":{a:"Caribbean Netherlands Flag",b:"1F1E7-1F1F6",k:[1,4],o:2},foot:{a:"Foot",b:"1F9B6",k:[43,11],o:11},giraffe_face:{a:"Giraffe Face",b:"1F992",k:[42,36],o:5},unamused:{a:"Unamused Face",b:"1F612",j:["indifference","bored","straight face","serious","sarcasm"],k:[30,53],m:":(",o:2},billed_cap:{a:"Billed Cap",b:"1F9E2",k:[51,21],o:5},waffle:{a:"Waffle",b:"1F9C7",k:[44,15],o:12},cricket_bat_and_ball:{a:"Cricket Bat and Ball",b:"1F3CF",k:[10,34],o:2},helmet_with_white_cross:{a:"Helmet with White Cross",b:"26D1-FE0F",c:"26D1",k:[54,6],o:2},ear:{a:"Ear",b:"1F442",j:["face","hear","sound","listen"],k:[12,39],o:2},elephant:{a:"Elephant",b:"1F418",j:["animal","nature","nose","th","circus"],k:[11,53],o:2},cheese_wedge:{a:"Cheese Wedge",b:"1F9C0",k:[44,8],o:2},tokyo_tower:{a:"Tokyo Tower",b:"1F5FC",j:["photo","japanese"],k:[30,31],o:2},arrow_heading_up:{a:"Arrow Pointing Rightwards Then Curving Upwards",b:"2934-FE0F",c:"2934",j:["blue-square","direction","top"],k:[55,35],o:2},field_hockey_stick_and_ball:{a:"Field Hockey Stick and Ball",b:"1F3D1",k:[10,36],o:2},"flag-br":{a:"Brazil Flag",b:"1F1E7-1F1F7",k:[1,5],o:2},face_with_rolling_eyes:{a:"Face with Rolling Eyes",b:"1F644",k:[31,46],o:2},ear_with_hearing_aid:{a:"Ear with Hearing Aid",b:"1F9BB",k:[43,55],o:12},arrow_heading_down:{a:"Arrow Pointing Rightwards Then Curving Downwards",b:"2935-FE0F",c:"2935",j:["blue-square","direction","bottom"],k:[55,36],o:2},ice_hockey_stick_and_puck:{a:"Ice Hockey Stick and Puck",b:"1F3D2",k:[10,37],o:2},meat_on_bone:{a:"Meat on Bone",b:"1F356",j:["good","food","drumstick"],k:[6,46],o:2},prayer_beads:{a:"Prayer Beads",b:"1F4FF",j:["dhikr","religious"],k:[27,27],o:2},statue_of_liberty:{a:"Statue of Liberty",b:"1F5FD",j:["american","newyork"],k:[30,32],o:2},grimacing:{a:"Grimacing Face",b:"1F62C",j:["face","grimace","teeth"],k:[31,22],o:2},"flag-bs":{a:"Bahamas Flag",b:"1F1E7-1F1F8",k:[1,6],o:2},rhinoceros:{a:"Rhinoceros",b:"1F98F",j:["animal","nature","horn"],k:[42,33],o:4},lacrosse:{a:"Lacrosse Stick and Ball",b:"1F94D",k:[41,28],o:11},poultry_leg:{a:"Poultry Leg",b:"1F357",j:["food","meat","drumstick","bird","chicken","turkey"],k:[6,47],o:2},hippopotamus:{a:"Hippopotamus",b:"1F99B",k:[42,45],o:11},nose:{a:"Nose",b:"1F443",j:["smell","sniff"],k:[12,45],o:2},arrows_clockwise:{a:"Clockwise Downwards and Upwards Open Circle Arrows",b:"1F503",j:["sync","cycle","round","repeat"],k:[27,31],o:2},"flag-bt":{a:"Bhutan Flag",b:"1F1E7-1F1F9",k:[1,7],o:2},church:{a:"Church",b:"26EA",j:["building","religion","christ"],k:[54,10],o:2},lipstick:{a:"Lipstick",b:"1F484",j:["female","girl","fashion","woman"],k:[24,32],o:2},lying_face:{a:"Lying Face",b:"1F925",j:["face","lie","pinocchio"],k:[38,22],o:4},arrows_counterclockwise:{a:"Anticlockwise Downwards and Upwards Open Circle Arrows",b:"1F504",j:["blue-square","sync","cycle"],k:[27,32],o:2},"flag-bv":{a:"Bouvet Island Flag",b:"1F1E7-1F1FB",k:[1,8],o:2},cut_of_meat:{a:"Cut of Meat",b:"1F969",k:[41,56],o:5},mosque:{a:"Mosque",b:"1F54C",j:["islam","worship","minaret"],k:[28,36],o:2},ring:{a:"Ring",b:"1F48D",j:["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],k:[25,23],o:2},brain:{a:"Brain",b:"1F9E0",k:[51,19],o:5},table_tennis_paddle_and_ball:{a:"Table Tennis Paddle and Ball",b:"1F3D3",k:[10,38],o:2},relieved:{a:"Relieved Face",b:"1F60C",j:["face","relaxed","phew","massage","happiness"],k:[30,47],o:2},mouse:{a:"Mouse Face",b:"1F42D",j:["animal","nature","cheese_wedge","rodent"],k:[12,17],o:2},hindu_temple:{a:"Hindu Temple",b:"1F6D5",k:[36,41],o:12},back:{a:"Back with Leftwards Arrow Above",b:"1F519",j:["arrow","words","return"],k:[27,53],o:2},gem:{a:"Gem Stone",b:"1F48E",j:["blue","ruby","diamond","jewelry"],k:[25,24],o:2},pensive:{a:"Pensive Face",b:"1F614",j:["face","sad","depressed","upset"],k:[30,55],o:2},"flag-bw":{a:"Botswana Flag",b:"1F1E7-1F1FC",k:[1,9],o:2},mouse2:{a:"Mouse",b:"1F401",j:["animal","nature","rodent"],k:[11,29],o:2},bacon:{a:"Bacon",b:"1F953",j:["food","breakfast","pork","pig","meat"],k:[41,34],o:4},tooth:{a:"Tooth",b:"1F9B7",k:[43,17],o:11},badminton_racquet_and_shuttlecock:{a:"Badminton Racquet and Shuttlecock",b:"1F3F8",k:[11,20],o:2},rat:{a:"Rat",b:"1F400",j:["animal","mouse","rodent"],k:[11,28],o:2},synagogue:{a:"Synagogue",b:"1F54D",j:["judaism","worship","temple","jewish"],k:[28,37],o:2},end:{a:"End with Leftwards Arrow Above",b:"1F51A",j:["words","arrow"],k:[27,54],o:2},bone:{a:"Bone",b:"1F9B4",k:[43,4],o:11},boxing_glove:{a:"Boxing Glove",b:"1F94A",j:["sports","fighting"],k:[41,25],o:4},mute:{a:"Speaker with Cancellation Stroke",b:"1F507",j:["sound","volume","silence","quiet"],k:[27,35],o:2},hamburger:{a:"Hamburger",b:"1F354",j:["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],k:[6,44],o:2},"flag-by":{a:"Belarus Flag",b:"1F1E7-1F1FE",k:[1,10],o:2},sleepy:{a:"Sleepy Face",b:"1F62A",j:["face","tired","rest","nap"],k:[31,20],o:2},on:{a:"On with Exclamation Mark with Left Right Arrow Above",b:"1F51B",j:["arrow","words"],k:[27,55],o:2},martial_arts_uniform:{a:"Martial Arts Uniform",b:"1F94B",j:["judo","karate","taekwondo"],k:[41,26],o:4},speaker:{a:"Speaker",b:"1F508",j:["sound","volume","silence","broadcast"],k:[27,36],o:2},drooling_face:{a:"Drooling Face",b:"1F924",j:["face"],k:[38,21],o:4},eyes:{a:"Eyes",b:"1F440",j:["look","watch","stalk","peek","see"],k:[12,36],o:2},"flag-bz":{a:"Belize Flag",b:"1F1E7-1F1FF",k:[1,11],o:2},hamster:{a:"Hamster Face",b:"1F439",j:["animal","nature"],k:[12,29],o:2},shinto_shrine:{a:"Shinto Shrine",b:"26E9-FE0F",c:"26E9",j:["temple","japan","kyoto"],k:[54,9],o:2},fries:{a:"French Fries",b:"1F35F",j:["chips","snack","fast food"],k:[6,55],o:2},goal_net:{a:"Goal Net",b:"1F945",j:["sports"],k:[41,21],o:4},kaaba:{a:"Kaaba",b:"1F54B",j:["mecca","mosque","islam"],k:[28,35],o:2},soon:{a:"Soon with Rightwards Arrow Above",b:"1F51C",j:["arrow","words"],k:[27,56],o:2},"flag-ca":{a:"Canada Flag",b:"1F1E8-1F1E6",k:[1,12],o:2},rabbit:{a:"Rabbit Face",b:"1F430",j:["animal","nature","pet","spring","magic","bunny"],k:[12,20],o:2},eye:{a:"Eye",b:"1F441-FE0F",c:"1F441",j:["face","look","see","watch","stare"],k:[12,38],o:2},sleeping:{a:"Sleeping Face",b:"1F634",j:["face","tired","sleepy","night","zzz"],k:[31,30],o:2},pizza:{a:"Slice of Pizza",b:"1F355",j:["food","party"],k:[6,45],o:2},sound:{a:"Speaker with One Sound Wave",b:"1F509",j:["volume","speaker","broadcast"],k:[27,37],o:2},rabbit2:{a:"Rabbit",b:"1F407",j:["animal","nature","pet","magic","spring"],k:[11,35],o:2},fountain:{a:"Fountain",b:"26F2",j:["photo","summer","water","fresh"],k:[54,13],o:2},golf:{a:"Flag in Hole",b:"26F3",j:["sports","business","flag","hole","summer"],k:[54,14],o:2},top:{a:"Top with Upwards Arrow Above",b:"1F51D",j:["words","blue-square"],k:[28,0],o:2},mask:{a:"Face with Medical Mask",b:"1F637",j:["face","sick","ill","disease"],k:[31,33],o:2},"flag-cc":{a:"Cocos (keeling) Islands Flag",b:"1F1E8-1F1E8",k:[1,13],o:2},hotdog:{a:"Hot Dog",b:"1F32D",j:["food","frankfurter"],k:[6,5],o:2},loud_sound:{a:"Speaker with Three Sound Waves",b:"1F50A",j:["volume","noise","noisy","speaker","broadcast"],k:[27,38],o:2},tongue:{a:"Tongue",b:"1F445",j:["mouth","playful"],k:[12,52],o:2},place_of_worship:{a:"Place of Worship",b:"1F6D0",j:["religion","church","temple","prayer"],k:[36,38],o:2},ice_skate:{a:"Ice Skate",b:"26F8-FE0F",c:"26F8",j:["sports"],k:[54,18],o:2},sandwich:{a:"Sandwich",b:"1F96A",k:[42,0],o:5},chipmunk:{a:"Chipmunk",b:"1F43F-FE0F",c:"1F43F",j:["animal","nature","rodent","squirrel"],k:[12,35],o:2},loudspeaker:{a:"Public Address Loudspeaker",b:"1F4E2",j:["volume","sound"],k:[26,56],o:2},lips:{a:"Mouth",b:"1F444",j:["mouth","kiss"],k:[12,51],o:2},"flag-cd":{a:"Congo - Kinshasa Flag",b:"1F1E8-1F1E9",k:[1,14],o:2},tent:{a:"Tent",b:"26FA",j:["photo","camping","outdoors"],k:[54,37],o:2},face_with_thermometer:{a:"Face with Thermometer",b:"1F912",j:["sick","temperature","thermometer","cold","fever"],k:[37,25],o:2},taco:{a:"Taco",b:"1F32E",j:["food","mexican"],k:[6,6],o:2},foggy:{a:"Foggy",b:"1F301",j:["photo","mountain"],k:[5,20],o:2},"flag-cf":{a:"Central African Republic Flag",b:"1F1E8-1F1EB",k:[1,15],o:2},baby:{a:"Baby",b:"1F476",j:["child","boy","girl","toddler"],k:[23,4],o:2},atom_symbol:{a:"Atom Symbol",b:"269B-FE0F",c:"269B",j:["science","physics","chemistry"],k:[53,48],o:2},fishing_pole_and_fish:{a:"Fishing Pole and Fish",b:"1F3A3",j:["food","hobby","summer"],k:[8,9],o:2},hedgehog:{a:"Hedgehog",b:"1F994",k:[42,38],o:5},face_with_head_bandage:{a:"Face with Head-Bandage",b:"1F915",j:["injured","clumsy","bandage","hurt"],k:[37,28],o:2},mega:{a:"Cheering Megaphone",b:"1F4E3",j:["sound","speaker","volume"],k:[27,0],o:2},nauseated_face:{a:"Nauseated Face",b:"1F922",j:["face","vomit","gross","green","sick","throw up","ill"],k:[38,19],o:4},child:{a:"Child",b:"1F9D2",k:[48,16],o:5},"flag-cg":{a:"Congo - Brazzaville Flag",b:"1F1E8-1F1EC",k:[1,16],o:2},bat:{a:"Bat",b:"1F987",j:["animal","nature","blind","vampire"],k:[42,25],o:4},diving_mask:{a:"Diving Mask",b:"1F93F",k:[41,15],o:12},burrito:{a:"Burrito",b:"1F32F",j:["food","mexican"],k:[6,7],o:2},postal_horn:{a:"Postal Horn",b:"1F4EF",j:["instrument","music"],k:[27,12],o:2},night_with_stars:{a:"Night with Stars",b:"1F303",j:["evening","city","downtown"],k:[5,22],o:2},om_symbol:{a:"Om Symbol",b:"1F549-FE0F",c:"1F549",k:[28,33],o:2},star_of_david:{a:"Star of David",b:"2721-FE0F",c:"2721",j:["judaism"],k:[55,15],o:2},boy:{a:"Boy",b:"1F466",j:["man","male","guy","teenager"],k:[14,26],o:2},bell:{a:"Bell",b:"1F514",j:["sound","notification","christmas","xmas","chime"],k:[27,48],o:2},"flag-ch":{a:"Switzerland Flag",b:"1F1E8-1F1ED",k:[1,17],o:2},running_shirt_with_sash:{a:"Running Shirt with Sash",b:"1F3BD",j:["play","pageant"],k:[8,35],o:2},stuffed_flatbread:{a:"Stuffed Flatbread",b:"1F959",j:["food","flatbread","stuffed","gyro"],k:[41,40],o:4},bear:{a:"Bear Face",b:"1F43B",j:["animal","nature","wild"],k:[12,31],o:2},cityscape:{a:"Cityscape",b:"1F3D9-FE0F",c:"1F3D9",j:["photo","night life","urban"],k:[10,44],o:2},face_vomiting:{a:"Face with Open Mouth Vomiting",b:"1F92E",k:[38,48],n:["face_with_open_mouth_vomiting"],o:5},wheel_of_dharma:{a:"Wheel of Dharma",b:"2638-FE0F",c:"2638",j:["hinduism","buddhism","sikhism","jainism"],k:[53,15],o:2},ski:{a:"Ski and Ski Boot",b:"1F3BF",j:["sports","winter","cold","snow"],k:[8,37],o:2},girl:{a:"Girl",b:"1F467",j:["female","woman","teenager"],k:[14,32],o:2},falafel:{a:"Falafel",b:"1F9C6",k:[44,14],o:12},sneezing_face:{a:"Sneezing Face",b:"1F927",j:["face","gesundheit","sneeze","sick","allergy"],k:[38,41],o:4},no_bell:{a:"Bell with Cancellation Stroke",b:"1F515",j:["sound","volume","mute","quiet","silent"],k:[27,49],o:2},koala:{a:"Koala",b:"1F428",j:["animal","nature"],k:[12,12],o:2},sunrise_over_mountains:{a:"Sunrise over Mountains",b:"1F304",j:["view","vacation","photo"],k:[5,23],o:2},"flag-ci":{a:"Côte D’ivoire Flag",b:"1F1E8-1F1EE",k:[1,18],o:2},sunrise:{a:"Sunrise",b:"1F305",j:["morning","view","vacation","photo"],k:[5,24],o:2},yin_yang:{a:"Yin Yang",b:"262F-FE0F",c:"262F",j:["balance"],k:[53,14],o:2},adult:{a:"Adult",b:"1F9D1",k:[48,10],o:5},hot_face:{a:"Overheated Face",b:"1F975",k:[42,10],o:11},musical_score:{a:"Musical Score",b:"1F3BC",j:["treble","clef","compose"],k:[8,34],o:2},sled:{a:"Sled",b:"1F6F7",k:[36,56],o:5},egg:{a:"Egg",b:"1F95A",j:["food","chicken","breakfast"],k:[41,41],o:4},panda_face:{a:"Panda Face",b:"1F43C",j:["animal","nature","panda"],k:[12,32],o:2},"flag-ck":{a:"Cook Islands Flag",b:"1F1E8-1F1F0",k:[1,19],o:2},"flag-cl":{a:"Chile Flag",b:"1F1E8-1F1F1",k:[1,20],o:2},sloth:{a:"Sloth",b:"1F9A5",k:[42,53],o:12},latin_cross:{a:"Latin Cross",b:"271D-FE0F",c:"271D",j:["christianity"],k:[55,14],o:2},curling_stone:{a:"Curling Stone",b:"1F94C",k:[41,27],o:5},cold_face:{a:"Freezing Face",b:"1F976",k:[42,11],o:11},fried_egg:{a:"Cooking",b:"1F373",j:["food","breakfast","kitchen","egg"],k:[7,18],n:["cooking"],o:2},city_sunset:{a:"Cityscape at Dusk",b:"1F306",j:["photo","evening","sky","buildings"],k:[5,25],o:2},musical_note:{a:"Musical Note",b:"1F3B5",j:["score","tone","sound"],k:[8,27],o:2},"flag-cm":{a:"Cameroon Flag",b:"1F1E8-1F1F2",k:[1,21],o:2},notes:{a:"Multiple Musical Notes",b:"1F3B6",j:["music","score"],k:[8,28],o:2},woozy_face:{a:"Face with Uneven Eyes and Wavy Mouth",b:"1F974",k:[42,9],o:11},dart:{a:"Direct Hit",b:"1F3AF",j:["game","play","bar"],k:[8,21],o:2},orthodox_cross:{a:"Orthodox Cross",b:"2626-FE0F",c:"2626",j:["suppedaneum","religion"],k:[53,11],o:2},shallow_pan_of_food:{a:"Shallow Pan of Food",b:"1F958",j:["food","cooking","casserole","paella"],k:[41,39],o:4},otter:{a:"Otter",b:"1F9A6",k:[42,54],o:12},man:{a:"Man",b:"1F468",j:["mustache","father","dad","guy","classy","sir","moustache"],k:[17,22],o:2},city_sunrise:{a:"Sunset over Buildings",b:"1F307",j:["photo","good morning","dawn"],k:[5,26],o:2},bearded_person:{a:"Bearded Person",b:"1F9D4",k:[48,28],o:5},skunk:{a:"Skunk",b:"1F9A8",k:[42,56],o:12},stew:{a:"Pot of Food",b:"1F372",j:["food","meat","soup"],k:[7,17],o:2},cn:{a:"China Flag",b:"1F1E8-1F1F3",j:["china","chinese","prc","flag","country","nation","banner"],k:[1,22],n:["flag-cn"],o:2},studio_microphone:{a:"Studio Microphone",b:"1F399-FE0F",c:"1F399",j:["sing","recording","artist","talkshow"],k:[8,1],o:2},star_and_crescent:{a:"Star and Crescent",b:"262A-FE0F",c:"262A",j:["islam"],k:[53,12],o:2},"yo-yo":{a:"Yo-Yo",b:"1FA80",k:[52,1],o:12},bridge_at_night:{a:"Bridge at Night",b:"1F309",j:["photo","sanfrancisco"],k:[5,28],o:2},dizzy_face:{a:"Dizzy Face",b:"1F635",j:["spent","unconscious","xox","dizzy"],k:[31,31],o:2},red_haired_man:{a:"Red Haired Man",b:"1F468-200D-1F9B0",k:[16,23],o:11},kite:{a:"Kite",b:"1FA81",k:[52,2],o:12},bowl_with_spoon:{a:"Bowl with Spoon",b:"1F963",k:[41,50],o:5},"flag-co":{a:"Colombia Flag",b:"1F1E8-1F1F4",k:[1,23],o:2},peace_symbol:{a:"Peace Symbol",b:"262E-FE0F",c:"262E",j:["hippie"],k:[53,13],o:2},kangaroo:{a:"Kangaroo",b:"1F998",k:[42,42],o:11},hotsprings:{a:"Hot Springs",b:"2668-FE0F",c:"2668",j:["bath","warm","relax"],k:[53,37],o:2},exploding_head:{a:"Shocked Face with Exploding Head",b:"1F92F",k:[38,49],n:["shocked_face_with_exploding_head"],o:5},level_slider:{a:"Level Slider",b:"1F39A-FE0F",c:"1F39A",j:["scale"],k:[8,2],o:2},badger:{a:"Badger",b:"1F9A1",k:[42,51],o:11},"8ball":{a:"Billiards",b:"1F3B1",j:["pool","hobby","game","luck","magic"],k:[8,23],o:2},curly_haired_man:{a:"Curly Haired Man",b:"1F468-200D-1F9B1",k:[16,29],o:11},"flag-cp":{a:"Clipperton Island Flag",b:"1F1E8-1F1F5",k:[1,24],o:2},carousel_horse:{a:"Carousel Horse",b:"1F3A0",j:["photo","carnival"],k:[8,6],o:2},face_with_cowboy_hat:{a:"Face with Cowboy Hat",b:"1F920",k:[38,17],o:4},menorah_with_nine_branches:{a:"Menorah with Nine Branches",b:"1F54E",k:[28,38],o:2},green_salad:{a:"Green Salad",b:"1F957",j:["food","healthy","lettuce"],k:[41,38],o:4},control_knobs:{a:"Control Knobs",b:"1F39B-FE0F",c:"1F39B",j:["dial"],k:[8,3],o:2},popcorn:{a:"Popcorn",b:"1F37F",j:["food","movie theater","films","snack"],k:[7,30],o:2},six_pointed_star:{a:"Six Pointed Star with Middle Dot",b:"1F52F",j:["purple-square","religion","jewish","hexagram"],k:[28,18],o:2},feet:{a:"Paw Prints",b:"1F43E",k:[12,34],n:["paw_prints"],o:2},ferris_wheel:{a:"Ferris Wheel",b:"1F3A1",j:["photo","carnival","londoneye"],k:[8,7],o:2},microphone:{a:"Microphone",b:"1F3A4",j:["sound","music","PA","sing","talkshow"],k:[8,10],o:2},crystal_ball:{a:"Crystal Ball",b:"1F52E",j:["disco","party","magic","circus","fortune_teller"],k:[28,17],o:2},partying_face:{a:"Face with Party Horn and Party Hat",b:"1F973",k:[42,8],o:11},"flag-cr":{a:"Costa Rica Flag",b:"1F1E8-1F1F7",k:[1,25],o:2},white_haired_man:{a:"White Haired Man",b:"1F468-200D-1F9B3",k:[16,41],o:11},headphones:{a:"Headphone",b:"1F3A7",j:["music","score","gadgets"],k:[8,13],o:2},bald_man:{a:"Bald Man",b:"1F468-200D-1F9B2",k:[16,35],o:11},sunglasses:{a:"Smiling Face with Sunglasses",b:"1F60E",j:["face","cool","smile","summer","beach","sunglass"],k:[30,49],l:["8)"],o:2},butter:{a:"Butter",b:"1F9C8",k:[44,16],o:12},roller_coaster:{a:"Roller Coaster",b:"1F3A2",j:["carnival","playground","photo","fun"],k:[8,8],o:2},turkey:{a:"Turkey",b:"1F983",j:["animal","bird"],k:[42,21],o:2},nazar_amulet:{a:"Nazar Amulet",b:"1F9FF",k:[51,50],o:11},"flag-cu":{a:"Cuba Flag",b:"1F1E8-1F1FA",k:[1,26],o:2},aries:{a:"Aries",b:"2648",j:["sign","purple-square","zodiac","astrology"],k:[53,20],o:2},"flag-cv":{a:"Cape Verde Flag",b:"1F1E8-1F1FB",k:[1,27],o:2},barber:{a:"Barber Pole",b:"1F488",j:["hair","salon","style"],k:[25,18],o:2},taurus:{a:"Taurus",b:"2649",j:["purple-square","sign","zodiac","astrology"],k:[53,21],o:2},salt:{a:"Salt Shaker",b:"1F9C2",k:[44,10],o:11},woman:{a:"Woman",b:"1F469",j:["female","girls","lady"],k:[20,9],o:2},video_game:{a:"Video Game",b:"1F3AE",j:["play","console","PS4","controller"],k:[8,20],o:2},chicken:{a:"Chicken",b:"1F414",j:["animal","cluck","nature","bird"],k:[11,48],o:2},radio:{a:"Radio",b:"1F4FB",j:["communication","music","podcast","program"],k:[27,24],o:2},nerd_face:{a:"Nerd Face",b:"1F913",j:["face","nerdy","geek","dork"],k:[37,26],o:2},red_haired_woman:{a:"Red Haired Woman",b:"1F469-200D-1F9B0",k:[19,8],o:11},circus_tent:{a:"Circus Tent",b:"1F3AA",j:["festival","carnival","party"],k:[8,16],o:2},face_with_monocle:{a:"Face with Monocle",b:"1F9D0",k:[45,16],o:5},canned_food:{a:"Canned Food",b:"1F96B",k:[42,1],o:5},"flag-cw":{a:"Curaçao Flag",b:"1F1E8-1F1FC",k:[1,28],o:2},gemini:{a:"Gemini",b:"264A",j:["sign","zodiac","purple-square","astrology"],k:[53,22],o:2},saxophone:{a:"Saxophone",b:"1F3B7",j:["music","instrument","jazz","blues"],k:[8,29],o:2},rooster:{a:"Rooster",b:"1F413",j:["animal","nature","chicken"],k:[11,47],o:2},joystick:{a:"Joystick",b:"1F579-FE0F",c:"1F579",j:["game","play"],k:[29,36],o:2},guitar:{a:"Guitar",b:"1F3B8",j:["music","instrument"],k:[8,30],o:2},slot_machine:{a:"Slot Machine",b:"1F3B0",j:["bet","gamble","vegas","fruit machine","luck","casino"],k:[8,22],o:2},bento:{a:"Bento Box",b:"1F371",j:["food","japanese","box"],k:[7,16],o:2},steam_locomotive:{a:"Steam Locomotive",b:"1F682",j:["transportation","vehicle","train"],k:[34,1],o:2},confused:{a:"Confused Face",b:"1F615",j:["face","indifference","huh","weird","hmmm",":/"],k:[30,56],l:[":\\",":-\\",":/",":-/"],o:2},"flag-cx":{a:"Christmas Island Flag",b:"1F1E8-1F1FD",k:[1,29],o:2},hatching_chick:{a:"Hatching Chick",b:"1F423",j:["animal","chicken","egg","born","baby","bird"],k:[12,7],o:2},cancer:{a:"Cancer",b:"264B",j:["sign","zodiac","purple-square","astrology"],k:[53,23],o:2},"flag-cy":{a:"Cyprus Flag",b:"1F1E8-1F1FE",k:[1,30],o:2},worried:{a:"Worried Face",b:"1F61F",j:["face","concern","nervous",":("],k:[31,9],o:2},railway_car:{a:"Railway Car",b:"1F683",j:["transportation","vehicle"],k:[34,2],o:2},leo:{a:"Leo",b:"264C",j:["sign","purple-square","zodiac","astrology"],k:[53,24],o:2},curly_haired_woman:{a:"Curly Haired Woman",b:"1F469-200D-1F9B1",k:[19,14],o:11},baby_chick:{a:"Baby Chick",b:"1F424",j:["animal","chicken","bird"],k:[12,8],o:2},musical_keyboard:{a:"Musical Keyboard",b:"1F3B9",j:["piano","instrument","compose"],k:[8,31],o:2},game_die:{a:"Game Die",b:"1F3B2",j:["dice","random","tabletop","play","luck"],k:[8,24],o:2},rice_cracker:{a:"Rice Cracker",b:"1F358",j:["food","japanese"],k:[6,48],o:2},virgo:{a:"Virgo",b:"264D",j:["sign","zodiac","purple-square","astrology"],k:[53,25],o:2},"flag-cz":{a:"Czechia Flag",b:"1F1E8-1F1FF",k:[1,31],o:2},rice_ball:{a:"Rice Ball",b:"1F359",j:["food","japanese"],k:[6,49],o:2},hatched_chick:{a:"Front-Facing Baby Chick",b:"1F425",j:["animal","chicken","baby","bird"],k:[12,9],o:2},jigsaw:{a:"Jigsaw Puzzle Piece",b:"1F9E9",k:[51,28],o:11},trumpet:{a:"Trumpet",b:"1F3BA",j:["music","brass"],k:[8,32],o:2},slightly_frowning_face:{a:"Slightly Frowning Face",b:"1F641",j:["face","frowning","disappointed","sad","upset"],k:[31,43],o:2},bullettrain_side:{a:"High-Speed Train",b:"1F684",j:["transportation","vehicle"],k:[34,3],o:2},libra:{a:"Libra",b:"264E",j:["sign","purple-square","zodiac","astrology"],k:[53,26],o:2},de:{a:"Germany Flag",b:"1F1E9-1F1EA",j:["german","nation","flag","country","banner"],k:[1,32],n:["flag-de"],o:2},rice:{a:"Cooked Rice",b:"1F35A",j:["food","china","asian"],k:[6,50],o:2},violin:{a:"Violin",b:"1F3BB",j:["music","instrument","orchestra","symphony"],k:[8,33],o:2},white_haired_woman:{a:"White Haired Woman",b:"1F469-200D-1F9B3",k:[19,26],o:11},bird:{a:"Bird",b:"1F426",j:["animal","nature","fly","tweet","spring"],k:[12,10],o:2},white_frowning_face:{a:"White Frowning Face",b:"2639-FE0F",c:"2639",k:[53,16],o:2},bullettrain_front:{a:"High-Speed Train with Bullet Nose",b:"1F685",j:["transportation","vehicle","speed","fast","public","travel"],k:[34,4],o:2},teddy_bear:{a:"Teddy Bear",b:"1F9F8",k:[51,43],o:11},spades:{a:"Black Spade Suit",b:"2660-FE0F",c:"2660",j:["poker","cards","suits","magic"],k:[53,33],o:2},banjo:{a:"Banjo",b:"1FA95",k:[52,9],o:12},train2:{a:"Train",b:"1F686",j:["transportation","vehicle"],k:[34,5],o:2},scorpius:{a:"Scorpius",b:"264F",j:["sign","zodiac","purple-square","astrology","scorpio"],k:[53,27],o:2},curry:{a:"Curry and Rice",b:"1F35B",j:["food","spicy","hot","indian"],k:[6,51],o:2},open_mouth:{a:"Face with Open Mouth",b:"1F62E",j:["face","surprise","impressed","wow","whoa",":O"],k:[31,24],l:[":o",":-o",":O",":-O"],o:2},"flag-dg":{a:"Diego Garcia Flag",b:"1F1E9-1F1EC",k:[1,33],o:2},penguin:{a:"Penguin",b:"1F427",j:["animal","nature"],k:[12,11],o:2},hearts:{a:"Black Heart Suit",b:"2665-FE0F",c:"2665",j:["poker","cards","magic","suits"],k:[53,35],o:2},ramen:{a:"Steaming Bowl",b:"1F35C",j:["food","japanese","noodle","chopsticks"],k:[6,52],o:2},sagittarius:{a:"Sagittarius",b:"2650",j:["sign","zodiac","purple-square","astrology"],k:[53,28],o:2},bald_woman:{a:"Bald Woman",b:"1F469-200D-1F9B2",k:[19,20],o:11},dove_of_peace:{a:"Dove of Peace",b:"1F54A-FE0F",c:"1F54A",k:[28,34],o:2},hushed:{a:"Hushed Face",b:"1F62F",j:["face","woo","shh"],k:[31,25],o:2},metro:{a:"Metro",b:"1F687",j:["transportation","blue-square","mrt","underground","tube"],k:[34,6],o:2},"flag-dj":{a:"Djibouti Flag",b:"1F1E9-1F1EF",k:[1,34],o:2},drum_with_drumsticks:{a:"Drum with Drumsticks",b:"1F941",k:[41,17],o:4},spaghetti:{a:"Spaghetti",b:"1F35D",j:["food","italian","noodle"],k:[6,53],o:2},eagle:{a:"Eagle",b:"1F985",j:["animal","nature","bird"],k:[42,23],o:4},astonished:{a:"Astonished Face",b:"1F632",j:["face","xox","surprised","poisoned"],k:[31,28],o:2},capricorn:{a:"Capricorn",b:"2651",j:["sign","zodiac","purple-square","astrology"],k:[53,29],o:2},light_rail:{a:"Light Rail",b:"1F688",j:["transportation","vehicle"],k:[34,7],o:2},"flag-dk":{a:"Denmark Flag",b:"1F1E9-1F1F0",k:[1,35],o:2},iphone:{a:"Mobile Phone",b:"1F4F1",j:["technology","apple","gadgets","dial"],k:[27,14],o:2},diamonds:{a:"Black Diamond Suit",b:"2666-FE0F",c:"2666",j:["poker","cards","magic","suits"],k:[53,36],o:2},clubs:{a:"Black Club Suit",b:"2663-FE0F",c:"2663",j:["poker","cards","magic","suits"],k:[53,34],o:2},aquarius:{a:"Aquarius",b:"2652",j:["sign","purple-square","zodiac","astrology"],k:[53,30],o:2},sweet_potato:{a:"Roasted Sweet Potato",b:"1F360",j:["food","nature"],k:[6,56],o:2},"flag-dm":{a:"Dominica Flag",b:"1F1E9-1F1F2",k:[1,36],o:2},duck:{a:"Duck",b:"1F986",j:["animal","nature","bird","mallard"],k:[42,24],o:4},calling:{a:"Mobile Phone with Rightwards Arrow at Left",b:"1F4F2",j:["iphone","incoming"],k:[27,15],o:2},station:{a:"Station",b:"1F689",j:["transportation","vehicle","public"],k:[34,8],o:2},"blond-haired-woman":{a:"Blond Haired Woman",b:"1F471-200D-2640-FE0F",c:"1F471-200D-2640",k:[22,7],o:4},flushed:{a:"Flushed Face",b:"1F633",j:["face","blush","shy","flattered"],k:[31,29],o:2},pisces:{a:"Pisces",b:"2653",j:["purple-square","sign","zodiac","astrology"],k:[53,31],o:2},chess_pawn:{a:"Chess Pawn",b:"265F-FE0F",c:"265F",k:[53,32],o:11},"blond-haired-man":{obsoletes:"1F471",a:"Blond Haired Man",b:"1F471-200D-2642-FE0F",c:"1F471-200D-2642",k:[22,13],o:4},phone:{a:"Black Telephone",b:"260E-FE0F",c:"260E",j:["technology","communication","dial","telephone"],k:[52,54],n:["telephone"],o:2},oden:{a:"Oden",b:"1F362",j:["food","japanese"],k:[7,1],o:2},"flag-do":{a:"Dominican Republic Flag",b:"1F1E9-1F1F4",k:[1,37],o:2},tram:{a:"Tram",b:"1F68A",j:["transportation","vehicle"],k:[34,9],o:2},swan:{a:"Swan",b:"1F9A2",k:[42,52],o:11},pleading_face:{a:"Face with Pleading Eyes",b:"1F97A",k:[42,12],o:11},"flag-dz":{a:"Algeria Flag",b:"1F1E9-1F1FF",k:[1,38],o:2},monorail:{a:"Monorail",b:"1F69D",j:["transportation","vehicle"],k:[34,28],o:2},owl:{a:"Owl",b:"1F989",j:["animal","nature","bird","hoot"],k:[42,27],o:4},sushi:{a:"Sushi",b:"1F363",j:["food","fish","japanese","rice"],k:[7,2],o:2},telephone_receiver:{a:"Telephone Receiver",b:"1F4DE",j:["technology","communication","dial"],k:[26,52],o:2},black_joker:{a:"Playing Card Black Joker",b:"1F0CF",j:["poker","cards","game","play","magic"],k:[0,15],o:2},ophiuchus:{a:"Ophiuchus",b:"26CE",j:["sign","purple-square","constellation","astrology"],k:[54,4],o:2},frowning:{a:"Frowning Face with Open Mouth",b:"1F626",j:["face","aw","what"],k:[31,16],o:2},older_adult:{a:"Older Adult",b:"1F9D3",k:[48,22],o:5},"flag-ea":{a:"Ceuta & Melilla Flag",b:"1F1EA-1F1E6",k:[1,39],o:2},flamingo:{a:"Flamingo",b:"1F9A9",k:[43,0],o:12},pager:{a:"Pager",b:"1F4DF",j:["bbcall","oldschool","90s"],k:[26,53],o:2},mountain_railway:{a:"Mountain Railway",b:"1F69E",j:["transportation","vehicle"],k:[34,29],o:2},mahjong:{a:"Mahjong Tile Red Dragon",b:"1F004",j:["game","play","chinese","kanji"],k:[0,14],o:2},older_man:{a:"Older Man",b:"1F474",j:["human","male","men","old","elder","senior"],k:[22,49],o:2},twisted_rightwards_arrows:{a:"Twisted Rightwards Arrows",b:"1F500",j:["blue-square","shuffle","music","random"],k:[27,28],o:2},fried_shrimp:{a:"Fried Shrimp",b:"1F364",j:["food","animal","appetizer","summer"],k:[7,3],o:2},anguished:{a:"Anguished Face",b:"1F627",j:["face","stunned","nervous"],k:[31,17],l:["D:"],o:2},repeat:{a:"Clockwise Rightwards and Leftwards Open Circle Arrows",b:"1F501",j:["loop","record"],k:[27,29],o:2},fish_cake:{a:"Fish Cake with Swirl Design",b:"1F365",j:["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],k:[7,4],o:2},fax:{a:"Fax Machine",b:"1F4E0",j:["communication","technology"],k:[26,54],o:2},older_woman:{a:"Older Woman",b:"1F475",j:["human","female","women","lady","old","elder","senior"],k:[22,55],o:2},"flag-ec":{a:"Ecuador Flag",b:"1F1EA-1F1E8",k:[1,40],o:2},peacock:{a:"Peacock",b:"1F99A",k:[42,44],o:11},fearful:{a:"Fearful Face",b:"1F628",j:["face","scared","terrified","nervous","oops","huh"],k:[31,18],o:2},train:{a:"Tram Car",b:"1F68B",j:["transportation","vehicle","carriage","public","travel"],k:[34,10],o:2},flower_playing_cards:{a:"Flower Playing Cards",b:"1F3B4",j:["game","sunset","red"],k:[8,26],o:2},repeat_one:{a:"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",b:"1F502",j:["blue-square","loop"],k:[27,30],o:2},moon_cake:{a:"Moon Cake",b:"1F96E",k:[42,4],o:11},performing_arts:{a:"Performing Arts",b:"1F3AD",j:["acting","theater","drama"],k:[8,19],o:2},cold_sweat:{a:"Face with Open Mouth and Cold Sweat",b:"1F630",j:["face","nervous","sweat"],k:[31,26],o:2},"flag-ee":{a:"Estonia Flag",b:"1F1EA-1F1EA",k:[1,41],o:2},battery:{a:"Battery",b:"1F50B",j:["power","energy","sustain"],k:[27,39],o:2},parrot:{a:"Parrot",b:"1F99C",k:[42,46],o:11},bus:{a:"Bus",b:"1F68C",j:["car","vehicle","transportation"],k:[34,11],o:2},"flag-eg":{a:"Egypt Flag",b:"1F1EA-1F1EC",k:[1,42],o:2},arrow_forward:{a:"Black Right-Pointing Triangle",b:"25B6-FE0F",c:"25B6",j:["blue-square","right","direction","play"],k:[52,43],o:2},"man-frowning":{a:"Man Frowning",b:"1F64D-200D-2642-FE0F",c:"1F64D-200D-2642",k:[33,20],o:4},disappointed_relieved:{a:"Disappointed but Relieved Face",b:"1F625",j:["face","phew","sweat","nervous"],k:[31,15],o:2},electric_plug:{a:"Electric Plug",b:"1F50C",j:["charger","power"],k:[27,40],o:2},frame_with_picture:{a:"Frame with Picture",b:"1F5BC-FE0F",c:"1F5BC",k:[30,14],o:2},oncoming_bus:{a:"Oncoming Bus",b:"1F68D",j:["vehicle","transportation"],k:[34,12],o:2},dango:{a:"Dango",b:"1F361",j:["food","dessert","sweet","japanese","barbecue","meat"],k:[7,0],o:2},frog:{a:"Frog Face",b:"1F438",j:["animal","nature","croak","toad"],k:[12,28],o:2},computer:{a:"Personal Computer",b:"1F4BB",j:["technology","laptop","screen","display","monitor"],k:[26,17],o:2},art:{a:"Artist Palette",b:"1F3A8",j:["design","paint","draw","colors"],k:[8,14],o:2},"flag-eh":{a:"Western Sahara Flag",b:"1F1EA-1F1ED",k:[1,43],o:2},fast_forward:{a:"Black Right-Pointing Double Triangle",b:"23E9",j:["blue-square","play","speed","continue"],k:[52,26],o:2},cry:{a:"Crying Face",b:"1F622",j:["face","tears","sad","depressed","upset",":'("],k:[31,12],l:[":'("],m:":'(",o:2},"woman-frowning":{obsoletes:"1F64D",a:"Woman Frowning",b:"1F64D-200D-2640-FE0F",c:"1F64D-200D-2640",k:[33,14],o:4},trolleybus:{a:"Trolleybus",b:"1F68E",j:["bart","transportation","vehicle"],k:[34,13],o:2},crocodile:{a:"Crocodile",b:"1F40A",j:["animal","nature","reptile","lizard","alligator"],k:[11,38],o:2},dumpling:{a:"Dumpling",b:"1F95F",k:[41,46],o:5},black_right_pointing_double_triangle_with_vertical_bar:{a:"Black Right Pointing Double Triangle with Vertical Bar",b:"23ED-FE0F",c:"23ED",k:[52,30],o:2},desktop_computer:{a:"Desktop Computer",b:"1F5A5-FE0F",c:"1F5A5",j:["technology","computing","screen"],k:[30,10],o:2},turtle:{a:"Turtle",b:"1F422",j:["animal","slow","nature","tortoise"],k:[12,6],o:2},sob:{a:"Loudly Crying Face",b:"1F62D",j:["face","cry","tears","sad","upset","depressed"],k:[31,23],m:":'(",o:2},"flag-er":{a:"Eritrea Flag",b:"1F1EA-1F1F7",k:[1,44],o:2},thread:{a:"Spool of Thread",b:"1F9F5",k:[51,40],o:11},minibus:{a:"Minibus",b:"1F690",j:["vehicle","car","transportation"],k:[34,15],o:2},fortune_cookie:{a:"Fortune Cookie",b:"1F960",k:[41,47],o:5},yarn:{a:"Ball of Yarn",b:"1F9F6",k:[51,41],o:11},takeout_box:{a:"Takeout Box",b:"1F961",k:[41,48],o:5},"man-pouting":{a:"Man Pouting",b:"1F64E-200D-2642-FE0F",c:"1F64E-200D-2642",k:[33,38],o:4},printer:{a:"Printer",b:"1F5A8-FE0F",c:"1F5A8",j:["paper","ink"],k:[30,11],o:2},scream:{a:"Face Screaming in Fear",b:"1F631",j:["face","munch","scared","omg"],k:[31,27],o:2},es:{a:"Spain Flag",b:"1F1EA-1F1F8",j:["spain","flag","nation","country","banner"],k:[1,45],n:["flag-es"],o:2},ambulance:{a:"Ambulance",b:"1F691",j:["health","911","hospital"],k:[34,16],o:2},black_right_pointing_triangle_with_double_vertical_bar:{a:"Black Right Pointing Triangle with Double Vertical Bar",b:"23EF-FE0F",c:"23EF",k:[52,32],o:2},lizard:{a:"Lizard",b:"1F98E",j:["animal","nature","reptile"],k:[42,32],o:4},"flag-et":{a:"Ethiopia Flag",b:"1F1EA-1F1F9",k:[1,46],o:2},keyboard:{a:"Keyboard",b:"2328-FE0F",c:"2328",j:["technology","computer","type","input","text"],k:[52,24],o:2},crab:{a:"Crab",b:"1F980",j:["animal","crustacean"],k:[42,18],o:2},confounded:{a:"Confounded Face",b:"1F616",j:["face","confused","sick","unwell","oops",":S"],k:[31,0],o:2},snake:{a:"Snake",b:"1F40D",j:["animal","evil","nature","hiss","python"],k:[11,41],o:2},"woman-pouting":{obsoletes:"1F64E",a:"Woman Pouting",b:"1F64E-200D-2640-FE0F",c:"1F64E-200D-2640",k:[33,32],o:4},arrow_backward:{a:"Black Left-Pointing Triangle",b:"25C0-FE0F",c:"25C0",j:["blue-square","left","direction"],k:[52,44],o:2},fire_engine:{a:"Fire Engine",b:"1F692",j:["transportation","cars","vehicle"],k:[34,17],o:2},rewind:{a:"Black Left-Pointing Double Triangle",b:"23EA",j:["play","blue-square"],k:[52,27],o:2},three_button_mouse:{a:"Three Button Mouse",b:"1F5B1-FE0F",c:"1F5B1",k:[30,12],o:2},police_car:{a:"Police Car",b:"1F693",j:["vehicle","cars","transportation","law","legal","enforcement"],k:[34,18],o:2},dragon_face:{a:"Dragon Face",b:"1F432",j:["animal","myth","nature","chinese","green"],k:[12,22],o:2},persevere:{a:"Persevering Face",b:"1F623",j:["face","sick","no","upset","oops"],k:[31,13],o:2},lobster:{a:"Lobster",b:"1F99E",k:[42,48],o:11},"flag-eu":{a:"European Union Flag",b:"1F1EA-1F1FA",k:[1,47],o:2},disappointed:{a:"Disappointed Face",b:"1F61E",j:["face","sad","upset","depressed",":("],k:[31,8],l:["):",":(",":-("],m:":(",o:2},shrimp:{a:"Shrimp",b:"1F990",j:["animal","ocean","nature","seafood"],k:[42,34],o:4},dragon:{a:"Dragon",b:"1F409",j:["animal","myth","nature","chinese","green"],k:[11,37],o:2},"man-gesturing-no":{a:"Man Gesturing No",b:"1F645-200D-2642-FE0F",c:"1F645-200D-2642",k:[31,53],o:4},"flag-fi":{a:"Finland Flag",b:"1F1EB-1F1EE",k:[1,48],o:2},trackball:{a:"Trackball",b:"1F5B2-FE0F",c:"1F5B2",j:["technology","trackpad"],k:[30,13],o:2},black_left_pointing_double_triangle_with_vertical_bar:{a:"Black Left Pointing Double Triangle with Vertical Bar",b:"23EE-FE0F",c:"23EE",k:[52,31],o:2},oncoming_police_car:{a:"Oncoming Police Car",b:"1F694",j:["vehicle","law","legal","enforcement","911"],k:[34,19],o:2},minidisc:{a:"Minidisc",b:"1F4BD",j:["technology","record","data","disk","90s"],k:[26,19],o:2},sweat:{a:"Face with Cold Sweat",b:"1F613",j:["face","hot","sad","tired","exercise"],k:[30,54],o:2},squid:{a:"Squid",b:"1F991",j:["animal","nature","ocean","sea"],k:[42,35],o:4},sauropod:{a:"Sauropod",b:"1F995",k:[42,39],o:5},arrow_up_small:{a:"Up-Pointing Small Red Triangle",b:"1F53C",j:["blue-square","triangle","direction","point","forward","top"],k:[28,31],o:2},"flag-fj":{a:"Fiji Flag",b:"1F1EB-1F1EF",k:[1,49],o:2},"woman-gesturing-no":{obsoletes:"1F645",a:"Woman Gesturing No",b:"1F645-200D-2640-FE0F",c:"1F645-200D-2640",k:[31,47],o:4},taxi:{a:"Taxi",b:"1F695",j:["uber","vehicle","cars","transportation"],k:[34,20],o:2},"flag-fk":{a:"Falkland Islands Flag",b:"1F1EB-1F1F0",k:[1,50],o:2},floppy_disk:{a:"Floppy Disk",b:"1F4BE",j:["oldschool","technology","save","90s","80s"],k:[26,20],o:2},"t-rex":{a:"T-Rex",b:"1F996",k:[42,40],o:5},oyster:{a:"Oyster",b:"1F9AA",k:[43,1],o:12},arrow_double_up:{a:"Black Up-Pointing Double Triangle",b:"23EB",j:["blue-square","direction","top"],k:[52,28],o:2},oncoming_taxi:{a:"Oncoming Taxi",b:"1F696",j:["vehicle","cars","uber"],k:[34,21],o:2},weary:{a:"Weary Face",b:"1F629",j:["face","tired","sleepy","sad","frustrated","upset"],k:[31,19],o:2},"man-gesturing-ok":{a:"Man Gesturing Ok",b:"1F646-200D-2642-FE0F",c:"1F646-200D-2642",k:[32,14],o:4},arrow_down_small:{a:"Down-Pointing Small Red Triangle",b:"1F53D",j:["blue-square","direction","bottom"],k:[28,32],o:2},tired_face:{a:"Tired Face",b:"1F62B",j:["sick","whine","upset","frustrated"],k:[31,21],o:2},car:{a:"Automobile",b:"1F697",k:[34,22],n:["red_car"],o:2},icecream:{a:"Soft Ice Cream",b:"1F366",j:["food","hot","dessert","summer"],k:[7,5],o:2},cd:{a:"Optical Disc",b:"1F4BF",j:["technology","dvd","disk","disc","90s"],k:[26,21],o:2},whale:{a:"Spouting Whale",b:"1F433",j:["animal","nature","sea","ocean"],k:[12,23],o:2},"flag-fm":{a:"Micronesia Flag",b:"1F1EB-1F1F2",k:[1,51],o:2},oncoming_automobile:{a:"Oncoming Automobile",b:"1F698",j:["car","vehicle","transportation"],k:[34,23],o:2},arrow_double_down:{a:"Black Down-Pointing Double Triangle",b:"23EC",j:["blue-square","direction","bottom"],k:[52,29],o:2},"woman-gesturing-ok":{obsoletes:"1F646",a:"Woman Gesturing Ok",b:"1F646-200D-2640-FE0F",c:"1F646-200D-2640",k:[32,8],o:4},yawning_face:{a:"Yawning Face",b:"1F971",k:[42,7],o:12},dvd:{a:"Dvd",b:"1F4C0",j:["cd","disk","disc"],k:[26,22],o:2},whale2:{a:"Whale",b:"1F40B",j:["animal","nature","sea","ocean"],k:[11,39],o:2},"flag-fo":{a:"Faroe Islands Flag",b:"1F1EB-1F1F4",k:[1,52],o:2},shaved_ice:{a:"Shaved Ice",b:"1F367",j:["hot","dessert","summer"],k:[7,6],o:2},double_vertical_bar:{a:"Double Vertical Bar",b:"23F8-FE0F",c:"23F8",k:[52,37],o:2},dolphin:{a:"Dolphin",b:"1F42C",j:["animal","nature","fish","sea","ocean","flipper","fins","beach"],k:[12,16],n:["flipper"],o:2},blue_car:{a:"Recreational Vehicle",b:"1F699",j:["transportation","vehicle"],k:[34,24],o:2},ice_cream:{a:"Ice Cream",b:"1F368",j:["food","hot","dessert"],k:[7,7],o:2},fr:{a:"France Flag",b:"1F1EB-1F1F7",j:["banner","flag","nation","france","french","country"],k:[1,53],n:["flag-fr"],o:2},triumph:{a:"Face with Look of Triumph",b:"1F624",j:["face","gas","phew","proud","pride"],k:[31,14],o:2},abacus:{a:"Abacus",b:"1F9EE",k:[51,33],o:11},"man-tipping-hand":{a:"Man Tipping Hand",b:"1F481-200D-2642-FE0F",c:"1F481-200D-2642",k:[23,53],o:4},doughnut:{a:"Doughnut",b:"1F369",j:["food","dessert","snack","sweet","donut"],k:[7,8],o:2},fish:{a:"Fish",b:"1F41F",j:["animal","food","nature"],k:[12,3],o:2},truck:{a:"Delivery Truck",b:"1F69A",j:["cars","transportation"],k:[34,25],o:2},movie_camera:{a:"Movie Camera",b:"1F3A5",j:["film","record"],k:[8,11],o:2},"flag-ga":{a:"Gabon Flag",b:"1F1EC-1F1E6",k:[1,54],o:2},rage:{a:"Pouting Face",b:"1F621",j:["angry","mad","hate","despise"],k:[31,11],o:2},black_square_for_stop:{a:"Black Square for Stop",b:"23F9-FE0F",c:"23F9",k:[52,38],o:2},articulated_lorry:{a:"Articulated Lorry",b:"1F69B",j:["vehicle","cars","transportation","express"],k:[34,26],o:2},angry:{a:"Angry Face",b:"1F620",j:["mad","face","annoyed","frustrated"],k:[31,10],l:[">:(",">:-("],o:2},cookie:{a:"Cookie",b:"1F36A",j:["food","snack","oreo","chocolate","sweet","dessert"],k:[7,9],o:2},gb:{a:"United Kingdom Flag",b:"1F1EC-1F1E7",k:[1,55],n:["uk","flag-gb"],o:2},tropical_fish:{a:"Tropical Fish",b:"1F420",j:["animal","swim","ocean","beach","nemo"],k:[12,4],o:2},"woman-tipping-hand":{obsoletes:"1F481",a:"Woman Tipping Hand",b:"1F481-200D-2640-FE0F",c:"1F481-200D-2640",k:[23,47],o:4},black_circle_for_record:{a:"Black Circle for Record",b:"23FA-FE0F",c:"23FA",k:[52,39],o:2},film_frames:{a:"Film Frames",b:"1F39E-FE0F",c:"1F39E",k:[8,4],o:2},film_projector:{a:"Film Projector",b:"1F4FD-FE0F",c:"1F4FD",j:["video","tape","record","movie"],k:[27,26],o:2},"flag-gd":{a:"Grenada Flag",b:"1F1EC-1F1E9",k:[1,56],o:2},blowfish:{a:"Blowfish",b:"1F421",j:["animal","nature","food","sea","ocean"],k:[12,5],o:2},face_with_symbols_on_mouth:{a:"Serious Face with Symbols Covering Mouth",b:"1F92C",k:[38,46],n:["serious_face_with_symbols_covering_mouth"],o:5},birthday:{a:"Birthday Cake",b:"1F382",j:["food","dessert","cake"],k:[7,33],o:2},eject:{a:"Eject",b:"23CF-FE0F",c:"23CF",k:[52,25],o:2},tractor:{a:"Tractor",b:"1F69C",j:["vehicle","car","farming","agriculture"],k:[34,27],o:2},"flag-ge":{a:"Georgia Flag",b:"1F1EC-1F1EA",k:[2,0],o:2},smiling_imp:{a:"Smiling Face with Horns",b:"1F608",j:["devil","horns"],k:[30,43],o:2},racing_car:{a:"Racing Car",b:"1F3CE-FE0F",c:"1F3CE",j:["sports","race","fast","formula","f1"],k:[10,33],o:2},cinema:{a:"Cinema",b:"1F3A6",j:["blue-square","record","film","movie","curtain","stage","theater"],k:[8,12],o:2},clapper:{a:"Clapper Board",b:"1F3AC",j:["movie","film","record"],k:[8,18],o:2},shark:{a:"Shark",b:"1F988",j:["animal","nature","fish","sea","ocean","jaws","fins","beach"],k:[42,26],o:4},cake:{a:"Shortcake",b:"1F370",j:["food","dessert"],k:[7,15],o:2},"man-raising-hand":{a:"Man Raising Hand",b:"1F64B-200D-2642-FE0F",c:"1F64B-200D-2642",k:[32,53],o:4},octopus:{a:"Octopus",b:"1F419",j:["animal","creature","ocean","sea","nature","beach"],k:[11,54],o:2},"woman-raising-hand":{obsoletes:"1F64B",a:"Woman Raising Hand",b:"1F64B-200D-2640-FE0F",c:"1F64B-200D-2640",k:[32,47],o:4},"flag-gf":{a:"French Guiana Flag",b:"1F1EC-1F1EB",k:[2,1],o:2},tv:{a:"Television",b:"1F4FA",j:["technology","program","oldschool","show","television"],k:[27,23],o:2},imp:{a:"Imp",b:"1F47F",j:["devil","angry","horns"],k:[23,45],o:2},cupcake:{a:"Cupcake",b:"1F9C1",k:[44,9],o:11},racing_motorcycle:{a:"Racing Motorcycle",b:"1F3CD-FE0F",c:"1F3CD",k:[10,32],o:2},low_brightness:{a:"Low Brightness Symbol",b:"1F505",j:["sun","afternoon","warm","summer"],k:[27,33],o:2},shell:{a:"Spiral Shell",b:"1F41A",j:["nature","sea","beach"],k:[11,55],o:2},"flag-gg":{a:"Guernsey Flag",b:"1F1EC-1F1EC",k:[2,2],o:2},high_brightness:{a:"High Brightness Symbol",b:"1F506",j:["sun","light"],k:[27,34],o:2},deaf_person:{a:"Deaf Person",b:"1F9CF",k:[45,10],o:12},skull:{a:"Skull",b:"1F480",j:["dead","skeleton","creepy","death"],k:[23,46],o:2},motor_scooter:{a:"Motor Scooter",b:"1F6F5",j:["vehicle","vespa","sasha"],k:[36,54],o:4},camera:{a:"Camera",b:"1F4F7",j:["gadgets","photography"],k:[27,20],o:2},pie:{a:"Pie",b:"1F967",k:[41,54],o:5},"flag-gh":{a:"Ghana Flag",b:"1F1EC-1F1ED",k:[2,3],o:2},deaf_man:{a:"Deaf Man",b:"1F9CF-200D-2642-FE0F",c:"1F9CF-200D-2642",k:[45,4],o:12},skull_and_crossbones:{a:"Skull and Crossbones",b:"2620-FE0F",c:"2620",j:["poison","danger","deadly","scary","death","pirate","evil"],k:[53,8],o:2},camera_with_flash:{a:"Camera with Flash",b:"1F4F8",k:[27,21],o:2},signal_strength:{a:"Antenna with Bars",b:"1F4F6",j:["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],k:[27,19],o:2},chocolate_bar:{a:"Chocolate Bar",b:"1F36B",j:["food","snack","dessert","sweet"],k:[7,10],o:2},manual_wheelchair:{a:"Manual Wheelchair",b:"1F9BD",k:[44,5],o:12},snail:{a:"Snail",b:"1F40C",j:["slow","animal","shell"],k:[11,40],o:2},motorized_wheelchair:{a:"Motorized Wheelchair",b:"1F9BC",k:[44,4],o:12},"flag-gi":{a:"Gibraltar Flag",b:"1F1EC-1F1EE",k:[2,4],o:2},hankey:{a:"Pile of Poo",b:"1F4A9",k:[25,51],n:["poop","shit"],o:2},vibration_mode:{a:"Vibration Mode",b:"1F4F3",j:["orange-square","phone"],k:[27,16],o:2},deaf_woman:{a:"Deaf Woman",b:"1F9CF-200D-2640-FE0F",c:"1F9CF-200D-2640",k:[44,55],o:12},butterfly:{a:"Butterfly",b:"1F98B",j:["animal","insect","nature","caterpillar"],k:[42,29],o:4},video_camera:{a:"Video Camera",b:"1F4F9",j:["film","record"],k:[27,22],o:2},candy:{a:"Candy",b:"1F36C",j:["snack","dessert","sweet","lolly"],k:[7,11],o:2},auto_rickshaw:{a:"Auto Rickshaw",b:"1F6FA",k:[37,2],o:12},mobile_phone_off:{a:"Mobile Phone off",b:"1F4F4",j:["mute","orange-square","silence","quiet"],k:[27,17],o:2},clown_face:{a:"Clown Face",b:"1F921",j:["face"],k:[38,18],o:4},lollipop:{a:"Lollipop",b:"1F36D",j:["food","snack","candy","sweet"],k:[7,12],o:2},"flag-gl":{a:"Greenland Flag",b:"1F1EC-1F1F1",k:[2,5],o:2},vhs:{a:"Videocassette",b:"1F4FC",j:["record","video","oldschool","90s","80s"],k:[27,25],o:2},bug:{a:"Bug",b:"1F41B",j:["animal","insect","nature","worm"],k:[11,56],o:2},bike:{a:"Bicycle",b:"1F6B2",j:["sports","bicycle","exercise","hipster"],k:[35,9],o:2},"man-bowing":{obsoletes:"1F647",a:"Man Bowing",b:"1F647-200D-2642-FE0F",c:"1F647-200D-2642",k:[32,32],o:4},female_sign:{a:"Female Sign",b:"2640-FE0F",c:"2640",k:[53,18],o:4},japanese_ogre:{a:"Japanese Ogre",b:"1F479",j:["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],k:[23,34],o:2},custard:{a:"Custard",b:"1F36E",j:["dessert","food"],k:[7,13],o:2},ant:{a:"Ant",b:"1F41C",j:["animal","insect","nature","bug"],k:[12,0],o:2},mag:{a:"Left-Pointing Magnifying Glass",b:"1F50D",j:["search","zoom","find","detective"],k:[27,41],o:2},"flag-gm":{a:"Gambia Flag",b:"1F1EC-1F1F2",k:[2,6],o:2},honey_pot:{a:"Honey Pot",b:"1F36F",j:["bees","sweet","kitchen"],k:[7,14],o:2},"woman-bowing":{a:"Woman Bowing",b:"1F647-200D-2640-FE0F",c:"1F647-200D-2640",k:[32,26],o:4},male_sign:{a:"Male Sign",b:"2642-FE0F",c:"2642",k:[53,19],o:4},mag_right:{a:"Right-Pointing Magnifying Glass",b:"1F50E",j:["search","zoom","find","detective"],k:[27,42],o:2},japanese_goblin:{a:"Japanese Goblin",b:"1F47A",j:["red","evil","mask","monster","scary","creepy","japanese","goblin"],k:[23,35],o:2},scooter:{a:"Scooter",b:"1F6F4",k:[36,53],o:4},bee:{a:"Honeybee",b:"1F41D",k:[12,1],n:["honeybee"],o:2},"flag-gn":{a:"Guinea Flag",b:"1F1EC-1F1F3",k:[2,7],o:2},candle:{a:"Candle",b:"1F56F-FE0F",c:"1F56F",j:["fire","wax"],k:[29,6],o:2},skateboard:{a:"Skateboard",b:"1F6F9",k:[37,1],o:11},medical_symbol:{a:"Medical Symbol",b:"2695-FE0F",c:"2695",k:[53,44],n:["staff_of_aesculapius"],o:4},ghost:{a:"Ghost",b:"1F47B",j:["halloween","spooky","scary"],k:[23,36],o:2},beetle:{a:"Lady Beetle",b:"1F41E",j:["animal","insect","nature","ladybug"],k:[12,2],o:2},"flag-gp":{a:"Guadeloupe Flag",b:"1F1EC-1F1F5",k:[2,8],o:2},baby_bottle:{a:"Baby Bottle",b:"1F37C",j:["food","container","milk"],k:[7,27],o:2},infinity:{a:"Infinity",b:"267E-FE0F",c:"267E",k:[53,39],o:11},glass_of_milk:{a:"Glass of Milk",b:"1F95B",k:[41,42],o:4},"man-facepalming":{a:"Man Facepalming",b:"1F926-200D-2642-FE0F",c:"1F926-200D-2642",k:[38,29],o:4},cricket:{a:"Cricket",b:"1F997",j:["sports"],k:[42,41],o:5},busstop:{a:"Bus Stop",b:"1F68F",j:["transportation","wait"],k:[34,14],o:2},"flag-gq":{a:"Equatorial Guinea Flag",b:"1F1EC-1F1F6",k:[2,9],o:2},alien:{a:"Extraterrestrial Alien",b:"1F47D",j:["UFO","paul","weird","outer_space"],k:[23,43],o:2},bulb:{a:"Electric Light Bulb",b:"1F4A1",j:["light","electricity","idea"],k:[25,43],o:2},"woman-facepalming":{a:"Woman Facepalming",b:"1F926-200D-2640-FE0F",c:"1F926-200D-2640",k:[38,23],o:4},spider:{a:"Spider",b:"1F577-FE0F",c:"1F577",j:["animal","arachnid"],k:[29,34],o:2},space_invader:{a:"Alien Monster",b:"1F47E",j:["game","arcade","play"],k:[23,44],o:2},motorway:{a:"Motorway",b:"1F6E3-FE0F",c:"1F6E3",j:["road","cupertino","interstate","highway"],k:[36,45],o:2},"flag-gr":{a:"Greece Flag",b:"1F1EC-1F1F7",k:[2,10],o:2},recycle:{a:"Black Universal Recycling Symbol",b:"267B-FE0F",c:"267B",j:["arrow","environment","garbage","trash"],k:[53,38],o:2},coffee:{a:"Hot Beverage",b:"2615",j:["beverage","caffeine","latte","espresso"],k:[53,0],o:2},flashlight:{a:"Electric Torch",b:"1F526",j:["dark","camping","sight","night"],k:[28,9],o:2},spider_web:{a:"Spider Web",b:"1F578-FE0F",c:"1F578",j:["animal","insect","arachnid","silk"],k:[29,35],o:2},izakaya_lantern:{a:"Izakaya Lantern",b:"1F3EE",j:["light","paper","halloween","spooky"],k:[11,8],n:["lantern"],o:2},"flag-gs":{a:"South Georgia & South Sandwich Islands Flag",b:"1F1EC-1F1F8",k:[2,11],o:2},fleur_de_lis:{a:"Fleur De Lis",b:"269C-FE0F",c:"269C",j:["decorative","scout"],k:[53,49],o:2},robot_face:{a:"Robot Face",b:"1F916",k:[37,29],o:2},railway_track:{a:"Railway Track",b:"1F6E4-FE0F",c:"1F6E4",j:["train","transportation"],k:[36,46],o:2},tea:{a:"Teacup Without Handle",b:"1F375",j:["drink","bowl","breakfast","green","british"],k:[7,20],o:2},"flag-gt":{a:"Guatemala Flag",b:"1F1EC-1F1F9",k:[2,12],o:2},oil_drum:{a:"Oil Drum",b:"1F6E2-FE0F",c:"1F6E2",j:["barrell"],k:[36,44],o:2},diya_lamp:{a:"Diya Lamp",b:"1FA94",k:[52,8],o:12},sake:{a:"Sake Bottle and Cup",b:"1F376",j:["wine","drink","drunk","beverage","japanese","alcohol","booze"],k:[7,21],o:2},trident:{a:"Trident Emblem",b:"1F531",j:["weapon","spear"],k:[28,20],o:2},"man-shrugging":{a:"Man Shrugging",b:"1F937-200D-2642-FE0F",c:"1F937-200D-2642",k:[39,41],o:4},smiley_cat:{a:"Smiling Cat Face with Open Mouth",b:"1F63A",j:["animal","cats","happy","smile"],k:[31,36],o:2},scorpion:{a:"Scorpion",b:"1F982",j:["animal","arachnid"],k:[42,20],o:2},"woman-shrugging":{a:"Woman Shrugging",b:"1F937-200D-2640-FE0F",c:"1F937-200D-2640",k:[39,35],o:4},notebook_with_decorative_cover:{a:"Notebook with Decorative Cover",b:"1F4D4",j:["classroom","notes","record","paper","study"],k:[26,42],o:2},fuelpump:{a:"Fuel Pump",b:"26FD",j:["gas station","petroleum"],k:[54,38],o:2},name_badge:{a:"Name Badge",b:"1F4DB",j:["fire","forbid"],k:[26,49],o:2},mosquito:{a:"Mosquito",b:"1F99F",k:[42,49],o:11},"flag-gu":{a:"Guam Flag",b:"1F1EC-1F1FA",k:[2,13],o:2},smile_cat:{a:"Grinning Cat Face with Smiling Eyes",b:"1F638",j:["animal","cats","smile"],k:[31,34],o:2},champagne:{a:"Bottle with Popping Cork",b:"1F37E",j:["drink","wine","bottle","celebration"],k:[7,29],o:2},joy_cat:{a:"Cat Face with Tears of Joy",b:"1F639",j:["animal","cats","haha","happy","tears"],k:[31,35],o:2},closed_book:{a:"Closed Book",b:"1F4D5",j:["read","library","knowledge","textbook","learn"],k:[26,43],o:2},rotating_light:{a:"Police Cars Revolving Light",b:"1F6A8",j:["police","ambulance","911","emergency","alert","error","pinged","law","legal"],k:[34,56],o:2},microbe:{a:"Microbe",b:"1F9A0",k:[42,50],o:11},"flag-gw":{a:"Guinea-Bissau Flag",b:"1F1EC-1F1FC",k:[2,14],o:2},wine_glass:{a:"Wine Glass",b:"1F377",j:["drink","beverage","drunk","alcohol","booze"],k:[7,22],o:2},beginner:{a:"Japanese Symbol for Beginner",b:"1F530",j:["badge","shield"],k:[28,19],o:2},bouquet:{a:"Bouquet",b:"1F490",j:["flowers","nature","spring"],k:[25,26],o:2},heart_eyes_cat:{a:"Smiling Cat Face with Heart-Shaped Eyes",b:"1F63B",j:["animal","love","like","affection","cats","valentines","heart"],k:[31,37],o:2},"male-doctor":{a:"Male Doctor",b:"1F468-200D-2695-FE0F",c:"1F468-200D-2695",k:[17,2],o:4},book:{a:"Open Book",b:"1F4D6",k:[26,44],n:["open_book"],o:2},traffic_light:{a:"Horizontal Traffic Light",b:"1F6A5",j:["transportation","signal"],k:[34,53],o:2},cocktail:{a:"Cocktail Glass",b:"1F378",j:["drink","drunk","alcohol","beverage","booze","mojito"],k:[7,23],o:2},o:{a:"Heavy Large Circle",b:"2B55",j:["circle","round"],k:[55,43],o:2},"flag-gy":{a:"Guyana Flag",b:"1F1EC-1F1FE",k:[2,15],o:2},"female-doctor":{a:"Female Doctor",b:"1F469-200D-2695-FE0F",c:"1F469-200D-2695",k:[19,44],o:4},smirk_cat:{a:"Cat Face with Wry Smile",b:"1F63C",j:["animal","cats","smirk"],k:[31,38],o:2},green_book:{a:"Green Book",b:"1F4D7",j:["read","library","knowledge","study"],k:[26,45],o:2},cherry_blossom:{a:"Cherry Blossom",b:"1F338",j:["nature","plant","spring","flower"],k:[6,16],o:2},"flag-hk":{a:"Hong Kong Sar China Flag",b:"1F1ED-1F1F0",k:[2,16],o:2},vertical_traffic_light:{a:"Vertical Traffic Light",b:"1F6A6",j:["transportation","driving"],k:[34,54],o:2},white_check_mark:{a:"White Heavy Check Mark",b:"2705",j:["green-square","ok","agree","vote","election","answer","tick"],k:[54,40],o:2},tropical_drink:{a:"Tropical Drink",b:"1F379",j:["beverage","cocktail","summer","beach","alcohol","booze","mojito"],k:[7,24],o:2},kissing_cat:{a:"Kissing Cat Face with Closed Eyes",b:"1F63D",j:["animal","cats","kiss"],k:[31,39],o:2},"flag-hm":{a:"Heard & Mcdonald Islands Flag",b:"1F1ED-1F1F2",k:[2,17],o:2},octagonal_sign:{a:"Octagonal Sign",b:"1F6D1",k:[36,39],o:4},white_flower:{a:"White Flower",b:"1F4AE",j:["japanese","spring"],k:[26,4],o:2},ballot_box_with_check:{a:"Ballot Box with Check",b:"2611-FE0F",c:"2611",j:["ok","agree","confirm","black-square","vote","election","yes","tick"],k:[52,55],o:2},blue_book:{a:"Blue Book",b:"1F4D8",j:["read","library","knowledge","learn","study"],k:[26,46],o:2},beer:{a:"Beer Mug",b:"1F37A",j:["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],k:[7,25],o:2},construction:{a:"Construction Sign",b:"1F6A7",j:["wip","progress","caution","warning"],k:[34,55],o:2},rosette:{a:"Rosette",b:"1F3F5-FE0F",c:"1F3F5",j:["flower","decoration","military"],k:[11,18],o:2},heavy_check_mark:{a:"Heavy Check Mark",b:"2714-FE0F",c:"2714",j:["ok","nike","answer","yes","tick"],k:[55,12],o:2},scream_cat:{a:"Weary Cat Face",b:"1F640",j:["animal","cats","munch","scared","scream"],k:[31,42],o:2},orange_book:{a:"Orange Book",b:"1F4D9",j:["read","library","knowledge","textbook","study"],k:[26,47],o:2},beers:{a:"Clinking Beer Mugs",b:"1F37B",j:["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],k:[7,26],o:2},"male-student":{a:"Male Student",b:"1F468-200D-1F393",k:[14,50],o:4},"flag-hn":{a:"Honduras Flag",b:"1F1ED-1F1F3",k:[2,18],o:2},crying_cat_face:{a:"Crying Cat Face",b:"1F63F",j:["animal","tears","weep","sad","cats","upset","cry"],k:[31,41],o:2},anchor:{a:"Anchor",b:"2693",j:["ship","ferry","sea","boat"],k:[53,42],o:2},"flag-hr":{a:"Croatia Flag",b:"1F1ED-1F1F7",k:[2,19],o:2},heavy_multiplication_x:{a:"Heavy Multiplication X",b:"2716-FE0F",c:"2716",j:["math","calculation"],k:[55,13],o:2},"female-student":{a:"Female Student",b:"1F469-200D-1F393",k:[17,40],o:4},rose:{a:"Rose",b:"1F339",j:["flowers","valentines","love","spring"],k:[6,17],o:2},books:{a:"Books",b:"1F4DA",j:["literature","library","study"],k:[26,48],o:2},clinking_glasses:{a:"Clinking Glasses",b:"1F942",j:["beverage","drink","party","alcohol","celebrate","cheers"],k:[41,18],o:4},x:{a:"Cross Mark",b:"274C",j:["no","delete","remove","cancel"],k:[55,21],o:2},pouting_cat:{a:"Pouting Cat Face",b:"1F63E",j:["animal","cats"],k:[31,40],o:2},wilted_flower:{a:"Wilted Flower",b:"1F940",j:["plant","nature","flower"],k:[41,16],o:4},boat:{a:"Sailboat",b:"26F5",k:[54,16],n:["sailboat"],o:2},"flag-ht":{a:"Haiti Flag",b:"1F1ED-1F1F9",k:[2,20],o:2},tumbler_glass:{a:"Tumbler Glass",b:"1F943",j:["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],k:[41,19],o:4},notebook:{a:"Notebook",b:"1F4D3",j:["stationery","record","notes","paper","study"],k:[26,41],o:2},"male-teacher":{a:"Male Teacher",b:"1F468-200D-1F3EB",k:[15,11],o:4},ledger:{a:"Ledger",b:"1F4D2",j:["notes","paper"],k:[26,40],o:2},"flag-hu":{a:"Hungary Flag",b:"1F1ED-1F1FA",k:[2,21],o:2},cup_with_straw:{a:"Cup with Straw",b:"1F964",k:[41,51],o:5},hibiscus:{a:"Hibiscus",b:"1F33A",j:["plant","vegetable","flowers","beach"],k:[6,18],o:2},see_no_evil:{a:"See-No-Evil Monkey",b:"1F648",j:["monkey","animal","nature","haha"],k:[32,44],o:2},canoe:{a:"Canoe",b:"1F6F6",j:["boat","paddle","water","ship"],k:[36,55],o:4},negative_squared_cross_mark:{a:"Negative Squared Cross Mark",b:"274E",j:["x","green-square","no","deny"],k:[55,22],o:2},"flag-ic":{a:"Canary Islands Flag",b:"1F1EE-1F1E8",k:[2,22],o:2},beverage_box:{a:"Beverage Box",b:"1F9C3",k:[44,11],o:12},speedboat:{a:"Speedboat",b:"1F6A4",j:["ship","transportation","vehicle","summer"],k:[34,52],o:2},heavy_plus_sign:{a:"Heavy Plus Sign",b:"2795",j:["math","calculation","addition","more","increase"],k:[55,29],o:2},sunflower:{a:"Sunflower",b:"1F33B",j:["nature","plant","fall"],k:[6,19],o:2},page_with_curl:{a:"Page with Curl",b:"1F4C3",j:["documents","office","paper"],k:[26,25],o:2},"female-teacher":{a:"Female Teacher",b:"1F469-200D-1F3EB",k:[18,1],o:4},hear_no_evil:{a:"Hear-No-Evil Monkey",b:"1F649",j:["animal","monkey","nature"],k:[32,45],o:2},mate_drink:{a:"Mate Drink",b:"1F9C9",k:[44,17],o:12},passenger_ship:{a:"Passenger Ship",b:"1F6F3-FE0F",c:"1F6F3",j:["yacht","cruise","ferry"],k:[36,52],o:2},scroll:{a:"Scroll",b:"1F4DC",j:["documents","ancient","history","paper"],k:[26,50],o:2},blossom:{a:"Blossom",b:"1F33C",j:["nature","flowers","yellow"],k:[6,20],o:2},"flag-id":{a:"Indonesia Flag",b:"1F1EE-1F1E9",k:[2,23],o:2},speak_no_evil:{a:"Speak-No-Evil Monkey",b:"1F64A",j:["monkey","animal","nature","omg"],k:[32,46],o:2},heavy_minus_sign:{a:"Heavy Minus Sign",b:"2796",j:["math","calculation","subtract","less"],k:[55,30],o:2},"flag-ie":{a:"Ireland Flag",b:"1F1EE-1F1EA",k:[2,24],o:2},ice_cube:{a:"Ice Cube",b:"1F9CA",k:[44,18],o:12},page_facing_up:{a:"Page Facing Up",b:"1F4C4",j:["documents","office","paper","information"],k:[26,26],o:2},"male-judge":{a:"Male Judge",b:"1F468-200D-2696-FE0F",c:"1F468-200D-2696",k:[17,8],o:4},tulip:{a:"Tulip",b:"1F337",j:["flowers","plant","nature","summer","spring"],k:[6,15],o:2},ferry:{a:"Ferry",b:"26F4-FE0F",c:"26F4",j:["boat","ship","yacht"],k:[54,15],o:2},kiss:{a:"Kiss Mark",b:"1F48B",j:["face","lips","love","like","affection","valentines"],k:[25,21],o:2},heavy_division_sign:{a:"Heavy Division Sign",b:"2797",j:["divide","math","calculation"],k:[55,31],o:2},newspaper:{a:"Newspaper",b:"1F4F0",j:["press","headline"],k:[27,13],o:2},"female-judge":{a:"Female Judge",b:"1F469-200D-2696-FE0F",c:"1F469-200D-2696",k:[19,50],o:4},seedling:{a:"Seedling",b:"1F331",j:["plant","nature","grass","lawn","spring"],k:[6,9],o:2},love_letter:{a:"Love Letter",b:"1F48C",j:["email","like","affection","envelope","valentines"],k:[25,22],o:2},chopsticks:{a:"Chopsticks",b:"1F962",k:[41,49],o:5},motor_boat:{a:"Motor Boat",b:"1F6E5-FE0F",c:"1F6E5",j:["ship"],k:[36,47],o:2},"flag-il":{a:"Israel Flag",b:"1F1EE-1F1F1",k:[2,25],o:2},curly_loop:{a:"Curly Loop",b:"27B0",j:["scribble","draw","shape","squiggle"],k:[55,33],o:2},"flag-im":{a:"Isle of Man Flag",b:"1F1EE-1F1F2",k:[2,26],o:2},evergreen_tree:{a:"Evergreen Tree",b:"1F332",j:["plant","nature"],k:[6,10],o:2},cupid:{a:"Heart with Arrow",b:"1F498",j:["love","like","heart","affection","valentines"],k:[25,34],o:2},loop:{a:"Double Curly Loop",b:"27BF",j:["tape","cassette"],k:[55,34],o:2},ship:{a:"Ship",b:"1F6A2",j:["transportation","titanic","deploy"],k:[34,33],o:2},rolled_up_newspaper:{a:"Rolled Up Newspaper",b:"1F5DE-FE0F",c:"1F5DE",k:[30,23],o:2},knife_fork_plate:{a:"Knife Fork Plate",b:"1F37D-FE0F",c:"1F37D",k:[7,28],o:2},fork_and_knife:{a:"Fork and Knife",b:"1F374",j:["cutlery","kitchen"],k:[7,19],o:2},"male-farmer":{a:"Male Farmer",b:"1F468-200D-1F33E",k:[14,38],o:4},bookmark_tabs:{a:"Bookmark Tabs",b:"1F4D1",j:["favorite","save","order","tidy"],k:[26,39],o:2},part_alternation_mark:{a:"Part Alternation Mark",b:"303D-FE0F",c:"303D",j:["graph","presentation","stats","business","economics","bad"],k:[55,45],o:2},"flag-in":{a:"India Flag",b:"1F1EE-1F1F3",k:[2,27],o:2},gift_heart:{a:"Heart with Ribbon",b:"1F49D",j:["love","valentines"],k:[25,39],o:2},airplane:{a:"Airplane",b:"2708-FE0F",c:"2708",j:["vehicle","transportation","flight","fly"],k:[54,41],o:2},deciduous_tree:{a:"Deciduous Tree",b:"1F333",j:["plant","nature"],k:[6,11],o:2},spoon:{a:"Spoon",b:"1F944",j:["cutlery","kitchen","tableware"],k:[41,20],o:4},"flag-io":{a:"British Indian Ocean Territory Flag",b:"1F1EE-1F1F4",k:[2,28],o:2},palm_tree:{a:"Palm Tree",b:"1F334",j:["plant","vegetable","nature","summer","beach","mojito","tropical"],k:[6,12],o:2},sparkling_heart:{a:"Sparkling Heart",b:"1F496",j:["love","like","affection","valentines"],k:[25,32],o:2},"female-farmer":{a:"Female Farmer",b:"1F469-200D-1F33E",k:[17,28],o:4},eight_spoked_asterisk:{a:"Eight Spoked Asterisk",b:"2733-FE0F",c:"2733",j:["star","sparkle","green-square"],k:[55,17],o:2},small_airplane:{a:"Small Airplane",b:"1F6E9-FE0F",c:"1F6E9",j:["flight","transportation","fly","vehicle"],k:[36,48],o:2},bookmark:{a:"Bookmark",b:"1F516",j:["favorite","label","save"],k:[27,50],o:2},eight_pointed_black_star:{a:"Eight Pointed Black Star",b:"2734-FE0F",c:"2734",j:["orange-square","shape","polygon"],k:[55,18],o:2},heartpulse:{a:"Growing Heart",b:"1F497",j:["like","love","affection","valentines","pink"],k:[25,33],o:2},label:{a:"Label",b:"1F3F7-FE0F",c:"1F3F7",j:["sale","tag"],k:[11,19],o:2},"flag-iq":{a:"Iraq Flag",b:"1F1EE-1F1F6",k:[2,29],o:2},hocho:{a:"Hocho",b:"1F52A",j:["knife","blade","cutlery","kitchen","weapon"],k:[28,13],n:["knife"],o:2},cactus:{a:"Cactus",b:"1F335",j:["vegetable","plant","nature"],k:[6,13],o:2},airplane_departure:{a:"Airplane Departure",b:"1F6EB",k:[36,49],o:2},airplane_arriving:{a:"Airplane Arriving",b:"1F6EC",k:[36,50],o:2},ear_of_rice:{a:"Ear of Rice",b:"1F33E",j:["nature","plant"],k:[6,22],o:2},"flag-ir":{a:"Iran Flag",b:"1F1EE-1F1F7",k:[2,30],o:2},moneybag:{a:"Money Bag",b:"1F4B0",j:["dollar","payment","coins","sale"],k:[26,6],o:2},"male-cook":{a:"Male Cook",b:"1F468-200D-1F373",k:[14,44],o:4},heartbeat:{a:"Beating Heart",b:"1F493",j:["love","like","affection","valentines","pink","heart"],k:[25,29],o:2},sparkle:{a:"Sparkle",b:"2747-FE0F",c:"2747",j:["stars","green-square","awesome","good","fireworks"],k:[55,20],o:2},amphora:{a:"Amphora",b:"1F3FA",j:["vase","jar"],k:[11,22],o:2},yen:{a:"Banknote with Yen Sign",b:"1F4B4",j:["money","sales","japanese","dollar","currency"],k:[26,10],o:2},revolving_hearts:{a:"Revolving Hearts",b:"1F49E",j:["love","like","affection","valentines"],k:[25,40],o:2},bangbang:{a:"Double Exclamation Mark",b:"203C-FE0F",c:"203C",j:["exclamation","surprise"],k:[52,10],o:2},parachute:{a:"Parachute",b:"1FA82",k:[52,3],o:12},herb:{a:"Herb",b:"1F33F",j:["vegetable","plant","medicine","weed","grass","lawn"],k:[6,23],o:2},"flag-is":{a:"Iceland Flag",b:"1F1EE-1F1F8",k:[2,31],o:2},"female-cook":{a:"Female Cook",b:"1F469-200D-1F373",k:[17,34],o:4},interrobang:{a:"Exclamation Question Mark",b:"2049-FE0F",c:"2049",j:["wat","punctuation","surprise"],k:[52,11],o:2},seat:{a:"Seat",b:"1F4BA",j:["sit","airplane","transport","bus","flight","fly"],k:[26,16],o:2},dollar:{a:"Banknote with Dollar Sign",b:"1F4B5",j:["money","sales","bill","currency"],k:[26,11],o:2},two_hearts:{a:"Two Hearts",b:"1F495",j:["love","like","affection","valentines","heart"],k:[25,31],o:2},it:{a:"Italy Flag",b:"1F1EE-1F1F9",j:["italy","flag","nation","country","banner"],k:[2,32],n:["flag-it"],o:2},shamrock:{a:"Shamrock",b:"2618-FE0F",c:"2618",j:["vegetable","plant","nature","irish","clover"],k:[53,1],o:2},four_leaf_clover:{a:"Four Leaf Clover",b:"1F340",j:["vegetable","plant","nature","lucky","irish"],k:[6,24],o:2},euro:{a:"Banknote with Euro Sign",b:"1F4B6",j:["money","sales","dollar","currency"],k:[26,12],o:2},question:{a:"Black Question Mark Ornament",b:"2753",j:["doubt","confused"],k:[55,23],o:2},helicopter:{a:"Helicopter",b:"1F681",j:["transportation","vehicle","fly"],k:[34,0],o:2},heart_decoration:{a:"Heart Decoration",b:"1F49F",j:["purple-square","love","like"],k:[25,41],o:2},"flag-je":{a:"Jersey Flag",b:"1F1EF-1F1EA",k:[2,33],o:2},"male-mechanic":{a:"Male Mechanic",b:"1F468-200D-1F527",k:[15,50],o:4},suspension_railway:{a:"Suspension Railway",b:"1F69F",j:["vehicle","transportation"],k:[34,30],o:2},heavy_heart_exclamation_mark_ornament:{a:"Heavy Heart Exclamation Mark Ornament",b:"2763-FE0F",c:"2763",k:[55,27],o:2},"female-mechanic":{a:"Female Mechanic",b:"1F469-200D-1F527",k:[18,35],o:4},"flag-jm":{a:"Jamaica Flag",b:"1F1EF-1F1F2",k:[2,34],o:2},grey_question:{a:"White Question Mark Ornament",b:"2754",j:["doubts","gray","huh","confused"],k:[55,24],o:2},maple_leaf:{a:"Maple Leaf",b:"1F341",j:["nature","plant","vegetable","ca","fall"],k:[6,25],o:2},pound:{a:"Banknote with Pound Sign",b:"1F4B7",j:["british","sterling","money","sales","bills","uk","england","currency"],k:[26,13],o:2},money_with_wings:{a:"Money with Wings",b:"1F4B8",j:["dollar","bills","payment","sale"],k:[26,14],o:2},"flag-jo":{a:"Jordan Flag",b:"1F1EF-1F1F4",k:[2,35],o:2},fallen_leaf:{a:"Fallen Leaf",b:"1F342",j:["nature","plant","vegetable","leaves"],k:[6,26],o:2},broken_heart:{a:"Broken Heart",b:"1F494",j:["sad","sorry","break","heart","heartbreak"],k:[25,30],l:["</3"],m:"</3",o:2},grey_exclamation:{a:"White Exclamation Mark Ornament",b:"2755",j:["surprise","punctuation","gray","wow","warning"],k:[55,25],o:2},mountain_cableway:{a:"Mountain Cableway",b:"1F6A0",j:["transportation","vehicle","ski"],k:[34,31],o:2},exclamation:{a:"Heavy Exclamation Mark Symbol",b:"2757",j:["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],k:[55,26],n:["heavy_exclamation_mark"],o:2},leaves:{a:"Leaf Fluttering in Wind",b:"1F343",j:["nature","plant","tree","vegetable","grass","lawn","spring"],k:[6,27],o:2},heart:{a:"Heavy Black Heart",b:"2764-FE0F",c:"2764",j:["love","like","valentines"],k:[55,28],l:["<3"],m:"<3",o:2},jp:{a:"Japan Flag",b:"1F1EF-1F1F5",j:["japanese","nation","flag","country","banner"],k:[2,36],n:["flag-jp"],o:2},"male-factory-worker":{a:"Male Factory Worker",b:"1F468-200D-1F3ED",k:[15,17],o:4},credit_card:{a:"Credit Card",b:"1F4B3",j:["money","sales","dollar","bill","payment","shopping"],k:[26,9],o:2},aerial_tramway:{a:"Aerial Tramway",b:"1F6A1",j:["transportation","vehicle","ski"],k:[34,32],o:2},"female-factory-worker":{a:"Female Factory Worker",b:"1F469-200D-1F3ED",k:[18,7],o:4},receipt:{a:"Receipt",b:"1F9FE",k:[51,49],o:11},wavy_dash:{a:"Wavy Dash",b:"3030-FE0F",c:"3030",j:["draw","line","moustache","mustache","squiggle","scribble"],k:[55,44],o:2},"flag-ke":{a:"Kenya Flag",b:"1F1F0-1F1EA",k:[2,37],o:2},satellite:{a:"Satellite",b:"1F6F0-FE0F",c:"1F6F0",j:["communication","future","radio","space"],k:[36,51],o:2},orange_heart:{a:"Orange Heart",b:"1F9E1",k:[51,20],o:5},yellow_heart:{a:"Yellow Heart",b:"1F49B",j:["love","like","affection","valentines"],k:[25,37],m:"<3",o:2},rocket:{a:"Rocket",b:"1F680",j:["launch","ship","staffmode","NASA","outer space","outer_space","fly"],k:[33,56],o:2},chart:{a:"Chart with Upwards Trend and Yen Sign",b:"1F4B9",j:["green-square","graph","presentation","stats"],k:[26,15],o:2},"flag-kg":{a:"Kyrgyzstan Flag",b:"1F1F0-1F1EC",k:[2,38],o:2},currency_exchange:{a:"Currency Exchange",b:"1F4B1",j:["money","sales","dollar","travel"],k:[26,7],o:2},green_heart:{a:"Green Heart",b:"1F49A",j:["love","like","affection","valentines"],k:[25,36],m:"<3",o:2},flying_saucer:{a:"Flying Saucer",b:"1F6F8",k:[37,0],o:5},"flag-kh":{a:"Cambodia Flag",b:"1F1F0-1F1ED",k:[2,39],o:2},"male-office-worker":{a:"Male Office Worker",b:"1F468-200D-1F4BC",k:[15,44],o:4},tm:{a:"Trade Mark Sign",b:"2122-FE0F",c:"2122",j:["trademark","brand","law","legal"],k:[52,12],o:2},bellhop_bell:{a:"Bellhop Bell",b:"1F6CE-FE0F",c:"1F6CE",j:["service"],k:[36,36],o:2},blue_heart:{a:"Blue Heart",b:"1F499",j:["love","like","affection","valentines"],k:[25,35],m:"<3",o:2},"flag-ki":{a:"Kiribati Flag",b:"1F1F0-1F1EE",k:[2,40],o:2},heavy_dollar_sign:{a:"Heavy Dollar Sign",b:"1F4B2",j:["money","sales","payment","currency","buck"],k:[26,8],o:2},"female-office-worker":{a:"Female Office Worker",b:"1F469-200D-1F4BC",k:[18,29],o:4},purple_heart:{a:"Purple Heart",b:"1F49C",j:["love","like","affection","valentines"],k:[25,38],m:"<3",o:2},luggage:{a:"Luggage",b:"1F9F3",k:[51,38],o:11},"flag-km":{a:"Comoros Flag",b:"1F1F0-1F1F2",k:[2,41],o:2},email:{a:"Envelope",b:"2709-FE0F",c:"2709",j:["letter","postal","inbox","communication"],k:[54,42],n:["envelope"],o:2},"e-mail":{a:"E-Mail Symbol",b:"1F4E7",j:["communication","inbox"],k:[27,4],o:2},"flag-kn":{a:"St. Kitts & Nevis Flag",b:"1F1F0-1F1F3",k:[2,42],o:2},hourglass:{a:"Hourglass",b:"231B",j:["time","clock","oldschool","limit","exam","quiz","test"],k:[52,23],o:2},brown_heart:{a:"Brown Heart",b:"1F90E",k:[37,16],o:12},"male-scientist":{a:"Male Scientist",b:"1F468-200D-1F52C",k:[15,56],o:4},hourglass_flowing_sand:{a:"Hourglass with Flowing Sand",b:"23F3",j:["oldschool","time","countdown"],k:[52,36],o:2},black_heart:{a:"Black Heart",b:"1F5A4",j:["evil"],k:[30,9],o:4},incoming_envelope:{a:"Incoming Envelope",b:"1F4E8",j:["email","inbox"],k:[27,5],o:2},"flag-kp":{a:"North Korea Flag",b:"1F1F0-1F1F5",k:[2,43],o:2},"female-scientist":{a:"Female Scientist",b:"1F469-200D-1F52C",k:[18,41],o:4},watch:{a:"Watch",b:"231A",j:["time","accessories"],k:[52,22],o:2},white_heart:{a:"White Heart",b:"1F90D",k:[37,15],o:12},kr:{a:"South Korea Flag",b:"1F1F0-1F1F7",j:["south","korea","nation","flag","country","banner"],k:[2,44],n:["flag-kr"],o:2},envelope_with_arrow:{a:"Envelope with Downwards Arrow Above",b:"1F4E9",j:["email","communication"],k:[27,6],o:2},outbox_tray:{a:"Outbox Tray",b:"1F4E4",j:["inbox","email"],k:[27,1],o:2},"male-technologist":{a:"Male Technologist",b:"1F468-200D-1F4BB",k:[15,38],o:4},alarm_clock:{a:"Alarm Clock",b:"23F0",j:["time","wake"],k:[52,33],o:2},"flag-kw":{a:"Kuwait Flag",b:"1F1F0-1F1FC",k:[2,45],o:2},anger:{a:"Anger Symbol",b:"1F4A2",j:["angry","mad"],k:[25,44],o:2},inbox_tray:{a:"Inbox Tray",b:"1F4E5",j:["email","documents"],k:[27,2],o:2},"flag-ky":{a:"Cayman Islands Flag",b:"1F1F0-1F1FE",k:[2,46],o:2},stopwatch:{a:"Stopwatch",b:"23F1-FE0F",c:"23F1",j:["time","deadline"],k:[52,34],o:2},"female-technologist":{a:"Female Technologist",b:"1F469-200D-1F4BB",k:[18,23],o:4},boom:{a:"Collision Symbol",b:"1F4A5",j:["bomb","explode","explosion","collision","blown"],k:[25,47],n:["collision"],o:2},"flag-kz":{a:"Kazakhstan Flag",b:"1F1F0-1F1FF",k:[2,47],o:2},timer_clock:{a:"Timer Clock",b:"23F2-FE0F",c:"23F2",j:["alarm"],k:[52,35],o:2},"package":{a:"Package",b:"1F4E6",j:["mail","gift","cardboard","box","moving"],k:[27,3],o:2},mailbox:{a:"Closed Mailbox with Raised Flag",b:"1F4EB",j:["email","inbox","communication"],k:[27,8],o:2},"flag-la":{a:"Laos Flag",b:"1F1F1-1F1E6",k:[2,48],o:2},dizzy:{a:"Dizzy Symbol",b:"1F4AB",j:["star","sparkle","shoot","magic"],k:[26,1],o:2},"male-singer":{a:"Male Singer",b:"1F468-200D-1F3A4",k:[14,56],o:4},mantelpiece_clock:{a:"Mantelpiece Clock",b:"1F570-FE0F",c:"1F570",j:["time"],k:[29,7],o:2},"female-singer":{a:"Female Singer",b:"1F469-200D-1F3A4",k:[17,46],o:4},"flag-lb":{a:"Lebanon Flag",b:"1F1F1-1F1E7",k:[2,49],o:2},mailbox_closed:{a:"Closed Mailbox with Lowered Flag",b:"1F4EA",j:["email","communication","inbox"],k:[27,7],o:2},sweat_drops:{a:"Splashing Sweat Symbol",b:"1F4A6",j:["water","drip","oops"],k:[25,48],o:2},clock12:{a:"Clock Face Twelve Oclock",b:"1F55B",j:["time","noon","midnight","midday","late","early","schedule"],k:[28,50],o:2},mailbox_with_mail:{a:"Open Mailbox with Raised Flag",b:"1F4EC",j:["email","inbox","communication"],k:[27,9],o:2},clock1230:{a:"Clock Face Twelve-Thirty",b:"1F567",j:["time","late","early","schedule"],k:[29,5],o:2},dash:{a:"Dash Symbol",b:"1F4A8",j:["wind","air","fast","shoo","fart","smoke","puff"],k:[25,50],o:2},"flag-lc":{a:"St. Lucia Flag",b:"1F1F1-1F1E8",k:[2,50],o:2},hole:{a:"Hole",b:"1F573-FE0F",c:"1F573",j:["embarrassing"],k:[29,8],o:2},"male-artist":{a:"Male Artist",b:"1F468-200D-1F3A8",k:[15,5],o:4},clock1:{a:"Clock Face One Oclock",b:"1F550",j:["time","late","early","schedule"],k:[28,39],o:2},mailbox_with_no_mail:{a:"Open Mailbox with Lowered Flag",b:"1F4ED",j:["email","inbox"],k:[27,10],o:2},"flag-li":{a:"Liechtenstein Flag",b:"1F1F1-1F1EE",k:[2,51],o:2},bomb:{a:"Bomb",b:"1F4A3",j:["boom","explode","explosion","terrorism"],k:[25,45],o:2},postbox:{a:"Postbox",b:"1F4EE",j:["email","letter","envelope"],k:[27,11],o:2},"female-artist":{a:"Female Artist",b:"1F469-200D-1F3A8",k:[17,52],o:4},clock130:{a:"Clock Face One-Thirty",b:"1F55C",j:["time","late","early","schedule"],k:[28,51],o:2},"flag-lk":{a:"Sri Lanka Flag",b:"1F1F1-1F1F0",k:[2,52],o:2},ballot_box_with_ballot:{a:"Ballot Box with Ballot",b:"1F5F3-FE0F",c:"1F5F3",k:[30,28],o:2},keycap_ten:{a:"Keycap Ten",b:"1F51F",j:["numbers","10","blue-square"],k:[28,2],o:2},clock2:{a:"Clock Face Two Oclock",b:"1F551",j:["time","late","early","schedule"],k:[28,40],o:2},"flag-lr":{a:"Liberia Flag",b:"1F1F1-1F1F7",k:[2,53],o:2},speech_balloon:{a:"Speech Balloon",b:"1F4AC",j:["bubble","words","message","talk","chatting"],k:[26,2],o:2},"flag-ls":{a:"Lesotho Flag",b:"1F1F1-1F1F8",k:[2,54],o:2},clock230:{a:"Clock Face Two-Thirty",b:"1F55D",j:["time","late","early","schedule"],k:[28,52],o:2},"male-pilot":{a:"Male Pilot",b:"1F468-200D-2708-FE0F",c:"1F468-200D-2708",k:[17,14],o:4},capital_abcd:{a:"Input Symbol for Latin Capital Letters",b:"1F520",j:["alphabet","words","blue-square"],k:[28,3],o:2},pencil2:{a:"Pencil",b:"270F-FE0F",c:"270F",j:["stationery","write","paper","writing","school","study"],k:[55,10],o:2},"female-pilot":{a:"Female Pilot",b:"1F469-200D-2708-FE0F",c:"1F469-200D-2708",k:[19,56],o:4},black_nib:{a:"Black Nib",b:"2712-FE0F",c:"2712",j:["pen","stationery","writing","write"],k:[55,11],o:2},left_speech_bubble:{a:"Left Speech Bubble",b:"1F5E8-FE0F",c:"1F5E8",j:["words","message","talk","chatting"],k:[30,26],o:2},clock3:{a:"Clock Face Three Oclock",b:"1F552",j:["time","late","early","schedule"],k:[28,41],o:2},abcd:{a:"Input Symbol for Latin Small Letters",b:"1F521",j:["blue-square","alphabet"],k:[28,4],o:2},"flag-lt":{a:"Lithuania Flag",b:"1F1F1-1F1F9",k:[2,55],o:2},clock330:{a:"Clock Face Three-Thirty",b:"1F55E",j:["time","late","early","schedule"],k:[28,53],o:2},"flag-lu":{a:"Luxembourg Flag",b:"1F1F1-1F1FA",k:[2,56],o:2},right_anger_bubble:{a:"Right Anger Bubble",b:"1F5EF-FE0F",c:"1F5EF",j:["caption","speech","thinking","mad"],k:[30,27],o:2},lower_left_fountain_pen:{a:"Lower Left Fountain Pen",b:"1F58B-FE0F",c:"1F58B",k:[29,45],o:2},"male-astronaut":{a:"Male Astronaut",b:"1F468-200D-1F680",k:[16,5],o:4},thought_balloon:{a:"Thought Balloon",b:"1F4AD",j:["bubble","cloud","speech","thinking","dream"],k:[26,3],o:2},symbols:{a:"Input Symbol for Symbols",b:"1F523",j:["blue-square","music","note","ampersand","percent","glyphs","characters"],k:[28,6],o:2},clock4:{a:"Clock Face Four Oclock",b:"1F553",j:["time","late","early","schedule"],k:[28,42],o:2},"flag-lv":{a:"Latvia Flag",b:"1F1F1-1F1FB",k:[3,0],o:2},lower_left_ballpoint_pen:{a:"Lower Left Ballpoint Pen",b:"1F58A-FE0F",c:"1F58A",k:[29,44],o:2},abc:{a:"Input Symbol for Latin Letters",b:"1F524",j:["blue-square","alphabet"],k:[28,7],o:2},zzz:{a:"Sleeping Symbol",b:"1F4A4",j:["sleepy","tired","dream"],k:[25,46],o:2},lower_left_paintbrush:{a:"Lower Left Paintbrush",b:"1F58C-FE0F",c:"1F58C",k:[29,46],o:2},"female-astronaut":{a:"Female Astronaut",b:"1F469-200D-1F680",k:[18,47],o:4},"flag-ly":{a:"Libya Flag",b:"1F1F1-1F1FE",k:[3,1],o:2},clock430:{a:"Clock Face Four-Thirty",b:"1F55F",j:["time","late","early","schedule"],k:[28,54],o:2},"flag-ma":{a:"Morocco Flag",b:"1F1F2-1F1E6",k:[3,2],o:2},a:{a:"Negative Squared Latin Capital Letter a",b:"1F170-FE0F",c:"1F170",j:["red-square","alphabet","letter"],k:[0,16],o:2},clock5:{a:"Clock Face Five Oclock",b:"1F554",j:["time","late","early","schedule"],k:[28,43],o:2},lower_left_crayon:{a:"Lower Left Crayon",b:"1F58D-FE0F",c:"1F58D",k:[29,47],o:2},"male-firefighter":{a:"Male Firefighter",b:"1F468-200D-1F692",k:[16,11],o:4},memo:{a:"Memo",b:"1F4DD",j:["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],k:[26,51],n:["pencil"],o:2},ab:{a:"Negative Squared Ab",b:"1F18E",j:["red-square","alphabet"],k:[0,20],o:2},"flag-mc":{a:"Monaco Flag",b:"1F1F2-1F1E8",k:[3,3],o:2},clock530:{a:"Clock Face Five-Thirty",b:"1F560",j:["time","late","early","schedule"],k:[28,55],o:2},briefcase:{a:"Briefcase",b:"1F4BC",j:["business","documents","work","law","legal","job","career"],k:[26,18],o:2},"female-firefighter":{a:"Female Firefighter",b:"1F469-200D-1F692",k:[18,53],o:4},clock6:{a:"Clock Face Six Oclock",b:"1F555",j:["time","late","early","schedule","dawn","dusk"],k:[28,44],o:2},b:{a:"Negative Squared Latin Capital Letter B",b:"1F171-FE0F",c:"1F171",j:["red-square","alphabet","letter"],k:[0,17],o:2},"flag-md":{a:"Moldova Flag",b:"1F1F2-1F1E9",k:[3,4],o:2},clock630:{a:"Clock Face Six-Thirty",b:"1F561",j:["time","late","early","schedule"],k:[28,56],o:2},cl:{a:"Squared Cl",b:"1F191",j:["alphabet","words","red-square"],k:[0,21],o:2},"flag-me":{a:"Montenegro Flag",b:"1F1F2-1F1EA",k:[3,5],o:2},file_folder:{a:"File Folder",b:"1F4C1",j:["documents","business","office"],k:[26,23],o:2},"male-police-officer":{obsoletes:"1F46E",a:"Male Police Officer",b:"1F46E-200D-2642-FE0F",c:"1F46E-200D-2642",k:[21,43],o:4},cool:{a:"Squared Cool",b:"1F192",j:["words","blue-square"],k:[0,22],o:2},clock7:{a:"Clock Face Seven Oclock",b:"1F556",j:["time","late","early","schedule"],k:[28,45],o:2},"flag-mf":{a:"St. Martin Flag",b:"1F1F2-1F1EB",k:[3,6],o:2},open_file_folder:{a:"Open File Folder",b:"1F4C2",j:["documents","load"],k:[26,24],o:2},card_index_dividers:{a:"Card Index Dividers",b:"1F5C2-FE0F",c:"1F5C2",j:["organizing","business","stationery"],k:[30,15],o:2},"flag-mg":{a:"Madagascar Flag",b:"1F1F2-1F1EC",k:[3,7],o:2},free:{a:"Squared Free",b:"1F193",j:["blue-square","words"],k:[0,23],o:2},"female-police-officer":{a:"Female Police Officer",b:"1F46E-200D-2640-FE0F",c:"1F46E-200D-2640",k:[21,37],o:4},clock730:{a:"Clock Face Seven-Thirty",b:"1F562",j:["time","late","early","schedule"],k:[29,0],o:2},date:{a:"Calendar",b:"1F4C5",j:["calendar","schedule"],k:[26,27],o:2},clock8:{a:"Clock Face Eight Oclock",b:"1F557",j:["time","late","early","schedule"],k:[28,46],o:2},information_source:{a:"Information Source",b:"2139-FE0F",c:"2139",j:["blue-square","alphabet","letter"],k:[52,13],o:2},"flag-mh":{a:"Marshall Islands Flag",b:"1F1F2-1F1ED",k:[3,8],o:2},clock830:{a:"Clock Face Eight-Thirty",b:"1F563",j:["time","late","early","schedule"],k:[29,1],o:2},calendar:{a:"Tear-off Calendar",b:"1F4C6",j:["schedule","date","planning"],k:[26,28],o:2},"flag-mk":{a:"North Macedonia Flag",b:"1F1F2-1F1F0",k:[3,9],o:2},id:{a:"Squared Id",b:"1F194",j:["purple-square","words"],k:[0,24],o:2},spiral_note_pad:{a:"Spiral Note Pad",b:"1F5D2-FE0F",c:"1F5D2",k:[30,19],o:2},clock9:{a:"Clock Face Nine Oclock",b:"1F558",j:["time","late","early","schedule"],k:[28,47],o:2},"flag-ml":{a:"Mali Flag",b:"1F1F2-1F1F1",k:[3,10],o:2},m:{a:"Circled Latin Capital Letter M",b:"24C2-FE0F",c:"24C2",j:["alphabet","blue-circle","letter"],k:[52,40],o:2},"flag-mm":{a:"Myanmar (burma) Flag",b:"1F1F2-1F1F2",k:[3,11],o:2},clock930:{a:"Clock Face Nine-Thirty",b:"1F564",j:["time","late","early","schedule"],k:[29,2],o:2},"new":{a:"Squared New",b:"1F195",j:["blue-square","words","start"],k:[0,25],o:2},spiral_calendar_pad:{a:"Spiral Calendar Pad",b:"1F5D3-FE0F",c:"1F5D3",k:[30,20],o:2},ng:{a:"Squared Ng",b:"1F196",j:["blue-square","words","shape","icon"],k:[0,26],o:2},card_index:{a:"Card Index",b:"1F4C7",j:["business","stationery"],k:[26,29],o:2},clock10:{a:"Clock Face Ten Oclock",b:"1F559",j:["time","late","early","schedule"],k:[28,48],o:2},"flag-mn":{a:"Mongolia Flag",b:"1F1F2-1F1F3",k:[3,12],o:2},"male-guard":{obsoletes:"1F482",a:"Male Guard",b:"1F482-200D-2642-FE0F",c:"1F482-200D-2642",k:[24,14],o:4},"flag-mo":{a:"Macao Sar China Flag",b:"1F1F2-1F1F4",k:[3,13],o:2},clock1030:{a:"Clock Face Ten-Thirty",b:"1F565",j:["time","late","early","schedule"],k:[29,3],o:2},chart_with_upwards_trend:{a:"Chart with Upwards Trend",b:"1F4C8",j:["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],k:[26,30],o:2},o2:{a:"Negative Squared Latin Capital Letter O",b:"1F17E-FE0F",c:"1F17E",j:["alphabet","red-square","letter"],k:[0,18],o:2},"female-guard":{a:"Female Guard",b:"1F482-200D-2640-FE0F",c:"1F482-200D-2640",k:[24,8],o:4},chart_with_downwards_trend:{a:"Chart with Downwards Trend",b:"1F4C9",j:["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],k:[26,31],o:2},"flag-mp":{a:"Northern Mariana Islands Flag",b:"1F1F2-1F1F5",k:[3,14],o:2},ok:{a:"Squared Ok",b:"1F197",j:["good","agree","yes","blue-square"],k:[0,27],o:2},clock11:{a:"Clock Face Eleven Oclock",b:"1F55A",j:["time","late","early","schedule"],k:[28,49],o:2},"male-construction-worker":{obsoletes:"1F477",a:"Male Construction Worker",b:"1F477-200D-2642-FE0F",c:"1F477-200D-2642",k:[23,16],o:4},clock1130:{a:"Clock Face Eleven-Thirty",b:"1F566",j:["time","late","early","schedule"],k:[29,4],o:2},"flag-mq":{a:"Martinique Flag",b:"1F1F2-1F1F6",k:[3,15],o:2},bar_chart:{a:"Bar Chart",b:"1F4CA",j:["graph","presentation","stats"],k:[26,32],o:2},parking:{a:"Negative Squared Latin Capital Letter P",b:"1F17F-FE0F",c:"1F17F",j:["cars","blue-square","alphabet","letter"],k:[0,19],o:2},new_moon:{a:"New Moon Symbol",b:"1F311",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,36],o:2},"female-construction-worker":{a:"Female Construction Worker",b:"1F477-200D-2640-FE0F",c:"1F477-200D-2640",k:[23,10],o:4},sos:{a:"Squared Sos",b:"1F198",j:["help","red-square","words","emergency","911"],k:[0,28],o:2},clipboard:{a:"Clipboard",b:"1F4CB",j:["stationery","documents"],k:[26,33],o:2},"flag-mr":{a:"Mauritania Flag",b:"1F1F2-1F1F7",k:[3,16],o:2},prince:{a:"Prince",b:"1F934",j:["boy","man","male","crown","royal","king"],k:[39,17],o:4},waxing_crescent_moon:{a:"Waxing Crescent Moon Symbol",b:"1F312",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,37],o:2},"flag-ms":{a:"Montserrat Flag",b:"1F1F2-1F1F8",k:[3,17],o:2},pushpin:{a:"Pushpin",b:"1F4CC",j:["stationery","mark","here"],k:[26,34],o:2},up:{a:"Squared Up with Exclamation Mark",b:"1F199",j:["blue-square","above","high"],k:[0,29],o:2},"flag-mt":{a:"Malta Flag",b:"1F1F2-1F1F9",k:[3,18],o:2},princess:{a:"Princess",b:"1F478",j:["girl","woman","female","blond","crown","royal","queen"],k:[23,28],o:2},round_pushpin:{a:"Round Pushpin",b:"1F4CD",j:["stationery","location","map","here"],k:[26,35],o:2},first_quarter_moon:{a:"First Quarter Moon Symbol",b:"1F313",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,38],o:2},vs:{a:"Squared Vs",b:"1F19A",j:["words","orange-square"],k:[0,30],o:2},"flag-mu":{a:"Mauritius Flag",b:"1F1F2-1F1FA",k:[3,19],o:2},koko:{a:"Squared Katakana Koko",b:"1F201",j:["blue-square","here","katakana","japanese","destination"],k:[5,4],o:2},moon:{a:"Waxing Gibbous Moon Symbol",b:"1F314",k:[5,39],n:["waxing_gibbous_moon"],o:2},paperclip:{a:"Paperclip",b:"1F4CE",j:["documents","stationery"],k:[26,36],o:2},linked_paperclips:{a:"Linked Paperclips",b:"1F587-FE0F",c:"1F587",k:[29,43],o:2},"man-wearing-turban":{obsoletes:"1F473",a:"Man Wearing Turban",b:"1F473-200D-2642-FE0F",c:"1F473-200D-2642",k:[22,37],o:4},sa:{a:"Squared Katakana Sa",b:"1F202-FE0F",c:"1F202",j:["japanese","blue-square","katakana"],k:[5,5],o:2},full_moon:{a:"Full Moon Symbol",b:"1F315",j:["nature","yellow","twilight","planet","space","night","evening","sleep"],k:[5,40],o:2},"flag-mv":{a:"Maldives Flag",b:"1F1F2-1F1FB",k:[3,20],o:2},"flag-mw":{a:"Malawi Flag",b:"1F1F2-1F1FC",k:[3,21],o:2},waning_gibbous_moon:{a:"Waning Gibbous Moon Symbol",b:"1F316",j:["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],k:[5,41],o:2},"woman-wearing-turban":{a:"Woman Wearing Turban",b:"1F473-200D-2640-FE0F",c:"1F473-200D-2640",k:[22,31],o:4},u6708:{a:"Squared Cjk Unified Ideograph-6708",b:"1F237-FE0F",c:"1F237",j:["chinese","month","moon","japanese","orange-square","kanji"],k:[5,13],o:2},straight_ruler:{a:"Straight Ruler",b:"1F4CF",j:["stationery","calculate","length","math","school","drawing","architect","sketch"],k:[26,37],o:2},u6709:{a:"Squared Cjk Unified Ideograph-6709",b:"1F236",j:["orange-square","chinese","have","kanji"],k:[5,12],o:2},triangular_ruler:{a:"Triangular Ruler",b:"1F4D0",j:["stationery","math","architect","sketch"],k:[26,38],o:2},man_with_gua_pi_mao:{a:"Man with Gua Pi Mao",b:"1F472",j:["male","boy","chinese"],k:[22,25],o:2},"flag-mx":{a:"Mexico Flag",b:"1F1F2-1F1FD",k:[3,22],o:2},last_quarter_moon:{a:"Last Quarter Moon Symbol",b:"1F317",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,42],o:2},person_with_headscarf:{a:"Person with Headscarf",b:"1F9D5",k:[48,34],o:5},waning_crescent_moon:{a:"Waning Crescent Moon Symbol",b:"1F318",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,43],o:2},u6307:{a:"Squared Cjk Unified Ideograph-6307",b:"1F22F",j:["chinese","point","green-square","kanji"],k:[5,7],o:2},scissors:{a:"Black Scissors",b:"2702-FE0F",c:"2702",j:["stationery","cut"],k:[54,39],o:2},"flag-my":{a:"Malaysia Flag",b:"1F1F2-1F1FE",k:[3,23],o:2},ideograph_advantage:{a:"Circled Ideograph Advantage",b:"1F250",j:["chinese","kanji","obtain","get","circle"],k:[5,17],o:2},man_in_tuxedo:{a:"Man in Tuxedo",b:"1F935",j:["couple","marriage","wedding","groom"],k:[39,23],o:4},"flag-mz":{a:"Mozambique Flag",b:"1F1F2-1F1FF",k:[3,24],o:2},card_file_box:{a:"Card File Box",b:"1F5C3-FE0F",c:"1F5C3",j:["business","stationery"],k:[30,16],o:2},crescent_moon:{a:"Crescent Moon",b:"1F319",j:["night","sleep","sky","evening","magic"],k:[5,44],o:2},"flag-na":{a:"Namibia Flag",b:"1F1F3-1F1E6",k:[3,25],o:2},bride_with_veil:{a:"Bride with Veil",b:"1F470",j:["couple","marriage","wedding","woman","bride"],k:[22,1],o:2},new_moon_with_face:{a:"New Moon with Face",b:"1F31A",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,45],o:2},file_cabinet:{a:"File Cabinet",b:"1F5C4-FE0F",c:"1F5C4",j:["filing","organizing"],k:[30,17],o:2},u5272:{a:"Squared Cjk Unified Ideograph-5272",b:"1F239",j:["cut","divide","chinese","kanji","pink-square"],k:[5,15],o:2},wastebasket:{a:"Wastebasket",b:"1F5D1-FE0F",c:"1F5D1",j:["bin","trash","rubbish","garbage","toss"],k:[30,18],o:2},pregnant_woman:{a:"Pregnant Woman",b:"1F930",j:["baby"],k:[38,50],o:4},first_quarter_moon_with_face:{a:"First Quarter Moon with Face",b:"1F31B",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,46],o:2},"flag-nc":{a:"New Caledonia Flag",b:"1F1F3-1F1E8",k:[3,26],o:2},u7121:{a:"Squared Cjk Unified Ideograph-7121",b:"1F21A",j:["nothing","chinese","kanji","japanese","orange-square"],k:[5,6],o:2},lock:{a:"Lock",b:"1F512",j:["security","password","padlock"],k:[27,46],o:2},"flag-ne":{a:"Niger Flag",b:"1F1F3-1F1EA",k:[3,27],o:2},last_quarter_moon_with_face:{a:"Last Quarter Moon with Face",b:"1F31C",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,47],o:2},"breast-feeding":{a:"Breast-Feeding",b:"1F931",k:[38,56],o:5},u7981:{a:"Squared Cjk Unified Ideograph-7981",b:"1F232",j:["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],k:[5,8],o:2},accept:{a:"Circled Ideograph Accept",b:"1F251",j:["ok","good","chinese","kanji","agree","yes","orange-circle"],k:[5,18],o:2},angel:{a:"Baby Angel",b:"1F47C",j:["heaven","wings","halo"],k:[23,37],o:2},unlock:{a:"Open Lock",b:"1F513",j:["privacy","security"],k:[27,47],o:2},"flag-nf":{a:"Norfolk Island Flag",b:"1F1F3-1F1EB",k:[3,28],o:2},thermometer:{a:"Thermometer",b:"1F321-FE0F",c:"1F321",j:["weather","temperature","hot","cold"],k:[5,52],o:2},"flag-ng":{a:"Nigeria Flag",b:"1F1F3-1F1EC",k:[3,29],o:2},u7533:{a:"Squared Cjk Unified Ideograph-7533",b:"1F238",j:["chinese","japanese","kanji","orange-square"],k:[5,14],o:2},sunny:{a:"Black Sun with Rays",b:"2600-FE0F",c:"2600",j:["weather","nature","brightness","summer","beach","spring"],k:[52,49],o:2},lock_with_ink_pen:{a:"Lock with Ink Pen",b:"1F50F",j:["security","secret"],k:[27,43],o:2},santa:{a:"Father Christmas",b:"1F385",j:["festival","man","male","xmas","father christmas"],k:[7,36],o:2},closed_lock_with_key:{a:"Closed Lock with Key",b:"1F510",j:["security","privacy"],k:[27,44],o:2},u5408:{a:"Squared Cjk Unified Ideograph-5408",b:"1F234",j:["japanese","chinese","join","kanji","red-square"],k:[5,10],o:2},"flag-ni":{a:"Nicaragua Flag",b:"1F1F3-1F1EE",k:[3,30],o:2},mrs_claus:{a:"Mother Christmas",b:"1F936",j:["woman","female","xmas","mother christmas"],k:[39,29],n:["mother_christmas"],o:4},full_moon_with_face:{a:"Full Moon with Face",b:"1F31D",j:["nature","twilight","planet","space","night","evening","sleep"],k:[5,48],o:2},key:{a:"Key",b:"1F511",j:["lock","door","password"],k:[27,45],o:2},superhero:{a:"Superhero",b:"1F9B8",k:[43,30],o:11},"flag-nl":{a:"Netherlands Flag",b:"1F1F3-1F1F1",k:[3,31],o:2},u7a7a:{a:"Squared Cjk Unified Ideograph-7a7a",b:"1F233",j:["kanji","japanese","chinese","empty","sky","blue-square"],k:[5,9],o:2},sun_with_face:{a:"Sun with Face",b:"1F31E",j:["nature","morning","sky"],k:[5,49],o:2},male_superhero:{a:"Male Superhero",b:"1F9B8-200D-2642-FE0F",c:"1F9B8-200D-2642",k:[43,24],o:11},ringed_planet:{a:"Ringed Planet",b:"1FA90",k:[52,4],o:12},old_key:{a:"Old Key",b:"1F5DD-FE0F",c:"1F5DD",j:["lock","door","password"],k:[30,22],o:2},congratulations:{a:"Circled Ideograph Congratulation",b:"3297-FE0F",c:"3297",j:["chinese","kanji","japanese","red-circle"],k:[55,46],o:2},"flag-no":{a:"Norway Flag",b:"1F1F3-1F1F4",k:[3,32],o:2},star:{a:"White Medium Star",b:"2B50",j:["night","yellow"],k:[55,42],o:2},secret:{a:"Circled Ideograph Secret",b:"3299-FE0F",c:"3299",j:["privacy","chinese","sshh","kanji","red-circle"],k:[55,47],o:2},"flag-np":{a:"Nepal Flag",b:"1F1F3-1F1F5",k:[3,33],o:2},female_superhero:{a:"Female Superhero",b:"1F9B8-200D-2640-FE0F",c:"1F9B8-200D-2640",k:[43,18],o:11},hammer:{a:"Hammer",b:"1F528",j:["tools","build","create"],k:[28,11],o:2},star2:{a:"Glowing Star",b:"1F31F",j:["night","sparkle","awesome","good","magic"],k:[5,50],o:2},"flag-nr":{a:"Nauru Flag",b:"1F1F3-1F1F7",k:[3,34],o:2},axe:{a:"Axe",b:"1FA93",k:[52,7],o:12},u55b6:{a:"Squared Cjk Unified Ideograph-55b6",b:"1F23A",j:["japanese","opening hours","orange-square"],k:[5,16],o:2},supervillain:{a:"Supervillain",b:"1F9B9",k:[43,48],o:11},stars:{a:"Shooting Star",b:"1F320",j:["night","photo"],k:[5,51],o:2},u6e80:{a:"Squared Cjk Unified Ideograph-6e80",b:"1F235",j:["full","chinese","japanese","red-square","kanji"],k:[5,11],o:2},"flag-nu":{a:"Niue Flag",b:"1F1F3-1F1FA",k:[3,35],o:2},pick:{a:"Pick",b:"26CF-FE0F",c:"26CF",j:["tools","dig"],k:[54,5],o:2},male_supervillain:{a:"Male Supervillain",b:"1F9B9-200D-2642-FE0F",c:"1F9B9-200D-2642",k:[43,42],o:11},female_supervillain:{a:"Female Supervillain",b:"1F9B9-200D-2640-FE0F",c:"1F9B9-200D-2640",k:[43,36],o:11},hammer_and_pick:{a:"Hammer and Pick",b:"2692-FE0F",c:"2692",j:["tools","build","create"],k:[53,41],o:2},milky_way:{a:"Milky Way",b:"1F30C",j:["photo","space","stars"],k:[5,31],o:2},red_circle:{a:"Large Red Circle",b:"1F534",j:["shape","error","danger"],k:[28,23],o:2},"flag-nz":{a:"New Zealand Flag",b:"1F1F3-1F1FF",k:[3,36],o:2},large_orange_circle:{a:"Large Orange Circle",b:"1F7E0",k:[37,3],o:12},hammer_and_wrench:{a:"Hammer and Wrench",b:"1F6E0-FE0F",c:"1F6E0",j:["tools","build","create"],k:[36,42],o:2},"flag-om":{a:"Oman Flag",b:"1F1F4-1F1F2",k:[3,37],o:2},cloud:{a:"Cloud",b:"2601-FE0F",c:"2601",j:["weather","sky"],k:[52,50],o:2},mage:{obsoleted_by:"1F9D9-200D-2640-FE0F",a:"Mage",b:"1F9D9",k:[49,49],o:5},dagger_knife:{a:"Dagger Knife",b:"1F5E1-FE0F",c:"1F5E1",k:[30,24],o:2},partly_sunny:{a:"Sun Behind Cloud",b:"26C5",j:["weather","nature","cloudy","morning","fall","spring"],k:[54,2],o:2},large_yellow_circle:{a:"Large Yellow Circle",b:"1F7E1",k:[37,4],o:12},male_mage:{a:"Male Mage",b:"1F9D9-200D-2642-FE0F",c:"1F9D9-200D-2642",k:[49,43],o:5},"flag-pa":{a:"Panama Flag",b:"1F1F5-1F1E6",k:[3,38],o:2},thunder_cloud_and_rain:{a:"Thunder Cloud and Rain",b:"26C8-FE0F",c:"26C8",k:[54,3],o:2},large_green_circle:{a:"Large Green Circle",b:"1F7E2",k:[37,5],o:12},female_mage:{obsoletes:"1F9D9",a:"Female Mage",b:"1F9D9-200D-2640-FE0F",c:"1F9D9-200D-2640",k:[49,37],o:5},crossed_swords:{a:"Crossed Swords",b:"2694-FE0F",c:"2694",j:["weapon"],k:[53,43],o:2},"flag-pe":{a:"Peru Flag",b:"1F1F5-1F1EA",k:[3,39],o:2},gun:{a:"Pistol",b:"1F52B",j:["violence","weapon","pistol","revolver"],k:[28,14],o:2},mostly_sunny:{a:"Mostly Sunny",b:"1F324-FE0F",c:"1F324",k:[5,53],n:["sun_small_cloud"],o:2},fairy:{obsoleted_by:"1F9DA-200D-2640-FE0F",a:"Fairy",b:"1F9DA",k:[50,10],o:5},"flag-pf":{a:"French Polynesia Flag",b:"1F1F5-1F1EB",k:[3,40],o:2},large_blue_circle:{a:"Large Blue Circle",b:"1F535",j:["shape","icon","button"],k:[28,24],o:2},large_purple_circle:{a:"Large Purple Circle",b:"1F7E3",k:[37,6],o:12},bow_and_arrow:{a:"Bow and Arrow",b:"1F3F9",j:["sports"],k:[11,21],o:2},male_fairy:{a:"Male Fairy",b:"1F9DA-200D-2642-FE0F",c:"1F9DA-200D-2642",k:[50,4],o:5},barely_sunny:{a:"Barely Sunny",b:"1F325-FE0F",c:"1F325",k:[5,54],n:["sun_behind_cloud"],o:2},"flag-pg":{a:"Papua New Guinea Flag",b:"1F1F5-1F1EC",k:[3,41],o:2},shield:{a:"Shield",b:"1F6E1-FE0F",c:"1F6E1",j:["protection","security"],k:[36,43],o:2},partly_sunny_rain:{a:"Partly Sunny Rain",b:"1F326-FE0F",c:"1F326",k:[5,55],n:["sun_behind_rain_cloud"],o:2},large_brown_circle:{a:"Large Brown Circle",b:"1F7E4",k:[37,7],o:12},female_fairy:{obsoletes:"1F9DA",a:"Female Fairy",b:"1F9DA-200D-2640-FE0F",c:"1F9DA-200D-2640",k:[49,55],o:5},"flag-ph":{a:"Philippines Flag",b:"1F1F5-1F1ED",k:[3,42],o:2},"flag-pk":{a:"Pakistan Flag",b:"1F1F5-1F1F0",k:[3,43],o:2},black_circle:{a:"Medium Black Circle",b:"26AB",j:["shape","button","round"],k:[53,53],o:2},wrench:{a:"Wrench",b:"1F527",j:["tools","diy","ikea","fix","maintainer"],k:[28,10],o:2},vampire:{obsoleted_by:"1F9DB-200D-2640-FE0F",a:"Vampire",b:"1F9DB",k:[50,28],o:5},rain_cloud:{a:"Rain Cloud",b:"1F327-FE0F",c:"1F327",k:[5,56],o:2},snow_cloud:{a:"Snow Cloud",b:"1F328-FE0F",c:"1F328",k:[6,0],o:2},"flag-pl":{a:"Poland Flag",b:"1F1F5-1F1F1",k:[3,44],o:2},male_vampire:{a:"Male Vampire",b:"1F9DB-200D-2642-FE0F",c:"1F9DB-200D-2642",k:[50,22],o:5},nut_and_bolt:{a:"Nut and Bolt",b:"1F529",j:["handy","tools","fix"],k:[28,12],o:2},white_circle:{a:"Medium White Circle",b:"26AA",j:["shape","round"],k:[53,52],o:2},female_vampire:{obsoletes:"1F9DB",a:"Female Vampire",b:"1F9DB-200D-2640-FE0F",c:"1F9DB-200D-2640",k:[50,16],o:5},"flag-pm":{a:"St. Pierre & Miquelon Flag",b:"1F1F5-1F1F2",k:[3,45],o:2},large_red_square:{a:"Large Red Square",b:"1F7E5",k:[37,8],o:12},lightning:{a:"Lightning",b:"1F329-FE0F",c:"1F329",k:[6,1],n:["lightning_cloud"],o:2},gear:{a:"Gear",b:"2699-FE0F",c:"2699",j:["cog"],k:[53,47],o:2},merperson:{obsoleted_by:"1F9DC-200D-2642-FE0F",a:"Merperson",b:"1F9DC",k:[50,46],o:5},tornado:{a:"Tornado",b:"1F32A-FE0F",c:"1F32A",j:["weather","cyclone","twister"],k:[6,2],n:["tornado_cloud"],o:2},large_orange_square:{a:"Large Orange Square",b:"1F7E7",k:[37,10],o:12},"flag-pn":{a:"Pitcairn Islands Flag",b:"1F1F5-1F1F3",k:[3,46],o:2},compression:{a:"Compression",b:"1F5DC-FE0F",c:"1F5DC",k:[30,21],o:2},merman:{obsoletes:"1F9DC",a:"Merman",b:"1F9DC-200D-2642-FE0F",c:"1F9DC-200D-2642",k:[50,40],o:5},large_yellow_square:{a:"Large Yellow Square",b:"1F7E8",k:[37,11],o:12},fog:{a:"Fog",b:"1F32B-FE0F",c:"1F32B",j:["weather"],k:[6,3],o:2},scales:{a:"Scales",b:"2696-FE0F",c:"2696",k:[53,45],o:2},"flag-pr":{a:"Puerto Rico Flag",b:"1F1F5-1F1F7",k:[3,47],o:2},wind_blowing_face:{a:"Wind Blowing Face",b:"1F32C-FE0F",c:"1F32C",k:[6,4],o:2},"flag-ps":{a:"Palestinian Territories Flag",b:"1F1F5-1F1F8",k:[3,48],o:2},mermaid:{a:"Mermaid",b:"1F9DC-200D-2640-FE0F",c:"1F9DC-200D-2640",k:[50,34],o:5},probing_cane:{a:"Probing Cane",b:"1F9AF",k:[43,3],o:12},large_green_square:{a:"Large Green Square",b:"1F7E9",k:[37,12],o:12},"flag-pt":{a:"Portugal Flag",b:"1F1F5-1F1F9",k:[3,49],o:2},link:{a:"Link Symbol",b:"1F517",j:["rings","url"],k:[27,51],o:2},large_blue_square:{a:"Large Blue Square",b:"1F7E6",k:[37,9],o:12},elf:{obsoleted_by:"1F9DD-200D-2642-FE0F",a:"Elf",b:"1F9DD",k:[51,7],o:5},cyclone:{a:"Cyclone",b:"1F300",j:["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],k:[5,19],o:2},rainbow:{a:"Rainbow",b:"1F308",j:["nature","happy","unicorn_face","photo","sky","spring"],k:[5,27],o:2},male_elf:{obsoletes:"1F9DD",a:"Male Elf",b:"1F9DD-200D-2642-FE0F",c:"1F9DD-200D-2642",k:[51,1],o:5},"flag-pw":{a:"Palau Flag",b:"1F1F5-1F1FC",k:[3,50],o:2},chains:{a:"Chains",b:"26D3-FE0F",c:"26D3",j:["lock","arrest"],k:[54,7],o:2},large_purple_square:{a:"Large Purple Square",b:"1F7EA",k:[37,13],o:12},female_elf:{a:"Female Elf",b:"1F9DD-200D-2640-FE0F",c:"1F9DD-200D-2640",k:[50,52],o:5},"flag-py":{a:"Paraguay Flag",b:"1F1F5-1F1FE",k:[3,51],o:2},closed_umbrella:{a:"Closed Umbrella",b:"1F302",j:["weather","rain","drizzle"],k:[5,21],o:2},toolbox:{a:"Toolbox",b:"1F9F0",k:[51,35],o:11},large_brown_square:{a:"Large Brown Square",b:"1F7EB",k:[37,14],o:12},magnet:{a:"Magnet",b:"1F9F2",k:[51,37],o:11},genie:{obsoleted_by:"1F9DE-200D-2642-FE0F",a:"Genie",b:"1F9DE",k:[51,15],o:5},"flag-qa":{a:"Qatar Flag",b:"1F1F6-1F1E6",k:[3,52],o:2},umbrella:{a:"Umbrella",b:"2602-FE0F",c:"2602",j:["rainy","weather","spring"],k:[52,51],o:2},black_large_square:{a:"Black Large Square",b:"2B1B",j:["shape","icon","button"],k:[55,40],o:2},male_genie:{obsoletes:"1F9DE",a:"Male Genie",b:"1F9DE-200D-2642-FE0F",c:"1F9DE-200D-2642",k:[51,14],o:5},umbrella_with_rain_drops:{a:"Umbrella with Rain Drops",b:"2614",k:[52,56],o:2},"flag-re":{a:"Réunion Flag",b:"1F1F7-1F1EA",k:[3,53],o:2},white_large_square:{a:"White Large Square",b:"2B1C",j:["shape","icon","stone","button"],k:[55,41],o:2},alembic:{a:"Alembic",b:"2697-FE0F",c:"2697",j:["distilling","science","experiment","chemistry"],k:[53,46],o:2},black_medium_square:{a:"Black Medium Square",b:"25FC-FE0F",c:"25FC",j:["shape","button","icon"],k:[52,46],o:2},test_tube:{a:"Test Tube",b:"1F9EA",k:[51,29],o:11},"flag-ro":{a:"Romania Flag",b:"1F1F7-1F1F4",k:[3,54],o:2},female_genie:{a:"Female Genie",b:"1F9DE-200D-2640-FE0F",c:"1F9DE-200D-2640",k:[51,13],o:5},umbrella_on_ground:{a:"Umbrella on Ground",b:"26F1-FE0F",c:"26F1",k:[54,12],o:2},zombie:{obsoleted_by:"1F9DF-200D-2642-FE0F",a:"Zombie",b:"1F9DF",k:[51,18],o:5},zap:{a:"High Voltage Sign",b:"26A1",j:["thunder","weather","lightning bolt","fast"],k:[53,51],o:2},white_medium_square:{a:"White Medium Square",b:"25FB-FE0F",c:"25FB",j:["shape","stone","icon"],k:[52,45],o:2},"flag-rs":{a:"Serbia Flag",b:"1F1F7-1F1F8",k:[3,55],o:2},petri_dish:{a:"Petri Dish",b:"1F9EB",k:[51,30],o:11},snowflake:{a:"Snowflake",b:"2744-FE0F",c:"2744",j:["winter","season","cold","weather","christmas","xmas"],k:[55,19],o:2},dna:{a:"Dna Double Helix",b:"1F9EC",k:[51,31],o:11},male_zombie:{obsoletes:"1F9DF",a:"Male Zombie",b:"1F9DF-200D-2642-FE0F",c:"1F9DF-200D-2642",k:[51,17],o:5},black_medium_small_square:{a:"Black Medium Small Square",b:"25FE",j:["icon","shape","button"],k:[52,48],o:2},ru:{a:"Russia Flag",b:"1F1F7-1F1FA",j:["russian","federation","flag","nation","country","banner"],k:[3,56],n:["flag-ru"],o:2},female_zombie:{a:"Female Zombie",b:"1F9DF-200D-2640-FE0F",c:"1F9DF-200D-2640",k:[51,16],o:5},"flag-rw":{a:"Rwanda Flag",b:"1F1F7-1F1FC",k:[4,0],o:2},snowman:{a:"Snowman",b:"2603-FE0F",c:"2603",j:["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],k:[52,52],o:2},white_medium_small_square:{a:"White Medium Small Square",b:"25FD",j:["shape","stone","icon","button"],k:[52,47],o:2},microscope:{a:"Microscope",b:"1F52C",j:["laboratory","experiment","zoomin","science","study"],k:[28,15],o:2},snowman_without_snow:{a:"Snowman Without Snow",b:"26C4",k:[54,1],o:2},telescope:{a:"Telescope",b:"1F52D",j:["stars","space","zoom","science","astronomy"],k:[28,16],o:2},black_small_square:{a:"Black Small Square",b:"25AA-FE0F",c:"25AA",j:["shape","icon"],k:[52,41],o:2},"flag-sa":{a:"Saudi Arabia Flag",b:"1F1F8-1F1E6",k:[4,1],o:2},"man-getting-massage":{a:"Man Getting Massage",b:"1F486-200D-2642-FE0F",c:"1F486-200D-2642",k:[24,45],o:4},comet:{a:"Comet",b:"2604-FE0F",c:"2604",j:["space"],k:[52,53],o:2},white_small_square:{a:"White Small Square",b:"25AB-FE0F",c:"25AB",j:["shape","icon"],k:[52,42],o:2},"flag-sb":{a:"Solomon Islands Flag",b:"1F1F8-1F1E7",k:[4,2],o:2},satellite_antenna:{a:"Satellite Antenna",b:"1F4E1",k:[26,55],o:2},large_orange_diamond:{a:"Large Orange Diamond",b:"1F536",j:["shape","jewel","gem"],k:[28,25],o:2},"woman-getting-massage":{obsoletes:"1F486",a:"Woman Getting Massage",b:"1F486-200D-2640-FE0F",c:"1F486-200D-2640",k:[24,39],o:4},fire:{a:"Fire",b:"1F525",j:["hot","cook","flame"],k:[28,8],o:2},syringe:{a:"Syringe",b:"1F489",j:["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],k:[25,19],o:2},"flag-sc":{a:"Seychelles Flag",b:"1F1F8-1F1E8",k:[4,3],o:2},large_blue_diamond:{a:"Large Blue Diamond",b:"1F537",j:["shape","jewel","gem"],k:[28,26],o:2},"flag-sd":{a:"Sudan Flag",b:"1F1F8-1F1E9",k:[4,4],o:2},droplet:{a:"Droplet",b:"1F4A7",j:["water","drip","faucet","spring"],k:[25,49],o:2},drop_of_blood:{a:"Drop of Blood",b:"1FA78",k:[51,55],o:12},ocean:{a:"Water Wave",b:"1F30A",j:["sea","water","wave","nature","tsunami","disaster"],k:[5,29],o:2},"flag-se":{a:"Sweden Flag",b:"1F1F8-1F1EA",k:[4,5],o:2},"man-getting-haircut":{a:"Man Getting Haircut",b:"1F487-200D-2642-FE0F",c:"1F487-200D-2642",k:[25,6],o:4},small_orange_diamond:{a:"Small Orange Diamond",b:"1F538",j:["shape","jewel","gem"],k:[28,27],o:2},pill:{a:"Pill",b:"1F48A",j:["health","medicine","doctor","pharmacy","drug"],k:[25,20],o:2},"woman-getting-haircut":{obsoletes:"1F487",a:"Woman Getting Haircut",b:"1F487-200D-2640-FE0F",c:"1F487-200D-2640",k:[25,0],o:4},small_blue_diamond:{a:"Small Blue Diamond",b:"1F539",j:["shape","jewel","gem"],k:[28,28],o:2},"flag-sg":{a:"Singapore Flag",b:"1F1F8-1F1EC",k:[4,6],o:2},adhesive_bandage:{a:"Adhesive Bandage",b:"1FA79",k:[51,56],o:12},small_red_triangle:{a:"Up-Pointing Red Triangle",b:"1F53A",j:["shape","direction","up","top"],k:[28,29],o:2},"flag-sh":{a:"St. Helena Flag",b:"1F1F8-1F1ED",k:[4,7],o:2},stethoscope:{a:"Stethoscope",b:"1FA7A",k:[52,0],o:12},"man-walking":{obsoletes:"1F6B6",a:"Man Walking",b:"1F6B6-200D-2642-FE0F",c:"1F6B6-200D-2642",k:[35,53],o:4},"flag-si":{a:"Slovenia Flag",b:"1F1F8-1F1EE",k:[4,8],o:2},door:{a:"Door",b:"1F6AA",j:["house","entry","exit"],k:[35,1],o:2},small_red_triangle_down:{a:"Down-Pointing Red Triangle",b:"1F53B",j:["shape","direction","bottom"],k:[28,30],o:2},"flag-sj":{a:"Svalbard & Jan Mayen Flag",b:"1F1F8-1F1EF",k:[4,9],o:2},diamond_shape_with_a_dot_inside:{a:"Diamond Shape with a Dot Inside",b:"1F4A0",j:["jewel","blue","gem","crystal","fancy"],k:[25,42],o:2},"woman-walking":{a:"Woman Walking",b:"1F6B6-200D-2640-FE0F",c:"1F6B6-200D-2640",k:[35,47],o:4},bed:{a:"Bed",b:"1F6CF-FE0F",c:"1F6CF",j:["sleep","rest"],k:[36,37],o:2},radio_button:{a:"Radio Button",b:"1F518",j:["input","old","music","circle"],k:[27,52],o:2},"flag-sk":{a:"Slovakia Flag",b:"1F1F8-1F1F0",k:[4,10],o:2},standing_person:{a:"Standing Person",b:"1F9CD",k:[44,31],o:12},couch_and_lamp:{a:"Couch and Lamp",b:"1F6CB-FE0F",c:"1F6CB",j:["read","chill"],k:[36,28],o:2},man_standing:{a:"Man Standing",b:"1F9CD-200D-2642-FE0F",c:"1F9CD-200D-2642",k:[44,25],o:12},white_square_button:{a:"White Square Button",b:"1F533",j:["shape","input"],k:[28,22],o:2},"flag-sl":{a:"Sierra Leone Flag",b:"1F1F8-1F1F1",k:[4,11],o:2},chair:{a:"Chair",b:"1FA91",k:[52,5],o:12},toilet:{a:"Toilet",b:"1F6BD",j:["restroom","wc","washroom","bathroom","potty"],k:[36,14],o:2},black_square_button:{a:"Black Square Button",b:"1F532",j:["shape","input","frame"],k:[28,21],o:2},"flag-sm":{a:"San Marino Flag",b:"1F1F8-1F1F2",k:[4,12],o:2},woman_standing:{a:"Woman Standing",b:"1F9CD-200D-2640-FE0F",c:"1F9CD-200D-2640",k:[44,19],o:12},kneeling_person:{a:"Kneeling Person",b:"1F9CE",k:[44,49],o:12},shower:{a:"Shower",b:"1F6BF",j:["clean","water","bathroom"],k:[36,16],o:2},"flag-sn":{a:"Senegal Flag",b:"1F1F8-1F1F3",k:[4,13],o:2},bathtub:{a:"Bathtub",b:"1F6C1",j:["clean","shower","bathroom"],k:[36,23],o:2},"flag-so":{a:"Somalia Flag",b:"1F1F8-1F1F4",k:[4,14],o:2},man_kneeling:{a:"Man Kneeling",b:"1F9CE-200D-2642-FE0F",c:"1F9CE-200D-2642",k:[44,43],o:12},"flag-sr":{a:"Suriname Flag",b:"1F1F8-1F1F7",k:[4,15],o:2},woman_kneeling:{a:"Woman Kneeling",b:"1F9CE-200D-2640-FE0F",c:"1F9CE-200D-2640",k:[44,37],o:12},razor:{a:"Razor",b:"1FA92",k:[52,6],o:12},"flag-ss":{a:"South Sudan Flag",b:"1F1F8-1F1F8",k:[4,16],o:2},lotion_bottle:{a:"Lotion Bottle",b:"1F9F4",k:[51,39],o:11},"flag-st":{a:"São Tomé & Príncipe Flag",b:"1F1F8-1F1F9",k:[4,17],o:2},safety_pin:{a:"Safety Pin",b:"1F9F7",k:[51,42],o:11},man_with_probing_cane:{a:"Man with Probing Cane",b:"1F468-200D-1F9AF",k:[16,17],o:12},broom:{a:"Broom",b:"1F9F9",k:[51,44],o:11},woman_with_probing_cane:{a:"Woman with Probing Cane",b:"1F469-200D-1F9AF",k:[19,2],o:12},"flag-sv":{a:"El Salvador Flag",b:"1F1F8-1F1FB",k:[4,18],o:2},"flag-sx":{a:"Sint Maarten Flag",b:"1F1F8-1F1FD",k:[4,19],o:2},basket:{a:"Basket",b:"1F9FA",k:[51,45],o:11},man_in_motorized_wheelchair:{a:"Man in Motorized Wheelchair",b:"1F468-200D-1F9BC",k:[16,47],o:12},"flag-sy":{a:"Syria Flag",b:"1F1F8-1F1FE",k:[4,20],o:2},roll_of_paper:{a:"Roll of Paper",b:"1F9FB",k:[51,46],o:11},woman_in_motorized_wheelchair:{a:"Woman in Motorized Wheelchair",b:"1F469-200D-1F9BC",k:[19,32],o:12},"flag-sz":{a:"Eswatini Flag",b:"1F1F8-1F1FF",k:[4,21],o:2},soap:{a:"Bar of Soap",b:"1F9FC",k:[51,47],o:11},"flag-ta":{a:"Tristan Da Cunha Flag",b:"1F1F9-1F1E6",k:[4,22],o:2},sponge:{a:"Sponge",b:"1F9FD",k:[51,48],o:11},fire_extinguisher:{a:"Fire Extinguisher",b:"1F9EF",k:[51,34],o:11},man_in_manual_wheelchair:{a:"Man in Manual Wheelchair",b:"1F468-200D-1F9BD",k:[16,53],o:12},"flag-tc":{a:"Turks & Caicos Islands Flag",b:"1F1F9-1F1E8",k:[4,23],o:2},woman_in_manual_wheelchair:{a:"Woman in Manual Wheelchair",b:"1F469-200D-1F9BD",k:[19,38],o:12},"flag-td":{a:"Chad Flag",b:"1F1F9-1F1E9",k:[4,24],o:2},shopping_trolley:{a:"Shopping Trolley",b:"1F6D2",k:[36,40],o:4},"flag-tf":{a:"French Southern Territories Flag",b:"1F1F9-1F1EB",k:[4,25],o:2},smoking:{a:"Smoking Symbol",b:"1F6AC",j:["kills","tobacco","cigarette","joint","smoke"],k:[35,3],o:2},coffin:{a:"Coffin",b:"26B0-FE0F",c:"26B0",j:["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],k:[53,54],o:2},"man-running":{obsoletes:"1F3C3",a:"Man Running",b:"1F3C3-200D-2642-FE0F",c:"1F3C3-200D-2642",k:[8,52],o:4},"flag-tg":{a:"Togo Flag",b:"1F1F9-1F1EC",k:[4,26],o:2},"woman-running":{a:"Woman Running",b:"1F3C3-200D-2640-FE0F",c:"1F3C3-200D-2640",k:[8,46],o:4},funeral_urn:{a:"Funeral Urn",b:"26B1-FE0F",c:"26B1",j:["dead","die","death","rip","ashes"],k:[53,55],o:2},"flag-th":{a:"Thailand Flag",b:"1F1F9-1F1ED",k:[4,27],o:2},moyai:{a:"Moyai",b:"1F5FF",j:["rock","easter island","moai"],k:[30,34],o:2},"flag-tj":{a:"Tajikistan Flag",b:"1F1F9-1F1EF",k:[4,28],o:2},dancer:{a:"Dancer",b:"1F483",j:["female","girl","woman","fun"],k:[24,26],o:2},"flag-tk":{a:"Tokelau Flag",b:"1F1F9-1F1F0",k:[4,29],o:2},man_dancing:{a:"Man Dancing",b:"1F57A",j:["male","boy","fun","dancer"],k:[29,37],o:4},"flag-tl":{a:"Timor-Leste Flag",b:"1F1F9-1F1F1",k:[4,30],o:2},man_in_business_suit_levitating:{a:"Man in Business Suit Levitating",b:"1F574-FE0F",c:"1F574",k:[29,9],o:2},"flag-tm":{a:"Turkmenistan Flag",b:"1F1F9-1F1F2",k:[4,31],o:2},dancers:{obsoleted_by:"1F46F-200D-2640-FE0F",a:"Woman with Bunny Ears",b:"1F46F",k:[22,0],o:2},"man-with-bunny-ears-partying":{a:"Man with Bunny Ears Partying",b:"1F46F-200D-2642-FE0F",c:"1F46F-200D-2642",k:[21,56],o:4},"flag-tn":{a:"Tunisia Flag",b:"1F1F9-1F1F3",k:[4,32],o:2},"flag-to":{a:"Tonga Flag",b:"1F1F9-1F1F4",k:[4,33],o:2},"woman-with-bunny-ears-partying":{obsoletes:"1F46F",a:"Woman with Bunny Ears Partying",b:"1F46F-200D-2640-FE0F",c:"1F46F-200D-2640",k:[21,55],o:4},"flag-tr":{a:"Turkey Flag",b:"1F1F9-1F1F7",k:[4,34],o:2},person_in_steamy_room:{obsoleted_by:"1F9D6-200D-2642-FE0F",a:"Person in Steamy Room",b:"1F9D6",k:[48,52],o:5},man_in_steamy_room:{obsoletes:"1F9D6",a:"Man in Steamy Room",b:"1F9D6-200D-2642-FE0F",c:"1F9D6-200D-2642",k:[48,46],o:5},"flag-tt":{a:"Trinidad & Tobago Flag",b:"1F1F9-1F1F9",k:[4,35],o:2},woman_in_steamy_room:{a:"Woman in Steamy Room",b:"1F9D6-200D-2640-FE0F",c:"1F9D6-200D-2640",k:[48,40],o:5},"flag-tv":{a:"Tuvalu Flag",b:"1F1F9-1F1FB",k:[4,36],o:2},"flag-tw":{a:"Taiwan Flag",b:"1F1F9-1F1FC",k:[4,37],o:2},person_climbing:{obsoleted_by:"1F9D7-200D-2640-FE0F",a:"Person Climbing",b:"1F9D7",k:[49,13],o:5},man_climbing:{a:"Man Climbing",b:"1F9D7-200D-2642-FE0F",c:"1F9D7-200D-2642",k:[49,7],o:5},"flag-tz":{a:"Tanzania Flag",b:"1F1F9-1F1FF",k:[4,38],o:2},"flag-ua":{a:"Ukraine Flag",b:"1F1FA-1F1E6",k:[4,39],o:2},woman_climbing:{obsoletes:"1F9D7",a:"Woman Climbing",b:"1F9D7-200D-2640-FE0F",c:"1F9D7-200D-2640",k:[49,1],o:5},"flag-ug":{a:"Uganda Flag",b:"1F1FA-1F1EC",k:[4,40],o:2},fencer:{a:"Fencer",b:"1F93A",k:[40,32],o:4},"flag-um":{a:"U.s. Outlying Islands Flag",b:"1F1FA-1F1F2",k:[4,41],o:2},horse_racing:{a:"Horse Racing",b:"1F3C7",j:["animal","betting","competition","gambling","luck"],k:[9,27],o:2},skier:{a:"Skier",b:"26F7-FE0F",c:"26F7",j:["sports","winter","snow"],k:[54,17],o:2},"flag-un":{a:"United Nations Flag",b:"1F1FA-1F1F3",k:[4,42],o:4},us:{a:"United States Flag",b:"1F1FA-1F1F8",j:["united","states","america","flag","nation","country","banner"],k:[4,43],n:["flag-us"],o:2},snowboarder:{a:"Snowboarder",b:"1F3C2",j:["sports","winter"],k:[8,40],o:2},"flag-uy":{a:"Uruguay Flag",b:"1F1FA-1F1FE",k:[4,44],o:2},"flag-uz":{a:"Uzbekistan Flag",b:"1F1FA-1F1FF",k:[4,45],o:2},"flag-va":{a:"Vatican City Flag",b:"1F1FB-1F1E6",k:[4,46],o:2},"flag-vc":{a:"St. Vincent & Grenadines Flag",b:"1F1FB-1F1E8",k:[4,47],o:2},"man-surfing":{obsoletes:"1F3C4",a:"Man Surfing",b:"1F3C4-200D-2642-FE0F",c:"1F3C4-200D-2642",k:[9,13],o:4},"flag-ve":{a:"Venezuela Flag",b:"1F1FB-1F1EA",k:[4,48],o:2},"flag-vg":{a:"British Virgin Islands Flag",b:"1F1FB-1F1EC",k:[4,49],o:2},"woman-surfing":{a:"Woman Surfing",b:"1F3C4-200D-2640-FE0F",c:"1F3C4-200D-2640",k:[9,7],o:4},"flag-vi":{a:"U.s. Virgin Islands Flag",b:"1F1FB-1F1EE",k:[4,50],o:2},"man-rowing-boat":{obsoletes:"1F6A3",a:"Man Rowing Boat",b:"1F6A3-200D-2642-FE0F",c:"1F6A3-200D-2642",k:[34,40],o:4},"flag-vn":{a:"Vietnam Flag",b:"1F1FB-1F1F3",k:[4,51],o:2},"flag-vu":{a:"Vanuatu Flag",b:"1F1FB-1F1FA",k:[4,52],o:2},"woman-rowing-boat":{a:"Woman Rowing Boat",b:"1F6A3-200D-2640-FE0F",c:"1F6A3-200D-2640",k:[34,34],o:4},"flag-wf":{a:"Wallis & Futuna Flag",b:"1F1FC-1F1EB",k:[4,53],o:2},"man-swimming":{obsoletes:"1F3CA",a:"Man Swimming",b:"1F3CA-200D-2642-FE0F",c:"1F3CA-200D-2642",k:[9,41],o:4},"flag-ws":{a:"Samoa Flag",b:"1F1FC-1F1F8",k:[4,54],o:2},"woman-swimming":{a:"Woman Swimming",b:"1F3CA-200D-2640-FE0F",c:"1F3CA-200D-2640",k:[9,35],o:4},"flag-xk":{a:"Kosovo Flag",b:"1F1FD-1F1F0",k:[4,55],o:2},"flag-ye":{a:"Yemen Flag",b:"1F1FE-1F1EA",k:[4,56],o:2},"flag-yt":{a:"Mayotte Flag",b:"1F1FE-1F1F9",k:[5,0],o:2},"flag-za":{a:"South Africa Flag",b:"1F1FF-1F1E6",k:[5,1],o:2},"flag-zm":{a:"Zambia Flag",b:"1F1FF-1F1F2",k:[5,2],o:2},"flag-zw":{a:"Zimbabwe Flag",b:"1F1FF-1F1FC",k:[5,3],o:2},"flag-england":{a:"England Flag",b:"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",k:[11,14],o:5},"flag-scotland":{a:"Scotland Flag",b:"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",k:[11,15],o:5},"flag-wales":{a:"Wales Flag",b:"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",k:[11,16],o:5},"man-biking":{obsoletes:"1F6B4",a:"Man Biking",b:"1F6B4-200D-2642-FE0F",c:"1F6B4-200D-2642",k:[35,17],o:4},"woman-biking":{a:"Woman Biking",b:"1F6B4-200D-2640-FE0F",c:"1F6B4-200D-2640",k:[35,11],o:4},"man-mountain-biking":{obsoletes:"1F6B5",a:"Man Mountain Biking",b:"1F6B5-200D-2642-FE0F",c:"1F6B5-200D-2642",k:[35,35],o:4},"woman-mountain-biking":{a:"Woman Mountain Biking",b:"1F6B5-200D-2640-FE0F",c:"1F6B5-200D-2640",k:[35,29],o:4},"man-cartwheeling":{a:"Man Cartwheeling",b:"1F938-200D-2642-FE0F",c:"1F938-200D-2642",k:[40,2],o:4},"woman-cartwheeling":{a:"Woman Cartwheeling",b:"1F938-200D-2640-FE0F",c:"1F938-200D-2640",k:[39,53],o:4},wrestlers:{a:"Wrestlers",b:"1F93C",k:[40,35],o:4},"man-wrestling":{a:"Man Wrestling",b:"1F93C-200D-2642-FE0F",c:"1F93C-200D-2642",k:[40,34],o:4},"woman-wrestling":{a:"Woman Wrestling",b:"1F93C-200D-2640-FE0F",c:"1F93C-200D-2640",k:[40,33],o:4},"man-playing-water-polo":{a:"Man Playing Water Polo",b:"1F93D-200D-2642-FE0F",c:"1F93D-200D-2642",k:[40,42],o:4},"woman-playing-water-polo":{a:"Woman Playing Water Polo",b:"1F93D-200D-2640-FE0F",c:"1F93D-200D-2640",k:[40,36],o:4},"man-playing-handball":{a:"Man Playing Handball",b:"1F93E-200D-2642-FE0F",c:"1F93E-200D-2642",k:[41,3],o:4},"woman-playing-handball":{a:"Woman Playing Handball",b:"1F93E-200D-2640-FE0F",c:"1F93E-200D-2640",k:[40,54],o:4},juggling:{a:"Juggling",b:"1F939",k:[40,26],o:4},"man-juggling":{a:"Man Juggling",b:"1F939-200D-2642-FE0F",c:"1F939-200D-2642",k:[40,20],o:4},"woman-juggling":{a:"Woman Juggling",b:"1F939-200D-2640-FE0F",c:"1F939-200D-2640",k:[40,14],o:4},person_in_lotus_position:{obsoleted_by:"1F9D8-200D-2640-FE0F",a:"Person in Lotus Position",b:"1F9D8",k:[49,31],o:5},man_in_lotus_position:{a:"Man in Lotus Position",b:"1F9D8-200D-2642-FE0F",c:"1F9D8-200D-2642",k:[49,25],o:5},woman_in_lotus_position:{obsoletes:"1F9D8",a:"Woman in Lotus Position",b:"1F9D8-200D-2640-FE0F",c:"1F9D8-200D-2640",k:[49,19],o:5},bath:{a:"Bath",b:"1F6C0",j:["clean","shower","bathroom"],k:[36,17],o:2},sleeping_accommodation:{a:"Sleeping Accommodation",b:"1F6CC",k:[36,29],o:2},people_holding_hands:{a:"People Holding Hands",b:"1F9D1-200D-1F91D-200D-1F9D1",k:[46,38],o:12},two_women_holding_hands:{a:"Two Women Holding Hands",b:"1F46D",j:["pair","friendship","couple","love","like","female","people","human"],k:[21,11],n:["women_holding_hands"],o:2},couple:{a:"Man and Woman Holding Hands",b:"1F46B",j:["pair","people","human","love","date","dating","like","affection","valentines","marriage"],k:[20,16],n:["man_and_woman_holding_hands","woman_and_man_holding_hands"],o:2},two_men_holding_hands:{a:"Two Men Holding Hands",b:"1F46C",j:["pair","couple","love","like","bromance","friendship","people","human"],k:[20,42],n:["men_holding_hands"],o:2},couplekiss:{obsoleted_by:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",a:"Kiss",b:"1F48F",k:[25,25],o:2},"woman-kiss-man":{obsoletes:"1F48F",a:"Woman Kiss Man",b:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",c:"1F469-200D-2764-200D-1F48B-200D-1F468",k:[20,7],o:2},"man-kiss-man":{a:"Man Kiss Man",b:"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",c:"1F468-200D-2764-200D-1F48B-200D-1F468",k:[17,21],o:2},"woman-kiss-woman":{a:"Woman Kiss Woman",b:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",c:"1F469-200D-2764-200D-1F48B-200D-1F469",k:[20,8],o:2},couple_with_heart:{obsoleted_by:"1F469-200D-2764-FE0F-200D-1F468",a:"Couple with Heart",b:"1F491",k:[25,27],o:2},"woman-heart-man":{obsoletes:"1F491",a:"Woman Heart Man",b:"1F469-200D-2764-FE0F-200D-1F468",c:"1F469-200D-2764-200D-1F468",k:[20,5],o:2},"man-heart-man":{a:"Man Heart Man",b:"1F468-200D-2764-FE0F-200D-1F468",c:"1F468-200D-2764-200D-1F468",k:[17,20],o:2},"woman-heart-woman":{a:"Woman Heart Woman",b:"1F469-200D-2764-FE0F-200D-1F469",c:"1F469-200D-2764-200D-1F469",k:[20,6],o:2},family:{obsoleted_by:"1F468-200D-1F469-200D-1F466",a:"Family",b:"1F46A",k:[20,15],n:["man-woman-boy"],o:2},"man-woman-boy":{obsoletes:"1F46A",a:"Man Woman Boy",b:"1F468-200D-1F469-200D-1F466",k:[15,33],n:["family"],o:2},"man-woman-girl":{a:"Man Woman Girl",b:"1F468-200D-1F469-200D-1F467",k:[15,35],o:2},"man-woman-girl-boy":{a:"Man Woman Girl Boy",b:"1F468-200D-1F469-200D-1F467-200D-1F466",k:[15,36],o:2},"man-woman-boy-boy":{a:"Man Woman Boy Boy",b:"1F468-200D-1F469-200D-1F466-200D-1F466",k:[15,34],o:2},"man-woman-girl-girl":{a:"Man Woman Girl Girl",b:"1F468-200D-1F469-200D-1F467-200D-1F467",k:[15,37],o:2},"man-man-boy":{a:"Man Man Boy",b:"1F468-200D-1F468-200D-1F466",k:[15,28],o:2},"man-man-girl":{a:"Man Man Girl",b:"1F468-200D-1F468-200D-1F467",k:[15,30],o:2},"man-man-girl-boy":{a:"Man Man Girl Boy",b:"1F468-200D-1F468-200D-1F467-200D-1F466",k:[15,31],o:2},"man-man-boy-boy":{a:"Man Man Boy Boy",b:"1F468-200D-1F468-200D-1F466-200D-1F466",k:[15,29],o:2},"man-man-girl-girl":{a:"Man Man Girl Girl",b:"1F468-200D-1F468-200D-1F467-200D-1F467",k:[15,32],o:2},"woman-woman-boy":{a:"Woman Woman Boy",b:"1F469-200D-1F469-200D-1F466",k:[18,18],o:2},"woman-woman-girl":{a:"Woman Woman Girl",b:"1F469-200D-1F469-200D-1F467",k:[18,20],o:2},"woman-woman-girl-boy":{a:"Woman Woman Girl Boy",b:"1F469-200D-1F469-200D-1F467-200D-1F466",k:[18,21],o:2},"woman-woman-boy-boy":{a:"Woman Woman Boy Boy",b:"1F469-200D-1F469-200D-1F466-200D-1F466",k:[18,19],o:2},"woman-woman-girl-girl":{a:"Woman Woman Girl Girl",b:"1F469-200D-1F469-200D-1F467-200D-1F467",k:[18,22],o:2},"man-boy":{a:"Man Boy",b:"1F468-200D-1F466",k:[15,24],o:4},"man-boy-boy":{a:"Man Boy Boy",b:"1F468-200D-1F466-200D-1F466",k:[15,23],o:4},"man-girl":{a:"Man Girl",b:"1F468-200D-1F467",k:[15,27],o:4},"man-girl-boy":{a:"Man Girl Boy",b:"1F468-200D-1F467-200D-1F466",k:[15,25],o:4},"man-girl-girl":{a:"Man Girl Girl",b:"1F468-200D-1F467-200D-1F467",k:[15,26],o:4},"woman-boy":{a:"Woman Boy",b:"1F469-200D-1F466",k:[18,14],o:4},"woman-boy-boy":{a:"Woman Boy Boy",b:"1F469-200D-1F466-200D-1F466",k:[18,13],o:4},"woman-girl":{a:"Woman Girl",b:"1F469-200D-1F467",k:[18,17],o:4},"woman-girl-boy":{a:"Woman Girl Boy",b:"1F469-200D-1F467-200D-1F466",k:[18,15],o:4},"woman-girl-girl":{a:"Woman Girl Girl",b:"1F469-200D-1F467-200D-1F467",k:[18,16],o:4},speaking_head_in_silhouette:{a:"Speaking Head in Silhouette",b:"1F5E3-FE0F",c:"1F5E3",k:[30,25],o:2},bust_in_silhouette:{a:"Bust in Silhouette",b:"1F464",j:["user","person","human"],k:[14,24],o:2},busts_in_silhouette:{a:"Busts in Silhouette",b:"1F465",j:["user","person","human","group","team"],k:[14,25],o:2},footprints:{a:"Footprints",b:"1F463",j:["feet","tracking","walking","beach"],k:[14,23],o:2}};var aliases={raised_hand:"hand",satisfied:"laughing",tshirt:"shirt",hand_with_index_and_middle_fingers_crossed:"crossed_fingers",sign_of_the_horns:"the_horns",grinning_face_with_star_eyes:"star-struck",reversed_hand_with_middle_finger_extended:"middle_finger",thumbsup:"+1",thumbsdown:"-1",punch:"facepunch",grinning_face_with_one_large_and_one_small_eye:"zany_face",shoe:"mans_shoe",smiling_face_with_smiling_eyes_and_hand_covering_mouth:"face_with_hand_over_mouth",face_with_finger_covering_closed_lips:"shushing_face",face_with_one_eyebrow_raised:"face_with_raised_eyebrow",face_with_open_mouth_vomiting:"face_vomiting",cooking:"fried_egg","flag-cn":"cn",shocked_face_with_exploding_head:"exploding_head",paw_prints:"feet","flag-de":"de",telephone:"phone","flag-es":"es",red_car:"car",flipper:"dolphin","flag-fr":"fr",uk:"gb","flag-gb":"gb",serious_face_with_symbols_covering_mouth:"face_with_symbols_on_mouth",poop:"hankey",shit:"hankey",honeybee:"bee",staff_of_aesculapius:"medical_symbol",lantern:"izakaya_lantern",open_book:"book",sailboat:"boat",knife:"hocho","flag-it":"it",heavy_exclamation_mark:"exclamation","flag-jp":"jp",envelope:"email","flag-kr":"kr",collision:"boom",pencil:"memo",waxing_gibbous_moon:"moon",mother_christmas:"mrs_claus",sun_small_cloud:"mostly_sunny",sun_behind_cloud:"barely_sunny",sun_behind_rain_cloud:"partly_sunny_rain",lightning_cloud:"lightning",tornado_cloud:"tornado","flag-ru":"ru","flag-us":"us",women_holding_hands:"two_women_holding_hands",man_and_woman_holding_hands:"couple",woman_and_man_holding_hands:"couple",men_holding_hands:"two_men_holding_hands","man-woman-boy":"family",family:"man-woman-boy"};var defaultEmojiData = {compressed:compressed,categories:categories,emojis:emojis,aliases:aliases};

var makeAddNotifications = function (setNotifications, notificationTimeouts) { return function (text, type) {
    if (typeof text !== 'string' || (type !== 'success' && type !== 'error')) {
        return;
    }
    var id = nanoid.nanoid();
    setNotifications(function (prevNotifications) { return __spreadArray$1(__spreadArray$1([], prevNotifications, true), [{ id: id, text: text, type: type }], false); });
    var timeout = setTimeout(function () {
        return setNotifications(function (prevNotifications) {
            return prevNotifications.filter(function (notification) { return notification.id !== id; });
        });
    }, 5000);
    notificationTimeouts.push(timeout);
}; };

var useChannelContainerClasses = function (_a) {
    var _b, _c, _d;
    var customClasses = _a.customClasses;
    var useImageFlagEmojisOnWindows = useChatContext('Channel').useImageFlagEmojisOnWindows;
    return {
        channelClass: (_b = customClasses === null || customClasses === void 0 ? void 0 : customClasses.channel) !== null && _b !== void 0 ? _b : 'str-chat-channel str-chat__channel',
        chatClass: (_c = customClasses === null || customClasses === void 0 ? void 0 : customClasses.chat) !== null && _c !== void 0 ? _c : 'str-chat',
        chatContainerClass: (_d = customClasses === null || customClasses === void 0 ? void 0 : customClasses.chatContainer) !== null && _d !== void 0 ? _d : 'str-chat__container',
        windowsEmojiClass: useImageFlagEmojisOnWindows && navigator.userAgent.match(/Win/)
            ? 'str-chat--windows-flags'
            : '',
    };
};

var UnMemoizedChannel = function (props) {
    var propsChannel = props.channel, _a = props.EmptyPlaceholder, EmptyPlaceholder = _a === void 0 ? null : _a, LoadingErrorIndicator = props.LoadingErrorIndicator, _b = props.LoadingIndicator, LoadingIndicator = _b === void 0 ? LoadingChannel : _b;
    var _c = useChatContext('Channel'), contextChannel = _c.channel, channelsQueryState = _c.channelsQueryState, customClasses = _c.customClasses, theme = _c.theme;
    var _d = useChannelContainerClasses({
        customClasses: customClasses,
    }), channelClass = _d.channelClass, chatClass = _d.chatClass;
    var channel = propsChannel || contextChannel;
    var className = clsx(chatClass, theme, channelClass);
    if (channelsQueryState.queryInProgress === 'reload' && LoadingIndicator) {
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement(LoadingIndicator, null)));
    }
    if (channelsQueryState.error && LoadingErrorIndicator) {
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement(LoadingErrorIndicator, { error: channelsQueryState.error })));
    }
    if (!(channel === null || channel === void 0 ? void 0 : channel.cid)) {
        return React__default["default"].createElement("div", { className: className }, EmptyPlaceholder);
    }
    // @ts-ignore
    return React__default["default"].createElement(ChannelInner, __assign({}, props, { channel: channel, key: channel.cid }));
};
var ChannelInner = function (props) {
    var _a;
    var acceptedFiles = props.acceptedFiles, activeUnreadHandler = props.activeUnreadHandler, channel = props.channel, children = props.children, doMarkReadRequest = props.doMarkReadRequest, doSendMessageRequest = props.doSendMessageRequest, doUpdateMessageRequest = props.doUpdateMessageRequest, _b = props.dragAndDropWindow, dragAndDropWindow = _b === void 0 ? false : _b, _c = props.emojiData, emojiData = _c === void 0 ? defaultEmojiData : _c, _d = props.LoadingErrorIndicator, LoadingErrorIndicator$1 = _d === void 0 ? LoadingErrorIndicator : _d, _e = props.LoadingIndicator, LoadingIndicator = _e === void 0 ? LoadingChannel : _e, maxNumberOfFiles = props.maxNumberOfFiles, _f = props.multipleUploads, multipleUploads = _f === void 0 ? true : _f, onMentionsClick = props.onMentionsClick, onMentionsHover = props.onMentionsHover, _g = props.optionalMessageInputProps, optionalMessageInputProps = _g === void 0 ? {} : _g, skipMessageDataMemoization = props.skipMessageDataMemoization;
    var _h = useChatContext('Channel'), client = _h.client, customClasses = _h.customClasses, latestMessageDatesByChannels = _h.latestMessageDatesByChannels, mutes = _h.mutes, theme = _h.theme;
    var t = useTranslationContext('Channel').t;
    var _j = useChannelContainerClasses({ customClasses: customClasses }), channelClass = _j.channelClass, chatClass = _j.chatClass, chatContainerClass = _j.chatContainerClass, windowsEmojiClass = _j.windowsEmojiClass;
    var _k = React.useState(channel.getConfig()), channelConfig = _k[0], setChannelConfig = _k[1];
    var _l = React.useState([]), notifications = _l[0], setNotifications = _l[1];
    var _m = React.useState(), quotedMessage = _m[0], setQuotedMessage = _m[1];
    var notificationTimeouts = [];
    var _o = React.useReducer(channelReducer, __assign(__assign({}, initialState$1), { loading: !channel.initialized })), state = _o[0], dispatch = _o[1];
    var isMounted = useIsMounted();
    var originalTitle = React.useRef('');
    var lastRead = React.useRef(new Date());
    var online = React.useRef(true);
    var channelCapabilitiesArray = (_a = channel.data) === null || _a === void 0 ? void 0 : _a.own_capabilities;
    var emojiConfig = {
        commonEmoji: commonEmoji,
        defaultMinimalEmojis: defaultMinimalEmojis,
        emojiData: emojiData,
        emojiSetDef: emojiSetDef,
    };
    var throttledCopyStateFromChannel = throttle__default["default"](function () { return dispatch({ channel: channel, type: 'copyStateFromChannelOnEvent' }); }, 500, {
        leading: true,
        trailing: true,
    });
    var markRead = function () {
        if (channel.disconnected || !(channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.read_events)) {
            return;
        }
        lastRead.current = new Date();
        if (doMarkReadRequest) {
            doMarkReadRequest(channel);
        }
        else {
            streamChat.logChatPromiseExecution(channel.markRead(), 'mark read');
        }
        if (activeUnreadHandler) {
            activeUnreadHandler(0, originalTitle.current);
        }
        else if (originalTitle.current) {
            document.title = originalTitle.current;
        }
    };
    var markReadThrottled = throttle__default["default"](markRead, 500, { leading: true, trailing: true });
    var handleEvent = function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (event.message) {
            dispatch({
                channel: channel,
                message: event.message,
                type: 'updateThreadOnEvent',
            });
        }
        if (event.type === 'user.watching.start' || event.type === 'user.watching.stop')
            return;
        if (event.type === 'typing.start' || event.type === 'typing.stop') {
            return dispatch({ channel: channel, type: 'setTyping' });
        }
        if (event.type === 'connection.changed' && typeof event.online === 'boolean') {
            online.current = event.online;
        }
        if (event.type === 'message.new') {
            var mainChannelUpdated = true;
            if (((_a = event.message) === null || _a === void 0 ? void 0 : _a.parent_id) && !((_b = event.message) === null || _b === void 0 ? void 0 : _b.show_in_channel)) {
                mainChannelUpdated = false;
            }
            if (mainChannelUpdated && ((_d = (_c = event.message) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.id) !== client.userID) {
                if (!document.hidden) {
                    markReadThrottled();
                }
                else if ((channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.read_events) && !channel.muteStatus().muted) {
                    var unread = channel.countUnread(lastRead.current);
                    if (activeUnreadHandler) {
                        activeUnreadHandler(unread, originalTitle.current);
                    }
                    else {
                        document.title = "(".concat(unread, ") ").concat(originalTitle.current);
                    }
                }
            }
            if (((_f = (_e = event.message) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f.id) === client.userID &&
                ((_g = event === null || event === void 0 ? void 0 : event.message) === null || _g === void 0 ? void 0 : _g.created_at) &&
                ((_h = event === null || event === void 0 ? void 0 : event.message) === null || _h === void 0 ? void 0 : _h.cid)) {
                var messageDate = new Date(event.message.created_at);
                var cid = event.message.cid;
                if (!latestMessageDatesByChannels[cid] ||
                    latestMessageDatesByChannels[cid].getTime() < messageDate.getTime()) {
                    latestMessageDatesByChannels[cid] = messageDate;
                }
            }
        }
        throttledCopyStateFromChannel();
    };
    // useLayoutEffect here to prevent spinner. Use Suspense when it is available in stable release
    React.useLayoutEffect(function () {
        var errored = false;
        var done = false;
        var onVisibilityChange = function () {
            if (!document.hidden)
                markRead();
        };
        (function () { return __awaiter$1(void 0, void 0, void 0, function () {
            var config, e_1;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!channel.initialized) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, channel.watch()];
                    case 2:
                        _a.sent();
                        config = channel.getConfig();
                        setChannelConfig(config);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        dispatch({ error: e_1, type: 'setError' });
                        errored = true;
                        return [3 /*break*/, 4];
                    case 4:
                        done = true;
                        originalTitle.current = document.title;
                        if (!errored) {
                            dispatch({ channel: channel, type: 'initStateFromChannel' });
                            if (channel.countUnread() > 0)
                                markRead();
                            // The more complex sync logic is done in Chat
                            document.addEventListener('visibilitychange', onVisibilityChange);
                            client.on('connection.changed', handleEvent);
                            client.on('connection.recovered', handleEvent);
                            client.on('user.updated', handleEvent);
                            client.on('user.deleted', handleEvent);
                            channel.on(handleEvent);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
        return function () {
            if (errored || !done)
                return;
            document.removeEventListener('visibilitychange', onVisibilityChange);
            channel === null || channel === void 0 ? void 0 : channel.off(handleEvent);
            client.off('connection.changed', handleEvent);
            client.off('connection.recovered', handleEvent);
            client.off('user.updated', handleEvent);
            client.off('user.deleted', handleEvent);
            notificationTimeouts.forEach(clearTimeout);
        };
    }, [channel.cid, doMarkReadRequest]);
    React.useEffect(function () {
        var _a;
        if (!state.thread)
            return;
        var message = (_a = state.messages) === null || _a === void 0 ? void 0 : _a.find(function (m) { var _a; return m.id === ((_a = state.thread) === null || _a === void 0 ? void 0 : _a.id); });
        if (message)
            dispatch({ message: message, type: 'setThread' });
    }, [state.messages, state.thread]);
    /** MESSAGE */
    // Adds a temporary notification to message list, will be removed after 5 seconds
    var addNotification = makeAddNotifications(setNotifications, notificationTimeouts);
    var loadMoreFinished = debounce__default["default"](function (hasMore, messages) {
        if (!isMounted.current)
            return;
        dispatch({ hasMore: hasMore, messages: messages, type: 'loadMoreFinished' });
    }, 2000, {
        leading: true,
        trailing: true,
    });
    var loadMore = function (limit) {
        if (limit === void 0) { limit = DEFAULT_NEXT_CHANNEL_PAGE_SIZE; }
        return __awaiter$1(void 0, void 0, void 0, function () {
            var oldestMessage, notHasMore, oldestID, perPage, queryResponse, e_2, hasMoreMessages;
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!online.current || !window.navigator.onLine)
                            return [2 /*return*/, 0];
                        oldestMessage = (_a = state === null || state === void 0 ? void 0 : state.messages) === null || _a === void 0 ? void 0 : _a[0];
                        if (state.loadingMore || state.loadingMoreNewer || (oldestMessage === null || oldestMessage === void 0 ? void 0 : oldestMessage.status) !== 'received') {
                            return [2 /*return*/, 0];
                        }
                        notHasMore = hasNotMoreMessages(channel.state.messages.length, DEFAULT_INITIAL_CHANNEL_PAGE_SIZE);
                        if (notHasMore) {
                            loadMoreFinished(false, channel.state.messages);
                            return [2 /*return*/, channel.state.messages.length];
                        }
                        dispatch({ loadingMore: true, type: 'setLoadingMore' });
                        oldestID = oldestMessage === null || oldestMessage === void 0 ? void 0 : oldestMessage.id;
                        perPage = limit;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, channel.query({
                                messages: { id_lt: oldestID, limit: perPage },
                                watchers: { limit: perPage },
                            })];
                    case 2:
                        queryResponse = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.warn('message pagination request failed with error', e_2);
                        dispatch({ loadingMore: false, type: 'setLoadingMore' });
                        return [2 /*return*/, 0];
                    case 4:
                        hasMoreMessages = queryResponse.messages.length === perPage;
                        loadMoreFinished(hasMoreMessages, channel.state.messages);
                        return [2 /*return*/, queryResponse.messages.length];
                }
            });
        });
    };
    var loadMoreNewer = function (limit) {
        if (limit === void 0) { limit = 100; }
        return __awaiter$1(void 0, void 0, void 0, function () {
            var newestMessage, newestId, perPage, queryResponse, e_3, hasMoreNewer;
            var _a, _b;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!online.current || !window.navigator.onLine)
                            return [2 /*return*/, 0];
                        newestMessage = (_a = state === null || state === void 0 ? void 0 : state.messages) === null || _a === void 0 ? void 0 : _a[((_b = state === null || state === void 0 ? void 0 : state.messages) === null || _b === void 0 ? void 0 : _b.length) - 1];
                        if (state.loadingMore || state.loadingMoreNewer)
                            return [2 /*return*/, 0];
                        dispatch({ loadingMoreNewer: true, type: 'setLoadingMoreNewer' });
                        newestId = newestMessage === null || newestMessage === void 0 ? void 0 : newestMessage.id;
                        perPage = limit;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, channel.query({
                                messages: { id_gt: newestId, limit: perPage },
                                watchers: { limit: perPage },
                            })];
                    case 2:
                        queryResponse = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _c.sent();
                        console.warn('message pagination request failed with error', e_3);
                        dispatch({ loadingMoreNewer: false, type: 'setLoadingMoreNewer' });
                        return [2 /*return*/, 0];
                    case 4:
                        hasMoreNewer = channel.state.messages !== channel.state.latestMessages;
                        dispatch({ hasMoreNewer: hasMoreNewer, messages: channel.state.messages, type: 'loadMoreNewerFinished' });
                        return [2 /*return*/, queryResponse.messages.length];
                }
            });
        });
    };
    var clearHighlightedMessageTimeoutId = React.useRef(null);
    var jumpToMessage = function (messageId, messageLimit) {
        if (messageLimit === void 0) { messageLimit = 100; }
        return __awaiter$1(void 0, void 0, void 0, function () {
            var indexOfMessage, hasMoreMessages;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch({ loadingMore: true, type: 'setLoadingMore' });
                        return [4 /*yield*/, channel.state.loadMessageIntoState(messageId, undefined, messageLimit)];
                    case 1:
                        _a.sent();
                        indexOfMessage = channel.state.messages.findIndex(function (message) { return message.id === messageId; });
                        hasMoreMessages = indexOfMessage >= Math.floor(messageLimit / 2);
                        loadMoreFinished(hasMoreMessages, channel.state.messages);
                        dispatch({
                            hasMoreNewer: channel.state.messages !== channel.state.latestMessages,
                            highlightedMessageId: messageId,
                            type: 'jumpToMessageFinished',
                        });
                        if (clearHighlightedMessageTimeoutId.current) {
                            clearTimeout(clearHighlightedMessageTimeoutId.current);
                        }
                        clearHighlightedMessageTimeoutId.current = setTimeout(function () {
                            clearHighlightedMessageTimeoutId.current = null;
                            dispatch({ type: 'clearHighlightedMessage' });
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    var jumpToLatestMessage = function () { return __awaiter$1(void 0, void 0, void 0, function () {
        var hasMoreOlder;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, channel.state.loadMessageIntoState('latest')];
                case 1:
                    _a.sent();
                    hasMoreOlder = channel.state.messages.length >= 25;
                    loadMoreFinished(hasMoreOlder, channel.state.messages);
                    dispatch({
                        type: 'jumpToLatestMessage',
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var updateMessage = function (updatedMessage) {
        // add the message to the local channel state
        channel.state.addMessageSorted(updatedMessage, true);
        dispatch({
            channel: channel,
            parentId: state.thread && updatedMessage.parent_id,
            type: 'copyMessagesFromChannel',
        });
    };
    var isUserResponseArray = function (output) { var _a; return ((_a = output[0]) === null || _a === void 0 ? void 0 : _a.id) != null; };
    var doSendMessage = function (message, customMessageData) { return __awaiter$1(void 0, void 0, void 0, function () {
        var attachments, id, _a, mentioned_users, parent_id, text, mentions, messageData, messageResponse, error_1, stringError, parsedError;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    attachments = message.attachments, id = message.id, _a = message.mentioned_users, mentioned_users = _a === void 0 ? [] : _a, parent_id = message.parent_id, text = message.text;
                    mentions = isUserResponseArray(mentioned_users)
                        ? mentioned_users.map(function (_a) {
                            var id = _a.id;
                            return id;
                        })
                        : mentioned_users;
                    messageData = __assign({ attachments: attachments, id: id, mentioned_users: mentions, parent_id: parent_id, quoted_message_id: parent_id === (quotedMessage === null || quotedMessage === void 0 ? void 0 : quotedMessage.parent_id) ? quotedMessage === null || quotedMessage === void 0 ? void 0 : quotedMessage.id : undefined, text: text }, customMessageData);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    messageResponse = void 0;
                    if (!doSendMessageRequest) return [3 /*break*/, 3];
                    return [4 /*yield*/, doSendMessageRequest(channel.cid, messageData)];
                case 2:
                    messageResponse = _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, channel.sendMessage(messageData)];
                case 4:
                    messageResponse = _b.sent();
                    _b.label = 5;
                case 5:
                    // replace it after send is completed
                    if (messageResponse === null || messageResponse === void 0 ? void 0 : messageResponse.message) {
                        updateMessage(__assign(__assign({}, messageResponse.message), { status: 'received' }));
                    }
                    if (quotedMessage && parent_id === (quotedMessage === null || quotedMessage === void 0 ? void 0 : quotedMessage.parent_id))
                        setQuotedMessage(undefined);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    stringError = JSON.stringify(error_1);
                    parsedError = stringError ? JSON.parse(stringError) : {};
                    updateMessage(__assign(__assign({}, message), { error: parsedError, errorStatusCode: parsedError.status || undefined, status: 'failed' }));
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var sendMessage = function (_a, customMessageData) {
        var _b = _a.attachments, attachments = _b === void 0 ? [] : _b, _c = _a.mentioned_users, mentioned_users = _c === void 0 ? [] : _c, parent = _a.parent, _d = _a.text, text = _d === void 0 ? '' : _d;
        return __awaiter$1(void 0, void 0, void 0, function () {
            var messagePreview;
            var _e;
            return __generator$1(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        channel.state.filterErrorMessages();
                        messagePreview = __assign({ __html: text, attachments: attachments, created_at: new Date(), html: text, id: (_e = customMessageData === null || customMessageData === void 0 ? void 0 : customMessageData.id) !== null && _e !== void 0 ? _e : "".concat(client.userID, "-").concat(nanoid.nanoid()), mentioned_users: mentioned_users, reactions: [], status: 'sending', text: text, type: 'regular', user: client.user }, ((parent === null || parent === void 0 ? void 0 : parent.id) ? { parent_id: parent.id } : null));
                        updateMessage(messagePreview);
                        return [4 /*yield*/, doSendMessage(messagePreview, customMessageData)];
                    case 1:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var retrySendMessage = function (message) { return __awaiter$1(void 0, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateMessage(__assign(__assign({}, message), { errorStatusCode: undefined, status: 'sending' }));
                    return [4 /*yield*/, doSendMessage(message)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var removeMessage = function (message) {
        channel.state.removeMessage(message);
        dispatch({
            channel: channel,
            parentId: state.thread && message.parent_id,
            type: 'copyMessagesFromChannel',
        });
    };
    /** THREAD */
    var openThread = function (message, event) {
        event.preventDefault();
        setQuotedMessage(function (current) {
            if ((current === null || current === void 0 ? void 0 : current.parent_id) !== (message === null || message === void 0 ? void 0 : message.parent_id)) {
                return undefined;
            }
            else {
                return current;
            }
        });
        dispatch({ channel: channel, message: message, type: 'openThread' });
    };
    var closeThread = function (event) {
        event.preventDefault();
        dispatch({ type: 'closeThread' });
    };
    var loadMoreThreadFinished = debounce__default["default"](function (threadHasMore, threadMessages) {
        dispatch({
            threadHasMore: threadHasMore,
            threadMessages: threadMessages,
            type: 'loadMoreThreadFinished',
        });
    }, 2000, { leading: true, trailing: true });
    var loadMoreThread = function (limit) {
        if (limit === void 0) { limit = DEFAULT_THREAD_PAGE_SIZE; }
        return __awaiter$1(void 0, void 0, void 0, function () {
            var parentID, oldMessages, oldestMessageID, queryResponse, threadHasMoreMessages, newThreadMessages;
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (state.threadLoadingMore || !state.thread)
                            return [2 /*return*/];
                        dispatch({ type: 'startLoadingThread' });
                        parentID = state.thread.id;
                        if (!parentID) {
                            return [2 /*return*/, dispatch({ type: 'closeThread' })];
                        }
                        oldMessages = channel.state.threads[parentID] || [];
                        oldestMessageID = (_a = oldMessages[0]) === null || _a === void 0 ? void 0 : _a.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, channel.getReplies(parentID, {
                                id_lt: oldestMessageID,
                                limit: limit,
                            })];
                    case 2:
                        queryResponse = _b.sent();
                        threadHasMoreMessages = hasMoreMessagesProbably(queryResponse.messages.length, limit);
                        newThreadMessages = channel.state.threads[parentID] || [];
                        // next set loadingMore to false so we can start asking for more data
                        loadMoreThreadFinished(threadHasMoreMessages, newThreadMessages);
                        return [3 /*break*/, 4];
                    case 3:
                        _b.sent();
                        loadMoreThreadFinished(false, oldMessages);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    var onMentionsHoverOrClick = useMentionsHandlers(onMentionsHover, onMentionsClick);
    var editMessage = useEditMessageHandler(doUpdateMessageRequest);
    var typing = state.typing, restState = __rest(state, ["typing"]);
    var channelStateContextValue = useCreateChannelStateContext(__assign(__assign({}, restState), { acceptedFiles: acceptedFiles, channel: channel, channelCapabilitiesArray: channelCapabilitiesArray, channelConfig: channelConfig, dragAndDropWindow: dragAndDropWindow, giphyVersion: props.giphyVersion || 'fixed_height', maxNumberOfFiles: maxNumberOfFiles, multipleUploads: multipleUploads, mutes: mutes, notifications: notifications, quotedMessage: quotedMessage, watcher_count: state.watcherCount }));
    var channelActionContextValue = React.useMemo(function () { return ({
        addNotification: addNotification,
        closeThread: closeThread,
        dispatch: dispatch,
        editMessage: editMessage,
        jumpToLatestMessage: jumpToLatestMessage,
        jumpToMessage: jumpToMessage,
        loadMore: loadMore,
        loadMoreNewer: loadMoreNewer,
        loadMoreThread: loadMoreThread,
        onMentionsClick: onMentionsHoverOrClick,
        onMentionsHover: onMentionsHoverOrClick,
        openThread: openThread,
        removeMessage: removeMessage,
        retrySendMessage: retrySendMessage,
        sendMessage: sendMessage,
        setQuotedMessage: setQuotedMessage,
        skipMessageDataMemoization: skipMessageDataMemoization,
        updateMessage: updateMessage,
    }); }, [channel.cid, loadMore, loadMoreNewer, quotedMessage, jumpToMessage, jumpToLatestMessage]);
    var componentContextValue = React.useMemo(function () { return ({
        Attachment: props.Attachment || Attachment,
        AutocompleteSuggestionHeader: props.AutocompleteSuggestionHeader,
        AutocompleteSuggestionItem: props.AutocompleteSuggestionItem,
        AutocompleteSuggestionList: props.AutocompleteSuggestionList,
        Avatar: props.Avatar,
        CooldownTimer: props.CooldownTimer,
        DateSeparator: props.DateSeparator,
        EditMessageInput: props.EditMessageInput,
        EmojiIcon: props.EmojiIcon,
        EmptyStateIndicator: props.EmptyStateIndicator,
        FileUploadIcon: props.FileUploadIcon,
        GiphyPreviewMessage: props.GiphyPreviewMessage,
        HeaderComponent: props.HeaderComponent,
        Input: props.Input,
        LoadingIndicator: props.LoadingIndicator,
        Message: props.Message || MessageSimple,
        MessageDeleted: props.MessageDeleted,
        MessageListNotifications: props.MessageListNotifications,
        MessageNotification: props.MessageNotification,
        MessageOptions: props.MessageOptions,
        MessageRepliesCountButton: props.MessageRepliesCountButton,
        MessageStatus: props.MessageStatus,
        MessageSystem: props.MessageSystem,
        MessageTimestamp: props.MessageTimestamp,
        ModalGallery: props.ModalGallery,
        PinIndicator: props.PinIndicator,
        QuotedMessage: props.QuotedMessage,
        QuotedMessagePreview: props.QuotedMessagePreview,
        ReactionSelector: props.ReactionSelector,
        ReactionsList: props.ReactionsList,
        SendButton: props.SendButton,
        ThreadHead: props.ThreadHead,
        ThreadHeader: props.ThreadHeader,
        ThreadStart: props.ThreadStart,
        TriggerProvider: props.TriggerProvider,
        TypingIndicator: props.TypingIndicator,
        VirtualMessage: props.VirtualMessage,
    }); }, []);
    var emojiContextValue = React.useMemo(function () { return ({
        Emoji: props.Emoji,
        emojiConfig: emojiConfig,
        EmojiIndex: props.EmojiIndex,
        EmojiPicker: props.EmojiPicker,
    }); }, []);
    var typingContextValue = useCreateTypingContext({
        typing: typing,
    });
    var OptionalMessageInputProvider = React.useMemo(function () { return (dragAndDropWindow ? DropzoneProvider : React__default["default"].Fragment); }, [dragAndDropWindow]);
    var className = clsx(chatClass, theme, channelClass);
    if (state.error) {
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement(LoadingErrorIndicator$1, { error: state.error })));
    }
    if (state.loading) {
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement(LoadingIndicator, null)));
    }
    if (!channel.watch) {
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement("div", null, t('Channel Missing'))));
    }
    return (React__default["default"].createElement("div", { className: clsx(className, windowsEmojiClass) },
        React__default["default"].createElement(ChannelStateProvider, { value: channelStateContextValue },
            React__default["default"].createElement(ChannelActionProvider, { value: channelActionContextValue },
                React__default["default"].createElement(ComponentProvider, { value: componentContextValue },
                    React__default["default"].createElement(EmojiProvider, { value: emojiContextValue },
                        React__default["default"].createElement(TypingProvider, { value: typingContextValue },
                            React__default["default"].createElement("div", { className: "".concat(chatContainerClass) },
                                React__default["default"].createElement(OptionalMessageInputProvider, __assign({}, optionalMessageInputProps), children)))))))));
};
/**
 * A wrapper component that provides channel data and renders children.
 * The Channel component provides the following contexts:
 * - [ChannelStateContext](https://getstream.io/chat/docs/sdk/react/contexts/channel_state_context/)
 * - [ChannelActionContext](https://getstream.io/chat/docs/sdk/react/contexts/channel_action_context/)
 * - [ComponentContext](https://getstream.io/chat/docs/sdk/react/contexts/component_context/)
 * - [EmojiContext](https://getstream.io/chat/docs/sdk/react/contexts/emoji_context/)
 * - [TypingContext](https://getstream.io/chat/docs/sdk/react/contexts/typing_context/)
 */
var Channel = React__default["default"].memo(UnMemoizedChannel);

var MenuIcon$1 = function (_a) {
    var title = _a.title;
    var t = useTranslationContext('MenuIcon').t;
    return (React__default["default"].createElement("svg", { "data-testid": 'menu-icon', viewBox: '0 0 448 512', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, title !== null && title !== void 0 ? title : t('Menu')),
        React__default["default"].createElement("path", { d: 'M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z', fill: 'currentColor' })));
};

var renderPreviewText = function (text) { return React__default["default"].createElement(ReactMarkdown__default["default"], { source: text }); };
var getLatestMessagePreview = function (channel, t, userLanguage) {
    var _a, _b;
    if (userLanguage === void 0) { userLanguage = 'en'; }
    var latestMessage = channel.state.messages[channel.state.messages.length - 1];
    var previewTextToRender = ((_a = latestMessage === null || latestMessage === void 0 ? void 0 : latestMessage.i18n) === null || _a === void 0 ? void 0 : _a["".concat(userLanguage, "_text")]) ||
        (latestMessage === null || latestMessage === void 0 ? void 0 : latestMessage.text);
    if (!latestMessage) {
        return t('Nothing yet...');
    }
    if (latestMessage.deleted_at) {
        return t('Message deleted');
    }
    if (previewTextToRender) {
        var renderedText = renderPreviewText(previewTextToRender);
        return renderedText;
    }
    if (latestMessage.command) {
        return "/".concat(latestMessage.command);
    }
    if ((_b = latestMessage.attachments) === null || _b === void 0 ? void 0 : _b.length) {
        return t('🏙 Attachment...');
    }
    return t('Empty message...');
};
var getDisplayTitle = function (channel, currentUser) {
    var _a, _b;
    var title = (_a = channel.data) === null || _a === void 0 ? void 0 : _a.name;
    var members = Object.values(channel.state.members);
    if (!title && members.length === 2) {
        var otherMember = members.find(function (member) { var _a; return ((_a = member.user) === null || _a === void 0 ? void 0 : _a.id) !== (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id); });
        if ((_b = otherMember === null || otherMember === void 0 ? void 0 : otherMember.user) === null || _b === void 0 ? void 0 : _b.name) {
            title = otherMember.user.name;
        }
    }
    return title;
};
var getDisplayImage = function (channel, currentUser) {
    var _a, _b;
    var image = (_a = channel.data) === null || _a === void 0 ? void 0 : _a.image;
    var members = Object.values(channel.state.members);
    if (!image && members.length === 2) {
        var otherMember = members.find(function (member) { var _a; return ((_a = member.user) === null || _a === void 0 ? void 0 : _a.id) !== (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id); });
        if ((_b = otherMember === null || otherMember === void 0 ? void 0 : otherMember.user) === null || _b === void 0 ? void 0 : _b.image) {
            image = otherMember.user.image;
        }
    }
    return image;
};

var useChannelPreviewInfo = function (props) {
    var channel = props.channel, overrideImage = props.overrideImage, overrideTitle = props.overrideTitle;
    var client = useChatContext('ChannelPreview').client;
    var _a = React.useState(getDisplayTitle(channel, client.user)), displayTitle = _a[0], setDisplayTitle = _a[1];
    var _b = React.useState(getDisplayImage(channel, client.user)), displayImage = _b[0], setDisplayImage = _b[1];
    React.useEffect(function () {
        var handleEvent = function () {
            setDisplayTitle(function (displayTitle) {
                var newDisplayTitle = getDisplayTitle(channel, client.user);
                return displayTitle !== newDisplayTitle ? newDisplayTitle : displayTitle;
            });
            setDisplayImage(function (displayImage) {
                var newDisplayImage = getDisplayImage(channel, client.user);
                return displayImage !== newDisplayImage ? newDisplayImage : displayImage;
            });
        };
        client.on('user.updated', handleEvent);
        return function () {
            client.off('user.updated', handleEvent);
        };
    }, []);
    return {
        displayImage: overrideImage || displayImage,
        displayTitle: overrideTitle || displayTitle,
    };
};

var UnMemoizedChannelHeader = function (props) {
    var _a = props.Avatar, Avatar$1 = _a === void 0 ? Avatar : _a, _b = props.MenuIcon, MenuIcon = _b === void 0 ? MenuIcon$1 : _b, overrideImage = props.image, live = props.live, overrideTitle = props.title;
    var _c = useChannelStateContext('ChannelHeader'), channel = _c.channel, watcher_count = _c.watcher_count;
    var openMobileNav = useChatContext('ChannelHeader').openMobileNav;
    var t = useTranslationContext('ChannelHeader').t;
    var _d = useChannelPreviewInfo({
        channel: channel,
        overrideImage: overrideImage,
        overrideTitle: overrideTitle,
    }), displayImage = _d.displayImage, displayTitle = _d.displayTitle;
    var _e = (channel === null || channel === void 0 ? void 0 : channel.data) || {}, member_count = _e.member_count, subtitle = _e.subtitle;
    return (React__default["default"].createElement("div", { className: 'str-chat__header-livestream str-chat__channel-header' },
        React__default["default"].createElement("button", { "aria-label": 'Menu', className: 'str-chat__header-hamburger', onClick: openMobileNav },
            React__default["default"].createElement(MenuIcon, null)),
        React__default["default"].createElement(Avatar$1, { image: displayImage, name: displayTitle, shape: 'rounded', size: (channel === null || channel === void 0 ? void 0 : channel.type) === 'commerce' ? 60 : 40 }),
        React__default["default"].createElement("div", { className: 'str-chat__header-livestream-left str-chat__channel-header-end' },
            React__default["default"].createElement("p", { className: 'str-chat__header-livestream-left--title str-chat__channel-header-title' },
                displayTitle,
                ' ',
                live && (React__default["default"].createElement("span", { className: 'str-chat__header-livestream-left--livelabel' }, t('live')))),
            subtitle && React__default["default"].createElement("p", { className: 'str-chat__header-livestream-left--subtitle' }, subtitle),
            React__default["default"].createElement("p", { className: 'str-chat__header-livestream-left--members str-chat__channel-header-info' },
                !live && !!member_count && member_count > 0 && (React__default["default"].createElement(React__default["default"].Fragment, null,
                    t('{{ memberCount }} members', {
                        memberCount: member_count,
                    }),
                    ",",
                    ' ')),
                t('{{ watcherCount }} online', { watcherCount: watcher_count })))));
};
/**
 * The ChannelHeader component renders some basic information about a Channel.
 */
var ChannelHeader = React__default["default"].memo(UnMemoizedChannelHeader);

var ConnectionErrorIcon = function () { return (React__default["default"].createElement("svg", { height: '78px', version: '1.1', viewBox: '0 0 78 78', width: '78px', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("title", null, "Connection Error"),
    React__default["default"].createElement("g", { fill: 'none', fillRule: 'evenodd', id: 'Interactions', stroke: 'none', strokeWidth: '1' },
        React__default["default"].createElement("g", { fill: '#CF1F25', id: 'Connection-Error-_-Connectivity', transform: 'translate(-270.000000, -30.000000)' },
            React__default["default"].createElement("g", { id: '109-network-connection', transform: 'translate(270.000000, 30.000000)' },
                React__default["default"].createElement("path", { d: 'M66.4609744,11.414231 C81.6225232,26.5757798 81.6225232,51.157545 66.4609744,66.3188467 C51.2994256,81.4803954 26.7176604,81.4803954 11.5563587,66.3188467 C-3.60519004,51.1572979 -3.60519004,26.5755327 11.5563587,11.414231 C26.7179075,-3.74731776 51.2996727,-3.74731776 66.4609744,11.414231 Z M54.7853215,45.8823776 L54.7853215,40.5882574 C54.7853215,39.613638 53.9952341,38.8235506 53.0206147,38.8235506 L44.9576695,38.8235506 L41.428256,42.3529641 L51.255555,42.3529641 L51.255555,45.8823776 L54.7853215,45.8823776 Z M40.6659027,43.1153174 L37.8988425,45.8823776 L40.6659027,45.8823776 L40.6659027,43.1153174 Z M51.1764962,56.4702653 L58.2353232,56.4702653 C59.2099355,56.4702653 60.00003,55.6801708 60.00003,54.7055585 L60.00003,51.176145 C60.00003,50.2015327 59.2099355,49.4114382 58.2353232,49.4114382 L51.1764962,49.4114382 C50.2018839,49.4114382 49.4117894,50.2015327 49.4117894,51.176145 L49.4117894,54.7055585 C49.4117894,55.6801708 50.2018839,56.4702653 51.1764962,56.4702653 Z M35.2941353,56.4702653 L42.3529624,56.4702653 C43.3275746,56.4702653 44.1176691,55.6801708 44.1176691,54.7055585 L44.1176691,51.176145 C44.1176691,50.2015327 43.3275746,49.4114382 42.3529624,49.4114382 L35.2941353,49.4114382 C34.319523,49.4114382 33.5294285,50.2015327 33.5294285,51.176145 L33.5294285,54.7055585 C33.5294285,55.6801708 34.319523,56.4702653 35.2941353,56.4702653 Z M56.6964989,19.0874231 C56.007381,18.3985134 54.8903216,18.3985134 54.2012036,19.087423 L45.882376,27.4062507 L45.882376,19.4117761 C45.882376,18.4371568 45.0922885,17.6470693 44.1176692,17.6470693 L33.5294286,17.6470693 C32.5548092,17.6470694 31.7647218,18.4371568 31.7647218,19.4117761 L31.7647218,30.0000167 C31.7647219,30.9746363 32.5548092,31.7647237 33.5294285,31.7647237 L41.5239031,31.7647237 L34.4650761,38.8235508 L24.7058947,38.8235508 C23.7312753,38.8235508 22.9411879,39.6136382 22.9411879,40.5882575 L22.9411879,45.8823778 L26.4706014,45.8823778 L26.4706014,42.3529643 L30.9356624,42.3529643 L23.8768354,49.4117914 L19.4117743,49.4117914 C18.4371549,49.4117914 17.6470675,50.2018788 17.6470675,51.1764981 L17.6470675,54.7059117 C17.6504049,54.9674302 17.7129076,55.2248042 17.8298886,55.4587302 L16.4456526,56.8429662 C15.7446193,57.5200453 15.7252005,58.6372282 16.4022825,59.3382615 C17.0793616,60.0392948 18.1965445,60.0587136 18.8975778,59.3816316 C18.9122847,59.3674273 18.9267436,59.3529684 18.940948,59.3382615 L56.6964963,21.5830662 C57.3856425,20.8939094 57.3856425,19.7765747 56.6964963,19.0874179 Z', id: 'Combined-Shape' })))))); };

var UnMemoizedChatDown = function (_a) {
    var _b = _a.image, image = _b === void 0 ? React__default["default"].createElement(ConnectionErrorIcon, null) : _b, text = _a.text, _c = _a.type, type = _c === void 0 ? 'Error' : _c;
    var t = useTranslationContext('ChatDown').t;
    return (React__default["default"].createElement("div", { className: 'str-chat__down' },
        React__default["default"].createElement("div", { className: 'str-chat__down-main' },
            typeof image === 'string' ? (React__default["default"].createElement("img", { alt: 'Connection error', "data-testid": 'chatdown-img', src: image })) : (image),
            React__default["default"].createElement("h1", null, type),
            React__default["default"].createElement("h3", { "aria-live": 'assertive' }, text || t('Error connecting to chat, refresh the page to try again.')))));
};
/**
 * A simple indicator that chat functionality isn't available, triggered when the Chat API is unavailable or your network isn't working.
 */
var ChatDown = React__default["default"].memo(UnMemoizedChatDown);

/**
 * A preview list of channels, allowing you to select the channel you want to open
 */
var ChannelListMessenger = function (props) {
    var children = props.children, _a = props.error, error = _a === void 0 ? null : _a, loading = props.loading, _b = props.LoadingErrorIndicator, LoadingErrorIndicator = _b === void 0 ? ChatDown : _b, _c = props.LoadingIndicator, LoadingIndicator = _c === void 0 ? LoadingChannels : _c;
    if (error) {
        return React__default["default"].createElement(LoadingErrorIndicator, { type: 'Connection Error' });
    }
    if (loading) {
        return React__default["default"].createElement(LoadingIndicator, null);
    }
    return (React__default["default"].createElement("div", { className: 'str-chat__channel-list-messenger' },
        React__default["default"].createElement("div", { "aria-label": 'Channel list', className: 'str-chat__channel-list-messenger__main', role: 'listbox' }, children)));
};

var useChannelDeletedListener = function (setChannels, customHandler) {
    var client = useChatContext('useChannelDeletedListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            if (customHandler && typeof customHandler === 'function') {
                customHandler(setChannels, event);
            }
            else {
                setChannels(function (channels) {
                    var channelIndex = channels.findIndex(function (channel) { return channel.cid === event.cid; });
                    if (channelIndex < 0)
                        return __spreadArray$1([], channels, true);
                    // Remove the deleted channel from the list.s
                    channels.splice(channelIndex, 1);
                    return __spreadArray$1([], channels, true);
                });
            }
        };
        client.on('channel.deleted', handleEvent);
        return function () {
            client.off('channel.deleted', handleEvent);
        };
    }, [customHandler]);
};

var useChannelHiddenListener = function (setChannels, customHandler) {
    var client = useChatContext('useChannelHiddenListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            if (customHandler && typeof customHandler === 'function') {
                customHandler(setChannels, event);
            }
            else {
                setChannels(function (channels) {
                    var channelIndex = channels.findIndex(function (channel) { return channel.cid === event.cid; });
                    if (channelIndex < 0)
                        return __spreadArray$1([], channels, true);
                    // Remove the hidden channel from the list.s
                    channels.splice(channelIndex, 1);
                    return __spreadArray$1([], channels, true);
                });
            }
        };
        client.on('channel.hidden', handleEvent);
        return function () {
            client.off('channel.hidden', handleEvent);
        };
    }, [customHandler]);
};

var useChannelTruncatedListener = function (setChannels, customHandler, forceUpdate) {
    var client = useChatContext('useChannelTruncatedListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            setChannels(function (channels) { return __spreadArray$1([], channels, true); });
            if (customHandler && typeof customHandler === 'function') {
                customHandler(setChannels, event);
            }
            if (forceUpdate) {
                forceUpdate();
            }
        };
        client.on('channel.truncated', handleEvent);
        return function () {
            client.off('channel.truncated', handleEvent);
        };
    }, [customHandler]);
};

var useChannelUpdatedListener = function (setChannels, customHandler, forceUpdate) {
    var client = useChatContext('useChannelUpdatedListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            setChannels(function (channels) {
                var _a, _b, _c, _d, _e, _f;
                var channelIndex = channels.findIndex(function (channel) { var _a; return channel.cid === ((_a = event.channel) === null || _a === void 0 ? void 0 : _a.cid); });
                if (channelIndex > -1 && event.channel) {
                    var newChannels = channels;
                    newChannels[channelIndex].data = __assign(__assign({}, event.channel), { hidden: (_b = (_a = event.channel) === null || _a === void 0 ? void 0 : _a.hidden) !== null && _b !== void 0 ? _b : (_c = newChannels[channelIndex].data) === null || _c === void 0 ? void 0 : _c.hidden, own_capabilities: (_e = (_d = event.channel) === null || _d === void 0 ? void 0 : _d.own_capabilities) !== null && _e !== void 0 ? _e : (_f = newChannels[channelIndex].data) === null || _f === void 0 ? void 0 : _f.own_capabilities });
                    return __spreadArray$1([], newChannels, true);
                }
                return channels;
            });
            if (forceUpdate) {
                forceUpdate();
            }
            if (customHandler && typeof customHandler === 'function') {
                customHandler(setChannels, event);
            }
        };
        client.on('channel.updated', handleEvent);
        return function () {
            client.off('channel.updated', handleEvent);
        };
    }, [customHandler]);
};

var getChannel = function (client, type, id) { return __awaiter$1(void 0, void 0, void 0, function () {
    var channel;
    return __generator$1(this, function (_a) {
        switch (_a.label) {
            case 0:
                channel = client.channel(type, id);
                return [4 /*yield*/, channel.watch()];
            case 1:
                _a.sent();
                return [2 /*return*/, channel];
        }
    });
}); };
var MAX_QUERY_CHANNELS_LIMIT = 30;
var moveChannelUp = function (_a) {
    var activeChannel = _a.activeChannel, channels = _a.channels, cid = _a.cid;
    // get index of channel to move up
    var channelIndex = channels.findIndex(function (channel) { return channel.cid === cid; });
    if (!activeChannel && channelIndex <= 0)
        return channels;
    // get channel to move up
    var channel = activeChannel || channels[channelIndex];
    return uniqBy__default["default"](__spreadArray$1([channel], channels, true), 'cid');
};

var useChannelVisibleListener = function (setChannels, customHandler) {
    var client = useChatContext('useChannelVisibleListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
            var channel_1;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(customHandler && typeof customHandler === 'function')) return [3 /*break*/, 1];
                        customHandler(setChannels, event);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(event.type && event.channel_type && event.channel_id)) return [3 /*break*/, 3];
                        return [4 /*yield*/, getChannel(client, event.channel_type, event.channel_id)];
                    case 2:
                        channel_1 = _a.sent();
                        setChannels(function (channels) { return uniqBy__default["default"](__spreadArray$1([channel_1], channels, true), 'cid'); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        client.on('channel.visible', handleEvent);
        return function () {
            client.off('channel.visible', handleEvent);
        };
    }, [customHandler]);
};

var useConnectionRecoveredListener = function (forceUpdate) {
    var client = useChatContext('useConnectionRecoveredListener').client;
    React.useEffect(function () {
        var handleEvent = function () {
            if (forceUpdate) {
                forceUpdate();
            }
        };
        client.on('connection.recovered', handleEvent);
        return function () {
            client.off('connection.recovered', handleEvent);
        };
    }, []);
};

var useMessageNewListener = function (setChannels, lockChannelOrder, allowNewMessagesFromUnfilteredChannels) {
    if (lockChannelOrder === void 0) { lockChannelOrder = false; }
    if (allowNewMessagesFromUnfilteredChannels === void 0) { allowNewMessagesFromUnfilteredChannels = true; }
    var client = useChatContext('useMessageNewListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            setChannels(function (channels) {
                var channelInList = channels.filter(function (channel) { return channel.cid === event.cid; }).length > 0;
                if (!channelInList && allowNewMessagesFromUnfilteredChannels && event.channel_type) {
                    var channel = client.channel(event.channel_type, event.channel_id);
                    return uniqBy__default["default"](__spreadArray$1([channel], channels, true), 'cid');
                }
                if (!lockChannelOrder)
                    return moveChannelUp({ channels: channels, cid: event.cid || '' });
                return channels;
            });
        };
        client.on('message.new', handleEvent);
        return function () {
            client.off('message.new', handleEvent);
        };
    }, [lockChannelOrder]);
};

var useMobileNavigation = function (channelListRef, navOpen, closeMobileNav) {
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (closeMobileNav &&
                channelListRef.current &&
                !channelListRef.current.contains(event.target) &&
                navOpen) {
                closeMobileNav();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [channelListRef, closeMobileNav, navOpen]);
};

var useNotificationAddedToChannelListener = function (setChannels, customHandler, allowNewMessagesFromUnfilteredChannels) {
    if (allowNewMessagesFromUnfilteredChannels === void 0) { allowNewMessagesFromUnfilteredChannels = true; }
    var client = useChatContext('useNotificationAddedToChannelListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
            var channel_1;
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(customHandler && typeof customHandler === 'function')) return [3 /*break*/, 1];
                        customHandler(setChannels, event);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(allowNewMessagesFromUnfilteredChannels && ((_a = event.channel) === null || _a === void 0 ? void 0 : _a.type))) return [3 /*break*/, 3];
                        return [4 /*yield*/, getChannel(client, event.channel.type, event.channel.id)];
                    case 2:
                        channel_1 = _b.sent();
                        setChannels(function (channels) { return uniqBy__default["default"](__spreadArray$1([channel_1], channels, true), 'cid'); });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        client.on('notification.added_to_channel', handleEvent);
        return function () {
            client.off('notification.added_to_channel', handleEvent);
        };
    }, [customHandler]);
};

var useNotificationMessageNewListener = function (setChannels, customHandler, allowNewMessagesFromUnfilteredChannels) {
    if (allowNewMessagesFromUnfilteredChannels === void 0) { allowNewMessagesFromUnfilteredChannels = true; }
    var client = useChatContext('useNotificationMessageNewListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
            var channel_1;
            var _a;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(customHandler && typeof customHandler === 'function')) return [3 /*break*/, 1];
                        customHandler(setChannels, event);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(allowNewMessagesFromUnfilteredChannels && ((_a = event.channel) === null || _a === void 0 ? void 0 : _a.type))) return [3 /*break*/, 3];
                        return [4 /*yield*/, getChannel(client, event.channel.type, event.channel.id)];
                    case 2:
                        channel_1 = _b.sent();
                        setChannels(function (channels) { return uniqBy__default["default"](__spreadArray$1([channel_1], channels, true), 'cid'); });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        client.on('notification.message_new', handleEvent);
        return function () {
            client.off('notification.message_new', handleEvent);
        };
    }, [customHandler]);
};

var useNotificationRemovedFromChannelListener = function (setChannels, customHandler) {
    var client = useChatContext('useNotificationRemovedFromChannelListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            if (customHandler && typeof customHandler === 'function') {
                customHandler(setChannels, event);
            }
            else {
                setChannels(function (channels) { return channels.filter(function (channel) { var _a; return channel.cid !== ((_a = event.channel) === null || _a === void 0 ? void 0 : _a.cid); }); });
            }
        };
        client.on('notification.removed_from_channel', handleEvent);
        return function () {
            client.off('notification.removed_from_channel', handleEvent);
        };
    }, [customHandler]);
};

var usePaginatedChannels = function (client, filters, sort, options, activeChannelHandler) {
    var _a = useChatContext('usePaginatedChannels').channelsQueryState, setError = _a.setError, setQueryInProgress = _a.setQueryInProgress;
    var _b = React.useState([]), channels = _b[0], setChannels = _b[1];
    var _c = React.useState(true), hasNextPage = _c[0], setHasNextPage = _c[1];
    var filterString = React.useMemo(function () { return JSON.stringify(filters); }, [filters]);
    var sortString = React.useMemo(function () { return JSON.stringify(sort); }, [sort]);
    var queryChannels = function (queryType) { return __awaiter$1(void 0, void 0, void 0, function () {
        var offset, newOptions, channelQueryResponse, newChannels, err_1;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setError(null);
                    if (queryType === 'reload') {
                        setChannels([]);
                        setQueryInProgress('reload');
                    }
                    else {
                        setQueryInProgress('load-more');
                    }
                    offset = queryType === 'reload' ? 0 : channels.length;
                    newOptions = __assign({ limit: (_a = options === null || options === void 0 ? void 0 : options.limit) !== null && _a !== void 0 ? _a : MAX_QUERY_CHANNELS_LIMIT, offset: offset }, options);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.queryChannels(filters, sort || {}, newOptions)];
                case 2:
                    channelQueryResponse = _b.sent();
                    newChannels = queryType === 'reload' ? channelQueryResponse : __spreadArray$1(__spreadArray$1([], channels, true), channelQueryResponse, true);
                    setChannels(newChannels);
                    setHasNextPage(channelQueryResponse.length >= newOptions.limit);
                    // Set active channel only on load of first page
                    if (!offset && activeChannelHandler) {
                        activeChannelHandler(newChannels, setChannels);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    console.warn(err_1);
                    setError(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    setQueryInProgress(null);
                    return [2 /*return*/];
            }
        });
    }); };
    var loadNextPage = function () {
        queryChannels();
    };
    React.useEffect(function () {
        queryChannels('reload');
    }, [filterString, sortString]);
    return {
        channels: channels,
        hasNextPage: hasNextPage,
        loadNextPage: loadNextPage,
        setChannels: setChannels,
    };
};

var useUserPresenceChangedListener = function (setChannels) {
    var client = useChatContext('useUserPresenceChangedListener').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            setChannels(function (channels) {
                var newChannels = channels.map(function (channel) {
                    var _a;
                    if (!((_a = event.user) === null || _a === void 0 ? void 0 : _a.id) || !channel.state.members[event.user.id]) {
                        return channel;
                    }
                    var newChannel = channel; // dumb workaround for linter
                    newChannel.state.members[event.user.id].user = event.user;
                    return newChannel;
                });
                return __spreadArray$1([], newChannels, true);
            });
        };
        client.on('user.presence.changed', handleEvent);
        return function () {
            client.off('user.presence.changed', handleEvent);
        };
    }, []);
};

var UnMemoizedChannelPreviewMessenger = function (props) {
    var _a, _b;
    var active = props.active, _c = props.Avatar, Avatar$1 = _c === void 0 ? Avatar : _c, channel = props.channel, _d = props.className, customClassName = _d === void 0 ? '' : _d, displayImage = props.displayImage, displayTitle = props.displayTitle, latestMessage = props.latestMessage, customOnSelectChannel = props.onSelect, setActiveChannel = props.setActiveChannel, unread = props.unread, watchers = props.watchers;
    var channelPreviewButton = React.useRef(null);
    var avatarName = displayTitle || ((_b = (_a = channel.state.messages[channel.state.messages.length - 1]) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id);
    var onSelectChannel = function (e) {
        if (customOnSelectChannel) {
            customOnSelectChannel(e);
        }
        else if (setActiveChannel) {
            setActiveChannel(channel, watchers);
        }
        if (channelPreviewButton === null || channelPreviewButton === void 0 ? void 0 : channelPreviewButton.current) {
            channelPreviewButton.current.blur();
        }
    };
    return (React__default["default"].createElement("button", { "aria-label": "Select Channel: ".concat(displayTitle || ''), "aria-selected": active, className: clsx("str-chat__channel-preview-messenger str-chat__channel-preview", active && 'str-chat__channel-preview-messenger--active', unread && unread >= 1 && 'str-chat__channel-preview-messenger--unread', customClassName), "data-testid": 'channel-preview-button', onClick: onSelectChannel, ref: channelPreviewButton, role: 'option' },
        React__default["default"].createElement("div", { className: 'str-chat__channel-preview-messenger--left' },
            React__default["default"].createElement(Avatar$1, { image: displayImage, name: avatarName, size: 40 })),
        React__default["default"].createElement("div", { className: 'str-chat__channel-preview-messenger--right str-chat__channel-preview-end' },
            React__default["default"].createElement("div", { className: 'str-chat__channel-preview-end-first-row' },
                React__default["default"].createElement("div", { className: 'str-chat__channel-preview-messenger--name' },
                    React__default["default"].createElement("span", null, displayTitle)),
                !!unread && (React__default["default"].createElement("div", { className: 'str-chat__channel-preview-unread-badge', "data-testid": 'unread-badge' }, unread))),
            React__default["default"].createElement("div", { className: 'str-chat__channel-preview-messenger--last-message' }, latestMessage))));
};
/**
 * Used as preview component for channel item in [ChannelList](#channellist) component.
 * Its best suited for messenger type chat.
 */
var ChannelPreviewMessenger = React__default["default"].memo(UnMemoizedChannelPreviewMessenger);

var useIsChannelMuted = function (channel) {
    var client = useChatContext('useIsChannelMuted').client;
    var _a = React.useState(channel.muteStatus()), muted = _a[0], setMuted = _a[1];
    React.useEffect(function () {
        var handleEvent = function () { return setMuted(channel.muteStatus()); };
        client.on('notification.channel_mutes_updated', handleEvent);
        return function () { return client.off('notification.channel_mutes_updated', handleEvent); };
    }, [muted]);
    return muted;
};

var ChannelPreview = function (props) {
    var channel = props.channel, _a = props.Preview, Preview = _a === void 0 ? ChannelPreviewMessenger : _a, channelUpdateCount = props.channelUpdateCount;
    var _b = useChatContext('ChannelPreview'), activeChannel = _b.channel, client = _b.client, setActiveChannel = _b.setActiveChannel;
    var _c = useTranslationContext('ChannelPreview'), t = _c.t, userLanguage = _c.userLanguage;
    var _d = useChannelPreviewInfo({ channel: channel }), displayImage = _d.displayImage, displayTitle = _d.displayTitle;
    var _e = React.useState(channel.state.messages[channel.state.messages.length - 1]), lastMessage = _e[0], setLastMessage = _e[1];
    var _f = React.useState(0), unread = _f[0], setUnread = _f[1];
    var isActive = (activeChannel === null || activeChannel === void 0 ? void 0 : activeChannel.cid) === channel.cid;
    var muted = useIsChannelMuted(channel).muted;
    React.useEffect(function () {
        var handleEvent = function (event) {
            if (!event.cid)
                return setUnread(0);
            if (channel.cid === event.cid)
                setUnread(0);
        };
        client.on('notification.mark_read', handleEvent);
        return function () { return client.off('notification.mark_read', handleEvent); };
    }, []);
    var refreshUnreadCount = React.useCallback(function () {
        if (isActive || muted) {
            setUnread(0);
        }
        else {
            setUnread(channel.countUnread());
        }
    }, [channel, isActive, muted]);
    React.useEffect(function () {
        refreshUnreadCount();
        var handleEvent = function (event) {
            if (event.message)
                setLastMessage(event.message);
            refreshUnreadCount();
        };
        channel.on('message.new', handleEvent);
        channel.on('message.updated', handleEvent);
        channel.on('message.deleted', handleEvent);
        return function () {
            channel.off('message.new', handleEvent);
            channel.off('message.updated', handleEvent);
            channel.off('message.deleted', handleEvent);
        };
    }, [refreshUnreadCount, channelUpdateCount]);
    if (!Preview)
        return null;
    var latestMessage = getLatestMessagePreview(channel, t, userLanguage);
    return (React__default["default"].createElement(Preview, __assign({}, props, { active: isActive, displayImage: displayImage, displayTitle: displayTitle, lastMessage: lastMessage, latestMessage: latestMessage, setActiveChannel: setActiveChannel, unread: unread })));
};

var isChannel = function (output) { return output.cid != null; };

var useChannelSearch = function (_a) {
    var _b = _a.channelType, channelType = _b === void 0 ? 'messaging' : _b, _c = _a.clearSearchOnClickOutside, clearSearchOnClickOutside = _c === void 0 ? true : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onSearchCallback = _a.onSearch, onSearchExit = _a.onSearchExit, onSelectResult = _a.onSelectResult, _e = _a.searchForChannels, searchForChannels = _e === void 0 ? false : _e, searchFunction = _a.searchFunction, searchQueryParams = _a.searchQueryParams, setChannels = _a.setChannels;
    var _f = useChatContext('useChannelSearch'), client = _f.client, navOpen = _f.navOpen, setActiveChannel = _f.setActiveChannel, themeVersion = _f.themeVersion;
    var _g = React.useState(false), inputIsFocused = _g[0], setInputIsFocused = _g[1];
    var _h = React.useState(''), query = _h[0], setQuery = _h[1];
    var _j = React.useState([]), results = _j[0], setResults = _j[1];
    var _k = React.useState(false), searching = _k[0], setSearching = _k[1];
    var inputRef = React.useRef(null);
    var searchBarRef = React.useRef(null);
    var clearState = React.useCallback(function () {
        setQuery('');
        setResults([]);
        setSearching(false);
    }, []);
    var activateSearch = React.useCallback(function () {
        setInputIsFocused(true);
    }, []);
    var exitSearch = React.useCallback(function () {
        var _a;
        setInputIsFocused(false);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        clearState();
        onSearchExit === null || onSearchExit === void 0 ? void 0 : onSearchExit();
    }, [clearState, onSearchExit]);
    React.useEffect(function () {
        if (disabled)
            return;
        var clickListener = function (event) {
            var _a, _b;
            if (!(event.target instanceof HTMLElement))
                return;
            var isInputClick = themeVersion === '2'
                ? (_a = searchBarRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)
                : (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target);
            if (isInputClick)
                return;
            if ((inputIsFocused && (!query || navOpen)) || clearSearchOnClickOutside) {
                exitSearch();
            }
        };
        document.addEventListener('click', clickListener);
        return function () { return document.removeEventListener('click', clickListener); };
    }, [disabled, inputIsFocused]);
    React.useEffect(function () {
        if (!inputRef.current || disabled)
            return;
        var handleKeyDown = function (event) {
            if (event.key === 'Escape')
                return exitSearch();
        };
        inputRef.current.addEventListener('keydown', handleKeyDown);
        return function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    var selectResult = React.useCallback(function (result) { return __awaiter$1(void 0, void 0, void 0, function () {
        var selectedChannel, newChannel;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!client.userID)
                        return [2 /*return*/];
                    if (!onSelectResult) return [3 /*break*/, 2];
                    return [4 /*yield*/, onSelectResult({
                            setQuery: setQuery,
                            setResults: setResults,
                            setSearching: setSearching,
                        }, result)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!isChannel(result)) return [3 /*break*/, 3];
                    setActiveChannel(result);
                    selectedChannel = result;
                    return [3 /*break*/, 5];
                case 3:
                    newChannel = client.channel(channelType, { members: [client.userID, result.id] });
                    return [4 /*yield*/, newChannel.watch()];
                case 4:
                    _a.sent();
                    setActiveChannel(newChannel);
                    selectedChannel = newChannel;
                    _a.label = 5;
                case 5:
                    setChannels(function (channels) { return uniqBy__default["default"](__spreadArray$1([selectedChannel], channels, true), 'cid'); });
                    if (clearSearchOnClickOutside) {
                        exitSearch();
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [clearSearchOnClickOutside, client, exitSearch, onSelectResult]);
    var getChannels = React.useCallback(function (text) { return __awaiter$1(void 0, void 0, void 0, function () {
        var userResponse, channelResponse, _a, channels, users_1, users, error_1;
        var _b, _c, _d, _e, _f, _g;
        return __generator$1(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (!text || searching)
                        return [2 /*return*/];
                    setSearching(true);
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, client.queryUsers(__assign({ $or: [{ id: { $autocomplete: text } }, { name: { $autocomplete: text } }], id: { $ne: client.userID } }, (_b = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.userFilters) === null || _b === void 0 ? void 0 : _b.filters), __assign({ id: 1 }, (_c = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.userFilters) === null || _c === void 0 ? void 0 : _c.sort), __assign({ limit: 8 }, (_d = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.userFilters) === null || _d === void 0 ? void 0 : _d.options))];
                case 2:
                    userResponse = _h.sent();
                    if (!searchForChannels) return [3 /*break*/, 4];
                    channelResponse = client.queryChannels(__assign({ name: { $autocomplete: text } }, (_e = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.channelFilters) === null || _e === void 0 ? void 0 : _e.filters), ((_f = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.channelFilters) === null || _f === void 0 ? void 0 : _f.sort) || {}, __assign({ limit: 5 }, (_g = searchQueryParams === null || searchQueryParams === void 0 ? void 0 : searchQueryParams.channelFilters) === null || _g === void 0 ? void 0 : _g.options));
                    return [4 /*yield*/, Promise.all([channelResponse, userResponse])];
                case 3:
                    _a = _h.sent(), channels = _a[0], users_1 = _a[1].users;
                    setResults(__spreadArray$1(__spreadArray$1([], channels, true), users_1, true));
                    setSearching(false);
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, Promise.resolve(userResponse)];
                case 5:
                    users = (_h.sent()).users;
                    setResults(users);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _h.sent();
                    clearState();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7:
                    setSearching(false);
                    return [2 /*return*/];
            }
        });
    }); }, [client, searching]);
    var getChannelsThrottled = throttle__default["default"](getChannels, 200);
    var onSearch = React.useCallback(function (event) {
        event.preventDefault();
        if (disabled)
            return;
        if (searchFunction) {
            searchFunction({
                setQuery: setQuery,
                setResults: setResults,
                setSearching: setSearching,
            }, event);
        }
        else {
            setQuery(event.target.value);
            getChannelsThrottled(event.target.value);
        }
        onSearchCallback === null || onSearchCallback === void 0 ? void 0 : onSearchCallback(event);
    }, [disabled, getChannelsThrottled, searchFunction]);
    return {
        activateSearch: activateSearch,
        clearState: clearState,
        exitSearch: exitSearch,
        inputIsFocused: inputIsFocused,
        inputRef: inputRef,
        onSearch: onSearch,
        query: query,
        results: results,
        searchBarRef: searchBarRef,
        searching: searching,
        selectResult: selectResult,
    };
};

var MenuIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'menu-icon', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { clipRule: 'evenodd', d: 'M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z', fill: 'black', fillRule: 'evenodd' }))); };
var ReturnIcon = function () { return (React__default["default"].createElement("svg", { "data-testid": 'return-icon', fill: 'none', height: '20', viewBox: '0 0 22 22', width: '20', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M21.6668 9.66666V12.3333H5.6529L12.9932 19.6736L11.1076 21.5592L0.54834 11L11.1076 0.440765L12.9932 2.32638L5.6529 9.66666H21.6668Z', fill: '#080707' }))); };
var XIcon = function () { return (React__default["default"].createElement("svg", { fill: 'none', height: '14', viewBox: '0 0 14 14', width: '14', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z', fill: '#747881' }))); };
var SearchIcon = function (_a) {
    var className = _a.className;
    return (React__default["default"].createElement("svg", { className: className, fill: 'none', height: '18', viewBox: '0 0 18 18', width: '18', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z', fill: '#747881' })));
};

var SearchInput = function (props) {
    var disabled = props.disabled, inputRef = props.inputRef, onSearch = props.onSearch, placeholder = props.placeholder, query = props.query;
    var t = useTranslationContext('SearchInput').t;
    return (React__default["default"].createElement("input", { className: 'str-chat__channel-search-input', "data-testid": 'search-input', disabled: disabled, onChange: onSearch, placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : t('Search'), ref: inputRef, type: 'text', value: query }));
};

var SearchBarButton = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick;
    return (React__default["default"].createElement("button", { className: clsx('str-chat__channel-search-bar-button', className), "data-testid": 'search-bar-button', onClick: onClick }, children));
};
// todo: add context menu control logic
var SearchBar = function (props) {
    var activateSearch = props.activateSearch, AppMenu = props.AppMenu, _a = props.ClearInputIcon, ClearInputIcon = _a === void 0 ? XIcon : _a, exitSearch = props.exitSearch, _b = props.ExitSearchIcon, ExitSearchIcon = _b === void 0 ? ReturnIcon : _b, inputIsFocused = props.inputIsFocused, _c = props.MenuIcon, MenuIcon$1 = _c === void 0 ? MenuIcon : _c, searchBarRef = props.searchBarRef, _d = props.SearchInput, SearchInput$1 = _d === void 0 ? SearchInput : _d, _e = props.SearchInputIcon, SearchInputIcon = _e === void 0 ? SearchIcon : _e, inputProps = __rest(props, ["activateSearch", "AppMenu", "ClearInputIcon", "exitSearch", "ExitSearchIcon", "inputIsFocused", "MenuIcon", "searchBarRef", "SearchInput", "SearchInputIcon"]);
    var _f = React.useState(false), menuIsOpen = _f[0], setMenuIsOpen = _f[1];
    var appMenuRef = React.useRef(null);
    React.useEffect(function () {
        if (!appMenuRef.current)
            return;
        var handleKeyDown = function (event) {
            if (menuIsOpen && event.key === 'Escape') {
                setMenuIsOpen(false);
            }
        };
        var clickListener = function (e) {
            var _a;
            if (!(e.target instanceof HTMLElement) ||
                !menuIsOpen ||
                ((_a = appMenuRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
                return;
            setMenuIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', clickListener);
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', clickListener);
        };
    }, [menuIsOpen]);
    React.useEffect(function () {
        if (!props.inputRef.current)
            return;
        var handleFocus = function () {
            activateSearch();
        };
        var handleBlur = function (e) {
            e.stopPropagation(); // handle blur/focus state with React state
        };
        props.inputRef.current.addEventListener('focus', handleFocus);
        props.inputRef.current.addEventListener('blur', handleBlur);
        return function () {
            var _a, _b;
            (_a = props.inputRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('focus', handleFocus);
            (_b = props.inputRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('blur', handleBlur);
        };
    }, []);
    var handleClearClick = React.useCallback(function () {
        var _a;
        exitSearch();
        (_a = inputProps.inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return (React__default["default"].createElement("div", { className: 'str-chat__channel-search-bar', "data-testid": 'search-bar', ref: searchBarRef },
        inputIsFocused ? (React__default["default"].createElement(SearchBarButton, { className: 'str-chat__channel-search-bar-button--exit-search', onClick: exitSearch },
            React__default["default"].createElement(ExitSearchIcon, null))) : AppMenu ? (React__default["default"].createElement(SearchBarButton, { className: 'str-chat__channel-search-bar-button--menu', onClick: function () { return setMenuIsOpen(function (prev) { return !prev; }); } },
            React__default["default"].createElement(MenuIcon$1, null))) : null,
        React__default["default"].createElement("div", { className: clsx('str-chat__channel-search-input--wrapper', inputProps.query && 'str-chat__channel-search-input--wrapper-active') },
            React__default["default"].createElement("div", { className: 'str-chat__channel-search-input--icon' },
                React__default["default"].createElement(SearchInputIcon, null)),
            React__default["default"].createElement(SearchInput$1, __assign({}, inputProps)),
            React__default["default"].createElement("button", { className: 'str-chat__channel-search-input--clear-button', "data-testid": 'clear-input-button', disabled: !inputProps.query, onClick: handleClearClick },
                React__default["default"].createElement(ClearInputIcon, null))),
        menuIsOpen && AppMenu && (React__default["default"].createElement("div", { ref: appMenuRef },
            React__default["default"].createElement(AppMenu, null)))));
};

var DefaultSearchEmpty = function () {
    var t = useTranslationContext('SearchResults').t;
    return (React__default["default"].createElement("div", { "aria-live": 'polite', className: 'str-chat__channel-search-container-empty' },
        React__default["default"].createElement(SearchIcon, null),
        t('No results found')));
};
var DefaultSearchResultsHeader = function (_a) {
    var results = _a.results;
    var t = useTranslationContext('SearchResultsHeader').t;
    return (React__default["default"].createElement("div", { className: 'str-chat__channel-search-results-header', "data-testid": 'channel-search-results-header' }, t('searchResultsCount', {
        count: results.length,
    })));
};
var DefaultSearchResultsList = function (props) {
    var focusedUser = props.focusedUser, results = props.results, _a = props.SearchResultItem, SearchResultItem = _a === void 0 ? DefaultSearchResultItem : _a, selectResult = props.selectResult;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, results.map(function (result, index) { return (React__default["default"].createElement(SearchResultItem, { focusedUser: focusedUser, index: index, key: index, result: result, selectResult: selectResult })); })));
};
var DefaultSearchResultItem = function (props) {
    var _a, _b;
    var focusedUser = props.focusedUser, index = props.index, result = props.result, selectResult = props.selectResult;
    var focused = focusedUser === index;
    var themeVersion = useChatContext().themeVersion;
    var className = clsx('str-chat__channel-search-result', focused && 'str-chat__channel-search-result--focused focused');
    if (isChannel(result)) {
        var channel_1 = result;
        return themeVersion === '2' ? (React__default["default"].createElement(ChannelPreview, { channel: channel_1, className: className, onSelect: function () { return selectResult(channel_1); } })) : (React__default["default"].createElement("button", { "aria-label": "Select Channel: ".concat(((_a = channel_1.data) === null || _a === void 0 ? void 0 : _a.name) || ''), className: className, "data-testid": 'channel-search-result-channel', onClick: function () { return selectResult(channel_1); }, role: 'option' },
            React__default["default"].createElement("div", { className: 'result-hashtag' }, "#"),
            React__default["default"].createElement("p", { className: 'channel-search__result-text' }, (_b = channel_1.data) === null || _b === void 0 ? void 0 : _b.name)));
    }
    else {
        return (React__default["default"].createElement("button", { "aria-label": "Select User Channel: ".concat(result.name || ''), className: className, "data-testid": 'channel-search-result-user', onClick: function () { return selectResult(result); }, role: 'option' },
            React__default["default"].createElement(Avatar, { image: result.image, name: result.name || result.id, size: themeVersion === '2' ? 40 : undefined, user: result }),
            React__default["default"].createElement("div", { className: 'str-chat__channel-search-result--display-name' }, result.name || result.id)));
    }
};
var ResultsContainer = function (_a) {
    var children = _a.children, popupResults = _a.popupResults;
    return (React__default["default"].createElement("div", { "aria-label": 'Channel search results', className: clsx("str-chat__channel-search-container str-chat__channel-search-result-list", popupResults ? 'popup' : 'inline') }, children));
};
var SearchResults = function (props) {
    var popupResults = props.popupResults, results = props.results, searching = props.searching, _a = props.SearchEmpty, SearchEmpty = _a === void 0 ? DefaultSearchEmpty : _a, _b = props.SearchResultsHeader, SearchResultsHeader = _b === void 0 ? DefaultSearchResultsHeader : _b, SearchLoading = props.SearchLoading, _c = props.SearchResultItem, SearchResultItem = _c === void 0 ? DefaultSearchResultItem : _c, _d = props.SearchResultsList, SearchResultsList = _d === void 0 ? DefaultSearchResultsList : _d, selectResult = props.selectResult;
    var t = useTranslationContext('SearchResults').t;
    var _e = React.useState(), focusedResult = _e[0], setFocusedResult = _e[1];
    var handleKeyDown = React.useCallback(function (event) {
        if (event.key === 'ArrowUp') {
            setFocusedResult(function (prevFocused) {
                if (prevFocused === undefined)
                    return 0;
                return prevFocused === 0 ? results.length - 1 : prevFocused - 1;
            });
        }
        if (event.key === 'ArrowDown') {
            setFocusedResult(function (prevFocused) {
                if (prevFocused === undefined)
                    return 0;
                return prevFocused === results.length - 1 ? 0 : prevFocused + 1;
            });
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            if (focusedResult !== undefined) {
                selectResult(results[focusedResult]);
                return setFocusedResult(undefined);
            }
        }
    }, [focusedResult]);
    React.useEffect(function () {
        document.addEventListener('keydown', handleKeyDown, false);
        return function () { return document.removeEventListener('keydown', handleKeyDown); };
    }, [handleKeyDown]);
    if (searching) {
        return (React__default["default"].createElement(ResultsContainer, { popupResults: popupResults }, SearchLoading ? (React__default["default"].createElement(SearchLoading, null)) : (React__default["default"].createElement("div", { className: 'str-chat__channel-search-container-searching', "data-testid": 'search-in-progress-indicator' }, t('Searching...')))));
    }
    if (!results.length) {
        return (React__default["default"].createElement(ResultsContainer, { popupResults: popupResults },
            React__default["default"].createElement(SearchEmpty, null)));
    }
    return (React__default["default"].createElement(ResultsContainer, { popupResults: popupResults },
        React__default["default"].createElement(SearchResultsHeader, { results: results }),
        React__default["default"].createElement(SearchResultsList, { focusedUser: focusedResult, results: results, SearchResultItem: SearchResultItem, selectResult: selectResult })));
};

var UnMemoizedChannelSearch = function (props) {
    var AppMenu = props.AppMenu, ClearInputIcon = props.ClearInputIcon, ExitSearchIcon = props.ExitSearchIcon, MenuIcon = props.MenuIcon, placeholder = props.placeholder, _a = props.popupResults, popupResults = _a === void 0 ? false : _a, _b = props.SearchBar, SearchBar$1 = _b === void 0 ? SearchBar : _b, SearchEmpty = props.SearchEmpty, _c = props.SearchInput, SearchInput$1 = _c === void 0 ? SearchInput : _c, SearchLoading = props.SearchLoading, SearchInputIcon = props.SearchInputIcon, SearchResultItem = props.SearchResultItem, SearchResultsList = props.SearchResultsList, SearchResultsHeader = props.SearchResultsHeader, channelSearchParams = __rest(props, ["AppMenu", "ClearInputIcon", "ExitSearchIcon", "MenuIcon", "placeholder", "popupResults", "SearchBar", "SearchEmpty", "SearchInput", "SearchLoading", "SearchInputIcon", "SearchResultItem", "SearchResultsList", "SearchResultsHeader"]);
    var themeVersion = useChatContext('ChannelSearch').themeVersion;
    var _d = useChannelSearch(channelSearchParams), activateSearch = _d.activateSearch, clearState = _d.clearState, exitSearch = _d.exitSearch, inputIsFocused = _d.inputIsFocused, inputRef = _d.inputRef, onSearch = _d.onSearch, query = _d.query, results = _d.results, searchBarRef = _d.searchBarRef, searching = _d.searching, selectResult = _d.selectResult;
    var showSearchBarV2 = themeVersion === '2';
    return (React__default["default"].createElement("div", { className: 'str-chat__channel-search', "data-testid": 'channel-search' },
        showSearchBarV2 ? (React__default["default"].createElement(SearchBar$1, { activateSearch: activateSearch, AppMenu: AppMenu, ClearInputIcon: ClearInputIcon, clearState: clearState, disabled: channelSearchParams.disabled, exitSearch: exitSearch, ExitSearchIcon: ExitSearchIcon, inputIsFocused: inputIsFocused, inputRef: inputRef, MenuIcon: MenuIcon, onSearch: onSearch, placeholder: placeholder, query: query, searchBarRef: searchBarRef, SearchInput: SearchInput$1, SearchInputIcon: SearchInputIcon })) : (React__default["default"].createElement(SearchInput$1, { clearState: clearState, disabled: channelSearchParams.disabled, inputRef: inputRef, onSearch: onSearch, placeholder: placeholder, query: query })),
        query && (React__default["default"].createElement(SearchResults, { popupResults: popupResults, results: results, SearchEmpty: SearchEmpty, searching: searching, SearchLoading: SearchLoading, SearchResultItem: SearchResultItem, SearchResultsHeader: SearchResultsHeader, SearchResultsList: SearchResultsList, selectResult: selectResult }))));
};
/**
 * The ChannelSearch component makes a query users call and displays the results in a list.
 * Clicking on a list item will navigate you into a channel with the selected user. It can be used
 * on its own or added to the ChannelList component by setting the `showChannelSearch` prop to true.
 */
var ChannelSearch = React__default["default"].memo(UnMemoizedChannelSearch);

var ChatBubble = function () { return (React__default["default"].createElement("svg", { "data-testid": 'chat-bubble', fill: 'none', height: '96', viewBox: '0 0 136 136', width: '96', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M106 24.5H30C24.775 24.5 20.5 28.775 20.5 34V119.5L39.5 100.5H106C111.225 100.5 115.5 96.225 115.5 91V34C115.5 28.775 111.225 24.5 106 24.5ZM106 91H39.5L30 100.5V34H106V91Z', fill: '#B4B7BB' }))); };

var UnMemoizedEmptyStateIndicator = function (props) {
    var listType = props.listType;
    var t = useTranslationContext('EmptyStateIndicator').t;
    if (listType === 'thread')
        return null;
    if (listType === 'channel') {
        var text = t('You have no channels currently');
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("div", { className: 'str-chat__channel-list-empty' },
                React__default["default"].createElement(ChatBubble, null),
                React__default["default"].createElement("p", { role: 'listitem' }, text)),
            React__default["default"].createElement("p", { className: 'str-chat__channel-list-empty-v1', role: 'listitem' }, text)));
    }
    if (listType === 'message') {
        var text = t('No chats here yet…');
        return (React__default["default"].createElement("div", { className: 'str-chat__empty-channel' },
            React__default["default"].createElement(ChatBubble, null),
            React__default["default"].createElement("p", { className: 'str-chat__empty-channel-text', role: 'listitem' }, text)));
    }
    return React__default["default"].createElement("p", null, "No items exist");
};
var EmptyStateIndicator = React__default["default"].memo(UnMemoizedEmptyStateIndicator);

var UnMemoizedLoadMoreButton = function (props) {
    var _a = props.children, children = _a === void 0 ? 'Load more' : _a, onClick = props.onClick, refreshing = props.refreshing;
    return (React__default["default"].createElement("div", { className: 'str-chat__load-more-button' },
        React__default["default"].createElement("button", { "aria-label": 'Load More Channels', className: 'str-chat__load-more-button__button str-chat__cta-button', "data-testid": 'load-more-button', disabled: refreshing, onClick: onClick }, refreshing ? React__default["default"].createElement(LoadingIndicator, null) : children)));
};
var LoadMoreButton = React__default["default"].memo(UnMemoizedLoadMoreButton);

var UnMemoizedLoadMorePaginator = function (props) {
    var children = props.children, hasNextPage = props.hasNextPage, _a = props.LoadMoreButton, LoadMoreButton$1 = _a === void 0 ? LoadMoreButton : _a, loadNextPage = props.loadNextPage, refreshing = props.refreshing, reverse = props.reverse;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        !reverse && children,
        hasNextPage && React__default["default"].createElement(LoadMoreButton$1, { onClick: loadNextPage, refreshing: refreshing }),
        reverse && children));
};
var LoadMorePaginator = React__default["default"].memo(UnMemoizedLoadMorePaginator);

var DEFAULT_FILTERS = {};
var DEFAULT_OPTIONS = {};
var DEFAULT_SORT = {};
var UnMemoizedChannelList = function (props) {
    var _a, _b;
    var additionalChannelSearchProps = props.additionalChannelSearchProps, _c = props.Avatar, Avatar$1 = _c === void 0 ? Avatar : _c, allowNewMessagesFromUnfilteredChannels = props.allowNewMessagesFromUnfilteredChannels, channelRenderFilterFn = props.channelRenderFilterFn, _d = props.ChannelSearch, ChannelSearch$1 = _d === void 0 ? ChannelSearch : _d, customActiveChannel = props.customActiveChannel, _e = props.EmptyStateIndicator, EmptyStateIndicator$1 = _e === void 0 ? EmptyStateIndicator : _e, filters = props.filters, _f = props.LoadingErrorIndicator, LoadingErrorIndicator = _f === void 0 ? ChatDown : _f, _g = props.LoadingIndicator, LoadingIndicator = _g === void 0 ? LoadingChannels : _g, _h = props.List, List = _h === void 0 ? ChannelListMessenger : _h, lockChannelOrder = props.lockChannelOrder, onAddedToChannel = props.onAddedToChannel, onChannelDeleted = props.onChannelDeleted, onChannelHidden = props.onChannelHidden, onChannelTruncated = props.onChannelTruncated, onChannelUpdated = props.onChannelUpdated, onChannelVisible = props.onChannelVisible, onMessageNew = props.onMessageNew, onRemovedFromChannel = props.onRemovedFromChannel, options = props.options, _j = props.Paginator, Paginator = _j === void 0 ? LoadMorePaginator : _j, Preview = props.Preview, renderChannels = props.renderChannels, _k = props.sendChannelsToList, sendChannelsToList = _k === void 0 ? false : _k, _l = props.setActiveChannelOnMount, setActiveChannelOnMount = _l === void 0 ? true : _l, _m = props.showChannelSearch, showChannelSearch = _m === void 0 ? false : _m, _o = props.sort, sort = _o === void 0 ? DEFAULT_SORT : _o, _p = props.watchers, watchers = _p === void 0 ? {} : _p;
    var _q = useChatContext('ChannelList'), channel = _q.channel, channelsQueryState = _q.channelsQueryState, client = _q.client, closeMobileNav = _q.closeMobileNav, customClasses = _q.customClasses, _r = _q.navOpen, navOpen = _r === void 0 ? false : _r, setActiveChannel = _q.setActiveChannel, theme = _q.theme, useImageFlagEmojisOnWindows = _q.useImageFlagEmojisOnWindows;
    var channelListRef = React.useRef(null);
    var _s = React.useState(0), channelUpdateCount = _s[0], setChannelUpdateCount = _s[1];
    var _t = React.useState(false), searchActive = _t[0], setSearchActive = _t[1];
    /**
     * Set a channel with id {customActiveChannel} as active and move it to the top of the list.
     * If customActiveChannel prop is absent, then set the first channel in list as active channel.
     */
    var activeChannelHandler = function (channels, setChannels) { return __awaiter$1(void 0, void 0, void 0, function () {
        var customActiveChannelObject, newChannels;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!channels.length || channels.length > ((options === null || options === void 0 ? void 0 : options.limit) || MAX_QUERY_CHANNELS_LIMIT)) {
                        return [2 /*return*/];
                    }
                    if (!customActiveChannel) return [3 /*break*/, 3];
                    customActiveChannelObject = channels.find(function (chan) { return chan.id === customActiveChannel; });
                    if (!!customActiveChannelObject) return [3 /*break*/, 2];
                    return [4 /*yield*/, client.queryChannels({ id: customActiveChannel })];
                case 1:
                    //@ts-expect-error
                    customActiveChannelObject = (_a.sent())[0];
                    _a.label = 2;
                case 2:
                    if (customActiveChannelObject) {
                        setActiveChannel(customActiveChannelObject, watchers);
                        newChannels = moveChannelUp({
                            activeChannel: customActiveChannelObject,
                            channels: channels,
                            cid: customActiveChannelObject.cid,
                        });
                        setChannels(newChannels);
                    }
                    return [2 /*return*/];
                case 3:
                    if (setActiveChannelOnMount) {
                        setActiveChannel(channels[0], watchers);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * For some events, inner properties on the channel will update but the shallow comparison will not
     * force a re-render. Incrementing this dummy variable ensures the channel previews update.
     */
    var forceUpdate = function () { return setChannelUpdateCount(function (count) { return count + 1; }); };
    var onSearch = React.useCallback(function (event) {
        var _a;
        if (!event.target.value) {
            setSearchActive(false);
        }
        else {
            setSearchActive(true);
        }
        (_a = additionalChannelSearchProps === null || additionalChannelSearchProps === void 0 ? void 0 : additionalChannelSearchProps.onSearch) === null || _a === void 0 ? void 0 : _a.call(additionalChannelSearchProps, event);
    }, []);
    var onSearchExit = React.useCallback(function () {
        var _a;
        setSearchActive(false);
        (_a = additionalChannelSearchProps === null || additionalChannelSearchProps === void 0 ? void 0 : additionalChannelSearchProps.onSearchExit) === null || _a === void 0 ? void 0 : _a.call(additionalChannelSearchProps);
    }, []);
    var _u = usePaginatedChannels(client, filters || DEFAULT_FILTERS, sort || DEFAULT_SORT, options || DEFAULT_OPTIONS, activeChannelHandler), channels = _u.channels, hasNextPage = _u.hasNextPage, loadNextPage = _u.loadNextPage, setChannels = _u.setChannels;
    var loadedChannels = channelRenderFilterFn ? channelRenderFilterFn(channels) : channels;
    useMobileNavigation(channelListRef, navOpen, closeMobileNav);
    useMessageNewListener(setChannels, lockChannelOrder, allowNewMessagesFromUnfilteredChannels);
    useNotificationMessageNewListener(setChannels, onMessageNew, allowNewMessagesFromUnfilteredChannels);
    useNotificationAddedToChannelListener(setChannels, onAddedToChannel, allowNewMessagesFromUnfilteredChannels);
    useNotificationRemovedFromChannelListener(setChannels, onRemovedFromChannel);
    useChannelDeletedListener(setChannels, onChannelDeleted);
    useChannelHiddenListener(setChannels, onChannelHidden);
    useChannelVisibleListener(setChannels, onChannelVisible);
    useChannelTruncatedListener(setChannels, onChannelTruncated, forceUpdate);
    useChannelUpdatedListener(setChannels, onChannelUpdated, forceUpdate);
    useConnectionRecoveredListener(forceUpdate);
    useUserPresenceChangedListener(setChannels);
    React.useEffect(function () {
        var handleEvent = function (event) {
            if (event.cid === (channel === null || channel === void 0 ? void 0 : channel.cid)) {
                setActiveChannel();
            }
        };
        client.on('channel.deleted', handleEvent);
        client.on('channel.hidden', handleEvent);
        return function () {
            client.off('channel.deleted', handleEvent);
            client.off('channel.hidden', handleEvent);
        };
    }, [channel === null || channel === void 0 ? void 0 : channel.cid]);
    var renderChannel = function (item) {
        var previewProps = {
            activeChannel: channel,
            Avatar: Avatar$1,
            channel: item,
            // forces the update of preview component on channel update
            channelUpdateCount: channelUpdateCount,
            key: item.id,
            Preview: Preview,
            setActiveChannel: setActiveChannel,
            watchers: watchers,
        };
        return React__default["default"].createElement(ChannelPreview, __assign({}, previewProps));
    };
    var className = clsx((_a = customClasses === null || customClasses === void 0 ? void 0 : customClasses.chat) !== null && _a !== void 0 ? _a : 'str-chat', theme, (_b = customClasses === null || customClasses === void 0 ? void 0 : customClasses.channelList) !== null && _b !== void 0 ? _b : 'str-chat-channel-list str-chat__channel-list', {
        'str-chat--windows-flags': useImageFlagEmojisOnWindows && navigator.userAgent.match(/Win/),
        'str-chat-channel-list--open': navOpen,
    });
    var showChannelList = !searchActive || (additionalChannelSearchProps === null || additionalChannelSearchProps === void 0 ? void 0 : additionalChannelSearchProps.popupResults);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: className, ref: channelListRef },
            showChannelSearch && (React__default["default"].createElement(ChannelSearch$1, __assign({ onSearch: onSearch, onSearchExit: onSearchExit, setChannels: setChannels }, additionalChannelSearchProps))),
            showChannelList && (React__default["default"].createElement(List, { error: channelsQueryState.error, loadedChannels: sendChannelsToList ? loadedChannels : undefined, loading: channelsQueryState.queryInProgress === 'reload', LoadingErrorIndicator: LoadingErrorIndicator, LoadingIndicator: LoadingIndicator, setChannels: setChannels }, !(loadedChannels === null || loadedChannels === void 0 ? void 0 : loadedChannels.length) ? (React__default["default"].createElement(EmptyStateIndicator$1, { listType: 'channel' })) : (React__default["default"].createElement(Paginator, { hasNextPage: hasNextPage, loadNextPage: loadNextPage, refreshing: channelsQueryState.queryInProgress === 'load-more' }, renderChannels
                ? renderChannels(loadedChannels, renderChannel)
                : loadedChannels.map(function (channel) { return renderChannel(channel); }))))))));
};
/**
 * Renders a preview list of Channels, allowing you to select the Channel you want to open
 */
var ChannelList = React__default["default"].memo(UnMemoizedChannelList);

var version = '0.0.0-development';

var useChat = function (_a) {
    var _b, _c;
    var client = _a.client, _d = _a.defaultLanguage, defaultLanguage = _d === void 0 ? 'en' : _d, i18nInstance = _a.i18nInstance, initialNavOpen = _a.initialNavOpen;
    var _e = React.useState({
        t: function (key) { return key; },
        tDateTimeParser: defaultDateTimeParser,
        userLanguage: 'en',
    }), translators = _e[0], setTranslators = _e[1];
    var _f = React.useState(), channel = _f[0], setChannel = _f[1];
    var _g = React.useState([]), mutes = _g[0], setMutes = _g[1];
    var _h = React.useState(initialNavOpen), navOpen = _h[0], setNavOpen = _h[1];
    var _j = React.useState({}), latestMessageDatesByChannels = _j[0], setLatestMessageDatesByChannels = _j[1];
    var clientMutes = ((_b = client.user) === null || _b === void 0 ? void 0 : _b.mutes) || [];
    var closeMobileNav = function () { return setNavOpen(false); };
    var openMobileNav = function () { return setTimeout(function () { return setNavOpen(true); }, 100); };
    var appSettings = React.useRef(null);
    var getAppSettings = function () {
        if (appSettings.current) {
            return appSettings.current;
        }
        appSettings.current = client.getAppSettings();
        return appSettings.current;
    };
    React.useEffect(function () {
        if (client) {
            var userAgent = client.getUserAgent();
            if (!userAgent.includes('stream-chat-react')) {
                // result looks like: 'stream-chat-react-2.3.2-stream-chat-javascript-client-browser-2.2.2'
                client.setUserAgent("stream-chat-react-".concat(version, "-").concat(userAgent));
            }
        }
    }, [client]);
    React.useEffect(function () {
        setMutes(clientMutes);
        var handleEvent = function (event) {
            var _a;
            setMutes(((_a = event.me) === null || _a === void 0 ? void 0 : _a.mutes) || []);
        };
        client.on('notification.mutes_updated', handleEvent);
        return function () { return client.off('notification.mutes_updated', handleEvent); };
    }, [clientMutes === null || clientMutes === void 0 ? void 0 : clientMutes.length]);
    React.useEffect(function () {
        var _a;
        var userLanguage = (_a = client.user) === null || _a === void 0 ? void 0 : _a.language;
        if (!userLanguage) {
            var browserLanguage = window.navigator.language.slice(0, 2); // just get language code, not country-specific version
            userLanguage = isLanguageSupported(browserLanguage) ? browserLanguage : defaultLanguage;
        }
        var streami18n = i18nInstance || new Streami18n({ language: userLanguage });
        streami18n.registerSetLanguageCallback(function (t) {
            return setTranslators(function (prevTranslator) { return (__assign(__assign({}, prevTranslator), { t: t })); });
        });
        streami18n.getTranslators().then(function (translator) {
            setTranslators(__assign(__assign({}, translator), { userLanguage: userLanguage || defaultLanguage }));
        });
    }, [i18nInstance]);
    var setActiveChannel = React.useCallback(function (activeChannel, watchers, event) {
        if (watchers === void 0) { watchers = {}; }
        return __awaiter$1(void 0, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event && event.preventDefault)
                            event.preventDefault();
                        if (!(activeChannel && Object.keys(watchers).length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, activeChannel.query({ watch: true, watchers: watchers })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        setChannel(activeChannel);
                        closeMobileNav();
                        return [2 /*return*/];
                }
            });
        });
    }, []);
    React.useEffect(function () {
        setLatestMessageDatesByChannels({});
    }, [(_c = client.user) === null || _c === void 0 ? void 0 : _c.id]);
    return {
        channel: channel,
        closeMobileNav: closeMobileNav,
        getAppSettings: getAppSettings,
        latestMessageDatesByChannels: latestMessageDatesByChannels,
        mutes: mutes,
        navOpen: navOpen,
        openMobileNav: openMobileNav,
        setActiveChannel: setActiveChannel,
        translators: translators,
    };
};

var useCreateChatContext = function (value) {
    var _a;
    var channel = value.channel, channelsQueryState = value.channelsQueryState, client = value.client, closeMobileNav = value.closeMobileNav, customClasses = value.customClasses, getAppSettings = value.getAppSettings, latestMessageDatesByChannels = value.latestMessageDatesByChannels, mutes = value.mutes, navOpen = value.navOpen, openMobileNav = value.openMobileNav, setActiveChannel = value.setActiveChannel, theme = value.theme, themeVersion = value.themeVersion, useImageFlagEmojisOnWindows = value.useImageFlagEmojisOnWindows;
    var channelCid = channel === null || channel === void 0 ? void 0 : channel.cid;
    var channelsQueryError = channelsQueryState.error;
    var channelsQueryInProgress = channelsQueryState.queryInProgress;
    var clientValues = "".concat(client.clientID).concat(Object.keys(client.activeChannels).length).concat(Object.keys(client.listeners).length).concat(client.mutedChannels.length, "\n  ").concat((_a = client.user) === null || _a === void 0 ? void 0 : _a.id);
    var mutedUsersLength = mutes.length;
    var chatContext = React.useMemo(function () { return ({
        channel: channel,
        channelsQueryState: channelsQueryState,
        client: client,
        closeMobileNav: closeMobileNav,
        customClasses: customClasses,
        getAppSettings: getAppSettings,
        latestMessageDatesByChannels: latestMessageDatesByChannels,
        mutes: mutes,
        navOpen: navOpen,
        openMobileNav: openMobileNav,
        setActiveChannel: setActiveChannel,
        theme: theme,
        themeVersion: themeVersion,
        useImageFlagEmojisOnWindows: useImageFlagEmojisOnWindows,
    }); }, [
        channelCid,
        channelsQueryError,
        channelsQueryInProgress,
        clientValues,
        getAppSettings,
        mutedUsersLength,
        navOpen,
    ]);
    return chatContext;
};

var useChannelsQueryState = function () {
    var _a = React.useState(null), error = _a[0], setError = _a[1];
    var _b = React.useState(null), queryInProgress = _b[0], setQueryInProgress = _b[1];
    return {
        error: error,
        queryInProgress: queryInProgress,
        setError: setError,
        setQueryInProgress: setQueryInProgress,
    };
};

var darkModeTheme = {
    '--bg-gradient-end': '#101214',
    '--bg-gradient-start': '#070a0d',
    '--black': '#ffffff',
    '--blue-alice': '#00193d',
    '--border': '#141924',
    '--button-background': '#ffffff',
    '--button-text': '#005fff',
    '--grey': '#7a7a7a',
    '--grey-gainsboro': '#2d2f2f',
    '--grey-whisper': '#1c1e22',
    '--modal-shadow': '#000000',
    '--overlay': '#00000066',
    '--overlay-dark': '#ffffffcc',
    '--shadow-icon': '#00000080',
    '--targetedMessageBackground': '#302d22',
    '--transparent': 'transparent',
    '--white': '#101418',
    '--white-smoke': '#13151b',
    '--white-snow': '#070a0d',
};
/**
 * @deprecated This hook has been deprecated in favor of the new
 * theming (V2) setup which sets its variables through CSS files.
 * Refer to the [documentation](https://getstream.io/chat/docs/sdk/react/theming/themingv2/) of the new theming for the upgrade.
 *
 * **Will be removed with the complete transition to the theming V2.**
 */
var useCustomStyles = function (customStyles) {
    if (!customStyles)
        return;
    for (var _i = 0, _a = Object.entries(customStyles); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        // eslint-disable-next-line babel/no-unused-expressions
        typeof document !== undefined && document.documentElement.style.setProperty(key, value);
    }
};

/**
 * Wrapper component for a StreamChat application. Chat needs to be placed around any other chat components
 * as it provides the ChatContext.
 */
var Chat = function (props) {
    var children = props.children, client = props.client, customClasses = props.customClasses, customStyles = props.customStyles, _a = props.darkMode, darkMode = _a === void 0 ? false : _a, defaultLanguage = props.defaultLanguage, i18nInstance = props.i18nInstance, _b = props.initialNavOpen, initialNavOpen = _b === void 0 ? true : _b, _c = props.theme, theme = _c === void 0 ? 'messaging light' : _c, _d = props.useImageFlagEmojisOnWindows, useImageFlagEmojisOnWindows = _d === void 0 ? false : _d;
    var _e = useChat({ client: client, defaultLanguage: defaultLanguage, i18nInstance: i18nInstance, initialNavOpen: initialNavOpen }), channel = _e.channel, closeMobileNav = _e.closeMobileNav, getAppSettings = _e.getAppSettings, latestMessageDatesByChannels = _e.latestMessageDatesByChannels, mutes = _e.mutes, navOpen = _e.navOpen, openMobileNav = _e.openMobileNav, setActiveChannel = _e.setActiveChannel, translators = _e.translators;
    var channelsQueryState = useChannelsQueryState();
    var themeVersion = typeof document == undefined
        ? '1'
        : (getComputedStyle(document.documentElement)
            .getPropertyValue('--str-chat__theme-version')
            .replace(' ', '') || '1');
    useCustomStyles(darkMode ? darkModeTheme : customStyles);
    var chatContextValue = useCreateChatContext({
        channel: channel,
        channelsQueryState: channelsQueryState,
        client: client,
        closeMobileNav: closeMobileNav,
        customClasses: customClasses,
        getAppSettings: getAppSettings,
        latestMessageDatesByChannels: latestMessageDatesByChannels,
        mutes: mutes,
        navOpen: navOpen,
        openMobileNav: openMobileNav,
        setActiveChannel: setActiveChannel,
        theme: theme,
        themeVersion: themeVersion,
        useImageFlagEmojisOnWindows: useImageFlagEmojisOnWindows,
    });
    if (!translators.t)
        return null;
    return (React__default["default"].createElement(ChatProvider, { value: chatContextValue },
        React__default["default"].createElement(TranslationProvider, { value: translators }, children)));
};

var UnMemoizedDateSeparator = function (props) {
    var messageCreatedAt = props.date, formatDate = props.formatDate, _a = props.position, position = _a === void 0 ? 'right' : _a, unread = props.unread;
    var _b = useTranslationContext('DateSeparator'), t = _b.t, tDateTimeParser = _b.tDateTimeParser;
    var formattedDate = getDateString({
        calendar: true,
        formatDate: formatDate,
        messageCreatedAt: messageCreatedAt,
        tDateTimeParser: tDateTimeParser,
    });
    return (React__default["default"].createElement("div", { className: 'str-chat__date-separator' },
        (position === 'right' || position === 'center') && (React__default["default"].createElement("hr", { className: 'str-chat__date-separator-line' })),
        React__default["default"].createElement("div", { className: 'str-chat__date-separator-date' }, unread ? "".concat(t('New'), " - ").concat(formattedDate) : formattedDate),
        (position === 'left' || position === 'center') && (React__default["default"].createElement("hr", { className: 'str-chat__date-separator-line' }))));
};
/**
 * A simple date separator between messages.
 */
var DateSeparator = React__default["default"].memo(UnMemoizedDateSeparator);

/**
 * Component to display system and channel event messages
 */
var UnMemoizedEventComponent = function (props) {
    var _a, _b, _c;
    var _d = props.Avatar, Avatar$1 = _d === void 0 ? Avatar : _d, message = props.message;
    var tDateTimeParser = useTranslationContext('EventComponent').tDateTimeParser;
    var _e = message.created_at, created_at = _e === void 0 ? '' : _e, event = message.event, text = message.text, type = message.type;
    var getDateOptions = { messageCreatedAt: created_at.toString(), tDateTimeParser: tDateTimeParser };
    if (type === 'system')
        return (React__default["default"].createElement("div", { className: 'str-chat__message--system' },
            React__default["default"].createElement("div", { className: 'str-chat__message--system__text' },
                React__default["default"].createElement("div", { className: 'str-chat__message--system__line' }),
                React__default["default"].createElement("p", null, text),
                React__default["default"].createElement("div", { className: 'str-chat__message--system__line' })),
            React__default["default"].createElement("div", { className: 'str-chat__message--system__date' },
                React__default["default"].createElement("strong", null,
                    getDateString(__assign(__assign({}, getDateOptions), { format: 'dddd' })),
                    " "),
                "at ",
                getDateString(__assign(__assign({}, getDateOptions), { format: 'hh:mm A' })))));
    if ((event === null || event === void 0 ? void 0 : event.type) === 'member.removed' || (event === null || event === void 0 ? void 0 : event.type) === 'member.added') {
        var name_1 = ((_a = event.user) === null || _a === void 0 ? void 0 : _a.name) || ((_b = event.user) === null || _b === void 0 ? void 0 : _b.id);
        var sentence = "".concat(name_1, " ").concat(event.type === 'member.added' ? 'has joined the chat' : 'was removed from the chat');
        return (React__default["default"].createElement("div", { className: 'str-chat__event-component__channel-event' },
            React__default["default"].createElement(Avatar$1, { image: (_c = event.user) === null || _c === void 0 ? void 0 : _c.image, name: name_1, user: event.user }),
            React__default["default"].createElement("div", { className: 'str-chat__event-component__channel-event__content' },
                React__default["default"].createElement("em", { className: 'str-chat__event-component__channel-event__sentence' }, sentence),
                React__default["default"].createElement("div", { className: 'str-chat__event-component__channel-event__date' }, getDateString(__assign(__assign({}, getDateOptions), { format: 'LT' }))))));
    }
    return null;
};
var EventComponent = React__default["default"].memo(UnMemoizedEventComponent);

/**
 * Prevents Chrome hangups
 * See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
 */
var mousewheelListener = function (event) {
    if (event instanceof WheelEvent && event.deltaY === 1) {
        event.preventDefault();
    }
};
var InfiniteScroll = function (props) {
    var children = props.children, _a = props.element, element = _a === void 0 ? 'div' : _a, _b = props.hasMore, hasMore = _b === void 0 ? false : _b, _c = props.hasMoreNewer, hasMoreNewer = _c === void 0 ? false : _c, head = props.head, _d = props.initialLoad, initialLoad = _d === void 0 ? true : _d, _e = props.isLoading, isLoading = _e === void 0 ? false : _e, listenToScroll = props.listenToScroll, loader = props.loader, loadMore = props.loadMore, loadMoreNewer = props.loadMoreNewer, _f = props.threshold, threshold = _f === void 0 ? 250 : _f, _g = props.useCapture, useCapture = _g === void 0 ? false : _g, elementProps = __rest(props, ["children", "element", "hasMore", "hasMoreNewer", "head", "initialLoad", "isLoading", "listenToScroll", "loader", "loadMore", "loadMoreNewer", "threshold", "useCapture"]);
    var scrollComponent = React.useRef();
    var scrollListener = React.useCallback(function () {
        var element = scrollComponent.current;
        if (!element || element.offsetParent === null) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var parentElement = element.parentElement;
        var offset = element.scrollHeight - parentElement.scrollTop - parentElement.clientHeight;
        var reverseOffset = parentElement.scrollTop;
        if (listenToScroll) {
            listenToScroll(offset, reverseOffset, threshold);
        }
        if (reverseOffset < Number(threshold) && typeof loadMore === 'function' && hasMore) {
            loadMore();
        }
        if (offset < Number(threshold) && typeof loadMoreNewer === 'function' && hasMoreNewer) {
            loadMoreNewer();
        }
    }, [hasMore, hasMoreNewer, threshold, listenToScroll, loadMore, loadMoreNewer]);
    React.useEffect(function () {
        var _a;
        var scrollElement = (_a = scrollComponent.current) === null || _a === void 0 ? void 0 : _a.parentNode;
        if (isLoading || !scrollElement) {
            return function () { return undefined; };
        }
        scrollElement.addEventListener('scroll', scrollListener, useCapture);
        scrollElement.addEventListener('resize', scrollListener, useCapture);
        return function () {
            scrollElement.removeEventListener('scroll', scrollListener, useCapture);
            scrollElement.removeEventListener('resize', scrollListener, useCapture);
        };
    }, [initialLoad, isLoading, scrollListener, useCapture]);
    React.useEffect(function () {
        var _a;
        var scrollElement = (_a = scrollComponent.current) === null || _a === void 0 ? void 0 : _a.parentNode;
        if (scrollElement) {
            scrollElement.addEventListener('wheel', mousewheelListener, { passive: false });
        }
        return function () {
            if (scrollElement) {
                scrollElement.removeEventListener('wheel', mousewheelListener, useCapture);
            }
        };
    }, [useCapture]);
    var attributes = __assign(__assign({}, elementProps), { ref: function (element) {
            scrollComponent.current = element;
        } });
    var childrenArray = [loader, children];
    if (head) {
        childrenArray.unshift(head);
    }
    return React__default["default"].createElement(element, attributes, childrenArray);
};

var handleActionWarning = "Action handler was called, but it is missing one of its required arguments. \nMake sure the ChannelAction and ChannelState contexts are properly set and the hook is initialized with a valid message.";
function useActionHandler(message) {
    var _this = this;
    var _a = useChannelActionContext('useActionHandler'), removeMessage = _a.removeMessage, updateMessage = _a.updateMessage;
    var channel = useChannelStateContext('useActionHandler').channel;
    return function (dataOrName, value, event) { return __awaiter$1(_this, void 0, void 0, function () {
        var messageID, formData, data;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (event)
                        event.preventDefault();
                    if (!message || !updateMessage || !removeMessage || !channel) {
                        console.warn(handleActionWarning);
                        return [2 /*return*/];
                    }
                    messageID = message.id;
                    formData = {};
                    // deprecated: value&name should be removed in favor of data obj
                    if (typeof dataOrName === 'string') {
                        formData[dataOrName] = value;
                    }
                    else {
                        formData = __assign({}, dataOrName);
                    }
                    if (!messageID) return [3 /*break*/, 2];
                    return [4 /*yield*/, channel.sendAction(messageID, formData)];
                case 1:
                    data = _a.sent();
                    if (data === null || data === void 0 ? void 0 : data.message) {
                        updateMessage(data.message);
                    }
                    else {
                        removeMessage(message);
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
}

var useDeleteHandler = function (message, notifications) {
    if (notifications === void 0) { notifications = {}; }
    var getErrorNotification = notifications.getErrorNotification, notify = notifications.notify;
    var updateMessage = useChannelActionContext('useDeleteHandler').updateMessage;
    var client = useChatContext('useDeleteHandler').client;
    var t = useTranslationContext('useDeleteHandler').t;
    return function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
        var data, errorMessage;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (!(message === null || message === void 0 ? void 0 : message.id) || !client || !updateMessage) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.deleteMessage(message.id)];
                case 2:
                    data = _a.sent();
                    updateMessage(data.message);
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    errorMessage = getErrorNotification && validateAndGetMessage(getErrorNotification, [message]);
                    if (notify)
                        notify(errorMessage || t('Error deleting message'), 'error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};

var useEditHandler = function (customInitialState, customSetEditing, customClearEditingHandler) {
    if (customInitialState === void 0) { customInitialState = false; }
    var _a = React.useState(customInitialState), editing = _a[0], setEditing = _a[1];
    var setEdit = customSetEditing ||
        (function (event) {
            if (event === null || event === void 0 ? void 0 : event.preventDefault) {
                event.preventDefault();
            }
            setEditing(true);
        });
    var clearEdit = customClearEditingHandler ||
        (function (event) {
            if (event === null || event === void 0 ? void 0 : event.preventDefault) {
                event.preventDefault();
            }
            setEditing(false);
        });
    return { clearEdit: clearEdit, editing: editing, setEdit: setEdit };
};

var missingUseFlagHandlerParameterWarning = 'useFlagHandler was called but it is missing one or more necessary parameters.';
var useFlagHandler = function (message, notifications) {
    if (notifications === void 0) { notifications = {}; }
    var client = useChatContext('useFlagHandler').client;
    var t = useTranslationContext('useFlagHandler').t;
    return function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
        var getErrorNotification, getSuccessNotification, notify, successMessage, errorMessage;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    getErrorNotification = notifications.getErrorNotification, getSuccessNotification = notifications.getSuccessNotification, notify = notifications.notify;
                    if (!client || !t || !notify || !(message === null || message === void 0 ? void 0 : message.id)) {
                        console.warn(missingUseFlagHandlerParameterWarning);
                        return [2 /*return*/];
                    }
                    if ((_a = client.user) === null || _a === void 0 ? void 0 : _a.banned) {
                        return [2 /*return*/, notify(t('Error adding flag'), 'error')];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.flagMessage(message.id)];
                case 2:
                    _b.sent();
                    successMessage = getSuccessNotification && validateAndGetMessage(getSuccessNotification, [message]);
                    notify(successMessage || t('Message has been successfully flagged'), 'success');
                    return [3 /*break*/, 4];
                case 3:
                    _b.sent();
                    errorMessage = getErrorNotification && validateAndGetMessage(getErrorNotification, [message]);
                    notify(errorMessage || t('Error adding flag'), 'error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};

function createEventHandler(fn, message) {
    return function (event) {
        var _a;
        if (typeof fn !== 'function' || !((_a = message === null || message === void 0 ? void 0 : message.mentioned_users) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        fn(event, message.mentioned_users);
    };
}
var useMentionsHandler = function (message, customMentionHandler) {
    var _a = useChannelActionContext('useMentionsHandler'), contextOnMentionsClick = _a.onMentionsClick, contextOnMentionsHover = _a.onMentionsHover;
    var onMentionsClick = (customMentionHandler === null || customMentionHandler === void 0 ? void 0 : customMentionHandler.onMentionsClick) || contextOnMentionsClick || (function () { return null; });
    var onMentionsHover = (customMentionHandler === null || customMentionHandler === void 0 ? void 0 : customMentionHandler.onMentionsHover) || contextOnMentionsHover || (function () { return null; });
    return {
        onMentionsClick: createEventHandler(onMentionsClick, message),
        onMentionsHover: createEventHandler(onMentionsHover, message),
    };
};

var missingUseMuteHandlerParamsWarning = 'useMuteHandler was called but it is missing one or more necessary parameter.';
var useMuteHandler = function (message, notifications) {
    if (notifications === void 0) { notifications = {}; }
    var mutes = useChannelStateContext('useMuteHandler').mutes;
    var client = useChatContext('useMuteHandler').client;
    var t = useTranslationContext('useMuteHandler').t;
    return function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
        var getErrorNotification, getSuccessNotification, notify, successMessage, errorMessage, fallbackMessage, successMessage, errorMessage;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    getErrorNotification = notifications.getErrorNotification, getSuccessNotification = notifications.getSuccessNotification, notify = notifications.notify;
                    if (!t || !(message === null || message === void 0 ? void 0 : message.user) || !notify || !client) {
                        console.warn(missingUseMuteHandlerParamsWarning);
                        return [2 /*return*/];
                    }
                    if (!!isUserMuted(message, mutes)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.muteUser(message.user.id)];
                case 2:
                    _a.sent();
                    successMessage = getSuccessNotification && validateAndGetMessage(getSuccessNotification, [message.user]);
                    notify(successMessage ||
                        t("{{ user }} has been muted", {
                            user: message.user.name || message.user.id,
                        }), 'success');
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    errorMessage = getErrorNotification && validateAndGetMessage(getErrorNotification, [message.user]);
                    notify(errorMessage || t('Error muting a user ...'), 'error');
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, client.unmuteUser(message.user.id)];
                case 6:
                    _a.sent();
                    fallbackMessage = t("{{ user }} has been unmuted", {
                        user: message.user.name || message.user.id,
                    });
                    successMessage = (getSuccessNotification &&
                        validateAndGetMessage(getSuccessNotification, [message.user])) ||
                        fallbackMessage;
                    if (typeof successMessage === 'string') {
                        notify(successMessage, 'success');
                    }
                    return [3 /*break*/, 8];
                case 7:
                    _a.sent();
                    errorMessage = (getErrorNotification && validateAndGetMessage(getErrorNotification, [message.user])) ||
                        t('Error unmuting a user ...');
                    if (typeof errorMessage === 'string') {
                        notify(errorMessage, 'error');
                    }
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
};

var useOpenThreadHandler = function (message, customOpenThread) {
    var channelOpenThread = useChannelActionContext('useOpenThreadHandler').openThread;
    var openThread = customOpenThread || channelOpenThread;
    return function (event) {
        if (!openThread || !message) {
            console.warn('Open thread handler was called but it is missing one of its parameters');
            return;
        }
        openThread(message, event);
    };
};

var usePinHandler = function (message, 
// @deprecated in favor of `channelCapabilities` - TODO: remove in next major release
_permissions, // eslint-disable-line
notifications) {
    if (notifications === void 0) { notifications = {}; }
    var getErrorNotification = notifications.getErrorNotification, notify = notifications.notify;
    var updateMessage = useChannelActionContext('usePinHandler').updateMessage;
    var _a = useChannelStateContext('usePinHandler').channelCapabilities, channelCapabilities = _a === void 0 ? {} : _a;
    var client = useChatContext('usePinHandler').client;
    var t = useTranslationContext('usePinHandler').t;
    var canPin = !!channelCapabilities['pin-message'];
    var handlePin = function (event) { return __awaiter$1(void 0, void 0, void 0, function () {
        var optimisticMessage, messageResponse, errorMessage, optimisticMessage, messageResponse, errorMessage;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (!message)
                        return [2 /*return*/];
                    if (!!message.pinned) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    optimisticMessage = __assign(__assign({}, message), { pinned: true, pinned_at: new Date(), pinned_by: client.user });
                    updateMessage(optimisticMessage);
                    return [4 /*yield*/, client.pinMessage(message)];
                case 2:
                    messageResponse = _a.sent();
                    updateMessage(messageResponse.message);
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    errorMessage = getErrorNotification && validateAndGetMessage(getErrorNotification, [message]);
                    if (notify)
                        notify(errorMessage || t('Error pinning message'), 'error');
                    updateMessage(message);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    optimisticMessage = __assign(__assign({}, message), { pin_expires: null, pinned: false, pinned_at: null, pinned_by: null });
                    updateMessage(optimisticMessage);
                    return [4 /*yield*/, client.unpinMessage(message)];
                case 6:
                    messageResponse = _a.sent();
                    updateMessage(messageResponse.message);
                    return [3 /*break*/, 8];
                case 7:
                    _a.sent();
                    errorMessage = getErrorNotification && validateAndGetMessage(getErrorNotification, [message]);
                    if (notify)
                        notify(errorMessage || t('Error removing message pin'), 'error');
                    updateMessage(message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return { canPin: canPin, handlePin: handlePin };
};

var reactionHandlerWarning = "Reaction handler was called, but it is missing one of its required arguments.\nMake sure the ChannelAction and ChannelState contexts are properly set and the hook is initialized with a valid message.";
var useReactionHandler = function (message) {
    var updateMessage = useChannelActionContext('useReactionHandler').updateMessage;
    var channel = useChannelStateContext('useReactionHandler').channel;
    var client = useChatContext('useReactionHandler').client;
    var createMessagePreview = React.useCallback(function (add, reaction, message) {
        var _a, _b;
        var newReactionCounts = (message === null || message === void 0 ? void 0 : message.reaction_counts) || {};
        var reactionType = reaction.type;
        var hasReaction = !!newReactionCounts[reactionType];
        if (add) {
            newReactionCounts[reactionType] = hasReaction ? newReactionCounts[reactionType] + 1 : 1;
        }
        else {
            if (hasReaction && newReactionCounts[reactionType] > 1) {
                newReactionCounts[reactionType]--;
            }
            else {
                delete newReactionCounts[reactionType];
            }
        }
        var newReactions = add
            ? __spreadArray$1([reaction], ((message === null || message === void 0 ? void 0 : message.latest_reactions) || []), true) : (_a = message.latest_reactions) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return !(item.type === reaction.type && item.user_id === reaction.user_id); });
        var newOwnReactions = add
            ? __spreadArray$1([reaction], ((message === null || message === void 0 ? void 0 : message.own_reactions) || []), true) : (_b = message === null || message === void 0 ? void 0 : message.own_reactions) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item.type !== reaction.type; });
        return __assign(__assign({}, message), { latest_reactions: newReactions || message.latest_reactions, own_reactions: newOwnReactions, reaction_counts: newReactionCounts, reaction_scores: newReactionCounts });
    }, [client.user, client.userID]);
    var creatReactionPreview = function (type) {
        var _a;
        return ({
            message_id: message === null || message === void 0 ? void 0 : message.id,
            score: 1,
            type: type,
            user: client.user,
            user_id: (_a = client.user) === null || _a === void 0 ? void 0 : _a.id,
        });
    };
    var toggleReaction = throttle__default["default"](function (id, type, add) { return __awaiter$1(void 0, void 0, void 0, function () {
        var newReaction, tempMessage, messageResponse, _a;
        var _b;
        return __generator$1(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!message || ((_b = channel.data) === null || _b === void 0 ? void 0 : _b.frozen))
                        return [2 /*return*/];
                    newReaction = creatReactionPreview(type);
                    tempMessage = createMessagePreview(add, newReaction, message);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, , 7]);
                    updateMessage(tempMessage);
                    if (!add) return [3 /*break*/, 3];
                    return [4 /*yield*/, channel.sendReaction(id, { type: type })];
                case 2:
                    _a = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, channel.deleteReaction(id, type)];
                case 4:
                    _a = _c.sent();
                    _c.label = 5;
                case 5:
                    messageResponse = _a;
                    updateMessage(messageResponse.message);
                    return [3 /*break*/, 7];
                case 6:
                    _c.sent();
                    // revert to the original message if the API call fails
                    updateMessage(message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); }, 1000);
    return function (reactionType, event) { return __awaiter$1(void 0, void 0, void 0, function () {
        var userExistingReaction, error_2;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (event === null || event === void 0 ? void 0 : event.preventDefault) {
                        event.preventDefault();
                    }
                    if (!message) {
                        return [2 /*return*/, console.warn(reactionHandlerWarning)];
                    }
                    userExistingReaction = null;
                    if (message.own_reactions) {
                        message.own_reactions.forEach(function (reaction) {
                            // own user should only ever contain the current user id
                            // just in case we check to prevent bugs with message updates from breaking reactions
                            if (reaction.user && client.userID === reaction.user.id && reaction.type === reactionType) {
                                userExistingReaction = reaction;
                            }
                            else if (reaction.user && client.userID !== reaction.user.id) {
                                console.warn("message.own_reactions contained reactions from a different user, this indicates a bug");
                            }
                        });
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!userExistingReaction) return [3 /*break*/, 3];
                    return [4 /*yield*/, toggleReaction(message.id, userExistingReaction.type, false)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, toggleReaction(message.id, reactionType, true)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.log({ error: error_2 });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
};
var useReactionClick = function (message, reactionSelectorRef, messageWrapperRef, closeReactionSelectorOnClick) {
    var _a;
    var _b = useChannelStateContext('useReactionClick'), channel = _b.channel, _c = _b.channelCapabilities, channelCapabilities = _c === void 0 ? {} : _c, channelConfig = _b.channelConfig;
    var _d = React.useState(false), showDetailedReactions = _d[0], setShowDetailedReactions = _d[1];
    var hasListener = React.useRef(false);
    var isFrozen = !!((_a = channel.data) === null || _a === void 0 ? void 0 : _a.frozen);
    var isReactionEnabled = ((channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.reactions) !== false && channelCapabilities['send-reaction']) || isFrozen;
    var messageDeleted = !!(message === null || message === void 0 ? void 0 : message.deleted_at);
    var closeDetailedReactions = React.useCallback(function (event) {
        var _a;
        if (event.target instanceof HTMLElement &&
            ((_a = reactionSelectorRef === null || reactionSelectorRef === void 0 ? void 0 : reactionSelectorRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) &&
            !closeReactionSelectorOnClick) {
            return;
        }
        setShowDetailedReactions(false);
    }, [setShowDetailedReactions, reactionSelectorRef]);
    React.useEffect(function () {
        var messageWrapper = messageWrapperRef === null || messageWrapperRef === void 0 ? void 0 : messageWrapperRef.current;
        if (showDetailedReactions && !hasListener.current) {
            hasListener.current = true;
            document.addEventListener('click', closeDetailedReactions);
            if (messageWrapper) {
                messageWrapper.addEventListener('mouseleave', closeDetailedReactions);
            }
        }
        if (!showDetailedReactions && hasListener.current) {
            document.removeEventListener('click', closeDetailedReactions);
            if (messageWrapper) {
                messageWrapper.removeEventListener('mouseleave', closeDetailedReactions);
            }
            hasListener.current = false;
        }
        return function () {
            if (hasListener.current) {
                document.removeEventListener('click', closeDetailedReactions);
                if (messageWrapper) {
                    messageWrapper.removeEventListener('mouseleave', closeDetailedReactions);
                }
                hasListener.current = false;
            }
        };
    }, [showDetailedReactions, closeDetailedReactions, messageWrapperRef]);
    React.useEffect(function () {
        var messageWrapper = messageWrapperRef === null || messageWrapperRef === void 0 ? void 0 : messageWrapperRef.current;
        if (messageDeleted && hasListener.current) {
            document.removeEventListener('click', closeDetailedReactions);
            if (messageWrapper) {
                messageWrapper.removeEventListener('mouseleave', closeDetailedReactions);
            }
            hasListener.current = false;
        }
    }, [messageDeleted, closeDetailedReactions, messageWrapperRef]);
    var onReactionListClick = function (event) {
        if (event === null || event === void 0 ? void 0 : event.stopPropagation) {
            event.stopPropagation();
        }
        setShowDetailedReactions(function (prev) { return !prev; });
    };
    return {
        isReactionEnabled: isReactionEnabled,
        onReactionListClick: onReactionListClick,
        showDetailedReactions: showDetailedReactions,
    };
};

var useRetryHandler = function (customRetrySendMessage) {
    var contextRetrySendMessage = useChannelActionContext('useRetryHandler').retrySendMessage;
    var retrySendMessage = customRetrySendMessage || contextRetrySendMessage;
    return function (message) { return __awaiter$1(void 0, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!message) return [3 /*break*/, 2];
                    return [4 /*yield*/, retrySendMessage(message)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
};

var useUserHandler = function (message, eventHandlers) { return ({
    onUserClick: function (event) {
        if (typeof (eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onUserClickHandler) !== 'function' || !(message === null || message === void 0 ? void 0 : message.user)) {
            return;
        }
        eventHandlers.onUserClickHandler(event, message.user);
    },
    onUserHover: function (event) {
        if (typeof (eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.onUserHoverHandler) !== 'function' || !(message === null || message === void 0 ? void 0 : message.user)) {
            return;
        }
        eventHandlers.onUserHoverHandler(event, message.user);
    },
}); };

var selectColor = function (number, dark) {
    var hue = number * 137.508; // use golden angle approximation
    return "hsl(".concat(hue, ",").concat(dark ? '50%' : '85%', ", ").concat(dark ? '75%' : '55%', ")");
};
var hashUserId = function (userId) {
    var hash = userId.split('').reduce(function (acc, c) {
        acc = (acc << 5) - acc + c.charCodeAt(0); // eslint-disable-line
        return acc & acc; // eslint-disable-line no-bitwise
    }, 0);
    return Math.abs(hash) / Math.pow(10, Math.ceil(Math.log10(Math.abs(hash) + 1)));
};
var getUserColor = function (theme, userId) {
    return selectColor(hashUserId(userId), theme.includes('dark'));
};
var UnMemoizedFixedHeightMessage = function (props) {
    var _a, _b, _c, _d;
    var propGroupedByUser = props.groupedByUser, propMessage = props.message;
    var theme = useChatContext('FixedHeightMessage').theme;
    var _e = useMessageContext('FixedHeightMessage'), contextGroupedByUser = _e.groupedByUser, contextMessage = _e.message;
    var _f = useComponentContext('FixedHeightMessage').MessageDeleted, MessageDeleted$1 = _f === void 0 ? MessageDeleted : _f;
    var userLanguage = useTranslationContext('FixedHeightMessage').userLanguage;
    var groupedByUser = propGroupedByUser !== undefined ? propGroupedByUser : contextGroupedByUser;
    var message = propMessage || contextMessage;
    var handleAction = useActionHandler(message);
    var handleDelete = useDeleteHandler(message);
    var role = useUserRole(message);
    var messageTextToRender = ((_a = message === null || message === void 0 ? void 0 : message.i18n) === null || _a === void 0 ? void 0 : _a["".concat(userLanguage, "_text")]) || (message === null || message === void 0 ? void 0 : message.text);
    var renderedText = React.useMemo(function () { return renderText(messageTextToRender, message.mentioned_users); }, [
        message.mentioned_users,
        messageTextToRender,
    ]);
    var userId = ((_b = message.user) === null || _b === void 0 ? void 0 : _b.id) || '';
    var userColor = React.useMemo(function () { return getUserColor(theme, userId); }, [userId, theme]);
    var messageActionsHandler = React.useCallback(function () { return getMessageActions(['delete'], { canDelete: role.canDelete }); }, [role]);
    var images = (_c = message === null || message === void 0 ? void 0 : message.attachments) === null || _c === void 0 ? void 0 : _c.filter(function (_a) {
        var type = _a.type;
        return type === 'image';
    });
    return (React__default["default"].createElement("div", { className: "str-chat__virtual-message__wrapper ".concat(role.isMyMessage ? 'str-chat__virtual-message__wrapper--me' : '', " ").concat(groupedByUser ? 'str-chat__virtual-message__wrapper--group' : ''), key: message.id },
        message.user && (React__default["default"].createElement(Avatar, { image: message.user.image, name: message.user.name || message.user.id, shape: 'rounded', size: 38, user: message.user })),
        React__default["default"].createElement("div", { className: 'str-chat__virtual-message__content' },
            React__default["default"].createElement("div", { className: 'str-chat__virtual-message__meta' },
                React__default["default"].createElement("div", { className: 'str-chat__virtual-message__author', style: { color: userColor } },
                    React__default["default"].createElement("strong", null, ((_d = message.user) === null || _d === void 0 ? void 0 : _d.name) || 'unknown'))),
            message.deleted_at || message.type === 'deleted' ? (React__default["default"].createElement(MessageDeleted$1, { message: message })) : (React__default["default"].createElement(React__default["default"].Fragment, null,
                images && React__default["default"].createElement(Gallery, { images: images }),
                React__default["default"].createElement("div", { className: 'str-chat__virtual-message__text', "data-testid": 'msg-text' },
                    renderedText,
                    message.mml && (React__default["default"].createElement(MML, { actionHandler: handleAction, align: 'left', source: message.mml })),
                    React__default["default"].createElement("div", { className: 'str-chat__virtual-message__data' },
                        React__default["default"].createElement(MessageActions, { customWrapperClass: 'str-chat__virtual-message__actions', getMessageActions: messageActionsHandler, handleDelete: handleDelete, message: message, mine: function () { return role.isMyMessage; } }),
                        React__default["default"].createElement("span", { className: 'str-chat__virtual-message__date' },
                            React__default["default"].createElement(MessageTimestamp, { customClass: 'str-chat__message-simple-timestamp', message: message })))))))));
};
/**
 * @deprecated - This UI component will be removed in the next major release.
 *
 * FixedHeightMessage - This component renders a single message.
 * It uses fixed height elements to make sure it works well in VirtualizedMessageList
 */
var FixedHeightMessage = React__default["default"].memo(UnMemoizedFixedHeightMessage);

var MessageWithContext = function (props) {
    var canPin = props.canPin, groupedByUser = props.groupedByUser, propMessage = props.Message, message = props.message, _a = props.messageActions, messageActions = _a === void 0 ? Object.keys(MESSAGE_ACTIONS) : _a, propOnUserClick = props.onUserClick, propOnUserHover = props.onUserHover, userRoles = props.userRoles;
    var contextMessage = useComponentContext('Message').Message;
    var actionsEnabled = message.type === 'regular' && message.status === 'received';
    var MessageUIComponent = propMessage || contextMessage;
    var _b = useEditHandler(), clearEdit = _b.clearEdit, editing = _b.editing, setEdit = _b.setEdit;
    var _c = useUserHandler(message, {
        onUserClickHandler: propOnUserClick,
        onUserHoverHandler: propOnUserHover,
    }), onUserClick = _c.onUserClick, onUserHover = _c.onUserHover;
    var canDelete = userRoles.canDelete, canEdit = userRoles.canEdit, canFlag = userRoles.canFlag, canMute = userRoles.canMute, canQuote = userRoles.canQuote, canReact = userRoles.canReact, canReply = userRoles.canReply, isMyMessage = userRoles.isMyMessage;
    var messageActionsHandler = React.useCallback(function () {
        return getMessageActions(messageActions, {
            canDelete: canDelete,
            canEdit: canEdit,
            canFlag: canFlag,
            canMute: canMute,
            canPin: canPin,
            canQuote: canQuote,
            canReact: canReact,
            canReply: canReply,
        });
    }, [messageActions, canDelete, canEdit, canFlag, canMute, canPin, canQuote, canReact, canReply]);
    props.canPin; // eslint-disable-line @typescript-eslint/no-unused-vars
    props.messageActions; // eslint-disable-line @typescript-eslint/no-unused-vars
    props.onlySenderCanEdit; // eslint-disable-line @typescript-eslint/no-unused-vars
    props.onUserClick; // eslint-disable-line @typescript-eslint/no-unused-vars
    props.onUserHover; // eslint-disable-line @typescript-eslint/no-unused-vars
    props.userRoles; // eslint-disable-line @typescript-eslint/no-unused-vars
    var rest = __rest(props, ["canPin", "messageActions", "onlySenderCanEdit", "onUserClick", "onUserHover", "userRoles"]);
    var messageContextValue = __assign(__assign({}, rest), { actionsEnabled: actionsEnabled, clearEditingState: clearEdit, editing: editing, getMessageActions: messageActionsHandler, handleEdit: setEdit, isMyMessage: function () { return isMyMessage; }, onUserClick: onUserClick, onUserHover: onUserHover, setEditingState: setEdit });
    return (React__default["default"].createElement(MessageProvider, { value: messageContextValue },
        React__default["default"].createElement(MessageUIComponent, { groupedByUser: groupedByUser })));
};
var MemoizedMessage = React__default["default"].memo(MessageWithContext, areMessagePropsEqual);
/**
 * The Message component is a context provider which implements all the logic required for rendering
 * an individual message. The actual UI of the message is delegated via the Message prop on Channel.
 */
var Message = function (props) {
    var closeReactionSelectorOnClick = props.closeReactionSelectorOnClick, disableQuotedMessages = props.disableQuotedMessages, getDeleteMessageErrorNotification = props.getDeleteMessageErrorNotification, getFlagMessageErrorNotification = props.getFlagMessageErrorNotification, getFlagMessageSuccessNotification = props.getFlagMessageSuccessNotification, getMuteUserErrorNotification = props.getMuteUserErrorNotification, getMuteUserSuccessNotification = props.getMuteUserSuccessNotification, getPinMessageErrorNotification = props.getPinMessageErrorNotification, message = props.message, _a = props.onlySenderCanEdit, onlySenderCanEdit = _a === void 0 ? false : _a, propOnMentionsClick = props.onMentionsClick, propOnMentionsHover = props.onMentionsHover, propOpenThread = props.openThread, pinPermissions = props.pinPermissions, propRetrySendMessage = props.retrySendMessage;
    var addNotification = useChannelActionContext('Message').addNotification;
    var _b = useChannelStateContext('Message'), highlightedMessageId = _b.highlightedMessageId, mutes = _b.mutes;
    var reactionSelectorRef = React.useRef(null);
    var handleAction = useActionHandler(message);
    var handleOpenThread = useOpenThreadHandler(message, propOpenThread);
    var handleReaction = useReactionHandler(message);
    var handleRetry = useRetryHandler(propRetrySendMessage);
    var userRoles = useUserRole(message, onlySenderCanEdit, disableQuotedMessages);
    var handleDelete = useDeleteHandler(message, {
        getErrorNotification: getDeleteMessageErrorNotification,
        notify: addNotification,
    });
    var handleFlag = useFlagHandler(message, {
        getErrorNotification: getFlagMessageErrorNotification,
        getSuccessNotification: getFlagMessageSuccessNotification,
        notify: addNotification,
    });
    var handleMute = useMuteHandler(message, {
        getErrorNotification: getMuteUserErrorNotification,
        getSuccessNotification: getMuteUserSuccessNotification,
        notify: addNotification,
    });
    var _c = useMentionsHandler(message, {
        onMentionsClick: propOnMentionsClick,
        onMentionsHover: propOnMentionsHover,
    }), onMentionsClick = _c.onMentionsClick, onMentionsHover = _c.onMentionsHover;
    var _d = usePinHandler(message, pinPermissions, {
        getErrorNotification: getPinMessageErrorNotification,
        notify: addNotification,
    }), canPin = _d.canPin, handlePin = _d.handlePin;
    var _e = useReactionClick(message, reactionSelectorRef, undefined, closeReactionSelectorOnClick), isReactionEnabled = _e.isReactionEnabled, onReactionListClick = _e.onReactionListClick, showDetailedReactions = _e.showDetailedReactions;
    var highlighted = highlightedMessageId === message.id;
    return (React__default["default"].createElement(MemoizedMessage, { additionalMessageInputProps: props.additionalMessageInputProps, autoscrollToBottom: props.autoscrollToBottom, canPin: canPin, customMessageActions: props.customMessageActions, disableQuotedMessages: props.disableQuotedMessages, endOfGroup: props.endOfGroup, firstOfGroup: props.firstOfGroup, formatDate: props.formatDate, groupedByUser: props.groupedByUser, groupStyles: props.groupStyles, handleAction: handleAction, handleDelete: handleDelete, handleFlag: handleFlag, handleMute: handleMute, handleOpenThread: handleOpenThread, handlePin: handlePin, handleReaction: handleReaction, handleRetry: handleRetry, highlighted: highlighted, initialMessage: props.initialMessage, isReactionEnabled: isReactionEnabled, lastReceivedId: props.lastReceivedId, message: message, Message: props.Message, messageActions: props.messageActions, messageListRect: props.messageListRect, mutes: mutes, onMentionsClickMessage: onMentionsClick, onMentionsHoverMessage: onMentionsHover, onReactionListClick: onReactionListClick, onUserClick: props.onUserClick, onUserHover: props.onUserHover, pinPermissions: props.pinPermissions, reactionSelectorRef: reactionSelectorRef, readBy: props.readBy, renderText: props.renderText, showDetailedReactions: showDetailedReactions, threadList: props.threadList, unsafeHTML: props.unsafeHTML, userRoles: userRoles }));
};

var UnMemoizedCustomNotification = function (props) {
    var active = props.active, children = props.children, type = props.type;
    if (!active)
        return null;
    return (React__default["default"].createElement("div", { "aria-live": 'polite', className: "str-chat__custom-notification notification-".concat(type, " str-chat__notification"), "data-testid": 'custom-notification' }, children));
};
var CustomNotification = React__default["default"].memo(UnMemoizedCustomNotification);

var UnMemoizedConnectionStatus = function () {
    var client = useChatContext('ConnectionStatus').client;
    var t = useTranslationContext('ConnectionStatus').t;
    var _a = React.useState(true), online = _a[0], setOnline = _a[1];
    React.useEffect(function () {
        var connectionChanged = function (_a) {
            var _b = _a.online, onlineStatus = _b === void 0 ? false : _b;
            if (online !== onlineStatus) {
                setOnline(onlineStatus);
            }
        };
        client.on('connection.changed', connectionChanged);
        return function () { return client.off('connection.changed', connectionChanged); };
    }, [client, online]);
    return (React__default["default"].createElement(CustomNotification, { active: !online, type: 'error' }, t('Connection failure, reconnecting now...')));
};
var ConnectionStatus = React__default["default"].memo(UnMemoizedConnectionStatus);

var GiphyPreviewMessage = function (props) {
    var message = props.message;
    return (React__default["default"].createElement("div", { className: 'giphy-preview-message' },
        React__default["default"].createElement(Message, { message: message })));
};

var useEnrichedMessages = function (args) {
    var channel = args.channel, disableDateSeparator = args.disableDateSeparator, groupStyles = args.groupStyles, headerPosition = args.headerPosition, hideDeletedMessages = args.hideDeletedMessages, hideNewMessageSeparator = args.hideNewMessageSeparator, messages = args.messages, noGroupByUser = args.noGroupByUser;
    var client = useChatContext('useEnrichedMessages').client;
    var HeaderComponent = useComponentContext('useEnrichedMessages').HeaderComponent;
    var lastRead = React.useMemo(function () { var _a; return (_a = channel.lastRead) === null || _a === void 0 ? void 0 : _a.call(channel); }, [channel]);
    var enableDateSeparator = !disableDateSeparator;
    var messagesWithDates = !enableDateSeparator && !hideDeletedMessages && hideNewMessageSeparator
        ? messages
        : processMessages({
            enableDateSeparator: enableDateSeparator,
            hideDeletedMessages: hideDeletedMessages,
            hideNewMessageSeparator: hideNewMessageSeparator,
            lastRead: lastRead,
            messages: messages,
            userId: client.userID || '',
        });
    if (HeaderComponent) {
        messagesWithDates = insertIntro(messagesWithDates, headerPosition);
    }
    var groupStylesFn = groupStyles || getGroupStyles;
    var messageGroupStyles = React.useMemo(function () {
        return messagesWithDates.reduce(function (acc, message, i) {
            var style = groupStylesFn(message, messagesWithDates[i - 1], messagesWithDates[i + 1], noGroupByUser);
            if (style)
                acc[message.id] = style;
            return acc;
        }, {});
    }, [messagesWithDates, noGroupByUser]);
    return { messageGroupStyles: messageGroupStyles, messages: messagesWithDates };
};

var useLastReadData = function (props) {
    var messages = props.messages, read = props.read, returnAllReadData = props.returnAllReadData, userID = props.userID;
    return React.useMemo(function () {
        return getReadStates(messages.filter(function (_a) {
            var user = _a.user;
            return (user === null || user === void 0 ? void 0 : user.id) === userID;
        }), read, returnAllReadData);
    }, [messages, read, returnAllReadData, userID]);
};

var useMessageListElements = function (props) {
    var enrichedMessages = props.enrichedMessages, internalMessageProps = props.internalMessageProps, messageGroupStyles = props.messageGroupStyles, onMessageLoadCaptured = props.onMessageLoadCaptured, read = props.read, returnAllReadData = props.returnAllReadData, threadList = props.threadList;
    var _a = useChatContext('useMessageListElements'), client = _a.client, customClasses = _a.customClasses;
    var _b = useComponentContext('useMessageListElements'), _c = _b.DateSeparator, DateSeparator$1 = _c === void 0 ? DateSeparator : _c, HeaderComponent = _b.HeaderComponent, _d = _b.MessageSystem, MessageSystem = _d === void 0 ? EventComponent : _d;
    // get the readData, but only for messages submitted by the user themselves
    var readData = useLastReadData({
        messages: enrichedMessages,
        read: read,
        returnAllReadData: returnAllReadData,
        userID: client.userID,
    });
    var lastReceivedId = React.useMemo(function () { return getLastReceived(enrichedMessages); }, [enrichedMessages]);
    var elements = React.useMemo(function () {
        return enrichedMessages.map(function (message) {
            var _a;
            if (message.customType === CUSTOM_MESSAGE_TYPE.date &&
                message.date &&
                isDate(message.date)) {
                return (React__default["default"].createElement("li", { key: "".concat(message.date.toISOString(), "-i") },
                    React__default["default"].createElement(DateSeparator$1, { date: message.date, formatDate: internalMessageProps.formatDate, unread: message.unread })));
            }
            if (message.customType === CUSTOM_MESSAGE_TYPE.intro && HeaderComponent) {
                return (React__default["default"].createElement("li", { key: 'intro' },
                    React__default["default"].createElement(HeaderComponent, null)));
            }
            if (message.type === 'system') {
                return (React__default["default"].createElement("li", { key: ((_a = message.event) === null || _a === void 0 ? void 0 : _a.created_at) ||
                        message.created_at ||
                        '' },
                    React__default["default"].createElement(MessageSystem, { message: message })));
            }
            var groupStyles = messageGroupStyles[message.id] || '';
            var messageClass = (customClasses === null || customClasses === void 0 ? void 0 : customClasses.message) || "str-chat__li str-chat__li--".concat(groupStyles);
            return (React__default["default"].createElement("li", { className: messageClass, "data-message-id": message.id, "data-testid": messageClass, key: message.id || message.created_at, onLoadCapture: onMessageLoadCaptured },
                React__default["default"].createElement(Message, __assign({ groupStyles: [groupStyles], lastReceivedId: lastReceivedId, message: message, readBy: readData[message.id] || [], threadList: threadList }, internalMessageProps))));
        });
    }, [
        enrichedMessages,
        internalMessageProps,
        lastReceivedId,
        messageGroupStyles,
        onMessageLoadCaptured,
        readData,
        threadList,
    ]);
    return elements;
};

function useMessageListScrollManager(params) {
    var onScrollBy = params.onScrollBy, scrollContainerMeasures = params.scrollContainerMeasures, scrolledUpThreshold = params.scrolledUpThreshold, scrollToBottom = params.scrollToBottom, showNewMessages = params.showNewMessages;
    var client = useChatContext('useMessageListScrollManager').client;
    var measures = React.useRef({
        offsetHeight: 0,
        scrollHeight: 0,
    });
    var messages = React.useRef();
    var scrollTop = React.useRef(0);
    React.useEffect(function () {
        var _a, _b, _c;
        var prevMeasures = measures.current;
        var prevMessages = messages.current;
        var newMessages = params.messages;
        var lastNewMessage = newMessages[newMessages.length - 1] || {};
        var lastPrevMessage = prevMessages === null || prevMessages === void 0 ? void 0 : prevMessages[prevMessages.length - 1];
        var newMeasures = scrollContainerMeasures();
        var wasAtBottom = prevMeasures.scrollHeight - prevMeasures.offsetHeight - scrollTop.current <
            scrolledUpThreshold;
        if (typeof prevMessages !== 'undefined') {
            if (prevMessages.length < newMessages.length) {
                // messages added to the top
                if ((lastPrevMessage === null || lastPrevMessage === void 0 ? void 0 : lastPrevMessage.id) === lastNewMessage.id) {
                    var listHeightDelta = newMeasures.scrollHeight - prevMeasures.scrollHeight;
                    if (scrollTop.current === 0) {
                        onScrollBy(listHeightDelta);
                    }
                }
                // messages added to the bottom
                else {
                    var lastMessageIsFromCurrentUser = ((_a = lastNewMessage.user) === null || _a === void 0 ? void 0 : _a.id) === client.userID;
                    if (lastMessageIsFromCurrentUser || wasAtBottom) {
                        scrollToBottom();
                    }
                    else {
                        showNewMessages();
                    }
                }
            }
            // message list length didn't change, but check if last message had reaction/reply update
            else {
                var hasNewReactions = ((_b = lastPrevMessage === null || lastPrevMessage === void 0 ? void 0 : lastPrevMessage.latest_reactions) === null || _b === void 0 ? void 0 : _b.length) !== ((_c = lastNewMessage.latest_reactions) === null || _c === void 0 ? void 0 : _c.length);
                var hasNewReplies = (lastPrevMessage === null || lastPrevMessage === void 0 ? void 0 : lastPrevMessage.reply_count) !== lastNewMessage.reply_count;
                if ((hasNewReactions || hasNewReplies) && wasAtBottom) {
                    scrollToBottom();
                }
            }
        }
        messages.current = newMessages;
        measures.current = newMeasures;
    }, [measures, messages, params.messages]);
    return function (scrollTopValue) {
        scrollTop.current = scrollTopValue;
    };
}

var useScrollLocationLogic = function (params) {
    var _a = params.messages, messages = _a === void 0 ? [] : _a, _b = params.scrolledUpThreshold, scrolledUpThreshold = _b === void 0 ? 200 : _b, hasMoreNewer = params.hasMoreNewer, suppressAutoscroll = params.suppressAutoscroll, listElement = params.listElement;
    var _c = React.useState(false), hasNewMessages = _c[0], setHasNewMessages = _c[1];
    var _d = React.useState(), wrapperRect = _d[0], setWrapperRect = _d[1];
    var _e = React.useState(true), isMessageListScrolledToBottom = _e[0], setIsMessageListScrolledToBottom = _e[1];
    var closeToBottom = React.useRef(false);
    var closeToTop = React.useRef(false);
    var scrollCounter = React.useRef({ autoScroll: 0, scroll: 0 });
    var scrollToBottom = React.useCallback(function () {
        if (!(listElement === null || listElement === void 0 ? void 0 : listElement.scrollTo) || hasMoreNewer || suppressAutoscroll) {
            return;
        }
        scrollCounter.current.autoScroll += 1;
        listElement.scrollTo({
            top: listElement.scrollHeight,
        });
        setHasNewMessages(false);
    }, [listElement, hasMoreNewer, suppressAutoscroll]);
    React.useLayoutEffect(function () {
        if (listElement) {
            setWrapperRect(listElement.getBoundingClientRect());
            scrollToBottom();
        }
    }, [listElement, hasMoreNewer]);
    var updateScrollTop = useMessageListScrollManager({
        messages: messages,
        onScrollBy: function (scrollBy) {
            listElement === null || listElement === void 0 ? void 0 : listElement.scrollBy({ top: scrollBy });
        },
        scrollContainerMeasures: function () { return ({
            offsetHeight: (listElement === null || listElement === void 0 ? void 0 : listElement.offsetHeight) || 0,
            scrollHeight: (listElement === null || listElement === void 0 ? void 0 : listElement.scrollHeight) || 0,
        }); },
        scrolledUpThreshold: scrolledUpThreshold,
        scrollToBottom: scrollToBottom,
        showNewMessages: function () { return setHasNewMessages(true); },
    });
    var onScroll = React.useCallback(function (event) {
        var element = event.target;
        var scrollTop = element.scrollTop;
        updateScrollTop(scrollTop);
        var offsetHeight = element.offsetHeight;
        var scrollHeight = element.scrollHeight;
        var prevCloseToBottom = closeToBottom.current;
        closeToBottom.current = scrollHeight - (scrollTop + offsetHeight) < scrolledUpThreshold;
        closeToTop.current = scrollTop < scrolledUpThreshold;
        if (closeToBottom.current) {
            setHasNewMessages(false);
        }
        if (prevCloseToBottom && !closeToBottom.current) {
            setIsMessageListScrolledToBottom(false);
        }
        else if (!prevCloseToBottom && closeToBottom.current) {
            setIsMessageListScrolledToBottom(true);
        }
    }, [updateScrollTop, closeToTop, closeToBottom, scrolledUpThreshold]);
    var onMessageLoadCaptured = React.useCallback(function () {
        /**
         * A load event (emitted by e.g. an <img>) was captured on a message.
         * In some cases, the loaded asset is larger than the placeholder, which means we have to scroll down.
         */
        if (closeToBottom.current) {
            scrollToBottom();
        }
    }, [closeToTop, closeToBottom, scrollToBottom]);
    return {
        hasNewMessages: hasNewMessages,
        isMessageListScrolledToBottom: isMessageListScrolledToBottom,
        onMessageLoadCaptured: onMessageLoadCaptured,
        onScroll: onScroll,
        scrollToBottom: scrollToBottom,
        wrapperRect: wrapperRect,
    };
};

var UnMemoizedMessageNotification = function (props) {
    var children = props.children, onClick = props.onClick, _a = props.showNotification, showNotification = _a === void 0 ? true : _a;
    if (!showNotification)
        return null;
    return (React__default["default"].createElement("button", { "aria-live": 'polite', className: "str-chat__message-notification", "data-testid": 'message-notification', onClick: onClick }, children));
};
var MessageNotification = React__default["default"].memo(UnMemoizedMessageNotification);

var MessageListNotifications = function (props) {
    var hasNewMessages = props.hasNewMessages, isMessageListScrolledToBottom = props.isMessageListScrolledToBottom, isNotAtLatestMessageSet = props.isNotAtLatestMessageSet, MessageNotification = props.MessageNotification, notifications = props.notifications, scrollToBottom = props.scrollToBottom, threadList = props.threadList;
    var t = useTranslationContext('MessageListNotifications').t;
    return (React__default["default"].createElement("div", { className: 'str-chat__list-notifications' },
        notifications.map(function (notification) { return (React__default["default"].createElement(CustomNotification, { active: true, key: notification.id, type: notification.type }, notification.text)); }),
        React__default["default"].createElement(ConnectionStatus, null),
        React__default["default"].createElement(MessageNotification, { isMessageListScrolledToBottom: isMessageListScrolledToBottom, onClick: scrollToBottom, showNotification: hasNewMessages || isNotAtLatestMessageSet, threadList: threadList }, isNotAtLatestMessageSet ? t('Latest Messages') : t('New Messages!'))));
};

var useJoinTypingUsers = function (names) {
    var t = useTranslationContext().t;
    if (!names.length)
        return null;
    var name = names[0], rest = names.slice(1);
    if (names.length === 1)
        return t('{{ user }} is typing...', {
            user: name,
        });
    var MAX_JOINED_USERS = 3;
    var isLargeArray = names.length > MAX_JOINED_USERS;
    var joinedUsers = (isLargeArray ? names.slice(0, MAX_JOINED_USERS) : rest).join(', ').trim();
    if (isLargeArray)
        return t('{{ users }} and more are typing...', {
            users: joinedUsers,
        });
    return t('{{ users }} and {{ user }} are typing...', {
        user: name,
        users: joinedUsers,
    });
};
/**
 * TypingIndicator lists users currently typing, it needs to be a child of Channel component
 */
var UnMemoizedTypingIndicator = function (props) {
    var PropAvatar = props.Avatar, _a = props.avatarSize, avatarSize = _a === void 0 ? 32 : _a, threadList = props.threadList;
    var _b = useChannelStateContext('TypingIndicator'), channelConfig = _b.channelConfig, thread = _b.thread;
    var _c = useChatContext('TypingIndicator'), client = _c.client, themeVersion = _c.themeVersion;
    var ContextAvatar = useComponentContext('TypingIndicator').Avatar;
    var _d = useTypingContext('TypingIndicator').typing, typing = _d === void 0 ? {} : _d;
    var Avatar$1 = PropAvatar || ContextAvatar || Avatar;
    var typingInChannel = !threadList
        ? Object.values(typing).filter(function (_a) {
            var _b;
            var parent_id = _a.parent_id, user = _a.user;
            return (user === null || user === void 0 ? void 0 : user.id) !== ((_b = client.user) === null || _b === void 0 ? void 0 : _b.id) && !parent_id;
        })
        : [];
    var typingInThread = threadList
        ? Object.values(typing).filter(function (_a) {
            var _b;
            var parent_id = _a.parent_id, user = _a.user;
            return (user === null || user === void 0 ? void 0 : user.id) !== ((_b = client.user) === null || _b === void 0 ? void 0 : _b.id) && parent_id === (thread === null || thread === void 0 ? void 0 : thread.id);
        })
        : [];
    var typingUserList = (threadList ? typingInThread : typingInChannel)
        .map(function (_a) {
        var user = _a.user;
        return (user === null || user === void 0 ? void 0 : user.name) || (user === null || user === void 0 ? void 0 : user.id);
    })
        .filter(Boolean);
    var joinedTypingUsers = useJoinTypingUsers(typingUserList);
    var isTypingActive = (threadList && typingInThread.length) || (!threadList && typingInChannel.length);
    if ((channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.typing_events) === false) {
        return null;
    }
    if (themeVersion === '2') {
        if (!isTypingActive)
            return null;
        return (React__default["default"].createElement("div", { className: clsx('str-chat__typing-indicator', {
                'str-chat__typing-indicator--typing': isTypingActive,
            }), "data-testid": 'typing-indicator' },
            React__default["default"].createElement("div", { className: 'str-chat__typing-indicator__dots' },
                React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' }),
                React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' }),
                React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' })),
            React__default["default"].createElement("div", { className: 'str-chat__typing-indicator__users', "data-testid": 'typing-users' }, joinedTypingUsers)));
    }
    return (React__default["default"].createElement("div", { className: clsx('str-chat__typing-indicator', {
            'str-chat__typing-indicator--typing': isTypingActive,
        }) },
        React__default["default"].createElement("div", { className: 'str-chat__typing-indicator__avatars' }, (threadList ? typingInThread : typingInChannel).map(function (_a, i) {
            var user = _a.user;
            return (React__default["default"].createElement(Avatar$1, { image: user === null || user === void 0 ? void 0 : user.image, key: "".concat(user === null || user === void 0 ? void 0 : user.id, "-").concat(i), name: (user === null || user === void 0 ? void 0 : user.name) || (user === null || user === void 0 ? void 0 : user.id), size: avatarSize, user: user }));
        })),
        React__default["default"].createElement("div", { className: 'str-chat__typing-indicator__dots' },
            React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' }),
            React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' }),
            React__default["default"].createElement("span", { className: 'str-chat__typing-indicator__dot' }))));
};
var TypingIndicator = React__default["default"].memo(UnMemoizedTypingIndicator);

var MessageListMainPanel = function (_a) {
    var children = _a.children;
    var themeVersion = useChatContext('MessageListMainPanel').themeVersion;
    if (themeVersion === '2')
        return React__default["default"].createElement("div", { className: 'str-chat__main-panel-inner' }, children);
    return React__default["default"].createElement(React__default["default"].Fragment, null, children);
};

var MessageListWithContext = function (props) {
    var channel = props.channel, _a = props.disableDateSeparator, disableDateSeparator = _a === void 0 ? false : _a, groupStyles = props.groupStyles, _b = props.hideDeletedMessages, hideDeletedMessages = _b === void 0 ? false : _b, _c = props.hideNewMessageSeparator, hideNewMessageSeparator = _c === void 0 ? false : _c, _d = props.messageActions, messageActions = _d === void 0 ? Object.keys(MESSAGE_ACTIONS) : _d, _e = props.messages, messages = _e === void 0 ? [] : _e, notifications = props.notifications, _f = props.noGroupByUser, noGroupByUser = _f === void 0 ? false : _f, _g = props.pinPermissions, pinPermissions = _g === void 0 ? defaultPinPermissions : _g, // @deprecated in favor of `channelCapabilities` - TODO: remove in next major release
    _h = props.returnAllReadData, // @deprecated in favor of `channelCapabilities` - TODO: remove in next major release
    returnAllReadData = _h === void 0 ? false : _h, _j = props.threadList, threadList = _j === void 0 ? false : _j, _k = props.unsafeHTML, unsafeHTML = _k === void 0 ? false : _k, headerPosition = props.headerPosition, read = props.read, _l = props.messageLimit, messageLimit = _l === void 0 ? 100 : _l, loadMoreCallback = props.loadMore, loadMoreNewerCallback = props.loadMoreNewer, _m = props.hasMoreNewer, hasMoreNewer = _m === void 0 ? false : _m, suppressAutoscroll = props.suppressAutoscroll, highlightedMessageId = props.highlightedMessageId, _o = props.jumpToLatestMessage, jumpToLatestMessage = _o === void 0 ? function () { return Promise.resolve(); } : _o;
    var _p = React__default["default"].useState(null), listElement = _p[0], setListElement = _p[1];
    var _q = React__default["default"].useState(null), ulElement = _q[0], setUlElement = _q[1];
    var customClasses = useChatContext('MessageList').customClasses;
    var _r = useComponentContext('MessageList'), _s = _r.EmptyStateIndicator, EmptyStateIndicator$1 = _s === void 0 ? EmptyStateIndicator : _s, _t = _r.LoadingIndicator, LoadingIndicator$1 = _t === void 0 ? LoadingIndicator : _t, _u = _r.MessageListNotifications, MessageListNotifications$1 = _u === void 0 ? MessageListNotifications : _u, _v = _r.MessageNotification, MessageNotification$1 = _v === void 0 ? MessageNotification : _v, _w = _r.TypingIndicator, TypingIndicator$1 = _w === void 0 ? TypingIndicator : _w;
    var _x = useScrollLocationLogic({
        hasMoreNewer: hasMoreNewer,
        listElement: listElement,
        messages: messages,
        scrolledUpThreshold: props.scrolledUpThreshold,
        suppressAutoscroll: suppressAutoscroll,
    }), hasNewMessages = _x.hasNewMessages, isMessageListScrolledToBottom = _x.isMessageListScrolledToBottom, onMessageLoadCaptured = _x.onMessageLoadCaptured, onScroll = _x.onScroll, scrollToBottom = _x.scrollToBottom, wrapperRect = _x.wrapperRect;
    var _y = useEnrichedMessages({
        channel: channel,
        disableDateSeparator: disableDateSeparator,
        groupStyles: groupStyles,
        headerPosition: headerPosition,
        hideDeletedMessages: hideDeletedMessages,
        hideNewMessageSeparator: hideNewMessageSeparator,
        messages: messages,
        noGroupByUser: noGroupByUser,
    }), messageGroupStyles = _y.messageGroupStyles, enrichedMessages = _y.messages;
    var elements = useMessageListElements({
        enrichedMessages: enrichedMessages,
        internalMessageProps: {
            additionalMessageInputProps: props.additionalMessageInputProps,
            closeReactionSelectorOnClick: props.closeReactionSelectorOnClick,
            customMessageActions: props.customMessageActions,
            disableQuotedMessages: props.disableQuotedMessages,
            formatDate: props.formatDate,
            getDeleteMessageErrorNotification: props.getDeleteMessageErrorNotification,
            getFlagMessageErrorNotification: props.getFlagMessageErrorNotification,
            getFlagMessageSuccessNotification: props.getFlagMessageSuccessNotification,
            getMuteUserErrorNotification: props.getMuteUserErrorNotification,
            getMuteUserSuccessNotification: props.getMuteUserSuccessNotification,
            getPinMessageErrorNotification: props.getPinMessageErrorNotification,
            Message: props.Message,
            messageActions: messageActions,
            messageListRect: wrapperRect,
            onlySenderCanEdit: props.onlySenderCanEdit,
            onMentionsClick: props.onMentionsClick,
            onMentionsHover: props.onMentionsHover,
            onUserClick: props.onUserClick,
            onUserHover: props.onUserHover,
            openThread: props.openThread,
            pinPermissions: pinPermissions,
            renderText: props.renderText,
            retrySendMessage: props.retrySendMessage,
            unsafeHTML: unsafeHTML,
        },
        messageGroupStyles: messageGroupStyles,
        onMessageLoadCaptured: onMessageLoadCaptured,
        read: read,
        returnAllReadData: returnAllReadData,
        threadList: threadList,
    });
    var messageListClass = (customClasses === null || customClasses === void 0 ? void 0 : customClasses.messageList) || 'str-chat__list';
    var threadListClass = threadList
        ? (customClasses === null || customClasses === void 0 ? void 0 : customClasses.threadList) || 'str-chat__list--thread str-chat__thread-list'
        : '';
    var loadMore = React__default["default"].useCallback(function () {
        if (loadMoreCallback) {
            loadMoreCallback(messageLimit);
        }
    }, [loadMoreCallback, messageLimit]);
    var loadMoreNewer = React__default["default"].useCallback(function () {
        if (loadMoreNewerCallback) {
            loadMoreNewerCallback(messageLimit);
        }
    }, [loadMoreNewerCallback, messageLimit]);
    var scrollToBottomFromNotification = React__default["default"].useCallback(function () { return __awaiter$1(void 0, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!hasMoreNewer) return [3 /*break*/, 2];
                    return [4 /*yield*/, jumpToLatestMessage()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    scrollToBottom();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [scrollToBottom, hasMoreNewer]);
    React__default["default"].useLayoutEffect(function () {
        if (highlightedMessageId) {
            var element = ulElement === null || ulElement === void 0 ? void 0 : ulElement.querySelector("[data-message-id='".concat(highlightedMessageId, "']"));
            element === null || element === void 0 ? void 0 : element.scrollIntoView({ block: 'center' });
        }
    }, [highlightedMessageId]);
    var showEmptyStateIndicator = elements.length === 0 && !threadList;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(MessageListMainPanel, null,
            React__default["default"].createElement("div", { className: "".concat(messageListClass, " ").concat(threadListClass), onScroll: onScroll, ref: setListElement, tabIndex: 0 }, showEmptyStateIndicator ? (React__default["default"].createElement(EmptyStateIndicator$1, { key: 'empty-state-indicator', listType: threadList ? 'thread' : 'message' })) : (React__default["default"].createElement(InfiniteScroll, __assign({ className: 'str-chat__reverse-infinite-scroll  str-chat__message-list-scroll', "data-testid": 'reverse-infinite-scroll', hasMore: props.hasMore, hasMoreNewer: props.hasMoreNewer, head: props.head, isLoading: props.loadingMore, loader: React__default["default"].createElement("div", { className: 'str-chat__list__loading', key: 'loading-indicator' }, props.loadingMore && React__default["default"].createElement(LoadingIndicator$1, { size: 20 })), loadMore: loadMore, loadMoreNewer: loadMoreNewer }, props.internalInfiniteScrollProps),
                React__default["default"].createElement("ul", { className: 'str-chat__ul', ref: setUlElement }, elements),
                React__default["default"].createElement(TypingIndicator$1, { threadList: threadList }),
                React__default["default"].createElement("div", { key: 'bottom' }))))),
        React__default["default"].createElement(MessageListNotifications$1, { hasNewMessages: hasNewMessages, isMessageListScrolledToBottom: isMessageListScrolledToBottom, isNotAtLatestMessageSet: hasMoreNewer, MessageNotification: MessageNotification$1, notifications: notifications, scrollToBottom: scrollToBottomFromNotification, threadList: threadList })));
};
/**
 * The MessageList component renders a list of Messages.
 * It is a consumer of the following contexts:
 * - [ChannelStateContext](https://getstream.io/chat/docs/sdk/react/contexts/channel_state_context/)
 * - [ChannelActionContext](https://getstream.io/chat/docs/sdk/react/contexts/channel_action_context/)
 * - [ComponentContext](https://getstream.io/chat/docs/sdk/react/contexts/component_context/)
 * - [TypingContext](https://getstream.io/chat/docs/sdk/react/contexts/typing_context/)
 */
var MessageList = function (props) {
    var _a = useChannelActionContext('MessageList'), jumpToLatestMessage = _a.jumpToLatestMessage, loadMore = _a.loadMore, loadMoreNewer = _a.loadMoreNewer;
    var _b = useChannelStateContext('MessageList'); _b.members; // eslint-disable-line @typescript-eslint/no-unused-vars
    _b.mutes; // eslint-disable-line @typescript-eslint/no-unused-vars
    _b.watchers; // eslint-disable-line @typescript-eslint/no-unused-vars
    var restChannelStateContext = __rest(_b, ["members", "mutes", "watchers"]);
    return (React__default["default"].createElement(MessageListWithContext, __assign({ jumpToLatestMessage: jumpToLatestMessage, loadMore: loadMore, loadMoreNewer: loadMoreNewer }, restChannelStateContext, props)));
};

var ArrowDown = function (_a) {
    var className = _a.className, color = _a.color;
    return (React__default["default"].createElement("svg", { className: className, "data-testid": 'arrow-down', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { d: 'M7.41 8.29504L12 12.875L16.59 8.29504L18 9.70504L12 15.705L6 9.70504L7.41 8.29504Z', fill: color || 'var(--primary-color)' })));
};

var UnMemoizedScrollToBottomButton = function (props) {
    var isMessageListScrolledToBottom = props.isMessageListScrolledToBottom, onClick = props.onClick, threadList = props.threadList;
    var _a = useChatContext(), activeChannel = _a.channel, client = _a.client;
    var thread = useChannelStateContext().thread;
    var _b = React.useState((activeChannel === null || activeChannel === void 0 ? void 0 : activeChannel.countUnread()) || 0), countUnread = _b[0], setCountUnread = _b[1];
    var _c = React.useState((thread === null || thread === void 0 ? void 0 : thread.reply_count) || 0), replyCount = _c[0], setReplyCount = _c[1];
    var observedEvent = threadList ? 'message.updated' : 'message.new';
    React.useEffect(function () {
        var handleEvent = function (event) {
            var _a, _b, _c, _d, _e;
            var newMessageInAnotherChannel = event.cid !== (activeChannel === null || activeChannel === void 0 ? void 0 : activeChannel.cid);
            var newMessageIsMine = ((_a = event.user) === null || _a === void 0 ? void 0 : _a.id) === ((_b = client.user) === null || _b === void 0 ? void 0 : _b.id);
            var isThreadOpen = !!thread;
            var newMessageIsReply = !!((_c = event.message) === null || _c === void 0 ? void 0 : _c.parent_id);
            var dontIncreaseMainListCounterOnNewReply = isThreadOpen && !threadList && newMessageIsReply;
            if (isMessageListScrolledToBottom ||
                newMessageInAnotherChannel ||
                newMessageIsMine ||
                dontIncreaseMainListCounterOnNewReply) {
                return;
            }
            if (event.type === 'message.new') {
                // cannot rely on channel.countUnread because active channel is automatically marked read
                setCountUnread(function (prev) { return prev + 1; });
            }
            else if (((_d = event.message) === null || _d === void 0 ? void 0 : _d.id) === (thread === null || thread === void 0 ? void 0 : thread.id)) {
                var newReplyCount_1 = ((_e = event.message) === null || _e === void 0 ? void 0 : _e.reply_count) || 0;
                setCountUnread(function () { return newReplyCount_1 - replyCount; });
            }
        };
        client.on(observedEvent, handleEvent);
        return function () {
            client.off(observedEvent, handleEvent);
        };
    }, [activeChannel, isMessageListScrolledToBottom, observedEvent, replyCount, thread]);
    React.useEffect(function () {
        if (isMessageListScrolledToBottom) {
            setCountUnread(0);
            setReplyCount((thread === null || thread === void 0 ? void 0 : thread.reply_count) || 0);
        }
    }, [isMessageListScrolledToBottom, thread]);
    if (isMessageListScrolledToBottom)
        return null;
    return (React__default["default"].createElement("div", { className: 'str-chat__jump-to-latest-message' },
        React__default["default"].createElement("button", { "aria-live": 'polite', className: "\n        str-chat__message-notification-right\n        str-chat__message-notification-scroll-to-latest\n        str-chat__circle-fab\n      ", "data-testid": 'message-notification', onClick: onClick },
            React__default["default"].createElement(ArrowDown, null),
            countUnread > 0 && (React__default["default"].createElement("div", { className: clsx('str-chat__message-notification', 'str-chat__message-notification-scroll-to-latest-unread-count', 'str-chat__jump-to-latest-unread-count'), "data-testid": 'unread-message-notification-counter' }, countUnread)))));
};
var ScrollToBottomButton = React__default["default"].memo(UnMemoizedScrollToBottomButton);

var useGiphyPreview = function (separateGiphyPreview) {
    var _a = React.useState(), giphyPreviewMessage = _a[0], setGiphyPreviewMessage = _a[1];
    var client = useChatContext('useGiphyPreview').client;
    React.useEffect(function () {
        var handleEvent = function (event) {
            var message = event.message, user = event.user;
            if ((message === null || message === void 0 ? void 0 : message.command) === 'giphy' && (user === null || user === void 0 ? void 0 : user.id) === client.userID) {
                setGiphyPreviewMessage(undefined);
            }
        };
        if (separateGiphyPreview)
            client.on('message.new', handleEvent);
        return function () { return client.off('message.new', handleEvent); };
    }, [separateGiphyPreview]);
    return { giphyPreviewMessage: giphyPreviewMessage, setGiphyPreviewMessage: setGiphyPreviewMessage };
};

function useNewMessageNotification(messages, currentUserId, hasMoreNewer) {
    var _a = React.useState(false), newMessagesNotification = _a[0], setNewMessagesNotification = _a[1];
    var _b = React.useState(true), isMessageListScrolledToBottom = _b[0], setIsMessageListScrolledToBottom = _b[1];
    /**
     * use the flag to avoid the initial "new messages" quick blink
     */
    var didMount = React.useRef(false);
    var lastMessageId = React.useRef('');
    var atBottom = React.useRef(false);
    React.useEffect(function () {
        var _a;
        if (hasMoreNewer) {
            setNewMessagesNotification(true);
            return;
        }
        /* handle scrolling behavior for new messages */
        if (!(messages === null || messages === void 0 ? void 0 : messages.length))
            return;
        var lastMessage = messages[messages.length - 1];
        var prevMessageId = lastMessageId.current;
        lastMessageId.current = lastMessage.id || ''; // update last message id
        /* do nothing if new messages are loaded from top(loadMore)  */
        if (lastMessage.id === prevMessageId)
            return;
        /* if list is already at the bottom return, followOutput will do the job */
        if (atBottom.current)
            return;
        /* if the new message belongs to current user scroll to bottom */
        if (((_a = lastMessage.user) === null || _a === void 0 ? void 0 : _a.id) !== currentUserId && didMount.current) {
            /* otherwise just show newMessage notification  */
            setNewMessagesNotification(true);
        }
        didMount.current = true;
    }, [currentUserId, messages, hasMoreNewer]);
    return {
        atBottom: atBottom,
        isMessageListScrolledToBottom: isMessageListScrolledToBottom,
        newMessagesNotification: newMessagesNotification,
        setIsMessageListScrolledToBottom: setIsMessageListScrolledToBottom,
        setNewMessagesNotification: setNewMessagesNotification,
    };
}

function usePrependedMessagesCount(messages, hasDateSeparator) {
    var _a;
    var firstRealMessageIndex = hasDateSeparator ? 1 : 0;
    var currentFirstMessageId = (_a = messages === null || messages === void 0 ? void 0 : messages[firstRealMessageIndex]) === null || _a === void 0 ? void 0 : _a.id;
    var firstMessageId = React.useRef(currentFirstMessageId);
    var earliestMessageId = React.useRef(currentFirstMessageId);
    var previousNumItemsPrepended = React.useRef(0);
    var numItemsPrepended = React.useMemo(function () {
        if (!messages || !messages.length) {
            return 0;
        }
        // if no new messages were prepended, return early (same amount as before)
        if (currentFirstMessageId === earliestMessageId.current) {
            return previousNumItemsPrepended.current;
        }
        if (!firstMessageId.current) {
            firstMessageId.current = currentFirstMessageId;
        }
        earliestMessageId.current = currentFirstMessageId;
        // if new messages were prepended, find out how many
        // start with this number because there cannot be fewer prepended items than before
        for (var i = previousNumItemsPrepended.current; i < messages.length; i += 1) {
            if (messages[i].id === firstMessageId.current) {
                previousNumItemsPrepended.current = i;
                return i;
            }
        }
        // if no match has found, we have jumped
        firstMessageId.current = currentFirstMessageId;
        return 0;
        // TODO: there's a bug here, the messages prop is the same array instance (something mutates it)
        // that's why the second dependency is necessary
    }, [messages, messages === null || messages === void 0 ? void 0 : messages.length]);
    return numItemsPrepended;
}

function useShouldForceScrollToBottom(messages, currentUserId) {
    var lastFocusedOwnMessage = React.useRef('');
    var initialFocusRegistered = React.useRef(false);
    function recheckForNewOwnMessage() {
        var _a;
        if (messages && messages.length > 0) {
            var lastMessage = messages[messages.length - 1];
            if (((_a = lastMessage.user) === null || _a === void 0 ? void 0 : _a.id) === currentUserId &&
                lastFocusedOwnMessage.current !== lastMessage.id) {
                lastFocusedOwnMessage.current = lastMessage.id;
                return true;
            }
        }
        return false;
    }
    React.useEffect(function () {
        if (messages && messages.length && !initialFocusRegistered.current) {
            initialFocusRegistered.current = true;
            recheckForNewOwnMessage();
        }
    }, [messages, messages === null || messages === void 0 ? void 0 : messages.length]);
    return recheckForNewOwnMessage;
}

var PREPEND_OFFSET = Math.pow(10, 7);
function captureResizeObserverExceededError(e) {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
        e.message === 'ResizeObserver loop limit exceeded') {
        e.stopImmediatePropagation();
    }
}
function useCaptureResizeObserverExceededError() {
    React.useEffect(function () {
        window.addEventListener('error', captureResizeObserverExceededError);
        return function () {
            window.removeEventListener('error', captureResizeObserverExceededError);
        };
    }, []);
}
function fractionalItemSize(element) {
    return element.getBoundingClientRect().height;
}
function findMessageIndex(messages, id) {
    return messages.findIndex(function (message) { return message.id === id; });
}
function calculateInitialTopMostItemIndex(messages, highlightedMessageId) {
    if (highlightedMessageId) {
        var index = findMessageIndex(messages, highlightedMessageId);
        if (index !== -1) {
            return { align: 'center', index: index };
        }
    }
    return messages.length - 1;
}
var VirtualizedMessageListWithContext = function (props) {
    var additionalVirtuosoProps = props.additionalVirtuosoProps, channel = props.channel, closeReactionSelectorOnClick = props.closeReactionSelectorOnClick, customMessageRenderer = props.customMessageRenderer, defaultItemHeight = props.defaultItemHeight, _a = props.disableDateSeparator, disableDateSeparator = _a === void 0 ? true : _a, groupStyles = props.groupStyles, hasMore = props.hasMore, hasMoreNewer = props.hasMoreNewer, head = props.head, _b = props.hideDeletedMessages, hideDeletedMessages = _b === void 0 ? false : _b, _c = props.hideNewMessageSeparator, hideNewMessageSeparator = _c === void 0 ? false : _c, highlightedMessageId = props.highlightedMessageId, jumpToLatestMessage = props.jumpToLatestMessage, loadingMore = props.loadingMore, loadMore = props.loadMore, loadMoreNewer = props.loadMoreNewer, propMessage = props.Message, _d = props.messageLimit, messageLimit = _d === void 0 ? 100 : _d, messages = props.messages, notifications = props.notifications, 
    // TODO: refactor to scrollSeekPlaceHolderConfiguration and components.ScrollSeekPlaceholder, like the Virtuoso Component
    _e = props.overscan, 
    // TODO: refactor to scrollSeekPlaceHolderConfiguration and components.ScrollSeekPlaceholder, like the Virtuoso Component
    overscan = _e === void 0 ? 0 : _e, scrollSeekPlaceHolder = props.scrollSeekPlaceHolder, _f = props.scrollToLatestMessageOnFocus, scrollToLatestMessageOnFocus = _f === void 0 ? false : _f, _g = props.separateGiphyPreview, separateGiphyPreview = _g === void 0 ? false : _g, _h = props.shouldGroupByUser, shouldGroupByUser = _h === void 0 ? false : _h, _j = props.stickToBottomScrollBehavior, stickToBottomScrollBehavior = _j === void 0 ? 'smooth' : _j, suppressAutoscroll = props.suppressAutoscroll, threadList = props.threadList;
    // Stops errors generated from react-virtuoso to bubble up
    // to Sentry or other tracking tools.
    useCaptureResizeObserverExceededError();
    var _k = useComponentContext('VirtualizedMessageList'), _l = _k.DateSeparator, DateSeparator$1 = _l === void 0 ? DateSeparator : _l, _m = _k.EmptyStateIndicator, EmptyStateIndicator$1 = _m === void 0 ? EmptyStateIndicator : _m, _o = _k.GiphyPreviewMessage, GiphyPreviewMessage$1 = _o === void 0 ? GiphyPreviewMessage : _o, _p = _k.LoadingIndicator, LoadingIndicator$1 = _p === void 0 ? LoadingIndicator : _p, _q = _k.MessageListNotifications, MessageListNotifications$1 = _q === void 0 ? MessageListNotifications : _q, _r = _k.MessageNotification, MessageNotification$1 = _r === void 0 ? MessageNotification : _r, _s = _k.MessageSystem, MessageSystem = _s === void 0 ? EventComponent : _s, _t = _k.TypingIndicator, TypingIndicator = _t === void 0 ? null : _t, _u = _k.VirtualMessage, contextMessage = _u === void 0 ? MessageSimple : _u;
    var _v = useChatContext('VirtualizedMessageList'), client = _v.client, customClasses = _v.customClasses;
    var lastRead = React.useMemo(function () { var _a; return (_a = channel.lastRead) === null || _a === void 0 ? void 0 : _a.call(channel); }, [channel]);
    var MessageUIComponent = propMessage || contextMessage;
    var _w = useGiphyPreview(separateGiphyPreview), giphyPreviewMessage = _w.giphyPreviewMessage, setGiphyPreviewMessage = _w.setGiphyPreviewMessage;
    var processedMessages = React.useMemo(function () {
        if (typeof messages === 'undefined') {
            return [];
        }
        if (disableDateSeparator &&
            !hideDeletedMessages &&
            hideNewMessageSeparator &&
            !separateGiphyPreview) {
            return messages;
        }
        return processMessages({
            enableDateSeparator: !disableDateSeparator,
            hideDeletedMessages: hideDeletedMessages,
            hideNewMessageSeparator: hideNewMessageSeparator,
            lastRead: lastRead,
            messages: messages,
            setGiphyPreviewMessage: setGiphyPreviewMessage,
            userId: client.userID || '',
        });
    }, [
        disableDateSeparator,
        hideDeletedMessages,
        hideNewMessageSeparator,
        lastRead,
        messages,
        messages === null || messages === void 0 ? void 0 : messages.length,
        client.userID,
    ]);
    var groupStylesFn = groupStyles || getGroupStyles;
    var messageGroupStyles = React.useMemo(function () {
        return processedMessages.reduce(function (acc, message, i) {
            var style = groupStylesFn(message, processedMessages[i - 1], processedMessages[i + 1], !shouldGroupByUser);
            if (style)
                acc[message.id] = style;
            return acc;
        }, {});
    }, [processedMessages.length, shouldGroupByUser]);
    var virtuoso = React.useRef(null);
    var _x = useNewMessageNotification(processedMessages, client.userID, hasMoreNewer), atBottom = _x.atBottom, isMessageListScrolledToBottom = _x.isMessageListScrolledToBottom, newMessagesNotification = _x.newMessagesNotification, setIsMessageListScrolledToBottom = _x.setIsMessageListScrolledToBottom, setNewMessagesNotification = _x.setNewMessagesNotification;
    var scrollToBottom = React.useCallback(function () { return __awaiter$1(void 0, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!hasMoreNewer) return [3 /*break*/, 2];
                    return [4 /*yield*/, jumpToLatestMessage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (virtuoso.current) {
                        virtuoso.current.scrollToIndex(processedMessages.length - 1);
                    }
                    setNewMessagesNotification(false);
                    return [2 /*return*/];
            }
        });
    }); }, [
        virtuoso,
        processedMessages,
        setNewMessagesNotification,
        processedMessages.length,
        hasMoreNewer,
        jumpToLatestMessage,
    ]);
    var _y = React__default["default"].useState(false), newMessagesReceivedInBackground = _y[0], setNewMessagesReceivedInBackground = _y[1];
    var resetNewMessagesReceivedInBackground = React.useCallback(function () {
        setNewMessagesReceivedInBackground(false);
    }, []);
    React.useEffect(function () {
        setNewMessagesReceivedInBackground(true);
    }, [messages]);
    var scrollToBottomIfConfigured = React.useCallback(function (event) {
        if (scrollToLatestMessageOnFocus && event.target === window) {
            if (newMessagesReceivedInBackground) {
                setTimeout(scrollToBottom, 100);
            }
        }
    }, [scrollToLatestMessageOnFocus, scrollToBottom, newMessagesReceivedInBackground]);
    React.useEffect(function () {
        if (typeof window !== 'undefined') {
            window.addEventListener('focus', scrollToBottomIfConfigured);
            window.addEventListener('blur', resetNewMessagesReceivedInBackground);
        }
        return function () {
            window.removeEventListener('focus', scrollToBottomIfConfigured);
            window.removeEventListener('blur', resetNewMessagesReceivedInBackground);
        };
    }, [scrollToBottomIfConfigured]);
    var numItemsPrepended = usePrependedMessagesCount(processedMessages, !disableDateSeparator);
    /**
     * Logic to update the key of the virtuoso component when the list jumps to a new location.
     */
    var _z = React.useState(+new Date()), messageSetKey = _z[0], setMessageSetKey = _z[1];
    var firstMessageId = React.useRef();
    React.useEffect(function () {
        var _a;
        var continuousSet = messages === null || messages === void 0 ? void 0 : messages.find(function (message) { return message.id === firstMessageId.current; });
        if (!continuousSet) {
            setMessageSetKey(+new Date());
        }
        firstMessageId.current = (_a = messages === null || messages === void 0 ? void 0 : messages[0]) === null || _a === void 0 ? void 0 : _a.id;
    }, [messages]);
    var shouldForceScrollToBottom = useShouldForceScrollToBottom(processedMessages, client.userID);
    var followOutput = function (isAtBottom) {
        if (hasMoreNewer || suppressAutoscroll) {
            return false;
        }
        if (shouldForceScrollToBottom()) {
            return isAtBottom ? stickToBottomScrollBehavior : 'auto';
        }
        // a message from another user has been received - don't scroll to bottom unless already there
        return isAtBottom ? stickToBottomScrollBehavior : false;
    };
    var messageRenderer = React.useCallback(function (messageList, virtuosoIndex) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var streamMessageIndex = virtuosoIndex + numItemsPrepended - PREPEND_OFFSET;
        // use custom renderer supplied by client if present and skip the rest
        if (customMessageRenderer) {
            return customMessageRenderer(messageList, streamMessageIndex);
        }
        var message = messageList[streamMessageIndex];
        if (message.customType === CUSTOM_MESSAGE_TYPE.date && message.date && isDate(message.date)) {
            return React__default["default"].createElement(DateSeparator$1, { date: message.date, unread: message.unread });
        }
        if (!message)
            return React__default["default"].createElement("div", { style: { height: '1px' } }); // returning null or zero height breaks the virtuoso
        if (message.type === 'system') {
            return React__default["default"].createElement(MessageSystem, { message: message });
        }
        var groupedByUser = shouldGroupByUser &&
            streamMessageIndex > 0 &&
            ((_a = message.user) === null || _a === void 0 ? void 0 : _a.id) === ((_b = messageList[streamMessageIndex - 1].user) === null || _b === void 0 ? void 0 : _b.id);
        var firstOfGroup = shouldGroupByUser && ((_c = message.user) === null || _c === void 0 ? void 0 : _c.id) !== ((_e = (_d = messageList[streamMessageIndex - 1]) === null || _d === void 0 ? void 0 : _d.user) === null || _e === void 0 ? void 0 : _e.id);
        var endOfGroup = shouldGroupByUser && ((_f = message.user) === null || _f === void 0 ? void 0 : _f.id) !== ((_h = (_g = messageList[streamMessageIndex + 1]) === null || _g === void 0 ? void 0 : _g.user) === null || _h === void 0 ? void 0 : _h.id);
        return (React__default["default"].createElement(Message, { autoscrollToBottom: (_j = virtuoso.current) === null || _j === void 0 ? void 0 : _j.autoscrollToBottom, closeReactionSelectorOnClick: closeReactionSelectorOnClick, customMessageActions: props.customMessageActions, endOfGroup: endOfGroup, firstOfGroup: firstOfGroup, groupedByUser: groupedByUser, message: message, Message: MessageUIComponent, messageActions: props.messageActions }));
    }, [customMessageRenderer, shouldGroupByUser, numItemsPrepended]);
    var Item = React.useMemo(function () {
        // using 'display: inline-block'
        // traps CSS margins of the item elements, preventing incorrect item measurements
        var Item = function (props) {
            var _a;
            var streamMessageIndex = props['data-item-index'] + numItemsPrepended - PREPEND_OFFSET;
            var message = processedMessages[streamMessageIndex];
            var groupStyles = messageGroupStyles[message.id] || '';
            return (React__default["default"].createElement("div", __assign({}, props, { className: (customClasses === null || customClasses === void 0 ? void 0 : customClasses.virtualMessage) ||
                    clsx('str-chat__virtual-list-message-wrapper str-chat__li', (_a = {},
                        _a["str-chat__li--".concat(groupStyles)] = groupStyles,
                        _a)) })));
        };
        return Item;
    }, [
        customClasses === null || customClasses === void 0 ? void 0 : customClasses.virtualMessage,
        Object.keys(messageGroupStyles),
        numItemsPrepended,
        processedMessages.length,
    ]);
    var virtuosoComponents = React.useMemo(function () {
        var EmptyPlaceholder = function () { return (React__default["default"].createElement(React__default["default"].Fragment, null, EmptyStateIndicator$1 && (React__default["default"].createElement(EmptyStateIndicator$1, { listType: threadList ? 'thread' : 'message' })))); };
        var Header = function () {
            return loadingMore ? (React__default["default"].createElement("div", { className: 'str-chat__virtual-list__loading' },
                React__default["default"].createElement(LoadingIndicator$1, { size: 20 }))) : (head || null);
        };
        var Footer = function () {
            return TypingIndicator ? React__default["default"].createElement(TypingIndicator, { avatarSize: 24 }) : React__default["default"].createElement(React__default["default"].Fragment, null);
        };
        return {
            EmptyPlaceholder: EmptyPlaceholder,
            Footer: Footer,
            Header: Header,
            Item: Item,
        };
    }, [loadingMore, head, Item]);
    var atBottomStateChange = function (isAtBottom) {
        atBottom.current = isAtBottom;
        setIsMessageListScrolledToBottom(isAtBottom);
        if (isAtBottom && newMessagesNotification) {
            setNewMessagesNotification(false);
        }
    };
    var startReached = function () {
        if (hasMore && loadMore) {
            loadMore(messageLimit);
        }
    };
    var endReached = function () {
        if (hasMoreNewer && loadMoreNewer) {
            loadMoreNewer(messageLimit);
        }
    };
    React.useEffect(function () {
        var _a;
        if (highlightedMessageId) {
            var index = findMessageIndex(processedMessages, highlightedMessageId);
            if (index !== -1) {
                (_a = virtuoso.current) === null || _a === void 0 ? void 0 : _a.scrollToIndex({ align: 'center', index: index });
            }
        }
    }, [highlightedMessageId]);
    if (!processedMessages)
        return null;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(MessageListMainPanel, null,
            React__default["default"].createElement("div", { className: (customClasses === null || customClasses === void 0 ? void 0 : customClasses.virtualizedMessageList) || 'str-chat__virtual-list' },
                React__default["default"].createElement(reactVirtuoso.Virtuoso, __assign({ atBottomStateChange: atBottomStateChange, atBottomThreshold: 200, className: 'str-chat__message-list-scroll', components: virtuosoComponents, computeItemKey: function (index) {
                        return processedMessages[numItemsPrepended + index - PREPEND_OFFSET].id;
                    }, endReached: endReached, firstItemIndex: PREPEND_OFFSET - numItemsPrepended, followOutput: followOutput, increaseViewportBy: { bottom: 200, top: 0 }, initialTopMostItemIndex: calculateInitialTopMostItemIndex(processedMessages, highlightedMessageId), itemContent: function (i) { return messageRenderer(processedMessages, i); }, itemSize: fractionalItemSize, key: messageSetKey, overscan: overscan, ref: virtuoso, startReached: startReached, style: { overflowX: 'hidden' }, totalCount: processedMessages.length }, additionalVirtuosoProps, (scrollSeekPlaceHolder ? { scrollSeek: scrollSeekPlaceHolder } : {}), (defaultItemHeight ? { defaultItemHeight: defaultItemHeight } : {}))))),
        React__default["default"].createElement(MessageListNotifications$1, { hasNewMessages: newMessagesNotification, isMessageListScrolledToBottom: isMessageListScrolledToBottom, isNotAtLatestMessageSet: hasMoreNewer, MessageNotification: MessageNotification$1, notifications: notifications, scrollToBottom: scrollToBottom, threadList: threadList }),
        giphyPreviewMessage && React__default["default"].createElement(GiphyPreviewMessage$1, { message: giphyPreviewMessage })));
};
/**
 * The VirtualizedMessageList component renders a list of messages in a virtualized list.
 * It is a consumer of the React contexts set in [Channel](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Channel/Channel.tsx).
 */
function VirtualizedMessageList(props) {
    var _a = useChannelActionContext('VirtualizedMessageList'), jumpToLatestMessage = _a.jumpToLatestMessage, loadMore = _a.loadMore, loadMoreNewer = _a.loadMoreNewer;
    var _b = useChannelStateContext('VirtualizedMessageList'), channel = _b.channel, hasMore = _b.hasMore, hasMoreNewer = _b.hasMoreNewer, highlightedMessageId = _b.highlightedMessageId, loadingMore = _b.loadingMore, loadingMoreNewer = _b.loadingMoreNewer, contextMessages = _b.messages, notifications = _b.notifications, suppressAutoscroll = _b.suppressAutoscroll;
    var messages = props.messages || contextMessages;
    return (React__default["default"].createElement(VirtualizedMessageListWithContext, __assign({ channel: channel, hasMore: !!hasMore, hasMoreNewer: !!hasMoreNewer, highlightedMessageId: highlightedMessageId, jumpToLatestMessage: jumpToLatestMessage, loadingMore: !!loadingMore, loadingMoreNewer: !!loadingMoreNewer, loadMore: loadMore, loadMoreNewer: loadMoreNewer, messages: messages, notifications: notifications, suppressAutoscroll: suppressAutoscroll }, props)));
}

var CloseIcon = function (_a) {
    var title = _a.title;
    var t = useTranslationContext('CloseIcon').t;
    return (React__default["default"].createElement("svg", { "data-testid": 'close-no-outline', fill: 'none', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("title", null, title !== null && title !== void 0 ? title : t('Close')),
        React__default["default"].createElement("path", { d: 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z', fill: 'black' })));
};

var ThreadHeader = function (props) {
    var closeThread = props.closeThread, overrideImage = props.overrideImage, overrideTitle = props.overrideTitle;
    var t = useTranslationContext('ThreadHeader').t;
    var channel = useChannelStateContext('').channel;
    var displayTitle = useChannelPreviewInfo({
        channel: channel,
        overrideImage: overrideImage,
        overrideTitle: overrideTitle,
    }).displayTitle;
    return (React__default["default"].createElement("div", { className: 'str-chat__thread-header' },
        React__default["default"].createElement("div", { className: 'str-chat__thread-header-details' },
            React__default["default"].createElement("div", { className: 'str-chat__thread-header-title' }, t('Thread')),
            React__default["default"].createElement("div", { className: 'str-chat__thread-header-subtitle' }, displayTitle)),
        React__default["default"].createElement("button", { "aria-label": 'Close thread', className: 'str-chat__square-button str-chat__close-thread-button', "data-testid": 'close-button', onClick: function (event) { return closeThread(event); } },
            React__default["default"].createElement(CloseIcon, null))));
};

var ThreadStart = function () {
    var thread = useChannelStateContext('ThreadStart').thread;
    var t = useTranslationContext('ThreadStart').t;
    if (!(thread === null || thread === void 0 ? void 0 : thread.reply_count))
        return null;
    return (React__default["default"].createElement("div", { className: 'str-chat__thread-start' }, t('replyCount', { count: thread.reply_count })));
};

var ThreadHead = function (props) {
    var _a = useComponentContext('ThreadHead').ThreadStart, ThreadStart$1 = _a === void 0 ? ThreadStart : _a;
    return (React__default["default"].createElement("div", { className: 'str-chat__parent-message-li' },
        React__default["default"].createElement(Message, __assign({ initialMessage: true, threadList: true }, props)),
        React__default["default"].createElement(ThreadStart$1, null)));
};

/**
 * The Thread component renders a parent Message with a list of replies
 */
var Thread = function (props) {
    var _a = useChannelStateContext('Thread'), channel = _a.channel, channelConfig = _a.channelConfig, thread = _a.thread;
    if (!thread || (channelConfig === null || channelConfig === void 0 ? void 0 : channelConfig.replies) === false)
        return null;
    // The wrapper ensures a key variable is set and the component recreates on thread switch
    return React__default["default"].createElement(ThreadInner, __assign({}, props, { key: "thread-".concat(thread.id, "-").concat(channel === null || channel === void 0 ? void 0 : channel.cid) }));
};
var ThreadInner = function (props) {
    var _a, _b;
    var additionalMessageInputProps = props.additionalMessageInputProps, additionalMessageListProps = props.additionalMessageListProps, additionalParentMessageProps = props.additionalParentMessageProps, additionalVirtualizedMessageListProps = props.additionalVirtualizedMessageListProps, _c = props.autoFocus, autoFocus = _c === void 0 ? true : _c, _d = props.enableDateSeparator, enableDateSeparator = _d === void 0 ? false : _d, _e = props.fullWidth, fullWidth = _e === void 0 ? false : _e, PropInput = props.Input, PropMessage = props.Message, _f = props.messageActions, messageActions = _f === void 0 ? Object.keys(MESSAGE_ACTIONS) : _f, virtualized = props.virtualized;
    var _g = useChannelStateContext('Thread'), thread = _g.thread, threadHasMore = _g.threadHasMore, threadLoadingMore = _g.threadLoadingMore, threadMessages = _g.threadMessages, threadSuppressAutoscroll = _g.threadSuppressAutoscroll;
    var _h = useChannelActionContext('Thread'), closeThread = _h.closeThread, loadMoreThread = _h.loadMoreThread;
    var _j = useChatContext('Thread'), customClasses = _j.customClasses, themeVersion = _j.themeVersion;
    var _k = useComponentContext('Thread'), ContextInput = _k.ThreadInput, ContextMessage = _k.Message, _l = _k.ThreadHead, ThreadHead$1 = _l === void 0 ? ThreadHead : _l, _m = _k.ThreadHeader, ThreadHeader$1 = _m === void 0 ? ThreadHeader : _m, VirtualMessage = _k.VirtualMessage;
    var ThreadInput = (_b = (_a = PropInput !== null && PropInput !== void 0 ? PropInput : additionalMessageInputProps === null || additionalMessageInputProps === void 0 ? void 0 : additionalMessageInputProps.Input) !== null && _a !== void 0 ? _a : ContextInput) !== null && _b !== void 0 ? _b : (themeVersion === '2' ? MessageInputFlat : MessageInputSmall);
    var ThreadMessage = PropMessage || (additionalMessageListProps === null || additionalMessageListProps === void 0 ? void 0 : additionalMessageListProps.Message);
    var FallbackMessage = virtualized && VirtualMessage ? VirtualMessage : ContextMessage;
    var MessageUIComponent = ThreadMessage || FallbackMessage;
    var ThreadMessageList = virtualized ? VirtualizedMessageList : MessageList;
    React.useEffect(function () {
        if ((thread === null || thread === void 0 ? void 0 : thread.id) && (thread === null || thread === void 0 ? void 0 : thread.reply_count)) {
            loadMoreThread();
        }
    }, []);
    if (!thread)
        return null;
    var threadClass = (customClasses === null || customClasses === void 0 ? void 0 : customClasses.thread) || 'str-chat__thread-container str-chat__thread';
    var head = (React__default["default"].createElement(ThreadHead$1, __assign({ key: thread.id, message: thread, Message: MessageUIComponent }, additionalParentMessageProps)));
    return (React__default["default"].createElement("div", { className: "".concat(threadClass, " ").concat(fullWidth ? 'str-chat__thread--full' : '') },
        React__default["default"].createElement(ThreadHeader$1, { closeThread: closeThread, thread: thread }),
        React__default["default"].createElement(ThreadMessageList, __assign({ disableDateSeparator: !enableDateSeparator, hasMore: threadHasMore, head: head, loadingMore: threadLoadingMore, loadMore: loadMoreThread, Message: MessageUIComponent, messageActions: messageActions, messages: threadMessages || [], suppressAutoscroll: threadSuppressAutoscroll, threadList: true }, (virtualized ? additionalVirtualizedMessageListProps : additionalMessageListProps))),
        React__default["default"].createElement(MessageInput, __assign({ focus: autoFocus, Input: ThreadInput, parent: thread, publishTypingEvent: false }, additionalMessageInputProps))));
};

var UnMemoizedWindow = function (props) {
    var children = props.children, _a = props.hideOnThread, hideOnThread = _a === void 0 ? false : _a;
    var thread = useChannelStateContext('Window').thread;
    return (React__default["default"].createElement("div", { className: "str-chat__main-panel   ".concat(hideOnThread && thread ? 'str-chat__main-panel--hideOnThread' : '') }, children));
};
/**
 * A UI component for conditionally displaying a Thread or Channel
 */
var Window = React__default["default"].memo(UnMemoizedWindow);

// @ts-expect-error

var DefaultEmoji = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': nimbleEmoji__default["default"]
});

// @ts-expect-error

var DefaultEmojiPicker = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': nimblePicker__default["default"]
});

exports.ATTACHMENT_GROUPS_ORDER = ATTACHMENT_GROUPS_ORDER;
exports.ActionsIcon = ActionsIcon;
exports.Attachment = Attachment;
exports.AttachmentActions = AttachmentActions;
exports.AttachmentActionsContainer = AttachmentActionsContainer;
exports.AttachmentWithinContainer = AttachmentWithinContainer;
exports.Audio = Audio;
exports.AudioContainer = AudioContainer;
exports.AutoCompleteTextarea = ReactTextareaAutocomplete;
exports.Avatar = Avatar;
exports.Card = Card;
exports.CardAudio = CardAudio;
exports.CardContainer = CardContainer;
exports.Channel = Channel;
exports.ChannelActionContext = ChannelActionContext;
exports.ChannelActionProvider = ChannelActionProvider;
exports.ChannelHeader = ChannelHeader;
exports.ChannelList = ChannelList;
exports.ChannelListMessenger = ChannelListMessenger;
exports.ChannelPreview = ChannelPreview;
exports.ChannelPreviewMessenger = ChannelPreviewMessenger;
exports.ChannelSearch = ChannelSearch;
exports.ChannelStateContext = ChannelStateContext;
exports.ChannelStateProvider = ChannelStateProvider;
exports.Chat = Chat;
exports.ChatAutoComplete = ChatAutoComplete;
exports.ChatContext = ChatContext;
exports.ChatDown = ChatDown;
exports.ChatProvider = ChatProvider;
exports.CloseIcon = CloseIcon$1;
exports.CommandItem = CommandItem;
exports.ComponentContext = ComponentContext;
exports.ComponentProvider = ComponentProvider;
exports.ConnectionStatus = ConnectionStatus;
exports.CooldownTimer = CooldownTimer;
exports.DateSeparator = DateSeparator;
exports.DefaultSuggestionList = List;
exports.DefaultSuggestionListHeader = DefaultSuggestionListHeader;
exports.DefaultSuggestionListItem = Item;
exports.DefaultTriggerProvider = DefaultTriggerProvider;
exports.DeliveredCheckIcon = DeliveredCheckIcon;
exports.DownloadIcon = DownloadIcon;
exports.EditMessageForm = EditMessageForm;
exports.EmojiContext = EmojiContext;
exports.EmojiIconLarge = EmojiIconLarge;
exports.EmojiIconSmall = EmojiIconSmall;
exports.EmojiPicker = EmojiPicker;
exports.EmojiPickerIcon = EmojiPickerIcon;
exports.EmojiProvider = EmojiProvider;
exports.EmoticonItem = EmoticonItem;
exports.EmptyStateIndicator = EmptyStateIndicator;
exports.ErrorIcon = ErrorIcon;
exports.EventComponent = EventComponent;
exports.FileAttachment = FileAttachment;
exports.FileContainer = FileContainer;
exports.FileUploadIcon = FileUploadIcon;
exports.FileUploadIconFlat = FileUploadIconFlat;
exports.FixedHeightMessage = FixedHeightMessage;
exports.Gallery = Gallery;
exports.GalleryContainer = GalleryContainer;
exports.GiphyPreviewMessage = GiphyPreviewMessage;
exports.ImageComponent = ImageComponent;
exports.ImageContainer = ImageContainer;
exports.InfiniteScroll = InfiniteScroll;
exports.LoadMoreButton = LoadMoreButton;
exports.LoadMorePaginator = LoadMorePaginator;
exports.LoadingChannels = LoadingChannels;
exports.LoadingErrorIndicator = LoadingErrorIndicator;
exports.LoadingIndicator = LoadingIndicator;
exports.LoadingIndicatorIcon = LoadingIndicatorIcon;
exports.MAX_QUERY_CHANNELS_LIMIT = MAX_QUERY_CHANNELS_LIMIT;
exports.MESSAGE_ACTIONS = MESSAGE_ACTIONS;
exports.MML = MML;
exports.MediaContainer = MediaContainer;
exports.Message = Message;
exports.MessageActions = MessageActions;
exports.MessageActionsBox = MessageActionsBox;
exports.MessageContext = MessageContext;
exports.MessageDeleted = MessageDeleted;
exports.MessageDeliveredIcon = MessageDeliveredIcon;
exports.MessageErrorIcon = MessageErrorIcon;
exports.MessageInput = MessageInput;
exports.MessageInputContext = MessageInputContext;
exports.MessageInputContextProvider = MessageInputContextProvider;
exports.MessageInputFlat = MessageInputFlat;
exports.MessageInputSmall = MessageInputSmall;
exports.MessageList = MessageList;
exports.MessageNotification = MessageNotification;
exports.MessageOptions = MessageOptions;
exports.MessageProvider = MessageProvider;
exports.MessageRepliesCountButton = MessageRepliesCountButton;
exports.MessageSimple = MessageSimple;
exports.MessageStatus = MessageStatus;
exports.MessageText = MessageText;
exports.MessageTimestamp = MessageTimestamp;
exports.Modal = Modal;
exports.ModalGallery = ModalGallery;
exports.PinIcon = PinIcon;
exports.PinIndicator = PinIndicator;
exports.PlayButton = PlayButton;
exports.PopperTooltip = PopperTooltip;
exports.ProgressBar = ProgressBar;
exports.QuotedMessagePreview = QuotedMessagePreview;
exports.QuotedMessagePreviewHeader = QuotedMessagePreviewHeader;
exports.ReactionIcon = ReactionIcon;
exports.ReactionSelector = ReactionSelector;
exports.ReactionsList = ReactionsList;
exports.ReplyIcon = ReplyIcon;
exports.RetryIcon = RetryIcon;
exports.SUPPORTED_VIDEO_FORMATS = SUPPORTED_VIDEO_FORMATS;
exports.SafeAnchor = SafeAnchor;
exports.ScrollToBottomButton = ScrollToBottomButton;
exports.SearchInput = SearchInput;
exports.SearchResults = SearchResults;
exports.SendButton = SendButton;
exports.SendIconV1 = SendIconV1;
exports.SendIconV2 = SendIconV2;
exports.SimpleReactionsList = SimpleReactionsList;
exports.Streami18n = Streami18n;
exports.Thread = Thread;
exports.ThreadHeader = ThreadHeader;
exports.ThreadIcon = ThreadIcon;
exports.ThreadStart = ThreadStart;
exports.Tooltip = Tooltip;
exports.TranslationContext = TranslationContext;
exports.TranslationProvider = TranslationProvider;
exports.TypingContext = TypingContext;
exports.TypingIndicator = TypingIndicator;
exports.TypingProvider = TypingProvider;
exports.UnMemoizedLoadMorePaginator = UnMemoizedLoadMorePaginator;
exports.UploadIcon = UploadIcon;
exports.UploadsPreview = UploadsPreview;
exports.UserItem = UserItem;
exports.VirtualizedMessageList = VirtualizedMessageList;
exports.Window = Window;
exports.areMessagePropsEqual = areMessagePropsEqual;
exports.areMessageUIPropsEqual = areMessageUIPropsEqual;
exports.darkModeTheme = darkModeTheme;
exports.deTranslations = deTranslations;
exports.defaultDateTimeParser = defaultDateTimeParser;
exports.defaultPinPermissions = defaultPinPermissions;
exports.defaultScrollToItem = defaultScrollToItem;
exports.defaultTimestampFormat = defaultTimestampFormat;
exports.defaultTranslatorFunction = defaultTranslatorFunction;
exports.emojiMarkdownPlugin = emojiMarkdownPlugin;
exports.enTranslations = enTranslations;
exports.esTranslations = esTranslations;
exports.escapeRegExp = escapeRegExp;
exports.frTranslations = frTranslations;
exports.generateRandomId = generateRandomId;
exports.getChannel = getChannel;
exports.getDisplayImage = getDisplayImage;
exports.getDisplayTitle = getDisplayTitle;
exports.getGroupStyles = getGroupStyles;
exports.getImages = getImages;
exports.getLastReceived = getLastReceived;
exports.getLatestMessagePreview = getLatestMessagePreview;
exports.getMessageActions = getMessageActions;
exports.getNonImageAttachments = getNonImageAttachments;
exports.getReadByTooltipText = getReadByTooltipText;
exports.getReadStates = getReadStates;
exports.getWholeChar = getWholeChar;
exports.handleActionWarning = handleActionWarning;
exports.hasMoreMessagesProbably = hasMoreMessagesProbably;
exports.hasNotMoreMessages = hasNotMoreMessages;
exports.hiTranslations = hiTranslations;
exports.insertIntro = insertIntro;
exports.isAudioAttachment = isAudioAttachment;
exports.isChannel = isChannel;
exports.isDate = isDate;
exports.isDayOrMoment = isDayOrMoment;
exports.isFileAttachment = isFileAttachment;
exports.isGalleryAttachmentType = isGalleryAttachmentType;
exports.isLanguageSupported = isLanguageSupported;
exports.isMediaAttachment = isMediaAttachment;
exports.isNumberOrString = isNumberOrString;
exports.isOnlyEmojis = isOnlyEmojis;
exports.isScrapedContent = isScrapedContent;
exports.isSvgAttachment = isSvgAttachment;
exports.isUploadedImage = isUploadedImage;
exports.isUserMuted = isUserMuted;
exports.itTranslations = itTranslations;
exports.jaTranslations = jaTranslations;
exports.koTranslations = koTranslations;
exports.makeDateMessageId = makeDateMessageId;
exports.mapToUserNameOrId = mapToUserNameOrId;
exports.markDownRenderers = markDownRenderers;
exports.matchMarkdownLinks = matchMarkdownLinks;
exports.mentionsMarkdownPlugin = mentionsMarkdownPlugin;
exports.messageCodeBlocks = messageCodeBlocks;
exports.messageHasAttachments = messageHasAttachments;
exports.messageHasReactions = messageHasReactions;
exports.missingUseFlagHandlerParameterWarning = missingUseFlagHandlerParameterWarning;
exports.missingUseMuteHandlerParamsWarning = missingUseMuteHandlerParamsWarning;
exports.moveChannelUp = moveChannelUp;
exports.nlTranslations = nlTranslations;
exports.processMessages = processMessages;
exports.ptTranslations = ptTranslations;
exports.reactionHandlerWarning = reactionHandlerWarning;
exports.renderAttachmentActions = renderAttachmentActions;
exports.renderAttachmentWithinContainer = renderAttachmentWithinContainer;
exports.renderAudio = renderAudio;
exports.renderCard = renderCard;
exports.renderFile = renderFile;
exports.renderGallery = renderGallery;
exports.renderImage = renderImage;
exports.renderMedia = renderMedia;
exports.renderPreviewText = renderPreviewText;
exports.renderText = renderText;
exports.ruTranslations = ruTranslations;
exports.showMessageActionsBox = showMessageActionsBox;
exports.trTranslations = trTranslations;
exports.useActionHandler = useActionHandler;
exports.useChannelActionContext = useChannelActionContext;
exports.useChannelDeletedListener = useChannelDeletedListener;
exports.useChannelEditMessageHandler = useEditMessageHandler;
exports.useChannelHiddenListener = useChannelHiddenListener;
exports.useChannelMentionsHandler = useMentionsHandlers;
exports.useChannelStateContext = useChannelStateContext;
exports.useChannelTruncatedListener = useChannelTruncatedListener;
exports.useChannelUpdatedListener = useChannelUpdatedListener;
exports.useChannelVisibleListener = useChannelVisibleListener;
exports.useChat = useChat;
exports.useChatContext = useChatContext;
exports.useComponentContext = useComponentContext;
exports.useConnectionRecoveredListener = useConnectionRecoveredListener;
exports.useCooldownTimer = useCooldownTimer;
exports.useCustomStyles = useCustomStyles;
exports.useDeleteHandler = useDeleteHandler;
exports.useEditHandler = useEditHandler;
exports.useEmojiContext = useEmojiContext;
exports.useEnrichedMessages = useEnrichedMessages;
exports.useFlagHandler = useFlagHandler;
exports.useLastReadData = useLastReadData;
exports.useMentionsHandler = useMentionsHandler;
exports.useMessageContext = useMessageContext;
exports.useMessageInputContext = useMessageInputContext;
exports.useMessageInputState = useMessageInputState;
exports.useMessageListElements = useMessageListElements;
exports.useMessageListScrollManager = useMessageListScrollManager;
exports.useMessageNewListener = useMessageNewListener;
exports.useMobileNavigation = useMobileNavigation;
exports.useMuteHandler = useMuteHandler;
exports.useNewMessageNotification = useNewMessageNotification;
exports.useNotificationAddedToChannelListener = useNotificationAddedToChannelListener;
exports.useNotificationMessageNewListener = useNotificationMessageNewListener;
exports.useNotificationRemovedFromChannelListener = useNotificationRemovedFromChannelListener;
exports.useOpenThreadHandler = useOpenThreadHandler;
exports.usePaginatedChannels = usePaginatedChannels;
exports.usePinHandler = usePinHandler;
exports.usePrependedMessagesCount = usePrependedMessagesCount;
exports.useReactionClick = useReactionClick;
exports.useReactionHandler = useReactionHandler;
exports.useRetryHandler = useRetryHandler;
exports.useScrollLocationLogic = useScrollLocationLogic;
exports.useShouldForceScrollToBottom = useShouldForceScrollToBottom;
exports.useTranslationContext = useTranslationContext;
exports.useTypingContext = useTypingContext;
exports.useUserHandler = useUserHandler;
exports.useUserPresenceChangedListener = useUserPresenceChangedListener;
exports.useUserRole = useUserRole;
exports.validateAndGetMessage = validateAndGetMessage;
exports.withChannelActionContext = withChannelActionContext;
exports.withChannelStateContext = withChannelStateContext;
exports.withChatContext = withChatContext;
exports.withComponentContext = withComponentContext;
exports.withEmojiContext = withEmojiContext;
exports.withMessageContext = withMessageContext;
exports.withTranslationContext = withTranslationContext;
exports.withTypingContext = withTypingContext;
//# sourceMappingURL=index.cjs.js.map
