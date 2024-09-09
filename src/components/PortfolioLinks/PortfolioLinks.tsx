'use client';
import React from 'react';
import { PortfolioLinkItem } from '@/library/types';
import PortfolioLink from '@/components/PortfolioLink/PortfolioLink';
import { useQuery } from '@tanstack/react-query';

type PortfolioLinksProps = {
  initialLinks: PortfolioLinkItem[];
};

const PortfolioLinks = (props: PortfolioLinksProps) => {
  const { initialLinks } = props;

  const { data: links } = useQuery({
    queryKey: ['portfolio', 'links'],
    initialData: initialLinks,
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/portfolio/links`, {
        cache: 'no-store',
      });
      return (await response.json()) as PortfolioLinkItem[];
    },
  });

  return (
    <div className={'w-[100%] lg:w-3/4 mx-auto'}>
      {links.map((link) => (
        <PortfolioLink
          link={link}
          key={link.url}
        />
      ))}
    </div>
  );
};

export default PortfolioLinks;
