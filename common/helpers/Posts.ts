import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { PostInfo } from '../types/Blog';

export const getBlogPosts = (): PostInfo[] => {
  const files = fs.readdirSync(path.join('pages/blog'));

  const posts: PostInfo[] = files.map((file) => {
    const rawFile = fs.readFileSync(path.join(`pages/blog/${file}`), 'utf-8');
    const { data } = matter(rawFile);

    const slug = file.split('.')[0];
    const wordCount = rawFile.split(' ').length;

    const postInfo: PostInfo = {
      title: data.title,
      category: data.category,
      description: data.description,
      wordCount: wordCount,
      slug: slug,
    };

    return postInfo;
  });

  return posts;
};
