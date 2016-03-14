import React, {Component} from 'react';
import {render} from 'react-dom';
import MyApp from './JS/Components/myapp.jsx';
import MyAvatar from './JS/Components/my_avatar.jsx';
import MyProfil from './JS/Components/profil.jsx';


// material
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


render(<div className="row"><MyApp/></div>, document.getElementById('myapp'));
