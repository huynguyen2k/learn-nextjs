import { useRouter } from 'next/router';
import * as React from 'react';

export interface CreatePostPageProps {}

export default function CreatePostPage(props: CreatePostPageProps) {
  const router = useRouter();

  console.log('query: ', router.query);

  return <div>Create Post Page</div>;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
