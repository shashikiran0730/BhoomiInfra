export default function CalloutBar() {
  return (
    <section className="section-callout">
      <div className="callout-bar">
        <div className="callout-item call-phone">
          <span className="call-icon">📞</span>
          <div>
            <small>Call Us Today</small>
            <strong>9848396526</strong>
          </div>
        </div>
        <div className="callout-item">
          <span className="call-icon">🛡️</span>
          <p>Quality Assurance</p>
        </div>
        <div className="callout-item">
          <span className="call-icon">⏱️</span>
          <p>On-Time Delivery</p>
        </div>
        <div className="callout-item">
          <span className="call-icon">🤝</span>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
