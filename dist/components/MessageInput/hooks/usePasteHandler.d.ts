import { FileLike } from 'react-file-utils';
export declare const usePasteHandler: (uploadNewFiles: (files: FileList | FileLike[] | File[]) => void, insertText: (textToInsert: string) => void, isUploadEnabled: boolean) => {
    onPaste: (clipboardEvent: React.ClipboardEvent<HTMLTextAreaElement>) => void;
};
//# sourceMappingURL=usePasteHandler.d.ts.map