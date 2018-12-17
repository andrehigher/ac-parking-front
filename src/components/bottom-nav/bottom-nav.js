import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = ({ user }) => (
    <div>
    { user &&
      <nav className="bottom-nav fixed-bottom row">
        <div className="col">
          <Link ref="homeLink" activeClassName="active" className="nav-item nav-link text-center" to={'/'} ><i className="nav-icons home-icon"></i>
            <div className="nav-text">Home</div>
          </Link>
        </div>
        { user.isAdmin &&
          <div className="col">
            <Link ref="usersLink" activeClassName="active"  className="nav-item nav-link text-center" to={'/users'} ><i className="nav-icons users-icon"></i>
              <div className="nav-text">Users</div>
            </Link>
          </div>
        }
        <div className="col">
          <Link ref="profileLink" activeClassName="active" className="nav-item nav-link text-center" to={'/profile/me'} ><i className="nav-icons profile-icon"></i>
            <div className="nav-text">Profile</div>
          </Link>
        </div>
      </nav>
    }
    </div>
);


export default BottomNav;
