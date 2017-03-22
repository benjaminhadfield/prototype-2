import React from 'react'
import styles from './styles.css'
import {connect} from 'react-redux';
import {isAdminOrAbove} from '../../services/permissions'


class Home extends React.Component {
    constructor(props) {
      super(props);
    }

  render() {
    const {role} = this.props;


    return (
      <div>
          {
          isAdminOrAbove(role)
            ? (
                <div>
                    <h1>Home</h1>
                    <p>You are connected!</p>
                </div>
            ) : (
                <div>
                    <h1>Home</h1>
                    <p>To connect as an admin, simply click on the dropdown menu in the navigation bar. </p>
                </div>
            )
        }
       </div>

    )
  }
}

const mapStateToProps = (state) => ({
  role: state.data.user.role
})

export default connect()(Home)
