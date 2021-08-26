import React from "react";
import {ImageProps} from "../../../common/Types";
import styles from './LinkIcon.module.css';

export const LinkIcon = (props: ImageProps) => (
    <img src={props.src} alt={props.alt} className={styles.LinkIcon}/>
);
