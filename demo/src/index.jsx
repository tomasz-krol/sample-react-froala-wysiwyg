// Note that Froala Editor has to be required separately.

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'file-loader?name=[name].[ext]!./index.html';

import FroalaEditor from 'react-froala-wysiwyg';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  config = { pluginsEnabled: ['align', 'link'], language: 'ro' }
  render() {
    return <div>
      <FroalaEditor tag='textarea' config={this.config} />
    </div>
  }
}

// Render Froala Editor component.
ReactDOM.render(<App />, document.getElementById('root'));

