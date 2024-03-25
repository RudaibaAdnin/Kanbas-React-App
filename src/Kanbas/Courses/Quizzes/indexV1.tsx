import React, { useState } from 'react';



function dum() {
    const [title, setTitle] = useState('');
    const [points, setPoints] = useState(0);
    const [questionText, setQuestionText] = useState('');
    const [blanks, setBlanks] = useState([{ id: Date.now(), answer: [''] }]);
    const [question, setQuestion]= useState({ _id: "0", name: "S1", type: "BLANKS", questionText: "New Description", points: "0", course: "random",
    answer:'', dueDate: "2023-09-10",  availableDate: "2023-09-10",  untilDate: "2023-09-10"});
  
    const handleAnswer = (id, newAnswer) => {
      const updatedBlank = blanks.map(blank => 
        blank.id === id ? { ...blank, answer: newAnswer} : blank
      );
      setBlanks(updatedBlank);
    };
  
    const addBlank = () => {
      setBlanks([...blanks, { id: Date.now(), answer: [''] }]);
    };
  
    const removeBlank = (id) => {
      setBlanks(blanks.filter(blank => blank.id !== id));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     // onSave({ title, points, questionText, blanks });
      // Reset form
      setTitle('');
      setPoints(0);
      setQuestionText('');
      setBlanks([{ id: Date.now(), answer: [''] }]);
    };
    const handleSave = () => {
      const updatedAnswers = blanks.map(blank => blank.answer);
        // Update the question state, specifically the answer field
        setQuestion({...question, answer: updatedAnswers.join(', ') });
        // Alert for demonstration
        alert(`Answers Saved: ${updatedAnswers.join(', ')}+${question.questionText}`);
    };
  
    return (
      <div className="col-md-10">
        <br/>
        <br/>
        <h2>Fill in the Blanks Question</h2>
        <input className="form-control m-2" type="text" value={question.name} onChange={(e) => setQuestion({...question, name: e.target.value})} placeholder="Title" />
        <input className="form-control m-2" type="number" value={question.points} onChange={(e) => setQuestion({...question, points: e.target.value})} placeholder="Points" />
        <textarea className="form-control m-2" value={question.questionText} onChange={(e) => setQuestion({...question, questionText: e.target.value})} placeholder="Question with ___ for blanks" />
        <button className="btn btn-success m-2" type="button" onClick={addBlank}>Add Blank</button>
        <div>
          {blanks.map((blank, index) => (
            <div key={blank.id} className="col-md-5">
              <label> Answer</label>
              <input
                type="text"
                className="form-control m-2"
                value={blank.answer}
                onChange={(e) => handleAnswer(blank.id, e.target.value)}
                placeholder="Answer"
              />
              <button className="btn btn-warning float-end m-2" type="button" onClick={() => removeBlank(blank.id)}>Remove</button>
              <br/>
            </div>
          
          ))}
         
        </div>
        <br/>
        <br/>
        <button className="btn btn-danger float-end m-2" onClick={handleSave}>Save/Update Question</button>
        <button className="btn btn-primary float-end m-2">Cancel</button>
      </div>
    );
}




export default dum;

// Example onSave and onCancel handlers
// function handleSave(questionData) {
//   console.log('Saved Question:', questionData);
// }

// function handleCancel() {
//   console.log('Cancelled');
// }
