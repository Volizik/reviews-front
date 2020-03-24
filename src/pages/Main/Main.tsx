import React from 'react';
import {ShortPost, ShortPostProps} from "../../components/ShortPost";

const post: ShortPostProps = {
    date: 'Сегодня',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    title: 'Post title',
    image: '',
    imageTitle: '',
};

export const Main = () => (
    <>
        <ShortPost {...post} />
    </>
);
