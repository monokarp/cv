import Image from 'next/image';
import portrait from '../public/portrait.jpg';
import CareerTimeline from './components/career-timeline/career-timeline';
import ContactInfo from './components/contact-info';
import Education from './components/education';
import Languages from './components/languages';
import NameAndTitle from './components/name-title';
import OtherLinks from './components/other-links';
import PdfButton from './components/pdf-button/pdf-button';
import Summary from './components/summary';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-gray-230 text-black font-mono break-after'>
      <div className='flex flex-col lg:w-1/2'>
        <div className='flex flex-col p-5'>
          <NameAndTitle />
          <Image
            className='self-center lg:absolute lg:self-end lg:p-5'
            src={portrait}
            alt=':^)'
            width={221}
            height={250}
            unoptimized
          />
          <ContactInfo />
          <OtherLinks links={[
            { name: 'Github', value: 'https://github.com/monokarp' },
            { name: 'Codewars', value: 'https://www.codewars.com/users/iLovePartinG' },
            { name: 'Core JS assessment', value: 'https://www.app.javascriptinstitute.org/profile/UGV210901565' },
            { name: 'CAE assessment', value: './StatementOfResult.pdf' },
          ]} />
          <Languages />
          <Summary />
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
            description: `Long-term development of a feature-rich restaurant software solution. Over the years I partook in various responsibilities: designing, implementing and overseeing the development of product features of all scope sizes, internal project tools, e2e testing, project documentation and onboarding processes, feature-ownership of a product's sub-domain, code review. Involved in regular communication with all dedicated teams.`,
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
            team: 'Me and another senior SE supervising a team of a dozen trainees',
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
      <PdfButton />
    </main>
  )
}
