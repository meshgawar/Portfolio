import "./Footer.css";

export default function Footer() {
    return (
        <section className="footer section" id="footer">
            <div style={{ display: "flex", gap: "1.5rem", fontSize: "2rem" }}>
      {/* Font Awesome Icons */}
      <i className="fa fa-code"></i>
      <i className="fa fa-user"></i>
      <i className="fa fa-laptop-code"></i>
      <i className="fa fa-rocket"></i>

      {/* Boxicons Icons */}
      <i className="bx bx-code"></i>
      <i className="bx bxs-user"></i>
      <i className="bx bxs-rocket"></i>
    </div>
        </section>
    );
}