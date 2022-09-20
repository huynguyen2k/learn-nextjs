import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export interface ParamsPostPageProps {
  name: string;
}

export default function ParamsPostPage(props: ParamsPostPageProps) {
  const router = useRouter();

  console.log('query: ', router.query);

  return <div>Params Post Page</div>;
}

export const getServerSideProps: GetServerSideProps<
  ParamsPostPageProps
> = async (context: GetServerSidePropsContext) => {
  console.log('getServerSideProps');

  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    props: {
      name: 'Huy Nguyen',
    },
  };
};
