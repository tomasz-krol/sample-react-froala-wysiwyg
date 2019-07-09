// Note that Froala Editor has to be required separately.

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import FroalaEditor from 'react-froala-wysiwyg';

// import 'react-froala-wysiwyg/node_modules/froala-editor/js/plugins.pkgd.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  config = {
    attribution: false,
    placeholderText: 'Write Your Content Here*',
    charCounterCount: false,
    toolbarButtons:
    {
      'moreText': {
        'buttons': ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass']
      },
      'moreParagraph': {
        'buttons': ['insertLink', 'insertTable', 'formatOL', 'formatULSimple', 'formatUL', 'alignLeft', 'alignCenter', 'alignRight', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
    }
  }
  handleModelChange(htmlCode, type) {
    console.log(htmlCode, type)
  }
  render() {
    return <div>
      <FroalaEditor
        tag='textarea'
        config={this.config}
        model={this.state.html || ""}
        onModelChange={(htmlCode) => {
          this.handleModelChange(htmlCode, "emailBody");
        }}
      />
    </div>
  }
}

export default App;

// Render Froala Editor component.
// ReactDOM.render(<App />, document.getElementById('root'));
