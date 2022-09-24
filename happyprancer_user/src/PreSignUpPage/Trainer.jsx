import React,{useState} from 'react'
import "./Trainer.css"

const TrainerData = [
    {
        name:"Aurosikha Das",
        license:"Zumba Trainer, Cirtified",
        time:"LIVE | At Home | 45 mins",
        about:"Aurosikha Das is an internationally certified Zumba instructor. Dance you heart out with Aurosikha in this super fun Live Zumba Fitness session. <br/> Aurosikha Das is an internationally certified Zumba instructor. Dance you heart out with Aurosikha in Connect with Aurosikha on Instagram @auroshikhadas",
        licensename:"Zumba Fitness  Zumba Basic 1",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Mithun Austin",
        license:"Zumba Trainer, Cirtified",
        time:"LIVE | At Home | 45 mins",
        about:"Mithun Austin is an internationally certified Zumba instructor. Dance you heart out with Aurosikha in this super fun Live Zumba Fitness session. <br/> Aurosikha Das is an a instructor. Dance you heart out with Aurosikha in Lorem ipsum dolor sit amet. with Aurosikha on Instagram @auroshikhadas",
        licensename:"Zumba Fitness  Zumba Basic 1",
        img:"https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Luke Harper",
        license:"Zumba Trainer, Cirtified",
        time:"LIVE | At Home | 45 mins",
        about:"Luke Harper is an internationally certified Zumba instructor. Dance you heart out with Aurosikha in this super fun Live Zumba Fitness session. <br/> Aurosikha Das is an Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente animi in iste. on Instagram @LukeHarper",
        licensename:"Zumba Fitness  Zumba Basic 1",
        img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
]

const Trainer = () => {
    const [clicked,setClicked] = useState(0);
    const TrainerCard = (props) => {
        var classn = "TrainerCard "+props.className;
        return (
            <div className={classn} onClick={()=>{setClicked(+props.onclick)}}>
                <img className="TrainerCard_img" src={props.img} alt="" />
                <div className="TrainerCard_content">
                    <div className="TrainerCard_content_name">{props.name}</div>
                    <div className="TrainerCard_content_license">{props.license}</div>
                </div>
            </div>
        )
    }
    return (
        <div className="Trainer" id="trainer">
            <div className="TrainerHeading">Trainers</div>
            <div className="TrainerContainer">
                <div className="TrainerLeft">
                    <TrainerCard onclick="0" className={clicked===0?"ActiveTrainerCard":""} img={TrainerData[0].img} name={TrainerData[0].name} license={TrainerData[0].license} />
                    <TrainerCard onclick="1" className={clicked===1?"ActiveTrainerCard":""} img={TrainerData[1].img} name={TrainerData[1].name} license={TrainerData[1].license} />
                    <TrainerCard onclick="2" className={clicked===2?"ActiveTrainerCard":""} img={TrainerData[2].img} name={TrainerData[2].name} license={TrainerData[2].license} />
                </div>
                <div className="TrainerRight">
                    <div className="TrainerRight_heading">Know More About {clicked===0?TrainerData[0].name:clicked===1?TrainerData[1].name:clicked===2?TrainerData[2].name:TrainerData[0].name}</div>
                    <div className="TrainerRight_time">{clicked===0?TrainerData[0].time:clicked===1?TrainerData[1].time:clicked===2?TrainerData[2].time:TrainerData[0].time}</div>
                    <div className="TrainerRight_about">{clicked===0?TrainerData[0].about:clicked===1?TrainerData[1].about:clicked===2?TrainerData[2].about:TrainerData[0].about}</div>
                    
                    <div className="TrainerRight_licence">
                        <div className="License_heading">License</div>
                        {clicked===0?TrainerData[0].licensename:clicked===1?TrainerData[1].licensename:clicked===2?TrainerData[2].licensename:TrainerData[0].licensename}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainer