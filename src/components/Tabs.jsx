import { Tab, Tabs } from '@mui/material';
import React from 'react';

function TabsComponents({ categoriesSelect, value, onTabChange }) {
    const handleChange = (event, newValue) => {
        onTabChange(newValue);
    };

    return (
        <div>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {categoriesSelect.map((tab) => (
                    <Tab
                        key={tab.value}
                        value={tab.value}
                        label={tab.label}
                    />
                ))}
            </Tabs>
        </div>
    );
}

export default TabsComponents;