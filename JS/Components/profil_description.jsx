//import pour React
import React, {Component} from 'react';

import MyPicture from './mypicture.jsx';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export default class ProfilDescription extends Component {
  render() {

      return (
          <div>            
          
              
                <Card>
                    <CardTitle className="center-align" title="Maxime Goanvic" subtitle="Fourth year Engieneering student"/>
                    <CardText>
                        <div className="center-align">


                            <p>Hi ! I am Maxime, a french student int fourth year of a graduate school in engineering an IT science.</p>
                            <p>Motivated and hardworking, I would like to develop complementary skills thanks to an internship in IT domain.</p>
                        </div>
                    </CardText>
                    
                    <cardActions>
                        
         
                        <div className="row">
                            <div className="center-align">
                                <ul>
                                    <li> 
                                        <div className="col s4">
                                            <a className="grey-text text-lighten-3" href="https://fr.linkedin.com/in/maximegoanvic"><img src="../../images/linkedin.png" width="30px"/></a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="col s4">
                                            <a className="grey-text text-lighten-3" href="https://viadeo.com/fr/profile/maxime.goanvic"><img src="../../images/viadeo.png" width="30px"/> </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="col s4">
                                            <a className="grey-text text-lighten-3" href="https://twitter.com/maximegoanvic"><img src="../../images/twitter.png" width="30px"/></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
          
                    </cardActions>
                </Card>
          
          </div>
        );

  }
}








