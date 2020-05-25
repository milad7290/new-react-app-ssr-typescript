import React, { PureComponent } from 'react';
import css from './ErrorBoundary.module.css';

export class ErrorBoundary extends PureComponent {
    state = {
        hasError: false,
    };

    componentDidCatch = (error: any, info: any) => {
        console.log('here our error', error, info);

        this.setState({
            hasError: true,
        });
    };

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <p className={css.problem}>مشکلی برای این قسمت سایت به وجود آمده است</p>;
        }

        return this.props.children;
    }
}
