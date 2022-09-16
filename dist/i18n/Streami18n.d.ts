import { TFunction } from 'i18next';
import Dayjs from 'dayjs';
import type moment from 'moment';
import type { TranslationLanguages } from 'stream-chat';
import type { TDateTimeParser } from '../context/TranslationContext';
import type { UnknownType } from '../types/types';
import { enTranslations } from './translations';
import 'dayjs/locale/de';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/nl';
import 'dayjs/locale/pt';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';
declare type Options = {
    DateTimeParser?: typeof Dayjs | typeof moment;
    dayjsLocaleConfigForLanguage?: Partial<ILocale>;
    debug?: boolean;
    disableDateTimeTranslations?: boolean;
    language?: TranslationLanguages;
    logger?: (message?: string) => void;
    translationsForLanguage?: Partial<typeof enTranslations>;
};
export declare const defaultTranslatorFunction: TFunction;
export declare class Streami18n {
    i18nInstance: import("i18next").i18n;
    Dayjs: null;
    setLanguageCallback: (t: TFunction) => void;
    initialized: boolean;
    t: TFunction;
    tDateTimeParser: TDateTimeParser;
    translations: {
        [key: string]: {
            [key: string]: typeof enTranslations | UnknownType;
        };
    };
    /**
     * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
     * when user calls registerTranslation() function. So instead we will store the locale configs
     * given to registerTranslation() function in `dayjsLocales` object, and register the required locale
     * with moment, when setLanguage is called.
     * */
    dayjsLocales: {
        [key: string]: Partial<ILocale>;
    };
    /**
     * Initialize properties used in constructor
     */
    logger: (msg?: string) => void;
    currentLanguage: TranslationLanguages;
    DateTimeParser: typeof Dayjs | typeof moment;
    isCustomDateTimeParser: boolean;
    i18nextConfig: {
        debug: boolean;
        fallbackLng: false;
        interpolation: {
            escapeValue: boolean;
        };
        keySeparator: false;
        lng: string;
        nsSeparator: false;
        parseMissingKeyHandler: (key: string) => string;
    };
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
    constructor(options?: Options);
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    init(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    localeExists: (language: TranslationLanguages) => boolean;
    validateCurrentLanguage: () => void;
    /** Returns an instance of i18next used within this class instance */
    geti18Instance: () => import("i18next").i18n;
    /** Returns list of available languages. */
    getAvailableLanguages: () => string[];
    /** Returns all the translation dictionary for all inbuilt-languages */
    getTranslations: () => {
        [key: string]: {
            [key: string]: {
                "Attach files": string;
                Cancel: string;
                "Channel Missing": string;
                Close: string;
                "Close emoji picker": string;
                "Commands matching": string;
                "Connection failure, reconnecting now...": string;
                Delete: string;
                Delivered: string;
                "Drag your files here": string;
                "Edit Message": string;
                "Edit message request failed": string;
                "Emoji matching": string;
                "Empty message...": string;
                "Error adding flag": string;
                "Error connecting to chat, refresh the page to try again.": string;
                "Error deleting message": string;
                "Error muting a user ...": string;
                "Error pinning message": string;
                "Error removing message pin": string;
                "Error unmuting a user ...": string;
                "Error uploading file": string;
                "Error uploading image": string;
                "Error \u00B7 Unsent": string;
                "Error: {{ errorMessage }}": string;
                Flag: string;
                "Latest Messages": string;
                Menu: string;
                "Message Failed \u00B7 Click to try again": string;
                "Message Failed \u00B7 Unauthorized": string;
                "Message deleted": string;
                "Message has been successfully flagged": string;
                "Message pinned": string;
                Mute: string;
                New: string;
                "New Messages!": string;
                "No chats here yet\u2026": string;
                "No results found": string;
                "Nothing yet...": string;
                "Open emoji picker": string;
                "People matching": string;
                "Pick your emoji": string;
                Pin: string;
                "Pinned by": string;
                Reply: string;
                "Reply to Message": string;
                Search: string;
                "Searching...": string;
                Send: string;
                "Send message request failed": string;
                "Sending...": string;
                "Slow Mode ON": string;
                "Some of the files will not be accepted": string;
                "This message was deleted...": string;
                Thread: string;
                "Type your message": string;
                Unmute: string;
                Unpin: string;
                "Upload type: \"{{ type }}\" is not allowed": string;
                "Wait until all attachments have uploaded": string;
                "You have no channels currently": string;
                "You've reached the maximum number of files": string;
                live: string;
                replyCount_one: string;
                replyCount_other: string;
                searchResultsCount_one: string;
                searchResultsCount_other: string;
                "this content could not be displayed": string;
                "{{ commaSeparatedUsers }} and {{ moreCount }} more": string;
                "{{ commaSeparatedUsers }}, and {{ lastUser }}": string;
                "{{ firstUser }} and {{ secondUser }}": string;
                "{{ imageCount }} more": string;
                "{{ memberCount }} members": string;
                "{{ user }} has been muted": string;
                "{{ user }} has been unmuted": string;
                "{{ user }} is typing...": string;
                "{{ users }} and more are typing...": string;
                "{{ users }} and {{ user }} are typing...": string;
                "{{ watcherCount }} online": string;
                "\uD83C\uDFD9 Attachment...": string;
            } | UnknownType;
        };
    };
    /**
     * Returns current version translator function.
     */
    getTranslators(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    registerTranslation(language: TranslationLanguages, translation: typeof enTranslations, customDayjsLocale?: Partial<ILocale>): void;
    addOrUpdateLocale(key: TranslationLanguages, config: Partial<ILocale>): void;
    setLanguage(language: TranslationLanguages): Promise<TFunction | undefined>;
    registerSetLanguageCallback(callback: (t: TFunction) => void): void;
}
export {};
//# sourceMappingURL=Streami18n.d.ts.map