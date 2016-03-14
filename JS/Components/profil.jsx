//import pour React
import React, {Component} from 'react';

import MyPicture from './mypicture.jsx';
import ProfilDescription from './profil_description.jsx';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export default class MyProfil extends Component {
  render() {

      return (
          <div style={{marginTop:'20'}}>            
          
            <Card className="blue darken-4">
          
                <div className="container">
                    <div className="center-align">
            
                        <div id="Profil">
                            <div style={{marginTop:'15', marginLeft:'-500', marginBottom:'10'}}>
                                <MyPicture/>
                            </div>
                        </div>
            
                    </div>
                </div>
          
            </Card>
          
          </div>
        );

  }
}








