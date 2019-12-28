import React from 'react';
import Head from "next/head";
import { Container, Button, Radio, Form } from 'semantic-ui-react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'generic'
        };
    }

    myChangeHandler = (event) => {
        // console.log(v);
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    onRadioButtonChangeHandler = (event, v) => {
        // this.setState({name: event.target.value});
        // console.log(v);
        let name = v.name;
        let value = v.value;
        this.setState({[name]: value});
    }

    onClickHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
        // console.log(name + ': ' + event.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Final Name Value: " + this.state.name);
        console.log("Type: " + this.state.type);
    }

    render () {
        return (
            <Container>
                <Head>
                    <title>Initial</title>
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                </Head>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <h3 style = {{paddingTop: 30}}>Search Medicine</h3>
                        <input
                            name= "name"
                            placeholder='First Name'
                            onChange={this.myChangeHandler}
                            value={this.state.name}
                        />
                    </Form.Field>
                    
                    <Form.Field>
                        <label>Search By</label>
                        <Radio
                            label='Brand Name'
                            name='type'
                            value='brand'
                            checked={this.state.type === 'brand'}
                            onChange={this.onRadioButtonChangeHandler}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Generic'
                            name='type'
                            value='generic'
                            checked={this.state.type === 'generic'}
                            onChange={this.onRadioButtonChangeHandler}

                        />
                    </Form.Field>
                    <Button type='submit'>
                        Submit
                    </Button>
                </Form>
            </Container> 
        )
    }
}

export default Search ;