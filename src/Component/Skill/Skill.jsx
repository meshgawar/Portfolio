import "./Skill.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Language from "./Language";
import Tools from "./Tools";

export default function Skill() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Language/>
                <Tools/>
            </div>
        </section>
    )
}