import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white">💻 Profile</div>
      <div className="p-2 rounded-2xl bg-white dark:bg-zinc-700 mb-4">
        <div className="flex items-center gap-2">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            alt="profile_image"
            className="relative"
          />
          <div className="h-fit dark:text-white">
            <div className=" text-xl font-bold">
              {CONFIG.profile.name}
            </div>
            <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">
              {CONFIG.profile.role}
            </div>
            <div className="text-sm">{CONFIG.profile.bio}</div>
          </div>
        </div>

      </div>
	  <div className="p-0 rounded-2xl bg-white dark:bg-zinc-700 mb-6">
	  <div className="h-fit dark:text-white">
        { <div className="flex">

          {CONFIG.profile.twitter && (
            <a
              href={`https://www.twitter.com/${CONFIG.profile.twitter}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineTwitter className="text-2xl flex-shrink-0" />
            </a>
          )}
		  
		  {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/company/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiFillLinkedin className="text-2xl flex-shrink-0" />
            </a>
          )}
		  
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineMail className="text-2xl flex-shrink-0" />
            </a>
          )}


        </div> }
		</div>
		</div>
    </div>
  )
}

export default MobileProfileCard
