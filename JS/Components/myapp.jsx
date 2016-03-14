//import pour React
import React, {Component} from 'react';
import Avatar from 'material-ui/lib/avatar';
import MyAvatar from './my_avatar.jsx';
import MyProfil from './profil.jsx';
import Parcours from './parcours.jsx';
import Footer from './footer.jsx';
import Menu from './menu.jsx';


const style= {
    width:"240px"
}

export default class MyApp extends Component {
  render() {
      return (
            <div>
                <div id="Home">

                    <div class="row">

                        <div class="col s3">
                            
                            <Menu/>
                        </div>

                        <div class="col s9">
                            <div style={{paddingLeft:'210'}}>
                                <MyProfil/>
                                <div style={{marginTop:'-120'}}>
                                    <Parcours/>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}


