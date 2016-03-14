//import pour React
import React, {Component} from 'react';
import MyAvatar from './my_avatar.jsx';


export default class Menu extends Component {
  render() {
      return (
          <div>
            <div className="col s9"><ul className="side-nav fixed">
                <li className="center-align"><div style={{marginTop:'10', marginBottom:'10'}}><MyAvatar/></div></li>
                <li className="bold"><a href="#Profil" className="waves-effect waves-teal"><i className="material-icons">account_circle</i> Profil</a></li>
                <li className="bold"><a href="#Experience" className="waves-effect waves-teal"> <i className="material-icons">work</i> Experience</a></li>
                <li className="bold"><a href="#Education" className="waves-effect waves-teal"> <i className="material-icons">account_balance</i> Education</a></li>
                <li className="bold"><a href="#Contact" className="waves-effect waves-teal"> <i className="material-icons">perm_phone_msg</i> Contact</a></li>
                <li className="bold"><a target="_blank" href="CV.pdf" className="waves-effect waves-teal"> <i className="material-icons">description</i> My Resume</a></li>
            </ul></div>
          </div>
        );
  }
}