import styles from './About.module.css';

const About = (): JSX.Element => {
  return (
    <div className={styles.about}>
      <p>
        Hi, I&apos;m <strong>Bradley Szoke</strong>!
      </p>
      <p>
        I graduated in May 2022 with my Bachelor&apos;s in Computer Science and now work for State Farm as a Junior Software Engineer.
      </p>
      <p>
        Some projects of mine include a{' '}
        <a
          href="https://www.oculus.com/experiences/go/1901607623239776/"
          target="_blank"
          rel="noreferrer"
        >
          Virtual Reality game
        </a>{' '}
        with 1000+ sales, a{' '}
        <a
          href="https://chrome.google.com/webstore/detail/whatboard/npaccllkphikfkdbmedailkemffjffgg"
          target="_blank"
          rel="noreferrer"
        >
          Chrome extension
        </a>{' '}
        built with React, and an{' '}
        <a
          href="https://github.com/bradleyszoke/bradleyszoke.com"
          target="_blank"
          rel="noreferrer"
        >
          open-source personal website and blog
        </a>{' '}
        built with Next.js.
      </p>
    </div>
  );
};

export default About;
