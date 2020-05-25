import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import WithLoading from '../../helper/WithLoading/WithLoading';
import { RootState } from '../../store/root.types';
import { getPostItems } from '../../store/post/selectors';

const PostList: React.FC<any> = () => {
    const { t } = useTranslation();
    const postItems = useSelector((state: RootState) => getPostItems(state));
    return (
        <React.Fragment>
            <ul>
                {postItems.map((item) => (
                    <li key={item.id}>{item.id}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default WithLoading(PostList);
