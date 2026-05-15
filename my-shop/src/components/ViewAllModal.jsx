import { X } from "lucide-react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

export function ViewAllModal({ isOpen, onClose, title, products }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-wrapper">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-scroll-container">
        <div className="modal-box">

          {/* HEADER */}
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={24} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="modal-content">
            <div className="modal-product-grid">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            <button onClick={onClose} className="modal-close-footer-btn">
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewAllModal;