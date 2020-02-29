//Displaying the list of alternate medicines on the location page
import react from 'react';
import Link from 'next/link';
import { List } from 'semantic-ui-react';

class AlternateMedicines extends react.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            list: null
        }
    }

    render (){
        const {alternateMedicines} = this.props;
        const list = alternateMedicines.map((medicine)=> {
            return(
                <Link key = {medicine.id} href = {`location?id=${medicine.id}`}>
                    <List.Item>
                        <List.Icon name='plus circle' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{medicine.name}</List.Header>
                            <List.Description as='a'>{medicine.manufacturer}</List.Description>
                        </List.Content>
                    </List.Item>
                </Link>
            );
        })

        return(
            <List divided relaxed>
                <h1>Alternate Medicines</h1>
                {list}
            </List>
        )
    }
}

export default AlternateMedicines;