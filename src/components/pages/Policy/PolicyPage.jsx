import { useState, useRef, useEffect } from "react";
import sigImage from "../../../assets/signature.png"; // ← replace with your actual signature image import

// ─── Brand tokens ────────────────────────────────────────────────────────────
const FOREST   = "#2C4F4A";
const FOREST_L = "#3a6660";
const CREAM    = "#FBF8F3";
const PARCHMENT= "#F0EAE0";
const SAGE     = "#8BAF8B";
const INK      = "#1e2e2b";
const MUTED    = "#5a6f6c";
const BORDER   = "#D6CFC4";

// ─── Google Font injection (Cormorant Garamond) ───────────────────────────────
const fontLink = document.createElement("link");
fontLink.rel  = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap";
if (!document.head.querySelector('[href*="Cormorant"]')) {
  document.head.appendChild(fontLink);
}

// ─── Icons ───────────────────────────────────────────────────────────────────
const IconShield = ({ open }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke={open ? "#fff" : FOREST} strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.38C16.5 21.15 20 16.25 20 11V5z"/>
  </svg>
);
const IconLock = ({ open }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke={open ? "#fff" : FOREST} strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconCalendar = ({ open }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke={open ? "#fff" : FOREST} strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconUsers = ({ open }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke={open ? "#fff" : FOREST} strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconHeart = ({ open }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
    stroke={open ? "#fff" : FOREST} strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconChevron = ({ open }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
    stroke={open ? FOREST : MUTED} strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "transform 0.35s cubic-bezier(.4,0,.2,1)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// ─── Reusable sub-components ──────────────────────────────────────────────────
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "28px" }}>
    {title && (
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.15rem", fontWeight: 600,
        color: FOREST, marginBottom: "10px",
        paddingBottom: "7px",
        borderBottom: `1px solid ${PARCHMENT}`,
      }}>{title}</h2>
    )}
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: "14.5px", color: "#3d4f4d", lineHeight: 1.85, marginBottom: "10px" }}>
    {children}
  </p>
);

const Ul = ({ items }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px",
        fontSize: "14px", color: "#3d4f4d", lineHeight: 1.8, padding: "4px 0" }}>
        <span style={{ flexShrink: 0, width: "6px", height: "6px", borderRadius: "50%",
          background: SAGE, marginTop: "9px" }}/>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Ol = ({ items }) => (
  <ol style={{ listStyle: "none", padding: 0, margin: "8px 0 0", counterReset: "item" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px",
        fontSize: "14px", color: "#3d4f4d", lineHeight: 1.8, padding: "4px 0" }}>
        <span style={{ flexShrink: 0, minWidth: "20px", fontSize: "12px",
          fontWeight: 600, color: FOREST, paddingTop: "2px" }}>{i + 1}.</span>
        <span>{item}</span>
      </li>
    ))}
  </ol>
);

const SubTitle = ({ children }) => (
  <p style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: ".1em",
    textTransform: "uppercase", color: FOREST, margin: "18px 0 6px" }}>
    {children}
  </p>
);

const SignatureBlock = ({ date, name = "Valerie Merceron (DSL)", sigImageSrc }) => (
  <div style={{
    marginTop: "36px", padding: "22px 26px",
    background: PARCHMENT, borderRadius: "10px",
    borderLeft: `3px solid ${FOREST}`,
    display: "flex", alignItems: "flex-end",
    justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
  }}>
    <div>
      <span style={{ display: "block", fontSize: "10px", fontWeight: 600,
        letterSpacing: ".12em", textTransform: "uppercase", color: SAGE, marginBottom: "4px" }}>
        Date
      </span>
      <span style={{ fontSize: "14px", color: MUTED }}>{date}</span>
    </div>
    <div style={{ textAlign: "right" }}>
      {sigImageSrc ? (
        <img src={sigImageSrc} alt="Signature" style={{ height: "52px", width: "auto",
          display: "block", marginLeft: "auto", marginBottom: "4px" }} />
      ) : (
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: "2rem", color: INK, display: "block", lineHeight: 1, marginBottom: "4px" }}>
          V. Merceron
        </span>
      )}
      <span style={{ fontSize: "12.5px", color: MUTED }}>{name}</span>
    </div>
  </div>
);

