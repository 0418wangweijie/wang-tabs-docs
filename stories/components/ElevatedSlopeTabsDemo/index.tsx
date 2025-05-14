import React, { useState } from "react";
import { ElevatedSlopeTabs, TabItem } from "wang-tabs";

const ElevatedSlopeTabsDemo = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');

    const tabList:TabItem[] = [
        {
            key: 'tab1',
            name: 'tab1',
            label: 'Tab 1',
            content: 'Content 1'
        },
        {
            key: 'tab2',
            name: 'tab2',
            label: 'Tab 2',
        
        }
    ];

    const tabList2:TabItem[] = [
        {
            name: 'tab1',
            label: 'Tab 1',
            content: 'Content 1'
        },
        {
            name: 'tab2',
            label: 'Tab 2',
            content: 'Content 2'
        },
        {
            name: 'tab3',
            label: 'Tab 3',
            content: 'Content 3'
        }
    ];

    return (
        <div style={{background:'#eee',padding:10}}>
            <div>
                <ElevatedSlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab} />
                <div>
                    {/* {tabList.filter((tab) => tab.name === activeTab).map((tab) => tab.content)} */}
                </div>
            </div>
            {/*多个标签以及重置样式展示效果*/}
            <div style={{marginTop:10}}>
                <ElevatedSlopeTabs tabList={tabList2} activeTab={activeTab2} onTabChange={setActiveTab2} rootStyle={{
                    '--active-color': '#003eb3'
                }} />
                <div>
                    {/* {tabList2.filter((tab) => tab.name === activeTab2).map((tab) => tab.content)} */}
                </div>
            </div>
        </div>
    );
};

export default ElevatedSlopeTabsDemo;