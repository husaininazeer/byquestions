import { ReactElement } from "react";
import "./ListContainer.scss";
const ListContainer = ({ pageTitle }: { pageTitle: string }): ReactElement => {
  return (
    <div className="listContainer">
      <h1>{pageTitle}</h1>
      <div className="listChild">
        <div className="headingContainer">
          <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          <div className="descContainer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cum Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cum Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cum blanditiis eum dicta
              quis iusto velit, laboriosam obcaecati laudantium nostrum aliquam
              esse at minus.
            </p>
          </div>
        </div>
      </div>
      <div className="listChild">
        <div className="headingContainer">
          <h2>Heading container 2</h2>
          <div className="descContainer">
            <p>Description 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
