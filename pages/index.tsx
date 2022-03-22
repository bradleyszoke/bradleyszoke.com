import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { PostInfo } from '../common/types/Blog';
import { getBlogPosts } from '../common/helpers/Posts';

import Nav from '../components/Nav';
import About from '../components/About';
import BlogList from '../components/BlogList';

type HomeProps = {
  posts: PostInfo[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>Bradley Szoke - Software Engineer</title>
      </Head>

      <main>
        <Nav />
        <About />
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getBlogPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
