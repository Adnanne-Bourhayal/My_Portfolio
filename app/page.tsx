"use client"

import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { profile } from "@/lib/profile"

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={id + "-title"} className="scroll-mt-16 border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id={id + "-title"} className="mb-8 text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title={t.nav.about}>
          <p className="max-w-2xl leading-relaxed">{t.about}</p>
        </Section>
        <Section id="projects" title={t.nav.projects}>
          <div className="grid gap-5 md:grid-cols-2">
            {t.projects.map(project => (
              <Card key={project.name} className="gap-4 p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p>{project.summary}</p>
                <details><summary className="cursor-pointer text-blue-600 dark:text-blue-400">{t.details}</summary><p className="mt-3 text-muted-foreground">{project.detail}</p></details>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="skills" title={t.nav.skills}>
          <ul className="flex flex-wrap gap-2">{t.skills.map(skill => <li key={skill} className="rounded-lg bg-muted px-4 py-2">{skill}</li>)}</ul>
        </Section>
        {(["experience", "education"] as const).map(id => (
          <Section key={id} id={id} title={t.nav[id]}>
            {t[id].map(item => (
              <article key={item.title} className="mb-5 border-l-2 border-blue-500 pl-5">
                <h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </Section>
        ))}
        <Section id="contact" title={t.nav.contact}>
          {profile.contactUrl ? <a className="underline" href={profile.contactUrl}>{t.contactAction}</a> : <p>{t.contactPlaceholder}</p>}
        </Section>
      </main>
      <BackToTop />
    </>
  )
}
