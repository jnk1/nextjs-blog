import Head from "next/head";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}
