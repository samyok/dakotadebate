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
                The online camp is set to occur during the time frame of August 2nd through August
                9th, 2021. Classes would be held on the weekdays, with a final practice tournament
                occuring on the last day of the camp. Staff will be online helping prepare evidence,
                cases, and rebuttals as needed over the weekend.
            </Collapsible>
            <Collapsible q={"Should I join even if I have no debate experience?"}>
                <b>YES!</b> This camp is meant to be an introductory and intermediate camp, so we
                expect a large group of students to never have touched debate before. We will split
                the novice and intermediate groups during classes.
            </Collapsible>
            <Collapsible q={"How much does this camp cost?"}>
                Nothing! The camp is completely free.
            </Collapsible>
            <Collapsible q={"Who is Dakota Debate Institute for?"}>
                DDI is for 7th through 12th graders who are aspiring to learn about debate and
                research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum
                Debate.
            </Collapsible>
            <Collapsible q={"Why should I attend Dakota Debate over other camps?"}>
                Summer debate camps often cost thousands of dollars. DDI is different. With a
                COMPLETELY FREE camp run by volunteers, DDI aims to empower EVERY aspiring student.
                Because our team is run entirely by debaters who have debated this year, we bring
                you the tactics that are relevant to the evolving South Dakota debate field.
            </Collapsible>
            <Collapsible q={"Who is teaching?"}>
                Our amazing team includes a 2nd-place finalist at the 2021 National Tournament,{" "}
                <b>multiple</b> South Dakota State Champions, experienced coaches/advisors, and many
                others who are the best that the South Dakota Debate Community has to offer.
            </Collapsible>
            <Collapsible q={"What is Dakota Debate Institute?"}>
                DDI is a camp for every established or future debater who wants to boost their
                skills and gain a competitive platform in the world of Speech and Debate. Our online
                camp was designed specifically to teach the most valuable lessons our team has
                learned through their experience as successful debaters and make a difference in our
                community.
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
