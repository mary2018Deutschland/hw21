import { useDispatch, useSelector } from "react-redux";
import { pickAnswer } from "../../questionnaire/questionnaireSlice";
import s from "./Question.module.css";

export const Question = () => {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <div className={s.radios}>
            <div>
              <input
                type="radio"
                onChange={(event) =>
                  dispatch(
                    pickAnswer({
                      id: question.id,
                      option: event.target.value,
                    })
                  )
                }
                id={"true" + question.id}
                name={question.id}
                value="true"
              />
              <label htmlFor={"true" + question.id}>True</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(event) =>
                  dispatch(
                    pickAnswer({
                      id: question.id,
                      option: event.target.value,
                    })
                  )
                }
                id={"false" + question.id}
                name={question.id}
                value="false"
              />
              <label htmlFor={"false" + question.id}>False</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
