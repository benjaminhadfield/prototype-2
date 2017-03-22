import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux'
import {Panel,FormGroup,InputGroup,FormControl,Button, Col} from 'react-bootstrap'
import PatientList from './components/PatientList';

class CasePreparation extends React.Component {



  render() {

     const searchbar = (
         <FormGroup>
           <InputGroup>
             <FormControl type="text" placeholder="Search for patient..."/>
             <InputGroup.Button>
              <Button><i className="fa fa-search" aria-hidden="true"></i></Button>
            </InputGroup.Button>
           </InputGroup>
         </FormGroup>
      );

      const footerText = (
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Add a patient note..."/>
              <InputGroup.Button>
               <Button><i className="fa fa-plus" aria-hidden="true"></i></Button>
             </InputGroup.Button>
            </InputGroup>
          </FormGroup>
      )

    return (
        <Col xs={12} mdOffset={2} sm={10} smOffset={1} md={8}>
            <Panel header={searchbar}>
              <PatientList/>
            </Panel>
            <Panel header="Patient 1 Notes" footer={footerText}>
                <h3>Doctor 1 wrote:</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3>Doctor 2 wrote:</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Panel>
        </Col>
    )
  }
}

export default connect()(CasePreparation)
