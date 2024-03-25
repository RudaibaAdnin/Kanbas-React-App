import React, { useState } from 'react';

function TrueFalseQuestionEditor({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(true); // Default to true

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the question data to the onSave function provided by the parent component
    onSave({ title, points, questionText, correctAnswer });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Create/Edit True/False Question</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', margin: '10px 0' }}
        />
      </div>
      <div>
        <label>Points:</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          style={{ width: '100%', margin: '10px 0' }}
        />
      </div>
      <div>
        <label>Question:</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          style={{ width: '100%', margin: '10px 0', height: '100px' }}
        />
      </div>
      <div>
        <label>Correct Answer:</label>
        <label>
          <input
            type="radio"
            name="correctAnswer"
            value="true"
            checked={correctAnswer === true}
            onChange={() => setCorrectAnswer(true)}
            style={{ margin: '0 10px' }}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="correctAnswer"
            value="false"
            checked={correctAnswer === false}
            onChange={() => setCorrectAnswer(false)}
            style={{ margin: '0 10px' }}
          />
          False
        </label>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={onCancel} style={{ marginRight: '10px' }}>Cancel</button>
        <button type="submit">Save/Update Question</button>
      </div>
    </form>
  );
}

export default TrueFalseQuestionEditor;

// Example onSave and onCancel handlers
// function handleSave(questionData) {
//   console.log('Saved Question:', questionData);
// }

// function handleCancel() {
//   console.log('Cancelled');
// }
