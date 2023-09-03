const button = document.querySelector("button")
const select = document.querySelector("select")
const main = document.querySelector("main")
const options = [
    "the full exam",
    "1.1 differentiate between types of permanent and temporary organisation structures (including functional, matrix, and project)",
    "1.2 explain the way in which an organisational breakdown structure is used to create a responsibility assignment matrix",
    "1.3 explain the role and key responsibilities of the project manager",
    "1.4 differentiate between the responsibilities of the project manager and the project sponsor throughout the project",
    "1.5 describe other roles within project management (including users, project team members, the project steering group/board and the product owner)",
    "1.6 describe the functions and benefits of different types of project office (including project/programme/portfolio management office (PMO), embedded PMO, central PMO and hub-and-spoke PMO)",
    "1.7 explain why aspects of project management governance are required (such as the use of: policies, regulations, functions, processes, procedures and delegated responsibilities)",
    "2.1 differentiate between linear, iterative and hybrid life cycles",
    "2.2 explain why projects are structured as phases in a linear life cycle",
    "2.3 differentiate between a project life cycle and an extended life cycle",
    "2.4 outline the role of knowledge and information management to inform decisionmaking",
    "2.5 explain the benefits of conducting reviews throughout the life cycle (including decision gates, benefits reviews and audits) ",
    "2.6 explain why projects may close early",
    "3.1 differentiate between projects and business as usual (BAU)",
    "3.2 differentiate between project management, portfolio management and programme management",
    "3.3 outline the relationship between programmes, projects and strategic change",
    "3.4 describe situations where the use of programme management may be appropriate",
    "3.5 describe situations where the use of portfolio management may be appropriate",
    "3.6 explain tools and techniques used to determine factors which influence and impact projects (including PESTLE, SWOT and VUCA)",
    "3.7 explain the impact of the legal and regulatory environment on projects (such as the impact on working conditions, risk management, governance and sustainability)",
    "4.1 explain the benefits to a project of a communication plan",
    "4.2 explain the relationship between stakeholder analysis and an effective communication management plan",
    "4.3 state factors which can positively or negatively affect communication",
    "4.4 state sources of conflict within a project",
    "4.5 explain ways in which conflict can be addressed (such as Thomas Kilmann Conflict Mode Instrument)",
    "4.6 explain how to plan and conduct negotiations (including ZOPA, BATNA and ‘Win Win’)",
    "5.1 explain how leadership impacts on team performance and motivation (using models such as Maslow, Herzberg and McGregor)",
    "5.2 explain why it may be necessary to change leadership styles to effectively support the management of a project",
    "5.3 describe the characteristics and benefits of effective teams and teamwork",
    "5.4 explain factors which impact on the leadership of virtual teams",
    "5.5 explain factors which influence the creation, development and leadership of teams (using models such as Belbin, Margerison - McCann, Myers - Briggs, Hackman, Tuckman, Katzenbach and Smith)",
    "6.1 explain the importance of a business case throughout the project life cycle",
    "6.2 explain what is meant by benefits management (including identification, definition, planning, tracking and realisation)",
    "6.3 explain investment appraisal techniques used by a project manager (including Internal Rate of Return (IRR) and Net Present Value (NPV)). Provek added note: no calculations are required for this topic",
    "6.4 explain an information management process (including collection, storage, curation, dissemination, archiving and the destruction of information)",
    "6.5 explain factors which would typically be reported on to help ensure successful project outcomes",
    "6.6 explain the relationship between the deployment baseline and the development of a project management plan in linear and iterative life cycles",
    "6.7 explain the importance of producing a project management plan ",
    "6.8 describe the typical contents of a project management plan",
    "6.9 explain approaches to producing estimates (including parametric, analogous, analytical and Delphi) ",
    "6.10 explain the reasons for and benefits of re-estimating throughout the project life cycle",
    "6.11 explain the relationship between stakeholder analysis, influence and engagement",
    "6.12 explain the importance of managing stakeholder expectations to the success of the project ",
    "6.13 explain why a project manager would use earned value management",
    "6.14 interpret earned value data (including variances and performance indexes) Provek note: no calculations are required.",
    "6.15 explain the benefits of using the interpretation of earned value data",
    "6.16 explain the role of contingency planning in projects",
    "7.1 Explain how to define scope in terms of outputs, outcomes and benefits (including use of product, cost and work breakdown structures)",
    "7.2 explain how to establish scope through requirements management processes (such as gather, analysis, justifying requirements, and baseline needs)",
    "7.3 explain how to manage scope through configuration management processes (such as planning, identification, control, status accounting, and verification audit)",
    "7.4 explain different stages of a typical change control process (such as request, initial evaluation, detailed evaluation, recommendation, update plans, and implement)",
    "8.1 describe ways to create and maintain a schedule (including critical path, and Gantt charts)",
    "8.2 differentiate between critical path and critical chain as scheduling techniques",
    "8.3 describe how resources are categorised and allocated to a linear life cycle schedule",
    "8.4 describe how resources are categorised and allocated to an iterative life cycle schedule",
    "8.5 differentiate between resource smoothing and resource levelling",
    "8.6 differentiate between cost planning for iterative life cycles and cost planning for linear life cycles",
    "9.1 explain the purpose, typical content and importance of a procurement strategy",
    "9.2 differentiate between different methods of supplier reimbursement (including fixed price, cost plus fee, per unit quantity and target cost)",
    "9.3 differentiate between different contractual relationships",
    "9.4 explain a supplier selection process",
    "10.1 explain each stage in a risk management process (such as identification, analysis, response, and closure)",
    "10.2 explain proactive and reactive responses to risk (such as avoid, reduce, transfer or accept and exploit, enhance, share and reject)",
    "10.3 explain the benefits of risk management",
    "10.4 explain the key aspects of issue management",
    "11.1 explain what is meant by quality planning",
    "11.2 differentiate between quality control and quality assurance",
]

options.forEach((i) => select.insertAdjacentHTML("beforeend", `<option id="${i}">${i}</option>`))

button.addEventListener("click", function() {
    if (select.value != "the full exam") {
        main.innerHTML = ""
        main.insertAdjacentHTML("beforeend",
            `
            <h3>${select.value}</h3>
            <textarea></textarea>
            `)
    } else {
        main.innerHTML = ""
        const shuffled = options.sort(() => 0.5 - Math.random()).splice(0, 32)
        let count = 0;
        for (i = 1; i <= 16; i++) {
            main.insertAdjacentHTML("beforeend",
            `
            <h1>Question ${i}</h1>
            <h3>${i + "a. LO " + shuffled[count]} (20 marks)</h3>
            <textarea></textarea>
            <h3>${i + "b. LO " + shuffled[count+1]} (30 marks)</h3>
            <textarea></textarea>
            `)
            count += 2;
    }}})
