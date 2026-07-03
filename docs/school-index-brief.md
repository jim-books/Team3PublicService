# A Data-Driven School Index for Thailand

*Concept brief — combining a fundamental quality standard, a national equity index, and school contextualization*

> **Source:** Converted from `school_index_brief (1).docx` for Team 3 reference.

## 1. Purpose in one line

Build a single, annually-refreshed index that tells us, for every school, *how far it sits below an acceptable standard once its real context is taken into account* — and turns that gap directly into a costed equity-funding entitlement.

## 2. Why this, and why now

Thailand already has the two hardest pieces in place. It has adapted a **Fundamental School Quality Levels (FSQL)** approach, which sets minimum school-quality standards and attaches a costing to them, and it maintains a national database of individual-student data. What is missing is a way to combine "what a school should have" with "what its students actually bring with them" into one number that drives funding fairly.

New Zealand solved a version of this problem with its **Equity Index**, which in 2023 replaced its earlier decile system. This brief proposes borrowing that method and marrying it to the standards-and-costing approach, then adding a contextualization layer built for Thai realities.

## 3. The three foundations

**Fundamental quality standard (supply side — "what the school has").** A set of minimum standards across domains such as infrastructure, teachers, and learning materials, each with a cost attached. It is normative: it defines a floor and tells you the budget needed to reach it. Its strength is that it converts directly into money.

**Equity index (demand side — "what the students face").** A single number per school, built from student-level socio-economic factors and refreshed every year from linked administrative data, as New Zealand does with its Equity Index. Crucially, it measures barriers to achievement, not school quality, and New Zealand keeps it non-public to avoid the stigma that undermined its earlier decile system. Its weakness — visible in New Zealand's own reviews — is that one number flattens context: two schools with the same score can face very different realities.

**Contextualization (the Thai-specific fix).** This is the layer that answers that weakness. It adds factors that other countries may not need but Thailand cannot ignore: remoteness and protected small schools, non-Thai first language and ethnic-minority students, the southern border provinces, disaster exposure, and chronic teacher shortages in remote areas. Australia offers the closest working precedent, using location-based funding loadings to give remote and regional schools extra resources.

## 4. Conceptual framework

**Central proposition.** A school's ability to reach a minimum quality standard is shaped not by the school alone but by the socio-economic and geographic context of the students it serves. If resources are allocated in proportion to the context-adjusted gap between a school's current state and the standard, the system moves toward equity — an equal chance to reach the standard, not equal funding per school.

**The causal logic (theory of change).** Context and student circumstances are measured as a composite index; the index drives costed funding and targeting; the funding helps schools close the gap to the standard; and closing that gap reduces disparity in learning conditions and outcomes. Results then feed back each year to keep the measurement current.

```
Student and community context
        ↓
Composite school index · quality gap · disadvantage · context loading
        ↓
Costed equity funding and policy targeting
        ↓
Schools close the gap to the quality standard
        ↓
Educational equity — equal chance to reach the standard
        ↺ Results refresh the inputs every year (annual loop)
```

**Key constructs.**

- *Fundamental quality standard* — the normative floor a school should meet.
- *Contextual disadvantage* — the barriers the student cohort brings with it.
- *Context-adjusted need* — the central construct: the distance to the standard once context is taken into account.
- *Equity-funding entitlement* — the costed resource response to that need.
- *Educational equity* — the ultimate outcome: comparable opportunity to reach the standard regardless of context.

**Underlying assumptions (what must hold for the logic to work).**

1. The standard is a valid definition of "adequate."
2. The chosen context factors genuinely predict barriers to achievement, and are validated against real outcomes.
3. Money targeted at the gap actually improves school conditions and results.
4. The underlying data is reliable, reasonably complete, and can be refreshed annually.
5. Schools have the autonomy and capacity to convert extra funding into improvement.
6. There is political willingness to redistribute, cushioned by transition protection.

## 5. How it works — a data-driven Input → Process → Output design

The system is built as a loop, not a one-off measurement. Each year's results feed back to refresh the inputs, so the index tracks reality rather than going stale — the opposite of a fixed decile system that New Zealand found went out of date.

