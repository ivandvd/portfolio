import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Master in AI and Data Analytics</h3>
                    <p className="text-muted-foreground">Asian Institute of Management (AIM) · 2020 – 2021</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-muted-foreground">
                    Graduate program focused on applying artificial intelligence and data-driven decision-making to real-world business and technology challenges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "AI Analytics", "Natural Language Processing", "AI Strategy", "Capstone Projects"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Science in Electrical Engineering</h3>
                    <p className="text-muted-foreground">Technological University of the Philippines · 2010 – 2014</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-muted-foreground">
                    Strong technical foundation in circuit design, signal processing, control systems, and embedded electronics. Developed analytical and problem-solving skills that bridge hardware engineering with modern software and AI systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Circuit Design", "Signal Processing", "Control Systems", "Embedded Systems", "Engineering Mathematics"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
