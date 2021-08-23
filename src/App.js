import React, { useState } from 'react';
import data from './Data';
import Question from './Components/Question.js';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                data={data}
                title={question.title}
                info={question.info}
                setQuestion={setQuestions}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
