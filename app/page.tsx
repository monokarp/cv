import Image from 'next/image'
import OtherLinks from './components/other-links'
import ContactInfo from './components/contact-info'
import CareerTimeline from './components/career-timeline/career-timeline'
import Languages from './components/languages'
import Education from './components/education'
import NameAndTitle from './components/name-title'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center font-mono lg:justify-center'>
      <div className='flex flex-col w-4/5 pt-5 pb-5'>
        <div className='flex flex-col'>
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
            { name: 'Core JS assessment', value: 'https://www.app.javascriptinstitute.org/profile/UGV210901565' },
            { name: 'CAE assessment', value: './StatementOfResult.pdf' },
          ]} />
          <Languages />
          <Education />
        </div>
        <CareerTimeline projects={[
          {
            employer: 'Global Logic',
            from: new Date('06/01/2015'),
            to: new Date('02/01/2017'),
            title: 'Ecommerce web app',
            techStack: 'C#, VB6, ASP.NET, MS Web Api, MsSQL',
            team: 'Two senior specialists (.NET and DB) and I.',
            description: 'Legacy ecommerce platform support (mostly bug fixing + infrequent feature development requested by the client).',
          },
          {
            employer: 'Global Logic',
            from: new Date('02/01/2017'),
            to: new Date('11/01/2017'),
            title: 'Back office data analytics web app',
            techStack: 'Angular, TS, C#, MS Web Api, MsSQL, MS PowerBI',
            team: 'A team of one senior and a few junior SEs supervised by a tech consultant, with a dedicated QA and DB specialist and a BA from the client.',
            description: 'A web UI that interactively embeds charts from a third-party analytics service, written from scratch.',
          },
          {
            employer: 'Dev.Pro',
            from: new Date('12/01/2017'),
            to: new Date('12/01/2021'),
            title: 'POS app for a restaurant SW solution',
            techStack: 'Angular, TS, Jest, Protractor, Cordova, SQLite, Node, MongoDB',
            team: 'Over 50 POS developers; dedicated BA, QA, AQA, infrastructure and backend teams.',
            description: `A massive and at certain points intense project. Over the years I partook in various responsibilities: designing, implementing and overseeing the development of product features of all scope sizes, internal project tools, e2e testing, project documentation and onboarding processes, feature-ownership of a product's sub-domain, code review. Involved in regular communication with all dedicated teams.`,
          },
          {
            employer: 'Dev.Pro',
            from: new Date('01/01/2022'),
            to: new Date('05/01/2022'),
            title: 'Web UI for an in-store POS and kitchen server',
            techStack: 'Angular, TS, Jest, Cypress',
            team: 'A team of about 10. I communicated with a designer, product owner and tech consultants on the client side; finished the project mostly solo, with a followup knowledge transfer to another SE.',
            description: `The client's initiative to expand their business into a new country required a few features, mostly to do with local law compliance (hardware, i18n, frontend facelift). My specific scope was to bring an existing frontend to a modern tech stack.`,
          },
          {
            employer: 'Dev.Pro',
            from: new Date('05/01/2022'),
            to: new Date('12/01/2022'),
            title: 'Internal company tool development and trainee mentoring',
            techStack: 'Angular, Nest, Postgres',
            team: 'Me and another senior SE supervising a team of about 10 trainees',
            description: 'The goal was to develop a new internal contractor-facing tool. I would mostly design and do detailed code review.',
          },
          {
            employer: 'Dev.Pro',
            from: new Date('01/01/2023'),
            to: new Date('06/01/2023'),
            title: 'In-store database sync for a POS app',
            techStack: '.NET Core, C#, Azure, Docker, MsSQL',
            team: '2 SEs and a technical consultant from each side.',
            description: `The project was to design and develop services for the client's POS solution to sync transactional data between store and cloud in a schema-agnostic way.`,
          },
        ]} />
      </div>
    </main>
  )
}
