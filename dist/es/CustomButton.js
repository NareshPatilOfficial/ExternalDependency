import React from 'react';
import { Button } from 'react-bootstrap';
class CustomButton extends React.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, children));
  }
}
export default CustomButton;