import React from 'react';
import '../App.css';

export default function OrganizingCommittee() {
  return (
    <div className="committee-page">
      {/* HERO */}
      <div className="committee-hero">
        <h1>Organizing Committee</h1>
        <h2>ICACIT 2025</h2>
        <div className="underline"></div>
      </div>

      {/* PATRONS */}
      <Section title="PATRONS">
        <StaffCard 
          img="cH.png" 
          name="Dr. Gunathilake Tantirigama" 
          title="Chairman, NIBM" 
        />
        <StaffCard 
          img="DG.png" 
          name="Dr. DMA Kulasooriya" 
          title="Director General, NIBM" 
        />
      </Section>

      {/* ADVISORY BOARD */}
      <Section title="ADVISORY BOARD">
        <StaffCard 
          img="GC.jpg" 
          name="Ms. Gangani Wickramasinghe" 
          title="Director, SOCE, NIBM" 
        />
        <StaffCard 
          img="TW.jpg" 
          name="Dr. Thisara Weerasinghe" 
          title="Head,Computer Science, SOCE, NIBM" 
        />
        <StaffCard 
          img="RA.png" 
          name="Dr. Rushan Abeygunawardana" 
          title="Senior Lecturer,University of Colombo" 
        />
      </Section>

      {/* CO-CHAIRS */}
      <Section title="CONFERENCE CO-CHAIRS">
        <StaffCard 
          img="AD.png" 
          name="Ms. Amila De Silva" 
         title="Consultant/ Lecturer"
        />
        <StaffCard 
          img="CR.png" 
          name="Miss. Chandula Rajapaksha" 
          title="Consultant/ Lecturer"
        />
      </Section>

      {/* CO-EDITORS */}
      <Section title="CONFERENCE CO-EDITORS">
        <StaffCard 
          img="BH.jpg" 
          name="Ms. Bhagya Hapuarachchi" 
          title="Consultant/ Lecturer"
        />
        <StaffCard 
          img="SJ.jpg" 
          name="Miss. Chalana Hansi Jayaweera" 
          title="Consultant/ Lecturer"
        />
      </Section>

      {/* ORGANIZING COMMITTEE MEMBERS */}
      <Section title="ORGANIZING COMMITTEE MEMBERS">
        <StaffCard img="MI.jpg" name="Mr. Ilham Rasif" title="Consultant/ Lecturer" />
        <StaffCard img="KW.jpg" name="Miss. Kavishna Wijesinghe" title="Consultant/ Lecturer"/>
        <StaffCard img="PM.png" name="Ms. Pavithra Maheshwara" title="Consultant/ Lecturer"/>
        <StaffCard img=".png" name="Ms. Amaya Lokuliyana" title="Consultant/ Lecturer"/>
        <StaffCard img="KG.png" name="Mr. Kithnuka Gunawardene" title="Demonstrator"/>
        <StaffCard img="/photos/supun.jpg" name="Mr. Supun Liyanage" title="Marketing Officer/ Graphic Designer"/>
        
        <StaffCard img="/photos/chamudi.jpg" name="Ms. Chamudi Jayasinghe" title=" Sectretary of Director" />
        <StaffCard img="/photos/binali.jpg" name="Ms. Binali Dissanayake" title="Course Secretary" />
        <StaffCard img="/photos/iresha.jpg" name="Ms. Iresha Gamage" title="Course Secretary"/>
        <StaffCard img="/photos/sadunika.jpg" name="Ms. Sadunika Kapuliyadda" title="Course Secretary"/>
        <StaffCard img="/photos/pamod.jpg" name="Mr. Pamod Madushan" title="Course Secretary"/>
        <StaffCard img="/photos/chathuranga.jpg" name="Mr. Chathuranga Rajapaksha" />
        <StaffCard img="/photos/rusith.jpg" name="Mr. Rusith Tharuka" />
      </Section>
    </div>
  );
}

// REUSABLE SECTION
function Section({ title, children }) {
  return (
    <div className="committee-section">
      <h3 className="section-title">{title}</h3>
      <div className="staff-grid">
        {children}
      </div>
    </div>
  );
}


// REUSABLE CARD — SHOWS TITLE DIRECTLY
function StaffCard({ img, name, title }) {
  return (
    <div className="staff-card glass-effect">
      <div className="staff-photo">
        <img src={img} alt={name} />
      </div>
      <div className="staff-info">
        <h3>{name}</h3>
        {title && <p className="title">{title}</p>} {/* ← ONLY TITLE TEXT */}
      </div>
      {/* <button className="view-profile-btn">View Profile</button> */}
    </div>
  );
}