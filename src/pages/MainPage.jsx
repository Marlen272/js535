import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/PostsSlice';
import Frontend from '../components/Frontend';
import Backend from '../components/Backend';
import Ios from '../components/los';
import Android from '../components/Android';
import UxorUi from '../components/UxorUi';
import TabsComponents from '../components/Tabs';
import {Container} from "@mui/material";

const VALUES = {
    Frontend: 'Frontend',
    Backend: 'Backend',
    Ios: 'Ios',
    Android: 'Android',
    UxorUi: 'Ux/Ui',
};

const GetCategories = ({ tab }) => {
    switch (tab) {
        case VALUES.Frontend:
            return <Frontend />;
        case VALUES.Backend:
            return <Backend />;
        case VALUES.Ios:
            return <Ios />;
        case VALUES.Android:
            return <Android />;
        case VALUES.UxorUi:
            return <UxorUi />;
        default:
            return <></>;
    }
};

const MainPage = () => {
    const categoriesSelect = [
        { value: VALUES.Frontend, label: 'Frontend' },
        { value: VALUES.Backend, label: 'Backend' },
        { value: VALUES.Ios, label: 'Ios' },
        { value: VALUES.Android, label: 'Android' },
        { value: VALUES.UxorUi, label: 'Ux/Ui' },
    ];

    const [value, setValue] = useState(categoriesSelect[0].value);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.postSlice.isLoading);

    const handleTabChange = (newValue) => {
        setValue(newValue);
        dispatch(getPosts());
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
            <TabsComponents categoriesSelect={categoriesSelect} value={value} onTabChange={handleTabChange} />
            {isLoading ? <div>Loading...</div> : <GetCategories tab={value} />}
        </Container>
    );
};

export default MainPage;