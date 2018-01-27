/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { images} from 'assets'
import {
  Absolute, Box, Container, Flex, Fixed,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'

import EthereumNetworkSettings from 'smithing/forms/EthereumNetworkSettings'
import EthereumUploadContract from 'smithing/forms/EthereumUploadContract'
import EthereumTransactionsGenerate from 'smithing/forms/EthereumTransactionsGenerate'

import EthereumGeneratedTransaction from 'smithing/containers/EthereumGeneratedTransaction'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Flex align='center' justify='center' py={50} >
      <Container w={[620]} py={50}>
        <Heading level={[3]} f={[3,4]} color='blue' mb={25} ta='center' >
          Batch Process Ethereum Transactions
        </Heading>
        <Paragraph f={[1]}>
        </Paragraph>
        <Flex ta='center'>
          <Box px={15} >
            <Heading level={[3]} f={[2,3]} color='blue' >
              Airdrops
            </Heading>
            <Paragraph f={[1]}>
              Send ERC20 to unsuspecting <strike>victims</strike> <strong><em>winners</em></strong> token quickly and easily.
            </Paragraph>
          </Box>
          <Box px={15} >
            <Heading level={[3]} f={[2,3]} color='blue' >
              Giveaways
            </Heading>
            <Paragraph f={[1]}>
              Easily send ERC20 tokens to 100's of <strong>event attendees</strong> as promotion and/or special access to VIP features.
            </Paragraph>
          </Box>
          <Box px={15} >
            <Heading level={[3]} f={[2,3]} color='blue' >
              Payroll
            </Heading>
            <Paragraph f={[1]}>
              Who needs banks? Send employees "high-value" ERC20 tokens to spend <strike>nowhere</strike> <strong><em>everywhere</em></strong>!
            </Paragraph>
          </Box>
        </Flex>
        <Heading level={[3]} f={[3]} color='red' mt={25} ta='center' >
          WARNING: Experimental Tool for <strong>TESTNET</strong>
        </Heading>
      </Container>
    </Flex>
  <Flex mh={'70vh'} align='center' justify='center'  color='white' gradient='blue' py={100} >
    <Container w={[500]} >
      <Heading level={[3]} f={[5,6]} color='white' ta='center' >
        Blockchain Connection
      </Heading>
      <EthereumNetworkSettings/>
    </Container>
  </Flex>
    <Flex mh={'80vh'} align='center' justify='center' py={50} >
      <Container w={[620]} py={50}>
        <Heading level={[3]} f={[5,6]} color='blue' ta='center' >
          Contract Initialization
        </Heading>
        <EthereumUploadContract/>
      </Container>
    </Flex>
    <Flex mh={'70vh'} align='center' justify='center'  color='white' gradient='blue' py={50} >
      <Container w={[620]} py={50}>
        <Heading level={[3]} f={[5,6]} color='white' ta='center' >
          Transaction Details
        </Heading>
        <Paragraph f={[1]} ta='center' >
          Configure Transaction Parameters
        </Paragraph>
        <EthereumTransactionsGenerate/>
      </Container>
    </Flex>
    <Flex align='center' justify='center' py={50} >
      <Container w={[620]} py={50}>
        <Heading level={[3]} f={[5,6]} color='blue' ta='center' >
          Transactions
        </Heading>
        <EthereumGeneratedTransaction/>
      </Container>
    </Flex>
</Box>