import Temparature from "@/components/temparature";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  return (
    <main className='w-full h-full p-10 flex justify-center items-center flex-col'>
      <Temparature/>
      <div className="justify-center flex items-center flex-col text-xl text-white mb-10 ">
        <h1 className="text-4xl font-semibold">GitHub User List API test</h1>
        <p className="text-3xl">List and Object used</p>
      </div>

      <div className=' w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className='w-full h-28 bg-white drop-shadow-md my-3 p-5 flex justify-between items-center hover:shadow-2xl transition-all duration-500 cursor-pointer'
            >
              <Image
                src={item.avatar_url}
                alt={item.login}
                width={100}
                height={100}
                className='h-20 w-20 rounded-full hover:scale-110 transition-all duration-500'
              />
              <div className='flex flex-col justify-center items-center'>
                <Link href={item.html_url}>
                  <h1 className='text-2xl capitalize hover:text-blue-800 transition-all divide-purple-400'>{item.login}</h1>
                </Link>
                <div className="flex gap-2 capitalize text-sm ">
                  <Link className="hover:text-blue-400 transition-all duration-200" href={item.followers_url}>followers</Link>
                  <Link className="hover:text-blue-400 transition-all duration-200" href={item.following_url}>followings</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
