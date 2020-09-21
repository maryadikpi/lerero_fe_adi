import Header from "../components/header";

const Dashboard = ({ name, bio, blog }) => (
  <>
    <Header />
    <h1> {name} </h1>
    <p>{bio}`}</p>
    <p>{`Blog : ${blog}`}</p>
  </>
);

Dashboard.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/chalidade");
  const user = await res.json();

  return user;
};

export default Dashboard;
