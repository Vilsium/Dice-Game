import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import Rules from "./Rules"

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectNumber, setSelectNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber =  (min, max) => {
        return Math.floor((Math.random() * (max-min))+min);
    }
    const roleDice = () => {
        if(!selectNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber)
        if(selectNumber == randomNumber) setScore((prev) => prev + randomNumber)
        else setScore((prev) => prev - 2)
    setSelectNumber(undefined)
    }

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="topSection">
                <TotalScore score={score} />
                <NumberSelector error={error} setError={setError} selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="buttons">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .topSection {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
`