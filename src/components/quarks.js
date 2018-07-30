// Thanks to react-infinite-scroller
//    github: https://github.com/CassetteRocks/react-infinite-scroller
// general
import _ from 'lodash';
// react
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
// component
import Navbar from '../containers/navbar';
import QuarkInList from './quark_in_list';

class Quarks extends Component {

    renderQuarks() {
	const { current_quarks } = this.props;
	if (current_quarks.length == 0) {
	    if (this.props.result) {
		return 'Searching...';
	    } else {
		return 'No results';
	    }
	}

	var first = current_quarks[0];
	if (!first.id) {
	    return 'failed to fetch';
	}

	return _.map(current_quarks, quark => {
	    return (
		<div key={quark.id}>
                    {(() => {
                        if (quark.id != first.id)
                        return <hr />;
                    })()}
                    <QuarkInList quark_in_list={quark} />
		</div>
	    );
	});
    }

    loadMore = (page) => {
	this.props.quarkFetcher(page);
    }

    render () {
	const { quark_property_caption } = this.props;

	return (
      <div>
         <Navbar />
      <div className="container">
           <div>
               <h2>{quark_property_caption}</h2>
               <div className="related" >
                   <div className="well subject-relation white">
                      <InfiniteScroll
                          pageStart={0}
                          loadMore={this.loadMore}
                          hasMore={true}
                          threshold={1500}
                          loader={<div className="loader" key={0}>Loading ...</div>} >
                          {this.renderQuarks()}
                      </InfiniteScroll>
                   </div>
               </div>
	   </div>
      </div>
      </div>
	)
    }
}

export default Quarks;

