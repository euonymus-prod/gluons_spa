import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainQuark extends Component {
 render () {
  return (
     <div className="col-md-3 card subject-main">
        <div className="subject-image">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Donald_Trump_Pentagon_2017.jpg/200px-Donald_Trump_Pentagon_2017.jpg" className="card-img-top" />
        </div>

        <div className="card-block">
           <h1 className="card-title">ドナルド・トランプ      </h1>
           <p>(1946-06-14 ~ )</p>
           <p>Donald John Trump</p>
           <p><a href="/relations/add/d803c7e4-130a-46a6-88d8-fd136f1dd47b" className="btn btn-primary">Add relation</a></p>
        </div>
     </div>
  )
 }
}
export default connect(state => state)(MainQuark);


