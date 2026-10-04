import { ArrowUpRight, ArrowRight, Database, GitBranch, Workflow, BarChart3 } from 'lucide-react';

const cases = [
  {
    id: 'migration', company: 'CITI BANK', category: 'Platform modernization',
    title: 'Moving ETL from Talend to Python.', result: '100%', resultLabel: 'migration accuracy',
    overview: 'Led the successful migration of Talend ETL workflows to Python while supporting Risk and Reporting operations.',
    challenge: 'Move existing ETL workflows to Python while preserving the accuracy of the migrated processing.',
    contribution: 'Led the Talend-to-Python ETL migration. In the same role, maintained Python backends and BAU dashboards and delivered additional Oracle migration work.',
    approach: 'Migrated the ETL implementation from Talend to Python. Related initiatives included Apache Ignite-to-Oracle (ORaaS) migration and an end-to-end Python application with API support for Oracle-to-ORaaS migration.',
    outcome: 'The Talend-to-Python migration completed successfully with 100% accuracy, as documented in my resume.',
    tools: ['Python', 'Talend', 'Oracle', 'Apache Ignite'],
  },
  {
    id: 'resolution', company: 'TIAA GBS', category: 'Production operations',
    title: 'Less manual handling. Faster resolution.', result: '60%', resultLabel: 'reduction in request MTTR',
    overview: 'Built request-handling automation alongside production ETL support and incident recovery.',
    challenge: 'Resolve data incidents and service requests while maintaining daily data loads and managing ETL execution against client SLAs.',
    contribution: 'Built request-handling automation, monitored daily ETL flows, and coordinated recovery from processing delays.',
    approach: 'Automated request handling within the production support workflow. The broader role supported PySpark, DataStage, Oracle, and UNIX jobs, with AWS, Snowflake, and Python in the technology stack.',
    outcome: 'Reduced mean time to resolution (MTTR) for requests by 60% and received appreciation for the automation.',
    tools: ['Python', 'PySpark', 'DataStage', 'Oracle', 'UNIX'],
  },
  {
    id: 'automation', company: 'IBM + CAPGEMINI', category: 'Operational automation',
    title: 'Making recurring work repeatable.', result: '7 FTE', resultLabel: 'saved across two separate roles',
    overview: 'Automated data profiling at IBM and KPI dashboards at Capgemini using Excel and VBA.',
    challenge: 'Recurring data profiling and KPI reporting required manual effort across two distinct roles.',
    contribution: 'At IBM, automated Excel data profiling. At Capgemini, automated KPI dashboards so managers could focus on priority issues.',
    approach: 'Used Excel and VBA to automate recurring profiling and dashboard tasks. These were two separate initiatives, delivered at different employers.',
    outcome: 'Saved 2 FTE at IBM and 5 FTE at Capgemini: a combined 7 FTE across both roles.',
    tools: ['Excel', 'VBA', 'Data profiling', 'KPI reporting'],
  },
];

export function SelectedWork() {
  return <section id="work" className="section container selected-work">
    <div className="section-top"><span className="eyebrow">02 / SELECTED WORK</span><span className="small-note">The challenge. The contribution. The result.</span></div>
    <h2>Engineering with<br/><span className="serif">measurable impact.</span></h2>
    <p className="section-description">Three examples of improving how data systems and operations work.</p>
    <div className="case-grid">{cases.map(study => <article className="case-card" key={study.id}>
      <div className="case-top"><span className="eyebrow">{study.company}</span><span className="case-category">{study.category}</span></div>
      <div className="case-result"><strong>{study.result}</strong><span>{study.resultLabel}</span></div>
      <h3>{study.title}</h3><p className="case-overview">{study.overview}</p>
      <details className="case-details"><summary aria-label={`Read case study: ${study.title}`}>Read case study <ArrowUpRight size={16} aria-hidden="true"/></summary><div className="case-story">
        {([['Challenge', study.challenge], ['My contribution', study.contribution], ['Approach', study.approach], ['Outcome', study.outcome]]).map(([heading, content]) => <div key={heading}><h4>{heading}</h4><p>{content}</p></div>)}
        <div className="tags">{study.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
      </div></details>
    </article>)}</div>
    <p className="work-note">Summarized from my resume. FTE = full-time equivalent; MTTR = mean time to resolution.</p>
  </section>;
}

const stages = [
  { title: 'Ingest', icon: Database, detail: 'Bring business-system data into the platform.', tools: 'Salesforce · APIs · Source systems' },
  { title: 'Transform', icon: GitBranch, detail: 'Shape raw inputs into useful datasets.', tools: 'Python · SQL · PySpark · dbt' },
  { title: 'Orchestrate', icon: Workflow, detail: 'Schedule loads and monitor execution.', tools: 'Airflow · Mage' },
  { title: 'Deliver', icon: BarChart3, detail: 'Make data available for reporting and analytics.', tools: 'Snowflake · Tableau · Cognos' },
];

export function Architecture() {
  return <div className="architecture">
    <div className="architecture-heading"><div><span className="eyebrow">HOW THE PIECES CONNECT</span><h3>From business systems to usable data.</h3></div><span className="architecture-label">Representative workflow</span></div>
    <ol className="architecture-flow">{stages.map((stage, index) => <li key={stage.title}>
      <div className="stage-top"><stage.icon size={23}/><span>0{index + 1}</span></div><h4>{stage.title}</h4><p>{stage.detail}</p><span className="stage-tools">{stage.tools}</span>{index < stages.length - 1 && <ArrowRight className="stage-arrow" size={17} aria-hidden="true"/>}
    </li>)}</ol>
    <p className="work-note">A simplified illustration using technologies from my experience. It represents capabilities across roles, rather than one client deployment.</p>
  </div>;
}
