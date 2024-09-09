import PortfolioLinks from '@/components/PortfolioLinks/PortfolioLinks';
import { PortfolioLinkItem } from '@/library/types';
import Providers from '@/app/Providers';

const Page = async () => {
  const initialLinksResponse = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/portfolio/links`);
  const initialLinks = (await initialLinksResponse.json()) as PortfolioLinkItem[];

  return (
    <div className={'p-2'}>
      <div className={'w-[128px] mx-auto mt-12 mb-4'}>
        <img
          src={'https://cdn.tinycountrygames.com/blog/home_portrait.jpg'}
          alt={'Profile Image of Jose'}
          className={'w-1px rounded-full'}
        />
      </div>
      <h1 className={'text-center text-white text-[2em] font-bold my-4'}>José Rodriguez Rivas</h1>
      <p className={'text-white mb-4 text-center text-[1.25em] font-bold'}>
        Leftist Software Engineer | Twitch Affiliate Streamer
      </p>
      <Providers>
        <PortfolioLinks initialLinks={initialLinks} />
      </Providers>
    </div>
  );
};
export default Page;
