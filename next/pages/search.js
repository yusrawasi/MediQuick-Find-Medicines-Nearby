import React from 'react';
import Head from "next/head";
import { Container, Icon, Radio, Form } from 'semantic-ui-react';
import medicineList from '../data/medicineList';
// import brandList from '../data/brandList';
import '../css/styles.css';


//Components
import SearchList from '../components/SearchComponents/SearchList';
import Navbar from '../components/Layout/Navbar';

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
            fetchedData: [],
            brandList: [],
            isSubmitted: false
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
            .then(data => {
                if(this.state.type=='brand'){
                    ref.setState({fetchedData: data, isSubmitted: true, brandList:[{name: data[0].name, manufacturer: data[0].manufacturer}]}, 
                        ()=>(console.log(data)));
                }
                else {
                    ref.setState({fetchedData: data, isSubmitted: true}, ()=>(console.log(this.state.fetchedData)));
                }
        });
        
        if(this.state.type=='generic'){
            fetch(`api/generic/${this.state.name}/brandlist`)
                .then(res => res.json())
                .then(data => ref.setState({brandList: data, isSubmitted: true}, ()=>(console.log(this.state.brandList))));
        }
        
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
        // return (
        //     <Container>
        //         <Head>
        //             <title>Initial</title>
        //             <link
        //                 rel="stylesheet"
        //                 href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
        //             />
        //         </Head>
        //         <Form onSubmit={this.onSubmit}>
        //             <Form.Field>
        //                 <h3 style = {{paddingTop: 30}}>Search Medicine</h3>
        //                 <input
        //                     id="searchDrug"
        //                     name= "name"
        //                     placeholder='First Name'
        //                     list="drugNameSuggestions"
        //                     autoComplete="off"
        //                     onChange={this.myChangeHandler}
        //                     onKeyUp={this.onKeyUpHandler}
        //                     value={this.state.name}
        //                 />
        //                 <datalist id="drugNameSuggestions">
        //                     {/* <option>paracetamol</option> */}
        //                     {
        //                         options
        //                     }


        //                 </datalist>
        //             </Form.Field>
                    
        //             <Form.Field>
        //                 <label>Search By</label>
        //                 <Radio
        //                     label='Brand Name'
        //                     name='type'
        //                     value='brand'
        //                     checked={this.state.type === 'brand'}
        //                     onChange={this.onRadioButtonChangeHandler}
        //                 />
        //             </Form.Field>
        //             <Form.Field>
        //                 <Radio
        //                     label='Generic'
        //                     name='type'
        //                     value='generic'
        //                     checked={this.state.type === 'generic'}
        //                     onChange={this.onRadioButtonChangeHandler}

        //                 />
        //             </Form.Field>
        //             <Button type='submit'>
        //                 Submit
        //             </Button>
        //         </Form>
        //     </Container> 
        // )

        return (
            <div className = "search-page">
                <Navbar />
                <Container>
                    <Head>
                        <title>Initial</title>
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                            crossOrigin="anonymous"
                        />
                        <link
                            rel="stylesheet"
                            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                        />
                        <link href="https://fonts.googleapis.com/css?family=Oswald|Poppins|Shadows+Into+Light&display=swap" rel="stylesheet"></link>
                    </Head>
                    <div className = "form">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                {/* <h3>Search Medicine</h3> */}
                                <div class="ui action input">
                                    <input 
                                        type="text"
                                        id="searchDrug"
                                        name= "name"
                                        placeholder='Search Medicine'
                                        list="drugNameSuggestions"
                                        autoComplete="off"
                                        onChange={this.myChangeHandler}
                                        onKeyUp={this.onKeyUpHandler}
                                        value={this.state.name}
                                    />
                                    <button class="ui button" type='submit'>
                                        <Icon name="search" size="large"></Icon>
                                        Search
                                    </button>
                                </div>
                                <datalist id="drugNameSuggestions">
                                    {/* <option>paracetamol</option> */}
                                    {
                                        options
                                    }


                                </datalist>
                            </Form.Field>
                            
                            <Form.Field>
                                <Radio
                                    label='Brand'
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
                        </Form>
                    </div>
                    {this.state.isSubmitted && <SearchList medicineList = {this.state.fetchedData} brandList= {this.state.brandList}/>}
                </Container>
            </div>
        )
    }
}

export default Search ;