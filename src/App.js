import React, {useState, useEffect, useRef} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "what is React",
        content: "frontend js framework"
    },
    {
        title: "why use react",
        content: "react is favorite framework"
    },
    {
        title: "how u use react?",
        content: "use it with instruction"
    }
];

const options = [
    {
        label: 'ColorRed',
        value: 'red'
    },
    {
        label: 'ColorBlue',
        value: 'blue'
    },
    {
        label: 'ColorGreen',
        value: 'green'
    },
    {
        label: 'ColorDark',
        value: 'dark'
    }
];

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}/>
        </div>
    );
};