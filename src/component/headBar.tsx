import {Avatar, Input, Progress} from "@chakra-ui/react";

export const HeadBar = () => {
    return (
        <div style={{display: "flex", background: "lightblue", position: "relative", width: "100vw", height: "50px"}}>
            <div style={{margin: "12px 20px 10px 20px"}}>
                LOGO
            </div>
            <Input placeholder='put in here' style={{width: "600px", margin: "5px 300px 0px 300px", border: "blue solid 2px"}}/>
            <div>
                <Progress hasStripe value={80} style={{width: "120px", marginTop: "20px"}}/>
            </div>
            <div style={{position: "absolute", right: "0px"}}>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </div>
        </div>
    )
}