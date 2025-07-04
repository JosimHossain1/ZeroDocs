import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const docsDirectory = path.join(process.cwd(), 'docs');

export const getDocs = () => {
  const fileNames = fs.readdirSync(docsDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace('.md', '');
    const fullPath = path.join(docsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterContent = matter(fileContents);

    return {
      id,
      ...matterContent.data,
    };
  });

  console.log(allDocuments);
};
