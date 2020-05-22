import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import NewReimbComponent, {INewReimbProps} from '../NewReimbursementComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: INewReimbProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'}
}

describe('<NewReimbComponent />', () => {

    let wrapper = mount(<BrowserRouter><NewReimbComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});