import * as React from "react";

function Codefavicon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path d="M3.7 3.8C0 7.9 2.6 14 8 14c3.6 0 6-2.3 6-5.9C14 2.7 7.2-.1 3.7 3.8zM11.5 6c1.8 2 1.8 2.1.1 3.8-1.7 1.6-1.8 1.6-1.2-.5 1-3.2-1.1-3.7-2.3-.6-1 2.6-1.1 2.6-.6.3.2-1.4.5-3.1.5-3.8 0-1.8 1.4-1.5 3.5.8zM5.7 8c0 2.8-.2 2.9-1.5 1.6-1.3-1.2-1.3-1.8-.2-3C5.7 4.5 5.7 4.5 5.7 8z" />
    </svg>
  );
}

const MemoCodefavicon = React.memo(Codefavicon);
export default MemoCodefavicon;
