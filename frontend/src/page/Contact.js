import React from 'react';

const Contact = () => {
  return (
    <div style={{ 
      backgroundColor: '#f0f0f0',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'left', 
    }}>
      <h2 style={{ 
        fontSize: '26px', 
        fontWeight: 'bold', 
        color: '#333', 
        marginBottom: '20px' 
      }}>Contact Us</h2>

      <p style={{ fontSize: '18px', color: '#444' }}>
        You can reach us through:
      </p>

      <ul style={{ 
        fontSize: '18px', 
        color: '#444', 
        listStyleType: 'none', 
        paddingLeft: '0', 
        marginBottom: '20px'
      }}>
        <li><strong>Email:</strong> treatpeoplewithkindnesshshq@gmail.com</li>
        <li><strong>Phone:</strong> 9076812827</li>
        <li><strong>Address:</strong> 123 Street-10, New Delhi</li>
      </ul>

      <p style={{ fontSize: '18px', color: '#444' }}>
        Or use our contact form:
      </p>

      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" style={{ 
          fontSize: '16px', 
          padding: '10px', 
          width: '100%', 
          marginBottom: '20px' 
        }} />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" style={{ 
          fontSize: '16px', 
          padding: '10px', 
          width: '100%', 
          marginBottom: '20px' 
        }} />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" style={{ 
          fontSize: '16px', 
          padding: '10px', 
          width: '100%' 
        }}></textarea>

        <button type="submit" style={{ 
          fontSize: '18px', 
          padding: '10px 20px', 
          backgroundColor: '#28a745', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px' 
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
