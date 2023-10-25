const button = document.querySelector("button")
const select = document.querySelector("select")
const main = document.querySelector("main")
const timer = document.getElementById("timer")
let [hours, minutes, seconds] = [0, 0, 0]
let stopvalue = select.value
let intervalid
let spec
let specopt

const options = [
    "select",
    "16 random questions from the book",
    "10 random questions from the book",
    "16 random LO questions",
    "10 random LO questions",
]

const los = [
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

const bq2 = [
    "Describe two benefits of having a project management office - 20 marks (10 marks each)",
    "Select two of the following and explain how they support project management governance - 20 marks (10 marks each)<br>• Regulations<br>• Policies<br>• Procedures<br>• Delegated responsibilities",
    "Explain two key differences between the responsibilities of the project manager and the sponsor in the deployment phase of the project management lifecycle – 20 marks (10 each)",
    "Explain two reasons why projects are structured in phases in a linear project life cycle – 20 marks (10 marks each)",
    "Explain two differences between a project lifecycle and an extended lifecycle – 20 marks (10 marks each)",
    "Outline four ways that knowledge and information management can inform decision making in a project – 20 marks (5 marks each)",
    "Outline four reasons why a programme would be used to deliver strategic change as opposed to using a project – 20 marks (5 marks each)",
    "Explain two ways in which VUCA can be used to assess a project’s context – 20 marks (10 marks each)",
    "Describe two situations where portfolio management may be appropriate – 20 marks (10 marks each)",
    "Explain two ways in which SWOT can be used to assess a project’s context – 20 marks (10 marks each)",
    "State four factors which can positively or negatively affect communication – 20 marks (5 marks each)",
    "State one source of conflict between the project manager and each of the following within a project – 20 marks (5 marks each)<br>• User<br>• Sponsor<br>• Team<br>• Suppliers",
    "Explain two ways how understanding BATNA and ZOPA can help plan and conduct negotiations – 20 marks (10 marks each)",
    "Explain two reasons for analysing stakeholders before preparing a communication management plan – 20 marks (10 marks each)",
    "Explain two reasons why it might be necessary to change leadership styles to ensure effective management during a project – 20 marks (10 marks each)",
    "Describe two characteristics of an effective team – 20 marks (10 marks each)",
    "Explain two factors which impact on the leadership of virtual teams – 20 marks (10 marks each)",
    "Explain two reasons why it is important for the success of a project to manage stakeholder expectations – 20 marks (10 marks each)",
    "Explain what is meant by each of the following benefits management steps – 20 marks (10 marks each)<br>• Definition<br>• Tracking",
    "Explain how these investment appraisal techniques can be used to assess the validity of a project – 20 marks (10 marks each)<br>• Internal Rate of Return (IRR)<br>• Net Present Value (NPV)",
    "Explain two ways in a linear lifecycle how developing a project management plan helps establish a deployment baseline – 20 marks (10 marks each)",
    "In an iterative life cycle, explain two components of the project management plan that need to be considered when arriving at the deployment baseline – 20 marks (10 marks each)",
    "Explain how two of the following are used to produce estimates – 20 marks (10 marks each)<br>• Parametric<br>• Analogous<br>• Delphi",
    "Explain two ways a project manager would use earned value management outputs to update project plans – 20 marks (10 marks each)",
    "Explain two different types of contingency in a project – 20 marks (10 marks each)",
    "Interpret the Earned Value information provided below for a project.  Given the likely schedule impact and cost estimation at completion, propose two practical responses the project manager could take and a justification for each (20 marks)<br>A project has a budget at completion of £120,000 and is planned to be completed in 10 months. At the end of month 5:<br>• Task Planned budget: £60,000<br>• Actual cost:£ 40,000<br>• Earned value: £50,000<br>• SPI = 0.83<br>• CPI = 1.25<br>• EAC = £96k<br>• Planned time/SPI = 12 months",
    "Explain two reasons for contingency planning in a project – 20 marks (10 marks each)",
    "Explain two breakdown structures that are used to develop the scope of a project – 20 marks (10 marks each)",
    "Explain two activities in a configuration management process that help to manage the scope of a project – 20 marks (10 marks each)",
    "Explain two differences between critical path and critical chain scheduling techniques – 20 marks (10 marks each)",
    "Describe how two different categories of resource can be allocated to a project following a linear lifecycle – 20 marks (10 marks each)",
    "Explain two differences in how funding is planned to be allocated for linear and iterative lifecycles – 20 marks (10 marks each)",
    "Explain two elements that differ when cost planning for linear and iterative lifecycles – 20 marks (10 marks each)",
    "Explain two differences between fixed-price and cost-plus fee supplier reimbursement methods – 20 marks (10 marks each)",
    "Explain two differences between two different types of contractual relationships – 20 marks (10 marks each)",
    "Explain two responses that a project manager may take to proactively respond to a negative risk – 20 marks (10 marks each)",
    "Explain two reasons for escalating issues – 20 marks (10 marks each)",
    "Explain two responses that a project manager may take to proactively respond to a positive risk – 20 marks (10 marks each)",
    "Explain two purposes of quality planning for a project – 20 marks (10 marks each)",
    "Explain two differences in quality control activities and quality assurance activities in the deployment phase of a project lifecycle – 20 marks (10 marks each)"
]

const bq3 = [
    "Explain three differences between the following types of organisational structure – 30 marks (10 marks each)<br>• Functional<br>• Matrix",
    "Select three of the following and describe their roles throughout a project - 30 marks (10 marks each)<br>• Users<br>• Project team members<br>• Project steering group<br>• Product owner",
    "Describe three functions of a project management office – 30 marks (10 marks each)",
    "Explain three reasons why a project may close early – 30 marks (10 each)",
    "Explain three differences between linear and iterative lifecycles – 30 marks (10 marks each)",
    "Explain the benefits of conducting each of the following reviews throughout the lifecycle - 30 marks (10 marks each)<br>• Decision gates<br>• Benefits reviews<br>• Audits",
    "Explain three ways in which PESTLE can be used to assess a project’s context – 30 marks (10 marks each)",
    "Explain three ways in which failure to comply with laws and regulations can impact on project delivery – 30 marks (10 marks each)",
    "Explain three differences between projects and business as usual – 30 marks (10 marks each)",
    "Explain how complying with three of the following can impact a project - 30 marks (10 marks each)<br>• Governance<br>• Sustainability<br>• Working conditions<br>• Risk management",
    "Explain three benefits of a communication plan to a project – 30 marks (10 marks each)",
    "Explain three ways in which conflicts can be addressed – 30 marks (10 marks each)",
    "Explain one benefit of each of the following sections of a communication management plan – 30 marks (10 marks each)<br>• Responsibilities for defining communication<br>• Timing<br>• Feedback mechanism",
    "Using a recognised motivational model, explain three ways how leadership impacts on team performance – 30 marks (10 marks each)",
    "Using a recognised model, explain three factors which influence the creation, development and leadership of teams – 30 marks (10 marks each)",
    "Using a recognised model, explain how three aspects of leadership impact on the motivation of a team– 30 marks (10 marks each)",
    "Explain three reasons how stakeholder analysis can assist in influencing and engaging stakeholders – 30 marks (10 marks each)",
    "Explain one reason why a business case is important in each of the following phases of a project lifecycle – 30 marks (10 marks each)<br>• Concept phase<br>• Definition phase<br>• Deployment phase",
    "Explain three reasons why it is important to have a business case – 30 marks (10 marks each)",
    "Describe three distinct plans in a project management plan – 30 marks (10 marks each)",
    "Explain three reasons for producing a project management plan – 30 marks (10 marks each)",
    "Explain three reasons for re-estimating through the project lifecycle – 30 marks (10 marks each)",
    "Explain three reasons for contingency planning in projects – 30 marks (10 marks each)",
    "Explain three of the following steps in an information management process – 30 marks (10 marks each)<br>• Collection<br>• Storage<br>• Dissemination<br>• Archiving",
    "Explain three aspects of a project that would typically be reported on – 30 marks (10 marks each)",
    "Explain three benefits of using the interpretation of earned value data – 30 marks (10 marks each)",
    "Explain three steps in a requirements management process that help to establish the scope of a project – 30 marks (10 marks each)",
    "Explain three steps in a change control process – 30 marks (10 marks each)",
    "Describe three activities when creating and/or maintaining a schedule – 30 marks (10 marks each)",
    "Describe three considerations that need to be considered when allocating resources to a project schedule following a linear lifecycle – 30 marks (10 marks each)",
    "Explain three different considerations that need to be made when deciding to use resource smoothing and resource levelling – 30 marks (10 marks each)",
    "Describe three things that need to be considered when maintaining a schedule – 30 marks (10 marks each)",
    "Explain three steps in a competitive supplier selection process for a project – 30 marks (10 marks each)",
    "Explain the purpose of three distinct elements of a procurement strategy– 30 marks (10 marks each)",
    "Explain three stages in a risk management process – 30 marks (10 marks each)",
    "Explain three benefits of a project risk management process – 30 marks (10 marks each)",
    "Explain three aspects of an issue management process – 30 marks (10 marks each)",
    "Explain three differences between quality assurance and quality control for a project – 30 marks (10 marks each)",
    "Explain three considerations a project manager takes into account when planning quality for a project – 30 marks (10 marks each)"
]

const allbqs = bq2.concat(bq3)
options.forEach((i) => select.insertAdjacentHTML("beforeend", `<option>${i}</option>`))

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
}

