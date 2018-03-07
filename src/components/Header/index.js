import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  h1 {
    img {
      background: #fff;
      height: 80px;
      padding: 1rem;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

import logo from '../../images/logo--apple.jpg';

// console.log(logo);

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <img src={logo} alt="Apple Logo" />
        </Link>
      </h1>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.desc}</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
