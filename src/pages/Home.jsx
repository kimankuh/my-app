import Button from "../components/Button/Button";

export default function Home(){
    return (
        <div>
            <Button type="primary">확인</Button>
            <Button type="default">취소</Button>
            <Button type="danger">삭제</Button>
        </div>
    );
}