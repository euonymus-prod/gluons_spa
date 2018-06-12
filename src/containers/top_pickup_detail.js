import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class TopPickupDetail extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
      <div className="col-md-3">
          <div className="pickup-link">
              <a href="/subjects/relations/%E6%9F%B3%E7%80%AC%E5%94%AF%E5%A4%AB/active"><img src="https://c799eb2b0cad47596bf7b1e050e83426.cdnext.stream.ne.jp/img/article/000/210/111/f952c280bec3e0ca42c0fe8cebf04c0d20170725123645446.jpg" alt="柳瀬唯夫"/></a>             </div>
      </div>
  )
 }
}
export default connect(state => state)(TopPickupDetail);
/*

               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/Hana%E5%80%B6%E6%A5%BD%E9%83%A8%E6%8A%95%E8%B3%87%E9%87%91%E6%9C%AA%E8%BF%94%E9%82%84%E5%95%8F%E9%A1%8C/passive"><img src="https://i.ytimg.com/vi/sfjPR7UVhY8/maxresdefault.jpg" alt="Hana倶楽部投資金未返還問題"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/NEM%E4%B8%8D%E6%AD%A3%E9%80%81%E9%87%91%E4%BA%8B%E4%BB%B6/active"><img src="https://cointelegraph.com/images/725_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy82M2NlNGU3MjJjMjQ1MjZlZmUzYjg1ZWQ2N2RjM2JhNS5qcGc=.jpg" alt="NEM不正送金事件"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/%E7%81%AB%E6%98%9F%EF%BC%88%E3%83%95%E3%82%A1%E3%82%BD%E3%83%B315%EF%BC%89/active"><img src="https://static.euronews.com/articles/385495/684x384_385495.jpg" alt="火星（ファソン15）"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/51%E9%87%8F%E5%AD%90%E3%83%93%E3%83%83%E3%83%88%E3%82%92%E3%82%82%E3%81%A3%E3%81%9F%E9%87%8F%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF/passive"><img src="https://pc.watch.impress.co.jp/img/pcw/docs/1094/404/qubit_l.jpg" alt="51量子ビットをもった量子コンピュータ"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/%E7%AC%AC4%E6%AC%A1%E5%AE%89%E5%80%8D%E5%86%85%E9%96%A3/active"><img src="https://s3.reutersmedia.net/resources/r/?m=02&amp;d=20171101&amp;t=2&amp;i=1207843666&amp;r=LYNXMPEDA025P&amp;w=1280" alt="第4次安倍内閣"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/%E7%AC%AC48%E5%9B%9E%E8%A1%86%E8%AD%B0%E9%99%A2%E8%AD%B0%E5%93%A1%E7%B7%8F%E9%81%B8%E6%8C%99/active"><img src="https://d37t43gijuic4y.cloudfront.net/article/img/2017/10/12/7675ac70e68eca317f702e76.png" alt="第48回衆議院議員総選挙"/></a>                </div>
            </div>
               <div class="col-md-3">
                <div class="pickup-link">
                    <a href="/subjects/relations/%E5%85%B1%E8%AC%80%E7%BD%AA%E6%B3%95%EF%BC%88%E6%97%A5%E6%9C%AC%EF%BC%89/active"><img src="https://pbs.twimg.com/media/C2HfgdtUsAAa1re.jpg" alt="共謀罪法（日本）"/></a>                </div>
            </div>

*/
