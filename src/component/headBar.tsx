import {Avatar, Input, Progress} from "@chakra-ui/react";
import style from "../assets/headBar.module.css"
import {useNavigate} from "react-router-dom";

export const HeadBar = () => {
    const navigate = useNavigate()
    const nowUser = "12345"
    return (
        <div className={style.body} >
            <div className={style.logo} onClick={
                () => {
                    navigate( `/` )
                }
            } >
                LOGO
            </div>
            <Input placeholder='put in here' className={style.input}/>
            <div>
                {/*<Progress hasStripe value={80} className={style.progress}/>*/}
            </div>
            <div className={style.profile}>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' onClick={
                    () => {
                        navigate( `/myPage/${nowUser}`, { state: { id: nowUser} } )
                        // navigate( `/myPage/${nowUser}`)
                    }
                } />
            </div>
        </div>
    )
}