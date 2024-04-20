import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";


import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();

  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      router.push('/login')
    }

    router.push('/');
  }, [, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-zinc-900
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      ">
        <FaFeather size={24} color="white" />
      </div>
      <div className="
        mt-6
        hidden 
        lg:block 
        px-10
        py-2
        rounded-full
        bg-zinc-900
        hover:bg-opacity-90 
        cursor-pointer
      ">
        <p 
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        ">
          post feeback
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
