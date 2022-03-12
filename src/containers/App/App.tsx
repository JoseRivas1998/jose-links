import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Link, LinkProps} from "../../components/Link/Link";
import profile_img from './profile_img.png';
import './App.css';

function App() {

    const [links, set_links] = useState<LinkProps[]>([]);

    const load_links = async () => {
        const get_result = await axios.get("/portfolio/links");
        return get_result.data.map((db_link: any) => {
            const link : LinkProps = {
                ...db_link
            };
            if (db_link.icon) {
                link.icon = {
                    ...db_link.icon,
                    src: `/icons/${db_link.icon.src}.png`
                }
            }
            return link;
        });
    };

    useEffect(() => {
        load_links().then(set_links);
    }, []);

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
