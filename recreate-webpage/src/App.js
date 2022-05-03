import "./App.css";
import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
const API_URL =
  "https://prod.api.algoexpert.io/api/problems/v1/frontendexpert/interview-questions/list";
//may expire
const authorization =
  "eyJhbGciOiJIUzI1NiIsImtpZCI6IjdjYmM2ZWRhNzk1ZGM1YzMxZjJmOTk2Yzg0ODRkZTRiMGIxOTgwMmVmOTYwOWE3YzJmNDFmM2E0OTVhYjZmN2MiLCJ0eXAiOiJKV1QifQ.eyJTZXNzaW9uSUQiOiJkNGZmNmEyYi03MGRhLTQxZTAtYjZhNi0yOWM3MWMxN2RkN2YiLCJNZXRhZGF0YSI6eyJwYXJ0aXRpb24iOiJtYWluIiwib2F1dGhfcHJvdmlkZXIiOiJkZWZhdWx0Iiwib2F1dGhfdXNlcl9pZCI6ImUyODRiNmY5LTU0MmYtNGVlYS04NGYwLTZhYzA4ZTM3ZTM5NCIsImVtYWlsIjoiIiwibmFtZSI6IiIsImF2YXRhcl91cmwiOiIiLCJyZWdpb24iOiJVUyIsInJvbGVzIjoidXNlciJ9LCJHZW5lcmljTWV0YSI6e30sImV4cCI6MTY1MjgyMzc1NCwianRpIjoiMTU5YTVlYmUtMjNjNS00MTI5LWJjZTEtNzczN2E4MGJhM2UxIiwiaWF0IjoxNjUxNjE0MTU0LCJpc3MiOiJhbGdvZXhwZXJ0Iiwic3ViIjoiZGVmYXVsdHxlMjg0YjZmOS01NDJmLTRlZWEtODRmMC02YWMwOGUzN2UzOTQifQ.UYEyiqnafhNAQIN2ne2G5tDIfHsVRv4Hvm69TFgLiZ0";
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        authorization: authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
      });
  }, []);

  const renderQuestions = (type) => {
    return (
      questions &&
      questions.length > 0 &&
      questions
        .filter((q) => q.category == type)
        .map((q) => <QuestionBox key={q.id} question={q} />)
    );
  };

  return (
    <span className="App">
      <h1>Interview Questions</h1>
      <div id="wrapper">
        <div className="category">
          <h2>HTML</h2>
          {renderQuestions("HTML")}
        </div>
        <div className="category">
          <h2>CSS</h2>
          {renderQuestions("CSS")}
        </div>
        <div className="category">
          <h2>Javascript</h2>
          {renderQuestions("JavaScript")}
        </div>
      </div>
    </span>
  );
}

export default App;
