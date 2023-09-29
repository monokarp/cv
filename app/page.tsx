import Image from 'next/image'
import OtherLinks from './components/other-links'
import ContactInfo from './components/contact-info'
import CareerTimeline from './components/career-timeline'
import Languages from './components/languages'
import Education from './components/education'
import NameAndTitle from './components/name-title'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center font-mono lg:justify-center'>
      <div className='flex flex-col w-4/5 pt-5 pb-5'>
        <div className='flex flex-col text-sm'>
          <NameAndTitle />
          <Image
            className='self-center lg:absolute lg:self-end'
            src='/portrait.jpg'
            alt=':^)'
            width={221}
            height={250}
            unoptimized
          />
          <ContactInfo lines={[
            'mnkrp.ml@gmail.com',
            '+38 099 925 78 73',
          ]} />
          <OtherLinks links={[
            { name: 'Telegram', value: 'https://t.me/iloveparting' },
            { name: 'Github', value: 'https://github.com/monokarp' },
            { name: 'Codewars', value: 'https://www.codewars.com/users/iLovePartinG' },
          ]} />
          <Languages />
          <Education />
        </div>
        <CareerTimeline occupations={[
          {
            from: new Date('06/01/2015'),
            to: new Date('11/01/2017'),
            employer: 'Global Logic',
            projects: [
              {
                from: new Date('06/01/2015'),
                to: new Date('12/01/2017'),
                title: 'Ecommerce web app',
                techStack: 'C#, VB6, ASP.NET, MS Web Api, MsSQL',
                description: 'Legacy ecommerce platform support (mostly bug fixing + infrequent feature development per client request). Team of 6 people.',
              },
              {
                from: new Date('12/01/2017'),
                to: new Date('11/01/2017'),
                title: 'Back office data analytics web app',
                techStack: 'Angular, TS, C#, MS Web Api, MsSQL, MS PowerBI',
                description: 'Web UI interactively embedding charts from a third-party analytics service, written from scratch. Team of 10 people.',
              },
            ]
          },
          {
            from: new Date('12/01/2017'),
            to: new Date('06/01/2023'),
            employer: 'Dev.Pro',
            projects: [
              {
                from: new Date('12/01/2017'),
                to: new Date('12/01/2021'),
                title: 'POS app for a restaurant SW solution',
                techStack: 'Angular, TS, Jest, Protractor, Cordova, SQLite, Node, MongoDB',
                description: 'Lorem ipsum',
              },
              {
                from: new Date('01/01/2022'),
                to: new Date('05/01/2022'),
                title: 'Back office web app for a restaurant SW solution',
                techStack: 'Angular, TS, Jest, Cypress',
                description: 'Lorem ipsum',
              },
              {
                from: new Date('05/01/2022'),
                to: new Date('06/01/2023'),
                title: 'In-store database sync for a POS',
                techStack: '.NET Core, C#, Azure, Docker, MsSQL',
                description: 'Lorem ipsum',
              },
            ]
          },
        ]} />
      </div>
    </main>
  )
}
