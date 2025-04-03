"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  const skillCategories = [
    {
      id: "languages",
      name: "Langages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 80 },
        { name: "C#", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 80 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Spring", level: 80 },
        { name: "Jersey", level: 85 },
        { name: ".NET", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      id: "databases",
      name: "BDD",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Neo4j", level: 65 },
        { name: "Firebase", level: 70 },
        { name: "Azure Storage", level: 80 },
        { name: "Amazon S3", level: 75 },
      ],
    },
    {
      id: "tools",
      name: "Outils",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "Azure DevOps", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Visual Studio", level: 90 },
        { name: "JetBrains", level: 95 },
      ],
    },
  ]

  return (
      <div>
        <Tabs defaultValue="languages" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-2 py-1.5 text-sm">
                    {category.name}
                  </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.skills.map((skill, index) => (
                          <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                          >
                            <div className="mb-2 flex justify-between">
                              <span className="font-medium text-slate-900">{skill.name}</span>
                              <span className="text-sm text-slate-500">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                              <motion.div
                                  className="h-full rounded-full bg-blue-600"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  viewport={{ once: true }}
                              ></motion.div>
                            </div>
                          </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
          ))}
        </Tabs>
      </div>
  )
}

