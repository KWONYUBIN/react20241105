import React, {useState} from "react";
import {Button} from "../components/ui/button.jsx";
import {Switch} from "../components/ui/switch.jsx";
import {Box} from "@chakra-ui/react";

// 컴퍼넌트의 lifecycle
// initial render (mount) (떨어졌다가 다시 붙는 것 ex) 스위치를 켬) (새로고침)
// re-render (update) mount 상태에서 상태가 변하면 re-render 됨
// unmount : 사라지는 것 (날아가버림)

function MyApp52(props) {
    const [show, setShow] = useState(true);
    return (
        <div>
            <Switch
                checked={show}
                onCheckedChange={(e) => setShow(e.checked)}
            ></Switch>
            {show && <MyComp1/>}   {/* unmount 됨 */}

            <hr/>
            <Box display={show ? "block" : "none"}>
                <MyComp1/>     {/* unmount 안됨*/}
            </Box>
        </div>
    );
}

function MyComp1() {
    const [count, setCount] = useState(0);

    console.log("그림");

    return (
        <Box>
            <Button onClick={() => setCount(count + 1)}> count : {count}</Button>
        </Box>
    );
}

export default MyApp52;
