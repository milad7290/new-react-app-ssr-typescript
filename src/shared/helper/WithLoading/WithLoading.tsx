import React from 'react';
import css from './WithLoading.module.css';

const WithLoading = (Component: any) => {
    return function WihLoadingComponent({ isLoading, ...props }: any) {
        if (!isLoading) {
            return <Component {...props} />;
        }
        return <p className={css.loading}>بارگذاری...</p>;
    };
};
export default WithLoading;
