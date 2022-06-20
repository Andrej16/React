import React from "react";
import styled, { css } from 'styled-components'

export class StyledButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const Button = styled.button`
            background: transparent;
            border-radius: 3px;
            border: 2px solid palevioletred;
            color: palevioletred;
            margin: 0 1em;
            padding: 0.25em 1em;
            ${props =>
                props.primary &&
                css`
                  background: palevioletred;
                  color: white;
                `};            
            `
      return (
        <div>
            <Button>Button</Button>
            <Button primary>Button</Button>
        </div>);
    }
}