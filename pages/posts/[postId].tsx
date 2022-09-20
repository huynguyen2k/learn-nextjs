import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function DetailPostPage({ post }: PostDetailPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ fontSize: '20px', textAlign: 'center' }}>Loading ...</div>
    );
  }

  if (!post) return null;

  return (
    <div>
      <h1>Post detail page</h1>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>{post.author}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10'
  );
  const data = await response.json();
  const paths = data.data.map((post: any) => ({ params: { postId: post.id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
};
