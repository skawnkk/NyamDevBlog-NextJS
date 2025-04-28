import { config } from 'dotenv';

config(); // <- dotenv로 .env 로드

export default {
  api: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/api-json`,
    output: {
      mode: 'tags-split',
      target: './generate/apis', // 생성될 클라이언트 파일 위치
      schemas: './generate/schemas', // DTO 분리할 폴더
      client: 'react-query',
      hooks: true,
      override: {
        mutator: {
          path: './orval.axios.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
  zod: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/api-json`,
    output: {
      mode: 'tags-split',
      client: 'zod',
      target: './generate/zod',
      fileExtension: '.zod.ts',
    },
  },
};
