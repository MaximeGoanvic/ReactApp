//import pour React
import React, {Component} from 'react';

import Education from './education.jsx';
import ProfilDescription from './profil_description.jsx';
import Experience from './experience.jsx'

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export default class Parcours extends Component {
  render() {

      return (
            <div>            
                <div className="container">        
                      
                    <Card className="grey lighten-5">
                              
                        <CardText>                        
                            <ProfilDescription/>              
                        </CardText>
          
                        <CardText>            
                            <div id="Experience">
                                <h3 className="center-align blue-text darken-4">Working experience</h3>
                                <Experience/>
                            </div>
                            
                            <br/>
                        
                            <div id="Education">
                                <h3 className="center-align blue-text darken-4">Education</h3>
                                <Education/>
                            </div>
                    
                        </CardText>
                    </Card>
                </div>
          </div>
        );
  }
}








