import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* ABOUT */}
          <div>
            <h3 className="footer-title">
              About Mini Mingle
            </h3>

            <p className="footer-text">
              Your trusted partner in providing quality baby essentials.
              We offer everything you need for your little one's comfort
              and happiness.
            </p>

            <div className="socials">

              <a
                href="https://www.instagram.com/minimingle"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@minimingle"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                TikTok
              </a>

            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="footer-title">
              Categories
            </h3>

            <ul className="footer-list">
              <li>Baby Care</li>
              <li>Clothing</li>
              <li>Feeding</li>
              <li>Mother Care</li>
              <li>Nursery</li>
              <li>Playtime</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="footer-title">
              Customer Service
            </h3>

            <ul className="footer-list">
              <li>Contact Us</li>
              <li>Shipping Policy</li>
              <li>Returns</li>
              <li>FAQs</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-title">
              Contact Info
            </h3>

            <div className="contact-item">
              <MapPin className="icon" />
              <span>Nairobi, Kenya</span>
            </div>

            <div className="contact-item">
              <Phone className="icon" />
              <span>+254 705211143</span>
            </div>

            <div className="contact-item">
              <Mail className="icon" />
              <span>info@minimingle.co.ke</span>
            </div>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Your email"
              />

              <button>
                Subscribe
              </button>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Mini Mingle. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;