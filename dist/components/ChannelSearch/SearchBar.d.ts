import React from 'react';
import { SearchInputProps } from './SearchInput';
export declare type SearchBarController = {
    /** Called on search input focus */
    activateSearch: () => void;
    /** Clears the search state, removes focus from the search input */
    exitSearch: () => void;
    /** Flag determining whether the search input is focused */
    inputIsFocused: boolean;
    /** Ref object for the input wrapper in the SearchBar */
    searchBarRef: React.RefObject<HTMLDivElement>;
};
export declare type AdditionalSearchBarProps = {
    /** Application menu to be displayed  when clicked on MenuIcon */
    AppMenu?: React.ComponentType;
    /** Custom icon component used to clear the input value on click. Displayed within the search input wrapper. */
    ClearInputIcon?: React.ComponentType;
    /** Custom icon component used to terminate the search UI session on click. */
    ExitSearchIcon?: React.ComponentType;
    /** Custom icon component used to invoke context menu. */
    MenuIcon?: React.ComponentType;
    /** Custom UI component to display the search text input */
    SearchInput?: React.ComponentType<SearchInputProps>;
    /** Custom icon used to indicate search input. */
    SearchInputIcon?: React.ComponentType;
};
export declare type SearchBarProps = AdditionalSearchBarProps & SearchBarController & SearchInputProps;
export declare const SearchBar: (props: SearchBarProps) => JSX.Element;
//# sourceMappingURL=SearchBar.d.ts.map