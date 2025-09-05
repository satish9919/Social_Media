import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">S_Brand</h5>
            <p className="text-muted">
              We deliver top-quality solutions to help your business grow.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Links</h5>
            <ul className="list-unstyled">
              {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="social-icon">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-muted mb-0">
          © {new Date().getFullYear()} Company, Inc. All rights reserved.
        </p>
      </div>

      {/* Extra Styling */}
      <style jsx>{`
        .footer-link {
          color: #bbb;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ffc107;
        }
        .social-icon {
          background: #444;
          color: white;
          padding: 8px;
          border-radius: 50%;
          font-size: 16px;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .social-icon:hover {
          background: #ffc107;
          color: black;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
