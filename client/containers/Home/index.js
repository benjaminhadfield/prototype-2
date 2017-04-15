import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';
import {isAdminOrAbove} from '../../services/permissions'


class Home extends React.Component {
    constructor(props) {
      super(props);
    }

  render() {
    const {name} = this.props;

    return (
      <div>
        <p>Welcome to PEACH Cancer, {name}!</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.data.user.firstName
});

export default connect(mapStateToProps)(Home);
