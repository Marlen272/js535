import React from 'react';
import { useSelector } from 'react-redux';

const Ios = () => {
    const data = useSelector(state => state.postSlice.post);
    return <div>{JSON.stringify(data)}</div>;
};

export default Ios;