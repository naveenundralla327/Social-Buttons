const Button = (props) => {
  //  Write your code here.
  const { className, button } = props;
  return <button className={`button${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-button-container">
    <div className="description-container">
      <h1 className="container-heading">Social Buttons</h1>

      <div className="button-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="Comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
