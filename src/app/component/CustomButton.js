import React from 'react';
import { Button } from 'react-bootstrap';

class CustomButton extends React.Component {
    render(){
        const {children} = this.props;
        return <div>
            <Button>
                {children}
            </Button>
        </div>
    }
}

export default CustomButton;