import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Section = {
  id: string
  number: string
  title: string
  body: string
  button: string
}

type AboutView = 'summary' | '01a' | '01b' | '01c'
type ExperienceView = 'summary' | '02a' | '02b' | '02c'
type ProjectsView = 'summary' | '03a' | '03aa' | '03ab'
type SkillsView = 'summary' | 'expanded'
type ContactView = 'summary' | 'expanded'

type SectionViews = {
  about: AboutView
  experience: ExperienceView
  projects: ProjectsView
  skills: SkillsView
  contact: ContactView
}

type SectionId = keyof SectionViews
type TricklePhase = 'idle' | 'out' | 'in'

const sections: Section[] = [
  {
    id: 'about',
    number: '01',
    title: 'Who I Am',
    body: "I'm a software engineer who enjoys turning ambitious ideas into systems that scale. From AI-powered healthcare to distributed infrastructure and enterprise logistics, I've always been drawn to problems where architecture matters as much as implementation.",
    button: 'Continue the Journey',
  },
  {
    id: 'experience',
    number: '02',
    title: 'Experience',
    body: 'Every role added another layer to how I think about engineering. From leading teams to building production systems, each experience shaped the way I approach architecture, collaboration, and solving problems at scale.',
    button: 'Explore Experience',
  },
  {
    id: 'projects',
    number: '03',
    title: 'Featured Projects',
    body: 'Two engineering projects that represent how I think about building software. Each explores a different challenge and is presented as a complete engineering case study.',
    button: 'Explore Case Studies',
  },
  {
    id: 'skills',
    number: '04',
    title: 'Capabilities',
    body: "Technologies are tools. The real skill lies in choosing the right ones for the problem. I've focused on strong fundamentals across backend engineering, distributed systems, cloud infrastructure, and AI.",
    button: 'Explore Craft',
  },
  {
    id: 'contact',
    number: '05',
    title: "Let's Build Something Meaningful",
    body: "Whether it's building products, discussing distributed systems, exploring AI, or simply exchanging ideas, I'm always open to thoughtful conversations.",
    button: 'Reach Out',
  },
]

const transitionMs = 520

const summaryViews: SectionViews = {
  about: 'summary',
  experience: 'summary',
  projects: 'summary',
  skills: 'summary',
  contact: 'summary',
}

