import React from "react";
import {ImageProps} from "../../common/Types";
import {LinkIcon} from "./LinkIcon/LinkIcon";
import styles from './Link.module.css';

export interface LinkProps {
    icon?: ImageProps
    text: string
    url: string
}

export const Link = (props: LinkProps) => {
    const linkIcon = props.icon ?
        <LinkIcon src={props.icon.src} alt={props.icon.alt}/> :
        <div className={styles.LinkTextSpacer}/>;
    return (
        <a href={props.url} className={styles.Link}>
            {linkIcon}<span className={styles.LinkText}>{props.text}</span>
        </a>
    );
};

