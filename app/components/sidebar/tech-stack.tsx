import Delimiter from "../common/delimiter";

export default function TechStack() {
  return (
    <div className="text-sm pt-3">
      <p className="text-xl font-bold">Tech stack summary:</p>
      <Delimiter />
      <p>
        <span className="font-bold ">Main:</span> TypeScript, Angular, Nest.js,
        Node.js, Jest, Cypress, SQLite, Postgres, Docker, GCP, CI/CD
      </p>
      <p>
        <span className="font-bold ">Secondary:</span> React, Next.js, React
        Native, Cordova, C#, .NET Core, MSSQL, Azure
      </p>
    </div>
  );
}
