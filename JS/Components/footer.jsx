//import pour React
import React, {Component} from 'react';


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';




export default class Footer extends Component {
  render() {

      return (
          <div>            
         
             <footer className="page-footer blue darken-4">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Maxime Goanvic</h5>
                    <p className="grey-text text-lighten-4">Code sample using React.js and Material-UI.</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <div id="Contact">
                        <div>   
                            <h5 className="white-text">Contact</h5>
                                <div className="row">
                                <ul>
                                    <li> 
                                        <div className="col s3">
                                            <a className="grey-text text-lighten-3" href="https://fr.linkedin.com/in/maximegoanvic"><img src="../../images/linkedin.png" width="60px"/></a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="col s3">
                                            <a className="grey-text text-lighten-3" href="https://viadeo.com/fr/profile/maxime.goanvic"><img src="../../images/viadeo.png" width="60px"/> </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="col s3">
                                            <a className="grey-text text-lighten-3" href="https://twitter.com/maximegoanvic"><img src="../../images/twitter.png" width="60px"/></a>
                                        </div>
                                    </li>
                                </ul>
                             </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2016 
                </div>
              </div>
            </footer>      
          
          
          </div>
        );

  }
}







