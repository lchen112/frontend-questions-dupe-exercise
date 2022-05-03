import "./QuestionBox.css";
export default function QuestionBox({ question }) {
  console.log("question", question);
  return (
    <div className="question-box">
      <div className="status"></div>
      <h3 className="question">{question.name}</h3>
    </div>
  );
}
