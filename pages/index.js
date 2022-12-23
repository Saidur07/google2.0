import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Googly : The Google 2.0</title>
        <meta name="description" content="Googly is a Google 2.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <div className=" h-screen w-screen flex items-center justify-center">
          <div className="z-10 shadow-2xl h-[80vh] w-[85vw] shadow-slate-400 border rounded-xl">
            <Main></Main>
          </div>
        </div>
      </div>
    </>
  );
}
