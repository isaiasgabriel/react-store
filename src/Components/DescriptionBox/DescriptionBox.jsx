import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descrição</div>
        <div className="descriptionbox-nav-box fade">Reviews (111)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Phasellus vehicula mollis est, ac porta ligula
          fermentum non. Duis iaculis ante ac posuere condimentum. Ut ultricies,
          ex nec facilisis sodales, neque enim rutrum quam, nec semper nibh
          lectus non elit.
        </p>
        <p>
          Pellentesque faucibus laoreet neque sed tempus. Ut id ex molestie,
          ultrices risus quis, porttitor lorem. Aenean fermentum ante et lectus
          venenatis, eget porta sapien facilisis. Curabitur vitae justo enim.
          Donec tristique velit non nisl pellentesque, sit amet feugiat enim
          elementum.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
