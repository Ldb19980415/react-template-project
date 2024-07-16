import { FC, memo } from 'react';

interface Props {
    title: string;
}

export const Component: FC<Props> = memo(({ title }) => {
    return <div>{title}</div>;
});