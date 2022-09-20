import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>Posts list</h1>
      <ul>
        {posts.map(x => (
          <li key={x.id}>
            <Link href={`/posts/${x.id}`}>
              <a>{x.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10'
  );
  const data = await response.json();

  return {
    props: {
      posts: data.data,
    },
  };
};
