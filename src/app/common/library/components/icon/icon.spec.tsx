import { render } from '@testing-library/react';
import Icon from './icon';
import { FaCalendar } from 'react-icons/fa6';

describe('Icon', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Icon color={'red'} size={20} cursor={''} Icon={FaCalendar} />
        );
        expect(baseElement).toBeTruthy();
    });
});
