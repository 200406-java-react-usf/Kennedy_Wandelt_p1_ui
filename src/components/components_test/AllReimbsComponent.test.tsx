import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import AllReimbsComponent, {IAllReimbsProps} from '../AllReimbsComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IAllReimbsProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
    setThisReimb: jest.fn()
}

describe('<AllReimbsComponent />', () => {

    let wrapper = mount(<BrowserRouter><AllReimbsComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});