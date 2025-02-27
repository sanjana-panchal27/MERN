import { useState, useEffect } from "react";
import axios from 'axios';
import "./CompanyHome.css";
const CFeedback = () => {

  const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        axios.get('/api/feedback/all')
            .then(res => setFeedbacks(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback/submit', formData);
            alert('Feedback submitted!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
        }
    };


  return (
    <>
     <div>
      <div className="c-feedback">
            <h1>Feedback</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your feedback" value={formData.message} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>

            <h3>All Feedback</h3>
            <ul>
                {feedbacks.map(fb => (
                    <li key={fb._id}><strong>{fb.name}:</strong> {fb.message}</li>
                ))}
            </ul>
            </div>
        </div>
    </>
  );
};

export default CFeedback;
