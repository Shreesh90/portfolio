import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Alteryx",
    period: "Jul 2023 - Present",
    description: [
      "Owned the conversion engine executing in multi-tenant Kubernetes warm pods in the data plane, and worked on the control plane service that dispatches to them.",
      "Built RESTful microservice for a distributed system and led load testing to improve scalability. Enabled KEDA autoscaling and tuned CPU/memory settings. Reduced p99 latency by 20%",
      "Led the migration of a critical service from user-based identities to service principal authentication, eliminating user dependency, improving security and reliability.",
      "Integrated conversion-service to work asynchronously with an Orchestrator service to stabilize local development and testing of workflows. Accelerated developer productivity.",
      "Led Root Cause Analysis discussions by analyzing Datadog logs, identifying recurring production issues, and driving fixes that improved service SLO from 98% to 99.9%+.",
      "Added Job History support in Job Planning Layer, integrating Kafka into the workflow to enable event-driven job tracking.",
      "Prototyped Transactional Query Support using DuckLake and created a dataset-as-DataFrame solution in Jupyter notebook. Demoed to 200+ engineers and product managers.",
      "Acted as Designated Responsible Individual during on-call rotations while mentoring 4 junior Interns/SDE and leading knowledge-transfer sessions",
      "Received the Quality, Scalability and Performance Award for delivering a high-impact Innovation Days project."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Alteryx",
    period: "Jan 2023 - June 2023",
    description: [
      "Performed POC comparing ApachePOI and FastExcel across 2 key metrics (features, write throughput) to determine preferred approach for Excel write.",
      "Implemented backend conversion logic to export dataset to Excel using ApachePOI, enabling customers to download data with 1 million+ rows in Excel formats.",
      "Took ownership of frontend changes and authored 20+ TypeScript unit tests to validate end-to-end Excel export functionality"
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-[140px_1fr] gap-4"
          >
            <span className="font-mono text-xs text-muted-foreground pt-1">
              {exp.period}
            </span>
            <div>
              <h3 className="font-medium text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <ul className="text-sm text-muted-foreground mt-2 list-disc ml-4 space-y-1">
                {exp.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
