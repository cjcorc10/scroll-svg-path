import styles from './page.module.scss';

export default function Home() {
  const images = [
    {
      src: '/images/risky-ming-fhkheQ_dzCI-unsplash.svg',
    },
    {
      src: '/images/risky-ming-Ijk7YSk8Bbo-unsplash.svg',
    },
    {
      src: '/images/risky-ming-LcPb4iLccU4-unsplash.svg',
    },
    {
      src: '/images/risky-ming-S4J87spxkVU-unsplash 1.svg',
    },
  ];
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          Scroll down for the animation, this is just a sample hero.
        </h1>
      </section>
      <section className={styles.spotlight}></section>
      <section className={styles.footer}>
        <h1></h1>
      </section>
      <SvgPath />
    </main>
  );
}

const SvgPath = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <svg
        width="1274"
        height="2764"
        viewBox="0 0 1274 2764"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M544.704 80.0167C544.704 80.0167 1096.11 199.197 1112.02 523.517C1140.02 1094.52 229.517 715.517 90.017 1286.02C-45.746 1841.23 1255.52 2136.52 1191.52 1677.52C1127.52 1218.52 397.517 1262.02 585.017 1917.02C707.015 2343.2 693.017 2683.02 693.017 2683.02"
          stroke="#E15B40"
          strokeWidth="160"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