**Input.** Four sources: the national student-level database, the fundamental quality standards and their costs, local-context variables (remoteness, language, school size), and outcome data (national and international assessments, and dropout) used only to validate that the chosen variables genuinely predict results.

**Process.** Three layers:

- *Layer 1 — quality gap and cost:* how far the school is below the standard, and what closing that gap would cost.
- *Layer 2 — contextual disadvantage index:* an equity-index-style score of the barriers the student cohort faces.
- *Layer 3 — Thai context loading:* multipliers for remoteness, size, language, and disaster risk.

These are then weighted and validated against outcomes, and the whole thing refreshes annually.

**Output.** Two streams. A diagnostic stream — a per-school profile and a report of where it falls short of standard — and an allocation stream — a costed equity-funding entitlement and a ranked list of which schools to help first.

## 6. Data collection: what, how, and why

The index is only as good as the data behind it. Four data domains feed the model. For each, the table sets out what is collected, how it is collected, and why it matters.

| Data domain | What is collected | How it is collected | Why it is collected |
|-------------|-------------------|---------------------|---------------------|
| **Student context (demand side)** | Family income and poverty status, parental education, welfare history, household size, student mobility, language spoken at home, ethnicity or nationality, disability status | Records in national student database; income screening tied to subsidy programs; linkage across welfare and civil-registration data; annual enrollment reporting; verification through school and home visits | To quantify the barriers each student cohort brings — the core equity signal behind Layer 2 |
| **School quality inputs (supply side)** | Five domains — leadership; learning outcomes; teacher quality; infrastructure; and learning & feedback loops (new) — with detailed indicators (broken out in Section 6.1): leadership and monitoring, classroom teaching practice, buildings, water, power, sanitation, internet, learning spaces, safety, learning materials, and the school's own use of data to improve | School self-reporting through an annual education-management survey scored on a rubric; facility audits and inspections; classroom observation; teacher and human-resource records | To measure the gap between the school's current state and the minimum standard, and to cost that gap (Layer 1) |
| **Local and geographic context** | Remoteness (distance to the nearest town or school), protected small-school status, enrollment size, disaster-exposure zone, border-area flag, share of non-Thai-first-language students | Geospatial and mapping datasets; administrative flags; hazard maps; enrollment data | To apply the context loadings in Layer 3, so schools with identical scores are not treated identically |
| **Outcomes (validation only)** | National and international assessment results, dropout and completion rates, attendance | National testing systems; enrollment and attendance tracking | To confirm the chosen factors actually predict barriers to achievement — not to rank schools |

**How the data is handled.** Individual records are linked across agencies but anonymized, so no one can see the circumstances of a named child. The data is refreshed every year rather than left static, which is what keeps the index tracking real conditions. Cross-agency linkage and disclosure follow privacy rules, and — following New Zealand's experience — the raw index number can be kept non-public to prevent it being misread as a quality ranking.

### 6.1 What is collected in detail — the school-quality sub-indicators

The "school quality inputs" row above is measured through a fundamental quality standard organized into five domains and a detailed set of indicators. This is the granular list of what is actually collected on the supply side. Domains 1–4 come from the established framework; Domain 5, learning and feedback loops, is new — it captures at the school level the same data-driven improvement cycle that the whole index runs on.

**Domain 1 — Leadership (4 consideration areas).**

- Leadership and management
- Education-quality monitoring and evaluation mechanisms
- Resource management and development — human, financial, and technical
- Support for staff and students to improve student quality and welfare

**Domain 2 — Learning outcomes (1 consideration area).**

- Student learning outcomes

**Domain 3 — Teacher quality (2 consideration areas).**

- Teacher qualification and professional development
- **Learning management** — assessed through a classroom-observation tool with eight teaching indicators:
  - Plans the lesson so students can access and understand it
  - Connects prior knowledge and experience to new learning
  - Helps students construct knowledge or new experience themselves
  - Motivates learners
  - Supports students' learning progress
  - Gives feedback to improve learning
  - Creates a classroom climate suited to learning
  - Fosters eagerness to learn and lifelong learning
- A video-based observation adds classroom culture, instruction, and social-emotional skills (time on task, supportive environment, positive behaviour expectations, facilitation, checks for understanding, feedback, critical thinking, autonomy, perseverance, and collaboration)

