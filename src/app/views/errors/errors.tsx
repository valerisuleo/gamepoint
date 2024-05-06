import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Notfound from './not-found/notfound';
import { Fragment } from 'react';
import Navbar from '../../common/navbar/navbar';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Fragment>
            <Navbar></Navbar>
            <div>
                {isRouteErrorResponse(error) ? (
                    <Notfound />
                ) : (
                    'Something went wrong...'
                )}
            </div>
        </Fragment>
    );
};

export default ErrorPage;
