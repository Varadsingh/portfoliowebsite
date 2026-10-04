import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowRight, Terminal, MapPin, Mail, Phone, Github, Download, Menu, X, Award, Check, Sun, Moon } from 'lucide-react';
import { experience, skills, awards } from './data';
import './styles.css';

const companies = [
  { name: 'Citi', logo: 'citi.svg' },
  { name: 'Snowflake', logo: 'snowflake.svg' },
  { name: 'KetteQ', logo: 'ketteq.svg' },
  { name: 'TIAA', logo: 'tiaa.svg' },
  { name: 'Deloitte', logo: 'deloitte.svg' },
  { name: 'LTI', logo: 'lti.png' },
  { name: 'Capgemini', logo: 'capgemini.svg' },
  { name: 'IBM', logo: 'ibm.svg' },
];

function InteractiveTerminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{command: string; output: string}[]>([]);
  function run(value: string) {
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') { setHistory([]); setCommand(''); return; }
    const answers: Record<string, string> = {
      help: 'Available commands: about, skills, experience, contact, clear',
      about: 'Varadsingh Pardeshi · Data Engineer · Associate Vice President at Citi Bank · Pune, India. 13 years in IT, data engineering, ETL, warehousing, and BI.',
      skills: 'Python · SQL · PySpark · Snowflake · AWS · dbt · Airflow · Talend · DataStage · Kafka',
      experience: 'Citi → Snowflake → KetteQ → TIAA → Deloitte → LTI → Capgemini → IBM. Explore the full timeline below.',
      contact: 'Email: varadsingh@hotmail.com | Phone: +91 9850893927',
    };
    setHistory(previous => [...previous.slice(-3), {command: cmd, output: answers[cmd] ?? `Command not found: ${cmd}. Type help to explore.`}]);
    setCommand('');
  }
  return <div className="terminal-card">
    <div className="terminal-bar"><div className="window-dots"><i/><i/><i/></div><span>varad@portfolio: ~</span><Terminal size={15}/></div>
    <div className="terminal-body">
      <p className="prompt"><span>❯</span> cat profile.json</p>
      <div className="code"><span className="muted">{'{'}</span><br/>&nbsp; <span className="code-key">"name"</span>: <span className="code-value">"Varadsingh Pardeshi"</span>,<br/>&nbsp; <span className="code-key">"focus"</span>: <span className="code-value">"Data engineering"</span>,<br/>&nbsp; <span className="code-key">"experience"</span>: <span className="code-value">"13 years"</span>,<br/>&nbsp; <span className="code-key">"approach"</span>: [<br/>&nbsp;&nbsp;&nbsp; <span className="code-value">"Build reliable pipelines"</span>,<br/>&nbsp;&nbsp;&nbsp; <span className="code-value">"Automate the repetitive"</span>,<br/>&nbsp;&nbsp;&nbsp; <span className="code-value">"Lead with impact"</span><br/>&nbsp; ]<br/><span className="muted">{'}'}</span></div>
      <div className="terminal-history" aria-live="polite">{history.map((entry, i) => <div key={i}><p className="prompt"><span>❯</span> {entry.command}</p><p className="terminal-output">{entry.output}</p></div>)}</div>
      <form onSubmit={event => { event.preventDefault(); run(command); }}><label htmlFor="command">❯</label><input id="command" value={command} onChange={event => setCommand(event.target.value)} placeholder="Type help and press enter" autoComplete="off" spellCheck={false} maxLength={120} aria-label="Terminal command"/></form>
      <div className="quick-commands">{['about', 'skills', 'contact'].map(cmd => <button key={cmd} onClick={() => run(cmd)}>{cmd} <ArrowUpRight size={11}/></button>)}</div>
    </div>
    <div className="terminal-status"><span><i/> All systems operational</span><span>Python / SQL / Cloud</span></div>
  </div>;
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101310' : '#f7f8f2');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works when storage is unavailable. */ }
  }, [theme]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  async function copyEmail() { try { await navigator.clipboard.writeText('varadsingh@hotmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 2500); } catch { window.location.href = 'mailto:varadsingh@hotmail.com'; } }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a href="#" className="brand" aria-label="Varadsingh home">v<span>.</span><span className="brand-name">VARADSINGH</span></a><nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">{['About', 'Experience', 'Skills'].map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a></nav><div className="header-controls"><button className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div></header>
    <main id="main">
      <section className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> DATA ENGINEER · BUILDER · PROBLEM SOLVER</div><h1>Making data<br/>work <span className="serif">better.</span></h1><p className="hero-intro">Hi, I’m <strong>Varadsingh Pardeshi.</strong><br/>I build reliable data systems, turn complexity into clarity, and make room for what matters through automation.</p><div className="hero-actions"><a className="button primary" href="#experience">Explore my work <ArrowUpRight size={18}/></a><a className="button text-button" href="/Varadsingh-Pardeshi-Resume.docx" download><Download size={16}/> Resume</a></div><div className="hero-meta"><MapPin size={14}/> Pune, India <span> / </span> Currently at Citi Bank</div></div><InteractiveTerminal/></section>
      <div className="company-strip container"><span>EXPERIENCE ACROSS</span><div className="company-logos">{companies.map(company => <div className={`company-logo company-logo-${company.name.toLowerCase()}`} key={company.name} title={company.name}><img src={`/logos/${company.logo}`} alt={company.name} width="120" height="42"/></div>)}</div></div>
      <section id="about" className="section container"><div className="section-top"><span className="eyebrow">01 / THE BIG PICTURE</span><span className="small-note">Built on experience. Driven by impact.</span></div><div className="about-grid"><h2>Good engineering.<br/><span className="serif">Real outcomes.</span></h2><div><p className="large-copy">13 years connecting the dots between data, people, and business.</p><p className="body-copy">My work spans data engineering, ETL, data warehousing, and BI reporting across eight employers. From enterprise migrations to cloud pipelines, I bring a practical focus: dependable delivery, less manual work, and data people can trust.</p></div></div><div className="metrics"><article><strong>13<span> yrs</span></strong><p>IT & data experience</p></article><article><strong>7<span> FTE</span></strong><p>Saved through automation at IBM & Capgemini</p></article><article><strong>60<span>%</span></strong><p>Reduction in request MTTR at TIAA</p></article><article><strong>8<span> people</span></strong><p>Migration team led at IBM</p></article></div></section>
      <section id="experience" className="section container"><div className="section-top"><span className="eyebrow">02 / THE JOURNEY</span><a className="inline-link" href="/Varadsingh-Pardeshi-Resume.docx" download>Full resume <ArrowUpRight size={15}/></a></div><h2>A career built<br/>on <span className="serif">moving forward.</span></h2><p className="section-description">Enterprise scale. Hands-on delivery. A constant drive to improve.</p><div className="timeline">{experience.map((job, index) => <details key={job.company} className="job" open={index === 0 ? true : undefined}><summary><div className="job-index">{String(index + 1).padStart(2, '0')}</div><div className="job-heading"><h3>{job.company}{index === 0 && <span className="current">CURRENT</span>}</h3><p>{job.role} <span>· {job.location}</span></p></div><span className="job-date">{job.dates}</span><span className="expand-icon">+</span></summary><div className="job-content"><p className="job-summary">{job.summary}</p><ul>{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{job.stack.map(item => <span key={item}>{item}</span>)}</div></div></details>)}</div></section>
      <section id="skills" className="section skills-section"><div className="container"><div className="section-top"><span className="eyebrow">03 / THE TOOLKIT</span><span className="small-note">The right tools. The right foundation.</span></div><h2>From source<br/>to <span className="serif">possibility.</span></h2><div className="skills-grid">{skills.map(group => <article className="skill-card" key={group.title}><span className="skill-number">/{group.number}</span><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><div className="pipeline" aria-label="Data workflow"><span>INGEST</span><ArrowRight/><span>TRANSFORM</span><ArrowRight/><span>ORCHESTRATE</span><ArrowRight/><span>DELIVER</span></div></div></section>
      <section className="section container" id="education"><div className="section-top"><span className="eyebrow">04 / ALWAYS LEARNING</span></div><div className="education-grid"><div><h2>A strong foundation.<br/><span className="serif">A curious mind.</span></h2><div className="certification"><Award size={24}/><div><strong>Snowflake Core Certification</strong><p>Earned during my time at Snowflake</p></div></div></div><div className="education-list"><article><span className="small-note">2017 — 2018</span><h3>PG Diploma in Data Science</h3><p>IIIT – Bangalore</p><span className="grade">CGPA 3.45 / 4</span></article><article><span className="small-note">2009 — 2013</span><h3>BTech in Computer Science</h3><p>VJTI – Mumbai University</p><span className="grade">CGPA 7.1 / 10</span></article><div className="school"><p><strong>HSC · 10+2</strong><span>2007 — 2009 · 82%</span></p><p><strong>ICSE · 10th</strong><span>2006 — 2007 · 80%</span></p></div></div></div></section>
      <section className="section container awards-section"><div className="section-top"><span className="eyebrow">05 / RECOGNITION</span></div><h2>Work that <span className="serif">gets noticed.</span></h2><div className="awards-grid">{awards.map(([company, title, description]) => <article key={title}><span className="award-company">{company}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section id="contact" className="contact-section container"><div className="eyebrow"><span className="status-dot"/> LET’S CONNECT</div><h2>Great things start<br/>with a <span className="serif">conversation.</span></h2><p>Have a data challenge, an interesting opportunity, or an idea to exchange? Let’s talk.</p><a className="email-link" href="mailto:varadsingh@hotmail.com">varadsingh@hotmail.com <ArrowUpRight/></a><div className="contact-links"><button onClick={copyEmail}>{copied ? <Check size={16}/> : <Mail size={16}/>} {copied ? 'Email copied' : 'Copy email'}</button><a href="tel:+919850893927"><Phone size={16}/> +91 9850893927</a><a href="https://github.com/Varadsingh" target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><span><MapPin size={16}/> Pune, India</span></div><span role="status" className="sr-only">{copied ? 'Email address copied to clipboard' : ''}</span></section>
    </main><footer className="container"><span>© {new Date().getFullYear()} Varadsingh Pardeshi</span><span>Built with curiosity & a little code.</span><a href="#">Back to top <ArrowDown size={14} className="up-arrow"/></a></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>);
