import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setCompaniesOpen(false);
  }, [location.pathname]);

  return (
    <header className="header-area header-transparent">
      <div className="main-header">
        <div
          className={`header-bottom header-sticky ${scrolled ? "is-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    {/* ضع لوجو الشركة هنا */}
                    <img
                      src="/assets/img/logo/logo.png"
                      alt="Royal Horizon"
                      width="150px"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                  <div className="main-menu d-none d-lg-block">
                    <nav
                      className={`nav ${scrolled ? "rh-navbar--scrolled" : ""}`}
                    >
                      <ul id="navigation">
                        <li>
                          <NavLink to="/" end>
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/about">About</NavLink>
                        </li>

          
                       
                        <li class="ul-submenu">
                          {/* <a href="/companies">Companies</a> */}
                          <NavLink to="/companies">
                          Companies
                          </NavLink>

                          <ul class="submenu">
                            <li>
                              <NavLink to="/companies">
                                Royal Horizon Holding 
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/companies/horizon">
                                Royal Horizon General Trading
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/companies/overseas">
                                Overseas Foodstuff Trading
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/companies/fazaa">
                                Fazaa Stores
                              </NavLink>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                        <li>
                          <NavLink to="/career">Career</NavLink>
                        </li>
                        
                      </ul>
                    </nav>
                  </div>

                  <div className="header-right-btn d-none d-lg-block ms-4">
                    <Link to="/contact" className="btn header-btn">
                      Contact Now
                    </Link>
                  </div>
                  <div className="Login">
                     <ul>
                      <li>
                        <NavLink to="/EmployeeLogin">
                        <FaUser className="login-icon" />
                        Login</NavLink>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="rh-mobile-toggle d-lg-none"
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>
            {mobileOpen && (
              <div className="rh-mobile-menu d-lg-none">
                <NavLink to="/" end>
                  Home
                </NavLink>
                <NavLink to="/about">About</NavLink>

                <button
                  type="button"
                  className="rh-mobile-companies"
                  onClick={() => setCompaniesOpen((v) => !v)}
                >
                  Companies {companiesOpen ? "▲" : "▼"}
                </button>

                {companiesOpen && (
                  <div className="rh-mobile-sub">
                    <NavLink to="/companies">
                      Royal Horizon
                    </NavLink>
                    <NavLink to="/companies/horizon">
                      Royal Horizon General Trading
                    </NavLink>
                    <NavLink to="/companies/overseas">
                      Overseas Foodstuff Trading
                    </NavLink>
                    <NavLink to="/companies/fazaa">Fazaa Stores</NavLink>
                  </div>
                )}

                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/Login">Employee Login</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
