import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Search(){
    return (
        <InputGroup className='mb-3 rounded border'>
                <InputGroup.Text className='border'
                    id="search-addon"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                <FormControl className='rounded' type='search' aria-label='Search' aria-describedby='search-addon'
                    placeholder='Search ...'></FormControl>
        </InputGroup>
    );
}