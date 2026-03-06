import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-area footer-padding">
        <div className="footer-wrapper">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-logo mb-25">
                    <a href="/"><img src="/assets/img/logo/logo.png" alt="Royal Horizon" /></a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <h2 className="Footer-logo2">الأفـقُ الـمَـلَـكـيّ</h2>
                      <p>Quality consumer goods from trustworthy hands.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/companies/horizon">Companies</a></li>
                      <li><a href="/gallery">Gallery</a></li>
                      <li><a href="/career">Career</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contacts</h4>
                    <ul>
                      <li><a href="tel:+971000000000">+971 3 7610106</a></li>
                      <li><a href="mailto:info@royal-horizon.com" className="email">info@royalhorizon.group</a></li>
                      <li><span>P.O. Box 65221- Sheikh Khalifa Bin Zayed Street, Al Ain - UAE</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom-area">
              <div className="container">
                <div className="footer-border">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-12">
                      <div className="footer-copy-right text-center">
                        <p>© {new Date().getFullYear()} Royal Horizon Holding. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
