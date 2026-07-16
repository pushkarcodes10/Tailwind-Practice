import React from "react";

export const Hero = () => {
  return (
    <div className="hero-root">
      <div className="badge">
        <span>
          <a className="link-badge" href="#">
            Real-time data API for founders and agents
          </a>
        </span>

        <svg width="16" height="16" fill="none">
          <path
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <h1 className="hero-title">Magically simplify accounting and taxes</h1>
        <p className="hero-subtile">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 11:11{" "}
        </p>
      </div>

      <div className="hero-btn">
        <button className="btn">Get Started</button>
        <button className="pricing-btn">
          <span>Pricing</span>{" "}
          <svg width="16" height="16" fill="none">
            <path
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
        <p className="description">For-US-based startups</p>
    </div>
  );
};