/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { signature } from 'assets/images'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} py={[20, 40]} color='white' textAlign='center' pos='relative' >
  <BackgroundImage src={signature}/>
  <Flex direction={['column']}  mh={['70vh']}justify={['center']} >
    <Box w={1} color="white" >
      <Heading fontSize={[6,7]} level={3} fontWeight={[300]} mb={10} textShadow='darkHazy' >
        autograph
      </Heading>
      <Paragraph f={[2]} textShadow='lightHazy' >
        Easily generate <em>10's, 100's or even 1,000's</em> of<br/>
        <strong>Signed Transactions</strong> when sending <strong>Ethereum Tokens</strong>
      </Paragraph>
    </Box>
  </Flex>
</Section>
