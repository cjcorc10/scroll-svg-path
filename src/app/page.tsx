'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useGSAP(
    () => {
      const pathLength = pathRef.current?.getTotalLength();
      console.log('pathLength:', pathLength);

      if (!pathRef.current || !pathLength) return;
      pathRef.current.setAttribute(
        'stroke-dasharray',
        pathLength!.toString()
      );
      pathRef.current.setAttribute(
        'stroke-dashoffset',
        pathLength!.toString()
      );
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  const sections = [
    {
      img: '/images/risky-ming-Ijk7YSk8Bbo-unsplash(1).svg',
      title: '',
      para: '',
    },
    {
      img: '/images/risky-ming-LcPb4iLccU4-unsplash.svg',
      title: 'Duis aute irure dolor',
      para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: '/images/risky-ming-fhkheQ_dzCI-unsplash.svg',
      title: 'Excepteur sint occaec',
      para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      img: '/images/risky-ming-S4J87spxkVU-unsplash 1.svg',
      title: '',
      para: '',
    },
  ];
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          Scroll down for the animation, this is just a sample hero.
        </h1>
      </section>
      <section ref={ref} className={styles.spotlight}>
        {sections.map((section, i) => (
          <div key={i} className={styles.row}>
            {section.title.length > 0 && (
              <div className={styles.col}>
                <div className={styles.textContainer}>
                  <h2>{section.title}</h2>
                  <p>{section.para}</p>
                </div>
              </div>
            )}
            <div className={styles.col}>
              <div className={styles.imageContainer}>
                <Image
                  src={section.img}
                  alt={`image ${i}`}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        ))}
        <SvgPath ref={pathRef} />
      </section>
      <section className={styles.footer}>
        <h1></h1>
      </section>
    </main>
  );
}

const SvgPath = ({
  ref,
}: {
  ref: React.RefObject<SVGPathElement | null>;
}) => {
  return (
    <div className={styles.svgContainer}>
      <svg
        className="h-full w-full object-contain"
        viewBox="0 0 1274 2764"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          ref={ref}
          d="M544.704 80.0167C544.704 80.0167 1096.11 199.197 1112.02 523.517C1140.02 1094.52 229.517 715.517 90.017 1286.02C-45.746 1841.23 1255.52 2136.52 1191.52 1677.52C1127.52 1218.52 397.517 1262.02 585.017 1917.02C707.015 2343.2 693.017 2683.02 693.017 2683.02"
          stroke="#E15B40"
          strokeWidth="200"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
