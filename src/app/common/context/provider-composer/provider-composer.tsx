/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
    contexts: any;
    children: any;
}

export const ContextProviderComposer = ({ contexts, children }: Props) => {
    return contexts.reduceRight(
        (
            kids: any,
            parent: React.DetailedReactHTMLElement<
                { children: any },
                HTMLElement
            >
        ) => React.cloneElement(parent, { children: kids }),
        children
    );
};
