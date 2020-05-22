import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import EditReimbComponent, {IEditReimbProps} from '../EditReimbComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IEditReimbProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
    editReimb: {reimb_id: 1, amount: 10.00, submitted: 1, resolved: null, description: 'tests', author_id: 3, resolver_id: null, reimb_status: 'pending', reimb_type: 'other' }
}

describe('<EditReimbComponent />', () => {

    let wrapper = mount(<BrowserRouter><EditReimbComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});