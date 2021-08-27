import React from 'react';

import {Link, LinkProps} from "../../components/Link/Link";
import icons from './icons';
import profile_img from './profile_img.png';
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
        url: "https://twitter.com/LeRealJoseRivas",
        text: "Twitter",
        icon: {
            src: icons.twitter,
            alt: "Twitter Logo"
        }
    },
    {
        url: "https://www.twitch.tv/throopie",
        text: "Twitch",
        icon: {
            src: icons.twitch,
            alt: "Twitch Logo Glitch"
        }
    },
    {
        url: "https://www.tiktok.com/@joserivas896?lang=en",
        text: "TikTok",
        icon: {
            src: icons.tiktok,
            alt: "TikTok Logo"
        }
    },
    {
        url: "https://www.instagram.com/joserodriguezrivas_tcg/",
        text: "Personal Instagram",
        icon: {
            src: icons.instagram,
            alt: "Instagram Logo"
        }
    },
    {
        url: "https://www.instagram.com/tinycountrygames/",
        text: "TCG Instagram",
        icon: {
            src: icons.instagram,
            alt: "Instagram Logo"
        }
    },
    {
        url: 'https://github.com/JoseRivas1998',
        text: "GitHub",
        icon: {
            src: icons.github,
            alt: "GitHub Icon"
        }
    },
    {
        url: 'https://joserodriguezrivas.com',
        text: "Portfolio",
        icon: {
            src: icons.tcg,
            alt: "Tiny Country Games Logo"
        }
    }
];

function App() {
    const allLinks = links.map(
        (link, index) => <Link url={link.url} text={link.text} icon={link.icon} key={index}/>
    );
    return (
        <>
            <div className={"ProfilePicture"}>
                <img src={profile_img} alt={"Digital Drawing of Jose"}/>
            </div>
            <h1>Jos&eacute; Rodriguez Rivas</h1>
            {allLinks}
        </>
    );
}

export default App;
