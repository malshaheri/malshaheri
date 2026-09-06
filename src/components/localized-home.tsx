import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CodeIcon,
  DatabaseIcon,
  GithubIcon,
  LayersIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  TerminalIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  education,
  experience,
  featuredProject,
  languages,
  projects,
  siteConfig,
  skillGroups,
} from "@/data/portfolio";
import { Locale, translations } from "@/data/translations";
import { localizedContent } from "@/data/localized-content";

const skillIcons = [CodeIcon, LayersIcon, DatabaseIcon, TerminalIcon];

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const lc = localizedContent[locale];

  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="heroGlow heroGlowOne" aria-hidden="true" />
        <div className="heroGlow heroGlowTwo" aria-hidden="true" />

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="availability">
              <span />
              {t.hero.availability}
            </div>

            <p className="heroEyebrow">{t.hero.greeting}</p>

            <h1>
              {t.hero.titleStart} <span>{t.hero.titleHighlight}</span>
            </h1>

            <p className="heroLead">{t.hero.intro}</p>

            <div className="heroActions">
              <Link className="button primaryButton" href={`/${locale}#work`}>
                {t.hero.workButton} <ArrowUpRight />
              </Link>

              <a
                className="button secondaryButton"
                href={locale === "de" ? siteConfig.resumeDe : siteConfig.resumeEn}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.cvButton}
              </a>
            </div>

            <div className="socialRow" aria-label="Social links">
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>

              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>

              <a href={`mailto:${siteConfig.email}`}>
                <MailIcon /> Email
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-label="Profile">
            <div className="portraitFrame">
              <div className="portraitBackdrop" />

              <Image
                className="portrait"
                src="/images/mohammed-alshaheri.png"
                width={417}
                height={598}
                priority
                alt="Mohammed Alshaheri"
              />

              <div className="roleCard">
                <span className="roleDot" />
                <div>
                  <strong>{lc.role}</strong>
                  <span>React · Node.js · TypeScript</span>
                </div>
              </div>

              <div className="locationCard">
                <MapPinIcon />
                <span>{t.hero.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section workSection" id="work">
        <div className="container">
          <SectionHeading
            eyebrow={t.work.eyebrow}
            title={t.work.title}
            description={t.work.description}
          />

          <article className="featuredProject">
            <div className="featuredCopy">
              <p className="projectEyebrow">{t.work.featured}</p>

              <div className="projectTitleRow">
                <h3>{featuredProject.name}</h3>
                <span className="statusBadge">
                  <span /> {t.work.active}
                </span>
              </div>

              <p className="projectLead">
                {lc.featuredProject.description}
              </p>

              <ul className="featureList">
                {lc.featuredProject.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tagList">
                {featuredProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projectActions">
                <Link
                  className="textLink"
                  href={`/${locale}/projects/abbod-delivery`}
                >
                  {t.work.caseStudy} <ArrowUpRight />
                </Link>

                <a
                  className="textLink mutedLink"
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>

            <div
              className="productMockup"
              aria-label="Abbod Delivery product architecture preview"
            >
              <div className="mockupTopbar">
                <span />
                <span />
                <span />
                <small>Abbod Delivery · Operations</small>
              </div>

              <div className="mockupBody">
                <div className="mockupSidebar">
                  <div className="sidebarLogo">AD</div>
                  <span className="active" />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="mockupContent">
                  <div className="mockupHeading">
                    <div>
                      <small>Overview</small>
                      <strong>Delivery operations</strong>
                    </div>
                    <span className="mockButton">+ New order</span>
                  </div>

                  <div className="metricGrid">
                    <div>
                      <span>Open orders</span>
                      <strong>24</strong>
                      <small>Live queue</small>
                    </div>

                    <div>
                      <span>Drivers</span>
                      <strong>12</strong>
                      <small>Configured</small>
                    </div>

                    <div>
                      <span>Delivered</span>
                      <strong>86</strong>
                      <small>Today</small>
                    </div>
                  </div>

                  <div className="orderPanel">
                    <div className="orderPanelTitle">
                      <strong>Recent orders</strong>
                      <span>View all</span>
                    </div>

                    {[
                      "#1048 · In delivery",
                      "#1047 · Assigned",
                      "#1046 · Delivered",
                    ].map((order, index) => (
                      <div className="orderRow" key={order}>
                        <span
                          className={`orderIcon orderIcon${index + 1}`}
                        />
                        <span>{order}</span>
                        <small>
                          {index === 0
                            ? "12 min"
                            : index === 1
                              ? "18 min"
                              : "32 min"}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.name}>
                <div className="projectCardTop">
                  <div className="projectMeta"><span>{project.year}</span>{project.badge ? <span className="projectBadge">{project.badge}</span> : null}</div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={project.name}
                  >
                    <ArrowUpRight />
                  </a>
                </div>

                <h3>{lc.projects[index]?.name ?? project.name}</h3>

                <p>
                  {lc.projects[index]?.description ??
                    project.description}
                </p>

                <div className="tagList compactTags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtleSection" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />

          <div className="skillsGrid">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index];

              return (
                <article className="skillCard" key={group.title}>
                  <div className="skillIcon">
                    <Icon />
                  </div>

                  <h3>{lc.skillTitles[index] ?? group.title}</h3>

                  <div className="skillItems">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container experienceLayout">
          <div className="experienceIntro">
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article
                className="timelineItem"
                key={`${item.period}-${item.title}`}
              >
                <div className="timelineMarker" aria-hidden="true" />

                <p className="timelinePeriod">
                  {locale === "de"
                    ? item.period
                        .replace("Present", "heute")
                        .replace("Nov ", "Nov. ")
                    : item.period}
                </p>

                <h3>
                  {lc.experience[index]?.title ?? item.title}
                </h3>

                <p className="timelineCompany">
                  {lc.experience[index]?.company ?? item.company}
                </p>

                <p>
                  {lc.experience[index]?.description ??
                    item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="container aboutGrid">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>

          <div className="aboutCopy">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>
        </div>

        <div className="container detailGrid">
          <div className="detailCard">
            <p className="detailLabel">{t.about.education}</p>

            {education.map((item, index) => (
              <div className="detailEntry" key={item.title}>
                <div>
                  <strong>
                    {lc.education[index]?.title ?? item.title}
                  </strong>

                  <span>
                    {lc.education[index]?.institution ??
                      item.institution}
                  </span>
                </div>

                <small>
                  {locale === "de"
                    ? item.period.replace("Jan ", "Jan. ")
                    : item.period}
                </small>
              </div>
            ))}
          </div>

          <div className="detailCard">
            <p className="detailLabel">{t.about.languages}</p>

            {languages.map((item, index) => (
              <div className="languageRow" key={item.language}>
                <strong>
                  {lc.languages[index]?.language ?? item.language}
                </strong>

                <span>
                  {lc.languages[index]?.level ?? item.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="container contactCard">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
          </div>

          <div className="contactActions">
            <a
              className="button lightButton"
              href={`mailto:${siteConfig.email}`}
            >
              <MailIcon /> {siteConfig.email}
            </a>

            <a
              className="button outlineLightButton"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}