import { render } from '@testing-library/react';

import ExpandableText from './expandable-text';

describe('ExpandableText', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ExpandableText maxLength={0} />);
        expect(baseElement).toBeTruthy();
    });
});
