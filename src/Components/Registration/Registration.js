import React from 'react';

export default function Registration() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginTop: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Course Registration Form</h1>
          <form style={{ width: '100%', boxSizing: 'border-box' }} action="registration_process.php" method="POST">
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="fullname">Full Name:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="fullname" name="fullname" required />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="phone">Phone Number:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="tel" id="phone" name="phone" required />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="dob">Date of Birth:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="date" id="dob" name="dob" required />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="address">Address:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="address" name="address" required />
            </div>

            {/* First Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="course1">First Selection - Select Course:</label>
              <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="course1" name="course1">
                <option value="course1_option1">Course 1 Option 1</option>
                <option value="course1_option2">Course 1 Option 2</option>
                <option value="course1_option3">Course 1 Option 3</option>
                <option value="course1_option4">Course 1 Option 4</option>
                <option value="course1_option5">Course 1 Option 5</option>
              </select>
            </div>

            {/* Second Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="course2">Second Selection - Select Course:</label>
              <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="course2" name="course2">
                <option value="course2_option1">Course 2 Option 1</option>
                <option value="course2_option2">Course 2 Option 2</option>
                <option value="course2_option3">Course 2 Option 3</option>
                <option value="course2_option4">Course 2 Option 4</option>
                <option value="course2_option5">Course 2 Option 5</option>
              </select>
            </div>

            {/* Third Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="course3">Third Selection - Select Course:</label>
              <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="course3" name="course3">
                <option value="course3_option1">Course 3 Option 1</option>
                <option value="course3_option2">Course 3 Option 2</option>
                <option value="course3_option3">Course 3 Option 3</option>
                <option value="course3_option4">Course 3 Option 4</option>
                <option value="course3_option5">Course 3 Option 5</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="reason">Why do you want to enroll  for  course?</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="reason" name="reason" />
            </div>

            {/* Other input fields omitted for brevity */}

            <div style={{ textAlign: 'center' }}>
              <input style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


