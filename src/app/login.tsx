import Button from "@/components/button";
import Input from "@/components/input";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-backgroundLogin">
      <div>
        <Image
          className="mt-6 ml-8"
          src="favicon.svg"
          alt="Logo pediu chegou"
          width={169}
          height={50}
        />
        <Image
          className=""
          src="lanche1.svg"
          alt="lanche1"
          width={444}
          height={415}
        />
      </div>
      <div className="w-auto flex justify-center items-center mt-16">
        <h3 className=" w-64 text-textLogin text-4xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-300">
          Pediu Chegou
          <div className="bg-fill h-1 w-36 mt-1 ml-28"></div>
        </h3>
      </div>
      <div className="w-auto flex justify-center items-center mt-6">
        <p className="text-gray-500 ">
          O seu cardápio digital totalmente{" "}
          <strong className="text-gray-600 font-bold">GRATUITO</strong>
        </p>
      </div>

      <div className="w-auto flex justify-center items-center">
        <Input
          label="Digite seu e-mail"
          placeholder="exemploseuemail@aqui.com"
          htmlFor="email"
          className="mt-10 w-full]"
          value={""}
          onChange={(e) => e}
        />
      </div>

      <div className="w-auto flex justify-between items-center pl-5 pr-5 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="114"
          height="17"
          viewBox="0 0 114 17"
          fill="none"
        >
          <path
            d="M49.7885 16.0049C42.2885 16.0049 28.7067 16.0049 24.2885 16.0049C19.8702 16.0049 16.2885 12.4232 16.2885 8.00492C16.2885 3.58664 19.8702 0.00492092 24.2885 0.00492092C29.2885 0.00492092 41.7885 0.00483522 49.7885 0.00492086C53.9398 0.0049653 57.7885 3.85349 57.7885 8.00482C57.7885 12.1562 53.9398 16.0049 49.7885 16.0049Z"
            fill="#FFD7D5"
          />
          <path
            d="M33.4999 16C25.9999 16 12.4182 16 7.99988 16C3.5816 16 -0.00012207 12.4183 -0.00012207 8.00004C-0.00012207 3.58176 3.5816 3.81098e-05 7.99988 3.81098e-05C12.9999 3.81098e-05 25.4999 -4.75965e-05 33.4999 3.80487e-05C37.6512 8.24914e-05 41.4999 3.84861 41.4999 7.99994C41.4999 12.1513 37.6512 16 33.4999 16Z"
            fill="#FF001F"
          />
          <circle cx="77.7885" cy="8" r="8" fill="#FFD7D5" />
          <circle cx="106" cy="8" r="8" fill="#FFD7D5" />
        </svg>

        <Button disabled={false} icon={<ChevronRight size={32} />} />
      </div>
    </div>
  );
}
