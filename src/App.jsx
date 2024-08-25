import React, { useState, useEffect } from 'react';
import  "../src/App.css"
function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [tabs, setTabs] = useState([
    {id:'tab1', title: 'Tab 1', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non, incidunt nostrum rem odio autem.',},
    { id: 'tab2', title: 'Tab 2', content: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Eum non, incidunt nostrum rem odio autem.' },
    { id: 'tab3', title: 'Tab 3', content: 'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Eum non, incidunt nostrum rem odio autem.' },
    { id: 'tab4', title: 'Tab 4', content: 'Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Eum non, incidunt nostrum rem odio autem.' },
  ]);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);
  };

  return (
    <div>
      <h2>tab commponent with react</h2>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
          
        ))}
      </div>
      
      <div className="tab-content">
        

        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
}

export default App;
