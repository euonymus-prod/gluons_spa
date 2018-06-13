import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchQuark} from '../actions/quark';

class MainQuark extends Component {

    componentDidMount() {
	if (!this.props.quark) {
            // let quark_name = 'シェフにおまかせ!';
	    // this.props.fetchQuark(quark_name);
            this.props.fetchQuark(this.props.quark_name);
        }
    }

    render () {
        const { quark } = this.props;
        if (!quark) {
	    return <div>Loading...</div>;
        }

	return (
     <div className="col-md-3 card subject-main">
        <div className="subject-image">
           <img src={quark.image_path} className="card-img-top" />
        </div>

        <div className="card-block">
           <h1 className="card-title">{quark.name}</h1>
           <p>{quark.period_str}</p>
           <p>{quark.description}</p>
           <p><a href="/relations/add/{quark.id}" className="btn btn-primary">Add relation</a></p>
        </div>
     </div>
  )
 }
}


function mapStateToProps(state) {
    return {posts: state.quark}
}
function mapStateToProps({ quark }, ownProps) {
    return { 
	quark: quark,
    };
}

export default connect(mapStateToProps, { fetchQuark })(MainQuark);
