import React, { useState } from 'react';

function MultipleChoiceQuestionEditor({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(0);
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState([{ id: Date.now(), text: '', correct: false }]);

  const handleChoiceTextChange = (id, newText) => {
    const updatedChoices = choices.map(choice => 
      choice.id === id ? { ...choice, text: newText } : choice
    );
    setChoices(updatedChoices);
  };

  const handleCorrectAnswerChange = (id) => {
    const updatedChoices = choices.map(choice => 
      ({ ...choice, correct: choice.id === id })
    );
    setChoices(updatedChoices);
  };

  const addChoice = () => {
    setChoices([...choices, { id: Date.now(), text: '', correct: false }]);
  };

  const removeChoice = (id) => {
    setChoices(choices.filter(choice => choice.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, points, questionText, choices });
    // Reset form
    setTitle('');
    setPoints(0);
    setQuestionText('');
    setChoices([{ id: Date.now(), text: '', correct: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create/Edit Multiple Choice Question</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} placeholder="Points" />
      <textarea value={questionText} onChange={(e) => setQuestionText(e.target.value)} placeholder="Question" />
      
      <div>
        {choices.map((choice, index) => (
          <div key={choice.id}>
            <textarea
              value={choice.text}
              onChange={(e) => handleChoiceTextChange(choice.id, e.target.value)}
              placeholder={`Choice ${index + 1}`}
            />
            <input
              type="radio"
              name="correctAnswer"
              checked={choice.correct}
              onChange={() => handleCorrectAnswerChange(choice.id)}
            />
            <button type="button" onClick={() => removeChoice(choice.id)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addChoice}>Add Choice</button>
      </div>
      
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="submit">Save/Update Question</button>
    </form>
  );
}

export default MultipleChoiceQuestionEditor;
