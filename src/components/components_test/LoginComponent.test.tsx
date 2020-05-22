import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import LoginComponent, {ILoginProps} from '../LoginComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: ILoginProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
    setAuthUser: jest.fn()
}

describe('<LoginComponent />', () => {

    let wrapper = mount(<BrowserRouter><LoginComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    // it('Renders 2 FormControl components', () => {
    //     expect(wrapper.find(FormControl)).toHaveLength(2);
    // });

    // it('Renders 1 a components', () => {
    //     expect(wrapper.find('a')).toHaveLength(1);
    // });

    // it('Renders 2 input components', () => {
    //     expect(wrapper.find(Input)).toHaveLength(2);
    // });
});