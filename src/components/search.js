// Thanks to:  https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'

const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'
const API_URL = 'http://ja.localhost:8765/search'


class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&keywords=${this.state.query}&limit=7`)
      .then(({ data }) => {
          this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
          <div className="input text">
              <input
                 type="text"
                 name="keywords"
                 placeholder="人名、組織名、商品名、ブランド名などで検索"
                 className="form-control" id="keywords"
                 value={this.state.value}
                 ref={input => this.search = input}
                 onChange={this.handleInputChange}
               />
        <Suggestions results={this.state.results} />
          </div>
    )
  }
}

export default Search
