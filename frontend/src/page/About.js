import React from 'react';

const About = () => {
  const headingStyle = {
    fontSize: '26px', 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Times New Roman, serif',
  };

  const contentStyle = {
    fontSize: '18px', // Increased font size for content
    color: '#444',
    fontFamily: 'Times New Roman, serif',
  };

  return (
    <div style={{
      backgroundColor: '#e6ffe6',
      padding: '30px',
      lineHeight: '1.6',
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
      textAlign: 'justify',
    }}>
      <h2 style={headingStyle}>About Us</h2> 

      <p style={{ 
        ...contentStyle, 
        marginBottom: '40px', 
      }}>
        Welcome to Grocify! We're more than just a grocery store; we're a community hub dedicated to providing you with the freshest and highest-quality products to meet all your shopping needs.
      </p>
      
      <h3 style={{ 
        ...headingStyle,
        fontSize: '24px', 
      }}>Our Story</h3> 

      <p style={contentStyle}>
        Founded in 2024, Grocify began as a small family-owned business with a simple mission: to offer fresh, local, and organic products at affordable prices. Over the time, we'll grow into a trusted destination for families, individuals, and businesses alike, while still maintaining our commitment to community values and personal service.
      </p>

      <p style={{ 
        ...contentStyle, 
        marginBottom: '20px' 
      }}>
        We offer a wide range of products to meet your grocery needs, including:
      </p>

      <ul style={{ 
        paddingLeft: '20px', 
        listStyleType: 'disc', 
        ...contentStyle, 
      }}>
        <li>Fresh fruits and vegetables</li>
        <li>Organic and non-GMO products</li>
        <li>Meat and dairy from ethically sourced farms</li>
        <li>Baked goods and pastries made in-house</li>
        <li>A variety of household essentials</li>
      </ul>

      <p style={contentStyle}>
        We also offer convenient services such as online ordering, curbside pickup, and home delivery, so you can shop in a way that suits your lifestyle.
      </p>
    </div>
  );
};

export default About;
