export interface IListItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    isDisabled?: boolean;
}

export interface IListGroup {
    collection: IListItem[];
    itemKey: string;
    text: string;
    onEmitEvent: (item: IListItem) => void;
    isHorizontal?: boolean;
    isFlush?: boolean;
    isDarkMode?: boolean;
    reset?: boolean;
    displayOnly?: boolean;
}
