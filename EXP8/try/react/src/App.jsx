import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/students';

function App() {
  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)

  // Fetch all students
  const fetchStudents = async () => {
    setLoading(true)
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
      console.log('Students fetched:', response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
    setLoading(false)
  };

  // Add or update student
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.age) {
      alert('Please fill all fields')
      return
    }

    try {
      if (editId) {
        // Update student
        await axios.put(`${API_URL}/${editId}`, formData);
        alert('Student updated successfully')
        setEditId(null)
      } else {
        // Add new student
        await axios.post(API_URL, formData);
        alert('Student added successfully')
      }
      setFormData({ name: '', email: '', age: '' })
      fetchStudents()
    } catch (error) {
      console.error('Error saving student:', error);
      alert('Error saving student')
    }
  };

  // Delete student
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert('Student deleted successfully')
      fetchStudents()
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student')
    }
  };

  // Edit student
  const handleEdit = (student) => {
    setFormData({ name: student.name, email: student.email, age: student.age })
    setEditId(student.id)
  };

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '2.5em', marginBottom: '40px', fontWeight: '700' }}>📚 Student Management System</h1>
      
      {/* Form */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', marginBottom: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8em', fontWeight: '600' }}>{editId ? '✏️ Edit Student' : '➕ Add Student'}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter student name"
                style={{ padding: '12px', width: '100%', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '1em', color: '#333', backgroundColor: '#fff', boxSizing: 'border-box', transition: 'border-color 0.3s' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter email address"
                style={{ padding: '12px', width: '100%', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '1em', color: '#333', backgroundColor: '#fff', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Age:</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Enter age"
                style={{ padding: '12px', width: '100%', border: '2px solid #e0e0e0', borderRadius: '6px', fontSize: '1em', color: '#333', backgroundColor: '#fff', boxSizing: 'border-box' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="submit" style={{ padding: '12px 30px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1em', fontWeight: '600', transition: 'background-color 0.3s', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} onMouseOver={(e) => e.target.style.backgroundColor = '#229954'} onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}>
              {editId ? '💾 Update Student' : '➕ Add Student'}
            </button>
            {editId && (
              <button 
                type="button" 
                onClick={() => { setEditId(null); setFormData({ name: '', email: '', age: '' }); }}
                style={{ padding: '12px 30px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1em', fontWeight: '600', transition: 'background-color 0.3s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
              >
                ✖️ Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Students List */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '1.8em', fontWeight: '600' }}>👥 Students List</h2>
        {loading && <p style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '1.1em' }}>⏳ Loading...</p>}
        {students.length === 0 && !loading && <p style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '1.1em' }}>📭 No students found. Add one to get started!</p>}
        {students.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
              <thead>
                <tr style={{ backgroundColor: '#3498db', color: 'white', fontWeight: '600' }}>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd', fontSize: '1.05em' }}>ID</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd', fontSize: '1.05em' }}>Name</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd', fontSize: '1.05em' }}>Email</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd', fontSize: '1.05em' }}>Age</th>
                  <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd', fontSize: '1.05em' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8f4f8'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f8f9fa' : '#fff'}>
                    <td style={{ padding: '15px', border: '1px solid #ddd', color: '#2c3e50', fontWeight: '600' }}>{student.id}</td>
                    <td style={{ padding: '15px', border: '1px solid #ddd', color: '#333' }}>{student.name}</td>
                    <td style={{ padding: '15px', border: '1px solid #ddd', color: '#333' }}>{student.email}</td>
                    <td style={{ padding: '15px', border: '1px solid #ddd', color: '#333', fontWeight: '500' }}>{student.age}</td>
                    <td style={{ padding: '15px', border: '1px solid #ddd' }}>
                      <button
                        onClick={() => handleEdit(student)}
                        style={{ padding: '8px 15px', marginRight: '8px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background-color 0.3s', fontSize: '0.95em' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        style={{ padding: '8px 15px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background-color 0.3s', fontSize: '0.95em' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
