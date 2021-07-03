import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar({ currentUser }) {
    return (
        <NavbarContainer>
            <NavContentWrapper>
                <h1>Christian's Journal</h1>
                <ul>
                    {!currentUser ? <li><Link className="link" to="">Sign Up</Link></li> : <li><span className="text-info">Signed in as:</span><Link className="link" to="">{currentUser?.user?.name}</Link></li>}
                    <li><Link className="link" to="">About</Link></li>
                </ul>
            </NavContentWrapper>
        </NavbarContainer>
    );
}

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  position: fixed;
  top: 0;
`;

const NavContentWrapper = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
  }
  .link {
    margin: 0 7px;
    text-decoration: none;
    color: #000;
  }
  .text-info {}
`;