**Domain 4 — Infrastructure (43 indicators across 4 areas).**

- **School accessibility (4):** a clean, shaded, safe and welcoming environment; a safety and protection system (gates with opening hours, defined drop-off points, duty teachers, CCTV, signage, fencing, a safety plan); communication systems; and roads and walkways in good condition.
- **Optimal spaces for learning (11):** classroom space of at least 2 sqm per student; class size (40:1 primary and secondary, 30:1 kindergarten); sufficient and safe desks and chairs; classroom teaching readiness (board, teacher desk, storage, display screen; activity corners for kindergarten); internet-connected computers; a safe sports field; a playground; a multipurpose hall; canteen seating; a library or learning-resource centre; and science and practical labs.
- **Safety, health and design for equity (22):** building-condition inspection and repair; an infirmary with basic medicines; fire preparedness and extinguishers; adequate toilets; a water source and tap water; fences and gates; accessible pathways and ramps for students with disabilities; waste management; continuous electricity with backup; automatic power cut-off; sound roof and structural condition; and safe floor and wall materials.
- **Learning materials and aids for students (6):** teaching aids and materials for every subject; supplementary reading materials; materials and equipment for every learning area; a full set of core-subject textbooks per student; a minimum set of learning materials per student; and appropriate materials for ethnic-minority students, including Thai-language teaching materials.

**Domain 5 — Learning & feedback loops (NEW).**

- Reviews its own performance using assessment and monitoring data each cycle
- Sets improvement targets and checks whether the actions taken actually worked (closing the loop)
- Draws on feedback from students, parents, and the community to guide decisions
- Runs regular plan–do–review improvement cycles as part of normal school routine
- Updates its school profile each year so progress is visible over time

Each indicator is scored on a rubric (a 0–4 or 1–5 scale, plus not-applicable), so a school's result is both a profile of where it stands and a basis for costing the gap to standard. Additional indicators are defined for small, stand-alone schools that cannot be merged.

## 7. Three design decisions that must be settled first

Everything downstream depends on these, so they should be decided before any building begins.

1. **Primary purpose.** Is the index for funding, for diagnosis, or for accountability? New Zealand deliberately restricted its equity index to funding to avoid it being misread as a quality ranking.
2. **Unit of measurement.** Student-level (as New Zealand does) or school/area-level? The national database holds student-level data, so the richer option is feasible, but it raises data-governance and privacy questions.
3. **Disclosure.** Public or not? New Zealand keeps its index numbers private to prevent stigma. Publishing a Thai school index risks turning it into a league table — though the contextualization layer, framed well, could instead show context rather than assign blame.

## 8. Key risks and mitigations

- **Stigma / labelling.** The single biggest lesson from New Zealand: decile ratings were misread as quality scores and stigmatized lower-rated schools. *Mitigation:* consider non-disclosure of the raw number and lead with context, not ranking.
- **Over-simplification.** A single index flattens context. *Mitigation:* pair the number with a multi-dimensional school profile rather than reporting the score alone.
- **Political economy of redistribution.** Any reallocation creates losers; New Zealand saw a share of schools face phased funding cuts. *Mitigation:* build transition protection (annual loss caps) from the start.
- **Data infrastructure.** The model is only as good as the data feeding it, and needs reliable cross-agency linkage. *Mitigation:* treat national-database integration and refresh cadence as the critical operational path.
- **Validity.** Factors and weights must be shown to predict real outcomes. *Mitigation:* validate against national and international assessments and dropout data, as New Zealand validated its factors against many years of achievement data.

## 9. Recommended next steps

1. Decide the three design questions in Section 7.
2. Build a data dictionary: for each input variable, confirm its source and whether it already exists in the national database.
3. Specify the Layer-2 weighting method and the annual validation loop in detail.
4. Run a small-scale pilot (for example, one region with a high share of remote and small schools) before any national rollout, with transition protection modelled in.

---

*Prepared as a concept brief. Draws on the fundamental school quality standard approach and its adaptation in Thailand, New Zealand's equity index, and Australia's location-based funding.*
