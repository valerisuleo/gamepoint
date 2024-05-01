export interface IEventEmitted {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
}

export interface IData {
    event: IEventEmitted | undefined; // Allow event to be undefined initially
    outputEvent: (current: IEventEmitted) => void;
}
