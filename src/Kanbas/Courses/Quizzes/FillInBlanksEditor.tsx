import React, { useState } from 'react';

function FillInBlanksEditor({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(0);
  const [questionText, setQuestionText] = useState('');
  const [blanks, setBlanks] = useState([{ id: Date.now(), answers: [''] }]);

  const handleAnswerChange = (id, newAnswers) => {
    const updatedBlanks = blanks.map(blank => 
      blank.id === id ? { ...blank, answers: newAnswers.split(',').map(answer => answer.trim()) } : blank
    );
    setBlanks(updatedBlanks);
  };

  const addBlank = () => {
    setBlanks([...blanks, { id: Date.now(), answers: [''] }]);
  };

  const removeBlank = (id) => {
    setBlanks(blanks.filter(blank => blank.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, points, questionText, blanks });
    // Reset form
    setTitle('');
    setPoints(0);
    setQuestionText('');
    setBlanks([{ id: Date.now(), answers: [''] }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create/Edit Fill in the Blanks Question</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} placeholder="Points" />
      <textarea value={questionText} onChange={(e) => setQuestionText(e.target.value)} placeholder="Question with ___ for blanks" />
      
      <div>
        {blanks.map((blank, index) => (
          <div key={blank.id}>
            <label>Blank {index + 1} Answers (comma-separated):</label>
            <input
              type="text"
              value={blank.answers.join(', ')}
              onChange={(e) => handleAnswerChange(blank.id, e.target.value)}
              placeholder="Answer1, Answer2"
            />
            <button type="button" onClick={() => removeBlank(blank.id)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addBlank}>Add Blank</button>
      </div>
      
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="submit">Save/Update Question</button>
    </form>
  );
}

export default FillInBlanksEditor;