function stopwatch() {
    if (stopvalue != select.value) {
        timer.innerHTML = "00:00:00"
        main.innerHTML = `
            <div style="text-align: center; padding: 20px 0px;">Select an option from the dropdown and click Generate<br>The timer will start immediately and reset if the selection changes</div>
        `
        clearInterval(intervalid);
        return
    }
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = h + ":" + m + ":" + s
    return
}

button.addEventListener("click", function() {
    if (select.value === "16 random questions from the book") {
        main.innerHTML = ""
        const bq162 = bq2.sort(() => 0.5 - Math.random()).slice(0, 16)
        const bq163 = bq3.sort(() => 0.5 - Math.random()).slice(0, 16)
        let count = 0;
        for (i = 1; i <= 16; i++) {
            main.insertAdjacentHTML("beforeend",
                `
                <h2>Question ${i}</h2>
                <label>${i + "a. " + bq162[count]}</label>
                <textarea rows="20" class="first"></textarea>
                <label>${i + "b. " + bq163[count]}</label>
                <textarea rows="30"></textarea>
                `)
            count ++;
        }
    } else if (select.value === "10 random questions from the book") {
        main.innerHTML = ""
        const bq102 = bq2.sort(() => 0.5 - Math.random()).slice(0, 10)
        const bq103 = bq3.sort(() => 0.5 - Math.random()).slice(0, 10)
        let count = 0;
        for (i = 1; i <= 10; i++) {
            main.insertAdjacentHTML("beforeend",
                `
                <h2>Question ${i}</h2>
                <label>${i + "a. " + bq102[count]}</label>
                <textarea rows="20" class="first"></textarea>
                <label>${i + "b. " + bq103[count]}</label>
                <textarea rows="30"></textarea>
                `)
            count ++;
        }
    } else if (select.value === "16 random LO questions") {
        main.innerHTML = ""
        const shuffled = los.sort(() => 0.5 - Math.random()).slice(0, 32)
        let count = 0;
        for (i = 1; i <= 16; i++) {
            main.insertAdjacentHTML("beforeend",
                `
                <h2>Question ${i}</h2>
                <label>${i + "a. LO " + shuffled[count]} (20 marks)</label>
                <textarea rows="20" class="first"></textarea>
                <label>${i + "b. LO " + shuffled[count+1]} (30 marks)</label>
                <textarea rows="30"></textarea>
                `)
            count += 2;
        }
    } else if (select.value === "10 random LO questions") {
        main.innerHTML = ""
        const shuffled = los.sort(() => 0.5 - Math.random()).slice(0, 20)
        let count = 0;
        for (i = 1; i <= 10; i++) {
            main.insertAdjacentHTML("beforeend",
                `
                <h2>Question ${i}</h2>
                <label>${i + "a. LO " + shuffled[count]} (20 marks)</label>
                <textarea rows="20" class="first"></textarea>
                <label>${i + "b. LO " + shuffled[count+1]} (30 marks)</label>
                <textarea rows="30"></textarea>
                `)
            count += 2;
        }
    } else {
        main.innerHTML = ""
        return
    }
    stopvalue = select.value
    reset()
    if (intervalid) {
        clearInterval(intervalid);
        intervalid = null
    }
    intervalid = setInterval(stopwatch, 1000)
})
