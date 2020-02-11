import React from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Flex,
    Link,
    Button
} from 'rebass'

class GithubCard extends React.Component {

    constructor() {
        super()
    }
    render() {
        return (
            <Box width={300}>
                <Card
                    my={2}
                    mx={2}
                    sx={{
                        p: 1,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}>
                    <Image src={this.props.image} />
                    <Flex px={2} py={2} justifyContent='space-between' alignItems='center'>
                        <Heading as='h3'>
                            {this.props.title}
                        </Heading>
                        <Button variant='outline'>
                            <Link  href={this.props.link} sx={{color: 'white', textDecoration: 'none'}}>Github</Link>
                        </Button>
                    </Flex>
                </Card>
            </Box>)
    }
}

export default GithubCard;