import { useSelector } from "react-redux"

export const Result = () => {
    const result = useSelector(state => state.questionnaire.result)

    return <h2 style={{ textAlign: "center" }}>Current score: {result}</h2>
}