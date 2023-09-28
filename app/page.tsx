import Image from 'next/image'
import OtherLinks from './components/other-links'
import ContactInfo from './components/contact-info'
import Career from './components/career'
import Languages from './components/languages'
import Education from './components/education'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 font-mono'>
      <div className='flex flex-row justify-between w-2/3'>
        <div className='flex-col lg:flex text-sm pt-5 pb-5'>
          <p className='text-base'>
            Bondarenko Oleg
          </p>
          <p>
            Software Engineer
          </p>
          <ContactInfo lines={[
            'mnkrp.ml@gmail.com',
            '+38 099 925 78 73',
          ]} />
          <OtherLinks links={[
            { name: 'Telegram', value: 'https://t.me/iloveparting' },
            { name: 'Github', value: 'https://github.com/monokarp' },
            { name: 'Codewars', value: 'https://www.codewars.com/users/iLovePartinG' },
          ]} />
        </div>
        <Image
          src='/portrait.jpg'
          alt='portrait'
          className='light:invert'
          width={221}
          height={250}
          unoptimized
        />
      </div>
      <Languages />
      <Education />
      <Career occupations={[

      ]} />
    </main>
  )
}
