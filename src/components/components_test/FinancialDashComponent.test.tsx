import React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import FDashComponent, {IFDashProps} from '../FinancialDashboardComponent';
import { User } from '../../models/user';
import { FormControl, Button, Input } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IFDashProps = {
    authUser: {ers_user_id: 1, username: 'test', password: 'password', first_name: 'testy', last_name: 'testerson', email: 'admin@test.com', role_name: 'admin'},
}

describe('<FDashComponent />', () => {

    let wrapper = mount(<BrowserRouter><FDashComponent {...props} /></BrowserRouter> )

    it('Renders without error', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});