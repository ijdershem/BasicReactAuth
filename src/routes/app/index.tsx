import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

const App:React.FC = (props)  => {
  return (
    <Container>
      Hello
    </Container>
  );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps)(App);
