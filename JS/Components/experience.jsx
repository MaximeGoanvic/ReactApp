//import pour React
import React, {Component} from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';




export default class Experience extends Component {
  render() {

      return (
          <div>            
                <Card>
                    <CardTitle title="CAPISEN Junior-Enterprise" subtitle="President (formerly vice-president) - 2014 to date"/>
                    <CardText>            
                        <blockquote style={{borderLeft:'5px solid blue'}}>
                            <p><b>CAPISEN is a non-profit civil social organization</b>, run and managed exclusively by undergraduate students of ISEN. CAPISEN provides <b>IT services</b> for companies, institutions and society. Similar to real companies, this experience helps to develop <b>entrepreneurial skills and provides management skills</b>. Website: www.capisen.fr</p>
                        </blockquote>
                        <a href="http://capisen.fr/" title="ISEN Brest-Rennes" target="_blank" class="blue lighten-2 waves-effect waves-light btn-large">Find more information</a>
                    </CardText>
                </Card>
          
                <br/>
            
                <Card>
          
                    <CardTitle title="Bodet Software - Cholet, France" subtitle="Test technician - 2014-2016"/>
                    <CardText>            
                        <blockquote style={{borderLeft:'5px solid blue'}}>
                            <p><b>Sandwich courses</b>, as part of my school curriculum. I worked as a <b>test technician</b> for a software editor. I had to prepare and run <b>functional tests</b>, writing and running <b>test plans</b>, then <b>validate the correction</b> according to the code requirement documentation. I worked on <b>WebService tests</b> using software SoapUI. I also worked on <b>automated tests</b>, writing test scripts with software TestPlant.
                            </p>
                        </blockquote>
                        <a href="http://www.bodet-software.com/" title="ISEN Brest-Rennes" target="_blank" class="blue lighten-2 waves-effect waves-light btn-large">Find more information</a>
                    </CardText>
                </Card>
          
                <br/>
                
                <Card>
          
                    <CardTitle title="Airbus S.A.S. - Saint-Nazaire 44, France " subtitle="Internship - June-August 2014"/>
                    <CardText>            
                        <blockquote style={{borderLeft:'5px solid blue'}}>
                            <p>Technical student internship. Reorganization of <b>informatics resources</b>. </p>
                        </blockquote>
                    </CardText>
                </Card>
          
                <br/>
                
                <Card>
          
                    <CardTitle title="Summer Job"/>
                    <CardText>            
                
                        <ul>
                            <li>
                                <blockquote style={{borderLeft:'5px solid blue'}}>
                                    <p>SCA Ouest - Saint Etienne de Montluc 44360, France - Summers 2012 and 2013. Summer job as an <b>order packer</b>. I had to prepare orders for delivery. </p>
                                </blockquote>
                            </li>
                        </ul>
       
                    </CardText>
                </Card>
          </div>
        );
  }
}







