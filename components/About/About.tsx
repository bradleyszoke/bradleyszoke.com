import styles from './About.module.css';

const About = (): JSX.Element => {
  return (
    <div className={styles.about}>
      <p>
        Hi, I&apos;m <strong>Bradley Szoke</strong>.
      </p>
      <p>
        I&apos;m currently attending the University of Illinois in Springfield
        and expect to graduate with a Bachelor&apos;s in Computer Science in May
        2022 🎉
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
