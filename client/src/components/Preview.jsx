const date = value => value ? new Date(`${value}-01`).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : '';
const List = ({ title, items, render }) => items?.length ? <section><h2>{title}</h2>{items.map(item => <article key={item.id}>{render(item)}</article>)}</section> : null;
export function Preview({ resume }) {
  const p = resume.personal;
  const contact = [p.email, p.phone, p.location, p.linkedin, p.github, p.portfolio].filter(Boolean);
  return <div className={`paper ${resume.template}`} style={{ '--accent': resume.accent }}>
    <header><h1>{p.name || 'Your Name'}</h1><p className="role">{p.title || resume.targetRole || 'Professional title'}</p><p className="contact">{contact.join('  ·  ') || 'email@example.com · City, Country'}</p></header>
    {resume.summary && <section><h2>Profile</h2><p>{resume.summary}</p></section>}
    <List title="Education" items={resume.education} render={x => <><div className="entry-head"><strong>{x.degree || 'Degree'}{x.field ? `, ${x.field}` : ''}</strong><span>{date(x.start)} – {x.current ? 'Present' : date(x.end)}</span></div><em>{x.school}</em>{x.gpa && <span className="muted"> · GPA: {x.gpa}</span>}{x.description && <p>{x.description}</p>}</>} />
    <List title="Projects" items={resume.projects} render={x => <><div className="entry-head"><strong>{x.name || 'Project name'}</strong><span>{x.url}</span></div>{x.tech && <p className="tech">{x.tech}</p>}{x.description && <p>{x.description}</p>}</>} />
    <List title="Research & Publications" items={resume.research} render={x => <><div className="entry-head"><strong>{x.title || 'Research title'}</strong><span>{x.year}</span></div><em>{x.venue}</em>{x.description && <p>{x.description}</p>}</>} />
    {resume.skills.length > 0 && <section><h2>Skills</h2><p>{resume.skills.join(' · ')}</p></section>}
    <List title="Activities" items={resume.activities} render={x => <><strong>{x.role}</strong> {x.organization && <>— {x.organization}</>}{x.description && <p>{x.description}</p>}</>} />
    {resume.languages.length > 0 && <section><h2>Languages</h2><p>{resume.languages.map(x => `${x.name}${x.level ? ` (${x.level})` : ''}`).join(' · ')}</p></section>}
  </div>;
}
