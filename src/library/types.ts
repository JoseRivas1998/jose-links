export type ImageProps = {
  src: string;
  alt: string;
};

export type PortfolioLinkItem = {
  url: string;
  text: string;
  icon: ImageProps | null;
};
