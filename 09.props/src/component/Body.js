
/*
// 1. 부모로 부터 넘겨받기
const Body = (props) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{props.address}</p>
            <p>{props.user}</p>
        </>
    )
}
*/

import Button from "./button";

/*
// 2. 객체형태로 넘겨준 값 받기
const Body = (props) => {
    return (
        <>
            <h3>본문입니다</h3>
            <p>{props.userInfo.name}님은{props.userInfo.address}에 살고있습니다 <br/><br/>
                {props.userInfo.name}님이 좋아하는것은 {props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다 <br/><br/>
                그 중 가장 좋아하는것은 {props.userInfo.likeList[2]} 입니다.
            </p>

        </>
    )
}
*/

const Body = () => {
    function btnClick(e) {
    alert("버튼 누르지마");
    console.log(e);
    }
    const btnProps = {
        text : "1번",
        color : "hotpink",
        a:"yellow",
        b:2,
        c:3
    }
    return (
        <>
            <h3>본문입니다</h3>
            <button onClick={btnClick} name="A버튼">A이벤트 버튼</button><br/><br/>
            <button onClick={btnClick} name="B버튼">B이벤트 버튼</button><br/><br/>
            <Button {...btnProps} />
        </>
    )
}
export default Body;