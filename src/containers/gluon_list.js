import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchGluons} from '../actions/gluon';

import Gluon from './gluon';

class GluonList extends Component {
    componentDidMount() {
	this.props.fetchGluons(this.props.quark_id, this.props.quark_property_id);
	console.log(1);
	// if (nextProps.quark) {
	//     if (!this.props.quark || nextProps.quark.quark_type_id != this.props.quark.quark_type_id) {
	// 	this.props.fetchQuarkProperties(nextProps.quark.quark_type_id);
	//     }
        // }
    }

    render () {
	return (
           <div className="well subject-relation white">

              <Gluon />

           </div>
	)
    }
}

// function mapStateToProps({ quark, quark_properties }, ownProps) {
//     return { quark, quark_properties };	
// }
export default connect(null, { fetchGluons })(GluonList);


/*
<h2>親</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%95%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Fred_Trump.png/220px-Fred_Trump.png" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%95%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">フレッド・トランプ</a>の息子    

    
    
            </h4>
            <p>(1946-06-14)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>フレッド・トランプとは</h4>
        Frederick Christ \Fred"Trump。ドイツ系アメリカ人の不動産開発業者・慈善家"""        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/KKK"><img src="https://i.ytimg.com/vi/PbF6TQc2904/maxresdefault.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/KKK">KKK</a>のメンバーとしてメモリアル・デー（戦没将兵追悼記念日）の暴動に参加して逮捕された                        <br>(1927)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/The_Trump_Organization_Logo.jpeg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">トランプ・オーガナイゼーション</a>（当時、エリザベス・トランプ・アンド・サン）を設立、初代社長                        <br>(1920 ~ 1971)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%95%E3%83%AC%E3%83%87%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Frederick_Friedrich_Trump_2.jpg/220px-Frederick_Friedrich_Trump_2.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%95%E3%83%AC%E3%83%87%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">フレデリック・トランプ</a>の息子                        <br>(1905-10-11)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>

   </div>
</div>
<h2>子供</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%90%E3%83%AD%E3%83%B3%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://pbs.twimg.com/profile_images/799277745809149953/TFLJvwYP.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%83%90%E3%83%AD%E3%83%B3%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">バロン・トランプ</a> はドナルド・トランプの息子    

    
    
            </h4>
            <p>(2006-03-20)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>バロン・トランプとは</h4>
        Barron William Trump        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%A1%E3%83%A9%E3%83%8B%E3%82%A2%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://www.jiji.com/news/handmade/topic/d4_ftcc/trf201-jpp10858050.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%A1%E3%83%A9%E3%83%8B%E3%82%A2%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">メラニア・トランプ</a>の息子                        <br>(2006-03-20)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%86%E3%82%A3%E3%83%95%E3%82%A1%E3%83%8B%E3%83%BC%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20160721%2F19%2F1572709%2F10%2F736x1104xd43403a6db911828dc34e16.jpg%2F300%2F600&amp;twidth=300&amp;theight=600&amp;qlt=80&amp;res_format=jpg&amp;op=r" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%83%86%E3%82%A3%E3%83%95%E3%82%A1%E3%83%8B%E3%83%BC%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">ティファニー・トランプ</a> はドナルド・トランプの娘    

    
    
            </h4>
            <p>(1993-10-13)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>ティファニー・トランプとは</h4>
        Tiffany Ariana Trump。アメリカ合衆国のインターネットパーソナリティ、歌手、モデル        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%99%E3%83%8B%E3%82%A2%E5%A4%A7%E5%AD%A6"><img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Upenn-shield.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%99%E3%83%8B%E3%82%A2%E5%A4%A7%E5%AD%A6">ペンシルベニア大学</a>を卒業                        <br>(2012-04-01 ~ 2016-03)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%9E%E3%83%BC%E3%83%A9%E3%83%BB%E3%82%A2%E3%83%B3%E3%83%BB%E3%83%A1%E3%83%BC%E3%83%97%E3%83%AB%E3%82%BA"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Marla_Maples_LF_crop.jpg/220px-Marla_Maples_LF_crop.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%9E%E3%83%BC%E3%83%A9%E3%83%BB%E3%82%A2%E3%83%B3%E3%83%BB%E3%83%A1%E3%83%BC%E3%83%97%E3%83%AB%E3%82%BA">マーラ・アン・メープルズ</a>の娘                        <br>(1993-10-13)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%82%A8%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://delivery.gettyimages.com/xc/489506564-donald-trump-jr-eric-trump-and-ivanka-trump-attend-the.jpg?v=2&amp;c=IWSAsset&amp;k=2&amp;d=X7WJLa88Cweo9HktRLaNXj78by1lktvuTfC7PhW11PfzQcRNetRPvHsfW2x1NwA30&amp;b=MUQ=" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%82%A8%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">エリック・トランプ</a> はドナルド・トランプの息子    

    
    
            </h4>
            <p>(1984-01-06)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>エリック・トランプとは</h4>
        Eric Frederick Trump。アメリカの実業家        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%B8%E3%82%BF%E3%82%A6%E3%83%B3%E5%A4%A7%E5%AD%A6"><img src="https://kotobank.jp/image/dictionary/daijisen/media/105984.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%B8%E3%82%BF%E3%82%A6%E3%83%B3%E5%A4%A7%E5%AD%A6">ジョージタウン大学</a>を卒業                        <br>(2002-04-01 ~ 2006-03)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://s-media-cache-ak0.pinimg.com/736x/10/c3/cf/10c3cf433215208b44d46b400786ace6.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">イヴァナ・マリエ・トランプ</a>の息子                        <br>(1984-01-06)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AB%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivankatrump.jpg/170px-Ivankatrump.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AB%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">イヴァンカ・トランプ</a> はドナルド・トランプの娘    

    
    
            </h4>
            <p>(1981-10-30)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>イヴァンカ・トランプとは</h4>
        Ivanka Marie Trump。アメリカ合衆国の女性実業家、ソーシャライト、女性相続人、ファッションモデル、大統領補佐官        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%A6%E3%83%80%E3%83%A4%E6%95%99"><img src="https://tse1.mm.bing.net/th?id=OIP.M36f168778570ac306f6ce53bd37c1a1ao0&amp;pid=Api" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%A6%E3%83%80%E3%83%A4%E6%95%99">ユダヤ教</a>に改宗した                        <br>(2009)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%B8%E3%83%A3%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Jared_Kushner_cropped.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%B8%E3%83%A3%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC">ジャレッド・コーリー・クシュナー</a>の妻                        <br>(2009 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://s-media-cache-ak0.pinimg.com/736x/10/c3/cf/10c3cf433215208b44d46b400786ace6.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">イヴァナ・マリエ・トランプ</a>の娘                        <br>(1981-10-30)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%B8%E3%83%A5%E3%83%8B%E3%82%A2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Donald_Trump%2C_Jr._%2830309613870%29.jpg/220px-Donald_Trump%2C_Jr._%2830309613870%29.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%B8%E3%83%A5%E3%83%8B%E3%82%A2">ドナルド・トランプ・ジュニア</a> はドナルド・トランプの長男    

    
    
            </h4>
            <p>(1977-12-31)</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>ドナルド・トランプ・ジュニアとは</h4>
        Donald John \Don"Trump Jr. アメリカの実業家"""        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%99%E3%83%8B%E3%82%A2%E5%A4%A7%E5%AD%A6"><img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Upenn-shield.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%99%E3%83%8B%E3%82%A2%E5%A4%A7%E5%AD%A6">ペンシルベニア大学</a>を卒業                        <br>(1996-04-01 ~ 2000-03)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://s-media-cache-ak0.pinimg.com/736x/10/c3/cf/10c3cf433215208b44d46b400786ace6.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">イヴァナ・マリエ・トランプ</a>の長男                        <br>(1977-12-31)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>

   </div>
</div>
<h2>卒業</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%90%E3%83%8B%E3%82%A2%20%E5%A4%A7%E5%AD%A6%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%88%E3%83%B3%E6%A0%A1"><img src="https://www.wharton.upenn.edu/wp-content/plugins/martech-chupacabra/includes/images/Wharton-Logo-RGB.png" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%9A%E3%83%B3%E3%82%B7%E3%83%AB%E3%83%90%E3%83%8B%E3%82%A2%20%E5%A4%A7%E5%AD%A6%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%88%E3%83%B3%E6%A0%A1">ペンシルバニア 大学ウォートン校</a>に編入。不動産を学び経済学士号（BS (ECon)）を取得    

    
    
            </h4>
            <p>(1966 ~ 1968)</p>
          </div>
        </div>
    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%95%E3%82%A9%E3%83%BC%E3%83%80%E3%83%A0%E5%A4%A7%E5%AD%A6"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Fordham_University_Logo.png" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%95%E3%82%A9%E3%83%BC%E3%83%80%E3%83%A0%E5%A4%A7%E5%AD%A6">フォーダム大学</a>に通った    

    
    
            </h4>
            <p>(1964 ~ 1966)</p>
          </div>
        </div>
    </div>
    
</div>

   </div>
</div>
<h2>勤務先</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/The_Trump_Organization_Logo.jpeg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">トランプ・オーガナイゼーション</a>（当時、エリザベス・トランプ・アンド・サン）に入社    

    
    
            </h4>
            <p>(1968)</p>
          </div>
        </div>
    </div>
    
</div>

   </div>
</div>
<h2>知人</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%82%B8%E3%83%A3%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Jared_Kushner_cropped.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%82%B8%E3%83%A3%E3%83%AC%E3%83%83%E3%83%89%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC">ジャレッド・コーリー・クシュナー</a> はドナルド・トランプの上級顧問    

    
    
            </h4>
            <p>(2017-01-20 ~ )</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>ジャレッド・コーリー・クシュナーとは</h4>
        Jared Corey Kushner。アメリカ合衆国の実業家        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E5%A4%A7%E7%B5%B1%E9%A0%98%E4%B8%8A%E7%B4%9A%E9%A1%A7%E5%95%8F"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/US-WhiteHouse-Logo.svg/1200px-US-WhiteHouse-Logo.svg.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E5%A4%A7%E7%B5%B1%E9%A0%98%E4%B8%8A%E7%B4%9A%E9%A1%A7%E5%95%8F">大統領上級顧問</a>を務める                        <br>(2017-01-20 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%AF%E3%83%B3%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/TimesSquare-500px.jpg/200px-TimesSquare-500px.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%AF%E3%83%B3%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2">ワン・タイムズスクエア</a>の株式の50.1%を買収                        <br>(2015-05)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E5%A4%A7%E5%AD%A6"><img src="https://s-media-cache-ak0.pinimg.com/564x/dd/bb/ed/ddbbed13fd7874e79a75e931f34d7253.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E5%A4%A7%E5%AD%A6">ニューヨーク大学</a>ビジネス・スクール・ロー・スクールのジョイント・プログラムでMBA・法務博士（J.D.）号を取得                        <br>(2007)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E3%83%BB%E3%82%AA%E3%83%96%E3%82%B6%E3%83%BC%E3%83%90%E3%83%BC"><img src="https://media.glassdoor.com/sqll/17338/the-new-york-observer-squarelogo.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E3%83%BB%E3%82%AA%E3%83%96%E3%82%B6%E3%83%BC%E3%83%90%E3%83%BC">ニューヨーク・オブザーバー</a>を1000万ドルで買収しCEOとなった                        <br>(2006 ~ 2017)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC%E3%83%BB%E3%82%AB%E3%83%B3%E3%83%91%E3%83%8B%E3%83%BC%E3%82%BA"><img src="https://si.wsj.net/public/resources/images/BN-SO142_KUSHNE_J_20170320162108.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC%E3%83%BB%E3%82%AB%E3%83%B3%E3%83%91%E3%83%8B%E3%83%BC%E3%82%BA">クシュナー・カンパニーズ</a>の元CEO                        <br>(2005 ~ 2017)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%8F%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89%E5%A4%A7%E5%AD%A6"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/180px-Harvard_shield_wreath.svg.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%8F%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89%E5%A4%A7%E5%AD%A6">ハーバード大学</a>を卒業、社会学士号(B.A. in sociology)を取得                        <br>(2003)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%A6%E3%83%80%E3%83%A4%E4%BA%BA"><img src="https://i2.wp.com/tamenal.com/wp-content/uploads/2017/08/o0400026711426961325.jpg?resize=400%2C220" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%A6%E3%83%80%E3%83%A4%E4%BA%BA">ユダヤ人</a>として正統派ユダヤ教の戒律に従った食事をとり、安息日を守り、ニューヨークのアッパーイーストサイドにある上流階級向けのシナゴーグに通う                        <br>(1981-01-10)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC"><img src="https://static3.businessinsider.com/image/589cf80f6e09a86c148b4c99-480/charles-kushner.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%81%E3%83%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%BB%E3%82%AF%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BC">チャールズ・クシュナー</a>の長男                        <br>(1981-01-10)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>

   </div>
</div>
<h2>仕事</h2>
<div className="related">
   <div className="well subject-relation white">

            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%A4%A7%E7%B5%B1%E9%A0%98"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/250px-Seal_of_the_President_of_the_United_States.svg.png" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%A4%A7%E7%B5%B1%E9%A0%98">アメリカ大統領</a>(第45代)    

    
    
            </h4>
            <p>(2017-01-20 ~ )</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well ">
        <h4>アメリカ大統領とは</h4>
        President of the United States of America        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%90%88%E8%A1%86%E5%9B%BD"><img src="https://kotobank.jp/image/dictionary/nipponica/media/00013275000107.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%90%88%E8%A1%86%E5%9B%BD">アメリカ合衆国</a>行政の最高責任者                        <br>
           
              </li>

            </ul>
      </div>

    </div>
    
</div>
            <div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/The_Trump_Organization_Logo.jpeg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3">トランプ・オーガナイゼーション</a>の元会長兼、社長    

    
    
            </h4>
            <p>(1971 ~ 2017)</p>
          </div>
        </div>
    </div>
    
</div>

   </div>
</div>

    <h2>ドナルド・トランプとは</h2>
    <div className="related">
        <div className="well subject-relation white">
    
<div className="subject-relation white">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%BF%E3%83%AF%E3%83%BC"><img src="https://tokuhain.arukikata.co.jp/chicago/2014/09/08/images/01-trump-tower-sign-550x366.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    ドナルド・トランプは <a href="/subjects/relations/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%83%BB%E3%82%BF%E3%83%AF%E3%83%BC">トランプ・タワー</a>をニューヨーク五番街に建設した    

    
    
            </h4>
            <p>(1983 ~ )</p>
          </div>
        </div>
    </div>
    
</div>

</div>
    </div>

    <h2>ドナルド・トランプに関する事項</h2>
    <div className="related">
        <div className="well subject-relation ">
    
<div className="subject-relation ">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E6%88%A6%E7%95%A5%E6%94%BF%E7%AD%96%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0"><img src="https://fortunedotcom.files.wordpress.com/2017/02/633692778.jpg?w=1100&amp;quality=85" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E6%88%A6%E7%95%A5%E6%94%BF%E7%AD%96%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0">戦略政策フォーラム</a> はドナルド・トランプが設置した政策検討議会    

    
    
            </h4>
            <p>(2017-02-03 ~ )</p>
          </div>
        </div>
    </div>
    
</div>

    <hr>
<div className="subject-relation ">
    <div className="subject-relation-main">
        <div className="media">
          <div className="media-left subject-image">

                <a href="/subjects/relations/%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB"><img src="https://gsfiles.s3.amazonaws.com/images/folder614/peter.thiel_new.jpg" width="100px" height="100px" alt=""/></a>    
          </div>
          <div className="media-body">
            <h4 className="media-heading">

                    <a href="/subjects/relations/%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB">ピーター・ティール</a> はドナルド・トランプ政権のITアドバイザー。大統領選時には多額の献金    

    
    
            </h4>
            <p>(2016-05 ~ )</p>
          </div>
        </div>
    </div>
        <div className="subject-relation-sub">
      <div className="well white">
        <h4>ピーター・ティールとは</h4>
        Peter Andreas Thiel        <ul className="subject-list-relation">
    

      <li>
        

                      
            <a href="/subjects/relations/Y%20Combinator"><img src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/Y%20Combinator">Y Combinator</a>のPartner                        <br>(2015-03 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/Asana%2C%20Inc."><img src="https://blog.asana.com/wp-content/post-images/logo_horiz1.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/Asana%2C%20Inc.">Asana, Inc.</a>に出資（シリーズB: 総額$28M）                        <br>(2012-07)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/Founders%20fund"><img src="https://pbs.twimg.com/profile_images/557695965742628864/_wsa3ntD.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/Founders%20fund">Founders fund</a>を創立。Partner。                        <br>(2005 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%83%96%E3%83%83%E3%82%AF"><img src="https://tse3.mm.bing.net/th?id=OIP.M88272bb7e4bf3c33522d800d953b724do0&amp;pid=Api" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%83%96%E3%83%83%E3%82%AF">フェイスブック</a>の取締役                        <br>(2004 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/PayPal%20Inc."><img src="https://www.agilealliance.org/wp-content/uploads/2015/12/logo-paypal-e1450234987190.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/PayPal%20Inc.">PayPal Inc.</a>の創業メンバー                        <br>(2000-03 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/PayPal%20Mafia"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/PayPal_Mafia.jpg/400px-PayPal_Mafia.jpg" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/PayPal%20Mafia">PayPal Mafia</a>の一人                        <br>(1998 ~ )
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/Confinity%20Inc."><img src="https://tse2.mm.bing.net/th?id=OIP.PxP_ziM8fvjDdbvYX9XOXwD6BD&amp;pid=Api" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/Confinity%20Inc.">Confinity Inc.</a>を設立                        <br>(1998)
           
              </li>

    

      <li>
        

                      
            <a href="/subjects/relations/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%A4%A7%E5%AD%A6"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png" width="40px" height="40px" alt=""/></a>            <a href="/subjects/relations/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%A4%A7%E5%AD%A6">スタンフォード大学</a>を卒業                        <br>(1986-04-01 ~ 1990-03)
           
              </li>

            </ul>
      </div>

    </div>
    
</div>

</div>
    </div>





*/