// ─── Animated accordion panel ─────────────────────────────────────────────────
const AccordionPanel = ({ open, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(open ? ref.current.scrollHeight : 0);
  }, [open, children]);

  return (
    <div style={{
      maxHeight: `${height}px`,
      overflow: "hidden",
      transition: "max-height 0.45s cubic-bezier(.4,0,.2,1)",
    }}>
      <div ref={ref} style={{ padding: "0 28px 36px" }}>
        <div style={{ width: "100%", height: "1px", background: BORDER, marginBottom: "30px" }}/>
        {children}
      </div>
    </div>
  );
};

// ─── Single accordion item ────────────────────────────────────────────────────
const AccordionItem = ({ tag, title, icon: Icon, children, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const toggle = () => setOpenIndex(isOpen ? null : index);

  return (
    <div
      onClick={() => {}} // handled below
      style={{
        background: "#fff",
        border: `1px solid ${BORDER}`,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: isOpen
          ? "0 8px 36px rgba(44,79,74,.12)"
          : "0 2px 12px rgba(44,79,74,.05)",
        transform: isOpen ? "translateY(-1px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        animationDelay: `${index * 0.07}s`,
      }}
      className="policy-accordion-item"
    >
      {/* Trigger */}
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          gap: "18px", padding: "24px 26px",
          background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        {/* Icon bubble */}
        <span style={{
          flexShrink: 0, width: "44px", height: "44px", borderRadius: "10px",
          background: isOpen ? FOREST : PARCHMENT,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s",
        }}>
          <Icon open={isOpen} />
        </span>

        {/* Label */}
        <span style={{ flex: 1 }}>
          <span style={{ display: "block", fontSize: "10.5px", fontWeight: 600,
            letterSpacing: ".14em", textTransform: "uppercase", color: SAGE, marginBottom: "3px" }}>
            {tag}
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem", fontWeight: 600, color: INK, lineHeight: 1.2 }}>
            {title}
          </span>
        </span>

        <IconChevron open={isOpen} />
      </button>

      {/* Panel */}
      <AccordionPanel open={isOpen}>{children}</AccordionPanel>
    </div>
  );
};

// ─── POLICY DATA ──────────────────────────────────────────────────────────────
// sigImageSrc: replace with your actual import or URL, e.g. import sig from './signature.png'
const SIG_IMAGE = sigImage; // ← swap to your signature image src

// ─── Main export ─────────────────────────────────────────────────────────────
export function PolicyPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        background: FOREST, padding: "72px 24px 64px",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(139,175,139,.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(251,248,243,.06) 0%, transparent 50%)
          `,
        }}/>

        <p style={{ fontFamily: "inherit", fontSize: "11px", fontWeight: 600,
          letterSpacing: ".18em", textTransform: "uppercase", color: SAGE,
          marginBottom: "14px", position: "relative" }}>
          Marley's Whisper
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 500,
          color: "#fff", lineHeight: 1.15, marginBottom: "18px", position: "relative",
        }}>
          Our Policies
        </h1>

        <p style={{ maxWidth: "520px", margin: "0 auto", fontSize: "15px",
          color: "rgba(255,255,255,.65)", lineHeight: 1.85, position: "relative" }}>
          Transparency, trust and safeguarding are at the heart of everything we do.
          Our policies reflect our commitment to every child, family and partner we work with.
        </p>

        <div style={{ width: "48px", height: "2px", background: SAGE,
          margin: "28px auto 0", borderRadius: "2px" }}/>
      </section>

      {/* ── ACCORDION ── */}
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 24px 96px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* ① SAFEGUARDING */}
          <AccordionItem index={0} openIndex={openIndex} setOpenIndex={setOpenIndex}
            tag="Child Welfare" title="Safeguarding Policy" icon={IconShield}>

            <Section title="1. Introduction">
              <P>Marley's Whisper is committed to safeguarding and promoting the welfare, safety, and well-being of all children and young people who engage with our services. This policy outlines the organisation's approach to safeguarding and child protection, setting out clear expectations, procedures, and responsibilities for all staff, volunteers, contractors, and anyone acting on behalf of Marley's Whisper.</P>
              <P>This policy should be read in conjunction with our Health, Safety &amp; Risk Management Policy, Behaviour Policy, and any relevant local authority or statutory guidance.</P>
            </Section>

            <Section title="2. Principles">
              <Ul items={[
                "The welfare of the child is paramount.",
                "All children and young people have the right to feel safe, protected, and valued, regardless of age, gender, disability, race, religion, sexuality, background, or ability.",
                "Safeguarding is everyone's responsibility. All adults involved in Marley's Whisper must act promptly on any concerns.",
                "Children's experiences and voices should always be heard, respected, and taken seriously.",
                "Partnership working with parents/carers, schools, external agencies, and local authorities is essential to promoting safeguarding and ensuring effective protection.",
              ]}/>
            </Section>

            <Section title="3. Aims">
              <Ul items={[
                "Protect children and young people from harm, abuse, neglect, exploitation, and unsafe practices.",
                "Promote a culture of vigilance, transparency, and accountability.",
                "Ensure that staff know how to recognise, respond to, and report safeguarding concerns.",
                "Establish clear procedures for allegations, disclosures, and incidents.",
                "Define the organisation's expectations regarding behaviour, professional conduct, and safe working practices.",
                "Support children and families in a compassionate, child-centred manner.",
              ]}/>
            </Section>

            <Section title="4. Scope">
              <P>This policy applies to all staff (employed or contracted), volunteers, tutors, mentors, sessional workers, activity leaders, external providers delivering services on our behalf, and visitors attending sessions where children are present.</P>
            </Section>

            <Section title="5. About Marley's Whisper">
              <P>Marley's Whisper provides personalised, flexible support for students who experience barriers accessing mainstream school. We work with children and young people — often with special educational needs, social, emotional, or behavioural challenges — and engage families to restore confidence, build resilience, and encourage active learning.</P>
              <P>We recognise that some students may display behaviours associated with trauma, neurodiversity, or unmet needs, which may increase safeguarding risk factors. Marley's Whisper maintains a proactive approach to identifying need and ensuring students are supported with safety, dignity, and respect.</P>
            </Section>

            <Section title="6. Definition of Safeguarding">
              <P>Safeguarding includes protecting children from maltreatment; preventing impairment of their mental or physical health or development; ensuring safe and effective care; taking action to ensure the best outcomes for children and young people; and maintaining arrangements that prevent abuse or unsafe situations.</P>
              <P>Marley's Whisper adheres to statutory safeguarding frameworks, including <em>Working Together to Safeguard Children</em> and <em>Keeping Children Safe in Education</em>.</P>
            </Section>

            <Section title="7. Types of Abuse">
              <Ul items={[
                "Physical abuse", "Emotional abuse", "Sexual abuse", "Neglect",
                "Child criminal exploitation (CCE)", "Child sexual exploitation (CSE)",
                "County lines involvement", "Domestic abuse",
                "Online abuse and cyberbullying", "Extremism and radicalisation",
              ]}/>
            </Section>

            <Section title="8. Safer Recruitment">
              <P>Marley's Whisper operates robust safer recruitment procedures, including enhanced DBS checks, verification of identity and qualifications, employment history checks and references, assessment of attitudes toward safeguarding during interviews, and mandatory safeguarding induction before beginning work. No staff member or volunteer may work with children until all required checks are completed.</P>
            </Section>

            <Section title="9. Designated Safeguarding Lead (DSL)">
              <P>A nominated Designated Safeguarding Lead (DSL) oversees safeguarding across the organisation. Responsibilities include receiving and assessing safeguarding concerns, making referrals to children's social care, maintaining secure records, ensuring staff training, and liaising with schools, local authorities, and families. All concerns must be reported to the DSL without delay.</P>
            </Section>

            <Section title="10. Recognising and Responding to Concerns">
              <P>Staff must take immediate action if a child discloses abuse, shows signs of abuse or neglect, a third party raises concerns, there is suspicion of radicalisation or exploitation, or behavioural changes suggest unmet needs.</P>
              <SubTitle>When a child discloses:</SubTitle>
              <Ol items={[
                "Listen without interruption",
                "Remain calm and believe the child",
                "Use open, non-leading questions only if needed for clarity",
                "Do not promise confidentiality",
                "Explain next steps",
                "Record the disclosure accurately and promptly",
                "Report to the DSL immediately",
              ]}/>
            </Section>

            <Section title="11. Reporting Procedures">
              <P>All safeguarding concerns must be documented on the organisation's safeguarding concern form and sent to the DSL the same working day, preferably within one hour of the incident. The DSL will assess risk, consult statutory guidance, contact social care or police where required, inform the referring school where appropriate, and maintain confidential safeguarding files.</P>
            </Section>

            <Section title="12–18. Additional Provisions">
              <P>Further provisions cover: working transparently with parents and carers unless doing so places a child at greater risk; risk management including risk assessments, safe supervision ratios, and trauma-informed approaches; safe working practices such as professional boundaries and approved communication channels; training at induction and annually; allegations against staff reported to DSL or Director and referred to LADO; and strict, secure record keeping in restricted-access systems.</P>
            </Section>

            <Section title="Policy Review">
              <P>This policy will be reviewed annually, after any significant safeguarding incident, when statutory guidance is updated, and as part of organisational quality assurance.</P>
            </Section>

            <SignatureBlock date="19 / 11 / 2026" sigImageSrc={SIG_IMAGE} />
          </AccordionItem>

          {/* ② DATA PROTECTION */}
          <AccordionItem index={1} openIndex={openIndex} setOpenIndex={setOpenIndex}
            tag="Privacy & Compliance" title="Data Protection Policy" icon={IconLock}>

            <Section title="1. Purpose">
              <P>Marley's Whisper is committed to protecting the privacy, rights, and freedoms of all children, young people, families, staff, and partners. This policy sets out how we collect, use, store, and share personal information lawfully, securely, and transparently.</P>
            </Section>

            <Section title="2. Scope">
              <P>This policy applies to all staff, volunteers, contractors, and anyone working on behalf of Marley's Whisper, as well as all personal data relating to students, parents/carers, staff, and partners.</P>
            </Section>

            <Section title="3. Legal Framework">
              <P>Marley's Whisper complies with:</P>
              <Ul items={[
                "The UK General Data Protection Regulation (UK GDPR)",
                "The Data Protection Act 2018",
                "Relevant safeguarding and education legislation",
              ]}/>
            </Section>

            <Section title="4. Principles of Data Protection">
              <P>Marley's Whisper handles all personal data in line with the following principles. Data must be:</P>
              <Ol items={[
                "Processed lawfully, fairly and transparently",
                "Collected for specified, explicit and legitimate purposes",
                "Adequate, relevant and limited to what is necessary",
                "Accurate and kept up to date",
                "Stored securely and retained only for as long as necessary",
                "Handled with integrity and confidentiality",
              ]}/>
            </Section>

            <Section title="5. Categories of Data We Collect">
              <Ul items={[
                "Personal identification: names, addresses, contact details",
                "Educational information: assessments, attendance, progress",
                "Special category data (only where necessary and with protection): SEN information, safeguarding information, medical needs",
                "Operational data: session notes, reports, referral information",
              ]}/>
            </Section>

            <Section title="6. Why We Collect Data">
              <Ul items={[
                "Provide personalised support for students",
                "Safeguard and protect children and young people",
                "Communicate with families and schools",
                "Meet legal obligations",
                "Monitor performance and improve provision",
              ]}/>
            </Section>

            <Section title="7. Lawful Basis for Processing">
              <Ul items={[
                "Public task – delivering education-related support",
                "Legal obligation – safeguarding, health and safety, reporting requirements",
                "Vital interests – protecting someone at risk of harm",
                "Consent – where explicitly required (e.g., media use)",
              ]}/>
            </Section>

            <Section title="8. Data Sharing">
              <P>We share data only when necessary and proportionate. This may include schools, local authorities and multi-agency partners, health or safeguarding professionals, and emergency services when required. Any sharing complies with UK GDPR and safeguarding duties. We do not share data with third parties for marketing.</P>
            </Section>

            <Section title="9. Storage, Security and Retention">
              <Ul items={[
                "Data is stored securely (password-protected systems, encrypted devices, restricted access).",
                "Paper records are kept locked and disposed of securely.",
                "Data is retained only for the period required by statutory guidance or organisational need.",
              ]}/>
            </Section>

            <Section title="10. Rights of Individuals">
              <P>Individuals have rights to access their data, request correction or deletion, withdraw consent (where consent is the lawful basis), and object to certain types of processing. Requests will be responded to within one calendar month.</P>
            </Section>

            <Section title="11. Data Breaches">
              <P>Any suspected data breach must be reported immediately to the Designated Data Protection Lead. Serious breaches will be reported to the ICO within 72 hours where required.</P>
            </Section>

            <Section title="12. Roles and Responsibilities">
              <Ul items={[
                "Data Protection Lead (DPL — Valérie Merceron): Ensures compliance, oversees data practices.",
                "All staff: Must handle data responsibly, follow procedures, and report concerns.",
                "Management: Ensures adequate training, systems, and monitoring.",
              ]}/>
            </Section>

            <Section title="13. Training">
              <P>All staff and volunteers receive regular data protection and information security training.</P>
            </Section>

            <Section title="14. Review">
              <P>This policy is reviewed annually or sooner if legislation or organisational practice changes.</P>
            </Section>

            <SignatureBlock date="19 / 11 / 2026" sigImageSrc={SIG_IMAGE} />
          </AccordionItem>

          {/* ③ ATTENDANCE */}
          <AccordionItem index={2} openIndex={openIndex} setOpenIndex={setOpenIndex}
            tag="Engagement & Wellbeing" title="Attendance Policy" icon={IconCalendar}>

            <Section title="1. Purpose">
              <P>Marley's Whisper supports children and young people who struggle to access education. This Attendance Policy sets out how we encourage, monitor, and improve attendance so students can engage fully and safely in learning.</P>
            </Section>

            <Section title="2. Commitment">
              <Ul items={[
                "Promoting regular and punctual attendance.",
                "Working collaboratively with families, schools, and professionals.",
                "Removing barriers that prevent students from accessing education.",
              ]}/>
              <P>Because many students have additional needs and may face complex challenges, we approach attendance with flexibility, patience, and a focus on wellbeing.</P>
            </Section>

            <Section title="3. Expectations">
              <SubTitle>Students</SubTitle>
              <Ul items={[
                "Engage in sessions to the best of their ability.",
                "Communicate any difficulties that may affect their attendance.",
              ]}/>
              <SubTitle>Parents / Carers</SubTitle>
              <Ul items={[
                "Ensure students are available for agreed sessions.",
                "Inform Marley's Whisper as soon as possible when a student cannot attend, providing reasons.",
                "Share any concerns that may impact attendance.",
              ]}/>
              <SubTitle>Marley's Whisper Staff</SubTitle>
              <Ul items={[
                "Record attendance accurately.",
                "Follow up on non-attendance promptly.",
                "Work with families to understand and reduce barriers.",
                "Report persistent concerns to the referring school or agency.",
              ]}/>
            </Section>

            <Section title="4. Recording Attendance">
              <Ul items={[
                "Attendance is recorded at the start of each session.",
                "Absences are marked as authorised only when a legitimate reason is provided (e.g., illness, medical appointment, unavoidable circumstances).",
                "All other absences are recorded as unauthorised.",
              ]}/>
            </Section>

            <Section title="5. Non-attendance Procedures">
              <P>If a student does not attend an arranged session:</P>
              <Ol items={[
                "Staff attempt to contact the parent/carer.",
                "If contact cannot be made, the referring school/agency is informed.",
                "Any welfare concerns are escalated in line with Marley's Whisper's Safeguarding Policy.",
              ]}/>
            </Section>

            <Section title="6. Supporting Attendance">
              <Ul items={[
                "Offer personalised strategies based on the student's needs.",
                "Review attendance patterns regularly.",
                "Work with families and partners to reduce barriers and support engagement.",
              ]}/>
            </Section>

            <Section title="7. Monitoring and Reporting">
              <Ul items={[
                "Attendance data is shared with the referring school or agency.",
                "Persistent non-attendance is reviewed and may lead to a joint meeting to plan next steps.",
              ]}/>
            </Section>

            <SignatureBlock date="19 / 11 / 2026" sigImageSrc={SIG_IMAGE} />
          </AccordionItem>

          {/* ④ EQUALITY & DIVERSITY */}
          <AccordionItem index={3} openIndex={openIndex} setOpenIndex={setOpenIndex}
            tag="Inclusion & Respect" title="Equality & Diversity Policy" icon={IconUsers}>

            <Section title="1. Policy Statement">
              <P>Marley's Whisper is committed to promoting equality, celebrating diversity, and ensuring that all children, young people, families, and staff are treated with fairness, dignity and respect. We value the individuality of every student and recognise the importance of providing an inclusive environment where everyone feels safe, supported, and able to participate fully.</P>
              <P>We aim to ensure that no individual is disadvantaged or discriminated against on the basis of age, disability, gender identity, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation, or any other protected characteristic.</P>
            </Section>

            <Section title="2. Purpose">
              <Ul items={[
                "Eliminating unlawful discrimination, harassment and victimisation.",
                "Advancing equality of opportunity.",
                "Fostering an inclusive environment where diversity is respected and celebrated.",
                "Ensuring our services are accessible to all students, including those with additional needs.",
              ]}/>
            </Section>

            <Section title="3. Scope">
              <P>This policy applies to all staff, contractors, and volunteers working on behalf of Marley's Whisper; all children, young people, and families receiving support; and all visitors and external partners involved in our services.</P>
            </Section>

            <Section title="4. Our Commitment">
              <Ul items={[
                "Provide an inclusive learning environment that meets diverse learning, social, and emotional needs.",
                "Ensure our practices, materials and communications reflect diversity and avoid bias.",
                "Respond promptly and effectively to any concerns or incidents related to discrimination, bullying or harassment.",
                "Adapt support for students with SEND, ensuring equal access to learning opportunities.",
                "Ensure recruitment, training and development processes are fair, transparent and based on merit.",
                "Encourage staff to recognise unconscious bias and participate in equality and inclusion training.",
                "Promote positive relationships and challenge stereotypes.",
              ]}/>
            </Section>

            <Section title="5. Responsibilities">
              <SubTitle>Management and Leadership</SubTitle>
              <Ul items={[
                "Implement and monitor the policy.",
                "Ensure staff understand their responsibilities.",
                "Address any breaches of the policy.",
              ]}/>
              <SubTitle>All Staff and Volunteers</SubTitle>
              <Ul items={[
                "Treat everyone with respect and professionalism.",
                "Promote inclusive practice and challenge discriminatory behaviour.",
                "Report concerns promptly to the designated lead.",
              ]}/>
              <SubTitle>Students and Families</SubTitle>
              <Ul items={["Are encouraged to contribute to an inclusive and respectful environment."]}/>
            </Section>

            <Section title="6. Reporting and Addressing Concerns">
              <P>All concerns relating to discrimination or unfair treatment will be taken seriously. Reports can be made to the Designated Safeguarding Lead (Valérie Merceron). All incidents will be investigated promptly and sensitively.</P>
            </Section>

            <Section title="7. Monitoring and Review">
              <P>Marley's Whisper will regularly review this policy to ensure it remains effective, relevant, and in line with legislation and best practice. Feedback from students, families, and staff will be considered as part of the review process.</P>
            </Section>

            <SignatureBlock date="19 / 11 / 2026" sigImageSrc={SIG_IMAGE} />
          </AccordionItem>

          {/* ⑤ HEALTH & SAFETY */}
          <AccordionItem index={4} openIndex={openIndex} setOpenIndex={setOpenIndex}
            tag="Safety & Risk" title="Health, Safety & Risk Management Policy" icon={IconHeart}>

            <Section>
              <P>This Health, Safety and Risk Management Policy applies to all individuals working for or on behalf of Marley's Whisper in any capacity, including staff, contractors, volunteers and partner professionals. Its primary purpose is to protect, promote and enhance the safety, welfare and well-being of all children and young people engaging with our services. Marley's Whisper is committed to fostering a culture of awareness, transparency, good practice and robust procedures so that every student can learn and thrive in a safe and supportive environment.</P>
            </Section>

            <Section>
              <P>Marley's Whisper specialises in supporting students who experience difficulties accessing mainstream school. Our work includes engaging with these young people and their families to develop strategies that help them re-engage with education and become active, confident learners. We recognise that many of the students we support present with complex needs and may exhibit challenging behaviours linked to their special educational needs, emotional regulation difficulties or past experiences.</P>
            </Section>

            <Section>
              <P>We acknowledge that risk cannot be eliminated entirely and that the nature of our work means staff may encounter unpredictable situations. However, Marley's Whisper is committed to identifying, assessing and managing potential risks to reduce the likelihood of harm. All off-site activities will be subject to a thorough risk assessment carried out by Marley's Whisper. Where activities are provided by external organisations, we will request and review their risk assessments to ensure they meet our standards.</P>
            </Section>

            <Section>
              <P>In the event of an injury or health-related incident that requires professional medical intervention, staff will contact the emergency services without delay. Once emergency support has been requested, a member of staff will notify the student's parent or carer as soon as reasonably possible, providing clear information about the situation and any actions taken.</P>
            </Section>

            <Section>
              <P>Through ongoing training, reflective practice and proactive risk management, Marley's Whisper remains committed to creating a safe, nurturing and effective learning environment for every child and young person in our care.</P>
            </Section>

            <SignatureBlock date="19 / 11 / 2025" name="Valérie Merceron (DSL)" sigImageSrc={SIG_IMAGE} />
          </AccordionItem>

        </div>
      </main>

      {/* Keyframe injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .policy-accordion-item {
          animation: fadeSlideIn 0.5s ease forwards;
        }

        button:focus-visible {
          outline: 2px solid ${SAGE};
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}