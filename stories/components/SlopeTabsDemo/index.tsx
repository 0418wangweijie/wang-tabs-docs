import React, {useState} from "react";
import {SlopeTabs} from "wang-tabs";

const SlopeTabsDemo = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1')
    const [activeTab2, setActiveTab2] = useState<string>('tab1')

    const tabList = [
        {
            name: 'tab1',
            label: 'Tab 1',
            content: 'Content 1'
        },
        {
            name: 'tab2',
            label: 'Tab 2',
            content: 'Content 2'
        }
    ]

    const tabList2 = [
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
    ]

    return (
        <div>
            <div>
                <SlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab}/>
                <div>
                    {tabList.filter((tab) => tab.name === activeTab).map((tab) => tab.content)}
                </div>
            </div>
            <div style={{marginTop: '20px'}}>
                <SlopeTabs tabList={tabList2} activeTab={activeTab2} onTabChange={setActiveTab2} rootStyle={{
                    '--active-color': '#003eb3'
                }}/>
                <div>
                    {tabList2.filter((tab) => tab.name === activeTab2).map((tab) => tab.content)}
                </div>
            </div>
        </div>
    )
}

export default SlopeTabsDemo