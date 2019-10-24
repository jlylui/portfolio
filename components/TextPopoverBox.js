import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextPopoverBox = props => {
  const textArray = props.textArray.map((text, index) => {
    let align = "left";
    let popoverAlign = "right";
    // if (index % 2 === 1) {
    //   align = "right";
    //   popoverAlign = "left";
    // }
    return (
      <div key={index} className="animated fadeInUp">
        <div className="row">
          <div className={`text-box box-${align}`}>
            <div className={`round-icon round-icon-${align}`}>
              <FontAwesomeIcon icon={text.icon} size="2x" />
            </div>
            <div
              className={`popover bs-popover-${popoverAlign} bs-popover-${popoverAlign}-docs`}>
              <div className="arrow"></div>
              <div className="popover-body">
                <h6>
                  {text.where}
                  <span className="text-muted">{text.when}</span>
                </h6>
                <p>{text.what}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="popover-box-container">{textArray}</div>;
};

export default TextPopoverBox;
