import React, {Component} from 'react';
import './list.css';


class List extends Component{
  getSectionRef = el => {
    this.sectionRef = el;
    //https://reactjs-kr.firebaseapp.com/docs/refs-and-the-dom.html
    //getSectionRef 클릭시 페이지 스크롤
  }

  onButtonClick = e => {
    if (this.sectionRef) {
      window.scrollTo({
        top: this.sectionRef.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  render (){


    return(
      <div>
               <button type="button" onClick={this.onButtonClick}>Click</button>
                              <div className="bg-warning height" >
                              </div>
               <section ref={this.getSectionRef}>
                 Some section to scroll to
               </section>


        </div>

    );
  }
}

export default List;
