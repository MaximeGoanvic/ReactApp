//import pour React
import React, {Component} from 'react';


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';




export default class Education extends Component {
  render() {

      return (
          <div>                     
                <Card>
                    <CardTitle title="Engineering cycle with specialization in management" subtitle="ISEN Brest - 2015-to date"/>
                    <CardText>            
                        <p>Graduate School of Electronic Engineering and IT.</p>
                        <a href="http://www.isen.fr/brest-rennes/accueil/" title="ISEN Brest-Rennes" target="_blank" class="blue lighten-2 waves-effect waves-light btn-large">Find more information</a>
                    </CardText>
                </Card>
          
                <br/>
            
                <Card>
          
                    <CardTitle title="Preparatory class" subtitle="ISEN Brest - Rennes - 2012-2015"/>
                    <CardText>            
                
                       <p>A two years intensive program with specialization in Computer Sciences and Networking.</p>
                       <a href="http://www.isen.fr/brest-rennes/accueil/" title="ISEN Brest-Rennes" target="_blank" class="blue lighten-2 waves-effect waves-light btn-large">Find more information</a>
       
                    </CardText>
                </Card>
          
                <br/>      
          
                <Card>
          
                    <CardTitle title="French Baccalauréat " subtitle="2011-2010"/>
                    <CardText>            
                
                        <p>Equivalent of A level, specialization in Mathematics and Industrial Science</p>
                       
                    </CardText>
                </Card>
          </div>
        );
  }
}







