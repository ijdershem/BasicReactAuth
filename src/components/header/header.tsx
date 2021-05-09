import React from 'react';
import { Container } from 'reactstrap';

interface IProps {

}
const HeaderComponent: React.FC<IProps> = ({...props}) => {
    return (
        <Container className='app-header'>

        </Container>
    )
}

export default HeaderComponent;