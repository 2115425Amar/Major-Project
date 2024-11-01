import React from 'react';
import Layout from '../components/Layout/Layout'; // Import your Layout component
import Lottie from 'lottie-react';
import ContactAnimation from '../assets/JSON/about.json';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-lg-6">
              <Lottie animationData={ContactAnimation} />
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4 text-primary" style={{ fontFamily: 'Arial, sans-serif' }}>Who Are We?</h2>
              <p className="lead fs-5 text-secondary mb-4">
                The platform features a user-friendly interface, allowing students to easily browse, list, and purchase second-hand items.
              </p>
              <p className="mb-5 text-muted" style={{ fontSize: '1.1rem' }}>
                We created a second-hand buy & sell online platform specifically for college students, helping them effectively utilize their resources while saving costs and time. This platform fosters trust and security among students, as it is exclusively available for college students, enabling buyers and sellers to connect and fulfill their needs.
              </p>
              <div className="row gy-4">
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Supporting a Circular Economy</h3>
                      <p className="text-secondary mb-0">Reduces waste, benefiting both the environment and student budgets.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="me-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="h5 mb-2">Saving Money for Students</h3>
                      <p className="text-secondary mb-0">Students can save money by providing a cost-effective alternative to buying new items.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/home">
                <button className="btn btn-success mt-4" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>Go To Home Page</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
