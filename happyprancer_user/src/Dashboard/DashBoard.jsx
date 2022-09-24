import React, { useState, useEffect } from 'react'

// Css
import "./DashBoard.css"
import "./DashboardMain.css"
import "./DashboardClasses.css"
import "./ClassCard.css"
import "./DashboardResources.css"
import "./Setting.css"
import "./NavigationBar.css"

// Component
import Nav from "../PreSignUpPage/Nav"
import Button from "../SmComponents/Button"

// Images
import Welcomeimg from "../res/Welcome.webp"
import profile from "../res/Card3.png"
import calendarimg from "../res/3d-calendar-icon_165488-4276-removebg-preview.png"
import lightimg from "../res/lightning.webp"
import upgradeimg from "../res/secure.png"

// Backend link
import { API } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
    const nav = useNavigate();
    const [activesection, setactivesection] = useState(0);
    const { data, setdata, setIsLoading } = useAppContext();
    const [isloaddata, setisloaddata] = useState(0);
    const [schedules, setschedules] = useState();
    const [isloadschedules, setisloadschedules] = useState(0);

    async function onLoad() {
        setIsLoading(true)
        try {
            const data = await loadData();
            setdata(data);
            console.log(data.Item);
            setisloaddata(1);

            const Schedules = await loadSchedules();
            setschedules(Schedules);
            console.log(Schedules);
            setisloadschedules(1);
        } catch (e) {
            console.log(e)
            console.log("Error in getting the data")
        }
        setIsLoading(false)
        console.log(isloaddata)
    }
    useEffect(() => {
        onLoad();
    }, []);

    function loadData() {
        return API.get("HappyPrancer", "/happyprancer");
    }
    function loadSchedules() {
        return API.get("HappyPrancer", "/happyprancer/schedules");
    }
    function updateNote(el) {
        console.log(el);
        return API.put("HappyPrancer", "/happyprancer", {
            body: el,
        });
    }

    const NavigationBar = () => {
        return (
            <div className="NavigationBar">
                <div className="NavigationBar_menu">
                    <div className="NavigationBar_menu_items" onClick={() => { setactivesection(0) }}>
                        <ion-icon name="grid"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Dashboard</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setactivesection(1) }}>
                        <ion-icon name="tv-outline"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Classes</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setactivesection(2) }}>
                        <ion-icon name="folder-outline"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Resources</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setactivesection(3) }}>
                        <ion-icon name="settings-sharp"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Settings</div>
                    </div>
                </div>
                <div className="NavigationBar_upgrade">
                    <img src={upgradeimg} alt="" />
                    <div className="NavigationBar_upgrade_des">Upgrade to PRO for more resources</div>
                    <Button className="NavigationBar_upgrade_btn" text="Upgrade" color="Blue" />
                </div>
                <div className="NavigationBar_logout NavigationBar_menu_items"><ion-icon name="log-out-outline"></ion-icon></div>
            </div>
        )
    }
    const DashboardMain = () => {
        const [isedit, setisedit] = useState(0);

        const [userName, setuserName] = useState(isloaddata ? data.Item.userName : "Stranger Man");
        const [phoneNumber, setphoneNumber] = useState(isloaddata ? data.Item.phoneNumber : "1234567890");
        const [gender, setgender] = useState(isloaddata ? data.Item.gender : "Male");
        const [age, setage] = useState(isloaddata ? data.Item.age : "23");
        const [emailId] = useState(isloaddata ? data.Item.emailId : "whoami@gmail.com");

        const handleEdit = async () => {
            setIsLoading(true);
            if (isloaddata) {
                console.log({ userName, phoneNumber, gender, age, emailId: data.Item.emailId, address: data.Item.address });
                try {
                    setisloaddata(0)
                    setdata({ userName, phoneNumber, gender, age, emailId: data.Item.emailId, address: data.Item.address });
                    await updateNote({ userName, phoneNumber, gender, age, emailId: data.Item.emailId, address: data.Item.address });
                    onLoad();
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                alert("Error in loading data")
            }
            setIsLoading(false);
        }
        console.log(isloaddata)

        return (
            <div className="Dashboard_main">
                <div className="Dashboard_main_Welcome">
                    <div className="Dashboard_main_Welcome_content">
                        <div className="Dashboard_main_Welcome_content_heading">Welcome Back {userName}</div>
                        <div className="Dashboard_main_Welcome_content_des">You have Compleated 43 Classes and you have to <br /> complete a few more to earn gift</div>
                        <Button text="Join Class" className="Dashboard_main_Welcome_content_btn" color="Blue" />
                    </div>
                    <img src={Welcomeimg} className="Dashboard_main_Welcome_img" alt="" />
                </div>
                <div className="Dashboard_main_bottom">
                    {isedit ? (<>
                        <div className="Dashboard_main_Profile ">
                            {isloadschedules ? <>
                                <button className="Dashboard_main_Profile_editbtn" onClick={() => { setisedit(!isedit) }}><ion-icon name="brush"></ion-icon></button>
                                <img className="Dashboard_main_Profile_img" src={profile} alt="" />

                                <input type="text" className="Dashboard_main_Profile_name Dashboard_main_Profile_name_active" value={userName} onChange={(e) => setuserName(e.target.value)} />
                                <div className="Dashboard_main_Profile_des">
                                    <div className="Dashboard_main_Profile_des_email">tanmaypanda752@gmail.com</div>
                                    <div className="Dashboard_main_Profile_des_genderage">
                                        <div className="gender Dashboard_main_Profile_name_active">
                                            <span>Gender&nbsp;</span>
                                            <input type="text" className="Dashboard_main_Profile_des_content_sm" value={gender} onChange={(e) => setgender(e.target.value)} />
                                        </div>
                                        <div className="age Dashboard_main_Profile_name_active">
                                            <span>Age&nbsp;</span>
                                            <input type="text" className="Dashboard_main_Profile_des_content_sm" value={age} onChange={(e) => setage(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="phone Dashboard_main_Profile_name_active">
                                        <span>Phone&nbsp;</span>
                                        <input type="tel" className="Dashboard_main_Profile_des_content_sm" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                                    </div>
                                </div>
                                <span onClick={() => { handleEdit() }}><Button text="Update" color="Green" /></span>
                            </> : <>
                                <div className="Profile_notfound_text">
                                    We Have Some Problem To Connect With Server
                                </div>
                            </>}
                        </div>
                    </>) : (<>
                        <div className="Dashboard_main_Profile">
                            {isloadschedules ? <>
                                <button className="Dashboard_main_Profile_editbtn" onClick={() => { setisedit(!isedit) }}><ion-icon name="brush"></ion-icon></button>
                                <img className="Dashboard_main_Profile_img" src={profile} alt="" />

                                <div className="Dashboard_main_Profile_name">Name - {userName}</div>
                                <div className="Dashboard_main_Profile_des">
                                    <div className="Dashboard_main_Profile_des_email">Email - {emailId}</div>
                                    <div className="Dashboard_main_Profile_des_genderage">
                                        <div className="Dashboard_main_Profile_des_email">Gender - {gender}</div>
                                        <div className="Dashboard_main_Profile_des_email">Age - {age}</div>
                                    </div>
                                    <div className="Dashboard_main_Profile_des_phone">Mobile - {phoneNumber}</div>
                                </div>
                            </> : <>
                                <div className="Profile_notfound_text">
                                    We Have Some Problem To Connect With Server
                                </div>
                            </>}
                        </div>
                    </>)}
                    <div className="Dashboard_main_Quote">
                        <img className="Dashboard_main_Quote_img" src={"https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8enVtYmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} alt="" />
                        <div className="Dashboard_main_Quote_content">“Do something today that your future self will thank you for.”</div>
                    </div>
                </div>
            </div>
        )
    }
    const DashboardClasses = () => {
        return (
            <div className="DashboardClasses">
                <div className="DashboardClasses_table_container">
                    <div className="DashboardClasses_table_heading">Your Upcoming Classes</div>
                    <div className="DashboardClasses_table_container_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Instructor</th>
                                    <th>Class Details</th>
                                    <th>Class Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(schedules)}
                                {isloadschedules ? <>
                                    {schedules.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.time}</td>
                                                <td>{item.instructorName}</td>
                                                <td>{item.name}</td>
                                                <td><a href={item.link}><Button className="Table_btn" text="Join" color="Green" /></a></td>
                                            </tr>
                                        )
                                    })}
                                </> : <>No Data Found</>}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="DashboardClasses_bottom">
                    <div className="DashboardClasses_attendance">
                        <img src={calendarimg} alt="" className="DashboardClasses_attendance_img" />
                        <div className="DashboardClasses_attendance_des">
                            <div className="DashboardClasses_attendance_des_heading">Attendance</div>
                            <div className="DashboardClasses_attendance_des_content">34 classes</div>
                        </div>
                    </div>
                    <div className="DashboardClasses_zpoints">
                        <img src={lightimg} alt="" className="DashboardClasses_zpoints_img" />
                        <div className="DashboardClasses_zpoints_des">
                            <div className="DashboardClasses_zpoints_des_heading">Z Points</div>
                            <div className="DashboardClasses_zpoints_des_content">34 Points</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const ClassCard = () => {
        return (
            <div className="CLassCard">
                <div className="CLassCardimg">
                    <img src="https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8enVtYmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="Savebtn CLassCardSavebtn"><ion-icon name="bookmark"></ion-icon></div>
                </div>
                <div className="CLassCard_content">
                    <div className="CLassCard_heading">Zumba Classes</div>
                    <div className="CLassCard_des">
                        <div className="CLassCard_pricing">From $99/month</div>
                        <div className="CLassCard_members">514 members</div>
                    </div>
                </div>
            </div>
        )
    }
    const DashboardResources = () => {
        return (
            <div className="DashboardResources">
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </div>
        )
    }
    const DashboardSettings = () => {
        const [ischangeemail, setischangeemail] = useState(0);

        const [email, setemail] = useState("");
        const [emailconfirmcode, setemailconfirmcode] = useState("");

        const [oldPassword, setoldPassword] = useState("");
        const [password, setpassword] = useState("");
        const [confirmPassword, setconfirmPassword] = useState("");


        function validateForm() {
            return (
                oldPassword.length > 0 &&
                password.length > 0 &&
                password === confirmPassword
            );
        }

        function validateEmailForm() {
            return email.length > 0;
        }

        function validateConfirmForm() {
            return emailconfirmcode.length > 0;
        }

        async function handleUpdateClick() {
            try {
                // setIsLoading(true);
                const user = await Auth.currentAuthenticatedUser();
                await Auth.updateUserAttributes(user, { email: email });
                // setIsLoading(false)
                setischangeemail(!ischangeemail);
            } catch (error) {
                alert(error);
            }
        }

        async function handleConfirmClick() {
            try {
                // setIsLoading(true)
                await Auth.verifyCurrentUserAttributeSubmit("email", emailconfirmcode);
                await updateNote({ userName: data.Item.userName, phoneNumber: data.Item.phoneNumber, gender: data.Item.gender, age: data.Item.age, emailId: email, address: data.Item.address });
                onLoad();
                alert("Your email has been successfully verified");
                setischangeemail(!ischangeemail);
                setemail(""); emailconfirmcode("");
                // setIsLoading(false)
            } catch (error) {
                alert(error);
            }
        }

        async function handlePassword() {
            try {
                setIsLoading(true)
                const currentUser = await Auth.currentAuthenticatedUser();
                await Auth.changePassword(
                    currentUser,
                    oldPassword,
                    password
                );
                alert("Your Password has been changed");
                setoldPassword(""); setpassword(""); setconfirmPassword("");
                setIsLoading(false)
            } catch (error) {
                alert(error);
            }
        }

        return (
            <div className="DashboardSettings">
                <div className="Changeitems">
                    {ischangeemail ? <>
                        <div className="Changeitems_heading">Confirmation code</div>
                        <input className="Changeitems_input" placeholder="Enter The Confirmation Code" type="email" value={emailconfirmcode} onChange={(e) => { setemailconfirmcode(e.target.value) }} />
                        <span onClick={handleConfirmClick}><Button className="Changeitems_btn" text="Update" color="Green" /></span>
                    </> : <>
                        <div className="Default_mail_heading">Default Email - <span>{isloaddata ? data.Item.emailId : "whoami@gmail.com"}</span></div>
                        <div className="Changeitems_heading">Change email</div>
                        <input className="Changeitems_input" placeholder="Enter Your New Email" type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <span onClick={handleUpdateClick}><Button className="Changeitems_btn" text="Update" color="Green" /></span>
                    </>}
                </div>
                <div className="Changeitems">
                    <div className="Changeitems_heading">Change Password</div>
                    <input className="Changeitems_input" placeholder="Old Password" type="password" value={oldPassword} onChange={(e) => { setoldPassword(e.target.value) }} />
                    <input className="Changeitems_input" placeholder="New Password" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <input className="Changeitems_input" placeholder="Confirm Password" type="text" value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} />
                    <span onClick={() => { if (validateForm) handlePassword(); else alert("enter the details") }}><Button className="Changeitems_btn" text="Update" color="Green" /></span>
                </div>
            </div>
        )
    }
    return (
        <div className="DashBoard">
            <div className="DashBoard_Nav"><Nav /></div>
            <div className="DashBoard_Container">
                <div className="Navigation">
                    <NavigationBar />
                </div>
                <div className="DashBoard_Container_Content">
                    {activesection === 0 ? <DashboardMain /> : activesection === 1 ? <DashboardClasses /> : activesection === 2 ? <DashboardResources /> : <DashboardSettings />}
                </div>
            </div>
        </div>
    )
}

export default DashBoard