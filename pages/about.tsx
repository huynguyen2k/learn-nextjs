import Header from '@/components/common/Header';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <button>Next page</button>
    </div>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;
