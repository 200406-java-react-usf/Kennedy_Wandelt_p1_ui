import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import MyReimbsComponent, {IMyReimbsProps} from '../MyReimbsComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IMyReimbsProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
    setThisReimb: jest.fn(),
    setEditReimb: jest.fn()
}

describe('<MyReimbsComponent />', () => {

    let wrapper = mount(<BrowserRouter><MyReimbsComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});