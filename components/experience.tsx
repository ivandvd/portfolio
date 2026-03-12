import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Metorial",
      period: "May 2025 - December 2025",
      achievements: [
        "Led AI product development for the serverless MCP runtime, enabling AI agents to connect with apps and data sources at scale",
        "Implemented LLM fine-tuning and RAG architectures tailored for the platform's domain-specific agent integrations",
        "Developed and deployed deep learning models to optimize runtime performance, improving prediction accuracy by 35% across platform workloads",
        "Built stateful MCP server tooling with sub-second cold starts, built-in security, and end-to-end monitoring for production AI systems",
        "Designed developer-facing APIs and SDKs, collaborating with product and engineering teams to streamline AI agent deployment",
      ],
    },
    {
      title: "Blockchain Analyst",
      company: "Metaplanet Inc.",
      period: "Nov 2024 - April 2025",
      achievements: [
        "Investigated suspicious wallet behavior and conducted forensic analysis of blockchain transactions using AI-driven pattern recognition tools",
        "Created detailed reports on crypto-related security incidents for stakeholders, incorporating wallet movement analysis, token swaps, and laundering patterns",
        "Monitored major crypto security news, community alerts, and developer channels to stay ahead of emerging threats and trends",
        "Worked alongside engineering and compliance teams to streamline incident response and improve data traceability",
      ],
    },
    {
      title: "Chief Operations Officer",
      company: "One and Zeros Co. App Studio",
      period: "July 2022 - July 2024",
      achievements: [
        "Managed day-to-day operations including developing and implementing processes and procedures to improve efficiency and productivity",
        "Oversaw financial operations including budgeting, forecasting, and financial reporting",
        "Led the development of new app projects, ensuring on-time delivery within budget while continuously monitoring performance and driving improvements",
        "Collaborated with the CEO and senior leaders to develop and execute overall business strategy, identifying and evaluating new business opportunities and partnerships",
      ],
    },
    {
      title: "Cryptocurrency Forensic Investigator",
      company: "Chilton Yambert & Porter LLP",
      period: "March 2022 - June 2022",
      achievements: [
        "Provided expert analysis and investigation of cryptocurrency-related financial crimes including money laundering and fraud",
        "Identified and analyzed digital assets, traced transactions, and gathered evidence to support legal and regulatory proceedings",
        "Leveraged blockchain analytics and AI-powered tools for deep transaction graph analysis and anomaly detection",
        "Worked independently and as part of a team to deliver actionable forensic intelligence on complex crypto cases",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
            <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground leading-relaxed">
              My professional journey across blockchain forensics, AI-driven analytics, and tech operations
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item group">
                <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-400 before:via-purple-500 before:to-violet-600">
                  <CardContent className="p-6 md:p-7">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{experience.title}</h3>
                        <p className="text-muted-foreground font-medium">{experience.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <Badge variant="outline" className="w-fit">
                          {experience.period}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 flex-shrink-0"></span>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
