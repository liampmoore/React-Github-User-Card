import React from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Link
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
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}>
                    <Image src={this.props.image} />
                    <Box px={2}>
                        <Heading as='h3'>
                            {this.props.title}
                        </Heading>
                        <Link href={this.props.link}>
                            {this.props.link}
                        </Link>
                    </Box>
                </Card>
            </Box>)
    }
}

export default GithubCard;