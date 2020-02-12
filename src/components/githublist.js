import React from 'react';
import { Box, Flex, Text, Button} from 'rebass';
import {Input} from '@rebass/forms';
import axios from 'axios';

import GithubCard from './githubcard';


class GithubList extends React.Component {
    constructor() {
        super()

        this.state = {
            followers: [],
            inputText: '',
            url: ''
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.followers !== this.state.followers) {
            if (prevState.url !== this.state.url) {
        axios.get(this.state.url)
                .then(res => {
                    this.setState({
                        followers: res.data
                    })
                })
                .catch(err => console.log(err))
    }
        }
    }


    handleChange = (e) => {
        
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            followers: [],
            url: `https://api.github.com/users/${this.state.inputText}/followers`
        })
    }


    render() {
        return (

            <Flex maxWidth={'900px'} margin='0 auto' flexDirection='column' alignItems='center'>
                <Flex
                    sx={{
                        minWidth: ['282px', '282px', '582px', '882px'],
                    }}
                    px={2}
                    mx={2}
                    justifyContent='space-between'
                    color='white'
                    bg='primary'
                    alignItems='center'>
                    <Text py={2} fontWeight='bold'>Github<br/>Followers</Text>
                    
                    <form id='usernameentry' onSubmit={this.handleSubmit}/>
                    <Input form='usernameentry' width={['138px', '138px', '250px', '400px']} type='text' sx={{'::placeholder': {color: 'white' }}} backgroundColor='secondary' onChange={this.handleChange} value={this.state.inputText} placeholder='Enter a username and press enter to see their followers.' />
                </Flex>
                <Flex
                    sx={{
                        display: ['default', 'default', 'default', 'none'],
                        minWidth: ['282px', '282px', '582px', '882px'],
                    }}
                    px={2}
                    mx={2}
                    justifyContent='space-between'
                    color='white'
                    bg='primary'
                    alignItems='center'
                    flexDirection='column'>

<Button form='usernameentry' backgroundColor='primary' sx={{ border: '1px solid white', borderRadius: '1px', width: ['264px', '264px', '564px', '864px']}} marginBottom={2}>Submit</Button>
                    </Flex>
                

                <Flex flexWrap='wrap' width='100%' alignItems='center' justifyContent='center'>
                    {this.state.followers.map((item) => { return (<GithubCard key={item.id} image={item.avatar_url} title={item.login} link={item.html_url} />) })}
                </Flex>

            </Flex>
        )
    }

}


export default GithubList;