interface HomeProps {
  email: string | null;
  username: string | null;
}

const Home = ({ email, username }: HomeProps) => {
  return (
    <div className="mx-auto w-56 mt-3">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="my-2">
        Welcome, {username ?? "Guest"}
        {email}!
      </p>
      <button className="px-2 py-1 bg-black text-white active:scale-95 duration-200">
        Fetch User Data
      </button>
    </div>
  );
};

export default Home;
