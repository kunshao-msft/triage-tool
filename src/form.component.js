import React, { Component } from 'react';
import { TextInput } from 'react-desktop/windows';
import {Typeahead} from 'react-bootstrap-typeahead';
import { Button } from 'react-desktop/windows';

import  './form.component.css';

export class FormComponent extends Component {
  static defaultProps = {
    color: 'dodgerblue',
    theme: 'light'
  };

  state = {
      jobs: []
  }

  handleChange = e => console.log(e.target.value);

  handleClick() {
    fetch('/jobs')
        .then(res => res.json())
        .then(jobs => this.setState( 
            {jobs}
        ))
  }

  render() {
    return (
        <div className="form">
            <Button push color={this.props.color} onClick={this.handleClick}>
                Test
            </Button>     
            <TextInput
                ref="input"
                theme={this.props.theme}
                color={this.props.color}
                label="Job Pk"
                labelColor
                placeholder="e.g. 230000"
                onChange={this.handleChange}
            />
            <TextInput
                ref="input"
                theme={this.props.theme}
                color={this.props.color}
                label="Triage Reason"
                labelColor
                placeholder="e.g. Infra"
                onChange={this.handleChange}
            />  
            
            <TextInput
                ref="input"
                theme={this.props.theme}
                color={this.props.color}
                label="Bug Number"
                labelColor
                placeholder="e.g. 1234"
                onChange={this.handleChange}
            />  
            <Button push color={this.props.color} onClick={() => console.log('Clicked!')}>
                Submit
            </Button>

        </div>    

    );
  }
}