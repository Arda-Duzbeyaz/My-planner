export const PLAN = {
  "version": "1.2.3",
  "start": "2026-11-07",
  "weekStart": "2026-11-09",
  "end": "2027-07-04",
  "timezone": "Europe/London",
  "weeks": [
    {
      "number": 1,
      "start": "2026-11-09",
      "label": "Urgent formative + Maven + UCL referees",
      "outcomes": [
        "Cloud: finish Activity 6.3 (run supplied Docker recognition container; test POST /detect; implement initial upload→recognition→serialisation flow; Olympus link due Tue 10 Nov 14:30).",
        "Cloud: attend Wed 11 Nov 09:00–11:00 feedback lab, at a permitted point in that window, with travel time; capture feedback and update task list.",
        "Maven: check MY invitation expiry immediately, complete if accessible; 9 Nov is only brother’s deadline, not confirmed as mine.",
        "FYP: confirm DCS ethics approval before data collection/implementation; then repository, environment and research implementation checklist.",
        "DDE: choose feasible permitted multi-node setup and install prerequisites; inspect exact lab rubric.",
        "UCL: contact two academic referees (including supervisor) and check 2027 intake application opening.",
        "Personal: Sat 7 Nov groceries with brother/friend, driving-test reschedule, meal essentials; first SchoolReach check-in.",
        "SchoolReach: diagnose outreach → demo → trial conversion and follow up with suitable prospects."
      ]
    },
    {
      "number": 2,
      "start": "2026-11-16",
      "label": "Setup and selection",
      "outcomes": [
        "DDE: decide 3-node VMware vs 5-node Docker (assess available 16 GB RAM), install Ubuntu/Java/Hadoop, capture configuration evidence.",
        "Cloud: formal Spring Boot project from supplied skeleton; make upload REST endpoint work locally.",
        "FYP: once ethics approved, load dividend-adjusted SPY dataset and validate fields/calendar; log data-source assumptions.",
        "AI: check current lab short-task sheet; complete and upload any outstanding short task, with correct filename; choose chatbot topic.",
        "Cognitive: configure sanctioned ROS2/Gazebo Docker image and verify guided navigation launch.",
        "UCL: confirm referee willingness and collect transcripts/CV/requirements; check whether intake applications are open."
      ]
    },
    {
      "number": 3,
      "start": "2026-11-23",
      "label": "Working foundations",
      "outcomes": [
        "DDE: single-node HDFS proof and first Java MapReduce example; record commands/evidence yourself.",
        "Cloud: implement image upload input validation and call unmodified recognition service; test normal/error response.",
        "FYP: implement and test chronological training/validation/test split handling; avoid touching test set during selection.",
        "AI: build starter topic-specific chitchat CSV and start lemmatisation/TF-IDF matching on own work; complete that week’s lab task.",
        "Cognitive: guided Nav2 baseline and record first measurements.",
        "UCL: draft focused personal statement with maths evidence and career goals; check early funding deadlines."
      ]
    },
    {
      "number": 4,
      "start": "2026-11-30",
      "label": "Build end-to-end features",
      "outcomes": [
        "DDE: progress required multi-node cluster; document roles, networking, replication and cluster UI.",
        "Cloud: show upload → recognition → structured response, handle service unavailable/timeouts.",
        "FYP: implement no-lookahead next-session execution, transaction costs, fractional holdings/cash path and tests.",
        "AI: complete current lab prompt; test TF-IDF nearest-match behaviour with examples.",
        "Cognitive: compare navigation planner/controller combinations with reproducible metrics.",
        "UCL: revise statement and assemble application (submit at earliest sensible opening once ready, not an arbitrary future date)."
      ]
    },
    {
      "number": 5,
      "start": "2026-12-07",
      "label": "First substantial coursework evidence",
      "outcomes": [
        "DDE: ingest UCI household power dataset to HDFS; document missing values and semicolon-separated format.",
        "Cloud: begin cloud-hosted metadata storage; specify separate Monitoring REST service.",
        "FYP: verify after-cost return and cash-benchmark logic with unit tests; document equity-curve calculations.",
        "AI: continue current short lab task, maintain uploaded task inventory; progress 15+ chatbot Q/A.",
        "Cognitive: complete remaining required Nav2 configuration comparisons.",
        "UCL: submit if officially open and refs/docs ready; otherwise contact course team/check opening and keep application ready."
      ]
    },
    {
      "number": 6,
      "start": "2026-12-14",
      "label": "Strong position before Christmas",
      "outcomes": [
        "DDE: Java MapReduce LOW (<1.0), MEDIUM (>=1.0,<2.5), HIGH (>=2.5) by Global_active_power; document missing-record policy and evidence.",
        "Cloud: complete both service boundaries; connect database and object-recognition integration locally.",
        "FYP: verify return, max drawdown, Sharpe, interest cash, realistic signal timing and reproducible backtest tests.",
        "AI: complete relevant short task and preserve evidence; recommender problem/CSV design if taught.",
        "Cognitive: Part 1 Nav2 measurements, report notes and start OctoMap setup.",
        "UCL: ideally application submitted or awaiting official opening/referees; follow up promptly."
      ]
    },
    {
      "number": 7,
      "start": "2026-12-21",
      "label": "Christmas light work",
      "outcomes": [
        "DDE: stabilise full multi-node practical; record screenshot evidence and begin Word report outline.",
        "Cloud: integration sanity check with recognition, database and monitoring; list missing items.",
        "FYP: test edge cases in backtester and audit assumptions; no new risky features required.",
        "AI: 45–60 minutes for a pending lab short task if any; no work on actual holiday celebrations required.",
        "Personal: deliberately reduced workload, groceries and social/rest days."
      ]
    },
    {
      "number": 8,
      "start": "2026-12-28",
      "label": "New Year light work / January readiness",
      "outcomes": [
        "DDE: working practical, results tables and full Word report first draft (10 main / 15 total page limits).",
        "Cloud: prioritised January checklist for database, monitoring, security, Docker and JMeter QoS.",
        "FYP: summarise validated backtester and next GP/NSGA-II milestones; prepare supervisor update.",
        "AI: keep any current lab short-task on track.",
        "Personal: return to weekday routine by week 9."
      ]
    },
    {
      "number": 9,
      "start": "2027-01-04",
      "label": "DDE submission week",
      "outcomes": [
        "DDE: run final required experiments, save <=10 relevant screenshots, proofread 10-page-main/15-page-overall Word report.",
        "DDE: submit report and separate AI Usage Form by Mon 11 Jan 14:30; aim to finish Fri 8 Jan.",
        "Cloud: continue QoS, security and deployment tasks; avoid January 22 bottleneck.",
        "FYP: retain one session to prepare Review 2 and start interpretable typed GP primitives.",
        "AI: spend scheduled lab hour clearing outstanding task; do not abandon it."
      ]
    },
    {
      "number": 10,
      "start": "2027-01-11",
      "label": "DDE deadline + FYP Review 2 preparation",
      "outcomes": [
        "Mon 11 Jan: verify DDE Word report + separate AI form submission before 14:30.",
        "FYP: arrange/attend supervisor meeting, show backtester and GP design, prepare DCS Review Point 2 due Mon 18 Jan.",
        "Cloud: complete database, separate monitoring endpoint, deployment, security and JMeter scenarios.",
        "AI: continue weekly 1-hour lab task or chatbot learning.",
        "UCL: only brief status follow-up if application not yet submitted."
      ]
    },
    {
      "number": 11,
      "start": "2027-01-18",
      "label": "FYP Review 2 + Cloud submission",
      "outcomes": [
        "Mon 18 Jan: FYP Review 2 DCS submission and supervisor recording, after prior meeting.",
        "Cloud: verify end-to-end upload→recognition→cloud storage→location monitoring and deployment.",
        "Cloud: run two JMeter scenarios with two relevant metrics; keep .jmx and GUI screenshots in Olympus evidence.",
        "Cloud: final security rationale, ZIP, attempted task list, Olympus URL and AI form; submit Fri 22 Jan by 14:30.",
        "Cognitive: after Cloud submission, move directly onto individual Nav2/OctoMap portfolio preparation."
      ]
    },
    {
      "number": 12,
      "start": "2027-01-25",
      "label": "Cognitive core navigation; Cloud viva",
      "outcomes": [
        "Cognitive: test five Part 1 runs (NavFn+DWB, Theta Star+DWB, Smac 2D+DWB, NavFn+RPP, baseline return), record metrics.",
        "Cognitive: begin OctoMap ground filtering, navigation costmap integration and unified launch process.",
        "Cloud: rehearse closed-book 15-minute design/security/QoS code explanations for allocated viva; verify actual date (25 Jan–5 Feb conflicting briefs).",
        "FYP: typed GP expression trees, safe operators and bounded depth/node count.",
        "AI: finish current short tasks and progress chatbot gradually."
      ]
    },
    {
      "number": 13,
      "start": "2027-02-01",
      "label": "Cognitive 3D mapping + viva",
      "outcomes": [
        "Cognitive: demonstrate OctoMap/Nav2 unified launch with teleoperate→navigate→teleoperate→navigate exploration.",
        "Cognitive: choose one Part 3 topic (Bayesian perception, cognitive architectures, or hardware/frameworks) and execute your chosen task.",
        "Cognitive: write evidence-driven individual report sections; plan narrated video.",
        "Cloud: complete scheduled viva if allocated this week; if done, free the slot for Cognitive.",
        "FYP: GP operators, baseline NSGA-II wiring and unit tests."
      ]
    },
    {
      "number": 14,
      "start": "2027-02-08",
      "label": "Cognitive portfolio submit",
      "outcomes": [
        "Cognitive: finish Parts 1,2,3 report, own narrated evidence video, Olympus repo/source ZIP, GenAI acknowledgement.",
        "Cognitive: submit individual report, archive and video by Fri 12 Feb 14:30; verify Dropbox folders.",
        "DDE: begin assigned Scenario B telecom ingestion and Scenario D international payments research using permitted OWN work.",
        "FYP: keep minimum 2-hour implementation block; log progress.",
        "AI: complete weekly lab task."
      ]
    },
    {
      "number": 15,
      "start": "2027-02-15",
      "label": "DDE scenarios B and D + FYP Review 3",
      "outcomes": [
        "DDE: Scenario B requirements, four-database comparison (MySQL/MongoDB/Cassandra/HBase), evidence-linked reflection.",
        "DDE: Scenario D transaction integrity, retries, reconciliation, four-database comparison; recommendation and tests.",
        "FYP: confirm baseline NSGA-II end-to-end, first robustness objective (variance or worst-block) functioning; plan controlled experiments.",
        "FYP: arrange supervisor meeting for Review Point 3 and log evidence.",
        "AI: weekly short-task, progress chatbot CNN preparation when taught.",
        "Cognitive: set group maze roles and evaluation criteria."
      ]
    },
    {
      "number": 16,
      "start": "2027-02-22",
      "label": "Finish March submissions",
      "outcomes": [
        "DDE: Word technical report scenarios B and D, <=4 main pages, own January cluster evidence, separate AI form.",
        "DDE: aim to finalise by Fri 26 Feb; submit by Mon 1 Mar 14:30.",
        "FYP: supervisor meeting and DCS Review 3 draft, ensure supervisor outcome can be recorded by Mon 1 Mar.",
        "AI: keep lab tasks current; update remaining count.",
        "Cognitive: group project initial functionality and version-control coordination."
      ]
    },
    {
      "number": 17,
      "start": "2027-03-01",
      "label": "March submissions + April start",
      "outcomes": [
        "Mon 1 Mar: submit DDE report + AI form before 14:30; FYP Review 3 due (time not specified).",
        "AI: make strong progress on chatbot Task A TF-IDF matching; identify remaining lab tasks.",
        "Cognitive group: maze occupancy grid/teleoperation and team plan; keep personal contributions recorded.",
        "FYP: begin repeated NSGA-II baseline+robustness experiments once validated.",
        "SchoolReach: return to modest protected blocks after January/February crunch."
      ]
    },
    {
      "number": 18,
      "start": "2027-03-08",
      "label": "AI chatbot integration + Cognitive maze",
      "outcomes": [
        "AI: Task A >=15 additional specific Q/A, lemmatisation+TF-IDF+cosine fallback tested.",
        "AI: progress Task B recommender: >=15 items, resource cost, score 1–10, category, ANY choice and non-brute-force search.",
        "Cognitive group: obstacle avoidance, Nav2 navigation and mapping in maze; test altered layouts.",
        "FYP: start 20-seed matched-budget runs or first scalable pilot; retain OOS held-out integrity.",
        "AI lab: submit prompted task for current teaching week."
      ]
    },
    {
      "number": 19,
      "start": "2027-03-15",
      "label": "AI recommender + Group integration",
      "outcomes": [
        "AI: Task B implement optimisation/search and evaluation; document tests and limitations.",
        "Cognitive group: sign/landmark handling and navigation logic scoped to agreed grade tier.",
        "FYP: second robustness objective and validation-selection procedure; track failed runs transparently.",
        "AI lab: continue newest short-task and chase missing earlier files.",
        "FYP report: draft Chapters 1–3 using own writing and research."
      ]
    },
    {
      "number": 20,
      "start": "2027-03-22",
      "label": "AI CNN + FYP experimentation",
      "outcomes": [
        "AI: Task C separately train/evaluate/save own CNN; integrate image input in chatbot; collect own test metrics.",
        "Cognitive: comprehensive group code integration; plan <=6 slide individual presentation.",
        "FYP: baseline vs variance vs worst-block comparisons, out-of-sample Sharpe and secondary metrics.",
        "AI lab: finish highest-priority short tasks; prepare 12-file inventory.",
        "FYP report: draft methodology, implementation, reproducibility and test evidence."
      ]
    },
    {
      "number": 21,
      "start": "2027-03-29",
      "label": "Pre-April completion buffer",
      "outcomes": [
        "AI: full integrated chatbot QA and 10–15 minute demo outline; 12 lab tasks proofread and saved with exact filenames.",
        "Cognitive: project fully rehearsed in module Docker; personal contribution documented, ZIP and <=6 slides nearly done.",
        "FYP: complete primary experiments and tabulate uncertainty across seeds; draft results/discussion.",
        "Confirm exact Cognitive demo slot: departmental 5 Apr upload discrepancy vs brief 9 Apr; prepare by 4 Apr regardless.",
        "Reduce business blocks if needed to protect Apr 9 and Apr 23."
      ]
    },
    {
      "number": 22,
      "start": "2027-04-05",
      "label": "AI + Cognitive due Fri 9 April",
      "outcomes": [
        "AI: submit readable source ZIP, separate documentation, MP4 demo and all 12 lab-task Word/PDF files by Fri 9 Apr 14:30.",
        "Cognitive group: submit <=6-slide own PowerPoint, code ZIP, GenAI acknowledgement as required by Fri 9 Apr 14:30; attend scheduled demo.",
        "FYP: protect one or two blocks for dissertation to avoid leaving it until 10 Apr.",
        "University submissions take precedence over SchoolReach and quant this week."
      ]
    },
    {
      "number": 23,
      "start": "2027-04-12",
      "label": "FYP full dissertation draft",
      "outcomes": [
        "FYP: full six-chapter dissertation draft by Thu 15 or Fri 16 Apr, based on own writing and research.",
        "FYP: verify all results, figures and held-out comparisons; discuss trade-offs, repeated runs and limitations.",
        "FYP: check introduction/context/new ideas/implementation/results/conclusions structure and reproducibility.",
        "FYP: prepare separate code/support ZIP and acknowledgement, review supervisor feedback.",
        "Other work reduced to a small SchoolReach check-in and optional quant."
      ]
    },
    {
      "number": 24,
      "start": "2027-04-19",
      "label": "Final FYP due Fri 23 April",
      "outcomes": [
        "FYP: final proofing, figures, citations, appendices, templates and final report name <studentID>_report.",
        "FYP: source ZIP <studentID>_source.zip separately; confirm final Dropbox folder arrangement.",
        "FYP: submit report, source/supporting ZIP and GenAI form preferably Thu 22 Apr, absolute deadline Fri 23 Apr 14:30.",
        "FYP: start own viva prep for supervisor and second marker (date TBC).",
        "Begin exam topic audit late week if deadline completed."
      ]
    },
    {
      "number": 25,
      "start": "2027-04-26",
      "label": "Exam revision starts",
      "outcomes": [
        "Cloud exam: closed-book SOA/REST, microservices, scaling, security, cloud and QoS scenarios; map weak topics.",
        "AI exam: NLP, search/optimisation, neural computing, advanced AI topics; map weak topics.",
        "FYP viva: practise presenting implementation, experimental validity, results and limitations.",
        "Confirm exam and viva dates when released; replace overlapping blocks, not add on top.",
        "SchoolReach/quant: re-establish scheduled small sessions."
      ]
    },
    {
      "number": 26,
      "start": "2027-05-03",
      "label": "Exam timed practice",
      "outcomes": [
        "Cloud: timed scenario-based answers explaining architecture and trade-offs.",
        "AI: timed topic questions and algorithm comparison, calculation and explanation exercises.",
        "FYP: mock Q&A on lookahead bias, GP/NSGA-II, robustness objectives and generalisation.",
        "Quant: one focused timed practice block.",
        "UCL: check application/referees or post-submission tasks if needed."
      ]
    },
    {
      "number": 27,
      "start": "2027-05-10",
      "label": "Exams and targeted weaknesses",
      "outcomes": [
        "Cloud: review missed practice questions and prioritise weaker topics.",
        "AI: revise underperforming topics and run another timed mock.",
        "Attend exact published exam/viva appointments when scheduled.",
        "SchoolReach: maintain outreach/customer follow-up without sabotaging revision."
      ]
    },
    {
      "number": 28,
      "start": "2027-05-17",
      "label": "Exams and recovery",
      "outcomes": [
        "Attend scheduled exams and FYP viva; use remaining blocks for closest assessment.",
        "Cloud: consolidate concise closed-book recall and explanations.",
        "AI: high-value recall and practice; no last-minute new projects.",
        "Check any pending group demo or outstanding formal requirement."
      ]
    },
    {
      "number": 29,
      "start": "2027-05-24",
      "label": "May closing tasks",
      "outcomes": [
        "Attend remaining exams/vivas on allocated dates.",
        "Optional Sustainability in Practice certificate completion by Thu 27 May if participating.",
        "If exams finished, gradually restore SchoolReach and quant hours.",
        "Review academic record and plan post-degree next steps."
      ]
    },
    {
      "number": 30,
      "start": "2027-05-31",
      "label": "June exam contingency",
      "outcomes": [
        "AI exam may occur in June; continue revision until exact sitting is complete.",
        "Cloud exam and FYP viva: only if officially still outstanding.",
        "If all assessments finished, replace exam blocks with SchoolReach and quant.",
        "Confirm any UCL offer conditions or reference follow-ups."
      ]
    },
    {
      "number": 31,
      "start": "2027-06-07",
      "label": "June assessment reserve",
      "outcomes": [
        "Reserve academic blocks for any actual June AI exam date.",
        "If all assessments complete, build a focused quant recruiting practice routine.",
        "SchoolReach: evaluate acquisition funnel and prioritise trial conversion."
      ]
    },
    {
      "number": 32,
      "start": "2027-06-14",
      "label": "June assessment reserve",
      "outcomes": [
        "Attend any remaining published university assessment.",
        "If clear, increase SchoolReach outreach and product improvement.",
        "Quant: regular probability, programming and mock assessments.",
        "Review finances and next steps without assuming business revenue."
      ]
    },
    {
      "number": 33,
      "start": "2027-06-21",
      "label": "Post-degree transition",
      "outcomes": [
        "Check final assessments all complete; no invented exam date.",
        "SchoolReach: test measurable conversion improvement and set a realistic weekly pipeline goal.",
        "Quant: structure summer preparation around active recruiting cycles.",
        "UCL: monitor real offer/funding correspondence and respond to actual deadlines."
      ]
    },
    {
      "number": 34,
      "start": "2027-06-28",
      "label": "End-of-June safeguard",
      "outcomes": [
        "Continue any real June exam/viva preparation through the actual date, if still pending.",
        "If clear, transition to summer SchoolReach, quant and next academic/career steps.",
        "Export planner backup and review what worked before archiving academic plan.",
        "Review: export a JSON backup and set the next summer planning goals."
      ]
    }
  ],
  "phases": [
    {
      "first": 1,
      "last": 1,
      "name": "Start with clarity",
      "id": "launch",
      "summary": "Cloud formative, Maven verification and FYP ethics."
    },
    {
      "first": 2,
      "last": 6,
      "name": "Build strong foundations",
      "id": "foundation",
      "summary": "January coursework, six FYP hours, early AI and Cognitive labs."
    },
    {
      "first": 7,
      "last": 8,
      "name": "A quieter Christmas",
      "id": "holiday",
      "summary": "Lighter days, January readiness and time with people."
    },
    {
      "first": 9,
      "last": 9,
      "name": "Finish the Database report",
      "id": "db-final",
      "summary": "Own practical evidence and a verified early submission."
    },
    {
      "first": 10,
      "last": 10,
      "name": "Protect January deadlines",
      "id": "january",
      "summary": "Database receipt, FYP review and Cloud integration."
    },
    {
      "first": 11,
      "last": 11,
      "name": "Cloud submission week",
      "id": "cloud-final",
      "summary": "Complete the system, preserve evidence and rehearse the viva."
    },
    {
      "first": 12,
      "last": 14,
      "name": "Cognitive portfolio",
      "id": "cognitive",
      "summary": "Nav2, OctoMap, your report and narrated evidence."
    },
    {
      "first": 15,
      "last": 16,
      "name": "Database and research review",
      "id": "march-prep",
      "summary": "Scenarios B and D; controlled FYP experiments."
    },
    {
      "first": 17,
      "last": 17,
      "name": "March handover",
      "id": "march-start",
      "summary": "Two March milestones, then AI and group robotics."
    },
    {
      "first": 18,
      "last": 21,
      "name": "Make April manageable",
      "id": "april-build",
      "summary": "Chatbot integration, maze navigation and research writing."
    },
    {
      "first": 22,
      "last": 22,
      "name": "Two April submissions",
      "id": "april-final",
      "summary": "AI and Cognitive due together; keep FYP moving."
    },
    {
      "first": 23,
      "last": 24,
      "name": "Bring the research together",
      "id": "fyp-final",
      "summary": "Your six-chapter dissertation, reproducible files and viva."
    },
    {
      "first": 25,
      "last": 34,
      "name": "Exams → next chapter",
      "id": "exams",
      "summary": "Revision while assessments remain; business and quant once finished."
    }
  ],
  "modules": {
    "fyp": {
      "name": "Final-Year Project",
      "short": "FYP",
      "color": "teal",
      "code": "COMP30151",
      "rule": "Ethics approval must be recorded before practical work or data collection. No AI-created solutions, experimental evaluation or analysis, report drafts or reflections. Limited spelling/grammar and verified research support need acknowledgement.",
      "link": "https://now.ntu.ac.uk/d2l/le/lessons/1209768/topics/15278180",
      "requirements": [
        "40 credits. PPD 10% already submitted; report and mandatory in-person viva 90%.",
        "Verify ethics approval on DCS. Meet supervisor before RP2 and RP3; supervisor must record outcomes by each date.",
        "Strongly typed GP; bounded complexity; NSGA-II baseline after-cost return/max drawdown. Compare variance and worst-block robustness objectives using controlled budgets and repeated seeds where feasible.",
        "Keep chronological training/validation/test separation, no-lookahead execution, costs and benchmarks. Document the methodology early in your own words.",
        "Template 2.2: Introduction; Context; New Ideas; Implementation/Investigation; Results/Discussion; Conclusions/Future Work. Typically 10,000–20,000 words.",
        "Separate <studentID>_report Word/PDF and <studentID>_source.zip; GenAI acknowledgement. Confirm final Dropbox folder labels; mandatory viva after 23 April."
      ]
    },
    "db": {
      "name": "Distributed Database Engineering",
      "short": "Database",
      "color": "blue",
      "code": "COMP30261",
      "rule": "Both assessed reports permit Microsoft Word spelling and grammar checks only. GenAI research, commands, code, solutions, writing, analysis and evidence generation are prohibited. Do this assessed work yourself.",
      "link": "https://now.ntu.ac.uk/d2l/le/lessons/1179265/topics/15224309",
      "requirements": [
        "Lab report 60%: at least 3 VMware nodes OR 5 Docker nodes; UCI Household Electric Power Consumption data in HDFS.",
        "Java MapReduce: Global_active_power LOW <1.0 kW; MEDIUM ≥1.0 and <2.5; HIGH ≥2.5. Record missing-value policy. Recommended daily kWh and top-ten-days extension.",
        "Keep your topology, config, ingestion/replication, Java build, completed job and results evidence: at most 10 relevant screenshots.",
        "Lab Word report: Calibri 11 and heading styles, at most 10 main pages and 15 pages overall. Separate Lab AI Usage Form.",
        "Technical report 40%: assigned B (telecom ingestion/analytics) and D (international payments/reconciliation). Compare MySQL, MongoDB, Cassandra, HBase and recommend one per scenario.",
        "At most 4 main pages, about 2 per scenario; Calibri Body 11 and headings. Use your own January cluster evidence; separate Technical AI Usage Form."
      ]
    },
    "cloud": {
      "name": "Service-Centric & Cloud Computing",
      "short": "Cloud",
      "color": "blue",
      "code": "COMP30231",
      "rule": "Learning support and bounded debugging/research within the brief require attribution where specified. No assessment AI agents, AI-written commit messages or AI control of accounts/deployment. Explain your own implementation.",
      "link": "https://now.ntu.ac.uk/d2l/le/lessons/1179267/topics/15265347",
      "requirements": [
        "Formative Activity 6.3: run supplied recognition container (~2 GB), test POST /detect, build initial Image Upload Service, serialise recognition response; submit Olympus URL as text.",
        "Final coursework/viva 60%: separate Java Spring Boot Image Upload and Monitoring REST services; cloud-hosted metadata/database; containerise/deploy. Recognition container stays unmodified.",
        "Two JMeter scenarios and two metrics; .jmx and GUI screenshots in Olympus evidence/. Security controls at service, container, database and deployment levels.",
        "Final Dropbox: Olympus link, zipped code, attempted-task list and completed AI Usage Form. Add required staff access and keep your own Git history.",
        "Closed-book in-person viva up to 15 minutes. Date allocation TBC within conflicting 25 Jan–5 Feb window; confirm with staff.",
        "Exam 40%, closed book, May date TBC; department describes two hours. Module overview requires both elements to pass."
      ]
    },
    "cog": {
      "name": "Cognitive Computing",
      "short": "Cognitive",
      "color": "violet",
      "code": "COMP30271",
      "rule": "Portfolio and group work have different GenAI limits: check each brief. Group permits bounded concepts/debugging of your own code with attribution and retained prompts. Explain and modify your code yourself; portfolio video must use your own narration.",
      "link": "https://now.ntu.ac.uk/d2l/le/lessons/1179264/topics/15264828",
      "requirements": [
        "Individual 40%: sanctioned pedrombmachado/lubuntu_ros Docker image comp30271 or arm64_comp30271; source in Olympus.",
        "Part 1: NavFn+DWB, Theta Star+DWB, Smac 2D+DWB, NavFn+Regulated Pure Pursuit and baseline return. Record quantitative metrics. Core-only grade cap: Low 2:1; scope extensions if aiming higher.",
        "Part 2: ground filtering, OctoMap→Nav2 configuration, unified launch and teleoperate→navigate→teleoperate→navigate exploration. Core-only grade cap also applies.",
        "Part 3: choose Bayesian audio-visual perception OR critical cognitive architectures OR hardware/frameworks.",
        "Report ≤45 pages excluding cover/contents, three sections with separate references; source archive and own-narrated video required. Draft similarity check then final. GenAI acknowledgement as specified.",
        "Group 60%: robust ROS2 maze mapping/navigation; contribution record, own prescribed-template PowerPoint ≤6 slides, source ZIP, acknowledgement and team live demo with individual answers.",
        "9 Apr 14:30 upload from module brief differs from department 5 Apr summary; confirm. Demo allocation TBC; department last-demo entry is 23 Apr."
      ]
    },
    "ai": {
      "name": "Artificial Intelligence",
      "short": "AI",
      "color": "violet",
      "code": "ISYS30221",
      "rule": "Follow the coursework traffic-light rules and retain permitted assistance. AI may not write reflections or generate/analyse your collected data. Produce your own assessed work and verify the brief.",
      "link": "https://now.ntu.ac.uk/d2l/le/content/1177049/viewContent/15110823/View",
      "requirements": [
        "Coursework 50%, exam 50%. Coursework: chatbot A/B/C each 25%, short tasks 25%.",
        "A: ≥15 topic Q/A pairs beyond starter chitchat; lemmatisation, TF–IDF and cosine similarity fallback; actual tests.",
        "B: ≥15 items in separate CSV; positive resource cost, integer score 1–10, category; ask budget and category separately, include ANY; non-brute-force, nonrandom search.",
        "C: train, evaluate and save your own CNN separately; load in chatbot with image input. Include training code, model and sample images; exclude full training dataset.",
        "Source ZIP, template documentation with 5–10 actual input/output examples per task, 10–15 minute MP4 demo and acknowledgement. Missing/inadequate video can cap coursework at High Third.",
        "12 separate lab Word/PDF uploads, ≤200 words each, exact sheet filenames; work by actual teaching week and explain outcomes without submitted code.",
        "Unseen written exam, May or June TBC. Revise NLP, search/optimisation, neural computing and advanced topics."
      ]
    }
  },
  "deadlines": [
    {
      "id": "cloud-formative",
      "category": "cloud",
      "title": "Cloud formative · Activity 6.3",
      "date": "2026-11-10",
      "time": "14:30",
      "notes": "Verify Activity 6.3: supplied recognition container, POST /detect testing, initial image-upload integration and response serialisation. Submit the Olympus repository URL in the text Dropbox. The folder staying open until 24 November does not change this due date.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "db-lab",
      "category": "db",
      "title": "Database lab report · 60%",
      "date": "2027-01-11",
      "time": "14:30",
      "notes": "Word report AND separate Lab AI Usage Form.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "fyp-rp2",
      "category": "fyp",
      "title": "FYP Review Point 2",
      "date": "2027-01-18",
      "time": null,
      "notes": "Supervisor meeting beforehand; DCS review and supervisor recording. No published time.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "cloud-course",
      "category": "cloud",
      "title": "Cloud coursework · 60% with viva",
      "date": "2027-01-22",
      "time": "14:30",
      "notes": "Olympus URL, source ZIP, task list and AI form.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "cloud-viva",
      "category": "cloud",
      "title": "Cloud coursework viva",
      "date": null,
      "time": null,
      "notes": "In person; closed book; up to 15 minutes. Overview says 25 Jan–4 Feb; brief allows 5 Feb. Department summary differs. Confirm allocated slot.",
      "status": "tbc",
      "window": "25 Jan–5 Feb 2027"
    },
    {
      "id": "cog-portfolio",
      "category": "cog",
      "title": "Cognitive portfolio · 40%",
      "date": "2027-02-12",
      "time": "14:30",
      "notes": "Report, source archive, own-narrated video and acknowledgement.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "db-tech",
      "category": "db",
      "title": "Database technical report · 40%",
      "date": "2027-03-01",
      "time": "14:30",
      "notes": "Scenarios B and D; own January evidence; separate Technical AI Usage Form.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "fyp-rp3",
      "category": "fyp",
      "title": "FYP Review Point 3",
      "date": "2027-03-01",
      "time": null,
      "notes": "Meeting beforehand; DCS review and supervisor recording. No published time.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "ai-course",
      "category": "ai",
      "title": "AI chatbot + 12 lab tasks · 50%",
      "date": "2027-04-09",
      "time": "14:30",
      "notes": "Source ZIP, documentation, MP4 and 12 separate lab files; acknowledgement.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "cog-group",
      "category": "cog",
      "title": "Cognitive group upload · 60% with demo",
      "date": "2027-04-09",
      "time": "14:30",
      "notes": "Own ≤6-slide deck and source ZIP. Module brief says 9 Apr; department says 5 Apr. Confirm discrepancy.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "cog-demo",
      "category": "cog",
      "title": "Cognitive group live demonstration",
      "date": null,
      "time": null,
      "notes": "Team demo and individual answers. Department lists 23 Apr as last deliverable. Confirm slot.",
      "status": "tbc",
      "window": "April 2027"
    },
    {
      "id": "fyp-report",
      "category": "fyp",
      "title": "FYP dissertation + supporting files · 90% with viva",
      "date": "2027-04-23",
      "time": "14:30",
      "notes": "Report, separate source ZIP and GenAI form. Aim to finish Thursday 22 April.",
      "status": "confirmed",
      "window": ""
    },
    {
      "id": "fyp-viva",
      "category": "fyp",
      "title": "FYP mandatory in-person viva",
      "date": null,
      "time": null,
      "notes": "Supervisor and second marker. Confirm date, time and venue in NOW.",
      "status": "tbc",
      "window": "After 23 April 2027"
    },
    {
      "id": "cloud-exam",
      "category": "cloud",
      "title": "Cloud closed-book exam · 40%",
      "date": null,
      "time": null,
      "notes": "Confirm your allocated two-hour sitting. Both module elements must pass.",
      "status": "tbc",
      "window": "May 2027"
    },
    {
      "id": "ai-exam",
      "category": "ai",
      "title": "AI unseen exam · 50%",
      "date": null,
      "time": null,
      "notes": "May or June; do not assume 3 May from department summary is your allocated sitting.",
      "status": "tbc",
      "window": "May or June 2027"
    },
    {
      "id": "ucl",
      "category": "ucl",
      "title": "UCL official application deadline",
      "date": null,
      "time": null,
      "notes": "2027 entry course page checked 7 Nov: application dates to be confirmed. Check opening and closing dates independently.",
      "status": "tbc",
      "window": ""
    },
    {
      "id": "funding",
      "category": "ucl",
      "title": "UCL funding / scholarship deadline",
      "date": null,
      "time": null,
      "notes": "Check eligibility and each relevant scholarship separately from course admission.",
      "status": "tbc",
      "window": ""
    },
    {
      "id": "maven",
      "category": "quant_app",
      "title": "Maven personal assessment expiry",
      "date": null,
      "time": null,
      "notes": "Invitation received 29 Sep. Check your own link urgently; 9 Nov belongs to your brother and is unconfirmed for you.",
      "status": "tbc",
      "window": ""
    },
    {
      "id": "driving",
      "category": "admin",
      "title": "Driving test · existing booking",
      "date": "2026-12-11",
      "time": null,
      "notes": "Reschedule; enter the replacement date. Existing booking is not a readiness target.",
      "status": "confirmed",
      "window": ""
    }
  ],
  "quant": [
    "Conditional probability & Bayes|8 varied problems; draw probability trees and explain two mistakes.",
    "Expectation & indicator variables|8 expectation problems, including 3 indicator-variable solutions.",
    "Variance, covariance & independence|8 problems; explain why zero covariance need not imply independence.",
    "Counting & combinatorics|10 arrangements/selection questions, with and without replacement.",
    "Discrete distributions|8 binomial/geometric/Poisson questions; check the model assumptions.",
    "Continuous distributions|6 uniform/exponential/normal questions and 15 minutes mental maths.",
    "Order statistics & symmetry|6 minimum/maximum questions and 2 symmetry arguments.",
    "Probability review|Re-solve 6 missed problems without notes; log the remaining gap.",
    "Timed probability set|8 questions in 35 minutes, then review every error.",
    "Bayes & interview reasoning|6 spoken solutions with explicit assumptions.",
    "Mental maths & estimation|Quant Sprint: 20-minute timed set; review accuracy and slow questions.",
    "Markov chains|Construct 3 transition matrices and solve 4 hitting-time/stationary problems.",
    "Stochastic processes|6 random-walk questions and a simulation check in personal practice.",
    "Statistics & estimation|8 questions on sampling, confidence and bias.",
    "Hypothesis tests & likelihood|6 examples; explain false positives and test assumptions.",
    "Python & complexity|Solve 2 array/hash-map problems; explain time/space complexity.",
    "Algorithms & recursion|2 search/dynamic-programming problems and 15 minutes arithmetic.",
    "Order statistics interview set|6 timed probability questions, then teach back 2 solutions.",
    "Conditional expectation|8 problems using tower property and event partitions.",
    "Variance & risk|6 covariance/portfolio exercises and 2 independence counterexamples.",
    "Mixed interview mock|45-minute timed mock, then classify and revisit mistakes.",
    "Light assessment maintenance|20 minutes mental maths only if university submissions are secure.",
    "Optional probability review|Revisit 4 mistakes after dissertation work, only if wanted.",
    "Transition practice|Set a baseline with a short Quant Sprint mixed quiz.",
    "Probability fundamentals review|10 Bayes/expectation/variance problems and error-log updates.",
    "Python interview drills|2 algorithm problems plus a 20-minute mental maths set.",
    "Quant interview mock|45-minute timed assessment and detailed error review.",
    "Markov & stochastic review|6 chain/random-walk questions; explain each model.",
    "Statistics & mathematical reasoning|8 inference/estimation questions; practise assumptions aloud.",
    "Recruiting readiness|One timed probability mock and 2 Python exercises.",
    "Counting & symmetry mastery|10 problems; compare an algebraic and symmetry solution.",
    "Mixed assessments|Two short timed sets and a focused review of the weakest topic.",
    "Quant research communication|Explain your own FYP methodology in 3 minutes; practise 6 interview questions.",
    "Summer baseline & next steps|Repeat a mixed mock, compare errors, choose 3 next study priorities."
  ],
  "reach": [
    "Audit outreach → trial funnel|Record actual sends, replies, demo/start-page visits if available and trial starts; identify the first measurable bottleneck.",
    "Build a qualified prospect list|Select 15 relevant businesses, record fit and a specific reason to contact each.",
    "Test one outreach message|Send or schedule a targeted batch; record recipients and the exact message variant.",
    "Follow up warm leads|Review real replies and follow up suitable contacts; log objections and next action.",
    "Inspect trial onboarding|Walk through sign-up and first useful action yourself; list observed friction by impact.",
    "Run one conversion experiment|Choose a single change to message/onboarding with a success metric; avoid feature expansion.",
    "Holiday inbox check|Respond to real leads/customers and park nonurgent development.",
    "January pipeline reset|Review outreach results and choose the next small prospect batch.",
    "Protect active leads|One concise follow-up session; note any real customer blocker.",
    "Maintain responses|Reply to leads and record any trials/customers; keep coursework protected.",
    "One-hour commercial check-in|Follow up actual interest and verify the trial funnel works.",
    "Target the strongest segment|Compare replies by prospect fit and refine the next batch.",
    "Remove one activation blocker|Use an observed onboarding problem; validate the fix end to end.",
    "Portfolio-week lead care|Handle real responses and urgent retention issues only.",
    "Warm-lead follow-ups|Send relevant follow-ups and record next steps; avoid a new feature project.",
    "Improve conversion evidence|Check visits→trials where manually available; record unknown data as unknown.",
    "Restart acquisition cadence|Prepare and send a qualified batch; track replies and trials.",
    "Measure outreach quality|Compare message variants and choose the next commercial experiment.",
    "Guide trial activation|Follow up actual trial users and identify their first useful action.",
    "Validate a retention improvement|Use feedback or observed friction; verify the change helps an active workflow.",
    "Keep pipeline moving|Focused replies/follow-ups while protecting April submissions.",
    "Submission-week maintenance|Only active leads or urgent customer issues if capacity permits.",
    "Research-week check-in|Review customer messages; leave nonurgent work for after submission.",
    "Post-submission pipeline|Reconnect with warm leads and plan the next qualified batch.",
    "Rebuild acquisition rhythm|Set a realistic weekly outreach goal and track replies/trials.",
    "Conversion review|Inspect actual demo/start-page activity and trial outcomes; choose one intervention.",
    "Customer follow-through|Help interested prospects activate; record what prevented a trial.",
    "Retention & feedback|Collect actual product friction and prioritise changes linked to paying use.",
    "Funnel experiment|Measure one outreach/onboarding change against a recorded baseline.",
    "Summer acquisition plan|Define prospect segment, outreach cadence and activation metric.",
    "Trial conversion focus|Review every live trial and follow up with a useful next step.",
    "Improve paid value|Validate one change that improves activation or retention, from real evidence.",
    "Commercial review|Compare contacts→responses→trials→customers and select the next experiment.",
    "Plan the next quarter|Review manually entered MRR/customer metrics and set 3 commercial outcomes."
  ],
  "ucl": [
    "Check official window + request two referees|Check the 2027 course opening/closing dates and funding separately; ask two academic referees, including João if suitable.",
    "Referees + supporting documents|Confirm willingness; gather transcript, CV, and required evidence; note missing items.",
    "Personal statement first revision|Write/revise your own statement around preparation and course fit; check scholarship eligibility.",
    "Application assembly + proofread|Check documents, references and fee; submit if officially open and strong.",
    "Submit when ready|Final review and earliest sensible submission if open; otherwise check opening with admissions.",
    "Follow up references + window|Resolve outstanding referee/documents; keep application ready without waiting for an invented date."
  ],
  "fyp": [
    [
      "Check DCS ethics approval and define the research checklist",
      "Map the experiment design and expected artefacts",
      "Review PPD feedback and document the first implementation milestone"
    ],
    [
      "Load the approved historical dataset and inspect fields",
      "Audit adjusted prices, gaps and source assumptions",
      "Document the data contract and reproducible environment"
    ],
    [
      "Implement chronological train/validation/test boundaries",
      "Verify split isolation with boundary checks",
      "Write the split rationale and data-handling chapter notes"
    ],
    [
      "Implement next-session signal execution",
      "Verify cost, holdings and cash accounting cases",
      "Document no-lookahead assumptions and backtest evidence"
    ],
    [
      "Verify after-cost return and cash benchmark",
      "Check equity-curve and position-accounting examples",
      "Record benchmark assumptions and passing checks"
    ],
    [
      "Verify drawdown, Sharpe and cash-interest metrics",
      "Audit signal timing and deterministic repeatability",
      "Write methodology notes while the implementation is fresh"
    ],
    [
      "Audit backtester edge cases",
      "Stabilise verified accounting and timing behaviour",
      "Document limitations before adding complexity"
    ],
    [
      "Summarise validated backtester behaviour",
      "Specify typed GP primitives, constraints and tests",
      "Prepare supervisor update and Review Point 2 evidence"
    ],
    [
      "Design strongly typed GP terminals and primitives",
      "Check depth/node limits and safe operators",
      "Assemble prototype evidence for Review Point 2"
    ],
    [
      "Prepare supervisor demonstration of tested foundations",
      "Record feedback and DCS Review Point 2 draft",
      "Close highest-priority prototype gaps after feedback"
    ],
    [
      "Complete DCS review and verify supervisor recording",
      "Document the next GP milestone and research risks",
      "Keep a short tested implementation checkpoint"
    ],
    [
      "Implement typed GP expression representation",
      "Verify type-safe generation and complexity limits",
      "Record design decisions in the implementation chapter"
    ],
    [
      "Verify crossover, mutation and safe operators",
      "Wire GP fitness to baseline NSGA-II",
      "Document baseline design and independent tests"
    ],
    [
      "Verify the baseline optimisation pipeline",
      "Record implementation progress and risks",
      "Keep reproducible configuration and own chapter notes"
    ],
    [
      "Run baseline NSGA-II end to end",
      "Implement the first training-block robustness objective",
      "Specify controlled budgets, seed pairs and selection protocol"
    ],
    [
      "Validate baseline versus robustness objective",
      "Prepare supervisor evidence for Review Point 3",
      "Write experimental method and complete DCS review draft"
    ],
    [
      "Complete Review Point 3 and supervisor recording",
      "Run a small repeated-experiment pilot",
      "Verify output capture and untouched held-out evaluation"
    ],
    [
      "Launch matched-budget baseline and robustness runs",
      "Audit failures, seeds and reproducibility",
      "Write the experiment protocol and limitations"
    ],
    [
      "Add a second robustness formulation only if capacity permits",
      "Verify validation-based strategy selection",
      "Write your own Introduction, Context and New Ideas chapters"
    ],
    [
      "Complete primary controlled experiment runs",
      "Compare held-out Sharpe and secondary metrics yourself",
      "Write implementation, methodology and test evidence"
    ],
    [
      "Freeze primary experiments and archive configurations",
      "Tabulate uncertainty across matched seeds yourself",
      "Write your own Results and Discussion draft"
    ],
    [
      "Revise dissertation results and discussion",
      "Check reproducibility against saved experiment artefacts",
      "Preserve a coherent six-chapter draft"
    ],
    [
      "Bring Chapters 1–3 into one coherent draft",
      "Complete Chapters 4–6 in your own words",
      "Check evidence, limitations, sources and reproducibility"
    ],
    [
      "Proofread the final report against Template 2.2",
      "Verify separate source archive and acknowledgement",
      "Rehearse a clear explanation of your own research"
    ]
  ],
  "uclSteps": [
    "Check official opening and closing dates",
    "Check separate funding and scholarship deadlines",
    "Request referee one",
    "Request referee two",
    "Confirm both referees agreed",
    "Prepare and review personal statement",
    "Collect transcript and supporting documents",
    "Check fee, documents and reference details",
    "Review and submit when officially open"
  ],
  "labTasks": [
    {
      "id": "lab-1",
      "topic": "NLP in NLTK",
      "teachingWeek": 2
    },
    {
      "id": "lab-2",
      "topic": "Tree search",
      "teachingWeek": 5
    },
    {
      "id": "lab-3",
      "topic": "A* search",
      "teachingWeek": 6
    },
    {
      "id": "lab-4",
      "topic": "Simulated annealing",
      "teachingWeek": 7
    },
    {
      "id": "lab-5",
      "topic": "Evolutionary programming",
      "teachingWeek": 8
    },
    {
      "id": "lab-6",
      "topic": "ANN programming",
      "teachingWeek": 13
    },
    {
      "id": "lab-7",
      "topic": "CNN programming",
      "teachingWeek": 14
    },
    {
      "id": "lab-8",
      "topic": "Generative AI 1",
      "teachingWeek": 17
    },
    {
      "id": "lab-9",
      "topic": "Generative AI 2",
      "teachingWeek": 18
    },
    {
      "id": "lab-10",
      "topic": "Azure AI",
      "teachingWeek": 19
    },
    {
      "id": "lab-11",
      "topic": "Reinforcement learning / Q-learning",
      "teachingWeek": 20
    },
    {
      "id": "lab-12",
      "topic": "Week 21 topic — confirm sheet",
      "teachingWeek": 21
    }
  ]
};
