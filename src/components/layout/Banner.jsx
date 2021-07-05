import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthService } from '../../services/authService';
import {Link, useHistory} from 'react-router-dom';
import Modal from "./Modal";

const Banner = () => {
    const [show, setShow] = useState(false);
    const currentUser = AuthService.getCurrentUser();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const history = useHistory();
    const handleSignout = () => {
        AuthService.onSignout()
        history.push('/');
    }
    return (
        <BannerContainer>
            <BannerContentWrapper>
                 <div className="header-info">
                     <h3>Welcome back{' '}{currentUser?.user?.name}</h3>
                     <div className="img-section">
                         <img src={currentUser?.user?.pic} className="profile-img" alt="" width="600" height="400" />
                     </div>
                 </div>
                <MiniNav>
                    <ul>
                        <li><Link className="sm-nav-link" to="">Profile</Link></li>
                        <li><Link className="sm-nav-link" to="#" onClick={handleShow}>Add Request</Link></li>
                        <Modal title="Add Prayer Request" show={show} handleShow={handleShow} handleClose={handleClose} />
                        <li><Link className="sm-nav-link" to="" onClick={handleSignout}>Sign Out</Link></li>
                    </ul>
                </MiniNav>
            </BannerContentWrapper>
        </BannerContainer>
    );
}

export default Banner;

const BannerContainer = styled.main`
  width: 100%;
  height: 250px;
  background-color: ${props => props.theme.MainTheme};
`;

const BannerContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .header-info {
    display: flex;
    justify-content: space-between;
  }
  .img-section {
    width: 100px;
    height: 100px;
  }
  .profile-img {
    width: 100%;
    height: auto;
  }
`;

const MiniNav = styled.nav`
  height: 60px;
  padding: 4px;
  background-color: ${props => props.theme.white};
  margin: 20px 0;
  border-radius: 4px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .sm-nav-link {
    margin: 10px;
    text-decoration: none;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    padding: 5px;
    border-radius: 4px;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: rgba(var(--ca6, 219, 219, 219), 1);
    }
  }
`;
