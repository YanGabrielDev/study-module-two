import walppaper from '../../../public/login.svg'
import loginText from '../../../public/login_text.svg'
import Image from "next/image";
import { LoginForm } from './components/LoginForm';

export default function Login() {


  return (
    <main className="grid grid-cols-12 h-full w-full">
      <div className="relative col-span-12 md:col-span-4 h-screen bg-darkGray flex justify-center items-center p-8">
        <LoginForm />
      </div>
      <div className="sm:hidden md:block col-span-8 h-screen bg-primary p-8">
        <Image
          src={loginText}
          className="w-full h-1/5"
          alt='Logo escrito venha estudar' />
        <Image
          src={walppaper}
          className="w-full h-4/5"
          alt='Garotos estudando em uma mesa' />
      </div>
    </main>
  );
}
