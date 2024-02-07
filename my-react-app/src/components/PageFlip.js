import React from "react";
import HTMLFlipBook from "react-pageflip";
import '../css/PageFlip.css';
import Page  from './Page';
import PageCover from "./PageCover";
import FrontPage from "./FrontPage";
import EndPage from "./EndPage"



class PageFlip extends React.Component {
  constructor(props) {
    super(props);

    const pages = [
      <PageCover key={0} pos="top">
        <FrontPage/>
      </PageCover>
    ];

    let pageNum = 0;
    for (let i = 0; i < 10; i++) {
      pageNum++;
      if (pageNum > 8) pageNum = 1;
      pages.push(
        <Page key={i + 1} image={pageNum + ".jpg"} number={i + 1} content="Hello pratik">
          
        </Page>
      );
    }

    pages.push(
      <PageCover key={11} pos="bottom">
        <EndPage/>
      </PageCover>
    );

    this.state = {
      page: 0,
      totalPage: 0,
      orientation: "landscape",
      state: "read",
      pages: pages
    };
  }

  render() {
    return (
      <div
        className="demo-block bg-lightx pt-3 pb-3 overflow-hidden"
        id="demoBlock"
      >
        <div className="container-md">
          <HTMLFlipBook
            width={450}
            height={550}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="flip-book html-book demo-book"
            style={{
              backgroundImage:
                "url(front.jpg)"
            }}
            ref={(el) => (this.flipBook = el)}
          >
            {this.state.pages}
          </HTMLFlipBook>
        </div>
      </div>
    );
  }
} 


export default PageFlip;
