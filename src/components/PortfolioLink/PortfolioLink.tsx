import React from 'react';
import { PortfolioLinkItem } from '@/library/types';

type PortfolioLinkProps = {
  link: PortfolioLinkItem;
};

const PortfolioLink = (props: PortfolioLinkProps) => {
  const {
    link: { url, text, icon },
  } = props;
  return (
    <a
      href={url}
      className={
        'flex border-2 border-solid border-white rounded-[2em] text-white font-bold mt-0 mx-auto mb-12 min-h-[80px] hover:text-black hover:bg-[#ffffffd2] transition-all duration-150 ease-linear'
      }
    >
      {icon ? (
        <img
          src={`/link_icons/${icon.src}.png`}
          alt={icon.alt}
          className={`max-w-[48px] box-content flex p-4 border-r-[3px] border-r-white border-r-solid`}
        />
      ) : (
        <div className={'w-[48px] box-content p-4'} />
      )}
      <span className={'text-2xl m-auto p-[5px] text-center'}>{text}</span>
    </a>
  );
};

export default PortfolioLink;
