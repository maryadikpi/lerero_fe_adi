import Header from "../components/header";

const CSS = () => (
  <>
    <Header />
    <div className="title">
      <h1> CSS </h1>
      <style jsx>
        {`
          .title {
            background: #eee;
            padding: 100px;

            text-align: center;
            transition: 100ms ease-in background;
          }

          .title:hover {
            background: $hover-color;
          }
        `}
      </style>
    </div>
  </>
);

export default CSS;
