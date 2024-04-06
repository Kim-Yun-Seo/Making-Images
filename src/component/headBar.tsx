import {Avatar, Input, Progress} from "@chakra-ui/react";
import style from "../assets/headBar.module.css"
import {useNavigate} from "react-router-dom";

export const HeadBar = () => {
    const navigate = useNavigate()
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    const randomNowUserList = ["kim", "lee", "nami"]
    const nowUser = randomNowUserList[getRandomInt(0,2)]
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
                    }
                } />
            </div>
        </div>
    )
}