import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/PostList/PostList';
import { isLoading } from '../../store/post/selectors';
import { RootState } from '../../store/root.types';
import { ErrorBoundary } from '../../helper/ErrorBoundary/ErrorBoundary';
import { fetchPosts } from '../../services/post.service';
import css from './Page-1.module.css';

const Page: React.FC<any> = () => {
    const { t } = useTranslation();
    const postLoading = useSelector((state: RootState) => isLoading(state));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div className={css.wrapper}>
            <h2>{t('features')}</h2>
            <ErrorBoundary>
                <PostList isLoading={postLoading} />
            </ErrorBoundary>
        </div>
    );
};

export default Page;
