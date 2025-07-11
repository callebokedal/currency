//import React, { useState } from "react";

const Navigation = ({ activeTab, setActiveTab, tabs }) => {
    //const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <ul className="nav nav-tabs mb-4">
            {tabs.map((tab) => (
                <li className="nav-item" key={tab.id}>
                    <button
                        className={`nav-link${activeTab === tab.id ? " active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                            type="button"
                            aria-current={activeTab === tab.id ? "page" : undefined}
                        >
                        {tab.label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;