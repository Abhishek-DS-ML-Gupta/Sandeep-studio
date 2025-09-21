import React from 'react';

function About() {
  const rating = 4.9;

  return (
    <div
      className="about-container"
      style={{
        minHeight: 'calc(100vh - 80px)', // adjust if your navbar height is different
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // content starts slightly top
        alignItems: 'center',
        paddingTop: '6rem', // gives space from navbar
        paddingBottom: '2rem',
        textAlign: 'center',
      }}
    >
      <img
        src="https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.jpg?s=612x612&w=0&k=20&c=lZoxAGwQd_IL1p50R6FCXwbKtofoSuknmAKJod6OkzQ="
        alt="Sandeep Gandhi Nehal"
        className="profile-photo"
        style={{
          borderRadius: '50%',
          width: '180px',
          height: '180px',
          objectFit: 'cover',
          marginBottom: '1.5rem',
        }}
      />
      <h1 style={{ marginBottom: '0.5rem' }}>Sandeep Gandhi Nehal</h1>
      <p
        className="bio"
        style={{
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6',
          color: '#ddd',
        }}
      >
        Sandeep Gandhi Nehal is the creative force behind Sandeep Studio & Mixing Lab. He is renowned for his cinematic approach to capturing moments. In addition to his work as a photographer and videographer, he is also a celebrated poet, known for his contributions to Urdu and Hindi literature.
      </p>
      <div className="social-links" style={{ marginBottom: '3rem' }}>
        <a
          href="https://www.instagram.com/sandeepgandhinehal/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: '#fff' }}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/sandeepgandhi.sandeepgandhi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: '#fff' }}
        >
          Facebook
        </a>
        <a
          href="https://www.rekhta.org/poets/sandeep-gandhi-nehal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 1rem', color: '#fff' }}
        >
          Rekhta Profile
        </a>
      </div>

      {/* Reputation Card */}
      <div
        className="reputation-card"
        style={{
          margin: '0 auto',
          padding: '2rem',
          maxWidth: '650px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          color: '#fff',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}> Reputation</h2>
        <div style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} style={{ color: i < Math.round(rating) ? '#FFD700' : '#555' }}>
              ★
            </span>
          ))}
          <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>{rating}/5</span>
        </div>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: '#ddd' }}>
          Sandeep Studio & Mixing Lab has received positive feedback from clients, with a <strong>4.9/5 rating</strong> based on 11 reviews on Justdial. Clients have praised the studio for its professionalism, quality of work, and timely delivery of services.
        </p>
        <a
          href="https://www.justdial.com/Azamgarh/Sandeep-Studio-Mixing-Lab-Near-Hariaudh-Nagar-Colony-Heerapatti-Azamgarh-Azamgarh-City/9999P5252-5252-211111154517-B1T7_BZDET"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6c200')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
        >
          View on Justdial
        </a>
      </div>
    </div>
  );
}

export default About;
