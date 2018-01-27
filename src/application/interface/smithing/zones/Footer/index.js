/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { graphics } from 'assets'
import { deal } from 'assets/images'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Container, Section,
  BackgroundImage, BackgroundGradient
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
  {...props}
>
<BackgroundImage src={deal} o={0.45} />
  <Container textAlign={['center']} w={[1,1, 720]} >
    <Image src={graphics.logo} w={[155]} mb={[10]} />
    <Paragraph f={[2]}>Open Source The World</Paragraph>
    <a href="https://twitter.com/kamescg" rel="noopener noreferrer" target="_blank">@kamescg</a>
  </Container>
</Section>
