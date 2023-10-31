import React from 'react'

export default function SocialContactFloating() {
  return (
    <div className="flex flex-col gap-y-2 fixed bottom-4 right-4 z-40">
    <a
      href="https://page.line.me/448yyxgh"
      rel="nofollow"
      target="_blank"
    >
      <img
        src="/logo/codework-line-logo-v1.png"
        className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] z-50"
      />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61551048177724"
      rel="nofollow"
      target="_blank"
    >
      <img
        src="/logo/codework-fb-logo-v1.png"
        className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]"
      />
    </a>
  </div>
  )
}
