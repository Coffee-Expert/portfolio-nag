'use client'


import Image from 'next/image'
import styles from './ScrollMarquee.module.css'

const images = Array.from({ length: 8 }, (_, i) => `/skills/ph${i + 1}.png`)

export default function ScrollMarquee() {
  return (
    <section style={{ width: '100%' }} className="my-20">
      <h2 className='text-white'
        style={{
          textAlign: 'center',
          fontWeight: 200,
          fontSize: 'clamp(1.25rem, 4vw, 2rem)',
          marginBottom: '1.5rem',
          letterSpacing: '0.02em',
        }}
      >
        Things I Use to Create Magic
      </h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...images, ...images].map((src, index) => (
            <div className={styles.item} key={index}>
              <Image
                src={src}
                alt={`Skill ${index + 1}`}
                width={60}
                height={60}
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
