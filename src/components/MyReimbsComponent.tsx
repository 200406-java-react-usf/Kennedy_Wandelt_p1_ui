import React from 'react';
import './HomeComponent.css';
import { Card, Typography, CardContent } from '@material-ui/core';

interface IHomeProps {
    un: string
    reimbs: {id:number, amount: string, description: string}[]
}

const HomeComponent = (props: IHomeProps) => {

    let myReimbs: any[] = [];

    // props.reimbs.forEach(reimb => {
    //     myReimbs.push(
    //         <Card>
    //             <CardContent>
    //                 <Typography variant="h5">
    //                     {reimb.id}
    //                 </Typography>
    //                 <Typography color="textsecondary"
    //             </CardContent>

    //         </Card>
    //     )
    // })
    return (
        <>

        </>
    );

}

export default HomeComponent;