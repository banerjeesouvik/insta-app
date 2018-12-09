import React, { Component } from 'react'
import Axios from 'axios'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Profile from '../../components/Profile'

import API, { ProfileData } from '../../lib'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.fetchImageList()
  }

  fetchImageList = () => {
    this.setState({ loading: true })
    Axios.get(API)
      .then((response) => {
        const images = response.data
        this.setState({ images, loading: false })
      })
      .catch(error => this.setState({
        error: error.response ? error.response.data.message : error.message,
        loading: false,
      }))
  }

  render() {
    const { loading, images, error } = this.state
    const profileObj = { ...ProfileData, images }
    const { userName } = profileObj
    let component = null
    if (loading) {
      component = <Loader />
    } else if (images) {
      component = <Profile profileObj={profileObj} />
    } else if (error) {
      component = <div className='error'>{error}</div>
    }
    return (
      <div className='home-page'>
        <Header userName={userName} />
        {component}
      </div>
    )
  }
}

export default HomePage
