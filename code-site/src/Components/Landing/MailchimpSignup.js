import React from "react";
import MailchimpReact from "./ChimpUI";

export default (props) => (
  <div>
    {console.log(props.tagline)}
    <MailchimpReact
      tagline={props.tagline}
      action="https://babsoncode.us19.list-manage.com/subscribe/post?u=3d116a6f505eae239db9472b2&id=d5a1276109"
    />
  </div>
);
