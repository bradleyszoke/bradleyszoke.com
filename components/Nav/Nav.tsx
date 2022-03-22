import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = (): JSX.Element => {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/bradley-szoke/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <Link href="/resume.pdf" passHref>
            <a target="_blank" rel="noreferrer">
              Resume
            </a>
          </Link>
        </li>

        <li>
          <a href="mailto:bradleyszoke@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
