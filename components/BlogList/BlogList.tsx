import styles from './BlogList.module.css';
import Link from 'next/link';

import { PostInfo } from '../../common/types/Blog';
import { wordCountToTime } from '../../common/utils/PostInfo';

type BlogListProps = {
  posts: PostInfo[];
};

const BlogList = ({ posts }: BlogListProps): JSX.Element => {
  return (
    <div className={styles.blogList}>
      <h2>
        <strong>Blog</strong>
      </h2>

      <ul>
        {posts.map(({ wordCount, title, category, slug }: PostInfo) => {
          const readTime = wordCountToTime(wordCount);

          return (
            <li key={title}>
              <Link href={`/blog/${slug}`}>
                <a>
                  <h2>{title}</h2>
                </a>
              </Link>
              <p>
                {category} ({readTime})
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
