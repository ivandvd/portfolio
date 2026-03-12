import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Neural Networks", "Deep Learning", "Computer Vision"],
    },
    {
      category: "LLMs & NLP",
      skills: ["OpenAI", "Claude", "LangChain", "RAG", "Hugging Face", "Prompt Engineering", "Fine-Tuning", "MCP"],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "Solidity"],
    },
    {
      category: "Blockchain & Web3",
      skills: ["On-Chain Analytics", "Wallet Forensics", "Transaction Tracing", "DeFi Protocols", "Smart Contracts", "Chainalysis"],
    },
    {
      category: "Operations & Strategy",
      skills: ["Team Leadership", "Project Management", "Budgeting & Forecasting", "Business Strategy", "Agile", "Stakeholder Management"],
    },
    {
      category: "Tools & Infrastructure",
      skills: ["Docker", "Git", "AWS", "OpenCL", "Jupyter", "Next.js", "Apache Spark", "CI/CD"],
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          My expertise and technical proficiencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-indigo-400 before:via-purple-500 before:to-violet-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
