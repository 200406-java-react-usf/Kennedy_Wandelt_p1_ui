import React from 'react';
import { shallow, mount } from 'enzyme';
import NewUserComponent, {IRegProps} from '../NewUserComponent';
import { User } from '../../models/user';
import { FormControl, Button } from '@material-ui/core';

const props: IRegProps = {
    newUser: undefined  
}

describe('<NewUserComponent />', () => {

    let wrapper = mount(<NewUserComponent {...props} /> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Renders 5 FormControl components', () => {
        expect(wrapper.find(FormControl)).toHaveLength(6);
    });

    it('Renders 6 input components', () => {
        expect(wrapper.find('input')).toHaveLength(5);
    });

    it('Renders a button', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});

describe('<NewUserComponent /> input fields value update', () => {
    let wrapper = mount(<NewUserComponent {...props} />)
    

    it('Triggering change on fn input updates value with event payload', () => {
        wrapper.find('input#firstName').simulate('change', {
            target: {value: 'newfn'}
        });
        expect(wrapper.find('input#firstName').prop('value')).toEqual('newfn');
    })
})