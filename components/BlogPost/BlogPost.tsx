import styles from './BlogPost.module.css';
import Head from 'next/head';

import { PostMeta } from '../../common/types/Blog';
import Nav from '../Nav';

const BlogPost = ({
  meta,
  children,
}: {
  meta: PostMeta;
  children: any;
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <div className="container">
        <Nav />
        <div className={styles.blogPost}>{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
