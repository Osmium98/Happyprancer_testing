import React,{useState} from 'react'
import "./Faq.css"

const Faq = () => {
    const [open,setopen] = useState("@");
    const FaqBox = (props) => {
        const [openb,setopenb] = useState(0);
        var x = !openb
        return (
                <div className={!x?"FaqBox FaqBox_open":"FaqBox"}  onClick={()=>{setopenb(!openb)}}>
                    <div className={!x?"FaqBox_symbol FaqBox_symbol_open":"FaqBox_symbol"}><ion-icon name="add"></ion-icon></div>
                    <div className="FaqBox_content">
                        <div className="FaqBox_question">{props.qes}</div>
                        <div className={!x?"FaqBox_ans FaqBox_ans_open":"FaqBox_ans"} >{props.ans}</div>
                    </div>
                </div>
        )
    }
    return (
        <div className="Faq">
            <div className="Faq_headings">
                <div className="Faq_semi_heading">Got any Queries ?</div>
                <div className="Faq_heading">Frequently Asked Questions</div>
            </div>
            <div className="Faq_container">
                <FaqBox open={open==="1"?"open":"close"} number="1" qes="What is Happyprancer?" ans="Online Instructor led dance fitness community"/>
                <FaqBox open={open==="2"?"open":"close"} number="2" qes="What is our mission?" ans="HappyPrancer's mission is to bring dance as fitness activity and performance to people. And through dance, to create healthier people and more integrated communities."/>
                <FaqBox open={open==="3"?"open":"close"} number="3" qes="Do I have to pay any subscription charges ?" ans="Currently there is no subscription charges to join and participate in Zumba classes."/>
                <FaqBox open={open==="4"?"open":"close"} number="4" qes="How can I join as an Instructor?" ans="We are looking certified Zumba instructors and we also pay for Zumba certifications to deserving candidates. Please Click here and fill the form to apply."/>
                <FaqBox open={open==="5"?"open":"close"} number="5" qes="I am a GYM owner. How can I connect?" ans="Please Click here and fill the form to be affiliated."/>
            </div> 
        </div>
    )
}

export default Faq