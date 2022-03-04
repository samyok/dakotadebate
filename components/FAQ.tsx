/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import BorderedH2 from "./BorderedH2";
import Collapsible from "./Collapsible";

export default function FAQ() {
    return (
        <div className={"container"} id="faq">
            <BorderedH2>FAQ</BorderedH2>
            <Collapsible q={"When is the camp?"}>
                Both the online and in-person camps will take place from <b>June 25nd to June 30th, 2021.</b> Classes
                will be held for most of each day, with a camp tournament on the last day. Our team will be
                both online and in-perosn helping prepare evidence, cases, and rebuttals.
            </Collapsible>
            <Collapsible q={"Where is the camp?"}>
                In-person camp will be held at South Dakota State University.
            </Collapsible>
            <Collapsible q={"What time is the camp?"}>
                The online lessons and workshops will be from 10-4:30 Central Time on most days (subject to change),
                with optional fun activities and seminars throughout the evening. In-person students will have
                a similar schedule.

                Our goal is to make the online and in-person camps be as similar as possible to make the camp as
                accessible as possible.
            </Collapsible>
            <Collapsible q={"Should I join even if I have no debate experience?"}>
                <b>YES!</b> This camp is meant to be an introductory and intermediate camp, so we
                expect a large group of students to have never touched debate before. We will split
                the novice and intermediate groups during classes.
            </Collapsible>
            <Collapsible q={"How much does this camp cost?"}>
                <ul>
                    <li><b>In-person, with dorms and meals</b> - $550</li>
                    <li><b>In-person, commuter with meals</b> - $275</li>
                    <li><b>In-person, commuter without meals</b> - Free</li>
                    <li><b>Online</b> - Free</li>
                </ul>
            </Collapsible>
            <Collapsible q={"Who is Dakota Debate Institute for?"}>
                DDI is for 7th through 12th graders who want to learn about debate and research. We
                teach two formats: Lincoln-Douglas Debate and Public Forum Debate.
            </Collapsible>
            <Collapsible q={"Why should I attend Dakota Debate over other camps?"}>
                Summer debate camps often cost thousands of dollars. DDI is different. With a{" "}
                camp run completely by volunteers, DDI aims to empower <b>every</b>{" "}
                aspiring student. Because our team is run entirely by current and former debaters,
                we bring you the tactics relevant to the evolving South Dakota debate field.
            </Collapsible>
            <Collapsible q={"Who is teaching?"}>
                Our amazing team includes a 2nd-place <b>national finalist</b> at the 2021 National
                Tournament, <b>six</b> South Dakota <b>state champions</b>, a{" "}
                <b>Tournament of Champions qualifier</b>, and other experienced advisors who are the
                best that the South Dakota debate community has to offer.

                Of course, we will also have SDSU staff assisting and advising at the in-person camp for safety.
            </Collapsible>
            <Collapsible q={"What is Dakota Debate Institute?"}>
                DDI is a camp for every established or future debater who wants to gain skills in
                communication, research, argumentation, and/or advocacy. Our curriculum is designed
                to help debaters become more competitive and use their skills to make a difference
                in their communities.
            </Collapsible>
            <style jsx>{`
                .container {
                    margin-left: 5%;
                    width: 90%;
                }
            `}</style>
        </div>
    );
}
