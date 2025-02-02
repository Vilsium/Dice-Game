import styled from 'styled-components'

const NumberSelector = ({error, setError, selectNumber, setSelectNumber}) => {
    const arr = [1,2,3,4,5,6];
    
    const numberSelectorHandler = (value) => {
        setSelectNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arr.map((value, i) => (
                    <Box isSelected={value == selectNumber} key={i} onClick={() => numberSelectorHandler(value)}>{value}</Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
    }
    .error {
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    display: grid;
    place-items: center;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => !props.isSelected ? "black" : "white"};
`;