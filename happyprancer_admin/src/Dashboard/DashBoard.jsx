import React, { useState, useEffect } from 'react'

// Css
import "./DashBoard.css"
import "./NavigationBar.css"

// Component
import Nav from "../PreSignUpPage/Nav"
import Button from "../PreSignUpPage/Button"


const DashBoard = () => {
    const [navigation,setnavigation] = useState(1)
    const NavigationBar = () => {
        return (
            <div className="NavigationBar">
                <div className="NavigationBar_menu">
                    <div className="NavigationBar_menu_items" onClick={() => { setnavigation(1) }}>
                        <ion-icon name="people"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Users</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setnavigation(2) }}>
                        <ion-icon name="tv-outline"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Classes</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setnavigation(3) }}>
                        <ion-icon name="flag-outline"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Gyms</div>
                    </div>
                    <div className="NavigationBar_menu_items" onClick={() => { setnavigation(4) }}>
                        <ion-icon name="mail-unread"></ion-icon>
                        <div className="NavigationBar_menu_items_heading">Carrer</div>
                    </div>
                </div>
                <div className="NavigationBar_upgrade">This is the admin console</div>
                <div className="NavigationBar_logout NavigationBar_menu_items"><ion-icon name="log-out-outline"></ion-icon></div>
            </div>
        )
    }
    const UserTable = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Btns</th>
                            <th>affliation</th>
                            <th>userId</th>
                            <th>emailId</th>
                            <th>name</th>
                            <th>phoneNumber</th>
                            <th>address</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>dateOfJoining</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                            <td>Lorem, ipsum.</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    const ClassesTable = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>btns</th>
                            <th>data</th>
                            <th>sfgsdfgsg</th>
                            <th>sdgsg</th>
                            <th>sdgsdzgs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_btn"><ion-icon name="create" onClick={(e) => console.log(e.target.parentNode.parentNode)}></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    const GymsTable = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>data</th>
                            <th>sfgsdfgsg</th>
                            <th>sdgsg</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsg</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsdzgs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    const CareersTable = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>data</th>
                            <th>sfgsdfgsg</th>
                            <th>sdgsg</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsg</th>
                            <th>sdgsdzgs</th>
                            <th>sdgsdzgs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                        <tr>
                            <td className="table_btn"><ion-icon name="create"></ion-icon><ion-icon name="trash"></ion-icon></td>
                            <td>sdghedr</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sdgsgsvsv sd vs</td>
                            <td>sgsgsgs sdgsg</td>
                            <td>sdgsdgs g</td>
                            <td>sdgsgsvsv sd vs</td>
                        </tr>
                    </tbody>
                </table>
            </>
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
                    {navigation===1?<UserTable/>:navigation===2?<ClassesTable/>:navigation===3?<GymsTable/>:navigation===4?<CareersTable/>:<>Dont Change The Code</>}
                </div>
            </div>
        </div>
    )
}

export default DashBoard