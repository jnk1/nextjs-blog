import Head from "next/head";
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// getStaticProps()はサーバーサイドのビルド時に呼び出される
// クライアントサイドでは呼び出されない
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  // ビルド時に生成された````````````````'allPostsData'を使う （props.allDataPosts）
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m Junki. I&apos;m a software engineer in Japan.{' '}
          You can contact me on <a href='https://twitter.com/junk1side'>Twitter</a>.</p>
        <p>
          (This is a sample website = you&apos;ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">out Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd}  ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
