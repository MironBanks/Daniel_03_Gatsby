import React from 'react'
import Icon from "../../static/waves.svg"
import Icon2 from "../../static/wave2.svg"
import styled from 'styled-components'


const IconWrapper = styled(Icon)`
position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100vw;
      object-fit: cover;
      z-index: 2;
`
const IconWrapper2 = styled(Icon2)`
position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100vw;
      object-fit: cover;
      z-index: 1;
`


const FooterWave = () =>
    (
        <>
            <IconWrapper>
                <Icon />;
            </IconWrapper>
            <IconWrapper2>
                <Icon2 />;
            </IconWrapper2>

        </>
    )


export default FooterWave