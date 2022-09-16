import React, { PropsWithChildren } from 'react';
import Dayjs from 'dayjs';
import type { TFunction } from 'i18next';
import type { Moment } from 'moment';
import type { TranslationLanguages } from 'stream-chat';
import type { UnknownType } from '../types/types';
export declare type SupportedTranslations = 'de' | 'en' | 'es' | 'fr' | 'hi' | 'it' | 'ja' | 'ko' | 'nl' | 'pt' | 'ru' | 'tr';
export declare const isLanguageSupported: (language: string) => language is SupportedTranslations;
export declare const isDayOrMoment: (output: TDateTimeParserOutput) => output is Dayjs.Dayjs | Moment;
export declare const isDate: (output: TDateTimeParserOutput) => output is Date;
export declare const isNumberOrString: (output: TDateTimeParserOutput) => output is string | number;
export declare type TDateTimeParserInput = string | number | Date;
export declare type TDateTimeParserOutput = string | number | Date | Dayjs.Dayjs | Moment;
export declare type TDateTimeParser = (input?: TDateTimeParserInput) => TDateTimeParserOutput;
export declare type TranslationContextValue = {
    t: TFunction;
    tDateTimeParser: TDateTimeParser;
    userLanguage: TranslationLanguages;
};
export declare const defaultDateTimeParser: (input?: TDateTimeParserInput) => Dayjs.Dayjs;
export declare const TranslationContext: React.Context<TranslationContextValue>;
export declare const TranslationProvider: ({ children, value, }: React.PropsWithChildren<{
    value: TranslationContextValue;
}>) => JSX.Element;
export declare const useTranslationContext: (componentName?: string) => TranslationContextValue;
export declare const withTranslationContext: <P extends UnknownType>(Component: React.ComponentType<P>) => {
    (props: Omit<P, keyof TranslationContextValue>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TranslationContext.d.ts.map