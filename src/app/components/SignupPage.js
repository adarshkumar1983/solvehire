import Head from 'next/head';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <div className="w-full h-1/2 flex justify-center items-center bg-[rgb(37,0,91)] text-white">
      <Head>
        <title>Signup Page</title>
      </Head>
      
      <div className="w-full max-w-lg p-8 bg-[rgb(37,0,91)] rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <div className="relative flex">
            <Image
              src="/emoji_female.png"
              alt="User 2"
              width={50}
              height={50}
              className="rounded-full border-2 border-white absolute left-6 sm:left-8 z-0"
            />
            <Image
              src="/emoji_male.png"
              alt="User 1"
              width={50}
              height={50}
              className="rounded-full border-2 border-white relative z-10"
            />
          </div>
          <span className="font-semibold mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">
            + Trusted by over 500+ users
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        Sign up to start{' '}
          <span
            className="relative inline-block text-white"
            style={{
              backgroundImage: "url('background.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              padding: "2px 8px"
            }}
          >
         sourcing
          </span>
        </h1>
        
        <input 
  type="email" 
  placeholder="Your email" 
  className="w-full p-3 rounded-md text-white border border-white bg-transparent focus:outline-none focus:ring-1"
/>

        <button className="mt-4 w-full text-black bg-white bg-[rgb(37,0,91)] rounded-md py-3 px-6 hover:bg-purple-200 transition duration-300">
          Sign up
        </button>

        <p className="mt-6 text-gray-300 text-center max-w-md">
          Ready to experience AI-powered hiring? Sign up now and start sourcing top talent effortlessly.
        </p>
      </div>
    </div>
  );
}
