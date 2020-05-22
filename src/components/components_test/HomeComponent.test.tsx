import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import HomeComponent, {IHomeProps} from '../HomeComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IHomeProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
}

describe('<HomeComponent />', () => {

    let wrapper = mount(<BrowserRouter><HomeComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});