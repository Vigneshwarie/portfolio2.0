import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../assets/styles/Tooltip.css';

const Tooltips = ({message, children}) => {
     return (
          <OverlayTrigger
               placement="bottom"
               overlay={<Tooltip id="button-tooltip">{message}</Tooltip>}
          >
               {React.Children.only(children)}
          </OverlayTrigger>
     );
}

export default Tooltips;