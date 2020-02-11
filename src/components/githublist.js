import React from 'react';
import { Box, Flex, Text, Link} from 'rebass';
import axios from 'axios';

import GithubCard from './githubcard';


class GithubList extends React.Component {
    constructor() {
        super()

        this.state = {
            followers: []
        }
    }


    componentDidMount() {
        axios.get('https://api.github.com/users/liampmoore/followers')
            .then(res => {
                console.log(res)
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate() {
        console.log(this.state.followers)
    }

    render() {
        return (

            <Box maxWidth='900px' margin='0 auto'>
                <Flex
                    px={2}
                    mx={2}
                    color='white'
                    bg='secondary'
                    alignItems='center'>
                    <Text p={2} fontWeight='bold'>Github Friends</Text>
                   
                </Flex>

                <Flex flexWrap='wrap' width='100%' alignItems='center' justifyContent='center'>
                    {this.state.followers.map((item) => { return (<GithubCard key={item.id} image={item.avatar_url} title={item.login} link={item.html_url} />) })}
                </Flex>

            </Box>
        )
    }

}


export default GithubList;