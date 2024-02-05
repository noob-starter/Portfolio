import React from "react";

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div
        className={"page page-cover page-cover-" + props.pos}
        ref={ref}
        data-density="hard"
      >
        <div className="page-content">
          {props.children}
        </div>
      </div>
    );
  });

export default PageCover;