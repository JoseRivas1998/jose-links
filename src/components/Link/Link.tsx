import React from "react";

export interface LinkProps {
    text: string
    url: string
}

export const Link = (props: LinkProps) => (
    <a href={props.url}>{props.text}</a>
);

