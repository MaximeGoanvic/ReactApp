//React
import React, {Component} from 'react';

//materialize
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import styles from 'material-ui/lib/styles';
import FontIcon from 'material-ui/lib/font-icon';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const style= {
    width:"100px"
}

export default class MyAvatar extends Component {
  render() {

      return (
          <div> 
               
                <Avatar size={100} style={{backgroundColor:'#0d47a1'}}>MG</Avatar>
          </div>
        );

  }
}

