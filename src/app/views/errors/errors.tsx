import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Notfound from './not-found/notfound';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="m-5">
            {isRouteErrorResponse(error) ? (
                <Notfound />
            ) : (
                'Something went wrong...'
            )}
        </div>
    );
};

export default ErrorPage;
