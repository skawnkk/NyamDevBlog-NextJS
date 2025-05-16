This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Deploy on Vercel

▶ https://nyam-dev-blog-next-js.vercel.app/

## Study on Blog

▶ [SSG & SSR](https://prod.velog.io/@skawnkk/Next.js-pre-rendering%EB%B0%A9%EC%8B%9D-SSG%EC%99%80-SSR)
├── app
│ ├── (login)
│ │ ├── sign-in
│ │ │ └── page.tsx
│ │ ├── sign-up
│ │ │ └── page.tsx
│ │ ├── actions.ts
│ │ └── login-form.tsx
│ ├── @modal
│ │ ├── (.)posts
│ │ │ └── [postId]
│ │ │ └── page.tsx
│ │ ├── default.tsx
│ │ └── loading.tsx
│ ├── create
│ │ └── page.tsx
│ ├── posts
│ │ ├── [postId]
│ │ │ └── page.tsx
│ │ ├── action.ts
│ │ ├── page.tsx
│ │ ├── post-list.tsx
│ │ └── post.tsx
│ ├── providers
│ │ └── query-provider.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── not-found.tsx
│ └── page.tsx
├── components
│ ├── file-uploader
│ │ ├── file-control.tsx
│ │ ├── file-preview-image.tsx
│ │ └── index.tsx
│ ├── author-info.tsx
│ ├── carousel.tsx
│ ├── date.tsx
│ ├── dialog.tsx
│ ├── drag-drop.tsx
│ ├── image.tsx
│ ├── infinite-scroll.tsx
│ ├── input.tsx
│ ├── label.tsx
│ ├── navigation.tsx
│ └── preview-image.tsx
├── generate
│ ├── apis
│ │ ├── app
│ │ │ └── app.ts
│ │ ├── auth
│ │ │ └── auth.ts
│ │ ├── chat-messages
│ │ │ └── chat-messages.ts
│ │ ├── chats
│ │ │ └── chats.ts
│ │ ├── comments
│ │ │ └── comments.ts
│ │ ├── common
│ │ │ └── common.ts
│ │ ├── posts
│ │ │ └── posts.ts
│ │ └── users
│ │ └── users.ts
│ ├── schemas
│ │ ├── accessTokenDto.ts
│ │ ├── chatMessagesControllerPaginateMessagesParams.ts
│ │ ├── chatsControllerPaginateChatParams.ts
│ │ ├── chatsModel.ts
│ │ ├── commentModel.ts
│ │ ├── commentsControllerPaginateCommentsParams.ts
│ │ ├── commonControllerPostImage200.ts
│ │ ├── commonControllerPostImageBody.ts
│ │ ├── createChatsMessageDto.ts
│ │ ├── createCommentDto.ts
│ │ ├── createPostDto.ts
│ │ ├── createUserDto.ts
│ │ ├── cursorDto.ts
│ │ ├── imageModel.ts
│ │ ├── imageModelType.ts
│ │ ├── index.ts
│ │ ├── messagesModel.ts
│ │ ├── postsControllerGetPostsParams.ts
│ │ ├── postsModel.ts
│ │ ├── postsPaginateResponseDto.ts
│ │ ├── postsPaginateResponseDtoCursor.ts
│ │ ├── updatePostDto.ts
│ │ ├── updateUserProfileDto.ts
│ │ ├── usersModel.ts
│ │ ├── usersModelNicknameAndEmail.ts
│ │ └── usersModelRole.ts
│ └── zod
│ ├── 공통
│ ├── auth
│ │ └── auth.zod.ts
│ ├── chat-messages
│ │ └── chat-messages.zod.ts
│ ├── chats
│ │ └── chats.zod.ts
│ ├── comments
│ │ └── comments.zod.ts
│ ├── common
│ │ └── common.zod.ts
│ ├── posts
│ │ └── posts.zod.ts
│ └── users
│ └── users.zod.ts
├── lib
│ ├── auth
│ ├── utils
│ │ ├── cn.ts
│ │ ├── middleware.ts
│ │ └── toggle-dialog.ts
│ └── const.ts
├── posts
│ └── pre-rendering.md
├── public
│ ├── images
│ │ └── profile.jpg
│ ├── favicon.ico
│ └── vercel.svg
├── styles
│ ├── components
│ │ └── ui
│ │ ├── avatar.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ └── carousel.tsx
│ ├── lib
│ │ └── utils.ts
│ ├── Home.module.css
│ └── utils.module.css
├── .eslintrc.json
├── components.json
├── next.config.mjs
├── orval.axios.ts
├── orval.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── yarn.lock
