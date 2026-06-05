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
        </div>
    );
};

export default About;
