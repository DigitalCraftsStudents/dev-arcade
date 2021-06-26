import React from 'react';
import styled from 'styled-components';

const FooterDiv=styled.div`
text-align: center;
margin: auto;
position: bottom;
left: 0;
bottom: 0;
width: 100%;
border-top: 1px solid #222;
background-color: #222;`

function Footer() {
    return (
        <FooterDiv>
            <div id='footer'>
                <a href="https://github.com/sriveragithub" target="_blank"> <img src="https://lh3.googleusercontent.com/proxy/aqsCIffSQGUXC84WmBVJ8oXljuae287F_8kZLHBrR7k0heIc4o1sAU8zUWzUZ9ufacKWhQmF36pgbXzKNEXJzQfqSLICL-UL"></img> </a>
                <a href="https://github.com/csolis1" target="_blank"> <img src="https://lh3.googleusercontent.com/proxy/aqsCIffSQGUXC84WmBVJ8oXljuae287F_8kZLHBrR7k0heIc4o1sAU8zUWzUZ9ufacKWhQmF36pgbXzKNEXJzQfqSLICL-UL"></img> </a>
                <a href="https://github.com/myrriame" target="_blank"> <img src="https://lh3.googleusercontent.com/proxy/aqsCIffSQGUXC84WmBVJ8oXljuae287F_8kZLHBrR7k0heIc4o1sAU8zUWzUZ9ufacKWhQmF36pgbXzKNEXJzQfqSLICL-UL"></img> </a>
            </div>
        </FooterDiv>
    )

}

export default Footer