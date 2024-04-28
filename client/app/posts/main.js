import { FaMicrophone } from 'react-icons/fa'
import Post from '/components/post'
import { posts } from '/utils/data'

const Main = () => {
  return (
    <main className="py-48 w-[85%] mx-auto">
      <div className="px-10 py-5 border-4 border-purple500 drop-shadow-md rounded-[30px] flex justify-between">
        <div className="w-14 h-14 bg-purple500 rounded-full"></div>
        <input
          type="text"
          placeholder="Share your Problems and Ideas"
          className="w-10/12 bg-black text-white text-xl px-3"
        />
        <FaMicrophone className="text-purple500 opacity-75" size={56} />
      </div>
      {/* posts */}
      <section className="pt-24 pb-10">
        {posts.map((data, i) => (
          <Post key={i} {...data} />
        ))}
      </section>
      <div className="flex w-max gap-6 ml-auto mr-[9%]">
        <div className="w-5 h-5 bg-purple500 rounded-full"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-60"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-50"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-30"></div>
      </div>
    </main>
  )
}

export default Main
