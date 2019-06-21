// Note that Froala Editor has to be required separately.

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  config = {
    // toolbarButtons:[]
   }
  render() {
    return <div>
      <FroalaEditor tag='textarea' config={this.config} />
    </div>
  }
}

// Render Froala Editor component.
ReactDOM.render(<App />, document.getElementById('root'));

