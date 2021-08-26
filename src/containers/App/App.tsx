import React from 'react';

import {Link, LinkProps} from "../../components/Link/Link";
import icons from './icons';
import './App.css';

const links: LinkProps[] = [
    {
        url: "https://tinycountrygames.com",
        text: "Tiny Country Games",
        icon: {
            src: icons.tcg,
            alt: "Tiny Country Games Logo"
        }
    },
    {
        url: 'https://joserodriguezrivas.com',
        text: "Portfolio"
    },
    {
        url: "https://twitter.com/LeRealJoseRivas",
        text: "Twitter",
        icon: {
            src: icons.twitter,
            alt: "Twitter Logo"
        }
    }
];

function App() {
    const allLinks = links.map(
        (link, index) => <Link url={link.url} text={link.text} icon={link.icon} key={index}/>
    );
    return (
        <>
            {allLinks}
        </>
    );
}

export default App;
