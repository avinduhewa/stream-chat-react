export class ReactTextareaAutocomplete extends React.Component<any, any, any> {
    static defaultProps: {
        closeOnClickOutside: boolean;
        maxRows: number;
        minChar: number;
        movePopupAsYouType: boolean;
        scrollToItem: boolean;
        value: string;
    };
    /**
     * setup to emulate the UNSAFE_componentWillReceiveProps
     */
    static getDerivedStateFromProps(props: any, state: any): {
        propsValue: any;
        value: any;
    } | null;
    constructor(props: any);
    state: {
        actualToken: string;
        component: null;
        currentTrigger: null;
        data: null;
        dataLoading: boolean;
        left: null;
        selectionEnd: number;
        selectionStart: number;
        top: null;
        value: any;
    };
    getSelectionPosition: () => {
        selectionEnd: any;
        selectionStart: any;
    } | null;
    getSelectedText: () => any;
    setCaretPosition: (position?: number) => void;
    getCaretPosition: () => any;
    /**
     * isComposing prevents double submissions in Korean and other languages.
     * starting point for a read:
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing
     * In the long term, the fix should happen by handling keypress, but changing this has unknown implications.
     * @param event React.KeyboardEvent
     */
    _defaultShouldSubmit: (event: any) => boolean;
    _handleKeyDown: (event: any) => void;
    _onEnter: (event: any) => void;
    _onSpace: () => void;
    _replaceWord: () => void;
    _onSelect: (newToken: any) => void;
    _getItemOnSelect: (paramTrigger: any) => ((item: any) => any) | null;
    _getTextToReplace: (paramTrigger: any) => ((item: any) => any) | null;
    _getCurrentTriggerSettings: (paramTrigger: any) => any;
    _getValuesFromProvider: () => void;
    _getSuggestions: (paramTrigger: any) => null;
    /**
     * Close autocomplete, also clean up trigger (to avoid slow promises)
     */
    _closeAutocomplete: () => void;
    _cleanUpProps: () => {
        [x: string]: any;
    };
    _isCommand: (text: any) => boolean;
    _changeHandler: (e: any) => void;
    _selectHandler: (e: any) => void;
    _onClickAndBlurHandler: (e: any) => void;
    _onScrollHandler: () => void;
    _dropdownScroll: (item: any) => void;
    getTriggerProps: () => {
        component: null;
        currentTrigger: null;
        getSelectedItem: ((item: any) => any) | null;
        getTextToReplace: ((item: any) => any) | null;
        selectionEnd: number;
        value: any;
        values: null;
    };
    setDropdownRef: (element: any) => void;
    dropdownRef: any;
    renderSuggestionListContainer(): JSX.Element | null;
    render(): JSX.Element;
}
export namespace ReactTextareaAutocomplete {
    namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const closeOnClickOutside: PropTypes.Requireable<boolean>;
        export const containerClassName: PropTypes.Requireable<string>;
        export const containerStyle: PropTypes.Requireable<object>;
        export const disableMentions: PropTypes.Requireable<boolean>;
        export const dropdownClassName: PropTypes.Requireable<string>;
        export const dropdownStyle: PropTypes.Requireable<object>;
        export const itemClassName: PropTypes.Requireable<string>;
        export const itemStyle: PropTypes.Requireable<object>;
        export const listClassName: PropTypes.Requireable<string>;
        export const listStyle: PropTypes.Requireable<object>;
        export const loaderClassName: PropTypes.Requireable<string>;
        export const loaderStyle: PropTypes.Requireable<object>;
        export const loadingComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const minChar: PropTypes.Requireable<number>;
        export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        export const onCaretPositionChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        export const shouldSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        export const style: PropTypes.Requireable<object>;
        export const SuggestionList: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export { triggerPropsCheck as trigger };
        export const value: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
import { triggerPropsCheck } from "./utils";
//# sourceMappingURL=Textarea.d.ts.map