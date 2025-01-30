import Image from "next/image";
import portrait from "../public/portrait.jpg";
import CareerTimeline from "./components/career-timeline/career-timeline";
import ContactInfo from "./components/sidebar/contact-info";
import Education from "./components/sidebar/education";
import Languages from "./components/sidebar/languages";
import NameAndTitle from "./components/name-title";
import OtherLinks from "./components/sidebar/other-links";
import Summary from "./components/summary";
import Head from "next/head";
import TechStack from "./components/sidebar/tech-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black break-after">
      <div className="flex flex-col lg:flex-row lg:w-3/4">
        <div className="flex flex-col lg:w-[30%] bg-slate-600 text-gray-300 [&>*]:px-4 [&>*]:pb-4">
          <div className="flex justify-center text-2xl mt-4 lg:hidden">
            <NameAndTitle />
          </div>
          <Image
            className="self-center lg:pt-4"
            src={portrait}
            alt=":^)"
            width={265}
            height={300}
            unoptimized
          />
          <ContactInfo />
          <OtherLinks
            groups={[
              {
                title: "Links:",
                links: [
                  { name: "Github", value: "https://github.com/monokarp" },
                  {
                    name: "Codewars",
                    value: "https://www.codewars.com/users/iLovePartinG",
                  },
                ],
              },
              {
                title: "Certifications:",
                links: [
                  {
                    name: "Core JS assessment",
                    value:
                      "https://www.app.javascriptinstitute.org/profile/UGV210901565",
                  },
                  {
                    name: "CAE assessment",
                    value: "./StatementOfResult.pdf",
                  },
                ],
              },
            ]}
          />
          <TechStack />
          <Languages />
          <Education />
        </div>
        <div className="flex flex-col lg:w-[70%] p-4">
          <div className="flex flex-col p-5">
            <div className="hidden text-2xl lg:block">
              <NameAndTitle />
            </div>
            <Summary />
          </div>
          <CareerTimeline
            projects={[
              {
                employer: "Global Logic",
                from: new Date("06/01/2015"),
                to: new Date("02/01/2017"),
                title: "Ecommerce Web Application",
                techStack: "C#, VB6, ASP.NET, Microsoft Web API, MS SQL",
                team: "Comprised of two senior specialists in .NET and database management, along with myself.",
                description:
                  "Provided support for a legacy ecommerce platform, primarily focusing on bug fixes and occasional feature development as requested by the client.",
              },
              {
                employer: "Global Logic",
                from: new Date("02/01/2017"),
                to: new Date("11/01/2017"),
                title: "Back Office Data Analytics Web Application",
                techStack:
                  "Angular, TypeScript, C#, Microsoft Web API, MS SQL, Microsoft PowerBI",
                team: "A team consisting of one senior and several junior software engineers, supervised by a technical consultant, with dedicated QA, database specialist, and business analyst from the client's side.",
                description:
                  "Developed a web UI from the ground up, embedding interactive charts from a third-party analytics service.",
              },
              {
                employer: "Dev.Pro",
                from: new Date("12/01/2017"),
                to: new Date("12/01/2021"),
                title: "POS Application for Restaurant Software Solution",
                techStack:
                  "Angular, RxJS, TypeScript, Jest, Protractor, Cordova, SQLite, Node.js, MongoDB",
                team: "Over 50 developers focused on POS; with dedicated business analysts, quality assurance, automated quality assurance, infrastructure, and backend teams.",
                description:
                  "Engaged in long-term development of a comprehensive restaurant software solution, involving design, implementation, and oversight of feature development across various scopes, internal project tools, end-to-end testing, documentation, onboarding, and feature ownership of a product subdomain. Conducted regular code reviews and maintained communication with all dedicated teams.",
              },
              {
                employer: "Dev.Pro",
                from: new Date("01/01/2022"),
                to: new Date("05/01/2022"),
                title: "Web UI for In-Store POS and Kitchen Server",
                techStack: "Angular, TypeScript, Jest, Cypress",
                team: "A team of approximately 10 individuals. I liaised with a designer, product owner, and technical consultants on the client side; completed the project mostly independently, followed by knowledge transfer to another software engineer.",
                description:
                  "In response to the client's expansion into a new country, implemented features for local law compliance, including hardware adjustments, internationalization, and a frontend refresh. My specific role was to upgrade the existing frontend to a modern technology stack.",
              },
              {
                employer: "Dev.Pro",
                from: new Date("05/01/2022"),
                to: new Date("12/01/2022"),
                title:
                  "Internal Company Tool Development and Trainee Mentoring",
                techStack: "Angular, Nest, PostgreSQL",
                team: "Myself and another senior software engineer supervising a team of twelve trainees",
                description:
                  "Focused on developing a new internal tool for contractors, where my responsibilities included technical design and detailed code review.",
              },
              {
                employer: "Dev.Pro",
                from: new Date("01/01/2023"),
                to: new Date("06/01/2023"),
                title: "In-Store Database Synchronization for POS Application",
                techStack: ".NET Core, C#, Azure, Docker, MS SQL",
                team: "Two software engineers and one technical consultant from each side.",
                description:
                  "Designed and developed services for the client's POS solution to synchronize transactional data between store and cloud in a schema-agnostic manner.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
