import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptPal is an AI prompt sharing network that's like a pinata for
        your mind - you never know what gems you'll uncover. Spin the wheel of
        inspiration, forge your masterpiece, and pass on the creative confetti!
      </p>
      <Feed />
    </section>
  );
}

export default Home
