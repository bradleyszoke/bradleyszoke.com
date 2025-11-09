import styles from './About.module.css';

const About = (): JSX.Element => {
  return (
    <div className={styles.about}>
      <p>
        Hi, I&apos;m <strong>Bradley Szoke</strong>!
      </p>
      <p>
        I received my Bachelor&apos;s in Computer Science in May 2022.
      </p>
      <p>
        Currently, I work for State Farm, where I&apos;m building an automated rate indication solution using Python, Pandas, FastAPI, and more.
      </p>
      <p>
        Some of my other projects include a{' '}
        <a
          href="https://www.oculus.com/experiences/go/1901607623239776/"
          target="_blank"
          rel="noreferrer"
        >
          virtual reality game
        </a>{' '}
        with 1000+ sales and my{' '}
        <a
          href="https://github.com/bradleyszoke/bradleyszoke.com"
          target="_blank"
          rel="noreferrer"
        >
          open-source personal website and blog
        </a> built with Next.js.
      </p>
    </div>
  );
};

export default About;
