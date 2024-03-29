import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class EachResident extends Component {
  // https://react-bootstrap.github.io/components/modal/
  render() {
    const res_image = require("../../Assets/img/Members Photos/" + this.props.photo);
    return (

      <div className="col-xl-4" style={{ padding: "30px" }}>
        <img
          // src={require("../../Assets/img/Members Photos/" + {photo})}
          src={res_image.default}
          height="250px"
          alt={""}

          // width="250px"
          // style={{ marginLeft: "120px", objectFit: "cover" }} // Could be 50px also
          style={{ marginLeft: "120px" }} // Could be 50px also
        ></img>
        <div
          style={{
            padding: "30px 0px 30px 30px",
            marginRight: "30px",
            marginTop: "-210px",
            backgroundColor: this.props.backgroundColor,
          }}
        >
          <div style={{ marginTop: "210px", padding: "25px 30px 10px 0px" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "30px",
              }}
            >
              {this.props.name}
            </h1>
            {this.props.CompanyPosition && (
              <div>
                <h2
                  style={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "20px",
                  }}
                >
                  {this.props.CompanyPosition},{" "}
                  <a
                    href={this.props.CompanyWebsite}
                    style={{ color: "black" }}
                  >
                    {this.props.Company}
                  </a>
                </h2>
              </div>
            )}
            <h3
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: "16px",
                lineHeight:"18px",
              }}
            >
              {this.props.CODEPosition}
            </h3>
            <p>{this.props.AboutYou}</p>
            {this.props.linkedin && (
              <a href={this.props.linkedin}>
                <Button
                  style={{
                    backgroundColor: "Green",
                    padding: "10px 30px",
                    borderRadius: "15px",
                    border: "0px"
                  }}
                >
                  Connect on LinkedIn
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EachResident;
