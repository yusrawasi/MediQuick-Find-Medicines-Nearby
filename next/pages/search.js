import React from 'react';
import Head from "next/head";
import { Container, Button, Radio, Form } from 'semantic-ui-react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'brand',
            delay: 500,
		    minlength: 2,
            timer: null,
            url: 'api/search/brand',
            list: [],
            fetchedData: []
        };
    }

    myChangeHandler = (event) => {
        // console.log(event);
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    onRadioButtonChangeHandler = (event, v) => {
        // this.setState({name: event.target.value});
        console.log(v);
        let name = v.name;
        let value = v.value;
        this.setState({[name]: value, url: `api/search/${value}`});
    }

    onClickHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
        console.log(name + ': ' + event.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Final Name Value: " + this.state.name);
        console.log("Type: " + this.state.type);
        let ref = this;
        
        fetch(`api/${this.state.type}/${this.state.name}/search`)
            .then(res => res.json())
            .then(data => ref.setState({fetchedData: data}, ()=>(console.log(this.state.fetchedData))));
        
    }

    onKeyUpHandler = (e) => {
        let s = this.state;
        let ref = this;
        if (s.timer!=null) { window.clearTimeout(s.timer); }
			s.timer = setTimeout(function(){
				
				if (s.name.length >= s.minlength) {
					// var req = new XMLHttpRequest();
					// req.addEventListener("load", function(){
					// 	s.draw(JSON.parse(this.responseText));
					// });
					// req.open("GET", s.url + "?term=" + s.name);
                    // req.send();

                    
                    
                    fetch(s.url+"?term=" + s.name)
                        .then(res => res.json())
                        .then(data => ref.setState({list: data}));
				}
				// else{
				// 	s.box.innerHTML='';
				// }

			}, s.delay);
    }

    render () {
        // let searchAutocomplete = new Suggest ;
        // searchAutocomplete.autoComplete("searchDrug","drugNameSuggestions","api/search/brand");
        let options = [];
        if(this.state.list.length!==0 && this.state.type == 'brand'){
            options = this.state.list.map((item)=>{
            return <option key={item.b_id}>{item.b_name}</option>
            });
        }
        else if(this.state.list.length!==0 && this.state.type == 'generic'){
            options = this.state.list.map((item)=>{
            return <option key={item.g_id}>{item.g_name}</option>
            });
        }
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
                            id="searchDrug"
                            name= "name"
                            placeholder='First Name'
                            list="drugNameSuggestions"
                            autoComplete="off"
                            onChange={this.myChangeHandler}
                            onKeyUp={this.onKeyUpHandler}
                            value={this.state.name}
                        />
                        <datalist id="drugNameSuggestions">
                            {/* <option>paracetamol</option> */}
                            {
                                options
                            }


                        </datalist>
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