function viewsFromHash(hash: string): SectionViews {
  const normalized = hash.replace(/\/+$/, '')

  if (normalized === '#/about') {
    return { ...summaryViews, about: '01a' }
  }

  if (normalized === '#/about/01a') {
    return { ...summaryViews, about: '01a' }
  }

  if (normalized === '#/about/01b') {
    return { ...summaryViews, about: '01b' }
  }

  if (normalized === '#/about/01c') {
    return { ...summaryViews, about: '01c' }
  }

  if (normalized === '#/experience') {
    return { ...summaryViews, experience: '02a' }
  }

  if (normalized === '#/experience/02a') {
    return { ...summaryViews, experience: '02a' }
  }

  if (normalized === '#/experience/02b') {
    return { ...summaryViews, experience: '02b' }
  }

  if (normalized === '#/experience/02c') {
    return { ...summaryViews, experience: '02c' }
  }

  if (normalized === '#/projects') {
    return { ...summaryViews, projects: '03a' }
  }

  if (normalized === '#/projects/pulse') {
    return { ...summaryViews, projects: '03aa' }
  }

  if (normalized === '#/projects/url-shortener') {
    return { ...summaryViews, projects: '03ab' }
  }

  if (normalized === '#/skills') {
    return { ...summaryViews, skills: 'expanded' }
  }

  if (normalized === '#/contact') {
    return { ...summaryViews, contact: 'expanded' }
  }

  return summaryViews
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

function getActiveIndex(progress: number, count: number) {
  if (count <= 1) {
    return 0
  }

  return Math.min(count - 1, Math.max(0, Math.round(progress * (count - 1))))
}

function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const contentTrackRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024)
  const [activeIndex, setActiveIndex] = useState(0)
  const [views, setViews] = useState<SectionViews>(() => viewsFromHash(window.location.hash))
  const [targetViews, setTargetViews] = useState<SectionViews>(() => viewsFromHash(window.location.hash))
  const [phases, setPhases] = useState<Record<SectionId, TricklePhase>>({
    about: 'idle',
    experience: 'idle',
    projects: 'idle',
    skills: 'idle',
    contact: 'idle',
  })

  const updateProgress = (progress: number) => {
    if (rootRef.current) {
      rootRef.current.style.setProperty('--journey-progress', progress.toFixed(4))
    }

    const index = getActiveIndex(progress, sections.length)
    setActiveIndex((prev) => (prev === index ? prev : index))
  }

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    const onChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
      updateProgress(0)
      setActiveIndex(0)
    }

    setIsDesktop(media.matches)
    updateProgress(0)

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setTargetViews(viewsFromHash(window.location.hash))
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const ids: SectionId[] = ['about', 'experience', 'projects', 'skills', 'contact']
    const changed = ids.filter((id) => views[id] !== targetViews[id])

    if (changed.length === 0) {
      return
    }

    const timers: number[] = []

    changed.forEach((id) => {
      setPhases((prev) => ({ ...prev, [id]: 'out' }))

      const outTimer = window.setTimeout(() => {
        setViews((prev) => ({ ...prev, [id]: targetViews[id] }))
        setPhases((prev) => ({ ...prev, [id]: 'in' }))

        const inTimer = window.setTimeout(() => {
          setPhases((prev) => ({ ...prev, [id]: 'idle' }))
        }, transitionMs)

        timers.push(inTimer)
      }, transitionMs)

      timers.push(outTimer)
    })

    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId))
    }
  }, [targetViews, views])

  useLayoutEffect(() => {
    const root = rootRef.current
    const scene = sceneRef.current
    const contentTrack = contentTrackRef.current

    if (!root || !scene || !contentTrack) {
      return
    }

    if (!isDesktop) {
      const onMobileScroll = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? clamp01(window.scrollY / maxScroll) : 0
        updateProgress(progress)
      }

      onMobileScroll()
      window.addEventListener('scroll', onMobileScroll, { passive: true })
      return () => window.removeEventListener('scroll', onMobileScroll)
    }

    const ctx = gsap.context(() => {
      const getShift = () => Math.max(0, contentTrack.scrollWidth - window.innerWidth)

      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: () => `+=${getShift()}`,
        pin: scene,
        scrub: 0.45,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = clamp01(self.progress)
          const shift = getShift()

          gsap.set(contentTrack, {
            x: -(shift * progress),
          })

          updateProgress(progress)
        },
      })
    }, root)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) {
      return
    }

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY + event.deltaX

      if (Math.abs(delta) < 0.1) {
        return
      }

      event.preventDefault()
      window.scrollBy({
        top: delta,
        behavior: 'auto',
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isDesktop])

  const handleNavClick = (index: number) => {
    if (isDesktop && rootRef.current && contentTrackRef.current) {
      const maxShift = Math.max(0, contentTrackRef.current.scrollWidth - window.innerWidth)
      const ratio = sections.length > 1 ? index / (sections.length - 1) : 0
      const targetY = rootRef.current.offsetTop + maxShift * ratio

      window.scrollTo({ top: targetY, behavior: 'smooth' })
      return
    }

    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openHash = (hash: string) => {
    if (window.location.hash === hash) {
      return
    }

    window.location.hash = hash
  }

  return (
    <div className="journey-page" ref={rootRef}>
      <header className="journey-nav">
        <button className="brand-button" onClick={() => handleNavClick(0)}>
          Swayam Pendgaonkar
        </button>

        <nav className="main-nav">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`nav-link ${activeIndex === index ? 'is-active' : ''}`}
              onClick={() => handleNavClick(index)}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <button className="cta-button" onClick={() => handleNavClick(sections.length - 1)}>
          Get in touch
        </button>
      </header>

      <main className="scene-shell" ref={sceneRef}>
        <div className="scene-layers" aria-hidden="true">
          <div className="layer panorama-layer" />
          <div className="layer atmosphere-layer" />
          <div className="layer vignette-layer" />
        </div>

        <div className="content-track" ref={contentTrackRef}>
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="journey-section"
              ref={(node) => {
                sectionRefs.current[index] = node
              }}
            >
              <div className="reading-column">
                {section.id !== 'projects' ? (
                  section.id === 'about' ? (
                    <div className={`detail-text-shell trickle-${phases.about}`}>
                      {views.about === 'summary' ? (
                        <>
                          <p className="section-number trickle-line">{section.number}</p>
                          <h1 className="trickle-line">{section.title}</h1>
                          <p className="section-copy trickle-line">{section.body}</p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/about')}>
                            {section.button}
                          </button>
                        </>
                      ) : views.about === '01a' ? (
                        <>
                          <p className="section-number trickle-line">01A</p>
                          <h1 className="trickle-line">My Philosophy</h1>
                          <p className="section-copy trickle-line">
                            I don't believe software ends at writing code. Great products emerge when
                            engineering, product thinking, and user experience work together.
                          </p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/about/01b')}>
                            Next
                          </button>
                        </>
                      ) : views.about === '01b' ? (
                        <>
                          <p className="section-number trickle-line">01B</p>
                          <h1 className="trickle-line">What Drives Me</h1>
                          <p className="section-copy trickle-line">
                            I enjoy solving problems that don't have obvious answers: distributed systems,
                            artificial intelligence, developer infrastructure, and backend architecture.
                          </p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/about/01c')}>
                            Next
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="section-number trickle-line">01C</p>
                          <h1 className="trickle-line">Today</h1>
                          <p className="section-copy trickle-line">
                            Currently building enterprise-scale backend systems at Maersk while continuously
                            exploring distributed systems, cloud infrastructure, and applied AI.
                          </p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/')}>
                            Return to Departure
                          </button>
                        </>
                      )}
                    </div>
                  ) : section.id === 'experience' ? (
                    <div className={`detail-text-shell trickle-${phases.experience}`}>
                      {views.experience === 'summary' ? (
                        <>
                          <p className="section-number trickle-line">{section.number}</p>
                          <h1 className="trickle-line">{section.title}</h1>
                          <p className="section-copy trickle-line">{section.body}</p>
                          <button
                            className="section-button trickle-line"
                            onClick={() => openHash('#/experience')}
                          >
                            {section.button}
                          </button>
                        </>
                      ) : views.experience === '02a' ? (
                        <>
                          <p className="section-number trickle-line">02A</p>
                          <h1 className="trickle-line">Maersk</h1>
                          <p className="section-copy trickle-line">
                            Associate Software Engineer. Building enterprise logistics systems serving
                            operations across multiple countries.
                          </p>
                          <p className="section-copy trickle-line">
                            Focused on backend architecture, Java migration, Kubernetes, production
                            reliability, and developer productivity.
                          </p>
                          <button
                            className="section-button trickle-line"
                            onClick={() => openHash('#/experience/02b')}
                          >
                            Next
                          </button>
                        </>
                      ) : views.experience === '02b' ? (
                        <>
                          <p className="section-number trickle-line">02B</p>
                          <h1 className="trickle-line">Science to People</h1>
                          <p className="section-copy trickle-line">
                            Technical Project Manager. Worked on AI-powered diagnostic systems using RAG,
                            vector search, and Google Cloud.
                          </p>
                          <p className="section-copy trickle-line">
                            Bridged product, engineering, and research to transform ideas into deliverable
                            software.
                          </p>
                          <button
                            className="section-button trickle-line"
                            onClick={() => openHash('#/experience/02c')}
                          >
                            Next
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="section-number trickle-line">02C</p>
                          <h1 className="trickle-line">Project Human City</h1>
                          <p className="section-copy trickle-line">
                            Started as an intern and finished leading engineering across teams, products,
                            and microservices as CTO.
                          </p>
                          <p className="section-copy trickle-line">
                            Built delivery processes, CI/CD pipelines, engineering culture, and product
                            strategy.
                          </p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/')}>
                            Return to Foundations
                          </button>
                        </>
                      )}
                    </div>
                  ) : section.id === 'skills' ? (
                    <div className={`detail-text-shell trickle-${phases.skills}`}>
                      {views.skills === 'summary' ? (
                        <>
                          <p className="section-number trickle-line">{section.number}</p>
                          <h1 className="trickle-line">{section.title}</h1>
                          <p className="section-copy trickle-line">{section.body}</p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/skills')}>
                            {section.button}
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="section-number trickle-line">04A</p>
                          <h1 className="trickle-line">Craft</h1>
                          <p className="section-copy trickle-line">
                            Backend: Java, Python, FastAPI, Node.js, Spring Boot, REST APIs, Microservices.
                          </p>
                          <p className="section-copy trickle-line">
                            Distributed: Redis, Docker, Kubernetes, Nginx, load balancing, caching, queues,
                            WebSockets.
                          </p>
                          <p className="section-copy trickle-line">
                            AI & Data: RAG, LLMs, vector search, prompt engineering, Vertex AI, OpenAI,
                            embeddings. Cloud: AWS, Azure, GCP, CI/CD, observability.
                          </p>
                          <button className="section-button trickle-line" onClick={() => openHash('#/')}>
                            Back to Journey
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className={`detail-text-shell trickle-${phases.contact}`}>
                      {views.contact === 'summary' ? (
                        <>
                          <p className="section-number trickle-line">{section.number}</p>
                          <h1 className="trickle-line">{section.title}</h1>
                          <p className="section-copy trickle-line">{section.body}</p>
                          <button
                            className="section-button trickle-line"
                            onClick={() => openHash('#/contact')}
                          >
                            {section.button}
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="section-number trickle-line">05</p>
                          <h1 className="trickle-line">Swayam Pendgaonkar</h1>
                          <p className="section-copy trickle-line">
                            The next part of the journey has not been written yet. Open to thoughtful
                            conversations on systems, AI, and product engineering.
                          </p>
                          <div className="project-detail-grid trickle-line">
                            <article>
                              <h2>Email</h2>
                              <p>
                                <a href="mailto:swayam.pendgaonkar@gmail.com">
                                  swayam.pendgaonkar@gmail.com
                                </a>
                              </p>
                            </article>
                            <article>
                              <h2>LinkedIn</h2>
                              <p>
                                <a href="https://linkedin.com/in/skp2208" target="_blank" rel="noreferrer">
                                  linkedin.com/in/skp2208
                                </a>
                              </p>
                            </article>
                            <article>
                              <h2>GitHub</h2>
                              <p>
                                <a href="https://github.com/starrylight90" target="_blank" rel="noreferrer">
                                  github.com/starrylight90
                                </a>
                              </p>
                            </article>
                            <article>
                              <h2>Resume</h2>
                              <p>
                                <a
                                  href="/Swayam_Pendgaonkar_Resume_SoftwareEngineer.pdf"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Open Resume PDF
                                </a>
                              </p>
                            </article>
                          </div>
                          <button className="section-button trickle-line" onClick={() => openHash('#/')}>
                            Back to Journey
                          </button>
                        </>
                      )}
                    </div>
                  )
                ) : (
                  <div className={`detail-text-shell trickle-${phases.projects}`}>
                    {views.projects === 'summary' ? (
                      <>
                        <p className="section-number trickle-line">{section.number}</p>
                        <h1 className="trickle-line">{section.title}</h1>
                        <p className="section-copy trickle-line">{section.body}</p>
                        <button className="section-button trickle-line" onClick={() => openHash('#/projects')}>
                          {section.button}
                        </button>
                      </>
                    ) : views.projects === '03a' ? (
                      <>
                        <p className="section-number trickle-line">03A</p>
                        <h1 className="trickle-line">Engineering</h1>
                        <p className="section-copy trickle-line">
                          Pulse and URL Shortener are presented as complete engineering case studies.
                        </p>

                        <div className="project-detail-grid trickle-line">
                          <article>
                            <h2>Pulse</h2>
                            <p>Distributed Real-Time Communication Platform</p>
                            <button className="section-button" onClick={() => openHash('#/projects/pulse')}>
                              Open 03AA
                            </button>
                          </article>
                          <article>
                            <h2>URL Shortener</h2>
                            <p>Production-ready Distributed URL Shortener</p>
                            <button
                              className="section-button"
                              onClick={() => openHash('#/projects/url-shortener')}
                            >
                              Open 03AB
                            </button>
                          </article>
                        </div>

                        <button className="section-button trickle-line" onClick={() => openHash('#/')}>
                          Back to Journey
                        </button>
                      </>
                    ) : views.projects === '03aa' ? (
                      <>
                        <p className="section-number trickle-line">03AA</p>
                        <h1 className="trickle-line">Pulse</h1>
                        <p className="section-copy trickle-line">
                          Distributed Real-Time Communication Platform. Pulse explores reliability,
                          scalability, and cross-instance delivery beyond a single-server chat app.
                        </p>
                        <p className="section-copy trickle-line">
                          Architecture: FastAPI, WebSockets, Redis Pub/Sub, PostgreSQL, Docker, Nginx, JWT.
                        </p>
                        <p className="section-copy trickle-line">
                          Highlights: reconnect sync, presence, receipts, metrics, and horizontal scaling.
                        </p>
                        <button className="section-button trickle-line" onClick={() => openHash('#/projects')}>
                          Back to 03A
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="section-number trickle-line">03AB</p>
                        <h1 className="trickle-line">Distributed URL Shortener</h1>
                        <p className="section-copy trickle-line">
                          A production-inspired service focused on caching, regional routing, analytics, and
                          resilience under traffic.
                        </p>
                        <p className="section-copy trickle-line">
                          Architecture: Node.js, Express, Redis, SQLite, Nginx, Docker, regional routing.
                        </p>
                        <p className="section-copy trickle-line">
                          Highlights: cache-aside pattern, load balancing, TTL support, health monitoring.
                        </p>
                        <button className="section-button trickle-line" onClick={() => openHash('#/projects')}>
                          Back to 03A
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="progress-row" aria-hidden="true">
          {sections.map((section, index) => (
            <div key={section.id} className={`progress-dot ${index <= activeIndex ? 'is-filled' : ''}`} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
