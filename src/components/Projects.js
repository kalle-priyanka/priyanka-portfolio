import React from "react";

const projects = [
  {
    title: "Smart Transfer Port Controller",
    description:
      "Secure pharma device using QR authentication and Raspberry Pi.",
    tech: "Python, Flask, SQLite",
    link: "https://github.com/kalle-priyanka/stp-controller",
  },
  {
    title: "Real-Time Messaging App",
    description:
      "Cross-device chat over UART/UDP protocols using Node.js and WebSocket.",
    tech: "Node.js, Express, SQLite",
    link: "https://github.com/kalle-priyanka/messaging-app",
  },
  {
    title: "Online Job Portal",
    description:
      "Responsive portal with admin and user modules for job applications.",
    tech: "ASP.NET, SQL Server, Bootstrap",
    link: "https://github.com/kalle-priyanka/job-portal",
  },
];

export default function Projects() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{proj.description}</p>
            <p className="text-sm text-indigo-500 mb-2">
              Tech Stack: {proj.tech}
            </p>
            <a
              href={proj.link}
              className="text-blue-600 underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
