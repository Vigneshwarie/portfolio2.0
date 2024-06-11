import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../assets/styles/Tooltip.css';

const Tooltips = ({message, children, position}) => {
     return (
          <OverlayTrigger
               placement={position}
               overlay={<Tooltip id="button-tooltip" className='custom-tooltip'>{message}</Tooltip>}
          >
               {React.Children.only(children)}
          </OverlayTrigger>
     );
}

export default Tooltips;