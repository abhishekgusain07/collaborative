import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-blue-200">
      click <Link href="/documents/342"><span className="text-blue-500 underline ">&nbsp;here&nbsp;</span></Link> to go to the document
    </div>
  )
}

export default Home;