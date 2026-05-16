<<<<<<< HEAD
// ========================= IMPORTS =========================
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";

import travelImg from "../assets/travel.avif";

import "../styles/home.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toursData from "../data/toursData";

// ========================= HOME =========================
export default function Home() {
  const [activeMood, setActiveMood] = useState("");
=======
import Navbar from "../components/Navbar";
import travelImg from "../assets/travel.avif";
import "../styles/home.css";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SearchSection from "../components/SearchSection";
import toursData from "../data/toursData";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeMood, setActiveMood] = useState("");

>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
  const navigate = useNavigate();

  const moods = [
    "Beach",
    "Mountain",
    "City Break",
    "Heritage",
    "Wild life",
    "Road Trip",
  ];

  return (
    <div className="fl-home-app">
      <Navbar />

<<<<<<< HEAD
      {/* ================= EXISTING HERO ================= */}
=======
      {/* HERO */}
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
      <section className="fl-home-hero">
        <div className="fl-home-hero-text">
          <p className="fl-home-hero-tag">Curated Travel Experiences</p>

          <h1>
            Discover the world <br />
            <span>your way</span>
          </h1>

          <p className="fl-home-hero-subtext">
            Handpicked destinations, seamless booking, and unforgettable
            journeys.
          </p>

          <div className="fl-home-hero-actions">
            <Link to="/tour" className="btn primary home-btn">
              Explore Trips
            </Link>
<<<<<<< HEAD

=======
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
            <Link to="/contact" className="btn secondary home-btn">
              Customized Package
            </Link>
          </div>
        </div>

        <div className="fl-home-hero-image-style">
          <img src={travelImg} alt="travel" />
        </div>
      </section>

      {/* SEARCH */}
      <SearchSection />

      {/* POPULAR */}
      <section className="fl-home-section">
        <h2>Popular Now</h2>

        <div className="fl-home-grid">
          {toursData.map((tour) => (
            <Link
              key={tour.id}
              to={`/tour/${tour.id}`}
              className="fl-home-card"
<<<<<<< HEAD
              style={{
                color: "black",
                textDecoration: "none",
              }}
=======
              style={{ color: "black", textDecoration: "none" }}
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
            >
              {tour.location}
            </Link>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* DESTINATIONS */}
      <section className="fl-home-section">
        <h2>Top Destinations</h2>

        <div className="fl-home-grid">
          {toursData.slice(0, 6).map((tour) => (
            <div
              key={tour.id}
              className="fl-home-dest"
              onClick={() => navigate(`/tour/${tour.id}`)}
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <img
                src={tour.img}
                alt={tour.location}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              <h4 style={{ marginTop: "10px" }}>{tour.location}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="fl-home-section fl-home-grid">
        <div className="fl-home-feature">
          💎
          <h3>Curated Quality</h3>
=======

   <section className="fl-home-section">
  <h2>Top Destinations</h2>

  <div className="fl-home-grid">
    {toursData.slice(0, 6).map((tour) => (
      <div
        key={tour.id}
        className="fl-home-dest"
        onClick={() => navigate(`/tour/${tour.id}`)}
        style={{
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <img
          src={tour.img}
          alt={tour.location}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
        <h4 style={{ marginTop: "10px" }}>
          {tour.location}
        </h4>
      </div>
    ))}
  </div>
</section>
      
      {/* FEATURES */}
      <section className="fl-home-section fl-home-grid">
        <div className="fl-home-feature">
          💎 <h3>Curated Quality</h3>
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
          <p>Only trips we’d take ourselves.</p>
        </div>

        <div className="fl-home-feature">
<<<<<<< HEAD
          🧭
          <h3>Easy Planning</h3>
=======
          🧭 <h3>Easy Planning</h3>
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
          <p>Simple itineraries & bookings.</p>
        </div>

        <div className="fl-home-feature">
<<<<<<< HEAD
          💰
          <h3>Honest Pricing</h3>
=======
          💰 <h3>Honest Pricing</h3>
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
          <p>No hidden charges.</p>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* DESTINATIONS */}
      {/* <section className="fl-home-section">
  <h2>Top Destinations</h2>

  <div className="fl-home-grid">
    {toursData.map((tour) => (
      <div
        key={tour.id}
        className="fl-home-dest"
        onClick={() => navigate(`/destination/${tour.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={tour.image} alt={tour.name} />
        <h4>{tour.name}</h4>
      </div>
    ))}
  </div>
</section> */}

>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
      {/* GALLERY */}
      <section className="fl-home-section">
        <h2>Gallery</h2>

        <div className="fl-home-gallery">
          <img src="https://images.unsplash.com/photo-1528127269322-539801943592" />
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
          <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080" />
        </div>
      </section>

      {/* CTA */}
      <section className="fl-home-cta">
        <h2>Start your journey today</h2>
<<<<<<< HEAD

        <button onClick={() => navigate("/gallery")}>Get Started</button>
      </section>

      {/* MOODS */}
=======
        <button onClick={() => navigate("/gallery")}>
  Get Started
</button>
      </section>

>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
      <section
        style={{
          padding: "60px 80px",
          textAlign: "center",
        }}
      >
<<<<<<< HEAD
        <h2
          style={{
            fontSize: "23px",
            marginBottom: "25px",
          }}
        >
          Pick a Mood
        </h2>
=======
        <h2 style={{ fontSize: "23px", marginBottom: "25px" }}>Pick a Mood</h2>
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {moods.map((item) => {
            const isActive = activeMood === item;

            return (
              <button
                key={item}
                onClick={() => setActiveMood(item)}
                style={{
                  padding: "12px 22px",
                  borderRadius: "25px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "0.3s",
                  background: isActive ? "#ff6b6b" : "#fff",
                  color: isActive ? "#fff" : "#000",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
<<<<<<< HEAD
      </section>

=======

        {/* Selected Mood Display (optional) */}
        {activeMood && (
          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            Selected Mood: <b>{activeMood}</b>
          </p>
        )}
      </section>

      <section
        style={{
          padding: "80px 20px",
          // background: "#f7f9fc",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              marginBottom: "40px",
              fontWeight: "700",
              // color: "#222"
            }}
          >
            What Our Travelers Say
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "25px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "18px",
                  color: "#444",
                  lineHeight: "1.6",
                }}
              >
                “Flawless planning and great hotels. We just showed up and
                enjoyed!”
              </p>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                — Aditi
              </h4>
              <span style={{ color: "#777", fontSize: "13px" }}>
                Goa Escape
              </span>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "18px",
                  color: "#444",
                  lineHeight: "1.6",
                }}
              >
                “Clear itinerary, no hidden costs. Will book again.”
              </p>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                — Rahul
              </h4>
              <span style={{ color: "#777", fontSize: "13px" }}>
                Himachal Loop
              </span>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "18px",
                  color: "#444",
                  lineHeight: "1.6",
                }}
              >
                “Customer support was super responsive throughout our trip.”
              </p>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                — Sarah
              </h4>
              <span style={{ color: "#777", fontSize: "13px" }}>
                Rajasthan Trail
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: "700",
              marginBottom: "15px",
              lineHeight: "1.3",
            }}
          >
            Ready to make it real?
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.5vw, 18px)",
              color: "#cbd5e1",
              marginBottom: "35px",
            }}
          >
            Tell us where, we’ll sort the rest.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {/* Primary Button */}
            <button
              style={{
                padding: "12px 25px",
                background: "transparent",
                border: "1px solid #38bdf8",
                borderRadius: "10px",
                color: "#38bdf8",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "15px",
                transition: "0.3s",
              }}
              onClick={() => navigate("/tour")}
              onMouseOver={(e) => {
                e.target.style.background = "#38bdf8";
                e.target.style.color = "#0f172a";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#38bdf8";
              }}
            >
              Explore Tours
            </button>

            {/* Secondary Button */}

            <button
              style={{
                padding: "12px 25px",
                background: "transparent",
                border: "1px solid #38bdf8",
                borderRadius: "10px",
                color: "#38bdf8",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "15px",
                transition: "0.3s",
              }}
              onClick={() => navigate("/contact")}
              onMouseOver={(e) => {
                e.target.style.background = "#38bdf8";
                e.target.style.color = "#0f172a";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#38bdf8";
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
>>>>>>> 4e543208f3d0fcdb4b3727441effd09857affbf3
      <Footer />
    </div>
  );
}
